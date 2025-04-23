import React from "react";
export default function FooterComponent() {
  return (
    <>
      <div class="bg-blue text-dark p-3 d-flex justify-content-around">
        <div>
          <div>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
              <li>
                <a href="/project">Projects</a>
              </li>
              <li>
                <a href="/terms">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025.All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
