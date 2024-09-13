export default function HeadingBox(props) {
  return (
    <>
      <h2 class="text-xl font-bold mb-2">{props.heading}</h2>
      <p class="text-gray-600">{props.text}</p>
    </>
  );
}
