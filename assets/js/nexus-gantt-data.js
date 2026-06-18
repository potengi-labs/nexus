const today = new Date().setHours(0, 0, 0, 0);

function getDate(offset, unit) {
    return webix.Date.add(today, offset, unit, true);
}

const tasks = [
    {
        "id": "proj_1",
        "type": "project",
        "text": "Platform Revamp",
        "start_date": getDate(-2, "week"),
        "planned_start": getDate(-2, "week"),
        "end_date": getDate(7, "month"),
        "planned_end": getDate(7, "month"),
        "duration": 228,
        "planned_duration": 228,
        "progress": 2,
        "parent": 0,
        "details": "High-level project for redesign, implementation, and rollout of a core platform experience",
        "open": false
    },
    {
        "id": "p1_1",
        "type": "task",
        "text": "Discovery",
        "start_date": getDate(-2, "week"),
        "planned_start": getDate(-2, "week"),
        "end_date": getDate(13, "day"),
        "planned_end": getDate(13, "day"),
        "progress": 52,
        "parent": "proj_1",
        "duration": 11,
        "planned_duration": 11,
        "details": "Collect stakeholder inputs, document goals, and clarify scope",
        "open": false
    },
    {
        "id": "p1_2",
        "type": "task",
        "text": "UX flows and wireframes",
        "start_date": getDate(13, "day"),
        "planned_start": getDate(13, "day"),
        "end_date": getDate(66, "day"),
        "planned_end": getDate(66, "day"),
        "progress": 0,
        "parent": "proj_1",
        "duration": 53,
        "planned_duration":53,
        "details": "Design team prepares user flows, low-fi screens, and interaction notes",
        "open": false
    },
    {
        "id": "p1_3",
        "type": "task",
        "text": "Core prototyping",
        "start_date": getDate(6, "week"),
        "planned_start": getDate(6, "week"),
        "end_date": getDate(11, "week"),
        "planned_end": getDate(11, "week"),
        "progress": 0,
        "parent": "proj_1",
        "duration": 35,
        "planned_duration": 35,
        "details": "Development of the basic prototype",
        "open": false
    },
    {
        "id": "p1_4",
        "type": "milestone",
        "text": "Prototype ready",
        "start_date": getDate(11, "week"),
        "parent": "proj_1",
        "details": "Demonstration of core functionality to the stakeholders",
        "open": false
    },
    {
        "id": "p1_5",
        "type": "task",
        "text": "Frontend implementation",
        "start_date": getDate(11, "week"),
        "planned_start": getDate(11, "week"),
        "end_date": getDate(25, "week"),
        "planned_end": getDate(25, "week"),
        "progress": 0,
        "parent": "proj_1",
        "duration": 98,
        "planned_duration": 98,
        "details": "Implementation is split into multiple focused delivery windows",
        "open": false
    },
    {
        "id": "p1_6",
        "type": "task",
        "text": "Pefrormance optimization",
        "start_date": getDate(4, "month"),
        "planned_start": getDate(4, "month"),
        "end_date": getDate(25, "week"),
        "planned_end": getDate(25, "week"),
        "progress": 0,
        "parent": "proj_1",
        "duration": 53,
        "planned_duration": 53,
        "details": "Low-level optimizations",
        "open": false
    },
    {
        "id": "p1_7",
        "type": "task",
        "text": "Documentation",
        "start_date": getDate(22, "week"),
        "planned_start": getDate(22, "week"),
        "end_date": getDate(7, "month"),
        "planned_end": getDate(7, "month"),
        "progress": 0,
        "parent": "proj_1",
        "duration": 60,
        "planned_duration": 60,
        "details": "Writing technical documentation and API specs",
        "open": false
    },
    {
        "id": "p1_8",
        "type": "milestone",
        "text": "Beta release",
        "start_date": getDate(25, "week"),
        "parent": "proj_1",
        "details": "Feature-complete version ready for QA",
        "open": false
    },
    {
        "id": "p1_9",
        "type": "task",
        "text": "QA & stabilization",
        "start_date": getDate(25, "week"),
        "planned_start": getDate(25, "week"),
        "end_date": getDate(7, "month"),
        "planned_end": getDate(7, "month"),
        "progress": 0,
        "parent": "proj_1",
        "duration": 39,
        "planned_duration": 39,
        "details": "Regression checks, visual review, bug fixing, and release readiness",
        "open": false
    },
    {
        "id": "p1_10",
        "type": "milestone",
        "text": "Project launch",
        "start_date": getDate(7, "month"),
        "parent": "proj_1",
        "details": "Production deployment",
        "open": false
    },
    {
        "id": "proj_2",
        "type": "project",
        "text": "Design System Expansion",
        "start_date": getDate(-16, "day"),
        "planned_start": getDate(-16, "day"),
        "end_date": getDate(24, "week"),
        "planned_end": getDate(24, "week"),
        "progress": 3,
        "parent": 0,
        "duration": 184,
        "planned_duration": 184,
        "details": "Extending reusable UI assets and documentation",
        "open": true
    },
    {
        "id": "p2_1",
        "type": "task",
        "text": "Audit existing components",
        "start_date": getDate(-16, "day"),
        "planned_start": getDate(-16, "day"),
        "end_date": getDate(5, "week"),
        "planned_end": getDate(5, "week"),
        "progress": 28,
        "parent": "proj_2",
        "duration": 51,
        "planned_duration": 51,
        "details": "Review current library components, classify inconsistencies, and identify gaps",
        "open": false
    },
    {
        "id": "p2_2",
        "type": "task",
        "text": "UI Design revision",
        "start_date": getDate(2, "week"),
        "planned_start": getDate(2, "week"),
        "end_date": getDate(50, "day"),
        "planned_end": getDate(50, "day"),
        "progress": 0,
        "parent": "proj_2",
        "duration": 36,
        "planned_duration": 36,
        "details": "Creating overall visual style for components and low-fidelity layouts",
        "open": false
    },
    {
        "id": "p2_3",
        "type": "milestone",
        "text": "Design sign-off",
        "start_date": getDate(50, "day"),
        "parent": "proj_2",
        "details": "Approval of the visual direction by the product team",
        "open": false
    },
    {
        "id": "p2_4",
        "type": "split",
        "text": "Develop component batches",
        "start_date": getDate(50, "day"),
        "planned_start": getDate(50, "day"),
        "end_date": getDate(24, "week"),
        "planned_end": getDate(24, "week"),
        "progress": 0,
        "parent": "proj_2",
        "duration": 118,
        "planned_duration": 118,
        "details": "Deliver new components in batches with review pauses in between",
        "open": false,
    },
    {
        "id": "p2_4_sub1",
        "type": "task",
        "text": "Core components",
        "start_date": getDate(50, "day"),
        "planned_start": getDate(50, "day"),
        "end_date": getDate(13, "week"),
        "planned_end": getDate(13, "week"),
        "progress": 0,
        "parent": "p2_4",
        "duration": 41,
        "planned_duration": 41,
        "details": "Buttons, inputs, tags, badges, and basic layouts",
        "open": false,
    },
    {
        "id": "p2_4_sub2",
        "type": "task",
        "text": "Form patterns",
        "start_date": getDate(18, "week"),
        "planned_start": getDate(18, "week"),
        "end_date": getDate(24, "week"),
        "planned_end": getDate(24, "week"),
        "progress": 0,
        "parent": "p2_4",
        "duration": 42,
        "planned_duration": 42,
        "details": "Selects, checkboxes, radios, validation states, and helper text",
        "open": false,
    },
    {
        "id": "p2_5",
        "type": "task",
        "text": "Write usage guidelines",
        "start_date": getDate(12, "week"),
        "planned_start": getDate(12, "week"),
        "end_date": getDate(24, "week"),
        "planned_end": getDate(24, "week"),
        "progress": 0,
        "parent": "proj_2",
        "duration": 84,
        "planned_duration": 84,
        "details": "Documentation for accessibility, usage patterns, do/don't examples, and naming",
        "open": false
    },
    {
        "id": "p2_6",
        "type": "task",
        "text": "Accessibility testing",
        "start_date": getDate(18, "week"),
        "planned_start": getDate(18, "week"),
        "end_date": getDate(24, "week"),
        "planned_end": getDate(24, "week"),
        "progress": 0,
        "parent": "proj_2",
        "duration": 42,
        "planned_duration": 42,
        "details": "Ensuring WCAG 2.1 AA compliance",
        "open": false
    },
    {
        "id": "p2_7",
        "type": "milestone",
        "text": "Library v2.0",
        "start_date": getDate(24, "week"),
        "parent": "proj_2",
        "details": "Official release of the design system",
        "open": false
    },
    {
        "id": "proj_3",
        "type": "project",
        "text": "Knowledge Base Migration",
        "start_date": getDate(-1, "day"),
        "planned_start": getDate(-1, "day"),
        "end_date": getDate(14, "week"),
        "planned_end": getDate(14, "week"),
        "progress": 1,
        "parent": 0,
        "duration": 99,
        "planned_duration": 99,
        "details": "Migration of internal docs, editorial cleanup, and navigation restructuring",
        "open": true
    },
    {
        "id": "p3_1",
        "type": "task",
        "text": "Content inventory",
        "start_date": getDate(-1, "day"),
        "planned_start": getDate(-1, "day"),
        "end_date": getDate(5, "week"),
        "planned_end": getDate(5, "week"),
        "progress": 3,
        "parent": "proj_3",
        "duration": 36,
        "planned_duration": 36,
        "details": "Map existing documentation, duplicates, stale content",
        "open": false
    },
    {
        "id": "p3_2",
        "type": "task",
        "text": "Architecture redesign",
        "start_date": getDate(2, "week"),
        "planned_start": getDate(2, "week"),
        "end_date": getDate(8, "week"),
        "planned_end": getDate(8, "week"),
        "progress": 0,
        "parent": "proj_3",
        "duration": 42,
        "planned_duration": 42,
        "details": "Rebuild sections hierarchy, tagging model, and navigation logic",
        "open": false
    },
    {
        "id": "p3_3",
        "type": "task",
        "text": "Articles migration",
        "start_date": getDate(3, "week"),
        "planned_start": getDate(3, "week"),
        "end_date": getDate(14, "week"),
        "planned_end": getDate(14, "week"),
        "progress": 0,
        "parent": "proj_3",
        "duration": 77,
        "planned_duration": 77,
        "details": "Migration of existing articles",
        "open": false
    },
    {
        "id": "p3_4",
        "type": "task",
        "text": "Launch prep",
        "start_date": getDate(10, "week"),
        "planned_start": getDate(10, "week"),
        "end_date": getDate(14, "week"),
        "planned_end": getDate(14, "week"),
        "progress": 0,
        "parent": "proj_3",
        "duration": 28,
        "planned_duration": 28,
        "details": "Final proofreading, redirects validation, and launch checklist",
        "open": false
    },
    {
        "id": "p3_5",
        "type": "milestone",
        "text": "Publication ready",
        "start_date": getDate(14, "week"),
        "parent": "proj_3",
        "details": "Final approval and migration to production site",
        "open": 0
    }
]

