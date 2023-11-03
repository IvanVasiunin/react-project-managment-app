import { useState } from 'react';
import ProjectSidebar from './ProjectsSidebar';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
    </main>
  );
}

export default App;