/* ==========================================================
   MoneyWise V8
   script.js
   Part 1/10
   App State • Company Database • Prompt Templates • Storage
========================================================== */

"use strict";

/* ==========================================================
   Storage Keys
========================================================== */

const STORAGE_KEY = "moneywise_v8_workspace";

/* ==========================================================
   Company Database
   No API yet. This is local data for V8.
========================================================== */

const companies = [
    {
        id: "maruti",
        name: "Maruti Suzuki",
        ticker: "NSE: MARUTI",
        avatar: "MS",
        sector: "Automobile",
        type: "Large Cap",
        description: "India-focused passenger vehicle company known for cars, service network and mass-market reach.",
        tags: ["Auto", "Passenger Vehicles", "India"],
        facts: {
            "Business": "Passenger vehicle manufacturing and sales",
            "Main Market": "India",
            "Key Focus": "Cars, SUVs, hybrids, exports",
            "Investor Check": "Verify latest filings before relying on numbers"
        },
        metrics: {
            "Revenue Trend": "Review latest annual report",
            "Profitability": "Check margins over 5 years",
            "Debt": "Generally low, verify latest balance sheet",
            "Cash Flow": "Check operating cash flow consistency"
        },
        sections: {
            overview: "Maruti Suzuki is one of India's largest passenger vehicle companies. A beginner should study its market share, product mix, margins, dealer network, export strategy and future EV or hybrid plans.",
            business: "The company earns mainly by selling passenger vehicles. It may also earn from spare parts, accessories, services, financing tie-ups and exports.",
            financials: "Check revenue growth, operating profit, net profit, free cash flow and capex. Use annual reports and quarterly results for verification.",
            ratios: "Important ratios include P/E, ROE, ROCE, operating margin, net margin, debt-to-equity and free cash flow conversion.",
            risks: "Major risks include competition, commodity prices, regulation, EV transition, consumer slowdown and supply chain pressure.",
            news: "Latest developments should be verified from exchange filings, investor presentations and trusted financial news sources.",
            notes: "Write your own notes here after reviewing company documents."
        }
    },
    {
        id: "reliance",
        name: "Reliance Industries",
        ticker: "NSE: RELIANCE",
        avatar: "RI",
        sector: "Conglomerate",
        type: "Large Cap",
        description: "Diversified business across energy, retail, telecom and digital platforms.",
        tags: ["Energy", "Retail", "Telecom"],
        facts: {
            "Business": "Energy, retail, telecom and digital platforms",
            "Main Market": "India",
            "Key Focus": "Consumer, energy and digital ecosystem",
            "Investor Check": "Segment-wise analysis is important"
        },
        metrics: {
            "Revenue Trend": "Check segment-wise revenue",
            "Profitability": "Review margins by segment",
            "Debt": "Check consolidated debt and cash flows",
            "Cash Flow": "Review operating cash flow and capex"
        },
        sections: {
            overview: "Reliance Industries is a diversified Indian conglomerate. Beginners should avoid judging it as one single business and instead study its major segments separately.",
            business: "Revenue comes from multiple segments including oil-to-chemicals, retail, telecom and digital services.",
            financials: "Study consolidated financials along with segment-level performance. Pay attention to capex, debt and cash generation.",
            ratios: "Important ratios include consolidated debt-to-equity, ROCE, margins, segment EBITDA and cash flow conversion.",
            risks: "Risks include regulatory changes, commodity cycles, execution risk, high capex and competition in retail or telecom.",
            news: "Verify updates through exchange filings, quarterly results and investor presentations.",
            notes: "Write your research notes after studying each segment separately."
        }
    },
    {
        id: "tcs",
        name: "TCS",
        ticker: "NSE: TCS",
        avatar: "TC",
        sector: "Information Technology",
        type: "Large Cap",
        description: "IT services and consulting company serving global enterprises.",
        tags: ["IT", "Services", "Export"],
        facts: {
            "Business": "IT services and consulting",
            "Main Market": "Global clients",
            "Key Focus": "Digital transformation, cloud, enterprise services",
            "Investor Check": "Check deal wins, margins and attrition"
        },
        metrics: {
            "Revenue Trend": "Check constant currency growth",
            "Profitability": "Review operating margin",
            "Debt": "Usually asset-light, verify latest balance sheet",
            "Cash Flow": "Check free cash flow conversion"
        },
        sections: {
            overview: "TCS is one of India's major IT services companies. Beginners should study client demand, deal wins, margins, employee costs and global technology spending.",
            business: "The company earns revenue by providing IT services, consulting, digital transformation and enterprise solutions to global clients.",
            financials: "Review revenue growth, operating margin, net profit, free cash flow and employee cost trends.",
            ratios: "Important ratios include operating margin, ROE, ROCE, dividend payout and cash conversion.",
            risks: "Risks include global slowdown, currency movement, pricing pressure, automation and client concentration.",
            news: "Check quarterly results, management commentary and exchange filings.",
            notes: "Add notes on deal wins, margins and global IT demand."
        }
    },
    {
        id: "infosys",
        name: "Infosys",
        ticker: "NSE: INFY",
        avatar: "IF",
        sector: "Information Technology",
        type: "Large Cap",
        description: "Digital services and consulting company with global client base.",
        tags: ["IT", "Digital", "Consulting"],
        facts: {
            "Business": "Digital services and consulting",
            "Main Market": "Global clients",
            "Key Focus": "Cloud, digital transformation, consulting",
            "Investor Check": "Check guidance, margins and attrition"
        },
        metrics: {
            "Revenue Trend": "Check constant currency growth",
            "Profitability": "Review operating margin",
            "Debt": "Usually low debt, verify latest balance sheet",
            "Cash Flow": "Review free cash flow"
        },
        sections: {
            overview: "Infosys is a major Indian IT services company. Beginners should study revenue growth, guidance, margins, client demand and employee trends.",
            business: "Infosys earns from digital services, consulting, cloud migration, enterprise technology and outsourcing services.",
            financials: "Study quarterly growth, operating margins, net profit, large deal wins and cash flow.",
            ratios: "Important ratios include operating margin, ROE, ROCE, dividend payout and cash conversion.",
            risks: "Risks include global demand slowdown, currency fluctuations, wage pressure and pricing competition.",
            news: "Verify latest developments from exchange filings, quarterly results and investor presentations.",
            notes: "Write notes on guidance, margins and large deal pipeline."
        }
    },
    {
        id: "hdfc-bank",
        name: "HDFC Bank",
        ticker: "NSE: HDFCBANK",
        avatar: "HB",
        sector: "Banking",
        type: "Large Cap",
        description: "Private sector bank with retail, corporate and digital banking operations.",
        tags: ["Banking", "Private Bank", "Finance"],
        facts: {
            "Business": "Retail and corporate banking",
            "Main Market": "India",
            "Key Focus": "Deposits, loans, asset quality",
            "Investor Check": "Check NPAs, CASA and credit growth"
        },
        metrics: {
            "Revenue Trend": "Review net interest income",
            "Profitability": "Check NIM and ROA",
            "Debt": "For banks, study deposits and liabilities",
            "Cash Flow": "Bank cash flow needs separate interpretation"
        },
        sections: {
            overview: "HDFC Bank is a large private sector bank. Beginners should focus on loan growth, deposits, asset quality, margins and capital adequacy.",
            business: "The bank earns from interest on loans, fees, cards, treasury operations and other banking services.",
            financials: "Study net interest income, net interest margin, NPAs, provisions, deposits, advances and capital adequacy.",
            ratios: "Important ratios include NIM, GNPA, NNPA, CASA, ROA, ROE and capital adequacy.",
            risks: "Risks include credit quality deterioration, deposit competition, interest rate changes and regulatory pressure.",
            news: "Verify latest updates through bank results, filings and RBI-related disclosures.",
            notes: "Track asset quality and deposit growth carefully."
        }
    },
    {
        id: "asian-paints",
        name: "Asian Paints",
        ticker: "NSE: ASIANPAINT",
        avatar: "AP",
        sector: "Consumer",
        type: "Large Cap",
        description: "Paints and decor company with strong brand and distribution network.",
        tags: ["Consumer", "Paints", "Brand"],
        facts: {
            "Business": "Paints, coatings and decor",
            "Main Market": "India",
            "Key Focus": "Brand, distribution, margins",
            "Investor Check": "Check raw material prices and competition"
        },
        metrics: {
            "Revenue Trend": "Review volume and value growth",
            "Profitability": "Check gross and operating margins",
            "Debt": "Usually low, verify latest balance sheet",
            "Cash Flow": "Review working capital and free cash flow"
        },
        sections: {
            overview: "Asian Paints is a major consumer company in paints and decor. Beginners should study brand strength, distribution reach, pricing power and competition.",
            business: "Revenue mainly comes from decorative paints, industrial coatings and related home decor categories.",
            financials: "Study revenue growth, margins, raw material costs, working capital and cash flow.",
            ratios: "Important ratios include gross margin, operating margin, ROE, ROCE and inventory turnover.",
            risks: "Risks include raw material inflation, competition, housing slowdown and pricing pressure.",
            news: "Check latest results, management commentary and industry updates.",
            notes: "Write notes on margins, demand and competitive intensity."
        }
    }
];

