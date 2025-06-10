
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import ResourceDetailPage from './pages/ResourceDetailPage';
import ContributePage from './pages/ContributePage';
import TemplatesPage from './pages/TemplatesPage';
import ToolsPage from './pages/ToolsPage';
import LearningPage from './pages/LearningPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import JobBoardPage from './pages/JobBoardPage';
import SalaryGuidePage from './pages/SalaryGuidePage';
import AboutPage from './pages/AboutPage';
import RegisterPage from './pages/RegisterPage';
import SigninPage from './pages/SigninPage';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/:id" element={<ResourceDetailPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
          <Route path="/jobs" element={<JobBoardPage />} />
          <Route path="/salary-guide" element={<SalaryGuidePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;