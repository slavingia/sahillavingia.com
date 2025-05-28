import { Tweet } from "react-tweet";
import { Metadata } from "next";
import Link from "next/link";
import Footer from "../footer";
import Vagpt from "../components/Vagpt";

export const metadata: Metadata = {
  title: "DOGE Days",
  description:
    "My experience joining the United States DOGE Service as a software engineer, and what I learned along the way.",
  openGraph: {
    title: "DOGE Days",
    description:
      "My experience joining the United States DOGE Service as a software engineer, and what I learned along the way.",
    images: ["https://sahillavingia.com/va.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shl",
    title: "DOGE Days",
    description:
      "My experience joining the United States DOGE Service as a software engineer, and what I learned along the way.",
    images: ["https://sahillavingia.com/va.png"],
  },
};

export default function Home() {
  return (
    <>
      <main className="prose dark:prose-invert mx-auto p-4 sm:p-8 flex-1 w-full max-w-3xl relative z-10">
        <label className="block mt-8 mb-8">
          May 28, 2025 by{" "}
          <Link href="/">
            <u>Sahil Lavingia</u>
          </Link>
        </label>

        <h1>DOGE Days</h1>

        <p>
          In August 2014, President Obama and Congress created the United States
          Digital Service (USDS).
        </p>

        <p>
          In January 2025, President Trump signed an executive order to rename
          and reorganize it as the United States DOGE Service.
        </p>

        <blockquote className="text-gray-500 font-light">
          In consultation with USDS, each Agency Head shall establish within
          their respective Agencies a DOGE Team of at least four employees,
          which may include Special Government Employees, hired or assigned
          within thirty days of the date of this Order. Agency Heads shall
          select the DOGE Team members in consultation with the USDS
          Administrator. Each DOGE Team will typically include one DOGE Team
          Lead, one engineer, one human resources specialist, and one attorney.
          Agency Heads shall ensure that DOGE Team Leads coordinate their work
          with USDS and advise their respective Agency Heads on implementing the
          President's DOGE Agenda.
        </blockquote>
        <p className="text-sm text-gray-500">
          — Executive Order 14123: Establishing and Implementing the President's
          Department of Government Efficiency{" "}
          <Link href="https://www.federalregister.gov/documents/2025/01/29/2025-02005/establishing-and-implementing-the-presidents-department-of-government-efficiency">
            (Federal Register)
          </Link>
        </p>

        <p>
          On March 17 2025, I joined DOGE as a software engineer working for the
          Department of Veterans Affairs (VA).
        </p>
        <h2>Day 0</h2>

        <p>
          The Friday before starting, I went to the VA Medical Center in
          Manhattan to get fingerprinted. While filling out forms, I left the
          "employee/contractor/volunteer" field blank because I didn't know the
          answer.
        </p>

        <p>
          I just knew I wanted to write code for the federal government. VA's
          impact is around $350 billion a year, with 473,000 employees.
        </p>

        <p>
          In 2016, I canvassed for Bernie Sanders. I spent my first day in
          Nevada walking door-to-door in the desert heat with a dying phone
          battery and a stack of printed papers delineating potential voters,
          thinking "there really should be an app for this." There, I ended up
          writing some Google Apps code for caucus result reporting.
        </p>

        <p>This was a chance to do something bigger.</p>

        <h2>Day 1: March 17, 2025</h2>

        <p>
          I arrived early at the VA Central Office in DC, got sworn in, received
          my government ID, and attended onboarding orientation. There, I
          learned my title, Senior Advisor to the Chief of Staff Christopher
          Syrek, and my salary, $0.
        </p>

        <p>My first task involved reviewing contracts.</p>

        <blockquote className="text-gray-500 font-light">
          Each Agency Head, in consultation with the agency's DOGE Team Lead,
          shall review all existing covered contracts and grants and, where
          appropriate and consistent with applicable law, terminate or modify
          (including through renegotiation) such covered contracts and grants to
          reduce overall Federal spending or reallocate spending to promote
          efficiency and advance the policies of my Administration.
        </blockquote>
        <p className="text-sm text-gray-500">
          — Executive Order 14124: Implementing the President's Department of
          Government Efficiency Cost Efficiency Initiative{" "}
          <Link href="https://www.federalregister.gov/documents/2025/03/03/2025-03527/implementing-the-presidents-department-of-government-efficiency-cost-efficiency-initiative">
            (Federal Register)
          </Link>
        </p>
        <p>
          The existing method was manual and tedious: finding PDFs, contacting
          responsible individuals, and determining necessity. VA had over 90,000
          active contracts ranging from IT support to landscaping.
        </p>

        <p>To streamline this, I proposed a simple script:</p>

        <ul>
          <li>Iterate through contract PDFs</li>
          <li>Extract the text</li>
          <li>Utilize an LLM to flag for potential cancellation</li>
          <li>Compile flagged contracts into a CSV for easy review</li>
        </ul>

        <p>
          I also suggested a dashboard where VA contracting officers could
          easily view flagged contracts.
        </p>

        <h2>Day 2</h2>

        <p>
          Working within the executive branch felt like working at a large tech
          company, except where business strategy was outsourced to Congress,
          and software engineering was outsourced to contractors like IBM,
          Accenture, Deloitte, and Booz Allen Hamilton.
        </p>

        <p>
          I was excited to help in-source VA's software, but I was also
          realizing why so much of it was outsourced. For example, I was
          constantly constrained by my restricted government laptop, which made
          it difficult to write and run code. I couldn't install Git, Python, or
          use tools like Cursor, due to government security policies.
        </p>

        <p>
          Fixing the root of the problem–making it easier for employees to
          execute–would require congressional intervention, and it was more
          practical to continue spending lots of money outsourcing the software
          development to contractors.
        </p>

        <h2>Day 3</h2>

        <p>
          Most of the day involved meetings about the upcoming Reduction in
          Force (RIF) with VA leadership, including Secretary Doug Collins and
          Chief of Staff Mark Engelbaum, to discuss plans for an organizational
          reorganization.
        </p>

        <blockquote className="text-gray-500 font-light">
          Agency heads should collaborate with their Department of Government
          Efficiency ("DOGE") team leads within the agency in developing
          competitive areas for ARRPs.
        </blockquote>
        <p className="text-sm text-gray-500">
          — Executive Order 14159: Implementing the President's Department of
          Government Efficiency Workforce Optimization Initiative{" "}
          <Link href="https://www.federalregister.gov/documents/2025/02/14/2025-02762/implementing-the-presidents-department-of-government-efficiency-workforce-optimization-initiative">
            (Federal Register)
          </Link>
        </p>

        <p>
          Initially, I expected multiple fragmented HR systems, but learned VA
          had already consolidated HR data within IBM's HR Smart. By late
          afternoon, I successfully extracted the necessary data and constructed
          an MVP org chart visualizer, representing the nearly half-million VA
          employees.
        </p>

        <p>
          Then came a reality check about RIF rules, which turned out to be
          brutally deterministic:
        </p>

        <ul>
          <li>Tenure matters most—new hires were cut first</li>
          <li>
            Veterans' preference comes next; vets are protected over non-vets
          </li>
          <li>Length of service trumps performance—seniority beats skill</li>
          <li>Performance ratings break any remaining ties</li>
        </ul>

        <p>
          These reduction-in-force rules–which stem from the Veterans'
          Preference Act of 1944–surprised me and many others. Unlike private
          industry layoffs that target middle management bloat and low
          performers, the government cuts its newest people first, regardless of
          performance. Anyone promoted within the last two years was also
          considered probationary—first in line to go.
        </p>

        <h2>Day 5</h2>

        <p>
          In meetings with the Office of the CTO, I discovered ambitious ongoing
          software projects like reducing veterans' benefits claims processing
          from 133 days to under a week. I also learned that several of VA's
          code repos were already open-source, and the world's first electronic
          health record system,{" "}
          <Link href="https://www.politico.com/agenda/story/2017/03/vista-computer-history-va-conspiracy-000367/">
            VistA
          </Link>
          , was built by VA employees over 40 years ago.
        </p>

        <p>
          Maybe the government <em>could</em> in-source and open-source its
          software stack after all.
        </p>

        <p>
          I also learned that my frustrations with the government laptop
          <em>were</em> solvable; Charles Worthington, VA's CTO, recommended
          getting a software engineering-grade MacBook.
        </p>

        <p>
          I wondered why there wasn't a centralized DOGE software engineering
          playbook with all of our learnings; overall, I was surprised by the
          lack of knowledge-sharing within DOGE. It seemed like every engineer
          started from scratch.
        </p>

        <h2>Day 8</h2>

        <p>
          The reality was setting in: DOGE was more like having McKinsey
          volunteers embedded in agencies rather than the revolutionary force
          I'd imagined. It was Elon (in the White House), Steven Davis
          (coordinating), and everyone else scattered across agencies.
        </p>

        <p>
          Meanwhile, the public was seeing news reports of mass firings that
          seemed cruel and heartless, many assuming DOGE was directly
          responsible.
        </p>

        <p>
          In reality, DOGE had no direct authority. The real decisions came from
          the agency heads appointed by President Trump, who were wise to let
          DOGE act as the 'fall guy' for unpopular decisions.
        </p>

        <h2>Day 13</h2>

        <p>
          I attended my first and last DOGE all-hands. It felt like a candid
          Q&amp;A with Elon rather than a structured meeting. When he asked the
          room about improving DOGE's public perception, I asked if I could
          open-source the code I'd been writing. He said yes–it aligned with
          DOGE's goal of maximum transparency.
        </p>

        <p>
          The code is on GitHub{" "}
          <Link href="https://github.com/slavingia/va">here</Link>.
        </p>

        <h2>Day 21: April 1, 2025</h2>

        <p>
          I returned home to New York to work remotely out of the basement of
          the Manhattan VA Medical Center.
        </p>

        <p>
          Although DOGE hadn't met my expectations of a cohesive team culture, I
          felt optimistic about my individual impact at VA. I had many ideas on
          how to improve veterans' care while saving money with software, and
          the assigned work of cutting contracts, helping RIF, and providing
          technical advice didn't take up much of my time.
        </p>

        <p>I started to work on two VA-specific projects:</p>

        <ul>
          <li>Modernizing our internal version of ChatGPT (called VAGPT)</li>
          <li>
            An AI chatbot that could help veterans get help when visiting{" "}
            <Link href="https://VA.gov">VA.gov</Link>
          </li>
        </ul>

        <h2>Day 34</h2>

        <p>
          I completed the migration of VAGPT to a more modern front-end
          consisting of NextJS, Tailwind, ShadCN. Most importantly, I made it
          mobile responsive.
        </p>

        <Vagpt />

        <p>
          I also got buy-in from VA on open-sourcing the VAGPT repo, so that
          other federal agencies can benefit from the same code for free. It
          also meant non-government employees–like me, eventually–could chip in.
        </p>

        <p>
          Lastly, we planned a hackathon for the new AI chatbot to start on May
          19, 2025.
        </p>

        <h2>Day 55: May 9, 2025</h2>

        <p>I got the boot from DOGE.</p>

        <p>
          I reached out to someone who wrote about Gumroad's recent transition
          to open source. During the interview, which was then published in{" "}
          <Link href="https://www.fastcompany.com/91330297/doge-sahil-lavignia-gumroad">
            Fast Company
          </Link>
          , I was asked about my experience working at DOGE, which had been
          revealed publicly as part of{" "}
          <Link href="https://www.wired.com/story/doge-department-of-veterans-affairs-ai/">
            a WIRED article
          </Link>
          .
        </p>

        <p>Soon after publication, my access was revoked without warning.</p>

        <p>My DOGE days were over.</p>

        <h2>What did I get done?</h2>

        <ul>
          <li>
            Wrote a contract analysis script using LLMs to flag wasteful
            spending
          </li>
          <li>
            Deployed a productized version of the contract analysis tool within
            the VA cloud
          </li>
          <li>
            Built org chart tools: Interactive visualizations to aid RIF
            execution for 473,000 employees
          </li>
          <li>Modernized our internal ChatGPT, VAGPT</li>
          <li>
            Shipped a{" "}
            <Link href="https://helper-va-demo.vercel.app">
              VA Chatbot demo
            </Link>{" "}
            for VA.gov, for helping veterans navigate services
          </li>
          <li>
            Sped up AI adoption: According to a VA engineer, accelerated
            adoption by "12 months"
          </li>
        </ul>

        <p>
          In the end, I learned a lot, and got to write some code for the
          federal government. For that, I'm grateful.
        </p>

        <p>
          But I'm also disappointed. I didn't make any progress on improving the
          UX of veterans' filing disability claims or automating/speeding up
          claims processing, like I had hoped to when I started. I built several
          prototypes, but was never able to get approval to ship anything to
          production that would actually improve American lives–while also
          saving money for the American taxpayer.
        </p>

        <p>Maybe next time.</p>

        <div className="flex justify-center">
          <Tweet id="1907477800467980749" />
        </div>

        <Footer />
      </main>
    </>
  );
}