/* ==========================================================
   MoneyBot Prompt Templates
========================================================== */

const promptTemplates = [
    {
        id: "company-research",
        title: "Full Company Research",
        description: "Beginner-friendly company analysis prompt.",
        prompt:
`You are MoneyBot, my professional financial research assistant.

Company: {{company}}

Rules:
- Do not give buy or sell advice.
- Do not predict guaranteed returns.
- Clearly separate facts, assumptions and opinions.
- Explain everything in simple English.
- Mention what should be verified from official sources.

Research:
1. Company overview
2. Business model
3. Revenue sources
4. Profitability
5. Debt position
6. Cash flow
7. Strengths
8. Risks
9. Competitors
10. Latest developments
11. Important ratios
12. Questions an investor should ask

End with a beginner-friendly summary.`
    },
    {
        id: "ratio-explainer",
        title: "Explain Ratios",
        description: "Simple explanation of important ratios.",
        prompt:
`Explain the important financial ratios for {{company}} in beginner-friendly language.

Cover:
- P/E Ratio
- ROE
- ROCE
- Debt to Equity
- Operating Margin
- Net Profit Margin
- Free Cash Flow

Do not give investment advice.`
    },
    {
        id: "risk-analysis",
        title: "Risk Analysis",
        description: "Find business and financial risks.",
        prompt:
`Act as MoneyBot and analyze the risks of {{company}}.

Separate risks into:
1. Business risks
2. Financial risks
3. Industry risks
4. Regulatory risks
5. Management or governance risks

Explain in simple English and mention what should be verified.`
    },
    {
        id: "competitor-comparison",
        title: "Competitor Comparison",
        description: "Compare company with competitors.",
        prompt:
`Compare {{company}} with its main competitors.

Cover:
- Business model
- Revenue sources
- Profitability
- Debt
- Growth
- Strengths
- Risks
- Valuation ratios

Do not give buy or sell advice.`
    },
    {
        id: "beginner-summary",
        title: "Beginner Summary",
        description: "Simple explanation for new investors.",
        prompt:
`Explain {{company}} like I am a beginner.

Use simple English.
Avoid jargon.
Explain:
- What the company does
- How it earns money
- Why people track it
- Main strengths
- Main risks
- What documents I should check`
    }
];

/* ==========================================================
   Default Workspace State
========================================================== */

const defaultState = {
    theme: "dark",
    activeView: "dashboard",
    activeCompanyId: null,
    userCompanies: ["maruti", "reliance", "tcs", "infosys"],
    favorites: [],
    pinned: [],
    compare: [],
    notes: [],
    collections: [],
    history: [],
    activities: []
};

let state = loadState();

/* ==========================================================
   Storage Helpers
========================================================== */

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return structuredClone(defaultState);
        }

        const parsed = JSON.parse(saved);

        return {
            ...structuredClone(defaultState),
            ...parsed
        };
    } catch (error) {
        console.error("Failed to load MoneyWise state:", error);
        return structuredClone(defaultState);
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error("Failed to save MoneyWise state:", error);
    }
}

function resetState() {
    state = structuredClone(defaultState);
    saveState();
}

/* ==========================================================
   Utility Helpers
========================================================== */

function getCompanyById(companyId) {
    return companies.find((company) => company.id === companyId) || null;
}

function getActiveCompany() {
    return getCompanyById(state.activeCompanyId);
}

function isInArray(array, value) {
    return Array.isArray(array) && array.includes(value);
}

function toggleArrayValue(array, value) {
    if (array.includes(value)) {
        return array.filter((item) => item !== value);
    }

    return [...array, value];
}

function formatDateTime(date = new Date()) {
    return date.toLocaleString([], {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
    });
}
/* ==========================================================
   MoneyWise V8
   script.js
   Part 2/10
   DOM Cache • Init • Theme • Navigation • Toasts • Activity
========================================================== */

/* ==========================================================
   DOM Cache
========================================================== */

const dom = {};

function cacheDom() {
    dom.app = document.getElementById("app");

    dom.sidebar = document.getElementById("sidebar");
    dom.sidebarToggle = document.getElementById("sidebarToggle");

    dom.navItems = document.querySelectorAll(".nav-item");
    dom.views = document.querySelectorAll(".view");

    dom.themeToggle = document.getElementById("themeToggle");
    dom.lightThemeButton = document.getElementById("lightThemeButton");
    dom.darkThemeButton = document.getElementById("darkThemeButton");

    dom.toastContainer = document.getElementById("toastContainer");
    dom.activityList = document.getElementById("activityList");

    dom.favoritesCount = document.getElementById("favoritesCount");
    dom.historyCount = document.getElementById("historyCount");
    dom.pinnedCount = document.getElementById("pinnedCount");
    dom.collectionsCount = document.getElementById("collectionsCount");
    dom.notesCount = document.getElementById("notesCount");

    dom.statCompanies = document.getElementById("statCompanies");
    dom.statFavorites = document.getElementById("statFavorites");
    dom.statCompare = document.getElementById("statCompare");
    dom.statNotes = document.getElementById("statNotes");
}

/* ==========================================================
   App Init
========================================================== */

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
    cacheDom();

    applyTheme(state.theme);
    bindGlobalEvents();

    renderAll();

    addActivity("MoneyWise opened", "Workspace loaded successfully.");
}

/* ==========================================================
   Global Events
========================================================== */

function bindGlobalEvents() {
    if (dom.sidebarToggle) {
        dom.sidebarToggle.addEventListener("click", toggleSidebar);
    }

    if (dom.themeToggle) {
        dom.themeToggle.addEventListener("click", toggleTheme);
    }

    if (dom.lightThemeButton) {
        dom.lightThemeButton.addEventListener("click", () => {
            setTheme("light");
        });
    }

    if (dom.darkThemeButton) {
        dom.darkThemeButton.addEventListener("click", () => {
            setTheme("dark");
        });
    }

    dom.navItems.forEach((item) => {
        item.addEventListener("click", () => {
            const viewName = item.dataset.view;

            if (viewName) {
                switchView(viewName);
            }
        });
    });
}

/* ==========================================================
   Sidebar
========================================================== */

function toggleSidebar() {
    if (!dom.app) return;

    const isSmallScreen = window.matchMedia("(max-width: 900px)").matches;

    if (isSmallScreen) {
        dom.app.classList.toggle("sidebar-open");
        return;
    }

    dom.app.classList.toggle("sidebar-collapsed");
}

