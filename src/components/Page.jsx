import "./Page.scss";

export default function Page(props) {
  return (
    <>
      <title>{props.pageName}</title>
      <h1>{props.pageName}</h1>
    </>
  );
}
