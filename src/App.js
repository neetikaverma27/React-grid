// import React, { useRef, useEffect } from 'react';
// import { HotTable } from '@handsontable/react-wrapper';
// import { registerAllModules } from 'handsontable/registry';
// import { HyperFormula } from 'hyperformula';
// import 'handsontable/styles/handsontable.css';
// import 'handsontable/styles/ht-theme-main.css';

// registerAllModules();

// const App = () => {


 

//   const data = [
//     ['GST / VAT / Sales Tax', '$10.00','20'],
//     ['Product Cost', '$25.00','10'],
//     ['Shipping Cost', '$10.00','15'],
//     ['Pick Pack (3PL)', '$20.00','90'],
//     ['Total Monthly Fixed Costs', '$7.00','6'],
   
//     ['Total','Average Daily Cost', 'Total Monthly Cost'],
//     ['',
//       '=AVERAGE(B1:B5)',
//       '=SUM(C1:C5)',
      
//     ],

//   ];

//   return (
//     <HotTable
//       data={data}
//       formulas={{
//         engine: HyperFormula,
//       }}
//       colHeaders={['Description', 'Amount (Per Month)', 'Amount (Daily)']}
//       rowHeaders={true}
//       stretchH="all"
//       height={500}
//       autoWrapRow={true}
//       autoWrapCol={true}
//       licenseKey="non-commercial-and-evaluation"
//     />
//   );
// };

// export default App;



import React, { useRef, useEffect } from 'react';
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import { HyperFormula } from 'hyperformula';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

registerAllModules();

const App = () => {
  const tableData = [
    ["Description", "1 Jan", "2 Jan", "3 Jan", "4 Jan", "5 Jan"],
    ["REVENUE", "$800.00", "$0.00", "$0.00", "$0.00", "$0.00"],
    ["Revenue Ex GST", "$727.27", "$0.00", "$0.00", "$0.00", "$0.00"],
    ["GST %", "10.00%", "0.00%", "0.00%", "0.00%", "0.00%"],
    ["", "", "", "", "", ""],
    ["EXPENSES", "", "", "", "", ""],
    ["Facebook Ad Spend", "$500.00", "$0.00", "$0.00", "$0.00", "$0.00"],
    ["Google Ad Spend", "$0.00", "$0.00", "$0.00", "$0.00", "$0.00"],
    ["TikTok Ad Spend", "$0.00", "$0.00", "$0.00", "$0.00", "$0.00"],
    ["Total Advertising", "$532.26", "$0.00", "$0.00", "$0.00", "$0.00"],
    ["Variable COGS & Fulfillment", "", "", "", "", ""],
    ["Product Cost", "$200.00", "$0.00", "$0.00", "$0.00", "$0.00"],
    ["Shipping Cost", "$100.00", "$0.00", "$0.00", "$0.00", "$0.00"],
    ["Pick Pack (3PL)", "$200.00", "$0.00", "$0.00", "$0.00", "$0.00"],
    ["Total Variable Costs", "$540.00", "$0.00", "$0.00", "$0.00", "$0.00"],
    ["TOTAL EXPENSES", "$1,266.13", "$0.00", "$0.00", "$0.00", "$0.00"],
    ["PROFIT", '=SUM(B1:B16)', '=SUM(C1:C16)', '=SUM(D1:D16)', '=SUM(E1:F16)', '=SUM(F1:F16)']
  ];

  return (
    <HotTable
      data={tableData}
      formulas={{
                engine: HyperFormula,
              }}
      colHeaders={false}
      rowHeaders={true}
      stretchH="all"
      height={500}
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      className="handsontable-custom"
    />
  );
};

export default App;
