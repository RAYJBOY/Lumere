import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About / Logo */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Lumeré</h3>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-md font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:underline">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:underline">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h4 className="text-md font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.instagram.com/lumereleicester/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@lumereleicester"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                TikTok
              </a>
            </li>
            <li>
              <a href="mailto:support@lumere.com" className="hover:underline">
                Email Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-6 py-4 text-center text-sm">
        &copy; {currentYear} Lumere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
