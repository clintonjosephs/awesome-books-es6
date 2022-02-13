export default class Navigation {
  constructor(
    listLink,
    addLink,
    contactLink,
    listSection,
    addSection,
    contactSection,
    getAllLinks,
  ) {
    this.listLink = listLink;
    this.addLink = addLink;
    this.contactLink = contactLink;
    this.bookListSection = listSection;
    this.addBookSection = addSection;
    this.contactSection = contactSection;
    this.getAllLinks = getAllLinks;
  }

  setAllLinksColorBlack() {
    this.getAllLinks.forEach((link) => {
      link.style.color = 'black';
    });
  }

  manipulateDom(elemArrayParam, elemToShow, linkClicked) {
    this.setAllLinksColorBlack();
    elemArrayParam.forEach((elem) => {
      elem.style.display = 'none';
    });
    elemToShow.style.display = 'block';
    linkClicked.style.color = '#72a0c1';
  }

  listClick() {
    const elemArray = [this.addBookSection, this.contactSection];
    this.manipulateDom(elemArray, this.bookListSection, this.listLink);
  }

  addLinkClick() {
    const elemArray = [this.bookListSection, this.contactSection];
    this.manipulateDom(elemArray, this.addBookSection, this.addLink);
  }

  contactLinkClick() {
    const elemArray = [this.bookListSection, this.addBookSection];
    this.manipulateDom(elemArray, this.contactSection, this.contactLink);
  }
}
