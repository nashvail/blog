import React from "react"

// Import css
import s_ from "./styles.module.css"

const SOURCES = [
  {
    name: "Creativity as neuroscientific mystery",
    link:
      "https://pdfs.semanticscholar.org/185d/3c3721bfe23dc63bc6b2954f865c81a82ebd.pdf",
    authors: ["Margaret A. Boden"],
  },
  {
    name: "Research on Creativity",
    link: "https://people.ok.ubc.ca/lgabora/#research_section",
    authors: ["Liane Gabora"],
  },
  {
    name:
      "Creativity and Mental Illness - Prevalence rates in writers and their first-degree relatives",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/3499088",
    authors: "Nancy C. Andreasen",
  },
  {
    name: "The relationship between creativity and mood disorders",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3181877/",
    authors: ["Nancy C. Andreasen"],
  },
  {
    name:
      "Creativity and mental disorder: family study of 300,000 people with severe mental disorder",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/21653945",
    authors: [
      "Simon Kyaga",
      "Paul Linchtenstein",
      "Marcus Boman",
      "Christina Hultman",
      "Niklas Langstrom",
      "Mikael Landen",
    ],
  },
]

const Sources = () => (
  <section
    css={`
      grid-column: 5/13;
    `}
  >
    <h2>Sources</h2>
    <ul>
      {SOURCES.map(function(source, key) {
        return (
          <li>
            <a href={source.link} target="__blank">
              {source.name} - {source.authors}
            </a>
          </li>
        )
      })}
    </ul>
  </section>
)