/* ==========================================================
   Theme
========================================================== */

function applyTheme(theme) {
    const safeTheme = theme === "light" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", safeTheme);

    state.theme = safeTheme;

    if (dom.themeToggle) {
        dom.themeToggle.textContent = safeTheme === "dark" ? "🌙" : "☀️";
    }

    saveState();
}

function setTheme(theme) {
    applyTheme(theme);

    showToast(
        "Theme changed",
        `MoneyWise is now using ${theme} mode.`,
        theme === "dark" ? "🌙" : "☀️"
    );

    addActivity("Theme changed", `Theme set to ${theme} mode.`);
}

function toggleTheme() {
    const nextTheme = state.theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
}

/* ==========================================================
   View Navigation
========================================================== */

function switchView(viewName) {
    if (!viewName) return;

    state.activeView = viewName;
    saveState();

    dom.views.forEach((view) => {
        const isActive = view.dataset.view === viewName;
        view.classList.toggle("active-view", isActive);
    });

    dom.navItems.forEach((item) => {
        const isActive = item.dataset.view === viewName;
        item.classList.toggle("active", isActive);
    });

    if (dom.app) {
        dom.app.classList.remove("sidebar-open");
    }

    addActivity("View changed", `Opened ${capitalize(viewName)} view.`);
}

/* ==========================================================
   Counts
========================================================== */

function renderCounts() {
    const userCompanyCount = state.userCompanies.length;
    const favoriteCount = state.favorites.length;
    const compareCount = state.compare.length;
    const pinnedCount = state.pinned.length;
    const noteCount = state.notes.length;
    const collectionCount = state.collections.length;
    const historyCount = state.history.length;

    setText(dom.statCompanies, userCompanyCount);
    setText(dom.statFavorites, favoriteCount);
    setText(dom.statCompare, compareCount);
    setText(dom.statNotes, noteCount);

    setText(dom.favoritesCount, favoriteCount);
    setText(dom.historyCount, historyCount);
    setText(dom.pinnedCount, pinnedCount);
    setText(dom.collectionsCount, collectionCount);
    setText(dom.notesCount, noteCount);
}

function setText(element, value) {
    if (!element) return;

    element.textContent = value;
}

/* ==========================================================
   Toasts
========================================================== */

function showToast(title, message, icon = "✅") {
    if (!dom.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "toast";

    toast.innerHTML = `
        <div class="toast-icon">${escapeHtml(icon)}</div>
        <div>
            <strong>${escapeHtml(title)}</strong>
            <p>${escapeHtml(message)}</p>
        </div>
    `;

    dom.toastContainer.appendChild(toast);

    window.setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(24px)";

        window.setTimeout(() => {
            toast.remove();
        }, 220);
    }, 3200);
}

/* ==========================================================
   Activity
========================================================== */

function addActivity(title, detail) {
    const activity = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        title,
        detail,
        time: formatDateTime()
    };

    state.activities.unshift(activity);

    if (state.activities.length > 12) {
        state.activities = state.activities.slice(0, 12);
    }

    saveState();
    renderActivity();
}

function renderActivity() {
    if (!dom.activityList) return;

    if (state.activities.length === 0) {
        dom.activityList.innerHTML = `
            <div class="empty-message">
                No activity yet.
            </div>
        `;

        return;
    }

    dom.activityList.innerHTML = state.activities
        .map((activity) => {
            return `
                <div class="activity-item">
                    <strong>${escapeHtml(activity.title)}</strong>
                    <p>${escapeHtml(activity.detail)}</p>
                    <small>${escapeHtml(activity.time)}</small>
                </div>
            `;
        })
        .join("");
}

/* ==========================================================
   Render App
========================================================== */

function renderAll() {
    renderCounts();
    renderActivity();

    switchView(state.activeView || "dashboard");
}

/* ==========================================================
   Helpers
========================================================== */

