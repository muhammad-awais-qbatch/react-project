import "./Navbar.scss";
import { Outlet, Link, NavLink } from "react-router-dom";
import "flowbite";
import "boxicons";

function LinkButton(props) {
  return (
    <NavLink className={props.className} to={props.link}>
      {props.text}
      {props.children}
    </NavLink>
  );
}
function NavButton(props) {
  return (
    <>
      <LinkButton
        className="py-5 px-3 text-navButtonColor hover:text-navHoverColor"
        link={props.link}
        text={props.text}
        children={props.children}
      ></LinkButton>
    </>
  );
}
function DropButton(props) {
  return (
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle={props.id}
      class="text-navButtonColor  hover:text-navHoverColor px-5 py-3 text-center inline-flex items-center"
      type="button"
    >
      {props.text}{" "}
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
  );
}
function DropItem(props) {
  return (
    <li>
      <LinkButton
        text={props.text}
        link={props.link}
        className="block px-4 py-2 text-navButtonColor hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      />
    </li>
  );
}
function DropDown(props) {
  return (
    <>
      <DropButton text={props.text} id={props.id} />
      <div
        id={props.id}
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {Object.keys(props.items).map((key) => (
            <DropItem text={key} link={props.items[key]} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <nav>
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div>
                <Link
                  to="/"
                  class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    class="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </Link>
              </div>

              {/* <!-- primary nav --> */}
              <div class="hidden md:flex items-center space-x-1">
                <NavButton text="Pricing" link="/pricing" />
                <NavButton text="About" link="/about" />
                <NavButton text="Blog" link="/blog" />
                <NavButton text="Wall of Love" link="/wol" />
                <DropDown
                  text="Resources"
                  id="dropdown1"
                  items={{ Item1: "/item1", Item2: "/item2", Item3: "/item3" }}
                />
              </div>
            </div>
            {/* <!-- secondary nav --> */}
            <div class="hidden md:flex items-center space-x-1">
              <NavButton text="Sign in" link="/signin" />
              <NavButton link="/rd" text="Request Demo">
                <box-icon name="right-arrow-alt" color="#2374e7"></box-icon>
              </NavButton>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
