import { PrismaClient } from "@generated/prisma/client.js"
import 'dotenv/config'

const prisma = new PrismaClient()

async function main() {
  await prisma.$transaction([
    prisma.user.createMany({
      data: [
        {
          email: 'johndoe@email.com',
          name: 'John Doe'
        },
        {
          email: 'promacfer@gmail.com',
          name: 'Matheus Acfer'
        },
        {
          email: 'mayra@shiftrx.io',
          name: 'Mayra Coronel'
        }
      ]
    }),
    prisma.shift.createMany({
      data: [
        {
          title: 'Pharmacy Manager',
          facilityName: 'Village Pharmacy',
          startsAt: '2025-11-04T08:00:00.000Z',
          endsAt: '2025-11-04T16:00:00.000Z',
          hourlyRateCents: 7500
        },
        {
          title: 'Drug Tester',
          facilityName: 'Village Pharmacy',
          startsAt: '2025-11-04T08:00:00.000Z',
          endsAt: '2025-11-04T16:00:00.000Z',
          hourlyRateCents: 9000
        },
        {
          title: 'Cashier',
          facilityName: 'Village Pharmacy',
          startsAt: '2025-11-05T08:00:00.000Z',
          endsAt: '2025-11-05T16:00:00.000Z',
          hourlyRateCents: 4275
        },
        {
          title: 'Drug Tester',
          facilityName: 'Village Pharmacy',
          startsAt: '2025-11-05T08:00:00.000Z',
          endsAt: '2025-11-05T16:00:00.000Z',
          hourlyRateCents: 9000
        }
      ]
    }),
  ])
}

main()
  .then(() => console.log('Seed completed'))
  .catch(e => {
    console.log('There was an error while seeding')
    console.log(e)
  })