function capitalize(value) {
    if (!value) return "";

    return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
/* ==========================================================
   MoneyWise V8
   script.js
   Part 3/10
   Company Rendering • Company Selection • Favorites • Pinned • Compare
========================================================== */

/* ==========================================================
   Extend DOM Cache
========================================================== */

function cacheCompanyDom() {
    dom.featuredCompaniesGrid = document.getElementById("featuredCompaniesGrid");

    dom.activeCompanyAvatar = document.getElementById("activeCompanyAvatar");
    dom.activeCompanyName = document.getElementById("activeCompanyName");
    dom.activeCompanyDescription = document.getElementById("activeCompanyDescription");
    dom.activeCompanySector = document.getElementById("activeCompanySector");
    dom.activeCompanyType = document.getElementById("activeCompanyType");

    dom.openSelectedResearchButton = document.getElementById("openSelectedResearchButton");
    dom.addSelectedToCompareButton = document.getElementById("addSelectedToCompareButton");
    dom.favoriteSelectedButton = document.getElementById("favoriteSelectedButton");
    dom.pinCompanyButton = document.getElementById("pinCompanyButton");
    dom.favoriteCompanyButton = document.getElementById("favoriteCompanyButton");

    dom.dashboardOpenResearchButton = document.getElementById("dashboardOpenResearchButton");
    dom.dashboardAddCompanyButton = document.getElementById("dashboardAddCompanyButton");
    dom.refreshCompaniesButton = document.getElementById("refreshCompaniesButton");
    dom.quickAddCompanyButton = document.getElementById("quickAddCompanyButton");

    dom.addSelectedToCompareButton?.addEventListener("click", addActiveCompanyToCompare);
    dom.openSelectedResearchButton?.addEventListener("click", openActiveCompanyResearch);
    dom.favoriteSelectedButton?.addEventListener("click", toggleActiveCompanyFavorite);
    dom.pinCompanyButton?.addEventListener("click", toggleActiveCompanyPinned);
    dom.favoriteCompanyButton?.addEventListener("click", toggleActiveCompanyFavorite);

    dom.dashboardOpenResearchButton?.addEventListener("click", openActiveCompanyResearch);
    dom.refreshCompaniesButton?.addEventListener("click", () => {
        renderCompanies();
        showToast("Companies refreshed", "Your company workspace was refreshed.", "🔄");
    });
}

/* ==========================================================
   Patch Init
========================================================== */

const originalInitializeApp = initializeApp;

initializeApp = function patchedInitializeApp() {
    cacheDom();
    cacheCompanyDom();

    applyTheme(state.theme);
    bindGlobalEvents();

    renderAll();

    addActivity("MoneyWise opened", "Workspace loaded successfully.");
};

/* ==========================================================
   Company Rendering
========================================================== */

function renderCompanies() {
    if (!dom.featuredCompaniesGrid) return;

    const userCompanies = state.userCompanies
        .map(getCompanyById)
        .filter(Boolean);

    if (userCompanies.length === 0) {
        dom.featuredCompaniesGrid.innerHTML = `
            <div class="empty-message">
                No companies added yet. Use + Add Company to build your workspace.
            </div>
        `;
        return;
    }

    dom.featuredCompaniesGrid.innerHTML = userCompanies
        .map((company) => {
            const isFavorite = state.favorites.includes(company.id);
            const isActive = state.activeCompanyId === company.id;

            return `
                <button
                    class="company-card ${isActive ? "active-company" : ""}"
                    type="button"
                    data-company-id="${escapeHtml(company.id)}"
                >
                    <div class="company-card-top">
                        <div class="company-logo">
                            ${escapeHtml(company.avatar)}
                        </div>

                        <span
                            class="favorite-button"
                            data-action="favorite"
                            data-company-id="${escapeHtml(company.id)}"
                        >
                            ${isFavorite ? "★" : "☆"}
                        </span>
                    </div>

                    <h3>${escapeHtml(company.name)}</h3>

                    <p>${escapeHtml(company.description)}</p>

                    <div class="company-tags">
                        ${company.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
                    </div>
                </button>
            `;
        })
        .join("");

    dom.featuredCompaniesGrid
        .querySelectorAll(".company-card")
        .forEach((card) => {
            card.addEventListener("click", (event) => {
                const favoriteButton = event.target.closest("[data-action='favorite']");

                if (favoriteButton) {
                    event.stopPropagation();
                    toggleFavorite(favoriteButton.dataset.companyId);
                    return;
                }

                selectCompany(card.dataset.companyId);
            });
        });
}

/* ==========================================================
   Select Company
========================================================== */

function selectCompany(companyId) {
    const company = getCompanyById(companyId);

    if (!company) {
        showToast("Company not found", "This company is not available in local data.", "⚠️");
        return;
    }

    state.activeCompanyId = company.id;

    addToHistory(company.id);
    saveState();

    renderAll();

    showToast("Company selected", `${company.name} is now active.`, "📊");
    addActivity("Company selected", company.name);
}

function renderActiveCompany() {
    const company = getActiveCompany();

    if (!company) {
        setText(dom.activeCompanyAvatar, "MW");
        setText(dom.activeCompanyName, "No company selected");
        setText(dom.activeCompanyDescription, "Choose a company from the dashboard to begin.");
        setText(dom.activeCompanySector, "—");
        setText(dom.activeCompanyType, "—");
        return;
    }

    setText(dom.activeCompanyAvatar, company.avatar);
    setText(dom.activeCompanyName, company.name);
    setText(dom.activeCompanyDescription, company.description);
    setText(dom.activeCompanySector, company.sector);
    setText(dom.activeCompanyType, company.type);

    if (dom.favoriteSelectedButton) {
        dom.favoriteSelectedButton.textContent = state.favorites.includes(company.id)
            ? "Remove from Favorites"
            : "Add to Favorites";
    }
}

/* ==========================================================
   Favorites
========================================================== */

function toggleFavorite(companyId) {
    const company = getCompanyById(companyId);

    if (!company) return;

    state.favorites = toggleArrayValue(state.favorites, company.id);

    const isFavorite = state.favorites.includes(company.id);

    saveState();
    renderAll();

    showToast(
        isFavorite ? "Added to favorites" : "Removed from favorites",
        company.name,
        isFavorite ? "⭐" : "☆"
    );

    addActivity(
        isFavorite ? "Favorite added" : "Favorite removed",
        company.name
    );
}

function toggleActiveCompanyFavorite() {
    const company = getActiveCompany();

    if (!company) {
        showToast("No company selected", "Select a company first.", "⚠️");
        return;
    }

    toggleFavorite(company.id);
}

/* ==========================================================
   Pinned
========================================================== */

function toggleActiveCompanyPinned() {
    const company = getActiveCompany();

    if (!company) {
        showToast("No company selected", "Select a company first.", "⚠️");
        return;
    }

    state.pinned = toggleArrayValue(state.pinned, company.id);

    const isPinned = state.pinned.includes(company.id);

    saveState();
    renderAll();

    showToast(
        isPinned ? "Company pinned" : "Company unpinned",
        company.name,
        isPinned ? "📌" : "📍"
    );

    addActivity(
        isPinned ? "Pinned company" : "Unpinned company",
        company.name
    );
}

/* ==========================================================
   Compare
========================================================== */

function addActiveCompanyToCompare() {
    const company = getActiveCompany();

    if (!company) {
        showToast("No company selected", "Select a company before adding to compare.", "⚠️");
        return;
    }

    addCompanyToCompare(company.id);
}

function addCompanyToCompare(companyId) {
    const company = getCompanyById(companyId);

    if (!company) return;

    if (state.compare.includes(company.id)) {
        showToast("Already added", `${company.name} is already in compare.`, "ℹ️");
        return;
    }

    if (state.compare.length >= 4) {
        showToast("Compare limit reached", "You can compare up to 4 companies.", "⚠️");
        return;
    }

    state.compare.push(company.id);

    saveState();
    renderAll();

    showToast("Added to compare", company.name, "⚖️");
    addActivity("Added to compare", company.name);
}

/* ==========================================================
   History
========================================================== */

function addToHistory(companyId) {
    state.history = state.history.filter((id) => id !== companyId);
    state.history.unshift(companyId);

    if (state.history.length > 10) {
        state.history = state.history.slice(0, 10);
    }
}

/* ==========================================================
   Open Research
========================================================== */

function openActiveCompanyResearch() {
    const company = getActiveCompany();

    if (!company) {
        showToast("No company selected", "Choose a company first.", "⚠️");
        return;
    }

    switchView("research");

    addActivity("Opened research", company.name);
}

/* ==========================================================
   Extend Render
========================================================== */

const originalRenderAll = renderAll;

renderAll = function patchedRenderAll() {
    renderCounts();
    renderActivity();
    renderCompanies();
    renderActiveCompany();

    switchView(state.activeView || "dashboard");
};
/* ==========================================================
   MoneyWise V8
   script.js
   Part 4/10
   Research View • Research Tabs • Facts • Metrics • Documents
========================================================== */

/* ==========================================================
   Research DOM
========================================================== */

function cacheResearchDom() {
    dom.researchCompanyTitle = document.getElementById("researchCompanyTitle");
    dom.researchCompanySubtitle = document.getElementById("researchCompanySubtitle");
    dom.researchTabs = document.getElementById("researchTabs");
    dom.researchContent = document.getElementById("researchContent");
    dom.sectionTitle = document.getElementById("sectionTitle");
    dom.quickFacts = document.getElementById("quickFacts");
    dom.keyMetrics = document.getElementById("keyMetrics");
    dom.moneyBotResearchButton = document.getElementById("moneyBotResearchButton");
    dom.documentButtons = document.querySelectorAll(".document-button");

    dom.researchTabs?.querySelectorAll(".research-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            const tabName = tab.dataset.tab;

            if (tabName) {
                setResearchTab(tabName);
            }
        });
    });

    dom.moneyBotResearchButton?.addEventListener("click", () => {
        const company = getActiveCompany();

        if (!company) {
            showToast("No company selected", "Select a company before opening MoneyBot.", "⚠️");
            return;
        }

        switchView("moneybot");
        fillPromptForCompany("company-research", company.id);
    });

    dom.documentButtons.forEach((button) => {
        button.addEventListener("click", () => {
            handleDocumentClick(button.dataset.document);
        });
    });
}

/* ==========================================================
   Research State
========================================================== */

if (!state.activeResearchTab) {
    state.activeResearchTab = "overview";
    saveState();
}

/* ==========================================================
   Research Tabs
========================================================== */

function setResearchTab(tabName) {
    state.activeResearchTab = tabName;
    saveState();

    renderResearch();

    const company = getActiveCompany();

    addActivity(
        "Research tab opened",
        company ? `${company.name} • ${capitalize(tabName)}` : capitalize(tabName)
    );
}

function renderResearchTabs() {
    if (!dom.researchTabs) return;

    dom.researchTabs.querySelectorAll(".research-tab").forEach((tab) => {
        tab.classList.toggle(
            "active",
            tab.dataset.tab === state.activeResearchTab
        );
    });
}

/* ==========================================================
   Render Research View
========================================================== */

