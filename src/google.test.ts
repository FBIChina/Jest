import 'expect-puppeteer'

// describe('Google', () => {
//   beforeAll(async () => {
//     await page.goto('https://google.com')
//   })

//   it('should display "google" text on page', async () => {
//     await expect(page).toMatch('google')
//   })
// })

describe('266', () => {
    beforeAll(async () => {
      await page.goto('http://www.266.com/profit-invite')
    })
  
    it('should display modal', async (done) => {
        await expect(page).toClick('div.rule')
        await expect(page).toMatchElement('.rule-dialog')
        done() 
    })
  })
  