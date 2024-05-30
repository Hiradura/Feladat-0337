// File: index.html
// Author: Orosz Oliver
// Copyright: 2024, Orosz Oliver
// Group: Szoft I/N/1
// Date: 2024-05-30
// Github: https://github.com/Hiradura/
// Licenc: GNU GPL
class Ellipsoid {
    cheese?: HTMLInputElement | null;
    cheesed?: HTMLInputElement | null; 
    cheesee?: HTMLInputElement | null;
    cheesef?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor(){
        this.bindHtml();
        this.handleEvent();
    }
    bindHtml(){
        this.cheese = document.querySelector("#cheese");
        this.cheesed = document.querySelector("#cheesed");
        this.cheesee = document.querySelector("#cheesee");
        this.cheesef = document.querySelector("#cheesef");
        this.calcButton = document.querySelector("#calcButton");
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() { 
        const cheese = Number(this.cheese?.value);
        const cheesed = Number(this.cheesed?.value); 
        const cheesee = Number(this.cheesee?.value); 
        const volume = this.calcVolume(cheese, cheesed, cheesee);
        this.renderResult(volume); } 
        calcVolume(cheese: number, cheesed: number, cheesee: number): number {
            return (4 / 3) * Math.PI * cheese * cheesed * cheesee; 

        }
        renderResult(volume: number) { 
            if (this.cheesef)
             { this.cheesef.value = String(volume); 
        }
     }
}
new Ellipsoid();
    