import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  NavLink,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Clock,
  HeartPulse,
  Stethoscope,
  Activity,
  ShieldCheck,
  CalendarDays,
  CheckCircle2,
  Search,
  ChevronRight,
  Mail,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./style.css";
const H = {
  name: "Prakasam Super Speciality Hospital",
  location: "Beside RTC Bus Stand, Ongole, Andhra Pradesh",
  phone: "08592282282",
  mobile: "7799866666",
  maps: "https://www.google.com/maps/search/?api=1&query=Prakasam+Super+Speciality+Hospital+Ongole",
};
const departments = [
  {
    name: "Neurology",
    slug: "neurology",
    icon: "🧠",
    desc: "Care relating to the brain, spinal cord and nervous system.",
  },
  {
    name: "Urology",
    slug: "urology",
    icon: "✚",
    desc: "Assessment and treatment of urinary tract and related conditions.",
  },
  {
    name: "Gastroenterology",
    slug: "gastroenterology",
    icon: "◉",
    desc: "Consultation for digestive and gastrointestinal health.",
  },
  {
    name: "General Medicine",
    slug: "general-medicine",
    icon: "♡",
    desc: "Medical consultations for a broad range of adult health concerns.",
  },
  {
    name: "General Surgery",
    slug: "general-surgery",
    icon: "✳",
    desc: "Surgical consultations and evaluation for eligible conditions.",
  },
];
const image = {
  hero: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=85",
  about:
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1100&q=80",
  facility:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1100&q=80",
  doctor:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80",
};
function Scroll() {
  const l = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [l.pathname]);
  return null;
}
function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/specialties", "Specialties"],
    ["/doctors", "Doctors"],
    ["/facilities", "Facilities"],
    ["/contact", "Contact"],
  ];
  const loc = useLocation();
  useEffect(() => setOpen(false), [loc]);
  return (
    <>
      <div className="topbar">
        <span>
          <MapPin size={14} />
          {H.location}
        </span>
        <a href={"tel:" + H.mobile}>
          <Phone size={14} />
          {H.mobile}
        </a>
      </div>
      <header>
        <Link className="brand" to="/">
          <span className="brand-icon">
            <HeartPulse size={28} />
          </span>
          <span>
            <strong>PRAKASAM</strong>
            <small>SUPER SPECIALITY HOSPITAL</small>
          </span>
        </Link>
        <nav className={open ? "open" : ""}>
          {links.map(([p, n]) => (
            <NavLink key={p} to={p} end={p === "/"}>
              {n}
            </NavLink>
          ))}
          <Link className="btn navbtn" to="/appointment">
            Request Appointment <ArrowUpRight size={16} />
          </Link>
        </nav>
        <button
          className="hamburger"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}
