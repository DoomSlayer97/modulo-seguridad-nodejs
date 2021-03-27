const pdf =  require("html-pdf");
const pug = require("pug");

class HtmlPdfGenerator {

  generarPdf( content = "" ) {

    return new Promise( (resolve, reject) => {

      pdf.create(content).toFile( 'html.pdf', ( err, res ) => {

        if ( err )
          reject( false );
        else
          resolve( res );

      });

    });

  }
  
  generarPdfBuffer( content = "" ) {

    return new Promise( (resolve, reject) => {

      pdf.create(content).toBuffer( ( err, res ) => {

        if ( err )
          reject( false );
        else
          resolve( res );

      });

    });

  }

}

const htmlpdf = new HtmlPdfGenerator();

module.exports = htmlpdf;