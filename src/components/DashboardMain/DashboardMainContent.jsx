import AnatomySection from "./AnatomySection";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  return (
    <main className="p-6 grid ">
      <div className="flex flex-col items-center">
        <AnatomySection />
        <ActivityFeed />
      </div>
    </main>
  );
};

export default DashboardMainContent;