export default function ArticleContent() {
  return (
    <article className={s_.mainArticle}>
      <div className={s_.info}>
        <p>
          <b>Published:</b> 6th April, 2020
        </p>
      </div>
      <p>
        <span className={s_.firstcharacter}>“F</span>uck you Isabel”, my mind
        screeched as I was about to put a spoonful of steaming hot Indian
        breakfast soup in my mouth. No matter how much I enjoyed the sensation
        of something hot flooding the in-betweens of my tongue and teeth on a
        cold winter morning, the only thing that interested me then was where
        did "Isabel" come from? And why did I curse her?
      </p>
      <p>
        I don't have a single friend or a family member with the name Isabel,
        neither have I ever met someone named Isabel.
      </p>
      <p>
        Somewhere along the way I think the word Isabel embedded itself into my
        subconscious and got mixed with something else in there. And then, at
        the right moment–which is never for me to decide, but the subconscious
        itself–it decided to blurt itself out.
      </p>
      <p>
        Blurting out of randomness is maybe just trash piling up in the head and
        being vomited. But what if it is more? What if, it's the subconscious
        trying to whisper an idea for a poem, a story, an app or a film? What if
        it's the universe giving me a chance to be creative?
      </p>
      <p className={s_.quote}>
        “Every time you hear an echo from your Subconscious, you know yourself a
        little better. A small echo may start an idea. A big echo may result in
        a story.”
        <span className={s_.cite}>Ray Bradbury, Zen in the art of writing</span>
      </p>
      <p>
        For a good part of and until the first half of the twentieth century,
        genesis of ideas, creativity and the creative individual were kept from
        serious scientific research. Creativity was, so to say too complex and
        frivolous to be studied by the white coats.
      </p>
      <p>
        This doesn't mean creativity and creative contributions weren't
        recognised. They were. Recognised <i>and</i> celebrated, but not
        understood. Questions like, what is creativity? Why do some people find
        it a good idea to spend years before a big break, and if not for a
        break, their entire lives tortured on streets squiggling lines,
        splashing paint and writing words?
      </p>
      <p>
        And for those whose contributions do succeed and are recognised, how did
        they do it? How did they manifest in the world something that was only
        in their heads, and how did that thing get in their heads in the first
        place? And from the lives and accounts of such individuals why all of
        them agree that pushing something out of your skull and into the world
        often is damaging, or result of a damage, or, both.
      </p>

      <p>
        Moreover, how do you even say if a random human picked out of the 7 plus
        billion lot is creative?
      </p>

      <p>
        When the questions are abundant and the answers are few, we have a
        reputation of turning to god, religion, myths and our mothers.
      </p>
      <p className={s_.quote}>
        “Where did you keep the pink sock again mum?”
        <span className={s_.cite}>- Nash</span>
      </p>

      <p>
        Up until the mid 20th century the concept of genius and the muse
        sufficed to explain creativity, the creative individual and creative
        outputs.
      </p>

      <p>
        Romans believed that a gifted person had a genius, a guardian angel, a
        conduit to their inspiration. The one that whispered ideas, sometimes
        clear sometimes wrapped in vague abstractions like "Fuck you Isabel".
        Along the same lines lies the myth of "muse". A divine spirit that
        visits you and makes you make stuff. The day when you paint in a fury is
        the day when the muse was sat right on your shoulders. And when you
        waste the most creative part of your day producing utter shit, that day,
        the muse didn't choose visit you.
      </p>

      <p>
        And if you’re one of those who can’t ever write a poem or a book or
        paint a picture, or sing an original lullaby to your cat, or even
        consider doing anything close to it, then you don’t have a genius or a
        muse. You are a piece of...
      </p>
      <p>
        When you wrap mysteries around myths this beautiful it takes Science a
        long time to come around and pry through it.
      </p>
      <p>
        If you go by the words of self-help gurus who always have answers to
        everything including what F.R.I.E.N.D.S character I am if I own pink
        socks, then, "Everyone is creative". We all have jewels buried inside,
        we're just waiting for the right moment to unleash our “creative
        potential”.
      </p>
      <p>
        Such opinions on creativity makes you feel better and maybe that’s why
        they sell. But, on a second thought they aren't <i>really</i> wrong. We
        humans, as a specie are creative. We rule this planet. Despite having 0
        actual in the wild surviving capabilities, no sharp teeth or nails,
        can't sprint for more than 5 minutes, can't climb trees quickly, can't
        camouflage, can't survive cold without the aid of ripped off skin and
        fur. Our infants are defenceless and can't walk for fucking years and
        are annoying as shit. Despite all this..
      </p>
      <p>We rule this planet.</p>
      <p>
        Because we have language, language gives us thought, thought gives us
        the ability to conjure stories, people who believe in those stories can
        organise themselves in groups, groups collaborate, groups rule.
      </p>
      <p>
        Thought gave us the power to look at a log of wood and imagine a car.
        That same thought gives us the ability to dwell on the past and fear the
        future. That's imagination, that is creativity and in that sense humans
        by definition are creative.
      </p>

      <p className={s_.quote}>
        “The ability to generate ideas/artefacts that are new, surprising, and
        valuable – is an aspect of human intelligence in general”
        <span className={s_.cite}>- Nash</span>
      </p>

      <p>And that, could’ve been the end of the story.</p>
      <h1>The Production Gap</h1>
      <p>
        Even if we take "everyone is creative" to be true in a scientific sense.
        There are still facts out there that makes accepting it a little uneasy.
        Even though we're not ready to admit it to ourselves or to our friends
        or to our children or to our friend's children that even if we're all
        creative some of us make more things, do more things, make better
        things, suffer more and suffer better.
      </p>

      <p>
        That gap of all of us being creative and some of us faring better at
        being creative is understood by the self help industry as lack of
        motivation.
      </p>
      <p>
        Pick a few sentences out of the famous talks and quotes and you will
        understand that all they are teaching is motivation, they are pushing
        you to make more stuff, get that thing out of you. This, in itself has
        whole another value of its own but that is not teaching how to be a
        creative. Assuming that creativity can be taught in the first place.
      </p>
      <p>
        In 2004 Boden published a study which had a segment talking about
        classifying creative outputs. If result of a creative process is
        something that is new to all of humanity or makes an impact on the
        course of civilisation it's H-creativity or Historical creativity. When
        you make something that is new to just you, and doesn't have an impact
        on the human civilisation, it's personal creativity or, P-creativity.
      </p>
      <p>
        Now to be "more" correct not every creative output can be exclusively
        put into a P or an H bucket. Things make more sense when you consider P
        and H creativity as extremes of a spectrum and not one of two trash
        cans, wet goes here and dry there. I didn't mean trash cans I meant
        buckets. Most creative outputs go into the trash anyway so fuck it...
      </p>
      <p>
        The point is, if you try and put whatever you have made, or anyone else
        has made into the H-P Creativity spectrum, it <i>will</i> find a place
        in it, and in that, everyone again, is creative. The Dreamcatcher you
        designed last weekend can sit with Dostoyevsky's Crime and Punishment in
        the same spectrum just waaaaaay left near the Personal end.
      </p>
      <p>
        But why the gap when all of us are born creative? Is the self-help
        industry correct? There's just lack of motivation? Most of us just
        aren't motivated enough to fully utilise our gifts or even recognise
        them?
      </p>
      <h1>The Biological Gap</h1>

      <p>
        Two groups, preferably of equal sizes are considered when performing a
        scientific research. A research, say to establish or to learn more about
        the differences between a group of selected specimen and the rest of the
        population.
      </p>
      <p>
        The group being tested for the difference is called the{" "}
        <b>test group</b>, or the oddballs. The other group is the{" "}
        <b>control group</b>, which is used as a benchmark to establish the
        difference.
      </p>
      <p>
        For the 1987 research titled, Creativity and Mental Illness: Prevalence
        rates in writers and their first-degree relatives, Nancy Andreasen
        selected a test group of 27 men and 3 women writers. She made sure that
        the group represented a valid cross section of contemporary American
        writers. These writers are our oddballs.
      </p>
      <p>
        The writers were matched for age, sex and educational status to an
        occupationally varied group of 30 control subjects. The 30 control
        subjects formed the control group.
      </p>
      <p>
        The 60 individuals (test group + control group) were studied and tracked
        for mental disorders and illnesses for 15 years. At the end of 15 years
        2 of the 30 oddballs had committed suicide.
      </p>

      <p>
        The writers were also found to have significantly higher rates of
        alcoholism (30%, compared to 7% of the control group).
      </p>

      <p>
        43% of the writers had had some type of bipolar illness, in comparison
        to 10% of the control subjects.
      </p>

      <p>
        Andreasen also observed that it was not only the individual writers but
        the families of the writers were riddled with both creativity and mental
        illness, while in the families of control subjects much of the illness
        and creativity seemed to be randomly scattered. This also to some degree
        confirmed the earlier arguments of researchers like Lombroso and Ellis
        who argued that creativity and mental illness run in families and both
        tendencies are hereditary.
      </p>
      <p>
        Andreasen's and other similar studies suggest that the behavioural gap
        between the writers and the control group had something to do with
        biological traits. And this lies in parallel with the school of thought
        that creativity is a biological trait in the sense that not everyone is
        creative but only a few of us are. We're born with it and in the end it
        cannot be taught and the self-help industry teaching creativity is a
        fluke all they're doing is what they do best, motivating you.
      </p>
      <p>All of this can be better understood like so.</p>
      <p>
        A trait is a genetically determined characteristic. Extroversion is a
        trait, introversion is a trait and some, including me would argue, being
        an asshole is a trait as well. We're all genetically predisposed without
        a single say to be introverted extroverted criminals sadists masochistic
        sanctimonious e.t.c e.t.c
      </p>
      <p>
        In any case, consider a biological trait, we'll call it O. O for
        obsessive, other, over-the-board, oddball, otherworldly? I don't know.
        Obtuse? I said I don't fucking know! Leave an introvert in a social
        setting for enough time and they will wither, isolate an extrovert from
        social interaction for enough time and they will start to wither too.
        Stop an O from making things and they will wither just the same. It's
        not that making stuff makes them happy, it's that not making stuff makes
        them <i>really</i> unhappy.
      </p>
      <p>
        That's the line. There is the biological gap. I am okay not writing that
        poem I felt like writing, you'll be okay not completing that story that
        you started, you'll be just fine procrastinating buying paint to finish
        your half painted piece because the paints ran dry. Everyday you will
        look at the half finished canvas and it will not affect your mental
        health. And even if you finish something, the feeling of it being not
        good enough will not make your cerebrum pound. But it will do all of
        that and more to an O, sometimes leading to erratic behaviour,
        alcoholism and even suicide.
      </p>
      <p>
        To draw an approximate parallel, you can see obsessing over cleanliness
        is just another biological trait, some of us are born with it. I cannot
        live with dishes in the sink, but maybe you can, even when there are
        more dishes in the sink than the shelf, in which case I hope you burn in
        hell.
      </p>
      <p>
        One very small window of the house of creativity opens towards the sea
        of greatness and we accept that to be the entire truth.
      </p>
      <p>
        And it's not our fault. Availability bias makes us do that. If I ask you
        to recall a red flower the word Rose will start forming in your mouth
        even before I finish the sentence. Which isn't wrong, but just so that
        you can only recall one red flower doesn't mean there are no other red
        flowers on the planet. Some are in vases in offices, some in the hair of
        a pretty girl and some growing beside a gutter.
      </p>
      <p>
        Similarly, if I ask you to recall someone creative you'd probably end up
        naming a celebrity, which isn't wrong but there are other people who are
        equally or more creative but aren't celebrities. They could be a
        waitress, or they could be rowing a boat across Venice singing an
        original poem. Rose is a famous red flower and celebrities are famous
        creatives.
      </p>
      <p>
        Because your mind equates being creative to celebrity to success/money
        and applies the transitive law it has us believing creativity = success
        the entire time. Which is only true for a very very very small fraction
        of people who are creative and dare to monetise their creativity, or can
        earn money being creatives. And then, there's a whole industry asking
        you to be creative and a whole another set of people telling you it's
        biological, creativity can't really be taught. Whom will you trust? Best
        selling authors or the people whose minds screech fuck you to imaginary
        females while having soup for breakfast?
      </p>
      <p>
        I don’t want you to leave this mind blurb of mine with definitive
        answers, because I don't have any. I expect to leave you with questions
        you never questioned before. Because questions means movement. If an
        answer is a full stop, a question is a turn of a new page, the touching
        of an ink soaked nib onto a fresh white hot paper. Only questions worth
        attempting to answer are the questions that sprout more. Because what
        will we do if we have answers to everything. Where is the god we’ll run
        to with our bag full of answers saying “here, we now know everything
        there is, now what?”.
      </p>
      <p>
        We’re all different with faults and follies and gains distributed on a
        lottery. Instead of yearning for something you didn’t get, it does
        better to look into your bag and make something good of the junk you did
        get. As a specie, our differences in temperaments and interests is
        precisely why we have managed to do what we have done. We put a man on
        the moon for fuck’s sake, and that was about a 100 years ago. If we were
        a specie of everyone writing poems about the moon, we would’ve never
        stepped on it. So young, so beautiful, so ambitious, so wounded we are.
        There is chaos and beauty and there is no other place, no heaven we’d
        rather want to be in or we can. If a god ever shows up we’ll show him
        our scars, our betrayals and the human condition, we’ll also show him
        our music, our dance, our paintings, our best selling books, our
        dreamcatchers, we’ll show him people laughing in the face of mortality,
        lovers embracing each other in the face of inevitable separation and
        then we’ll ask him, wouldn’t you wish to be one of us? And he’ll
        probably say yes.
      </p>
      <hr
        css={`
          grid-column: 5/13;
        `}
      />
      <Sources />
    </article>
  )
}
