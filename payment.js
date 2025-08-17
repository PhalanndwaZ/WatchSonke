// Enhanced payment.js script to handle different products

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search)
const movieParam = urlParams.get("movie")
const seriesParam = urlParams.get("series")
const priceParam = urlParams.get("price")

// Set content details based on parameters
document.addEventListener("DOMContentLoaded", () => {
  let contentTitle = ""
  let contentType = ""
  let rentalPeriod = ""
  let price = 0

  if (movieParam) {
    contentType = "Movie"
    rentalPeriod = "3 days"

    // Set title based on movie parameter
    switch (movieParam) {
      case "tsotsi":
        contentTitle = "Tsotsi"
        break
      case "district-9":
        contentTitle = "District 9"
        break
      case "yesterday":
        contentTitle = "Yesterday"
        break
      case "mandela-long-walk-to-freedom":
        contentTitle = "Mandela: Long Walk to Freedom"
        break
      case "life-above-all":
        contentTitle = "Life, Above All"
        break
      case "skin":
        contentTitle = "Skin"
        break
      case "material":
        contentTitle = "Material"
        break
      case "white-wedding":
        contentTitle = "White Wedding"
        break
      case "keeping-up-with-the-kandasamys":
        contentTitle = "Keeping Up with the Kandasamys"
        break
      case "blitz-patrollie":
        contentTitle = "Blitz Patrollie"
        break
      case "chappie":
        contentTitle = "Chappie"
        break
      case "momentum":
        contentTitle = "Momentum"
        break
      case "invictus":
        contentTitle = "Invictus"
        break
      case "escape-from-pretoria":
        contentTitle = "Escape from Pretoria"
        break
      default:
        contentTitle = movieParam.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    }
  } else if (seriesParam) {
    contentType = "Series"
    rentalPeriod = "1 week"

    // Set title based on series parameter
    switch (seriesParam) {
      case "queen-sono":
        contentTitle = "Queen Sono"
        break
      case "blood-and-water":
        contentTitle = "Blood & Water"
        break
      case "shadow":
        contentTitle = "Shadow"
        break
      case "trackers":
        contentTitle = "Trackers"
        break
      case "savage-beauty":
        contentTitle = "Savage Beauty"
        break
      case "reyka":
        contentTitle = "Reyka"
        break
      case "shaka-ilembe":
        contentTitle = "Shaka Ilembe"
        break
      case "diepe-waters":
        contentTitle = "Diepe Waters"
        break
      case "how-to-ruin-christmas":
        contentTitle = "How to Ruin Christmas"
        break
      case "talis-wedding-diary":
        contentTitle = "Tali's Wedding Diary"
        break
      case "seriously-single":
        contentTitle = "Seriously Single"
        break
      case "family-secrets":
        contentTitle = "Family Secrets"
        break
      case "tripping-with-skhumba":
        contentTitle = "Tripping With Skhumba"
        break
      case "dead-places":
        contentTitle = "Dead Places"
        break
      default:
        contentTitle = seriesParam.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    }
  }

  // Set price from parameter or default
  price = priceParam ? Number.parseInt(priceParam) : 25

  // Update the DOM
  document.getElementById("content-title").textContent = contentTitle
  document.getElementById("content-type").textContent = contentType
  document.getElementById("rental-period").textContent = rentalPeriod
  document.getElementById("rental-price").textContent = `R${price}`
  document.getElementById("total-price").textContent = `R${price}`

  // Update page title
  document.title = `Rent ${contentTitle} - Watch Sonke`

  // Handle payment method selection
  const paymentMethods = document.querySelectorAll(".payment-method")
  paymentMethods.forEach((method) => {
    method.addEventListener("click", function () {
      // Remove active class from all methods
      paymentMethods.forEach((m) => m.classList.remove("active"))
      // Add active class to clicked method
      this.classList.add("active")
    })
  })

  // Handle form submission
  document.getElementById("payment-form").addEventListener("submit", (e) => {
    e.preventDefault()
    alert(`Payment successful! You can now enjoy ${contentTitle}.`)
    window.location.href = "index.html"
  })
})
