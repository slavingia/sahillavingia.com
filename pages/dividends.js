import Head from "next/head";
import Layout from "../components/layout";
import { Tweet } from "react-tweet";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  const [hourlyRate, setHourlyRate] = useState(200);
  const [equityPercentage, setEquityPercentage] = useState(20);
  const [hoursPerWeek, setHoursPerWeek] = useState(35);
  const [weeksPerYear, setWeeksPerYear] = useState(44);
  const [growthRate, setGrowthRate] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const financialData = [
    {
      year: 2012,
      gmv: 600945,
      revenue: 40483,
      netIncome: -834335,
      ceoSalary: 36000,
      yoyGmv: null,
      yoyRevenue: null,
    },
    {
      year: 2013,
      gmv: 4940038,
      revenue: 311040,
      netIncome: -2044173,
      ceoSalary: 60000,
      yoyGmv: 722,
      yoyRevenue: 668,
    },
    {
      year: 2014,
      gmv: 13775340,
      revenue: 850210,
      netIncome: -3472021,
      ceoSalary: 85000,
      yoyGmv: 179,
      yoyRevenue: 173,
    },
    {
      year: 2015,
      gmv: 21046470,
      revenue: 1288672,
      netIncome: -3841913,
      ceoSalary: 0,
      yoyGmv: 53,
      yoyRevenue: 52,
    },
    {
      year: 2016,
      gmv: 36251075,
      revenue: 2273189,
      netIncome: -139689,
      ceoSalary: 0,
      yoyGmv: 72,
      yoyRevenue: 76,
    },
    {
      year: 2017,
      gmv: 41463817,
      revenue: 2745823,
      netIncome: 62474,
      ceoSalary: 120000,
      yoyGmv: 14,
      yoyRevenue: 21,
    },
    {
      year: 2018,
      gmv: 52395391,
      revenue: 3434864,
      netIncome: 282758,
      ceoSalary: 150000,
      yoyGmv: 26,
      yoyRevenue: 25,
    },
    {
      year: 2019,
      gmv: 73105515,
      revenue: 5022796,
      netIncome: 195554,
      ceoSalary: 150000,
      yoyGmv: 40,
      yoyRevenue: 46,
    },
    {
      year: 2020,
      gmv: 142301488,
      revenue: 9316264,
      netIncome: 619939,
      ceoSalary: 120000,
      yoyGmv: 95,
      yoyRevenue: 85,
    },
    {
      year: 2021,
      gmv: 185482505,
      revenue: 10973977,
      netIncome: 614347,
      ceoSalary: 180000,
      yoyGmv: 30,
      yoyRevenue: 18,
    },
    {
      year: 2022,
      gmv: 185824553,
      revenue: 10568383,
      netIncome: -1010180,
      ceoSalary: 250000,
      yoyGmv: 0,
      yoyRevenue: -4,
    },
    {
      year: 2023,
      gmv: 170717933,
      revenue: 20688841,
      netIncome: 8892746,
      ceoSalary: 400000,
      yoyGmv: -8,
      yoyRevenue: 96,
    },
  ];

  useEffect(() => {
    updateChart();
  }, [hourlyRate, equityPercentage, hoursPerWeek, weeksPerYear, growthRate]);

  const updateChart = () => {
    const yearlyIncome = hourlyRate * hoursPerWeek * weeksPerYear;
    const initialCashCompensation = yearlyIncome * (1 - equityPercentage / 100);
    const initialEquityCompensation = yearlyIncome * (equityPercentage / 100);
    const initialDividendRate = 0.0534;

    const newChartData = [];
    const newTableData = [];
    const growthMultiplier = 1 + growthRate / 100;
    let cumulativeDividends = 0;

    for (let year = 1; year <= 30; year++) {
      const allCashCompensation = yearlyIncome;
      const cashCompensation = initialCashCompensation;
      const equityDividend =
        year === 1
          ? 0
          : initialEquityCompensation *
            initialDividendRate *
            Math.pow(growthMultiplier, year - 1);
      cumulativeDividends += equityDividend;
      const totalCompensation = cashCompensation + cumulativeDividends;

      newChartData.push({
        name: `Year ${year}`,
        "All cash": Math.round(allCashCompensation),
        "Cash + equity": Math.round(totalCompensation),
      });

      newTableData.push({
        year: 2023 + year,
        cash: Math.round(cashCompensation),
        cashBonus: 0,
        totalCash: Math.round(cashCompensation),
        dividends: Math.round(cumulativeDividends),
        cashPlusEquity: Math.round(totalCompensation),
        allCash: Math.round(allCashCompensation),
      });
    }

    setChartData(newChartData);
    setTableData(newTableData);
  };

  const renderFinancialTable = (maxYear) => {
    const startYear = 2012;
    const yearsToShow = Array.from(
      { length: maxYear - startYear + 1 },
      (_, i) => startYear + i
    );

    return (
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr className="bg-gray-100 text-sm">
              <th className="border border-gray-300 px-3 py-1">Year</th>
              <th className="border border-gray-300 px-3 py-1">GMV</th>
              <th className="border border-gray-300 px-3 py-1">Revenue</th>
              <th className="border border-gray-300 px-3 py-1">Net income</th>
              <th className="border border-gray-300 px-3 py-1">CEO salary</th>
              <th className="border border-gray-300 px-3 py-1">YoY GMV</th>
              <th className="border border-gray-300 px-3 py-1">YoY Revenue</th>
            </tr>
          </thead>
          <tbody>
            {yearsToShow.map((year) => {
              const data = financialData.find((d) => d.year === year) || {};
              return (
                <tr key={year}>
                  <td className="border border-gray-300 px-4 py-2">{year}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${data.gmv ? data.gmv.toLocaleString() : "-"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${data.revenue ? data.revenue.toLocaleString() : "-"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${data.netIncome ? data.netIncome.toLocaleString() : "-"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${data.ceoSalary ? data.ceoSalary.toLocaleString() : "-"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.yoyGmv !== null ? `${data.yoyGmv}%` : "-"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.yoyRevenue !== null ? `${data.yoyRevenue}%` : "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <Layout>
      <Head>
        <title>Paying Freelancers in Equity and Dividends</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shl" />
        <meta
          name="og:title"
          content="Paying Freelancers in Equity and Dividends"
        />
        <meta
          name="og:description"
          content="Gumroad pays freelancers around the world $125-$200/hr. They choose how much of this they'd like to get in equity–between 0 and 80%. Equity entitles one to annual dividends."
        />
        <meta
          name="og:image"
          content="https://sahillavingia.com/dividends/social-split.png"
        />
        <meta
          name="twitter:title"
          content="Paying Freelancers in Equity and Dividends"
        />
        <meta
          name="twitter:description"
          content="Gumroad pays freelancers around the world $125-$200/hr. They choose how much of this they'd like to get in equity–between 0 and 80%. Equity entitles one to annual dividends."
        />
        <meta
          name="twitter:image"
          content="https://sahillavingia.com/dividends/social-split.png"
        />
      </Head>

      <main className="prose mx-auto p-4 sm:p-8 flex-1 w-full max-w-3xl relative z-10">
        <label className="block mt-8 mb-8">
          May 20, 2024 by{" "}
          <a href="/">
            <u>Sahil Lavingia</u>
          </a>
        </label>

        <h1>Paying Freelancers in Equity and Dividends</h1>

        <p>
          Since the beginning of 2024, Gumroad has raised $268,988 from our
          global team of hourly freelancers, at the same $100M valuation we used
          for our 2021 crowdfunding round. Equity entitles one to dividends. We
          issued our first annual dividend, of $5.34M, on May 14.
        </p>

        <p>
          You can read more about our equity program in our{" "}
          <a href="https://www.notion.so/gumroad/Getting-paid-1d0a875413444556953d044bc4502469#71bfd72228bf4b88815c6e665d2f32e1">
            Getting Paid
          </a>{" "}
          onboarding document at Gumroad.
        </p>

        <p>
          I think our equity model is cool. My mom thinks it is confusing.
          Others, like my wife, see anything that is not a direct cash payment
          as a Ponzi scheme. This is my best attempt at explaining Gumroad's
          approach to equity, and the history behind it, so you can decide for
          yourself.
        </p>
        <p>
          It wasn't always this way; from 2015-2019, everyone at Gumroad was
          paid cash, no equity. No one wanted any. Gumroad was no longer on its
          way to becoming <a href="/reflecting">a billion-dollar company</a>,
          and I was living cheaply in Utah, learning how to paint 30 hours a
          week. I used any excess profits to grow the team and tackle the
          growing wall of technical debt.
        </p>
        {renderFinancialTable(2019)}
        <p>
          In January 2020, I moved to Portland, Oregon for my wife's job. Then,
          COVID happened.
        </p>
        <h2>COVID, Equity Crowdfunding, Creator Economy</h2>
        <p>
          Due to the global pandemic, more people than ever before were using
          the Internet to learn new hobbies and monetize their creative skills.
          As a result, Gumroad grew faster in weeks than it had in years.
          Investors and journalists termed this trend the "creator economy."
        </p>
        {renderFinancialTable(2020)}
        <p>
          Raising money was tempting, but I'd been down that road before. Still,
          I felt that we could ship more product features, and let more creators
          know about them, with a larger team.
        </p>
        <p>
          Equity crowdfunding offered an alternative to VC: founders could raise
          up to $1.07M per year from non-accredited investors all over the
          world, so long as they published financials online. I was already
          publishing my financials online, but the cap was too low to seriously
          consider.
        </p>
        <p>
          On March 15, 2021, the SEC increased the annual equity crowdfunding
          cap from $1.07M to $5M. That same day, Gumroad used equity
          crowdfunding to raise $5M from 7,387 investors at a $100M valuation.
        </p>
        <p>
          I used the money to grow the team from 25 to 45, investing heavily in
          our content and community efforts, and refreshed the Gumroad brand. We
          also started working on a new product,{" "}
          <a href="https://flexile.com/">Flexile</a>, to productize the way we
          worked, with{" "}
          <a href="/work">
            no meetings, no deadlines, and no full-time employees
          </a>
          . At the time, I used a combination of Bill.com, HelloSign, and a
          bunch of manual processes, to hire and pay everyone; Flexile would
          automate all of that.
        </p>
        <p>
          Less than a year later, the pandemic's effects began to subside. Two
          years later, Gumroad's growth plateaued. Then interest rates went up.
          I pared the team down to get back to cash flow breakeven. Meanwhile,
          Flexile acquired no customers.
        </p>
        <p>
          In 2022, Gumroad lost $1M helping creators earn $185M. That wasn't
          sustainable.
        </p>
        {renderFinancialTable(2022)}
        <h2>Charging more</h2>
        <p>
          On January 31, 2023, we increased Gumroad's pricing to be simpler,
          higher, and the same for all creators, regardless of income level: 10%
          flat, exclusive of payment processing fees.
        </p>
        <p>
          The ZIRP-fuel haze that peaked during COVID and allowed Gumroad to
          spend the first decade of its life operating with an incredibly
          creator-friendly business model was over.
        </p>
        <div
          className="w-[90%] my-8 mx-auto bg-white border border-black"
          style={{ borderWidth: "1px", color: "#000 !important" }}
        >
          <h2 className="text-2xl font-bold mb-4 mt-6 ml-6">
            Updating Gumroad's fee on Jan 31
          </h2>
          <hr className="border-black mb-6" />
          <p className="mb-2 mx-6 text-black text-base leading-relaxed">
            We are updating our fee to be simpler and higher.
          </p>
          <p className="mb-2 mx-6 text-black text-base leading-relaxed">
            Going forward, new pricing will be 10% for all creators who use
            Gumroad. This is 1% higher than the initial 9% tier that Gumroad
            creators used to start with. This no longer includes credit card
            processing fees, so you know exactly how much Gumroad is making.
          </p>
          <p className="mb-2 mx-6 text-black text-base leading-relaxed">
            You can see what we've been up to—including demos from a bunch of
            team members!—as part of{" "}
            <a href="#" className="text-blue-600 hover:underline">
              our last public board meeting
            </a>
            .
          </p>
          <p className="mb-2 mx-6 text-black text-base leading-relaxed">
            Hopefully you feel it's still a good deal. If you stay, we will work
            very hard to reward you for that decision. If you decide to leave,
            that's understandable too.
          </p>
          <p className="mb-2 mx-6 text-black text-base leading-relaxed">
            It was great to create with you over the past decade, and we look
            forward to the next one!
          </p>
          <p className="mx-6 mb-6 text-black text-base leading-relaxed">
            Best,
            <br />
            Sahil and the Gumroad team
          </p>
        </div>
        <p>
          Spoiler alert: it worked. <em>Thank you</em> to the 55,000 creators
          who stuck with us!
        </p>
        <p>
          Finally, Gumroad was a sustainable business, not looking for an exit.
          And frankly, I had waited long enough. My wife and I wanted to move to
          NYC and start a family. It was time for us to start taking a share of
          Gumroad's profits, as a reward for the years of work I put into
          building the company.
        </p>
        <h2>Delving into dividends</h2>
        <p>
          This isn't new: Dividends are the primary way businesses pay their
          owners.
        </p>
        <p>
          According to the IRS, about 200,000 businesses in the US pay dividends
          of more than $10M to their owners. For reference, there are just 6,000
          publicly-listed companies in the US.
        </p>
        <p>
          Some people prefer profit-sharing. It's simpler, but it amounts to a
          glorified bonus. Because it's a bonus, it's taxed as income. And what
          happens when you get fired or laid off, or choose to take a break from
          work? It's gone. Qualified dividends, meanwhile, are taxed at the
          long-term capital gains rate.
        </p>
        <p>
          However, Gumroad's history made issuing dividends non-trivial. In
          2011-2012, we raised Seed and Series A rounds from angels and VCs. As
          part of owning preferred shares, investors acquire the right to block
          any dividends to common stockholders.
        </p>
        <p>
          With{" "}
          <a href="https://x.com/shl/status/1679308995268587522">
            a couple emails
          </a>{" "}
          asking nicely, I was able to get this approval from all of Gumroad's
          original investors. I owe a massive <em>thank you</em> to Accel, Max
          Levchin, SV Angel, First Round, Naval Ravikant, Collab Fund, Tuesday
          Capital (formerly CrunchFund), and Caffeinated Capital, for allowing
          us to amend our charter to issue 60% of our net income as dividends
          every year.
        </p>

        <p className="flex justify-between items-center">
          <img src="/dividends/charter.jpeg" className="w-1/2 h-auto" />
          <img src="/dividends/intelligent.jpeg" className="w-1/2 h-auto" />
        </p>
        <p>
          (I got 60% from The Intelligent Investor, a book recommended by Warren
          Buffett and published in 1949, back when interest rates were non-zero.
          From it, I learned that the average dividend payout ratio has
          decreased from 90% in the 1940s to less than 30% in recent years. When
          interest rates were high in the 60s and 70s, the average dividend
          payout ratio was 60%.)
        </p>
        <p>
          Once we had permission to issue dividends, we needed a way to
          functionally do so. In our case, to 7,387 investors. This is a large
          part of the offering that the NYSE and NASDAQ provide their public,
          enterprise customers, such as Meta, NVIDIA, and Apple.
        </p>
        <p>
          If you're a private company, options are limited. The portal we used
          to raise our crowdfunding round had been planning to build this
          feature for years, but hasn't yet. Our cap table provider wouldn't
          help either. Both an old-school bank and a new-age crypto startup
          quoted us over $100K for the privilege.
        </p>
        <p>
          Fortunately, we had been building Flexile, to solve our own problem of
          paying remote workers all over the world. Why not add dividends for
          investors to it? We decided to DIY.
        </p>
        <p>
          A few months later, in July 2023, we issued a $1M trial dividend to
          our cap table, using <a href="https://flexile.com">Flexile</a>.
        </p>
        <p>
          To align the team, I proposed an equity bonus, tied to the amount
          billed for the prior calendar year and our last public valuation. For
          example, someone who earned $198K would have received an additional
          100%, or $198K, in Gumroad stock options, tied to the $100M
          crowdfunding valuation.
        </p>
        <p>
          To my surprise, there was more confusion than excitement. We jumped on
          a rare Zoom call, where I learned there were many problems.
        </p>
        <h2>Splitting equity hairs</h2>
        <p>
          First, no one knew how to value the equity they were being given. We
          had raised $5M at a $100M valuation from over 7,000 people, but that
          was now two years prior. What would someone pay for it today?
        </p>
        <p>
          Second, it wasn't actually equity, but stock options, which had an
          exercise price. If someone wanted to exercise their options, that
          meant they'd have to pay the company to own the stock outright. And if
          they left, they'd only have 90 days to exercise, before they'd expire
          forever.
        </p>
        <p>
          Third, it was a universal bonus. Some people had kids, lived in an
          expensive city, or worked very part-time, and would have preferred to
          trade the option for equity for more cash upfront instead.
        </p>
        <p>
          All in all, equity was valuable to me, but not seen as valuable by the
          median freelancer. So why bother?
        </p>
        <Tweet id="1002103670400417792" />
        <p>
          I'll admit my obsession with giving people equity stems from my own
          missed opportunity.
        </p>
        <p>
          In 2010, I dropped out of college to join Pinterest, accepting an
          offer of $65K a year + 0.5% of the company's shares, vested over four
          years, with an industry-standard one year cliff.
        </p>
        <p>
          Six months in, I got a raise to $75K a year + 0.75% of the company.
        </p>
        <p>
          Then, a few months before my cliff, I was told the quality of my work
          was not up to the bar they were looking for and that "today was [my]
          last day." I was fired, and all of my equity returned to the employee
          stock option pool, to be allocated to future full-time employees.
          Ashamed, I told everyone I "left" Pinterest and started raising money
          for Gumroad.
        </p>
        <p>
          While I wasn't a great full-time employee, I was a good freelancer.
          Before joining Pinterest full-time, I freelanced for them remotely.
        </p>
        <p>
          But I wanted to earn equity, so I dropped out. Before I did so, I
          tweeted:
        </p>
        <Tweet id="27946496473" />
        <p>
          Thirteen years later, Gumroad was a profitable business, and Flexile
          was handling our dividends. Why not add equity to the mix?
        </p>
        <h2>Equity by the hour</h2>
        <p>
          Today, Gumroad pays hourly freelancers around the world $125-$200/hr.
        </p>
        <p>
          Of this, everyone chooses how much they'd like to get in stock
          options–between 0 and 80%.
        </p>
        <p>
          In practice, we issue a full year of unvested stock options at the
          beginning of each year. Options vest as invoices are approved, using
          the last public valuation–currently $100M.
        </p>
        <p>
          At the end of the year, you receive a cash bonus equal to the exercise
          price of the vested options. Use this to exercise, and start receiving
          dividends. If you don't, you will still have 10 years–after leaving
          the company–to do so.
        </p>
        <p>There are no cliffs.</p>
        <p>
          Still, future liquidity is hard to reason about. $1 in your pocket
          today is worth more than $1 in your pocket a year from now. But how
          much more? That's different for everyone. For example:
        </p>
        <p>
          One of our software engineers could have made $308K this year.
          Instead, they decided to take 50% of their compensation as equity
          ($154K), saying: "My expenses are low, and I've saved up enough over
          the last year or two that I don't need the extra cash. I see the
          options as significantly discounted at their current strike price."
        </p>
        <p>
          Someone who chose 80%: "Living from the 20% is enough for us. I know
          and trust the team who runs Gumroad, and have been planning to start
          long-term investing anyway."
        </p>
        <p>
          Someone who chose 1% didn't want to miss out on the fun completely.
          "It has very little to do with my outlook on Gumroad. I'm just putting
          all my spare cash into{" "}
          <a href="https://lazytigerhostel.com/">my own business</a> this year."
        </p>
        <p>
          It can be confusing, so I created{" "}
          <a href="https://docs.google.com/spreadsheets/d/1OvHmIg5MA72oot-jRW-whEBROSmcMXcMRvFqkKfiQFM/edit#gid=805394775">
            a calculator
          </a>{" "}
          to help:
        </p>

        <div className="my-8">
          <h3>Compensation calculator</h3>
          <div className="mb-4">
            <label htmlFor="hourlyRate" className="block">
              Hourly rate ($): {hourlyRate}
            </label>
            <input
              type="range"
              id="hourlyRate"
              min="50"
              max="250"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hoursPerWeek" className="block">
              Hours per week: {hoursPerWeek}
            </label>
            <input
              type="range"
              id="hoursPerWeek"
              min="1"
              max="80"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="weeksPerYear" className="block">
              Weeks per year: {weeksPerYear}
            </label>
            <input
              type="range"
              id="weeksPerYear"
              min="1"
              max="52"
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <p>
              Annual compensation before equity split: $
              {(hourlyRate * hoursPerWeek * weeksPerYear).toLocaleString()}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="equityPercentage" className="block">
              Equity percentage: {equityPercentage}%
            </label>
            <input
              type="range"
              id="equityPercentage"
              min="0"
              max="80"
              value={equityPercentage}
              onChange={(e) => setEquityPercentage(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <p>
              Net annual compensation: $
              {(
                hourlyRate *
                hoursPerWeek *
                weeksPerYear *
                (1 - equityPercentage / 100)
              ).toLocaleString()}
            </p>
            <p>
              Amount taken as equity: $
              {(
                hourlyRate *
                hoursPerWeek *
                weeksPerYear *
                (equityPercentage / 100)
              ).toLocaleString()}
            </p>
          </div>
          {chartData.length > 0 && (
            <div className="mt-8" style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip
                    formatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Legend />
                  <Bar dataKey="All cash" fill="#8884d8" />
                  <Bar dataKey="Cash + equity" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          <div className="mt-4">
            <label htmlFor="growthRate" className="block">
              Yearly growth rate: {growthRate}%
            </label>
            <input
              type="range"
              id="growthRate"
              min="0"
              max="100"
              value={growthRate}
              onChange={(e) => setGrowthRate(Number(e.target.value))}
              className="w-full"
            />
          </div>
          {tableData.length > 0 && (
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Cash</th>
                    <th>Cash bonus (neutral)</th>
                    <th>Total cash</th>
                    <th>Dividends</th>
                    <th>Cash + equity</th>
                    <th>All cash</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.year}</td>
                      <td>${row.cash.toLocaleString()}</td>
                      <td>${row.cashBonus.toLocaleString()}</td>
                      <td>${row.totalCash.toLocaleString()}</td>
                      <td>${row.dividends.toLocaleString()}</td>
                      <td>${row.cashPlusEquity.toLocaleString()}</td>
                      <td>${row.allCash.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p>For 2024, the average equity split is 18.3%.</p>
        <p>
          <img src="/dividends/split.png" className="max-w-full my-4 mx-auto" />
        </p>
        <p>
          The company saves money, the team owns more, the product improves, I
          work and worry less. Win-win-win-win.
        </p>
        <p>
          We also gave a token amount of equity to alumni who worked on Gumroad
          from 2011-2015, without whom you wouldn't be reading any of this.{" "}
          <em>Thank you</em>!
        </p>
        <p>
          On May 14, we issued our first annual dividend, of $5.34M, equal to
          60% of 2023's net income. For the first time, our team of remote
          freelancers were able to participate.
        </p>
        <h2>D'end</h2>
        <p>
          From 2012-2015, Gumroad ended each board meeting with a slide that
          read: "The end. (IPO)"
        </p>
        <p>
          Now, we host{" "}
          <a href="https://www.youtube.com/watch?v=qUYSTvJnIXA">
            public quarterly board meetings
          </a>{" "}
          to keep ourselves accountable. We no longer have plans to IPO nor
          sell, just to keep shipping product(s) and issuing dividends. As long
          as the TAM supports the team, I'm happy. At least for now, it does.
        </p>
        {renderFinancialTable(2023)}
        <p>
          If you'd like to follow along,{" "}
          <a href="https://us02web.zoom.us/webinar/register/WN_zUIicnMhSe2sMGGwycGyjg#/registration">
            register
          </a>{" "}
          for our next public board meeting on August 15, now recorded live from
          our new office in DUMBO, Brooklyn, New York!
        </p>
        <Footer />
      </main>
    </Layout>
  );
}
