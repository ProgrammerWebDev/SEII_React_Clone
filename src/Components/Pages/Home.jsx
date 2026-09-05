import { Navbar } from "../components/Navbar"
import { AllButton, CustomButton, TransButton, SeperateAllButton } from "../components/Button"
import ShirtImage from "../../assets/shirt.jpg"
import CommunityImage from "../../assets/project_community.png"
import EducationImage from "../../assets/project_education.png"
import EnvironmentImage from "../../assets/project_environment.png"
import HealthImage from "../../assets/project_health.png"
import NutritionImage from "../../assets/project_nutrition.png"
import WomenImage from "../../assets/project_women.png"
import Ticker from "../components/Ticker";
import Card from "../components/Card";
import { Eye, Goal, Heart, Leaf, Baby, Utensils, HandFist, Book, BookMarked, HelpingHand, Mail, Globe, MapPin, } from "lucide-react";
import './Home.css'
import ContactForm from "../components/ContactForm";
function Home() {
  return (
    <body className="font-sans overflow-y-auto [&::-webkit-scrollbar]:hidden min-h-screen w-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 flex flex-col justify-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker/>
      <About/>
      <NumbersSection/>
      <ProgramsSection/>
      <ApproachToChange/>
      <PastProjects/>
      <GetInvolved/>
      <Footer/>
    </body>
  );
}

export default Home;

function Hero() {
  return (
    <div className=" w-full flex flex-col relative py-[10vh] px-20 justify-center items-center gap-4 overflow-x-hidden">
      <h1 className="py-[10vh] text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Eco-Conscious. Child-Centered. Impact-Driven.
      </h1>

      <div className="font-bold text-center flex flex-col gap-8">
        <h1 className="sm:text-6xl text-4xl font-bold leading-tight">
          Building Just, Resilient &{" "}
          <span className="text-orange-400">Sustainable</span> Communities
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          The (SEEII) Sustainable Education and Eco-conscious Innovative Initiative promotes the well-being of marginalized children and protects the environment across Nigeria — one community at a time.
        </p>
        <span className="flex items-center justify-center gap-4">
          <AllButton bgColor="var(--color-orange-500)">Donate Now</AllButton>
          <CustomButton classes="cursor-pointer transition-transform duration-200 ease-in hover:-translate-y-1 group relative overflow-hidden rounded-full px-6 py-3 font-medium border border-emerald-600 bg-emerald-600 text-slate-900 dark:text-white">
            Discover Our Work
          </CustomButton>
        </span>
      </div>

      <div className="sm:flex flex-row gap-8 hidden mt-8">
        {/* Card 1: Active Program */}
        <div className="max-w-[30vw] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col text-center gap-4 p-4 rounded-xl shadow-sm">
          <h1 className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center gap-2 text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            ACTIVE PROGRAM
          </h1>
          <h1 className="text-3xl font-bold">Roots Fund 40@40</h1>
          <div className="flex flex-row gap-8">
            <div className="border-zinc-200 dark:border-zinc-800 border rounded-xl p-6 flex-1">
              <h2 className="text-orange-400 text-2xl font-bold">40</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Children Targeted</p>
            </div>
            <div className="border-zinc-200 dark:border-zinc-800 border rounded-xl p-6 flex-1">
              <h2 className="text-orange-400 text-2xl font-bold">₦920,000</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Cost/Child/Year</p>
            </div>
          </div>
          <AllButton bgColor="var(--color-orange-500)">Sponsor A Child Today</AllButton>
        </div>

        {/* Card 2: Urgent Program */}
        <div className="flex flex-col gap-4 p-4 rounded-xl text-left max-w-[30vw] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h1 className="text-red-700 dark:text-red-500 font-bold text-xl flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            URGENT PROGRAM
          </h1>
          <h2 className="text-red-500 dark:text-red-400 font-semibold">SEEII Blood Bank</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Mobilizing voluntary blood donors to strengthen community health and save lives in critical times.
          </p>

          <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-inner">
            <img 
              src={ShirtImage} 
              alt="SEEII Blood Bank T-Shirt" 
              className="w-full h-full object-cover object-center "
            />
            <div className="absolute inset-0 bg-linear-to-t from-red-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs sm:text-sm font-extrabold tracking-wide uppercase">
                25 JULY 2026 · BE A LIFESAVER
              </span>
            </div>
          </div>
          <AllButton bgColor="var(--color-red-600)">Register As A Donor Today</AllButton>
        </div>
      </div>
    </div>
  );
}

