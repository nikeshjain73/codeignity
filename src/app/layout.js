// src/app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/custom.css';
import './globals.css';

export const metadata = {
  title: 'CodeIgnity: Igniting Solutions, Accelerating Growth',
  description: 'CodeIgnity sparks widespread digital transformation through innovative solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}