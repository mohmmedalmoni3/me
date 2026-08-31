BUILD THIS WEBSITE AS A COMPLETE PRODUCTION-READY PORTFOLIO.

IMPORTANT:

The design reference below is NOT content inspiration.

It is a VISUAL / ART DIRECTION / UI / MOTION / TYPOGRAPHY reference.

I want you to reproduce the same overall design language, visual quality, proportions, spacing, typography hierarchy, dark aesthetic, image treatment, rounded geometry, motion behavior, and premium creative-portfolio feeling.

BUT:

DO NOT create a 3D Creator portfolio for "Jack".

Instead, build MY portfolio using my existing portfolio content and MY cinematic image sequence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CORE CONCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of the final website as:

PREMIUM CREATIVE PORTFOLIO
+
CINEMATIC FILM
+
DIGITAL ART DIRECTION
+
INTERACTIVE TYPOGRAPHY
+
EDITORIAL WEB DESIGN

The visual reference is the "Jack — 3D Creator" website specification below.

USE ITS DESIGN LANGUAGE.

However, the HERO MUST be replaced by my own cinematic scroll-driven experience.

The cinematic scene is the identity of my portfolio.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ABSOLUTE PRIORITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DO NOT MODIFY OR REPLACE MY EXISTING CINEMATIC INTRO.

I already have a cinematic sequence consisting of:

120 WebP frames

located at:

frames/frame_0001.webp
frames/frame_0002.webp
...
frames/frame_0120.webp

The existing implementation uses:

.cinematic-wrap
.cinematic-sticky
#cine-canvas

and maps:

SCROLL POSITION → CINEMATIC FRAME

This system MUST remain.

The cinematic introduction is the equivalent of the 3D portrait / hero visual in the reference design.

DO NOT replace it with:

a static image

a normal video

a 3D model

a generated 3D character

a hero illustration

a carousel

The first scene MUST remain a canvas-based cinematic scroll sequence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HERO REFERENCE TRANSLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The original reference has:

"Hi, i'm jack"



3D character



bottom description



contact CTA.

For MY portfolio, reinterpret this structure around my cinematic sequence.

The cinematic scene should occupy the majority of the viewport.

Keep the feeling of:

large typography
minimal dark background
strong visual hierarchy
premium spacing
centered visual subject
subtle interface elements
editorial composition

But the main visual object is MY CINEMATIC SCENE.

The user should discover the cinematic sequence by scrolling.

The scroll should feel intentional and cinematic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HERO TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the same design philosophy as the reference:

VERY LARGE DISPLAY TYPOGRAPHY.

Use a massive headline with:

font-weight: 800–900
uppercase where appropriate
tight tracking
very tight line-height
viewport-based sizing.

However, do NOT blindly use:

"Hi, i'm jack"

Use my real portfolio identity and information.

The headline should feel like a visual object.

Possible structure:

MOHAMMED
ALMOMANI

or an appropriate version based on the existing portfolio content.

Do not invent a new identity.

Use the actual portfolio information already present in my source.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOR SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FOLLOW THE REFERENCE COLOR DIRECTION.

Primary background:

#0C0C0C

Use this consistently across:

html
body
#root
main
sections

Primary text:

#D7E2EA

Secondary text:

muted cool grey.

Use a restrained palette.

Do NOT return to the old cyan/orange visual identity.

Do NOT introduce neon gradients.

Do NOT make it colorful.

The overall interface should feel:

dark
cool
minimal
luxurious
technical
cinematic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

Kanit

from Google Fonts.

Weights:

300–900

The typography should be one of the strongest visual elements.

Use:

Kanit 300
Kanit 400
Kanit 500
Kanit 600
Kanit 700
Kanit 800
Kanit 900

Create strong contrast between:

GIANT DISPLAY TYPE

small metadata

body text

navigation

labels

numbers.

Use extreme typography carefully.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HERO HEADING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use this exact gradient philosophy from the reference:

background:
linear-gradient(
180deg,
#646973 0%,
#BBCCD7 100%
);

-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

Create:

.hero-heading

with this treatment.

The heading should feel metallic / atmospheric rather than colorful.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Follow the reference's extremely minimal navigation style.

Horizontal navigation.

Items:

ABOUT
PRICE / SERVICES
PROJECTS
CONTACT

BUT use labels appropriate to MY portfolio.

For example:

ABOUT
SERVICES
WORK
CONTACT

Navigation:

color: #D7E2EA

font:
Kanit

font-weight:
500

uppercase

tracking:
wide

responsive typography:

text-sm
md
lg:text-[1.4rem]

Padding:

px-6
md

pt-6
md

Hover:

opacity: 0.7

transition:
200ms

