const fs = require("fs");
const path = require("path");

class PdfEditor {

  constructor() {
    
    this.content = "";    

  }

  createStyles() {

    const contentStyleCss = fs.readFileSync( path.join( __dirname, "../static/stylepdf.css" ) );

    return `
      <style>
        ${contentStyleCss}
      </style>
    `
  }

  createHeader() {

    return `
      <div id="pdf-header" >
        <h1>My first report on NodeJs</h1>
      </div>
    `;

  }
  
  createFooter() {
    return `
      <div id="pdf-footer" >
      </div>
    `;
  }

  generateHtml() {

    return `
      ${this.createStyles()}
      ${this.createHeader()}
      ${this.createFooter()}
    `;
    
  }

}

const pdfEditor = new PdfEditor();

module.exports = pdfEditor;