function Footer() {
  return (
    <footer>
      <div className="container footergrid">
        <div>
          <div className="footerbrand">
            <HeartPulse /> PRAKASAM
          </div>
          <p>
            Prakasam Super Speciality Hospital, Ongole. Explore departments and
            find ways to get in touch.
          </p>
          <span className="muted">
            Unofficial redesign concept — not affiliated with the hospital.
          </span>
        </div>
        <div>
          <h4>Explore</h4>
          {[
            ["/about", "About Us"],
            ["/specialties", "Specialties"],
            ["/doctors", "Doctors"],
            ["/facilities", "Facilities"],
          ].map(([p, n]) => (
            <Link key={p} to={p}>
              {n}
            </Link>
          ))}
        </div>
        <div>
          <h4>Get in touch</h4>
          <p>{H.location}</p>
          <a href={"tel:" + H.mobile}>{H.mobile}</a>
          <a href={"tel:" + H.phone}>{H.phone}</a>
          <a href={H.maps} target="_blank" rel="noreferrer">
            Get directions ↗
          </a>
        </div>
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} Prakasam Hospitals — Unofficial website
        concept. Information must be confirmed before publication.
      </div>
    </footer>
  );
}
function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="sectionhead">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}
function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <section className="pagehero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
    </section>
  );
}
function Cta() {
  return (
    <section className="ctawrap">
      <div className="container cta">
        <div>
          <span className="eyebrow light">GET IN TOUCH</span>
          <h2>Have a question about visiting?</h2>
          <p>
            Contact the hospital directly, or explore the appointment-request
            demonstration.
          </p>
        </div>
        <div className="ctabtns">
          <Link to="/appointment" className="btn white">
            Request Appointment <ArrowRight size={17} />
          </Link>
          <a className="btn outlinewhite" href={"tel:" + H.mobile}>
            <Phone size={17} /> Call Hospital
          </a>
        </div>
      </div>
    </section>
  );
}
function DeptCards({ limit }: { limit?: number }) {
  return (
    <div className="deptgrid">
      {departments.slice(0, limit).map((d) => (
        <Link className="deptcard" key={d.slug} to={"/specialties/" + d.slug}>
          <span className="depticon">{d.icon}</span>
          <h3>{d.name}</h3>
          <p>{d.desc}</p>
          <span className="cardlink">
            Learn more <ArrowRight size={17} />
          </span>
        </Link>
      ))}
    </div>
  );
}
function Home() {
  return (
    <>
      <section className="hero">
        <div className="container herogrid">
          <div className="herotext">
            <div className="hero-pill">
              <span className="pulse" /> HEALTHCARE IN ONGOLE
            </div>
            <h1>
              Care that puts <em>people first.</em>
            </h1>
            <p>
              Welcome to Prakasam Super Speciality Hospital. Discover our listed
              medical departments, learn more about our services and connect
              with our team.
            </p>
            <div className="actions">
              <Link className="btn" to="/appointment">
                Request Appointment <ArrowRight size={18} />
              </Link>
              <Link className="btn secondary" to="/specialties">
                Explore Specialties
              </Link>
            </div>
            <div className="herometa">
              <span>
                <MapPin size={19} /> Beside RTC Bus Stand, Ongole
              </span>
              <span>
                <Phone size={19} /> {H.mobile}
              </span>
            </div>
          </div>
          <div className="heroimage">
            <img src={image.hero} alt="Illustrative medical team photograph" />
            <div className="imagebadge">
              <span className="badgeicon">
                <HeartPulse />
              </span>
              <div>
                <strong>Here for your health</strong>
                <small>Discover care options in Ongole</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="truststrip">
        <div className="container trustgrid">
          <div>
            <Stethoscope />
            <span>Multiple Medical Specialties</span>
          </div>
          <div>
            <HeartPulse />
            <span>Patient-Focused Approach</span>
          </div>
          <div>
            <MapPin />
            <span>Convenient Ongole Location</span>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHead
          eyebrow="OUR SPECIALTIES"
          title="Explore our medical departments"
          sub="Find the right department for your needs. Please confirm current services directly with the hospital."
        />
        <DeptCards limit={5} />
        <div className="center">
          <Link to="/specialties" className="textlink">
            View all specialties <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="section soft">
        <div className="container split">
          <div className="photo">
            <img
              src={image.about}
              alt="Illustrative healthcare professional photograph"
            />
            <div className="photo-note">Focused on meaningful care</div>
          </div>
          <div className="splittext">
            <span className="eyebrow">ABOUT PRAKASAM HOSPITALS</span>
            <h2>Your health journey deserves thoughtful attention.</h2>
            <p>
              Located beside the RTC Bus Stand in Ongole, Prakasam Super
              Speciality Hospital lists departments across medicine and surgery.
            </p>
            <p>
              Our redesign makes essential information easier to discover, with
              clear navigation to specialties, contact details and appointment
              enquiries.
            </p>
            <Link className="btn" to="/about">
              Learn About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="split reverse">
          <div className="splittext">
            <span className="eyebrow">VISITING THE HOSPITAL</span>
            <h2>Everything you need, in one place.</h2>
            <p>
              Find the location, phone numbers and useful information before
              planning your visit.
            </p>
            <div className="feature">
              <MapPin />
              <div>
                <strong>Central Ongole location</strong>
                <span>Beside RTC Bus Stand, Ongole</span>
              </div>
            </div>
            <div className="feature">
              <Phone />
              <div>
                <strong>Direct contact</strong>
                <span>Call to confirm consultations and availability</span>
              </div>
            </div>
            <div className="feature">
              <CalendarDays />
              <div>
                <strong>Appointment enquiries</strong>
                <span>Try the demonstration appointment flow</span>
              </div>
            </div>
            <Link className="textlink" to="/contact">
              Contact & directions <ArrowRight size={18} />
            </Link>
          </div>
          <div className="photo">
            <img
              src={image.facility}
              alt="Illustrative hospital interior photograph"
            />
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="A clearer way to discover care"
        sub="Introducing Prakasam Super Speciality Hospital in Ongole."
      />
      <section className="section container split">
        <div className="photo">
          <img src={image.about} alt="Illustrative healthcare professional" />
        </div>
        <div className="splittext">
          <span className="eyebrow">OUR HOSPITAL</span>
          <h2>Healthcare information, made accessible.</h2>
          <p>
            Prakasam Super Speciality Hospital is located beside the RTC Bus
            Stand in Ongole, Andhra Pradesh.
          </p>
          <p>
            This proposed website brings together the hospital's listed medical
            departments, location and contact information in a welcoming,
            easy-to-use experience.
          </p>
          <p className="note">
            Hospital history, mission statements, leadership information and
            achievements will be added only after confirmation by management.
          </p>
          <Link className="btn" to="/specialties">
            Explore Departments <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <Cta />
    </>
  );
}
function Specialties() {
  return (
    <>
      <PageHero
        eyebrow="MEDICAL DEPARTMENTS"
        title="Specialties & services"
        sub="Explore the departments listed for Prakasam Super Speciality Hospital."
      />
      <section className="section container">
        <DeptCards />
        <p className="note spaced">
          Descriptions are general educational summaries, not confirmation of
          specific procedures, equipment or specialist availability.
        </p>
      </section>
      <Cta />
    </>
  );
}
function Specialty() {
  const { slug } = useParams();
  const d = departments.find((x) => x.slug === slug);
  if (!d) return <NotFound />;
  return (
    <>
      <PageHero eyebrow="SPECIALTY" title={d.name} sub={d.desc} />
      <section className="section container narrow">
        <Link className="back" to="/specialties">
          ← All specialties
        </Link>
        <div className="detail">
          <span className="bigicon">{d.icon}</span>
          <h2>About {d.name}</h2>
          <p>
            {d.desc} The hospital lists this department on its existing website.
            Specific treatments, physicians, schedules and eligibility should be
            confirmed directly with hospital staff.
          </p>
          <h3>Planning a consultation?</h3>
          <p>
            Contact the hospital to ask about the department, available doctors,
            consultation hours and any documents you may need.
          </p>
          <div className="actions">
            <a className="btn" href={"tel:" + H.mobile}>
              <Phone size={17} /> Call Hospital
            </a>
            <Link className="btn secondary" to="/appointment">
              Appointment Demo
            </Link>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
function Doctors() {
  return (
    <>
      <PageHero
        eyebrow="MEDICAL TEAM"
        title="Meet our doctors"
        sub="Doctor profiles will be added once qualifications, names and schedules are approved by hospital management."
      />
      <section className="section container">
        <div className="placeholderpanel">
          <Stethoscope size={40} />
          <h2>Verified doctor profiles coming soon</h2>
          <p>
            We won't invent doctor identities, specialties, credentials or
            photographs. For now, please contact the hospital for doctor
            availability and consultation timings.
          </p>
          <a href={"tel:" + H.mobile} className="btn">
            <Phone size={17} /> Call for doctor availability
          </a>
        </div>
      </section>
      <Cta />
    </>
  );
}
function Facilities() {
  return (
    <>
      <PageHero
        eyebrow="HOSPITAL FACILITIES"
        title="A closer look at our hospital"
        sub="A dedicated space for approved photos and verified information about the hospital's facilities."
      />
      <section className="section container">
        <div className="facilitygrid">
          <img
            src={image.facility}
            alt="Illustrative hospital interior, not Prakasam Hospital"
          />
          <img
            src={image.about}
            alt="Illustrative healthcare environment, not Prakasam Hospital"
          />
          <img
            src={image.hero}
            alt="Illustrative medical team, not Prakasam Hospital"
          />
        </div>
        <p className="note spaced">
          Images shown are stock illustrations, not photographs of Prakasam
          Super Speciality Hospital. Authentic gallery and facility descriptions
          require owner approval.
        </p>
      </section>
      <Cta />
    </>
  );
}
const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().regex(/^[0-9+()\s-]{10,16}$/, "Enter a valid phone number"),
  department: z.string().min(1, "Select a department"),
  date: z.string().min(1, "Choose a preferred date"),
  message: z.string().max(500).optional(),
});
type FormData = z.infer<typeof schema>;
function Appointment() {
  const [submitted, setSubmitted] = useState<FormData | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const today = new Date().toLocaleDateString("en-CA");
  return (
    <>
      <PageHero
        eyebrow="APPOINTMENT REQUEST"
        title="Plan your visit"
        sub="Preview how an appointment request could work on the redesigned website."
      />
      <section className="section container formgrid">
        <div>
          <span className="eyebrow">DEMO FORM</span>
          <h2>Tell us about your visit</h2>
          <p>
            This is a frontend-only demonstration. No appointment is booked and
            no information is transmitted or stored on a server.
          </p>
          <div className="feature">
            <ShieldCheck />
            <div>
              <strong>Demo only</strong>
              <span>Do not enter sensitive health information</span>
            </div>
          </div>
          <div className="feature">
            <Phone />
            <div>
              <strong>Need to reach the hospital?</strong>
              <a href={"tel:" + H.mobile}>{H.mobile}</a>
            </div>
          </div>
        </div>
        <div className="formcard">
          {submitted ? (
            <div className="success">
              <CheckCircle2 size={48} />
              <h2>Request preview complete</h2>
              <p>
                This demonstrates a confirmation screen. Your request was{" "}
                <strong>not sent</strong> to the hospital.
              </p>
              <div className="summary">
                <strong>{submitted.name}</strong>
                <span>{submitted.department}</span>
                <span>Preferred date: {submitted.date}</span>
              </div>
              <button
                className="btn"
                onClick={() => {
                  setSubmitted(null);
                  reset();
                }}
              >
                Start another demo
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit((data) => setSubmitted(data))}
              noValidate
            >
              <h3>Appointment enquiry preview</h3>
              <div className="field">
                <label htmlFor="name">Full name *</label>
                <input
                  id="name"
                  placeholder="Your name"
                  {...register("name")}
                />
                {errors.name && (
                  <small className="error">{errors.name.message}</small>
                )}
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number *</label>
                <input
                  id="phone"
                  placeholder="10-digit mobile number"
                  {...register("phone")}
                />
                {errors.phone && (
                  <small className="error">{errors.phone.message}</small>
                )}
              </div>
              <div className="field">
                <label htmlFor="department">Department *</label>
                <select
                  id="department"
                  defaultValue=""
                  {...register("department")}
                >
                  <option value="" disabled>
                    Select a department
                  </option>
                  {departments.map((d) => (
                    <option key={d.slug}>{d.name}</option>
                  ))}
                </select>
                {errors.department && (
                  <small className="error">{errors.department.message}</small>
                )}
              </div>
              <div className="field">
                <label htmlFor="date">Preferred date *</label>
                <input
                  id="date"
                  type="date"
                  min={today}
                  {...register("date")}
                />
                {errors.date && (
                  <small className="error">{errors.date.message}</small>
                )}
              </div>
              <div className="field">
                <label htmlFor="message">Additional note (optional)</label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="General scheduling preferences only"
                  {...register("message")}
                />
              </div>
              <button className="btn full" type="submit">
                Preview Request <ArrowRight size={18} />
              </button>
              <small className="muted">
                No patient data is sent. This is not a confirmed booking.
              </small>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT & LOCATION"
        title="We're easy to find"
        sub="Find contact information and directions to Prakasam Super Speciality Hospital."
      />
      <section className="section container contactgrid">
        <div className="contactcard">
          <MapPin />
          <h3>Visit the hospital</h3>
          <p>{H.location}</p>
          <a
            className="textlink"
            href={H.maps}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="contactcard">
          <Phone />
          <h3>Call us</h3>
          <a href={"tel:" + H.mobile}>{H.mobile}</a>
          <a href={"tel:" + H.phone}>{H.phone}</a>
          <p>Call to verify department timings and appointments.</p>
        </div>
        <div className="contactcard">
          <Clock />
          <h3>Visiting hours</h3>
          <p>
            Contact the hospital to confirm current outpatient, visiting and
            consultation hours.
          </p>
        </div>
      </section>
      <section className="container mapsection">
        <iframe
          title="Map showing hospitals in Ongole"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Prakasam%20Super%20Speciality%20Hospital%20Ongole&t=&z=15&ie=UTF8&iwloc=&output=embed"
        />
      </section>
      <Cta />
    </>
  );
}
function NotFound() {
  return (
    <section className="section container center notfound">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>We couldn't find the page you're looking for.</p>
      <Link to="/" className="btn">
        Back to Home <ArrowRight size={18} />
      </Link>
    </section>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/specialties/:slug" element={<Specialty />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
