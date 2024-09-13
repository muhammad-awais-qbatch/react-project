import "boxicons";
import "./BoxIcon.scss";
import HeadingBox from "./HeadingBox";

function Onebox(props) {
  return (
    <div class="bg-white rounded-lg  p-4 hover:shadow-lg transition duration-300">
      <span class="circle">
        <box-icon name={props.icon} type="logo" color="#fff9f9"></box-icon>
      </span>
      <HeadingBox heading={props.heading} text={props.text} />
    </div>
  );
}

export default function BoxIcon(props) {
  return (
    <>
      {/* <div id="line"></div> */}
      <div class="bg-white box-icon">
        {/* <div id="afterline"></div> */}
        <div class=" ml-20 mr-20 pt-20">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-20 ml-20">
            <Onebox
              icon="file-blank"
              heading="Robust Workflow"
              text="lorem ipsum urfrw fr f erf rejgfrbfjre fbre fj rejf re fre fre f"
            />
            <Onebox
              icon="postgresql"
              heading="Robust Workflow"
              text="lorem ipsum urfrw fr f erf rejgfrbfjre fbre fj rejf re fre fre f"
            />
            <Onebox
              icon="mongodb"
              heading="Robust Workflow"
              text="lorem ipsum urfrw fr f erf rejgfrbfjre fbre fj rejf re fre fre f"
            />
            <Onebox
              icon="meta"
              heading="Robust Workflow"
              text="lorem ipsum urfrw fr f erf rejgfrbfjre fbre fj rejf re fre fre f"
            />
            <Onebox
              icon="gmail"
              heading="Robust Workflow"
              text="lorem ipsum urfrw fr f erf rejgfrbfjre fbre fj rejf re fre fre f"
            />
            <Onebox
              icon="flask"
              heading="Robust Workflow"
              text="lorem ipsum urfrw fr f erf rejgfrbfjre fbre fj rejf re fre fre f"
            />
          </div>
        </div>
      </div>
    </>
  );
}
