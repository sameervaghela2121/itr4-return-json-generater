// src/App.js
import React, { useState } from 'react';

const initialData = {
  ITR: {
    ITR4: {
      CreationInfo: {
        SWVersionNo: "R1",
        SWCreatedBy: "SW10112324",
        JSONCreatedBy: "SW10112324",
        JSONCreationDate: "2023-07-17",
        Digest: "O9pY8D+OeGhuiJx6/GQxON8sykeiJiuePRAQsALzdbY=",
        IntermediaryCity: "Delhi"
      },
      Form_ITR4: {
        FormName: "ITR-4",
        Description: "Indls, HUFs and Firms (other than LLP) having Inc u/s 44AD, 44ADA or 44AE",
        AssessmentYear: "2023",
        SchemaVer: "Ver1.0",
        FormVer: "Ver1.0"
      },
      PersonalInfo: {
        AssesseeName: {
          FirstName: "KIRANKUMAR",
          MiddleName: "TEMUBHAI",
          SurNameOrOrgName: "VAGHELA"
        },
        Address: {
          ResidenceNo: "102 S/O TEMUBHAI",
          ResidenceName: "KAMDHENU SOCIETY VIBHAG 3 NR BROADGAGE RAILWAYLINE",
          RoadOrStreet: "Ranip S.O",
          LocalityOrArea: "Ahmadabad City",
          CityOrTownOrDistrict: "AHMEDABAD",
          StateCode: "11",
          CountryCode: "91",
          PinCode: 382480,
          CountryCodeMobile: 91,
          MobileNo: 9099071871,
          CountryCodeMobileNoSec: 91,
          EmailAddress: "vaghela_kiran@rediff.com",
          EmailAddressSec: "vaghelakiran1273@gmail.com"
        },
        PAN: "AKQPV8856R",
        DOB: "1973-12-12",
        EmployerCategory: "OTH",
        Status: "I",
        AadhaarCardNo: "859892203525"
      },
      FilingStatus: {
        ReturnFileSec: 11,
        NewTaxRegime: "N",
        OptingNewTaxRegime: 2,
        SeventhProvisio139: "N",
        DepAmtAggAmtExcd1CrPrYrFlg: "N",
        IncrExpAggAmt2LkTrvFrgnCntryFlg: "N",
        IncrExpAggAmt1LkElctrctyPrYrFlg: "N",
        clauseiv7provisio139i: "N",
        AsseseeRepFlg: "N"
      },
      IncomeDeductions: {
        AllwncExemptUs10: {
          TotalAllwncExemptUs10: 0
        },
        OthersInc: {
          OthersIncDtlsOthSrc: [
            {
              OthSrcNatureDesc: "TAX",
              OthSrcOthAmount: 248
            },
            {
              OthSrcNatureDesc: "IFD",
              OthSrcOthAmount: 28026
            },
            {
              OthSrcNatureDesc: "SAV",
              OthSrcOthAmount: 22355
            },
            {
              OthSrcNatureDesc: "OTH",
              OthSrcOthNatOfInc: "JOB TIME JOB WORK",
              OthSrcOthAmount: 75600
            }
          ]
        },
        UsrDeductUndChapVIA: {
          Section80C: 62140,
          Section80CCC: 0,
          Section80CCDEmployeeOrSE: 0,
          Section80CCD1B: 0,
          Section80CCDEmployer: 0,
          Section80D: 0,
          Section80DD: 0,
          Section80DDB: 0,
          Section80E: 0,
          Section80GG: 0,
          Section80GGC: 0,
          Section80U: 0,
          Section80TTA: 22355,
          Section80TTB: 0,
          TotalChapVIADeductions: 84495,
          Section80G: 0
        },
        DeductUndChapVIA: {
          Section80C: 62140,
          Section80CCC: 0,
          Section80CCDEmployeeOrSE: 0,
          Section80CCD1B: 0,
          Section80CCDEmployer: 0,
          Section80D: 0,
          Section80DD: 0,
          Section80DDB: 0,
          Section80E: 0,
          Section80EE: 0,
          Section80EEA: 0,
          Section80EEB: 0,
          Section80G: 0,
          Section80GG: 0,
          Section80GGC: 0,
          Section80U: 0,
          Section80TTA: 10000,
          Section80TTB: 0,
          AnyOthSec80CCH: 0,
          TotalChapVIADeductions: 72140
        },
        IncomeFromBusinessProf: 125910,
        GrossSalary: 340000,
        Salary: 340000,
        IncomeNotified89A: 0,
        NetSalary: 340000,
        DeductionUs16: 50000,
        DeductionUs16ia: 50000,
        EntertainmntalwncUs16ii: 0,
        IncomeFromSal: 290000,
        GrossRentReceived: 0,
        AnnualValue: 0,
        AnnualValue30Percent: 0,
        TotalIncomeOfHP: 0,
        IncomeOthSrc: 126229,
        DeductionUs57iia: 0,
        Increliefus89AOS: 0,
        GrossTotIncome: 542139,
        TotalIncome: 470000
      },
      TaxComputation: {
        IntrstPay: {
          IntrstPayUs234A: 0,
          IntrstPayUs234B: 0,
          IntrstPayUs234C: 0,
          LateFilingFee234F: 0
        },
        TotalTaxPayable: 11000,
        Rebate87A: 11000,
        TaxPayableOnRebate: 0,
        EducationCess: 0,
        GrossTaxLiability: 0,
        Section89: 0,
        NetTaxLiability: 0,
        TotTaxPlusIntrstPay: 0
      },
      TaxPaid: {
        TaxesPaid: {
          AdvanceTax: 0,
          TDS: 5007,
          TCS: 0,
          SelfAssessmentTax: 0,
          TotalTaxesPaid: 5007
        },
        BalTaxPayable: 0
      },
      Refund: {
        BankAccountDtls: {
          AddtnlBankDetails: [
            {
              IFSCCode: "KCCB0NVW016",
              BankName: "THE KALUPUR COMMERCIAL CO OP BANK LTD",
              BankAccountNo: "01610115425",
              UseForRefund: "false"
            },
            {
              IFSCCode: "BARB0RANIPX",
              BankName: "BANK OF BARODA",
              BankAccountNo: "35180100004966",
              UseForRefund: "true"
            }
          ]
        },
        RefundDue: 5010
      },
      Schedule80G: {
        Don100Percent: {
          TotDon100PercentCash: 0,
          TotDon100PercentOtherMode: 0,
          TotDon100Percent: 0,
          TotEligibleDon100Percent: 0
        },
        Don50PercentNoApprReqd: {
          TotDon50PercentNoApprReqdCash: 0,
          TotDon50PercentNoApprReqdOtherMode: 0,
          TotDon50PercentNoApprReqd: 0,
          TotEligibleDon50Percent: 0
        },
        Don100PercentApprReqd: {
          TotDon100PercentApprReqdCash: 0,
          TotDon100PercentApprReqdOtherMode: 0,
          TotDon100PercentApprReqd: 0,
          TotEligibleDon100PercentApprReqd: 0
        },
        Don50PercentApprReqd: {
          TotDon50PercentApprReqdCash: 0,
          TotDon50PercentApprReqdOtherMode: 0,
          TotDon50PercentApprReqd: 0,
          TotEligibleDon50PercentApprReqd: 0
        },
        TotalDonationsUs80GCash: 0,
        TotalDonationsUs80GOtherMode: 0,
        TotalDonationsUs80G: 0,
        TotalEligibleDonationsUs80G: 0
      },
      Schedule80D: {
        Sec80DSelfFamSrCtznHealth: {
          SeniorCitizenFlag: "S",
          SelfAndFamily: 0,
          SelfAndFamilySeniorCitizen: 0,
          ParentsSeniorCitizenFlag: "N",
          Parents: 0,
          ParentsSeniorCitizen: 0,
          PreventiveHealthCheckUp: 0,
          PreventiveHealthCheckUpParents: 0,
          MediclaimPremium: 0,
          MedicalExpParents: 0,
          MedicalExpSelfAndFamily: 0,
          Total80D: 0
        }
      },
      Verification: {
        Declaration: {
          AssesseeVerName: "KIRANKUMAR TEMUBHAI VAGHELA",
          FatherName: "TEMUBHAI VAGHELA",
          Place: "AHMEDABAD",
          Date: "2023-07-01"
        },
        Capacity: "O"
      }
    }
  }
};

