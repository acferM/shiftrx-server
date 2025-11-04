# ShiftRx Server

## Initial Setup

In order to setup this project, you must go through the following steps:

1. Clone this repository
2. Install dependencies with `npm install`
3. Add a .env file with the following content: `DATABASE_URL="file:./dev.db`
4. Run database migrations with `npx prisma migrate dev`
5. Seed your database with initial data with `npm run seed`

---

## Technical description

I tried to keep a environment similar to what is used in ShiftRx, and for that reason I decided to use Fastify as http communication framework
and prisma as the orm.
I also decided to use a DDD for this application, adding a great responsibility separation standard.

## Improvements for the future

- One thing that I would also add for sure is TDD, it's definetly a standard I like to add into my applications
- Add security settings like rate limiter
