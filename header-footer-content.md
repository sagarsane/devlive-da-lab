# AbbVie Homepage - Header & Footer Content Documentation

## Images Downloaded

All real images have been successfully downloaded from AbbVie's CDN to `/workspace/images/`:

| Image File | Size | Purpose | Source URL |
|------------|------|---------|------------|
| hero-fallback.jpg | 144K | Hero background | https://abbvie.scene7.com/is/image/abbviecorp/man-with-arms-wide-hero |
| joe-story-card.jpg | 49K | Joe story featured card | https://abbvie.scene7.com/is/image/abbviecorp/joe-ppp-card-image |
| ambily-card-image.jpg | 60K | Science card - Striving for Breakthroughs | https://abbvie.scene7.com/is/image/abbviecorp/ambily-card-image |
| man-looking-at-testtube-feature-tall.jpg | 88K | Culture section - Science collaboration | https://abbvie.scene7.com/is/image/abbviecorp/man-looking-at-testtube-feature-tall-2 |
| three-women-in-meeting.jpg | 102K | Culture section - Learning & Development | https://abbvie.scene7.com/is/image/abbviecorp/three-women-in-meeting |
| woman-speaking-to-man.jpg | 99K | Culture section - Partnerships | https://abbvie.scene7.com/is/image/abbviecorp/woman-speaking-to-man |
| sitting-in-hammock-by-lake-hero.jpg | 74K | ESG section card | https://abbvie.scene7.com/is/image/abbviecorp/sitting-in-hammock-by-lake-hero |
| kids-playing-soccer-grass.jpg | 363K | ESG section background | https://abbvie.scene7.com/is/image/abbviecorp/kids-playing-soccer-grass |

All images are now real production-quality images from AbbVie's CDN, replacing the colored placeholder images.

---

## Header Navigation Structure

### Logo
- **Image**: abbvie-logo-header.svg
- **Location**: Copied to `/workspace/images/abbvie-logo-header.svg`
- **Alt Text**: "Logo AbbVie"
- **Link**: Homepage (https://www.abbvie.com/)
- **Original source**: Extracted from import-work directory

### Primary Navigation Menu Items

#### 1. Who We Are
**Top-level dropdown with sections:**

**Our Principles**
- Link: /who-we-are/our-principles.html
- Sub-items:
  - Positions & Views (/who-we-are/our-principles/positions-views.html)
  - Equity, Equality, Diversity & Inclusion (/who-we-are/our-principles/equity-equality-inclusion-diversity.html)

**Operating with Integrity**
- Link: /who-we-are/operating-with-integrity.html
- Sub-items:
  - Protecting Human Rights and Workplace Safety
  - Transparency in Payments
  - Responsible Supply Chain
  - AbbVie's Code of Conduct

**Direct Links:**
- Key Facts (/who-we-are/key-facts.html)
- Our Leaders (/who-we-are/our-leaders.html)
- Policies & Disclosures (/who-we-are/policies-disclosures.html)
- Our Stories (/who-we-are/our-stories.html)

#### 2. Our Science
**Top-level dropdown**
- Link: /science/

**Our People**
- Link: /science/our-people.html

#### 3. Our People
(Navigation structure extracted from header)

#### 4. Careers
(Referenced in mobile accordion structure)

#### 5. Newsroom
(Referenced in navigation)

#### 6. Investors
**External link dropdown:**
- Investors Home (https://investors.abbvie.com/) - Opens in new window
- Investors Resources (https://investors.abbvie.com/investor-resources) - Opens in new window

### Utility Navigation
**Icons/Elements:**
- Search icon (Icon Search.svg)
- Globe icon for language/region selector (Icon Globe.svg)
- Dot menu icon (Icon Dot menu.svg)
- Mobile hamburger menu (3 spans for animated menu)

---

## Footer Content Structure

### Footer Legal Links (Extracted from HTML)

**List of footer links:**
1. **Contact Us** - /contact-center.html
2. **Site Map** - /site-map.html
3. **Terms of Use** - /terms-of-use.html
4. **Privacy Notice** - https://privacy.abbvie/privacy-policies/us-privacy-policy.html

### Footer Components

**Social Media:**
- Social media icons (Twitter, Facebook, LinkedIn, YouTube)
- These are referenced in tracking code: `.warnonleave.twitter, .warnonleave.facebook, .warnonleave.linkedin, .warnonleave.youtube`
- Icons likely present as SVG or image files

**Legal Text:**
- Copyright © 2025 AbbVie Inc.
- All rights reserved

**Cookie Preferences:**
- OneTrust cookie consent button (based on extracted HTML showing OneTrust modal)

**Footer Structure Notes:**
- Uses "cmp-list" component for link lists
- Links include aria-labels for accessibility
- Separators between footer sections (separator-height-1, separator-height-24 classes)

### Additional Assets Found in Import Directory:
- abbvie-logo-1.png (23KB) - AbbVie logo used in cookie consent modal
- Social media icons likely present as SVG files

---

## Mobile Navigation

The header includes mobile-specific elements:
- **Hamburger menu button** with aria-label="Menu" and aria-expanded states
- **Close button** for mobile menu overlay
- **Accordion-style navigation** for mobile with expandable sections
- **"Go to Page" buttons** that appear in mobile view for parent menu items

---

## Completed Tasks ✓

1. ✓ **Downloaded all 8 real images** from AbbVie's CDN (Scene7)
2. ✓ **Copied AbbVie logo** (abbvie-logo-header.svg) to /workspace/images/
3. ✓ **Extracted header navigation structure** from original HTML
4. ✓ **Extracted footer links** (Contact Us, Site Map, Terms of Use, Privacy Notice)
5. ✓ **Documented all content** in this file for reference

## Next Steps (When Ready to Update Code)

1. **Header HTML**: Update abbvie-index.html `<header>` section with:
   - AbbVie logo using abbvie-logo-header.svg
   - Simplified navigation menu (Who We Are, Our Science, Our People, Careers, Newsroom, Investors)
   - Search, globe, and menu icons

2. **Footer HTML**: Update abbvie-index.html `<footer>` section with:
   - Footer legal links (Contact Us, Site Map, Terms of Use, Privacy Notice)
   - Social media icons (footer-linkedin.svg, footer-twitter.svg already in /workspace/images/)
   - Copyright text

3. **Verify Preview**: Check localhost:3000/abbvie-index.html to ensure:
   - Real images display correctly (replacing placeholders)
   - Header navigation is functional
   - Footer links are present

## Available Assets in /workspace/images/

**Real Content Images (Downloaded):**
- hero-fallback.jpg (144K)
- joe-story-card.jpg (49K)
- ambily-card-image.jpg (60K)
- man-looking-at-testtube-feature-tall.jpg (88K)
- three-women-in-meeting.jpg (102K)
- woman-speaking-to-man.jpg (99K)
- sitting-in-hammock-by-lake-hero.jpg (74K)
- kids-playing-soccer-grass.jpg (363K)

**Logos & Icons:**
- abbvie-logo-header.svg (2.9K)
- Icon Search.svg
- Icon Globe.svg
- Icon Dot menu.svg
- footer-linkedin.svg
- footer-twitter.svg
- powered_by_logo.svg

---

## Notes on Content Extraction

- Original HTML is production site with extensive tracking, analytics, and cookie consent code
- Navigation uses AEM component structure (cmp-navigation classes)
- Multi-level dropdown menus (level-0, level-1, level-2)
- Navigation includes aria labels and accessibility attributes
- External links marked with "external-link" class and "Opens in a new window" aria-labels