function renderResearch() {
    const company = getActiveCompany();

    renderResearchTabs();

    if (!company) {
        renderEmptyResearch();
        return;
    }

    setText(dom.researchCompanyTitle, company.name);
    setText(
        dom.researchCompanySubtitle,
        `${company.ticker} • ${company.sector} • ${company.type}`
    );

    const tab = state.activeResearchTab || "overview";
    const content = company.sections[tab] || "No content available for this section.";

    setText(dom.sectionTitle, getResearchTabTitle(tab));

    if (dom.researchContent) {
        dom.researchContent.innerHTML = `
            <div class="research-article">
                <p>${escapeHtml(content)}</p>

                <div class="research-checklist">
                    <h3>What to verify</h3>

                    <ul>
                        <li>Annual Report</li>
                        <li>Investor Presentation</li>
                        <li>Exchange Filings</li>
                        <li>Quarterly Results</li>
                    </ul>
                </div>
            </div>
        `;
    }

    renderQuickFacts(company);
    renderKeyMetrics(company);
}

function renderEmptyResearch() {
    setText(dom.researchCompanyTitle, "Select a Company");
    setText(dom.researchCompanySubtitle, "Choose a company from your workspace to begin detailed research.");
    setText(dom.sectionTitle, "Company Overview");

    if (dom.researchContent) {
        dom.researchContent.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📊</div>
                <h3>No Company Selected</h3>
                <p>Select a company from your dashboard or workspace to start researching.</p>
            </div>
        `;
    }

    if (dom.quickFacts) {
        dom.quickFacts.innerHTML = "";
    }

    if (dom.keyMetrics) {
        dom.keyMetrics.innerHTML = "";
    }
}

/* ==========================================================
   Quick Facts
========================================================== */

function renderQuickFacts(company) {
    if (!dom.quickFacts) return;

    dom.quickFacts.innerHTML = Object.entries(company.facts)
        .map(([label, value]) => {
            return `
                <div class="fact-item">
                    <span>${escapeHtml(label)}</span>
                    <strong>${escapeHtml(value)}</strong>
                </div>
            `;
        })
        .join("");
}

/* ==========================================================
   Key Metrics
========================================================== */

function renderKeyMetrics(company) {
    if (!dom.keyMetrics) return;

    dom.keyMetrics.innerHTML = Object.entries(company.metrics)
        .map(([label, value]) => {
            return `
                <div class="metric-item">
                    <span>${escapeHtml(label)}</span>
                    <strong>${escapeHtml(value)}</strong>
                </div>
            `;
        })
        .join("");
}

/* ==========================================================
   Documents
========================================================== */

function handleDocumentClick(documentType) {
    const company = getActiveCompany();

    if (!company) {
        showToast("No company selected", "Select a company before opening documents.", "⚠️");
        return;
    }

    const names = {
        annual: "Annual Report",
        presentation: "Investor Presentation",
        results: "Quarterly Results",
        filings: "Exchange Filings"
    };

    const documentName = names[documentType] || "Document";

    showToast(
        "Document reminder",
        `Check ${documentName} for ${company.name} from official sources.`,
        "📄"
    );

    addActivity(
        "Document opened",
        `${company.name} • ${documentName}`
    );
}

/* ==========================================================
   Research Helpers
========================================================== */

function getResearchTabTitle(tabName) {
    const titles = {
        overview: "Company Overview",
        business: "Business Model",
        financials: "Financials",
        ratios: "Important Ratios",
        risks: "Risks",
        news: "Latest Developments",
        notes: "Research Notes"
    };

    return titles[tabName] || "Company Research";
}

/* ==========================================================
   Patch Existing Init/Render Continuation
========================================================== */

const previousInitializeAppPart4 = initializeApp;

initializeApp = function initializeAppPart4() {
    cacheDom();
    cacheCompanyDom();
    cacheResearchDom();

    applyTheme(state.theme);
    bindGlobalEvents();

    renderAll();

    addActivity("MoneyWise opened", "Workspace loaded successfully.");
};

const previousRenderAllPart4 = renderAll;

renderAll = function renderAllPart4() {
    renderCounts();
    renderActivity();
    renderCompanies();
    renderActiveCompany();
    renderResearch();

    switchView(state.activeView || "dashboard");
};
/* ==========================================================
   MoneyWise V8
   script.js
   Part 5/10
   Compare View • Workspace View • Favorites • Pinned • History Lists
========================================================== */

/* ==========================================================
   Compare + Workspace DOM
========================================================== */

function cacheCompareWorkspaceDom() {
    dom.compareBasket = document.getElementById("compareBasket");
    dom.compareTableWrap = document.getElementById("compareTableWrap");
    dom.clearCompareButton = document.getElementById("clearCompareButton");
    dom.compareAddCompanyButton = document.getElementById("compareAddCompanyButton");

    dom.favoritesList = document.getElementById("favoritesList");
    dom.pinnedList = document.getElementById("pinnedList");
    dom.historyList = document.getElementById("historyList");
    dom.collectionsList = document.getElementById("collectionsList");

    dom.newCollectionButton = document.getElementById("newCollectionButton");

    dom.clearCompareButton?.addEventListener("click", clearCompare);
    dom.compareAddCompanyButton?.addEventListener("click", openAddCompanyModal);

    dom.newCollectionButton?.addEventListener("click", createCollection);
}

/* ==========================================================
   Compare Rendering
========================================================== */

function renderCompare() {
    renderCompareBasket();
    renderCompareTable();
}

function renderCompareBasket() {
    if (!dom.compareBasket) return;

    if (state.compare.length === 0) {
        dom.compareBasket.innerHTML = `
            <div class="empty-message">
                No companies in compare basket.
            </div>
        `;
        return;
    }

    dom.compareBasket.innerHTML = state.compare
        .map(getCompanyById)
        .filter(Boolean)
        .map((company) => {
            return `
                <div class="compare-company">
                    <div class="compare-company-logo">
                        ${escapeHtml(company.avatar)}
                    </div>

                    <div class="compare-company-info">
                        <h4>${escapeHtml(company.name)}</h4>
                        <p>${escapeHtml(company.sector)} • ${escapeHtml(company.type)}</p>
                    </div>

                    <button
                        class="note-action-button"
                        type="button"
                        data-remove-compare="${escapeHtml(company.id)}"
                    >
                        Remove
                    </button>
                </div>
            `;
        })
        .join("");

    dom.compareBasket
        .querySelectorAll("[data-remove-compare]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                removeFromCompare(button.dataset.removeCompare);
            });
        });
}

function renderCompareTable() {
    if (!dom.compareTableWrap) return;

    const selectedCompanies = state.compare
        .map(getCompanyById)
        .filter(Boolean);

    if (selectedCompanies.length < 2) {
        dom.compareTableWrap.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">⚖️</div>

                <h3>No comparison yet</h3>

                <p>Add two or more companies to start comparing them.</p>
            </div>
        `;
        return;
    }

    const rows = [
        ["Sector", "sector"],
        ["Type", "type"],
        ["Ticker", "ticker"],
        ["Business", "facts.Business"],
        ["Main Market", "facts.Main Market"],
        ["Key Focus", "facts.Key Focus"],
        ["Debt", "metrics.Debt"],
        ["Profitability", "metrics.Profitability"],
        ["Cash Flow", "metrics.Cash Flow"]
    ];

    dom.compareTableWrap.innerHTML = `
        <table class="compare-table">
            <thead>
                <tr>
                    <th>Factor</th>
                    ${selectedCompanies
                        .map((company) => `<th>${escapeHtml(company.name)}</th>`)
                        .join("")}
                </tr>
            </thead>

            <tbody>
                ${rows
                    .map(([label, path]) => {
                        return `
                            <tr>
                                <td><strong>${escapeHtml(label)}</strong></td>

                                ${selectedCompanies
                                    .map((company) => {
                                        return `
                                            <td>
                                                ${escapeHtml(getNestedValue(company, path) || "—")}
                                            </td>
                                        `;
                                    })
                                    .join("")}
                            </tr>
                        `;
                    })
                    .join("")}
            </tbody>
        </table>
    `;
}

