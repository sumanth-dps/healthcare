import Layout from "./components/Layout";
import DashboardMainContent from "./components/DashboardMain/DashboardMainContent";
import CalendarView from "./components/DashboardMain/CalendarView";
import UpcomingSchedule from "./components/DashboardMain/UpcomingSchedule";

const App = () => (
  <Layout>
    <div className="grid grid-rows-2  md:grid-cols-2">
      <div className="bg-white">
        <DashboardMainContent />
      </div>
      <div className="flex flex-col flex-1">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  </Layout>
);

export default App;
