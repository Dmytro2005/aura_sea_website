import Layout from '../Layout';
import { Card } from '@/components/ui/card';

export default function LayoutExample() {
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-12 text-center">
            <h1 className="font-headline text-3xl font-bold mb-4">Page Content Goes Here</h1>
            <p className="text-muted-foreground">
              This demonstrates the Layout component with Header and Footer
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