function removeFromCompare(companyId) {
    const company = getCompanyById(companyId);

    state.compare = state.compare.filter((id) => id !== companyId);
    saveState();
    renderAll();

    showToast(
        "Removed from compare",
        company ? company.name : "Company removed",
        "⚖️"
    );
}

function clearCompare() {
    if (state.compare.length === 0) {
        showToast("Compare already empty", "No companies are currently selected.", "ℹ️");
        return;
    }

    state.compare = [];
    saveState();
    renderAll();

    showToast("Compare cleared", "All companies were removed from compare.", "🧹");
    addActivity("Compare cleared", "Removed all comparison companies.");
}

/* ==========================================================
   Workspace Rendering
========================================================== */

function renderWorkspace() {
    renderWorkspaceList(dom.favoritesList, state.favorites, "No favorite companies yet.");
    renderWorkspaceList(dom.pinnedList, state.pinned, "No pinned companies yet.");
    renderWorkspaceList(dom.historyList, state.history, "No history yet.");
    renderCollections();
}

function renderWorkspaceList(container, companyIds, emptyText) {
    if (!container) return;

    const items = companyIds
        .map(getCompanyById)
        .filter(Boolean);

    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty-message">
                ${escapeHtml(emptyText)}
            </div>
        `;
        return;
    }

    container.innerHTML = items
        .map((company) => {
            return `
                <button
                    class="workspace-card"
                    type="button"
                    data-open-company="${escapeHtml(company.id)}"
                >
                    <div class="workspace-card-left">
                        <div class="workspace-card-icon">
                            ${escapeHtml(company.avatar)}
                        </div>

                        <div>
                            <div class="workspace-card-title">
                                ${escapeHtml(company.name)}
                            </div>

                            <div class="workspace-card-subtitle">
                                ${escapeHtml(company.sector)} • ${escapeHtml(company.type)}
                            </div>
                        </div>
                    </div>

                    <span class="badge">
                        Open
                    </span>
                </button>
            `;
        })
        .join("");

    container
        .querySelectorAll("[data-open-company]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                selectCompany(button.dataset.openCompany);
                switchView("research");
            });
        });
}

function renderCollections() {
    if (!dom.collectionsList) return;

    if (state.collections.length === 0) {
        dom.collectionsList.innerHTML = `
            <div class="empty-message">
                No collections yet.
            </div>
        `;
        return;
    }

    dom.collectionsList.innerHTML = state.collections
        .map((collection) => {
            return `
                <div class="workspace-card">
                    <div class="workspace-card-left">
                        <div class="workspace-card-icon">
                            📂
                        </div>

                        <div>
                            <div class="workspace-card-title">
                                ${escapeHtml(collection.name)}
                            </div>

                            <div class="workspace-card-subtitle">
                                ${collection.companyIds.length} companies
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");
}

/* ==========================================================
   Collections
========================================================== */

function createCollection() {
    const name = window.prompt("Collection name:");

    if (!name || !name.trim()) {
        return;
    }

    const collection = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        name: name.trim(),
        companyIds: []
    };

    state.collections.push(collection);
    saveState();
    renderAll();

    showToast("Collection created", collection.name, "📂");
    addActivity("Collection created", collection.name);
}

/* ==========================================================
   Utility
========================================================== */

function getNestedValue(object, path) {
    return path.split(".").reduce((value, key) => {
        if (value && Object.prototype.hasOwnProperty.call(value, key)) {
            return value[key];
        }

        return undefined;
    }, object);
}

/* ==========================================================
   Patch Existing Init/Render Continuation
========================================================== */

const previousInitializeAppPart5 = initializeApp;

initializeApp = function initializeAppPart5() {
    cacheDom();
    cacheCompanyDom();
    cacheResearchDom();
    cacheCompareWorkspaceDom();

    applyTheme(state.theme);
    bindGlobalEvents();

    renderAll();

    addActivity("MoneyWise opened", "Workspace loaded successfully.");
};

const previousRenderAllPart5 = renderAll;

renderAll = function renderAllPart5() {
    renderCounts();
    renderActivity();
    renderCompanies();
    renderActiveCompany();
    renderResearch();
    renderCompare();
    renderWorkspace();

    switchView(state.activeView || "dashboard");
};
/* ==========================================================
   MoneyWise V8
   script.js
   Part 7/9
   Search Overlay • Add Company Modal • Company Search
========================================================== */

/* ==========================================================
   Search + Add Company DOM
========================================================== */

function cacheSearchCompanyDom() {
    dom.openSearchButton = document.getElementById("openSearchButton");
    dom.searchOverlay = document.getElementById("searchOverlay");
    dom.overlaySearchInput = document.getElementById("overlaySearchInput");
    dom.searchResults = document.getElementById("searchResults");
    dom.closeSearchOverlay = document.getElementById("closeSearchOverlay");

    dom.addCompanyModal = document.getElementById("addCompanyModal");
    dom.companySearchInput = document.getElementById("companySearchInput");
    dom.companySearchResults = document.getElementById("companySearchResults");
    dom.closeCompanyModal = document.getElementById("closeCompanyModal");

    dom.dashboardAddCompanyButton = document.getElementById("dashboardAddCompanyButton");
    dom.compareAddCompanyButton = document.getElementById("compareAddCompanyButton");
    dom.newResearchButton = document.getElementById("newResearchButton");

    dom.openSearchButton?.addEventListener("click", openSearchOverlay);
    dom.closeSearchOverlay?.addEventListener("click", closeSearchOverlay);

    dom.overlaySearchInput?.addEventListener("input", () => {
        renderSearchResults(dom.overlaySearchInput.value);
    });

    dom.dashboardAddCompanyButton?.addEventListener("click", openAddCompanyModal);
    dom.compareAddCompanyButton?.addEventListener("click", openAddCompanyModal);
    dom.newResearchButton?.addEventListener("click", openAddCompanyModal);

    dom.closeCompanyModal?.addEventListener("click", closeAddCompanyModal);

    dom.companySearchInput?.addEventListener("input", () => {
        renderCompanySearchResults(dom.companySearchInput.value);
    });

    dom.searchOverlay?.addEventListener("click", (event) => {
        if (event.target === dom.searchOverlay) {
            closeSearchOverlay();
        }
    });

    dom.addCompanyModal?.addEventListener("click", (event) => {
        if (event.target === dom.addCompanyModal) {
            closeAddCompanyModal();
        }
    });
}

/* ==========================================================
   Search Overlay
========================================================== */

function openSearchOverlay() {
    if (!dom.searchOverlay) return;

    dom.searchOverlay.classList.remove("hidden");

    if (dom.overlaySearchInput) {
        dom.overlaySearchInput.value = "";
        dom.overlaySearchInput.focus();
    }

    renderSearchResults("");
}

function closeSearchOverlay() {
    dom.searchOverlay?.classList.add("hidden");
}

function renderSearchResults(query) {
    if (!dom.searchResults) return;

    const searchText = query.trim().toLowerCase();

    const companyResults = companies
        .filter((company) => {
            if (!searchText) return state.userCompanies.includes(company.id);

            return (
                company.name.toLowerCase().includes(searchText) ||
                company.ticker.toLowerCase().includes(searchText) ||
                company.sector.toLowerCase().includes(searchText) ||
                company.tags.join(" ").toLowerCase().includes(searchText)
            );
        })
        .slice(0, 8);

    const commandResults = getCommandResults(searchText);

    const noteResults = state.notes
        .filter((note) => {
            if (!searchText) return false;

            return (
                note.title.toLowerCase().includes(searchText) ||
                note.body.toLowerCase().includes(searchText)
            );
        })
        .slice(0, 5);

    const html = [
        ...companyResults.map(renderSearchCompanyResult),
        ...commandResults.map(renderSearchCommandResult),
        ...noteResults.map(renderSearchNoteResult)
    ].join("");

    if (!html) {
        dom.searchResults.innerHTML = `
            <div class="empty-message">
                No results found.
            </div>
        `;
        return;
    }

    dom.searchResults.innerHTML = html;

    bindSearchResultEvents();
}