function About(){
  return(
  <div className="flex flex-col sm:flex-row w-full min-h-[120vh] relative sm:p-14 p-4 " id="about">

    <div className="heroine self-center rounded-lg mx-20 sm:w-160 sm:h-120 w-100 h-80 relative overflow-hidden">
      <div className="bottom-6 left-6 flex absolute flex-row bg-slate-900 text-slate-50 p-1 sm:p-4 gap-3 rounded-3xl items-center justify-center ">
        <div className="border-r p-4 ">
          <h1 className="text-orange-500 text-3xl font-bold ">2019</h1>
          <h2>Year Founded</h2>
        </div>
        <div className="">
          <h1 className="text-orange-500 text-xl font-bold">1000+</h1>
          <h2>Lives Affected</h2>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-4 w-full  sm:max-w-160 p-4 right-0 top-6 ">
      <h1 className="text-3xl ">(SEEII) Sustainable Education and Eco-conscious Innovative Initiative</h1>
      <h2 className="text-xl opacity-55">(SEEII) Sustainable Education and Eco-conscious Innovative Initiative is a non-profit organization founded by Oka Elizabeth Ogebe. We work to advance social justice, human dignity, and sustainable development for children, women, young people, and marginalized communities.</h2>
      <div className=" flex flex-col gap-4">
      
        <div className=" flex gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg min-h-20">
          <div className="px-1 py-1 rounded bg-white dark:bg-zinc-900 h-10 w-10 flex justify-center items-center border border-zinc-200 dark:border-zinc-800 "><Eye/></div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Our Vision</h3>
          <p>A just, equitable, and sustainable society where every child is protected, every learner has access to quality education, and every person can thrive in a healthy environment.</p>
          </div>
        </div>

        <div className=" flex gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg min-h-20">
          <div className="px-1 py-1 rounded bg-white dark:bg-zinc-900 h-10 w-10 flex justify-center items-center border border-zinc-200 dark:border-zinc-800 "><Goal/></div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Our Mission</h3>
            <p>To promote inclusive and sustainable development through rights-based, evidence-driven, and community-led interventions that strengthen systems and protect the vulnerable.</p>
          </div>
        </div>

        <div className=" flex gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg min-h-20">
          <div className="px-1 py-1 rounded bg-white dark:bg-zinc-900 h-10 w-10 flex justify-center items-center border border-zinc-200 dark:border-zinc-800 "><Heart/></div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Our Philosophy</h3>
            <p>To promote inclusive and sustainable development through rights-based, evidence-driven, and community-led interventions that strengthen systems and protect the vulnerable.</p>
          </div>
        </div>

        <CustomButton classes="rounded px-8 py-2 bg-emerald-600 transition-transform ease-in hover:-translate-y-1 group relative overflow-hidden hover:bg-emerald-700 ">Join The Mission</CustomButton>
      </div>
    </div>
  </div>)
}

