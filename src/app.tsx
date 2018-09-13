import { Component, State, Listen } from '@stencil/core';

//import { Sgb9Radio } from './//components/sgb9-radio/sgb9-radio';

const MODULNAME: string = 'Sgb9App: '; 
const RADIOTEXTE = [
  "Radiobutton 1",
  "Radiobutton 2",
  "Radiobutton 3",
  "Radiobutton 4",
  "Radiobutton 5"
  ];
  const RADIOGROUPS = [
    "elan-radio-1",
    "elan-radio-2"
    ];
  
@Component({
  tag: 'sgb9-app',
  styleUrl: 'app.css'
  
})

export class Sgb9App {

  radioStateG1 : number = 0;
  radioStateG2 : number = 3;
  @State() radioTextG1: string = RADIOTEXTE[this.radioStateG1];
  @State() radioTextG2: string = RADIOTEXTE[this.radioStateG2];
  @Listen('checkRadioChange')
  checkChangeHandler(event: CustomEvent) {
    console.log(MODULNAME + 'Received the custom checkRadioChange event: ', event);
    console.log(event.detail);
    if(event.detail.group === RADIOGROUPS[0]) {
      this.radioStateG1 = event.detail.value; 
      this.radioTextG1 = RADIOTEXTE[this.radioStateG1]
    } else {
      this.radioStateG2 = event.detail.value; 
      this.radioTextG2 = RADIOTEXTE[this.radioStateG2]
    }
  }


  render() {
    return (
      <div>
        <div class="radio-group">
        <sgb9-radio label={RADIOTEXTE[0]} group={RADIOGROUPS[0]} idValue="elan-radio-0000" value={0} checked={true}></sgb9-radio>
        <sgb9-radio label={RADIOTEXTE[1]} group={RADIOGROUPS[0]} idValue="elan-radio-0001" value={1}></sgb9-radio>
        <sgb9-radio label={RADIOTEXTE[2]} group={RADIOGROUPS[0]} idValue="elan-radio-0002" value={2}></sgb9-radio>
        </div>
        <br />
        <div class="radio-group">
        <sgb9-radio label={RADIOTEXTE[3]} group={RADIOGROUPS[1]} idValue="elan-radio-0003" value={3} checked={true}></sgb9-radio>
        <sgb9-radio label={RADIOTEXTE[4]} group={RADIOGROUPS[1]} idValue="elan-radio-0004" value={4}></sgb9-radio>
        </div>        
        {this.radioTextG1} is selected in first group!<br />
        {this.radioTextG2} is selected in second group!

      </div>  
    );
  }
}