# System Design

---

>"What does it mean to be an **Question** application?"

## Functional Requiremnents

### Single Feature 

- User can Submit a Question.
- User see a list of submitted Questions.
- Answered Questions can be Deleted.


### Out of Scope

- Answers
- Resolved vs Deleted
- User Authentication
- UI Enhancements (D&D , Darkmode, etc.)
- Voting/Ranking
- Updating a Question
- Categories/Subs
- Coding Snippets

## Non-Functional Requirements

- Availability. If a User opens the app they always see something.
- Reliability/Redundancy: Questions are never lost.
- Latency: Response times < 200m/s.

## Database Design (Models + Schema)

>"What does it mean to be a Question?"
- Content
- Name (of Asker)
>"How should we store the Question"

### PostgreSQL(Relational, SQL)
|Question | Data Type || ------- | ------- || id | Int || content | String | name | String |

### MongoDB (Non-Relational. NoSQL)

    {
        1: {
            _id: 1,
            content: '',
            name: '',
        },
        2: {
            _id: 2,
            content: '',
            name: '',
        },
    }

##  Capacity & Constraints

> "How much storage space do we need?"

_id: 4 bytes
content: 250 bytes
name: 20 bytes

Total: 274 bytes
115 Askers * 274 bytes * 2 Questions * 12 Months
Grand Total: 756,240 bytes (0.75 MB)
