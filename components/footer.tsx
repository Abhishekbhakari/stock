import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t w-full bg-white">
      <div className="container bg-white flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-black text-black text-4xl ">GAURAV KULKARNI</h2>
          <p className="text-6xl font-bold text-muted-foreground">
            Believing in the Numbers Rather than the Story
          </p>
          <p className="text-black">SEBI Registration number - INH000009311</p>
          <p className="text-black">BSE Enlistment Number - 5534</p>
        </div>
        <div className="grid flex-1 text-black hover:text-black font-bold grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-black"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/InvestmentPhilosophy"
                  className="text-muted-foreground transition-colors hover:text-black"
                >
                  Investment Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-black"
                >
                  Contact Us
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/products"
                  className="text-muted-foreground transition-colors hover:text-black"
                >
                  Products
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm">
              {/* <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-black"
                >
                  About Us
                </Link>
              </li> */}
              <li>
                <Link
                  href="/investorcharter"
                  className="text-gray-400 hover:text-black"
                >
                  Investor Chartor
                </Link>
              </li>
              <li>
                <Link
                  href="/investorcomplaints"
                  className="text-gray-400 hover:text-black"
                >
                  Investor Complaints
                </Link>
              </li>
              <li>
                <Link
                  href="/sebiregistrationcirtificate"
                  className="text-gray-400 hover:text-black"
                >
                  SEBI Registration Certificate
                </Link>
              </li>
              <li>
                <Link
                  href="/grievance-redressal-mechanism"
                  className="text-gray-400 hover:text-black"
                >
                  Grievance Redressal Mechanism
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-gray-400 hover:text-black"
                >
                  Grievance Redressal Mechanism (Accessibility Compliance)
                </Link>
              </li>
              <li>
                <Link
                  href="/disclosures-and-disclaimers"
                  className="text-gray-400 hover:text-black"
                >
                  Disclosures & Disclaimers
                </Link>
              </li>
              <li>
                <Link href="/mitc" className="text-gray-400 hover:text-black">
                  MITC
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-400 hover:text-black"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/aml-cdd-policy"
                  className="text-gray-400 hover:text-black"
                >
                  AML CDD Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/code-of-conduct"
                  className="text-gray-400 hover:text-black"
                >
                  Code of Conduct
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-black"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground transition-colors hover:text-black"
                >
                  Careers
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/amanesoft"
                className="text-muted-foreground transition-colors hover:text-black"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/amanesoft"
                className="text-muted-foreground transition-colors hover:text-black"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/amanesoft"
                className="text-muted-foreground transition-colors hover:text-black"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 text-xs text-gray-600 space-y-4 mb-5">
        <div className="space-y-2 mb-2">
          <p>Regulatory Information :</p>
          <strong>SCORES:</strong> Clients May Submit Grievances Directly To
          SEBI{" "}
          <a
            href="https://scores.gov.in/scores/Welcome.html"
            className="text-blue-600 underline"
          >
            Here
          </a>{" "}
          | Get The SEBI SCORES Mobile App →{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330"
            className="text-blue-600 underline"
          >
            Android
          </a>{" "}
          /{" "}
          <a
            href="https://apps.apple.com/in/app/sebi-scores/id1503810121"
            className="text-blue-600 underline"
          >
            iOS
          </a>
          <br />
          <strong>ODR:</strong> Online Dispute Resolution Mechanism, As Per SEBI
          Regulations, Is Accessible{" "}
          <a href="https://smartodr.in" className="text-blue-600 underline">
            Here
          </a>
        </div>
        <div>
          <strong>Disclaimer:</strong>
          <br />
          Our Recommendations Are Not Investment Advice And Are For Information
          Purposes Only. None Of The Stock Information, Data And Company
          Information Presented Constitutes A Legally Binding Recommendation Or
          A Solicitation Of Any Offer To Buy Or Sell Any Securities. Although
          Information Has Been Obtained From And Is Based Upon Sources We
          Believe To Be Reliable, We Do Not Guarantee Its Accuracy And The
          Information May Be Incomplete Or Condensed. All Opinions And Estimates
          Constitute Our Judgment As Of The Date Of The Recommendation And Are
          Subject To Change Without Notice. Information Presented Is General
          Information That Does Not Take Into Account Reader’s Individual
          Circumstances, Financial Situation, Or Needs, Nor Does It Present A
          Personalised Recommendation To You.
        </div>
        <div>
          Past Performance Is Not An Indicator Of Future Performance. We Accept
          No Liability Whatsoever For Any Direct Or Indirect Loss/Damage Arising
          From Any Use Of Any Information In This Website. The Information And
          Content In This Website Is Subject To Change Without Notice.
        </div>
        <div className="font-semibold text-black">
          Registration Granted By SEBI, Enlistment As RA With BSE And
          Certification From NISM In No Way Guarantee The Performance Of The
          Intermediary Or Provide Any Assurance Of Returns To Investors. Read
          All The Related Documents Carefully Before Investing.
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Stock, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
