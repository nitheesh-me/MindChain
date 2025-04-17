# Requirements Engineering Document for MindChain v0

## 1. Introduction

This document specifies the requirements for the development of **MindChain**, a platform designed to connect help-seekers within the IIIT Hyderabad community with experts. The system will consist of a robust backend and a responsive frontend, ensuring maintainability, scalability, and a seamless user experience. The requirements outlined here are specific, measurable, and actionable to guide the development process effectively.

System Requirements:

| Type | Description | Stat |
|------|-------------|------|
| MAU | Monthly Active Users | 50M |
| DAU | Daily Active Users | 1M |
| Max. Concurrent Users | Based on geo-location and friend network and expert network | 1000 |

| Type | Description | Stat | comment |
| -- | - | - | - |
| Max. Matchable Personas | Based on geo-location and friend network and expert network | 2.1M; 200,000; 60,000; 27,000; 12,000; 1,400;</br>(top 1, 100, 500, 1000, 2000, 5000) | So 1-2s per query matching |
| Expected Questions | Number of questions per month | 1.5M | 50% of MAU |

Persona information:
- **Help-Seeker**: A user seeking assistance or information.
  - Question*
  - Domain*
  - Urgency=default
  - Context
  - Location (auto)
  - Network (auto)
  - Gender (auto)
  - Age (auto)
  - Previously asked questions with answers
- **Expert**: A user providing assistance or information.
  - Knowledge domains
  - Projects with dates
  - Skills
  - Location (auto)
  - Network (auto)
  - Gender (auto)
  - Age (auto)
  - Active?
  - Previously answered questions

Indexes (Active (groups/cohorts), QuadTree for location(geohash)), columnar table with (shard;partition key + sort key)(cassandra or DynamoDB), and graph database (neo4j) for network and vector search (faiss or pinecone) for matching.

Other resources:
- [Latency Numbers Every Programmer Should Know](https://gist.github.com/jboner/2841832)
- 


Other Help-Seeking Platforms:
- **Stack Overflow**: A Q&A platform for developers.
- **Reddit**: A social news aggregation and discussion website.
- **Discord**: A VoIP, instant messaging, and digital distribution platform.
- **Slack**: A collaboration hub that connects work with the people you work with.
- **Telegram**: A cloud-based instant messaging, VoIP, and VoIP service.
- **WhatsApp**: A freeware, cross-platform messaging and Voice over IP (VoIP) service.
- **Google Groups**: A service from Google that provides discussion groups for people sharing common interests.
- **Facebook Groups**: A feature of Facebook that allows users to create and join groups based on shared interests.
- **LinkedIn Groups**: A feature of LinkedIn that allows users to create and join groups based on professional interests.
- **Quora**: A Q&A platform where users can ask questions and get answers from the community.
- **GitHub Discussions**: A feature of GitHub that allows users to have discussions about projects and issues.
- **GitLab Issues**: A feature of GitLab that allows users to track issues and bugs in projects.
- **Jira**: A project management tool that allows users to track issues and bugs in projects.
- **Trello**: A project management tool that allows users to organize tasks and projects using boards and cards.

---

## 2. Functional Requirements

### 2.1 Backend Requirements
1. **Query Processing**  
    - Validate and parse user queries with a success rate of 99% for valid inputs.  
    - Extract context and attributes such as domain and urgency within 200ms.

2. **Matching Engine**  
    - Implement rule-based and ML-driven algorithms to rank responders with an accuracy of at least 85%.  
    - Use caching to reduce response time for frequent query patterns to under 100ms.

3. **Notification Management**  
    - Dispatch notifications in incremental phases with a maximum delay of 1 second between phases.  
    - Track responses and escalate to the next phase if no response is received within 5 minutes.

4. **Real-Time Communication**  
    - Integrate with external chat APIs to create chat rooms within 5 seconds of initiation.  
    - Ensure 99.9% uptime for chat services.

5. **Data Management**  
    - Store structured data (SQL) and unstructured data (NoSQL) with a retrieval time of under 300ms.  
    - Implement caching mechanisms to improve query performance by at least 30%.

6. **API Security**  
    - Use JWT for authentication with token expiration set to 24 hours.  
    - Enforce input validation and sanitization for all API endpoints to prevent injection attacks.

### 2.2 Frontend Requirements
1. **User Interface**  
    - Provide a responsive UI with a maximum load time of 2 seconds on a 3G network.  
    - Support both a browser extension and a standalone web app with consistent functionality.

2. **Real-Time Updates**  
    - Use WebSockets to deliver live query status and notifications with a latency of under 500ms.

3. **User Interaction**  
    - Enable smooth workflows with contextual help and tooltips, ensuring task completion within 3 clicks.  

4. **Accessibility**  
    - Follow ARIA standards and semantic web practices to achieve WCAG 2.1 AA compliance.  
    - Ensure focus states with `focus:outline-none focus:ring-2` for all interactive elements.

5. **State Management**  
    - Use libraries like Redux or Context API to manage application state with a maximum state update delay of 100ms.

---

## 3. Non-Functional Requirements

1. **Performance**  
    - Ensure chat room creation within 5 seconds for 95% of requests.  
    - Optimize API response times to under 300ms for 90% of requests.

2. **Scalability**  
    - Design modular components to handle a 10x increase in user load without significant performance degradation.

3. **Maintainability**  
    - Use component-based architecture to ensure that 80% of components are reusable across the application.

4. **Security**  
    - Protect data with AES-256 encryption for sensitive information.  
    - Secure API endpoints with rate limiting to prevent abuse.

5. **Usability**  
    - Ensure the UI is intuitive, with a System Usability Scale (SUS) score of at least 80.  
    - Provide consistent user experience across devices with responsive design.

---

## 4. Design Guidelines

### 4.1 Color Palette
- **Light Mode:**  
  - Primary: `#4F46E5`  
  - Secondary: `#9333EA`  
  - Background: `#F9FAFB`  
  - Text: `#1F2937`  

- **Dark Mode:**  
  - Primary: `#6366F1`  
  - Secondary: `#A855F7`  
  - Background: `#111827`  
  - Text: `#F3F4F6`  

### 4.2 Typography
- **Fonts:**  
  - Headings: `'Inter', sans-serif`  
  - Body: `'Roboto', sans-serif`  
  - Code: `'Fira Code', monospace`  

- **Sizes:**  
  - Headings: `text-4xl` (H1), `text-3xl` (H2)  
  - Body: `text-base`  

### 4.3 Spacing & Sizing
- **Padding:**  
  - Cards: `p-6`  
  - Sections: `py-12 px-8`  

- **Margins:**  
  - Between Cards: `mb-8`  
  - Between Sections: `mt-12`  

### 4.4 Responsive Design
- **Breakpoints:**  
  - Mobile: `sm:`  
  - Tablet: `md:`  
  - Desktop: `lg:`  

---

## 5. Final Notes

This document serves as a comprehensive and measurable guide for the development of MindChain v0. Developers are required to adhere to the outlined requirements and design principles to ensure a high-quality, user-centric platform. Regular reviews and testing should be conducted to ensure compliance with these specifications.

Happy coding!  