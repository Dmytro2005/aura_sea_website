const fs = require('fs');
const path = require('path');

const files = [
  'client/src/pages/About.tsx',
  'client/src/pages/Contact.tsx',
  'client/src/pages/Seafarers.tsx',
  'client/src/pages/ShipOwners.tsx',
  'client/src/pages/Vacancies.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Add framer-motion import if not exists
  if (!content.includes('framer-motion')) {
    content = content.replace(/import .* from "lucide-react";\n/, match => match + 'import { motion } from "framer-motion";\n');
    changed = true;
  }

  // Create MotionCard if Card is imported but MotionCard is not defined
  if (content.includes('import { Card') && !content.includes('MotionCard')) {
    content = content.replace(/import { motion } from "framer-motion";\n/, match => match + '\nconst MotionCard = motion.create(Card);\n');
    changed = true;
  }

  // Replace <Card className="... scroll-animate ..." -> <MotionCard
  content = content.replace(/<Card\s+([^>]*?)className=(["']{1,2}|`)([^>]*?)scroll-animate(-delay-\d+|-scale|-right|-left)?([^>]*?)(["']{1,2}|`)([^>]*?)>/g, (match, before, quote1, classBefore, delayType, classAfter, quote2, after) => {
    let delay = 0.1;
    let y = 40;
    let x = 0;
    let scale = 1;
    let initScale = 1;
    
    if (delayType) {
      if (delayType.includes('delay')) {
        const d = parseInt(delayType.split('-').pop());
        delay = 0.1 + (d * 0.2); // Typical stagger 0.1, 0.3, 0.5...
      }
      if (delayType.includes('scale')) {
        initScale = 0.95;
        y = 0;
      }
      if (delayType.includes('right')) {
        x = -30;
        y = 0;
      }
      if (delayType.includes('left')) {
        x = 30;
        y = 0;
      }
    }
    
    // Clean up className by joining classBefore and classAfter
    const cleanClass = (classBefore + " " + classAfter).replace(/\s+/g, ' ').trim();
    
    changed = true;
    
    return `<MotionCard
  initial={{ opacity: 0, y: ${y}, x: ${x}, scale: ${initScale} }}
  whileInView={{ opacity: 1, y: 0, x: 0, scale: ${scale} }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: ${delay}, ease: "easeOut" }}
  ${before}className=${quote1}${cleanClass}${quote2}${after}>`;
  });

  // Replace </Card> with </MotionCard> if we replaced the opening tag!
  // Wait, if it wasn't a MotionCard previously, we MUST replace </Card> to </MotionCard>.
  // But ONLY for the ones that were changed. We'll do a simple trick: replace all `</Card>` with `</MotionCard>` 
  // only if there are `<MotionCard` tags. But what if there are un-animated `<Card>`s?
  // Let's look at the DOM. Almost all Cards have `scroll-animate`. We can run a regex.
  // Actually, instead of regex for DOM manipulation, I should use manual replacement for structural tags!
});
