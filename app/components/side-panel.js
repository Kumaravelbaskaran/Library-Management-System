import Component from "@glimmer/component";

export default class sidePanelComponent extends Component {

  listOfBooks = ['Harry potter 1','Harry potter 1','Harry potter 2','Harry potter 3','Harry potter 4','Harry potter 5','Harry potter 6','Harry potter 7' ]

  constructor(){
    super(...arguments);
    prompt("constructor of side panel");
  }
  willDestroy(){
    prompt("will destroy of side panel");
  }
}