function App() {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e, path) => {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const updatedData = { ...formData };

    keys.reduce((acc, key) => {
      if (!acc[key]) acc[key] = {};
      return acc[key];
    }, updatedData)[lastKey] = e.target.value;

    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
  };

  const downloadJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "formData.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">ITR Form</h2>
        <form onSubmit={handleSubmit}>
          {/* CreationInfo Form Fields */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Creation Info</h3>
            {Object.entries(formData.ITR.ITR4.CreationInfo).map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label className="block mb-1 text-sm text-gray-700">{key}</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  value={value}
                  onChange={(e) => handleChange(e, `ITR.ITR4.CreationInfo.${key}`)}
                />
              </div>
            ))}
          </section>

          {/* Form_ITR4 Form Fields */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Form ITR-4</h3>
            {Object.entries(formData.ITR.ITR4.Form_ITR4).map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label className="block mb-1 text-sm text-gray-700">{key}</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  value={value}
                  onChange={(e) => handleChange(e, `ITR.ITR4.Form_ITR4.${key}`)}
                />
              </div>
            ))}
          </section>

          {/* PersonalInfo Form Fields */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Personal Info</h3>
            <h4 className="text-md font-semibold mb-2">Assessee Name</h4>
            {Object.entries(formData.ITR.ITR4.PersonalInfo.AssesseeName).map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label className="block mb-1 text-sm text-gray-700">{key}</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  value={value}
                  onChange={(e) => handleChange(e, `ITR.ITR4.PersonalInfo.AssesseeName.${key}`)}
                />
              </div>
            ))}
            <h4 className="text-md font-semibold mb-2">Address</h4>
            {Object.entries(formData.ITR.ITR4.PersonalInfo.Address).map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label className="block mb-1 text-sm text-gray-700">{key}</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  value={value}
                  onChange={(e) => handleChange(e, `ITR.ITR4.PersonalInfo.Address.${key}`)}
                />
              </div>
            ))}
            <h4 className="text-md font-semibold mb-2">Other Personal Info</h4>
            {Object.entries(formData.ITR.ITR4.PersonalInfo).filter(([key, _]) => key !== 'AssesseeName' && key !== 'Address').map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label className="block mb-1 text-sm text-gray-700">{key}</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  value={value}
                  onChange={(e) => handleChange(e, `ITR.ITR4.PersonalInfo.${key}`)}
                />
              </div>
            ))}
          </section>

          {/* FilingStatus Form Fields */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Filing Status</h3>
            {Object.entries(formData.ITR.ITR4.FilingStatus).map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label className="block mb-1 text-sm text-gray-700">{key}</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  value={value}
                  onChange={(e) => handleChange(e, `ITR.ITR4.FilingStatus.${key}`)}
                />
              </div>
            ))}
          </section>

          {/* IncomeDeductions Form Fields */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Income Deductions</h3>
            {Object.entries(formData.ITR.ITR4.IncomeDeductions).map(([key, value]) => {
              if (typeof value === 'object' && !Array.isArray(value)) {
                return (
                  <div className="mb-6" key={key}>
                    <h4 className="text-md font-semibold mb-2">{key}</h4>
                    {Object.entries(value).map(([subKey, subValue]) => (
                      <div className="mb-4" key={subKey}>
                        <label className="block mb-1 text-sm text-gray-700">{subKey}</label>
                        <input
                          type="text"
                          className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                          value={subValue}
                          onChange={(e) => handleChange(e, `ITR.ITR4.IncomeDeductions.${key}.${subKey}`)}
                        />
                      </div>
                    ))}
                  </div>
                );
              }
              return (
                <div className="mb-4" key={key}>
                  <label className="block mb-1 text-sm text-gray-700">{key}</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    value={value}
                    onChange={(e) => handleChange(e, `ITR.ITR4.IncomeDeductions.${key}`)}
                  />
                </div>
              );
            })}
          </section>

          {/* TaxComputation Form Fields */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Tax Computation</h3>
            {Object.entries(formData.ITR.ITR4.TaxComputation).map(([key, value]) => {
              if (typeof value === 'object' && !Array.isArray(value)) {
                return (
                  <div className="mb-6" key={key}>
                    <h4 className="text-md font-semibold mb-2">{key}</h4>
                    {Object.entries(value).map(([subKey, subValue]) => (
                      <div className="mb-4" key={subKey}>
                        <label className="block mb-1 text-sm text-gray-700">{subKey}</label>
                        <input
                          type="text"
                          className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                          value={subValue}
                          onChange={(e) => handleChange(e, `ITR.ITR4.TaxComputation.${key}.${subKey}`)}
                        />
                      </div>
                    ))}
                  </div>
                );
              }
              return (
                <div className="mb-4" key={key}>
                  <label className="block mb-1 text-sm text-gray-700">{key}</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    value={value}
                    onChange={(e) => handleChange(e, `ITR.ITR4.TaxComputation.${key}`)}
                  />
                </div>
              );
            })}
          </section>

          {/* TaxPaid Form Fields */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Tax Paid</h3>
            {Object.entries(formData.ITR.ITR4.TaxPaid.TaxesPaid).map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label className="block mb-1 text-sm text-gray-700">{key}</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  value={value}
                  onChange={(e) => handleChange(e, `ITR.ITR4.TaxPaid.TaxesPaid.${key}`)}
                />
              </div>
            ))}
          </section>

          {/* Refund Form Fields */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Refund</h3>
            {Object.entries(formData.ITR.ITR4.Refund.BankAccountDtls.AddtnlBankDetails[0]).map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label className="block mb-1 text-sm text-gray-700">{key}</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  value={value}
                  onChange={(e) => handleChange(e, `ITR.ITR4.Refund.BankAccountDtls.AddtnlBankDetails.0.${key}`)}
                />
              </div>
            ))}
          </section>

          {/* Verification Form Fields */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Verification</h3>
            {Object.entries(formData.ITR.ITR4.Verification.Declaration).map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label className="block mb-1 text-sm text-gray-700">{key}</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  value={value}
                  onChange={(e) => handleChange(e, `ITR.ITR4.Verification.Declaration.${key}`)}
                />
              </div>
            ))}
          </section>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={downloadJson}
            className="mt-4 w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
          >
            Download JSON
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
