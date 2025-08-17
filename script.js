document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const navList = document.querySelector(".nav-list")

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      navList.classList.toggle("active")
    })
  }

  // Horizontal scrolling functionality
  const scrollContainers = document.querySelectorAll(".scroll-container")
  const scrollHintLefts = document.querySelectorAll(".scroll-hint-left")
  const scrollHintRights = document.querySelectorAll(".scroll-hint-right")

  // Set up each scroll container
  scrollContainers.forEach((container, index) => {
    const content = container.querySelector(".scrollable-content")
    const leftHint = scrollHintLefts[index]
    const rightHint = scrollHintRights[index]

    // Calculate the scroll amount (approximately 4 cards)
    const scrollAmount = 880 // 4 cards * (200px width + 20px gap)

    if (leftHint) {
      leftHint.addEventListener("click", () => {
        // Get current scroll position
        const currentScroll = container.scrollLeft

        // If at the beginning, scroll to the end
        if (currentScroll <= 0) {
          container.scrollTo({
            left: content.scrollWidth,
            behavior: "smooth",
          })
        } else {
          // Otherwise scroll left by the scroll amount
          container.scrollTo({
            left: currentScroll - scrollAmount,
            behavior: "smooth",
          })
        }
      })
    }

    if (rightHint) {
      rightHint.addEventListener("click", () => {
        // Get current scroll position and max scroll
        const currentScroll = container.scrollLeft
        const maxScroll = content.scrollWidth - container.clientWidth

        // If at the end, scroll to the beginning
        if (currentScroll >= maxScroll - 10) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          })
        } else {
          // Otherwise scroll right by the scroll amount
          container.scrollTo({
            left: currentScroll + scrollAmount,
            behavior: "smooth",
          })
        }
      })
    }
  })

  // Trailer video sound toggle
  const trailerBtns = document.querySelectorAll(".trailer-btn")

  trailerBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const video = this.closest(".trailer-container").querySelector("video")
      const icon = this.querySelector("i")

      if (video.muted) {
        video.muted = false
        icon.classList.remove("fa-volume-up")
        icon.classList.add("fa-volume-mute")
      } else {
        video.muted = true
        icon.classList.remove("fa-volume-mute")
        icon.classList.add("fa-volume-up")
      }
    })
  })

  // Genre filter tabs functionality
  const filterTabs = document.querySelectorAll(".filter-tab")

  if (filterTabs.length > 0) {
    filterTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove active class from all tabs
        filterTabs.forEach((t) => t.classList.remove("active"))

        // Add active class to clicked tab
        tab.classList.add("active")

        // Get the genre from data attribute
        const genre = tab.getAttribute("data-genre")

        // If "all" is selected, no need to scroll
        if (genre === "all") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        } else {
          // Find the corresponding section and scroll to it
          const section = document.getElementById(genre)
          if (section) {
            section.scrollIntoView({ behavior: "smooth" })
          }
        }
      })
    })
  }

  // Handle trailer sound toggle
  // Handle trailer sound toggle for YouTube iframes
const trailerSoundToggles = document.querySelectorAll(".trailer-sound-toggle")
trailerSoundToggles.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    // Find the iframe within the closest detail-backdrop
    const iframe = this.closest(".detail-backdrop").querySelector("iframe")
    const icon = this.querySelector("i")
    
    if (iframe) {
      // Get current iframe source
      let src = iframe.src
      
      // Check if currently muted
      const isMuted = src.includes("mute=1")
      
      if (isMuted) {
        // Unmute: replace mute=1 with mute=0
        src = src.replace("mute=1", "mute=0")
        icon.classList.remove("fa-volume-mute")
        icon.classList.add("fa-volume-up")
      } else {
        // Mute: replace mute=0 with mute=1
        src = src.replace("mute=0", "mute=1")
        icon.classList.remove("fa-volume-up")
        icon.classList.add("fa-volume-mute")
      }
      
      // Update iframe source
      iframe.src = src
    }
  })
})
  
  
})