const resources = [
    {
        "name": "John",
        "category_id": "2",
        "avatar": "https://docs.webix.com/usermanager-backend/users/101/avatar/092352563.jpg",
        "id": "1"
    },
    {
        "name": "Mike",
        "category_id": "2",
        "id": "2"
    },
    {
        "name": "Anna Meyer",
        "category_id": "3",
        "avatar": "https://docs.webix.com/usermanager-backend/users/98/avatar/909471384.jpg",
        "id": "3"
    },
    {
        "name": "Alexander Thompson",
        "category_id": "2",
        "avatar": "https://docs.webix.com/usermanager-backend/users/102/avatar/898151818.jpg",
        "id": "4"
    },
    {
        "name": "Stephan",
        "category_id": "1",
        "id": "5"
    },
    {
        "name": "Leonard",
        "category_id": "3",
        "id": "6"
    },
    {
        "name": "Marie",
        "category_id": "3",
        "id": "7"
    },
    {
        "name": "Mark",
        "category_id": "3",
        "id": "8"
    },
]

const categories = [
    {
        "name": "Tech writer",
        "unit": "hour",
        "id": "1"
    },
    {
        "name": "Development",
        "unit": "hour",
        "id": "2"
    },
    {
        "name": "Design",
        "unit": "hour",
        "id": "3"
    }
]

