import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; Yuri Kanagawa. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/privacy_policy">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