function renderSearchCompanyResult(company) {
    return `
        <button
            class="search-result"
            type="button"
            data-search-company="${escapeHtml(company.id)}"
        >
            <span class="search-result-left">
                <span class="search-result-icon">${escapeHtml(company.avatar)}</span>

                <span>
                    <strong>${escapeHtml(company.name)}</strong>
                    <small>${escapeHtml(company.ticker)} • ${escapeHtml(company.sector)}</small>
                </span>
            </span>

            <span class="badge">Company</span>
        </button>
    `;
}

function renderSearchCommandResult(command) {
    return `
        <button
            class="search-result"
            type="button"
            data-search-command="${escapeHtml(command.id)}"
        >
            <span class="search-result-left">
                <span class="search-result-icon">${escapeHtml(command.icon)}</span>

                <span>
                    <strong>${escapeHtml(command.title)}</strong>
                    <small>${escapeHtml(command.description)}</small>
                </span>
            </span>

            <span class="badge">Command</span>
        </button>
    `;
}

function renderSearchNoteResult(note) {
    return `
        <button
            class="search-result"
            type="button"
            data-search-note="${escapeHtml(note.id)}"
        >
            <span class="search-result-left">
                <span class="search-result-icon">📝</span>

                <span>
                    <strong>${escapeHtml(note.title)}</strong>
                    <small>${escapeHtml(note.body.slice(0, 80))}</small>
                </span>
            </span>

            <span class="badge">Note</span>
        </button>
    `;
}

function bindSearchResultEvents() {
    dom.searchResults
        ?.querySelectorAll("[data-search-company]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                selectCompany(button.dataset.searchCompany);
                switchView("research");
                closeSearchOverlay();
            });
        });

    dom.searchResults
        ?.querySelectorAll("[data-search-command]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                runCommand(button.dataset.searchCommand);
                closeSearchOverlay();
            });
        });

    dom.searchResults
        ?.querySelectorAll("[data-search-note]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                openNote(button.dataset.searchNote);
                switchView("notes");
                closeSearchOverlay();
            });
        });
}

/* ==========================================================
   Commands
========================================================== */

function getCommandResults(searchText) {
    const commands = [
        {
            id: "open-dashboard",
            icon: "🏠",
            title: "Open Dashboard",
            description: "Go to the research dashboard."
        },
        {
            id: "open-research",
            icon: "📊",
            title: "Open Research",
            description: "Open the current company research page."
        },
        {
            id: "open-compare",
            icon: "⚖️",
            title: "Open Compare",
            description: "Compare selected companies."
        },
        {
            id: "open-workspace",
            icon: "💼",
            title: "Open Workspace",
            description: "View favorites, pinned companies and history."
        },
        {
            id: "open-moneybot",
            icon: "🤖",
            title: "Open MoneyBot",
            description: "Open prompt templates."
        },
        {
            id: "open-notes",
            icon: "📝",
            title: "Open Notes",
            description: "Create or manage notes."
        },
        {
            id: "add-company",
            icon: "➕",
            title: "Add Company",
            description: "Add a company to your workspace."
        },
        {
            id: "toggle-theme",
            icon: "◐",
            title: "Toggle Theme",
            description: "Switch between dark and light mode."
        }
    ];

    if (!searchText) return commands.slice(0, 6);

    return commands.filter((command) => {
        return (
            command.title.toLowerCase().includes(searchText) ||
            command.description.toLowerCase().includes(searchText)
        );
    });
}

function runCommand(commandId) {
    const commandMap = {
        "open-dashboard": () => switchView("dashboard"),
        "open-research": () => switchView("research"),
        "open-compare": () => switchView("compare"),
        "open-workspace": () => switchView("workspace"),
        "open-moneybot": () => switchView("moneybot"),
        "open-notes": () => switchView("notes"),
        "add-company": () => openAddCompanyModal(),
        "toggle-theme": () => toggleTheme()
    };

    const action = commandMap[commandId];

    if (action) {
        action();
        showToast("Command executed", commandId.replaceAll("-", " "), "⌘");
    }
}

/* ==========================================================
   Add Company Modal
========================================================== */

function openAddCompanyModal() {
    if (!dom.addCompanyModal) return;

    dom.addCompanyModal.classList.remove("hidden");

    if (dom.companySearchInput) {
        dom.companySearchInput.value = "";
        dom.companySearchInput.focus();
    }

    renderCompanySearchResults("");
}

function closeAddCompanyModal() {
    dom.addCompanyModal?.classList.add("hidden");
}

function renderCompanySearchResults(query) {
    if (!dom.companySearchResults) return;

    const searchText = query.trim().toLowerCase();

    const results = companies.filter((company) => {
        if (!searchText) return true;

        return (
            company.name.toLowerCase().includes(searchText) ||
            company.ticker.toLowerCase().includes(searchText) ||
            company.sector.toLowerCase().includes(searchText) ||
            company.tags.join(" ").toLowerCase().includes(searchText)
        );
    });

    if (results.length === 0) {
        dom.companySearchResults.innerHTML = `
            <div class="empty-message">
                No matching company found.
            </div>
        `;
        return;
    }

    dom.companySearchResults.innerHTML = results
        .map((company) => {
            const alreadyAdded = state.userCompanies.includes(company.id);

            return `
                <button
                    class="company-search-item"
                    type="button"
                    data-add-company="${escapeHtml(company.id)}"
                    ${alreadyAdded ? "disabled" : ""}
                >
                    <div class="company-logo">
                        ${escapeHtml(company.avatar)}
                    </div>

                    <div>
                        <strong>${escapeHtml(company.name)}</strong>
                        <p>${escapeHtml(company.ticker)} • ${escapeHtml(company.sector)}</p>
                    </div>

                    <span class="badge">
                        ${alreadyAdded ? "Added" : "Add"}
                    </span>
                </button>
            `;
        })
        .join("");

    dom.companySearchResults
        .querySelectorAll("[data-add-company]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                addCompanyToWorkspace(button.dataset.addCompany);
            });
        });
}

function addCompanyToWorkspace(companyId) {
    const company = getCompanyById(companyId);

    if (!company) {
        showToast("Company not found", "This company is not available.", "⚠️");
        return;
    }

    if (state.userCompanies.includes(company.id)) {
        showToast("Already added", `${company.name} is already in your workspace.`, "ℹ️");
        return;
    }

    state.userCompanies.push(company.id);
    state.activeCompanyId = company.id;

    saveState();
    renderAll();
    closeAddCompanyModal();

    showToast("Company added", `${company.name} added to workspace.`, "➕");
    addActivity("Company added", company.name);

    switchView("research");
}

/* ==========================================================
   Patch Existing Init Continuation
========================================================== */

const previousInitializeAppPart7 = initializeApp;

initializeApp = function initializeAppPart7() {
    cacheDom();
    cacheCompanyDom();
    cacheResearchDom();
    cacheCompareWorkspaceDom();
    cacheMoneyBotNotesDom();
    cacheSearchCompanyDom();

    applyTheme(state.theme);
    bindGlobalEvents();

    renderAll();

    addActivity("MoneyWise opened", "Workspace loaded successfully.");
};
/* ==========================================================
   MoneyWise V8
   script.js
   Part 8/9
   Settings • Import/Export • Reset • Keyboard Shortcuts
========================================================== */

/* ==========================================================
   Settings DOM
========================================================== */

