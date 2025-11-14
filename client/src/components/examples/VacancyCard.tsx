import VacancyCard from '../VacancyCard';

export default function VacancyCardExample() {
  return (
    <div className="maritime-gradient p-8">
      <div className="max-w-md">
        <VacancyCard
          title="Chief Officer"
          vesselType="Oil/Chemical Tanker"
          salary="$6,000 - $8,000/month"
          contractLength="6 months"
          description="Experienced Chief Officer needed for modern chemical tanker fleet. Must hold valid STCW certificates and have minimum 2 years experience in similar position."
          onApply={() => console.log('Apply clicked')}
        />
      </div>
    </div>
  );
}
