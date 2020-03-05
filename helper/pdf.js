const PDFDocument = require('pdfkit');
const fs = require('fs');
const appRoot = require('app-root-path');
const convertHTMLToPDF = require("pdf-puppeteer");
const pdf = require("pdf-creator-node");


module.exports = {
  pdfkit: async data => {

    return new Promise(function (resolve, reject) {
      //console.log('Path of file in parent dir:', require('path').resolve(__dirname, '../app.js'));

      // Create a document
      const doc = new PDFDocument();

      // Pipe its output somewhere, like to a file or HTTP response
      // See below for browser usage
      doc.pipe(fs.createWriteStream(appRoot + "/public/file/togepi123333.pdf"));

      // Embed a font, set the font size, and render some text
      doc
        .fontSize(25)
        .text('toge toge turrrrrrrrr!', 100, 100);

      // Add an image, constrain it to a given size, and center it vertically and horizontally
      doc.image(appRoot + "/public/images/togepi.jpg", {
        fit: [250, 300],
        align: 'center',
        valign: 'center'
      });

      doc.moveDown();
      doc.text("I moved down", {
        width: 410,
        align: 'center'
      });

      // Add another page
      doc
        .addPage()
        .fontSize(25)
        .text('Here is some vector graphics...', 100, 100);

      // Draw a triangle
      doc
        .save()
        .moveTo(100, 150)
        .lineTo(100, 250)
        .lineTo(200, 250)
        .fill('#FF3300');

      // Apply some transforms and render an SVG path with the 'even-odd' fill rule
      doc
        .scale(0.6)
        .translate(470, -380)
        .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
        .fill('red', 'even-odd')
        .restore();

      // Add some text with annotations
      doc
        .addPage()
        .fillColor('blue')
        .text('Here is a link!', 100, 100)
        .underline(100, 100, 160, 27, { color: '#0000FF' })
        .link(100, 100, 160, 27, 'http://google.com/');

      console.log("///////////////pdf////////")

      // Finalize PDF file
      doc.end();
      resolve();
    })

  },
  pdfhtml: async data => {
    return new Promise(function (resolve, reject) {
      let data =
        `<!DOCTYPE html>
      <html>
          <body>
              <h1><img src="http://portwings.in/wp-content/uploads/2018/09/Page4-Mahindra.jpg"  height="100" width="100" />&nbsp;  &nbsp; &nbsp; Mahindra Logisitcs</h1>
              <ul>
                  {{#each users}}
                  <li>Name: {{this.name}}</li>
                  <li>Age: {{this.age}}</li>
                  <br>
              {{/each}}
              </ul>
          </body>
      </html>`;


      var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
          height: "45mm",
          contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
        },
        "footer": {
          "height": "28mm",
          "contents": {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
          }
        }
      };


      var users = [
        {
          name: "HARI",
          age: "45"
        },
        {
          name: "VIRAJ",
          age: "26"
        },
        {
          name: "UNMESH",
          age: "26"
        }
      ]
      var document = {
        html: data,
        data: {
          users: users
        },
        path: appRoot + "/public/file/htmlPdf.pdf"
      };

      pdf.create(document, options)
        .then(res => {
          resolve();
          console.log(res)
        })
        .catch(error => {
          reject();
          console.error(error)
        });

    })
  }
}