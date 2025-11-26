# 🌐 ISRMS – AI TRUE NORTH STRATEGY
Master Blueprint for the Integrated Security Risk Management System  
Version: 1.0  
Maintained by: Foreman AI  
Owner: Johan Ras  
Status: Active  
Open for expansion: YES (“More to follow” section included)

---

# 1. PURPOSE OF THIS DOCUMENT
This is the **master AI governance blueprint** for the entire ISRMS ecosystem.

It defines:
- Global AI architecture  
- Module-specific AI responsibilities  
- Inter-module intelligence  
- AI orchestration strategy  
- Model routing rules  
- Escalation and version control  
- Security and international compliance  
- Continuous improvement  
- Future expansion  

All downstream module architectures inherit from this document.

The Foreman AI must always reference this document as **top-level law**.

---

# 2. VISION
ISRMS is a full-spectrum, AI-driven security and loss prevention platform.

Its AI backbone must:
- Learn continuously  
- Improve over time  
- Coordinate across modules  
- Detect anomalies across systems  
- Advise, guide, and educate  
- Perform specialist security functions  
- Provide friendly assistance to end-users  
- Train module AIs  
- Escalate risks to leadership  
- Maintain compliance with international standards (POPI, GDPR, ISO)  
- Enforce high-quality software development through the One-Time Build philosophy  

---

# 3. AI ECOSYSTEM LAYERS
The system consists of **three layers**:

---

## 3.1 Foreground Layer (Module Assistants)
Each module exposes:
- A global chat assistant (“ISRMS Assistant”)  
- Contextual AI help icons  
- Module-specific specialists  
- Ability to assist users with tasks relevant to that module  

Module assistants do **NOT** call OpenAI directly.  
They call the **AI Router**.

---

## 3.2 Middle Layer (AI Router / Orchestrator)
The AI Router:
- Receives all AI requests from all modules  
- Determines required task type  
- Selects appropriate model  
- Applies cost-aware routing  
- Adds global + module-specific context  
- Ensures compliance policies  
- Logs all AI interactions  
- Stores learning signals  
- Supports continuous improvement  

Task types include:
- General chat  
- Security analysis  
- Cross-system correlation  
- Workflow explanation  
- Code generation  
- Image generation  
- Video generation  
- Speech-to-text  
- Long-form reasoning  
- Domain-specific help  
- Incident analysis  
- Maturity assessment drafting  
- Compliance verification  

The router must be:
- Expandable  
- Configurable  
- Version-controlled  
- Foreman-supervised  

---

## 3.3 Top Layer (Foreman AI)
The Foreman is the master supervisor AI responsible for:

- Enforcing architecture compliance  
- Enforcing QA and UI/UX standards  
- Ensuring all modules implement embedded AI correctly  
- Ensuring AI router integration works  
- Reviewing PRs  
- Ensuring version control and formal change management  
- Scanning global architecture for drift  
- Monitoring AI performance  
- Training module AIs through guidance and corrections  
- Escalating risks to owner  

Foreman must regularly review:
- This document  
- Global architecture  
- Module architectures  
- Watchdog reports  
- AI performance metrics  
- Model deprecations and updates  
- New AI capabilities (“more to follow” pipeline)  

---

# 4. VERSION MANAGEMENT
This platform uses strict version control.

Versions exist at:
1. Global AI level  
2. Module level  
3. Model routing level  
4. QA & architecture levels  
5. UI UX compliance levels  

Rules:
- Any architecture or AI change must trigger a version bump  
- The Foreman must reject PRs with changes that lack version increments  
- Published versions cannot be changed retroactively  
- Module versions propagate upward to global version overview  

---

# 5. END-USER AI BEHAVIOR
Post-deployment, module AIs will:
- Help users understand screens  
- Provide advice, explanations, warnings  
- Help draft content (statuses, incidents, notes)  
- Detect suspicious activity patterns  
- Alert the system for escalation  
- Never modify system architecture or logic  
- Never alter UI or core UX  
- Escalate all system-change requests to the Foreman/Owner  

---

# 6. POST-DEPLOYMENT RESPONSIBILITIES OF EMBEDDED AI
Each module AI must:
- Monitor user interactions  
- Detect unusual patterns  
- Ensure workflows run correctly  
- Detect repeated user errors  
- Recommend improvements to the Foreman  
- Report system errors (404, broken buttons, misaligned UI)  
- Alert on compliance/security rule violations  
- Participate in continuous improvement cycles  

Embedded AI plays a role similar to:
- a junior security analyst  
- a UI/UX field tester  
- a compliance monitor  
- a trainer  
- a data annotator for the global system  

---

# 7. FOREMAN POST-DEPLOYMENT RESPONSIBILITIES
The Foreman must:
- Monitor AI behavior across all modules  
- Collect performance signals  
- Ensure all modules follow the AI integration spec  
- Request architectural updates as the system evolves  
- Supervise version bumps  
- Maintain global situational awareness  
- Detect cross-module anomalies (e.g. payroll vs access logs)  
- Alert the owner proactively when required  

---

# 8. ESCALATION PROTOCOLS
Modules escalate to:
- Module AI  
- AI Router  
- Foreman AI  
- Owner (you)  

Rules:
- End-user → Module AI  
- Module AI → AI Router (complex cases)  
- AI Router → Foreman (if security or logic concerns)  
- Foreman → Owner (if required)  
- Owner approves architecture updates  
- After approval → New version → Republish  

---

# 9. FUTURE EXPANSION (“MORE TO FOLLOW”)
This document is open for extension.  
New modules, capabilities, AI types, and integrations may be added.

Future planned expansions include:
- Advanced video analytics AI  
- Internal threat detection AI  
- Supply chain anomaly detection  
- Procurement pattern analysis  
- Cross-module behavioral AI  
- Voice-operated ISRMS assistant  
- Autonomous correlation engine  

The Foreman must flag when this document becomes outdated.

---

# 10. GLOBAL WATCHDOG REQUIREMENTS
Watchdog monitors:
- Architecture drift  
- Model routing failures  
- AI performance degradation  
- Escalation failures  
- Compliance breaches  
- Dangerous model responses  
- UI/UX errors  
- Repeated user confusion  
- Incident system abnormalities  
- Integration failures  

Watchdog reports feed both:
- Foreman AI  
- Owner  

---

# 11. MODEL CATALOG (INITIAL SET)
The router may use the following models:

- **Chat + General reasoning:** GPT-4.1, GPT-4o  
- **High-level analysis:** GPT-4.1, GPT-4.1-Pro  
- **Cost-efficient chat:** GPT-4o-mini  
- **Coding:** GPT-4.1-Coder  
- **Speech-to-text:** GPT-4o audio or Whisper v3  
- **Image generation:** DALL·E or GPT-Image  
- **Video generation:** OpenAI Video (as released)  

This list is open to expansion.  
Foreman must stay aware of new model availability.

---

# 12. CENTRAL PRINCIPLE
> **True North governs everything.  
If anything disagrees with this document, True North wins.**  

---