function cacheSettingsDom() {

    dom.exportWorkspaceButton =
        document.getElementById("exportWorkspaceButton");

    dom.importWorkspaceButton =
        document.getElementById("importWorkspaceButton");

    dom.importWorkspaceInput =
        document.getElementById("importWorkspaceInput");

    dom.resetWorkspaceButton =
        document.getElementById("resetWorkspaceButton");

}

/* ==========================================================
   Bind Settings Events
========================================================== */

function bindSettingsEvents() {

    dom.exportWorkspaceButton?.addEventListener(
        "click",
        exportWorkspace
    );

    dom.importWorkspaceButton?.addEventListener(
        "click",
        () => dom.importWorkspaceInput?.click()
    );

    dom.importWorkspaceInput?.addEventListener(
        "change",
        importWorkspace
    );

    dom.resetWorkspaceButton?.addEventListener(
        "click",
        resetWorkspace
    );

}

/* ==========================================================
   Export Workspace
========================================================== */

function exportWorkspace(){

    const exportData = {

        exportedAt:new Date().toISOString(),

        version:"MoneyWise V8",

        workspace:state

    };

    const blob = new Blob(

        [
            JSON.stringify(exportData,null,2)
        ],

        {
            type:"application/json"
        }

    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "MoneyWise_Workspace.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    showToast(
        "Workspace Exported",
        "MoneyWise workspace downloaded.",
        "📦"
    );

    addActivity(
        "Workspace Exported",
        "Workspace exported as JSON."
    );

}

/* ==========================================================
   Import Workspace
========================================================== */

function importWorkspace(event){

    const file = event.target.files[0];

    if(!file){

        return;

    }

    const reader = new FileReader();

    reader.onload = function(){

        try{

            const imported =
                JSON.parse(reader.result);

            if(!imported.workspace){

                throw new Error();

            }

            state = {

                ...structuredClone(defaultState),

                ...imported.workspace

            };

            saveState();

            renderAll();

            showToast(

                "Workspace Imported",

                "MoneyWise workspace restored.",

                "📥"

            );

            addActivity(

                "Workspace Imported",

                file.name

            );

        }

        catch{

            showToast(

                "Import Failed",

                "Invalid workspace file.",

                "⚠️"

            );

        }

    };

    reader.readAsText(file);

}

/* ==========================================================
   Reset Workspace
========================================================== */

function resetWorkspace(){

    const confirmed = window.confirm(

        "Reset MoneyWise?\n\nThis removes all local notes, favorites, history and settings."

    );

    if(!confirmed){

        return;

    }

    localStorage.removeItem(STORAGE_KEY);

    state = structuredClone(defaultState);

    renderAll();

    showToast(

        "Workspace Reset",

        "MoneyWise has been reset.",

        "🗑️"

    );

    addActivity(

        "Workspace Reset",

        "Local workspace cleared."

    );

}

/* ==========================================================
   Keyboard Shortcuts
========================================================== */

document.addEventListener(

    "keydown",

    function(event){

        /* ---------- Ctrl + K ---------- */

        if(event.ctrlKey && event.key.toLowerCase()==="k"){

            event.preventDefault();

            openSearchOverlay();

            return;

        }

        /* ---------- Ctrl + B ---------- */

        if(event.ctrlKey && event.key.toLowerCase()==="b"){

            event.preventDefault();

            toggleSidebar();

            return;

        }

        /* ---------- Ctrl + D ---------- */

        if(event.ctrlKey && event.key.toLowerCase()==="d"){

            event.preventDefault();

            toggleTheme();

            return;

        }

        /* ---------- Escape ---------- */

        if(event.key==="Escape"){

            closeSearchOverlay();

            closeAddCompanyModal();

        }

    }

);

/* ==========================================================
   Auto Save
========================================================== */

window.addEventListener(

    "beforeunload",

    saveState

);

/* ==========================================================
   Patch Init
========================================================== */

const previousInitializeAppPart8 =
    initializeApp;

initializeApp = function(){

    cacheDom();

    cacheCompanyDom();

    cacheResearchDom();

    cacheCompareWorkspaceDom();

    cacheMoneyBotNotesDom();

    cacheSearchCompanyDom();

    cacheSettingsDom();

    applyTheme(state.theme);

    bindGlobalEvents();

    bindSettingsEvents();

    renderAll();

};
/* ==========================================================
   MoneyWise V8
   script.js
   Part 9/9
   Final Fixes • Loading Screen • Resize Handling • Startup Polish
========================================================== */

/* ==========================================================
   Final DOM Cache Fixes
========================================================== */

function cacheFinalDom() {
    dom.loadingScreen = document.getElementById("loadingScreen");

    dom.backupWorkspaceButton = document.getElementById("backupWorkspaceButton");
    dom.restoreWorkspaceButton = document.getElementById("restoreWorkspaceButton");

    if (!dom.exportWorkspaceButton && dom.backupWorkspaceButton) {
        dom.exportWorkspaceButton = dom.backupWorkspaceButton;
    }

    if (!dom.importWorkspaceButton && dom.restoreWorkspaceButton) {
        dom.importWorkspaceButton = dom.restoreWorkspaceButton;
    }

    if (!dom.importWorkspaceInput) {
        dom.importWorkspaceInput = document.createElement("input");
        dom.importWorkspaceInput.type = "file";
        dom.importWorkspaceInput.accept = "application/json";
        dom.importWorkspaceInput.className = "hidden";
        document.body.appendChild(dom.importWorkspaceInput);
    }
}

/* ==========================================================
   Loading Screen
========================================================== */

function showLoadingScreen() {
    dom.loadingScreen?.classList.remove("hidden");
}

function hideLoadingScreen() {
    window.setTimeout(() => {
        dom.loadingScreen?.classList.add("hidden");
    }, 450);
}

/* ==========================================================
   Startup Checks
========================================================== */

function ensureValidState() {
    state.userCompanies = state.userCompanies.filter((id) => getCompanyById(id));
    state.favorites = state.favorites.filter((id) => getCompanyById(id));
    state.pinned = state.pinned.filter((id) => getCompanyById(id));
    state.compare = state.compare.filter((id) => getCompanyById(id));
    state.history = state.history.filter((id) => getCompanyById(id));

    if (state.activeCompanyId && !getCompanyById(state.activeCompanyId)) {
        state.activeCompanyId = null;
    }

    if (!state.activeView) {
        state.activeView = "dashboard";
    }

    if (!state.activeResearchTab) {
        state.activeResearchTab = "overview";
    }

    saveState();
}

/* ==========================================================
   Resize Handling
========================================================== */

function handleResize() {
    if (!dom.app) return;

    const isDesktop = window.matchMedia("(min-width: 901px)").matches;

    if (isDesktop) {
        dom.app.classList.remove("sidebar-open");
    }
}

window.addEventListener("resize", handleResize);

/* ==========================================================
   Final Render Function
========================================================== */

renderAll = function finalRenderAll() {
    renderCounts();
    renderActivity();
    renderCompanies();
    renderActiveCompany();
    renderResearch();
    renderCompare();
    renderWorkspace();
    renderMoneyBot();
    renderNotes();

    switchView(state.activeView || "dashboard");
};

/* ==========================================================
   Final Init Function
========================================================== */

initializeApp = function finalInitializeApp() {
    cacheDom();
    cacheCompanyDom();
    cacheResearchDom();
    cacheCompareWorkspaceDom();
    cacheMoneyBotNotesDom();
    cacheSearchCompanyDom();
    cacheSettingsDom();
    cacheFinalDom();

    showLoadingScreen();

    ensureValidState();

    applyTheme(state.theme);

    bindGlobalEvents();
    bindSettingsEvents();

    renderAll();
    handleResize();

    hideLoadingScreen();

    showToast(
        "MoneyWise ready",
        "Your research workspace is ready.",
        "🚀"
    );
};

/* ==========================================================
   Start App
========================================================== */

document.addEventListener("DOMContentLoaded", initializeApp);