import Link from 'next/link';

interface NavBarProps {
  activeTab: string;
}

const NavBar: React.FC<NavBarProps> = ({ activeTab }) => {
  return (
    <nav style={{ height: '100vh', width: '200px', position: 'fixed', left: 0, top: 0, backgroundColor: '#333', padding: '20px' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link href="/" style={{ color: activeTab === 'home' ? '#fff' : '#ccc', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" style={{ color: activeTab === 'projects' ? '#fff' : '#ccc', textDecoration: 'none' }}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/about" style={{ color: activeTab === 'about' ? '#fff' : '#ccc', textDecoration: 'none' }}>
            About
          </Link>
        </li>
        <li>
          <Link href="/resume" style={{ color: activeTab === 'resume' ? '#fff' : '#ccc', textDecoration: 'none' }}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
