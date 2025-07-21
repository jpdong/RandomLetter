import React from 'react';
import Link from 'next/link';
import NavBar from '../../src/components/elements/NavBar';
import Footer from '../../src/components/elements/Footer';
import Container from '../../src/components/layout/Container';

export const metadata = {
  title: 'Technology Multiple Accounts | Multi Run',
  description: 'Explore the latest advancements in technology, focusing on multiple accounts and multi-run capabilities. Dive into the world of app virtualization, parallel apps, and more.',
};

const technologyProjects = [
  {
    id: 'virtualapp',
    name: 'VirtualApp',
    description: 'A powerful Android app virtualization framework that allows running multiple app instances.',
    github: 'asLody/VirtualApp',
    stars: '8.5k',
    language: 'Java',
    category: 'App Virtualization'
  },
  {
    id: 'va-exposed',
    name: 'VirtualApp + Xposed',
    description: 'Enhanced VirtualApp with Xposed framework integration for advanced app manipulation.',
    github: 'android-hacker/VirtualXposed',
    stars: '13.2k',
    language: 'Java/C++',
    category: 'Framework Integration'
  },
  // {
  //   id: 'parallel-space',
  //   name: 'Parallel Space',
  //   description: 'Open source implementation of parallel app technology for Android devices.',
  //   github: 'xx-dev/ParallelSpace',
  //   stars: '2.1k',
  //   language: 'Java',
  //   category: 'Parallel Apps'
  // },
  // {
  //   id: 'epic',
  //   name: 'Epic',
  //   description: 'A modern Android app virtualization solution with enhanced security and performance.',
  //   github: 'tiann/epic',
  //   stars: '1.8k',
  //   language: 'Java/C++',
  //   category: 'App Virtualization'
  // },
  // {
  //   id: 'android-container',
  //   name: 'Android Container',
  //   description: 'Lightweight container technology for running isolated Android applications.',
  //   github: 'container4android/AndroidContainer',
  //   stars: '956',
  //   language: 'C++/Java',
  //   category: 'Containerization'
  // },
  // {
  //   id: 'dual-boot',
  //   name: 'DualBootPatcher',
  //   description: 'Advanced dual boot solution allowing multiple Android ROMs on a single device.',
  //   github: 'chenxiaolong/DualBootPatcher',
  //   stars: '1.2k',
  //   language: 'C++',
  //   category: 'System Level'
  // },
  // {
  //   id: 'shelter',
  //   name: 'Shelter',
  //   description: 'Isolate and clone apps using Android work profile for enhanced privacy.',
  //   github: 'PeterCxy/Shelter',
  //   stars: '2.8k',
  //   language: 'Java',
  //   category: 'Privacy & Security'
  // },
  // {
  //   id: 'magisk-modules',
  //   name: 'Magisk Hide',
  //   description: 'Systemless root solution with app hiding capabilities for sensitive applications.',
  //   github: 'topjohnwu/Magisk',
  //   stars: '35k',
  //   language: 'C++/Java',
  //   category: 'Root & Hide'
  // },
  // {
  //   id: 'app-ops',
  //   name: 'App Ops',
  //   description: 'Permission management framework for controlling app access and behavior.',
  //   github: 'rikka/AppOps',
  //   stars: '1.5k',
  //   language: 'Java',
  //   category: 'Permission Control'
  // },
  // {
  //   id: 'island',
  //   name: 'Island',
  //   description: 'App isolation solution using Android work profile with enhanced management features.',
  //   github: 'oasisfeng/island',
  //   stars: '3.1k',
  //   language: 'Java',
  //   category: 'App Isolation'
  // }
];

const TechnologyPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="page-header">
              <h1 className="page-title">Android Virtualization Technology</h1>
              <p className="page-subtitle">
                Explore the cutting-edge open source technologies that power app virtualization, 
                parallel spaces, and multi-account management on Android.
              </p>
            </div>
            
            <div className="app-grid">
              {technologyProjects.map((project) => (
                <Link 
                  key={project.id} 
                  href={`/technology/${project.id}`}
                  className="tech-card"
                >
                  <div className="tech-header">
                    <div>
                      <h3 className="tech-title">{project.name}</h3>
                      <span className="tech-category">
                        {project.category}
                      </span>
                    </div>
                    <span className="tech-stars">⭐ {project.stars}</span>
                  </div>
                  <p className="tech-description">{project.description}</p>
                  <div className="tech-footer">
                    <span className="tech-language">{project.language}</span>
                    <span className="app-link">Explore →</span>
                  </div>
                  <div className="tech-github">
                    📁 {project.github}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default TechnologyPage;