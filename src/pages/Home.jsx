import BoxIcon from "../components/BoxIcon";
import TextVideo from "../components/TextVideo";
import "./Home.scss";

export default function Home() {
  return (
    <div class="home-div">
      <TextVideo
        heading="Create stunning web experiences"
        text="Our landing page templates works on all devices, so you have to only set
        it once."
        b1text="Request Demo"
        b1link=""
        b2text="Explore Product"
        b2link=""
        videolink="https://www.google.com/search?newwindow=1&sca_esv=91e3e3360bc36966&sca_upv=1&q=video+link&tbm=vid&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWfbQph1uib-VfD_izZO2Y5sC3UdQE5x8XNnxUO1qJLaQR2rwhLa89xym2ORbEZb-gP1zIcrSJSb5m5VLWXlSjIaIG1x3OUX72o1bhPlysQIw2wexIfjr9hIq56rRLI7yjvrm-eU2rldmMeoWofpb8CbZ_Suo&sa=X&ved=2ahUKEwi2grqNsL2IAxUEB9sEHVGSB2wQ0pQJegQIDRAB&biw=1440&bih=703&dpr=2#"
      />
      <BoxIcon />
    </div>
  );
}
