import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <header
      class="grid p-8 bg-[orange] grid-cols-12 items-center gap-x-8 rounded-b-[-500px] border-b-2 border-black fixed z-10"
    >
      <a routerLink="">
        <img src="./assets/fulanito-travel.png" alt="fulanito-travel" />
      </a>
      <div class="whitespace-nowrap col-span-2 font-bold">
        <h1 class=" text-4xl">FULANITO TRAVEL</h1>
        <h4>porque viajar es mejor con fulanito</h4>
        <h4 class="text-end">-fulanito</h4>
      </div>
    </header>
    <main class="relative min-h-screen overflow-hidden max-w-full ">
      <div class="absolute w-full grid place-items-center h-full">
        <div class="border border-black  rotate-12 drop-shadow-2xl w-1/2">
          <img
            src="./assets/paisaje-bonito.jpg"
            alt="paisaje bonito"
            class="w-full border-[2rem] border-[white]"
          />
        </div>
        <div
          class="border border-black  rotate-24 drop-shadow-2xl w-1/2 translate-y-[-50%]"
        >
          <img
            src="./assets/paisaje-bonito.jpg"
            alt="paisaje bonito"
            class="w-full border-[2rem] border-[white]"
          />
        </div>
        <div
          class="border border-black  rotate-12 drop-shadow-2xl w-1/2 translate-y-[-80%]"
        >
          <img
            src="./assets/paisaje-bonito.jpg"
            alt="paisaje bonito"
            class="w-full border-[2rem] border-[white]"
          />
        </div>
      </div>

      <div class="absolute w-full h-full grid items-end">
        <!-- <div>juan asdfasfdasdfasdf</div> -->
        <img
          src="./assets/paisaje-bonito.jpg"
          alt="paisaje bonito"
          class="absolute animate-[place_3s_ease-in-out_forwards] min-h-screen min-w-[100vw]"
        />
        <img
          src="./assets/tourist.png"
          alt="turistas"
          class="absolute animate-[tourist_2s_ease-in-out_forwards] w-[30%]"
        />
        <img
          src="./assets/plane.png"
          alt="plane"
          class="absolute animate-[plane_2s_ease-in-out_forwards] w-1/2"
        />
        <img
          src="./assets/fulanito.png"
          alt="fulanito"
          class=" absolute animate-[fulanito_2s_ease-in-out] w-[5%] left-[49vw] bottom-[7.5vw] rotate-[30deg]"
        />
      </div>
    </main>
    <footer></footer>
  `,
  styles: [``],
})
export class HomeComponent {
  constructor() {}
}