const assignments = [
    {
        "task": "p1_2",
        "resource": "3",
        "value": 2,
        "id": "1"
    },
    {
        "task": "p1_2",
        "resource": "7",
        "value": 4,
        "id": "2"
    },
    {
        "task": "p1_2",
        "resource": "6",
        "value": 4,
        "id": "3"
    },
    {
        "task": "p2_1",
        "resource": "7",
        "value": 1,
        "id": "4"
    },
    {
        "task": "p2_4_sub1",
        "resource": "1",
        "value": 4,
        "id": "5"
    },
    {
        "task": "p2_4_sub2",
        "resource": "1",
        "value": 4,
        "id": "6"
    },
    {
        "task": "p2_5",
        "resource": "5",
        "value": 2,
        "id": "7"
    },
    {
        "task": "p3_3",
        "resource": "5",
        "value": 2,
        "id": "8"
    },
    {
        "task": "p2_6",
        "resource": "2",
        "value": 2,
        "id": "9"
    },
    {
        "task": "p2_6",
        "resource": "1",
        "value": 1,
        "id": "10"
    },
]

const links = [
    {
        "id": "1",
        "source": "p1_1",
        "target": "p1_2",
        "type": 0
    },
    {
        "id": "2",
        "source": "p1_3",
        "target": "p1_4",
        "type": 0
    },
    {
        "id": "3",
        "source": "p1_4",
        "target": "p1_5",
        "type": 0,
    },
    {
        "id": "4",
        "source": "p1_9",
        "target": "p1_10",
        "type": 0,
    },
    {
        "id": "5",
        "source": "p1_7",
        "target": "p1_10",
        "type": 0,
    },
    {
        "id": "6",
        "source": "p2_3",
        "target": "p2_4_sub1",
        "type": 0,
    },
    {
        "id": "7",
        "source": "p2_4_sub2",
        "target": "p2_7",
        "type": 0,
    },
    {
        "id": "8",
        "source": "p2_5",
        "target": "p2_7",
        "type": 0
    },
    {
        "id": "9",
        "source": "p2_6",
        "target": "p2_7",
        "type": 0,
    },
    {
        "id": "10",
        "source": "p3_3",
        "target": "p3_5",
        "type": 0,
    },
    {
        "id": "11",
        "source": "p3_4",
        "target": "p3_5",
        "type": 0,
    },
    {
        "id": "12",
        "source": "p1_5",
        "target": "p1_6",
        "type": 1,
    },
    {
        "id": "13",
        "source": "p1_5",
        "target": "p1_6",
        "type": 2,
    },
    {
        "id": "11",
        "source": "p3_4",
        "target": "p3_5",
        "type": 0,
    }
]

