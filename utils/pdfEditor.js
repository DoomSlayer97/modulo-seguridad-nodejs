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
        <div class="title-row">
          <h1>My first report on NodeJs</h1>
        </div>
          <h3>Author: Rick Gomez Perez</h3>
          <p class="fecha-label" >19/04/2021</p>
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

    const data = [
      { name: 'rick', email: 'rickgomezperez@gmail.com', age: 22 },
      { name: 'rick', email: 'rickgomezperez@gmail.com', age: 22 },
      { name: 'rick', email: 'rickgomezperez@gmail.com', age: 22 },
      { name: 'rick', email: 'rickgomezperez@gmail.com', age: 22 },
      
    ]

    let tableData = "";

    data.forEach( item => {

      tableData += `
        <tr>
          <td>${ item.name }</td>
          <td>${ item.email }</td>
          <td>${ item.age }</td>
        </tr>
      `;

    });

    return `
      ${this.createStyles()}
      <table id="table-pdf" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          ${tableData}
        </tbody>
      </table>
    `;
    
  }

}

const pdfEditor = new PdfEditor();

module.exports = pdfEditor;