class Links{
    get allLinks(){
        return $$('a');
    }
    get allHrefs(){
        return this.allLinks.map(el => el.getAttribute('href'));

    }

}
export default new Links();