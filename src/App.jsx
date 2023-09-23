import "./App.css";
import MapSvg from "./MapSvg";

export default function App() {
  return (
    <>
      <section
        className="relative flex items-center justify-center overflow-hidden"
        id="#"
      >
        <video
          src="../farmer.mp4"
          autoPlay
          muted
          loop
          className="w-screen h-screen object-cover top-0 left-0"
        ></video>
      </section>
      <div className="absolute top-1/3 left-2/4 -translate-x-1/2 bg-slate-500 p-5 bg-opacity-50">
        <p className="text-6xl text-slate-200">Gravitasse Coffee</p>
      </div>
      <section
        className="min-h-screen bg-slate-900 text-slate-200 p-40"
        id="about"
      >
        <h2 className="text-7xl mb-16">About Us</h2>
        <div className="flex gap-20">
          <div className="basis-3/6 text-lg">
            <p className="mb-5">
              Arabica Acerbic Affogato Aftertaste Aged Americano And, Aroma
              percolator single java Aromatic in, aftertaste ut extra redeye.
              Blue plunger Cappuccino pumpkin at so rich au turkish Au Aroma
              barista carajillo, instant java brewed shop extraction in go
              caramelization spice frappuccino kopi-luwak. Id ristretto est Con
              Aromatic panna, affogato macchiato shot cortado caramelization,
              aged cultivar chicory and. Mug spoon aroma iced mountain eu
              cappuccino And as At, Acerbic dark aftertaste Beans Brewed breve
              caffeine and steamed filter, Americano roast macchiato Bar so au
              sweet panna.
            </p>
            <p className="mb-10">
              To coffee Blue java cup Aroma beans sweet Affogato Black ristretto
              barista trifecta Americano dark, single aroma whipped macchiato
              shop Beans Barista est french foam Au origin. Ut viennese As
              Aftertaste americano turkish black Acerbic body caramelization
              aged, spoon trade decaffeinated press whipped Barista au.
              Percolator aroma siphon beans grinder redeye et grounds aged Bar,
              mug that trade mazagran irish viennese Barista and.
            </p>
            <p className="mb-5">
              Barista robust brewed seasonal dripper Arabica fair Black mocha
              foam beans Aged, mazagran Con affogato siphon steamed organic aged
              cortado iced bar And spice caffeine, cultivar macchiato crema
              wings decaffeinated ut grinder body rich Brewed dark.
            </p>
          </div>
          <div className="object-cover basis-3/6 -mt-10">
            <img src="../imgs/pexels-hannoversche-kaffeemanufaktur-12088956.jpg"></img>
          </div>
        </div>
      </section>
      <section
        className="min-h-screen bg-slate-900 text-slate-200 pt-40 px-40"
        id="map"
      >
        <h2 className="text-7xl mb-16">Coffee Map</h2>
        <div className="flex justify-center items-center">
          <MapSvg className=""></MapSvg>
        </div>
      </section>
    </>
  );
}
