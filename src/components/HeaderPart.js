import React from 'react'

function HeaderPart() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <div class="navbar_logo">
                <a class="navbar-brand navbr" href="/">
                  ADJ Coding & SkillSet
                </a>
              </div>
              <button
                class="navbar-toggler bg-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="" id="navbarTogglerDemo02">
                <ul class="links-list navbar-nav">
                  <li class="nav-item">
                    <a href="/" class="navbr nav-link active">
                      {" "}
                      Home{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class="navbr nav-link">
                      {" "}
                      Products{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class="navbr nav-link">
                      {" "}
                      Contacts{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class="navbr nav-link">
                      {" "}
                      About Us{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
}

export default HeaderPart;