Keep it minimal.

Do NOT make a giant dashboard navbar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HERO COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Hero should feel almost like a fashion/editorial campaign.

Use:

FULL VIEWPORT

minimal navigation at top

massive typography

cinematic canvas in the center

small editorial description near bottom

contact CTA near bottom

subtle scroll indicator.

Do not crowd the screen.

Negative space is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CINEMATIC CANVAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Preserve the existing implementation.

Required:

FRAME_COUNT = 120

FRAME_PATH:

frames/frame_XXXX.webp

Use Canvas.

Use devicePixelRatio optimization.

Use object-cover style image fitting.

Map scroll progress to frame index.

Use:

requestAnimationFrame

for smooth rendering.

Use passive scroll listeners.

Do not create unnecessary re-renders.

Target 60 FPS.

The cinematic sequence should remain the visual centerpiece.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CINEMATIC TEXT BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The text surrounding the cinematic scene can animate subtly.

Use:

opacity
transform
scale
clip-path
letter-spacing

But do NOT use cheap animations.

The motion should feel:

slow
smooth
precise
cinematic.

The cinematic canvas itself must respond directly to scrolling.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MARQUEE SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After the cinematic intro, use a visual section inspired directly by the reference.

Create TWO horizontal image rows.

The rows should move based on scroll position.

Row 1:

moves RIGHT.

Row 2:

moves LEFT.

Use:

transform: translate3d(...)

and:

will-change: transform

The movement should be subtle and connected to page scroll.

Do not make it look like a generic infinite carousel.

The image tiles should use:

width: 420px
height: 270px

rounded-2xl

object-cover

gap-3

dark background.

IMPORTANT:

The reference uses 21 external motion-site GIFs.

Do NOT automatically claim those projects are mine.

If the existing portfolio contains project images/assets, use those.

If appropriate visual assets are already available in the project, use them.

Do NOT fabricate portfolio work.

The purpose is to recreate the VISUAL MARQUEE DESIGN LANGUAGE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ABOUT SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the reference's large centered editorial feeling.

Full viewport / near full viewport.

Dark background.

Minimal composition.

Large typography.

Small supporting text.

Large whitespace.

Do NOT create a conventional developer "About Me" card.

Create an editorial introduction.

Use the actual portfolio information.

Possible structure:

I BUILD
DIGITAL
EXPERIENCES.

Then a smaller paragraph describing the actual person.

Do not invent biography.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DECORATIVE ELEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The reference uses decorative 3D objects.

For MY portfolio:

DO NOT use random 3D objects just because the reference does.

Instead use subtle graphic elements derived from the cinematic visual language.

Examples:

small circles
crosshairs
technical markers
thin lines
numbers
coordinates
arrows
minimal SVG geometry.

These should be extremely subtle.

Do not clutter the design.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERVICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Follow the reference's clean visual language.

But redesign the section around MY actual services.

Do NOT create generic cards.

Use large typography and editorial rows.

For example:

01
FULL-STACK DEVELOPMENT

02
BACKEND ENGINEERING

03
FIVEM DEVELOPMENT

04
PERFORMANCE & SYSTEMS

Use the real services from my portfolio.

Each row should have:

number
service title
short description
directional arrow

On hover:

title shifts slightly
arrow moves
line animates
subtle background response.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important sections.

Use the visual quality of the reference.

But projects must represent MY actual projects.

Do NOT use Jack's projects.

Do NOT use random template projects.

Do NOT fabricate screenshots.

Each project should feel like a premium visual showcase.

Use:

large image
large project title
category
technology
description
CTA

Use rounded image treatment inspired by the reference.

But avoid turning everything into generic cards.

Projects should feel like editorial case studies.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Add premium interactions.

Desktop:

hover project

→ image subtly scales

→ title shifts

→ arrow moves

→ metadata reveals

→ cursor changes

→ subtle parallax

Do not use excessive effects.

Mobile:

disable cursor interactions.

Use touch-friendly interactions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the reference's minimal premium feeling.

Large typography.

Example concept:

LET'S
WORK
TOGETHER.

Then contact methods.

Use the real contact information from my existing portfolio.

Do not invent contact details.

Possible links:

GitHub
Discord
WhatsApp
Instagram

Use custom minimal SVG icons rather than Font Awesome.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOM ICON SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT use Font Awesome.

Use:

Lucide React

for functional icons.

Use minimal SVG elements for decorative graphics.

Icons should be:

thin
clean
technical
minimal.

Use animated directional arrows.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOM CURSOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Desktop only.

Create a minimal custom cursor.

Normal:

small precision dot.

Hover interactive element:

slightly larger.

Hover project:

VIEW
PROJECT

Hover image:

EXPLORE

Hover CTA:

→

Use Framer Motion for smooth interpolation.

Disable on:

touch devices
mobile
reduced-motion environments.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOTION SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

Framer Motion

for interface animations.

Do NOT animate everything.

Animation language:

smooth
slow
controlled
premium.

Use:

initial
animate
whileInView
whileHover
useScroll
useTransform
useSpring

where appropriate.

Do NOT replace the cinematic canvas scroll system with Framer Motion.

The cinematic frame sequence remains native scroll-driven Canvas logic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION TRANSITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The transition from cinematic intro into the rest of the portfolio must feel intentional.

Do not abruptly switch from cinematic hero to normal webpage.

Use:

spacing
darkness
typography
marquee movement

to make the transition feel like the film is opening into the portfolio.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE DESIGN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Desktop:

large typography
large cinematic canvas
wide spacing
horizontal compositions.

Tablet:

reduce typography
preserve hierarchy.

Mobile:

preserve cinematic experience
preserve scroll scrubbing
stack content intelligently
reduce decorative elements
disable custom cursor
maintain readable Kanit typography.

Do NOT simply scale the desktop down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RTL / ARABIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The portfolio already supports Arabic.

Maintain Arabic support.

When Arabic is active:

direction: rtl

Use appropriate Arabic typography.

Spacing must be intentionally adapted.

Do not simply mirror the English layout.

The Arabic version must look designed.

Maintain the same visual language.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

React
TypeScript
Tailwind CSS
Framer Motion
Lucide React

Use semantic components:

HeroSection
MarqueeSection
AboutSection
ServicesSection
ProjectsSection
ContactSection
Footer

Create reusable components where useful.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This website must feel extremely smooth.

Optimize:

cinematic image loading
canvas rendering
scroll handlers
animation frames
Framer Motion transforms
image loading
mobile performance.

Use:

requestAnimationFrame

passive listeners

will-change only where useful

lazy loading for non-hero images.

Do NOT preload everything in a way that freezes the browser.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Maintain:

semantic HTML
keyboard navigation
aria labels
focus states
accessible links
accessible buttons
reduced-motion support.

If:

prefers-reduced-motion: reduce

then reduce decorative animations while keeping the cinematic experience functional.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT CONTENT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The supplied reference mentions:

Jack
3D Creator
3D artwork
motionsites.ai projects
3D portrait.

NONE OF THAT IS MY CONTENT.

Use ONLY my actual portfolio content and assets.

The reference is being used ONLY for:

DESIGN
TYPOGRAPHY
COLOR
SPACING
LAYOUT
MOTION
IMAGE TREATMENT
VISUAL HIERARCHY
ART DIRECTION.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DO NOT DO THIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DO NOT:

copy Jack's identity

copy Jack's text

copy Jack's projects

copy fake 3D work

invent clients

invent awards

invent statistics

invent experience

use random stock imagery

turn the site into a generic developer template

use the old cyan/orange design

use Font Awesome

use generic Bootstrap cards

use excessive glassmorphism

use excessive gradients

use neon cyberpunk styling

use excessive glow

use repetitive fade-up animations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The following specification is the VISUAL REFERENCE:

[PASTE THE COMPLETE JACK 3D CREATOR PROMPT HERE]

IMPORTANT:

Interpret it as a DESIGN SYSTEM.

Do not reproduce its content.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The final website should feel like:

A CINEMATIC FILM

that transforms into

A PREMIUM CREATIVE PORTFOLIO.

The user's first interaction is:

SCROLL.

Scrolling controls the cinematic sequence.

After the cinematic scene:

the portfolio opens into the same kind of premium visual language as the reference.

The final visual identity should combine:

Kanit typography
+
#0C0C0C
+
cool grey typography
+
massive editorial headings
+
rounded image compositions
+
minimal navigation
+
horizontal marquee
+
Framer Motion interactions
+
minimal SVG/Lucide iconography
+
cinematic scroll storytelling.

The result should feel:

PREMIUM
MINIMAL
CINEMATIC
MODERN
EDITORIAL
CREATIVE
TECHNICAL
EXPENSIVE

It must NOT feel like:

A GENERIC DEVELOPER PORTFOLIO.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL IMPLEMENTATION REQUIREMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do not give me a design explanation.

Do not give me pseudocode.

Do not give me partial components.

BUILD THE COMPLETE WEBSITE.

Return the complete production-ready React + TypeScript + Tailwind implementation.

Preserve the existing cinematic 120-frame sequence and its scroll behavior.

Replace everything around it with the new visual system.

The cinematic intro is SACRED.

The rest of the portfolio should feel like it was designed specifically around that cinematic scene.

BUILD IT NOW.
