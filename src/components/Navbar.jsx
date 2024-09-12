import "./Navbar.scss";
// import tailwindcss
import { Outlet, Link } from "react-router-dom";

function LinkButton(props) {
  return (
    <Link className={props.className} to={props.link}>
      {props.text}
    </Link>
  );
}
function NavButton(props) {
  return (
    <LinkButton className="nav-button" link={props.link} text={props.text} />
  );
}
function NavItem(props) {
  return (
    <li>
      <NavButton link={props.link} text={props.text} />
    </li>
  );
}
function DropButton(props) {
  return <LinkButton className="drop-btn" text={props.text + "▾"} />;
}
function DropDown(props) {
  return (
    // <li className="drop-down">
    //   <DropButton text={props.text} />
    //   <div class="dropdown-content">
    //     <LinkButton link="" text="Link 1" />
    //     <LinkButton link="" text="Link 2" />
    //     <LinkButton link="" text="Link 3" />
    //   </div>
    // </li>
    <li>
      <div class="relative inline-block text-left">
        <div>
          <button
            type="button"
            class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Options
            <svg
              class="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
        <div
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              License
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                class="block w-full px-4 py-2 text-left text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </li>
  );
}

function ArrowButton(props) {
  return (
    <li>
      {/* <span> */}
      <LinkButton
        className="arrow-button-text"
        text={props.text}
        link={props.link}
      />
      <LinkButton className="arrow-button" text={"->"} link={props.link} />
      {/* </span> */}
    </li>
  );
}
export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          {/* <div> */}
          <NavItem text="Logo" link="/" />
          <NavItem text="Pricing" link="/pricing" />
          <NavItem text="About" link="/about" />
          <NavItem text="Blog" link="/blog" />
          <NavItem text="Wall of Love" link="/wol" />
          <DropDown text="Resources" />
          {/* </div> */}
          {/* <div class="left-nav"> */}
          {/* <div> */}
          <NavItem text="Sign in" link="/signin" />
          <ArrowButton text="Request Demo" />
          {/* </div> */}
          {/* </div> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