function NumbersSection(){
  return(
    <div className="text-center w-full flex flex-col p-15 px-40 justify-center border-t border-b border-zinc-200 dark:border-zinc-800 m-4">
      <h1 className="font-bold text-3xl sm:text-6xl ">Numbers That Tell Our Story.</h1>
      <p className=" text-slate-50/30 ">Every Number Is A Life Touched</p>
      <div className="flex flex-col sm:flex-row  justify-center"> 
        <div className=" flex flex-col sm:flex-row text-slate-50 gap-3 items-center justify-center">
          <div className=" flex flex-col  justify-center gap-2  px-20 text-slate-900 dark:bg-zinc-900 bg-white border border-zinc-200 dark:border-zinc-800 dark:text-slate-50 rounded-lg py-6 w-80 h-40">
            <h1 className="text-orange-500 text-5xl font-bold text-center ">1000+</h1>
            <h2>Lives Directly Impacted</h2>
          </div>
          <div className="flex flex-col justify-center gap-2  px-20 text-slate-900 dark:bg-zinc-900 bg-white border border-zinc-200 dark:border-zinc-800 dark:text-slate-50 rounded-lg py-6 w-80 h-40">
            <h1 className="text-orange-500 text-5xl font-bold text-center ">40</h1>
            <h2>Children In Active Program</h2>
          </div>
          <div className="flex flex-col gap-2 justify-center px-20 text-slate-900 dark:bg-zinc-900 bg-white border border-zinc-200 dark:border-zinc-800 dark:text-slate-50 rounded-lg py-6 w-80 h-40">
            <h1 className="text-orange-500 text-5xl font-bold text-center ">5+</h1>
            <h2>Community Project</h2>
          </div>
          <div className="flex flex-col justify-center gap-2  px-20 text-slate-900 dark:bg-zinc-900 bg-white border border-zinc-200 dark:border-zinc-800 dark:text-slate-50 rounded-lg py-6 w-80 h-40">
            <h1 className=" text-orange-500 text-5xl font-bold text-center">3 States</h1>
            <h2>Geographic Research</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProgramsSection(){
  return(
    <div className="flex flex-col  gap-8 justify-center text-left px-[10vw] w-full" id="programs">
      <h1 className="text-4xl max-w-80 font-bold">Roots Fund — Sponsor a Child</h1>
      <div className="heroine bg-top sm:bg-left flex flex-col sm:flex-row gap-4 self-center items-center rounded-3xl relative min-h-[120vh] sm:min-h-[80vh] w-full ">
        <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600 text-slate-50 text-xs font-bold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-300" />
          <span>Accepting Sponsors</span>
        </div>
        <div className="p-4 sm:max-w-[40vw] sm:right-0 bottom-0  gap-8 absolute sm:w-[45vw] h-[80vh]  flex-col flex border bg-white border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-r-3xl sm:rounded-bl-none rounded-b-3xl "> 
          <p className="opacity-50">You are not just funding a child — you are investing in the roots that determine their future. The Roots Fund (Roots Fund) provides holistic support including quality education, daily school nutrition (200 meals/year), primary healthcare (NHIS), and psychosocial well-being for vulnerable children aged 7–10 in underserved Nigerian communities.</p>
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg min-h-20">
              <h1 className="text-orange-500 text-3xl font-bold ">40</h1>
              <p>Children Targeted</p> 
            </div>
            <div className="flex flex-col gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg min-h-20">
              <h1 className="text-orange-500 text-3xl font-bold ">#920 000</h1>
              <p>Cost/Child/Year</p> 
            </div>
            <div className="flex flex-col gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg min-h-20">
              <h1 className="text-orange-500 text-3xl font-bold ">7-10yrs</h1>
              <p>Age Range</p> 
            </div>
            <div className="flex flex-col gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg min-h-20">
              <h1 className="text-orange-500 text-3xl font-bold ">3 years</h1>
              <p>Program Duration</p> 
            </div>
            <CustomButton classes="rounded px-8 py-2 bg-emerald-600 transition-transform ease-in hover:-translate-y-1 group relative overflow-hidden hover:bg-emerald-500 ">Sponsor A Child</CustomButton>
            <CustomButton classes="rounded px-8 py-2 bg-zinc-900 transition-transform ease-in hover:-translate-y-1 border border-zinc-200 dark:border-zinc-800 group relative overflow-hidden text-slate-50 hover:border-emerald-700 hover:text-emerald-700 text-left ">Learn More</CustomButton>
          </div>
        </div>
      </div>

      <h1 className="text-4xl max-w-100 font-bold text-red-500">SEEII Blood Drive — Save Lives. Be a Hero.</h1>
      <div className="doctor bg-top sm:bg-left flex flex-col sm:flex-row self-center items-center rounded-3xl relative min-h-[120vh] sm:min-h-[80vh] w-full border border-zinc-200 dark:border-zinc-900 ">
        <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-red-500 text-slate-50 text-xs font-bold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-red-200" />
          <span>July 25, 2026</span>
        </div>
        <div className="p-4 sm:max-w-[40vw] sm:right-0 bottom-0  gap-8 absolute sm:w-[45vw] h-[80vh]  flex-col flex border-b border-x bg-white border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-r-3xl sm:rounded-bl-none rounded-b-3xl "> 
          <p className="opacity-50">Access to safe blood is a cornerstone of resilient healthcare systems and a critical factor in saving lives. Join the SEEII Blood Drive to mobilize voluntary blood donors, strengthen community participation in public health, and contribute to the availability of safe blood for those in need.</p>
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg min-h-20">
              <h1 className="text-red-500 text-3xl font-bold ">Lifesavers</h1>
              <p>NETWORK</p> 
            </div>
            <div className="flex flex-col gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg min-h-20">
              <h1 className="text-red-500 text-3xl font-bold ">Free</h1>
              <p>To Donate</p> 
            </div>
            <div className="flex flex-col gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg min-h-20">
              <h1 className="text-red-500 text-3xl font-bold ">Open</h1>
              <p>Registration</p> 
            </div>
            <div className="flex flex-col gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg min-h-20">
              <h1 className="text-red-500 text-3xl font-bold ">3 years</h1>
              <p>Program Duration</p> 
            </div>
            <CustomButton classes="rounded px-8 py-2 bg-red-600 transition-transform ease-in hover:-translate-y-1 group relative overflow-hidden hover:bg-red-500 ">Register As A Donor</CustomButton>
            <CustomButton classes="rounded px-8 py-2 text-left bg-zinc-900 transition-transform ease-in hover:-translate-y-1 border group relative overflow-hidden  border-red-700 text-red-400 ">Learn More</CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}

function ApproachToChange(){
  const blocks = [
    { title: 'Sustainability', description: 'We prioritize eco-conscious practices to ensure long-term positive impact on communities and the environment.', icon: Leaf },
    { title: 'Child Welfare', description: 'Our programs focus on the holistic well-being of children, addressing their educational, nutritional, and emotional needs.', icon: Heart },
    { title: 'Nutrition', description: 'We provide access to nutritious meals and promote healthy eating habits to support child development.', icon: Utensils },
    { title: 'Empowerment', description: 'We empower individuals and communities through education, skills training, and capacity-building initiatives.', icon: HandFist },
    { title: 'Nigeria', description: 'Our initiatives are tailored to the unique cultural, social, and economic contexts of Nigerian communities.', icon: Baby },
    { title: 'Future', description: 'We invest in the future by fostering resilience, leadership, and innovation among young people.', icon: BookMarked },
    { title: 'Education', description: 'We enhance access to quality education and learning opportunities for marginalized children.', icon: Book }]

  return(
    <div className="flex flex-col gap-8 justify-center my-10 px-[10vw] items-center text-center">
      <h1 className="font-bold text-5xl max-w-120">A Holistic Approach To Change</h1>
      <p className="opacity-75 max-w-120">We address the root causes of systemic injustice through six integrated pillars of intervention.</p>
      <div className="grid grid-flow-row sm:grid-cols-4 gap-8 justify-center items-center w-full">
        {blocks.map((block, index) => {
          const Icon = block.icon;
          return (
            <div id={index} key={index} className="aspect-square flex flex-col bg-white dark:bg-zinc-900 border text-left gap-4 border-zinc-200 dark:border-zinc-800 rounded-3xl p-4">
              <div className="px-1 py-1 rounded-2xl bg-white dark:bg-zinc-900 h-14 w-14 flex justify-center items-center border border-zinc-200 dark:border-zinc-800 "><Icon size="64" /></div>
              <h1 className="text-lg font-bold">{block.title}</h1>
              <p>{block.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PastProjects() {
  const projects = [
    {
      category: 'HEALTH & WELLNESS',
      dotColor: 'bg-rose-500',
      title: 'Free Medical Outreach Camp',
      description:
        'SEEII organized a free medical outreach serving over 200 community members in Jos — including free screenings, medications, and child health checks for underserved families.',
      image: HealthImage,
    },
    {
      category: 'SCHOOL NUTRITION',
      dotColor: 'bg-amber-500',
      title: 'School Feeding Initiative',
      description:
        'Providing 200 days of hot nutritious meals annually to vulnerable school children, improving attendance, concentration, and overall physical health outcomes.',
      image: NutritionImage,
    },
    {
      category: 'EDUCATION',
      dotColor: 'bg-blue-500',
      title: 'Back-to-School Support Drive',
      description:
        'SEEII distributed school supplies — books, uniforms, and bags — to marginalized children in rural communities, removing financial barriers to quality education.',
      image: EducationImage,
    },
    {
      category: 'WOMEN EMPOWERMENT',
      dotColor: 'bg-purple-500',
      title: 'Women Skills Acquisition Program',
      description:
        'Trained 80+ marginalized women in vocational skills including tailoring and crafts, equipping them with sustainable livelihoods and economic independence.',
      image: WomenImage,
    },
    {
      category: 'ENVIRONMENT',
      dotColor: 'bg-emerald-500',
      title: 'Community Clean-Up Campaign',
      description:
        'SEEII mobilized youth volunteers and community members for environmental sanitation drives — combating open dumping, drainage blockages, and plastic pollution.',
      image: EnvironmentImage,
    },
    {
      category: 'ADVOCACY',
      dotColor: 'bg-orange-500',
      title: 'Child Rights Sensitization Forum',
      description:
        'Community awareness sessions held with village elders, parents, and local leaders on child protection, trafficking prevention, and girls\' education rights.',
      image: CommunityImage,
    },
  ];

  return (
    <div className="flex flex-col gap-8 justify-center my-10 px-[10vw] items-center text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col text-left overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 gap-4"
          >
            <div className="relative h-52 w-full rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-white text-zinc-900 text-xs font-bold tracking-wide">
                <span className={`w-2 h-2 rounded-full ${project.dotColor}`} />
                <span>{project.category}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-1">
              <h3 className="text-xl font-bold leading-tight">
                {project.title}
              </h3>
              <p className="opacity-75 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GetInvolved() {
  return (
    <div className="flex flex-col gap-8 justify-center my-10 px-[10vw] items-center text-center ">
      <h1 className="text-5xl font-bold max-w-150">Two Ways to Make a Difference</h1>
      <p className="opacity-75 text-lg">
        Every contribution — big or small — plants a seed for a more just and sustainable world.
      </p>
      <div className="flex flex-col sm:flex-row gap-8">
        <Card icon={Baby} title=" Sponsor a Child " description="Commit to a child's full year of education, nutrition, healthcare, and psychosocial support via the Roots Fund. You'll receive regular updates on their progress." buttonText="Sponsor A Child" buttonType={SeperateAllButton}>
          <div className="flex flex-row relative w-full"><h1 className="text-orange-500 font-bold text-5xl">#920,000</h1><p className="opacity-75 text-lg bottom-0 absolute right-12 ">/child/year</p> 
          </div>
        </Card>
        <Card icon={Heart} title="General Donation" description="Support SEEII's programs with a one-time or recurring gift — directed where the need is greatest. Every naira funds a brighter tomorrow." buttonText="Other Amounts" buttonType={TransButton}>
          <div className="flex flex-row gap-4">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl px-2 py-1 transition-colors hover:bg-slate-200">#1,000</div>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl px-2 py-1 transition-colors hover:bg-slate-200">#5,000</div>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl px-2 py-1 transition-colors hover:bg-slate-200">#10,000</div>
          </div>
        </Card>
        <Card icon={HelpingHand} title="Become A Volunteer" description="Join our team of dedicated changemakers. Contribute your skills, time, and passion to make a direct impact on the ground in our communities." buttonText="Apply To Volunteer" buttonType={SeperateAllButton}>
          <div>
          </div>
        </Card>
      </div>
    </div>
  )
}

function Footer() {
  return (
<div>
<div className="flex flex-col sm:flex-col w-full min-h-[120vh] relative px-[10vw] pt-10 items-center justify-center bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900" >
<div className="flex flex-row gap-20 mb-10">      
  <div className="text-left gap-10 flex flex-col ">
        <h1 className="text-5xl font-bold  ">Let's Talk About Change</h1>
        <p className="opacity-75 max-w-120">Whether you want to partner, volunteer, or simply learn more — we'd love to hear from you.</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-1 items-center">
            <div className="px-1 py-1 rounded-2xl  bg-zinc-900 dark:bg-zinc-200 h-14 w-1 flex justify-center  items-center  border border-zinc-800 dark:border-zinc-200 "><Mail></Mail></div> 
            <div className="flex flex-col gap-0">
              <h1 className="text-xs font-bold ">EMAIL</h1>
              <h2 className="text">info@seeii.org</h2>
            </div>
          </div>
            <div className="flex flex-row gap-1 items-center">
            <div className="px-1 py-1 rounded-2xl   bg-zinc-900 dark:bg-zinc-200 h-14 w-14 flex justify-center  items-center  border border-zinc-800 dark:border-zinc-200 "><Globe></Globe></div> 
            <div className="flex flex-col gap-0">
              <h1 className="text-xs font-bold  ">WEBSITE</h1>
              <h2 className="text">www.seeii.org</h2>
            </div>
          </div>
                      <div className="flex flex-row gap-1 items-center">
            <div className="px-1 py-1 rounded-2xl  bg-zinc-900 dark:bg-zinc-200 h-14 w-14 flex justify-center  items-center  border border-zinc-800 dark:border-zinc-200 "><MapPin></MapPin></div> 
            <div className="flex flex-col gap-0">
              <h1 className="text-xs font-bold ">LOCATION</h1>
              <h2 className="text">NIGERIA</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-sm font-bold">FOLLOW US</h1>
          <div className="flex flex-row gap-4">
            <div className="px-1 py-1 rounded-full  bg-zinc-900 dark:bg-zinc-200 h-14 w-14 flex justify-center  items-center  border border-zinc-800 dark:border-zinc-200 "><HelpingHand></HelpingHand></div>
            <div className="px-1 py-1 rounded-full  bg-zinc-900 dark:bg-zinc-200 h-14 w-14 flex justify-center  items-center  border border-zinc-800 dark:border-zinc-200 "><HelpingHand></HelpingHand></div>
            <div className="px-1 py-1 rounded-full  bg-zinc-900 dark:bg-zinc-200 h-14 w-14 flex justify-center  items-center  border border-zinc-800 dark:border-zinc-200 "><HelpingHand></HelpingHand></div>
          </div>
        </div>
    </div>
    <ContactForm/>
</div>

</div>
<div className="w-full py-12 px-6 0 bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900">
  <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Heart className="w-8 h-8 text-emerald-500 fill-emerald-500" />
              <span className="font-bold text-xl tracking-wider">SEEII</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Promoting the well-being of marginalized children and protecting the environment in Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roots Fund</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Impact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Get Involved
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sponsor a Child</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Connect
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:info@seeii.org" className="hover:text-white transition-colors">info@seeii.org</a></li>
              <li><a href="https://seeii.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">seeii.org</a></li>
              <li><a href="#" className="hover:text-white transition-colors">@seeiiusonig</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#14281d] flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            &copy; 2026 (SEEII) Sustainable Education and Eco-conscious Innovative Initiative. All rights reserved.
          </p>
          <p>
            Founded by A Human Being · Nigeria <span className="mx-1">|</span> Powered by{' '}
            <a href="#" className="underline hover:text-gray-300">
              Oladotun Iroye
            </a>
          </p>
        </div>
      </div>
</div>
</div>
  );
}