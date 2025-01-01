import Footer from "../footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Across the Border",
  description: "A story about the distances technology fails to bridge.",
  openGraph: {
    title: "Across the Border",
    description: "A story about the distances technology fails to bridge.",
    images: [
      {
        url: "https://sahillavingia.com/border.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shl",
  },
};

export default function Home() {
  return (
    <>
      <div className="w-full h-[600px] bg-blue-900 bg-opacity-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/border.png')] bg-cover bg-center"></div>
      </div>

      <main className="prose dark:prose-invert mx-auto p-4 sm:p-8 flex-1 w-full max-w-3xl relative z-10">
        <label className="block mt-8 mb-8">
          Aug 31, 2018 by{" "}
          <Link href="/">
            <u>Sahil Lavingia</u>
          </Link>
        </label>

        <h1>Across the Border</h1>

        <p>
          Matthew lifted his foot off the gas pedal, inching the car forward.
          The re-entry point was only a few hundred feet away, but at this pace
          it would take upwards of an hour. Past the border it was just another
          five hours until he would be home and asleep in his own bed.
        </p>
        <p>
          But for now, Matthew was an uncomfortable combination of tired and
          restless. His car's self-driving functionality would be disabled until
          he crossed the border, so he couldn't take a nap or disappear into a
          vid. He was also out of signal range, and sick of every song saved
          locally. So he waited in silence, crawling forward, just a few dozen
          cars to go.
        </p>
        <p>
          Your connection has been restored, his car spoke to him, while text
          flashed on the windshield to accompany it. Please verify your
          identity.
        </p>
        <p>Matthew hesitated.</p>
        <p className="text-center">#</p>
        <p>
          A week before, Matthew's car hurtled down the last stretch of US
          space. Vanessa's messages remained unread on the windshield:
        </p>
        <div className="flex flex-col items-start space-y-2 max-w-xs mr-auto">
          {[
            "C u in three weeks?",
            "Hellooooooo?",
            "I miss u",
            "Cya soon…. rite?",
            "R u coming or not?",
            "I ❤️ u",
            "Got an A in MoBio!!",
            "😡",
          ].map((message, index) => (
            <div
              key={index}
              className="px-3 py-2 bg-gray-200 dark:bg-neutral-900 text-black dark:text-white rounded-2xl rounded-bl-none max-w-[70%]"
            >
              {message}
            </div>
          ))}
        </div>
        <p>"Call Vanessa," Matthew said.</p>
        <p>
          "Hello?" Came her voice. "Where are you dad? You're not coming, are
          you?"
        </p>
        <p>"I'm not sweetie. I'm not." He steeled himself for her reaction.</p>
        <p>"Why?" She croaked.</p>
        <p>
          "I got called to help set up a hospital. I dreaded telling you..."
        </p>
        <p>"It's not that hard to text."</p>
        <p>"I'm sorry."</p>
        <p>
          "Why'd it have to be now? I haven't seen you since..." Her voice
          trailed off.
        </p>
        <p>"I don't know."</p>
        <p>"It's just not fair!"</p>
        <p>"Van, please–"</p>
        <p>"Dad, let me–"</p>
        <p>Your connection has been terminated.</p>
        <p>Self-driving capabilities are now disabled.</p>
        <p>Welcome to BajaX.</p>
        <p className="text-center">#</p>
        <p>
          "Matthew Johnson," he said, uttering his passphrase, "yellow monkeys
          play guitar."
        </p>
        <p>
          Identity verified. United State Citizen. You have fifteen-thousand
          four-hundred and two unread emails… Three unread messages… One missed
          call.
        </p>
        <p>"Filter, messages from Vanessa."</p>
        <p>
          Hellooooooooooo? Vanessa's messages flashed up on the windshield in
          grand white text, shoving the rest of the interface aside. R u dead???
        </p>
        <p>
          Matthew sighed, rejecting the option to send the emoji that
          corresponded to his body language. He knew how that conversation would
          go. Tomorrow, he resolved, after he had slept in a real bed and taken
          a hot shower.
        </p>
        <p>
          Instead, he looked out the windshield, up at the glossy black wall
          that towered over him and stretched out in both directions. Its
          monolithic surface hid a city that blazed with changing hues, burning
          neon and shafts of multicolored light.
        </p>
        <p>
          On this side of the border, among the dusty, cracked streets of Bajax,
          a very different kind of economy endured. People of all ages embraced
          their final chance to sell food, souvenirs, and last-minute gifts to
          homeward tourists. A girl walked by, arms wrapped around a forest of
          perishable flowers. A woman came by and commanded her robots to start
          cleaning the side of Matthew's car. Unlike the ones he had at home,
          these robots were rusty and squeaked as their joints moved. Matthew
          waved them away without success. They scrubbed the whole side of the
          car and scurried onto the hood of his car before Matthew rolled down
          the window and said firmly, "I'm not paying."
        </p>
        <p>She looked him in the eyes and said, "Who asked you?"</p>
        <p>
          Matthew smirked and gave her a few pesos. Bad idea; it seemed everyone
          in a forty-car radius had seen the glint of metal and started to
          descend upon his car.
        </p>
        <p>
          A boy who must have been less than ten stood in front of his car and
          juggled five (then six and seven) balls up in the air, occasionally
          dropping them like a robot wouldn't. A man sat atop a hovering cart
          stirring a vat of neon-yellow churros, keeping pace alongside
          Matthew's car.
        </p>
        <p>
          Matthew had had enough. Of churros, and everything else. He rolled
          back up his windows, stared forward, and tried to sink back into his
          own mind. Eventually the crowd dissipated, refocusing on the other
          cars.
        </p>
        <p>
          A small boy tapped on his window with his fingernails. "Hola," he
          said.
        </p>
        <p>Matthew kept his gaze aimed forward.</p>
        <p>
          The boy pressed a crisp white envelope up against the window. Scrawled
          on it: HELP.
        </p>
        <p>
          He shook his head at the boy. "No more pesos. What about a churro?"
        </p>
        <p>
          The boy laughed. "Not hungry," he said, patting his stomach. "Just
          need help. I need to get this letter to my abuela."
        </p>
        <p>"Can't call her?"</p>
        <p>
          "My abuelo wrote this letter. It's the only way he can communicate
          with my abuela. He was deported fifteen years ago, and it's illegal
          for him to communicate with anyone inside the US. Holo, vidcall,
          phone, they block everything we try… everything except letters."
        </p>
        <p>
          "I'm sorry," Matthew said, "but I need to go home. I haven't slept in
          a real bed in weeks. Could you ask somebody else?"
        </p>
        <p>
          "Okay," the boy said, "but you're the only one going back to Orgone."
          He pointed at the cars in front of him. "Lower California. Lower
          California. New Colorado. Zion. Upper–"
        </p>
        <p>
          Matthew looked ahead, at the slow-moving string of cars before him.
          "Where is he?"
        </p>
        <p>"He can barely walk. He can't speak English. Please?"</p>
        <p>Matthew's car vibrated gently. Vanessa is calling.</p>
        <p>
          "I'm sorry," Matthew said, rolling up the window. He grimaced as he
          tapped the phone icon on the dash. "Hi, Van."
        </p>
        <p>"How are you?" Vanessa asked urgently. "Why didn't you call?"</p>
        <p>"Fine. I'm fine."</p>
        <p>"Are you angry at me?"</p>
        <p>
          "I'm not angry," Matthew sighed. I was just sleeping on a cot in the
          sweltering heat for the past three weeks. "I'm just... tired."
        </p>
        <p>"Mom always–"</p>
        <p>
          "How's school?" Matthew interjected. He did not need to know his
          ex-wife triumphed over him in yet another metric.
        </p>
        <p>"School's good, dad. How was the work trip? Was it worth it?"</p>
        <p>
          Matthew sighed. Just good? Could she elaborate? "Are you done with
          your college essays?"
        </p>
        <p>"No, Dad. I've been busy–"</p>
        <p>"Nothing's as important as college, Van."</p>
        <p>"Grades, Dad! Which also matter!"</p>
        <p>"Don't shout, Van."</p>
        <p>
          "Dad. I haven't talked to you in weeks. You were supposed to be here,
          in person. For my birthday, remember? For all I know, you could have
          been dead. And now all you want to do is tell me college is important.
          No shit, I'm the one applying!"
        </p>
        <p>"Well, I care about your long-term happiness."</p>
        <p>
          "Could you try caring about my short-term happiness for once? You're
          never there for me. You were never there for Mom either. You're so
          selfish. Ugh!"
        </p>
        <p>Vanessa has hung up.</p>
        <p>
          Matthew rubbed the bridge of his nose in frustration. There was a
          tapping at his window again, and he looked to his left to see the same
          boy with a pleading look on his face. He rolled down the window.
          "Where does your grandmother live?"
        </p>
        <p>
          The boy flipped over the envelope. The address was clearly marked. The
          town was a few hours east of where Matthew lived; he had been there
          for a wedding.
        </p>
        <p>
          Matthew took one last look at the boy. Selfish? He looked forward to
          telling Van about delivering the letter. "Give me the letter."
        </p>
        <p>
          An hour later and Matthew was through the crossing. Every bag–even the
          churros–had been turned inside out and back again. They had swabbed
          around the wheels and inside the hood and in every other nook and
          cranny they could find. His car was doused with a disinfectant that
          caused it to smell faintly like a swimming pool. The letter was
          flagged by the scanner, but Matthew defended it as evidence for work,
          flashing his government ID badge. Finally, the lights turned green and
          his car became autonomous.
        </p>
        <p>
          Matthew's pill of a car shot up the PacCoast in the black of night,
          hurtling past trees that blurred together. The only light came from
          the pulsating lane dividers. The drive wasn't as bad as he thought it
          would be. At least his car was toasty, and he had his music back.
        </p>
        <p>
          His daughter's face glowed green on the windshield, indicating that
          she was still awake. All he'd have to do was speak, or tap; but if he
          did that, they would get into an argument and he wouldn't even be able
          to sleep. Instead, he reclined his car seat and watched the stars and
          satellites move across the sky, trying to figure out which one was
          which.
        </p>
        <p className="text-center">#</p>
        <p>
          Your destination is on your right, Matthew's car said as the door slid
          up. A light yellow townhouse framed with squared-off bushes. He
          kneeled down to slip the letter under the door.
        </p>
        <p>
          "Hello," came a voice from above, and Matthew almost fell backwards.
        </p>
        <p>
          An old lady stood in the doorway, propping herself up with a cane. Her
          skin was wrinkled like a prune. "I'm Sabrina, Alejandro's
          grandmother."
        </p>
        <p>
          How did she know I was coming? Matthew spun around, paranoid. Was this
          a trap? He had knowingly helped a family break the law. He handed her
          the letter. "I should go," he said.
        </p>
        <p>"No no no," she said. "You should come in."</p>
        <p>
          "Sorry, but I really think I should just go home and sleep. I'm not
          thinking straight."
        </p>
        <p>"Hello," a voice echoed from behind Sabrina.</p>
        <p>
          "He would certainly love it if you came in," Sabrina said, stepping
          aside.
        </p>
        <p>
          "I don't think–" Matthew's breath caught. There was the boy. Right in
          the middle of the living room.
        </p>
        <p>
          "How did you get here?" Matthew asked. Something was off. Was he
          wearing different clothes? Alejandro was shaking. No, shimmering. He
          saw the lights now, coming down from the corners of the ceiling.
        </p>
        <p>
          "I'm a hologram," the boy shouted. He stepped forward and attempted to
          grab his grandmother's hand.
        </p>
        <p>"You didn't tell him?" Sabrina asked.</p>
        <p>"If I told him," Alejandro said, "he wouldn't have said yes."</p>
        <p>"Explain," Sabrina said, crossing her arms, "and apologize."</p>
        <p>
          "I'm allowed to holo across the border because I'm a citizen,"
          Alejandro said. "I was born here. Without me, we couldn't deliver the
          letters. My abuelo is too old to do it himself."
        </p>
        <p>
          "But why bother with the letters at all," Matthew asked. "If you can
          holo?"
        </p>
        <p>"Why don't you come in, Matthew?" Sabrina said. "It's cold out."</p>
        <p>"You don't say no to abuela," Alejandro said.</p>
        <p className="text-center">#</p>
        <p>
          They sat around a sparse dining table, and Matthew sipped at a cup of
          steaming tea, his legs fidgeting under the table as Sabrina read the
          letter in silence. He watched her eyes, but they betrayed nothing.
        </p>
        <p>"Thank you," she said finally, folding up the letter carefully.</p>
        <p>
          "You're welcome," Matthew replied awkwardly. "And I'm sorry, for what
          our country did to you."
        </p>
        <p>
          "My daughter's asleep, upstairs," Sabrina said, waving the comment
          away. "Alejandro is hers." She let one hand rest next to the letter,
          and the boy's image grasped at it as much as it could. "He was born
          here, but he spends the summers with my husband. It's important for
          him to understand where he came from."
        </p>
        <p>"I could just watch a vid," the boy grumbled.</p>
        <p>
          "Believe me dear, I would love to run my hands through your real
          hair," she said, stroking the virtual representation. Alejandro tried
          to shake her off, then feigned defeat and laid down in her lap.
          "Without him," Sabrina said, "we would have lost touch long ago.
          You're right, of course. While the government does not allow my
          husband to holo, Alejandro could act as our conduit. But our
          relationship is... sacred. There are parts of it no one else deserves
          to know. Not Alejandro, the government, credit profilers, you. For
          that purpose, only the letters suffice." Matthew nodded, tried to stop
          fidgeting.
        </p>
        <p>
          "Of course we would prefer to talk all the time," she continued. "But
          we've discovered there is a magic to writing. It's never too much too
          quick. Sometimes we used to hate each other. We couldn't stand talking
          to each other. But a letter… I'm never angry at him when I'm done
          writing a letter. Not once, in fifteen years. My anger can never make
          it all the way down the length of my arm and onto the paper. You must
          understand."
        </p>
        <p>
          "I have a daughter," Matthew said. "I haven't seen her in two years,
          since the divorce. But we're in the same country. We could visit each
          other."
        </p>
        <p>
          "You should give it a try," Sabrina said. She pushed herself up
          against the table, gripping her cane tightly with one hand. "Here,
          I'll walk you out."
        </p>
        <p className="text-center">#</p>
        <p>
          Matthew couldn't get to sleep, even though it was almost four in the
          morning. His daughter's face still glowed green on the windshield. He
          swiveled the seat around to face an empty desk and reached underneath
          to pick out a clean sheet of paper. It took him a minute to find a
          pen, hidden at the very back of the drawer; rolling it between his
          fingers, he realized it had never been used.
        </p>
        <Footer />
      </main>
    </>
  );
}
