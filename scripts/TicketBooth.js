const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", event => {
    if (event.target.id === "rideTicket"){
        const customEvent = new CustomEvent("rideTicketPurchased",{

        })
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "foodTicket"){
        const customEvent = new CustomEvent("foodTicketPurchased",{

        })
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "gameTicket"){
        const customEvent = new CustomEvent("gameTicketPurchased",{

        })
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "sideshowTicket"){
        const customEvent = new CustomEvent("sideshowTicketPurchased",{

        })
        eventHub.dispatchEvent(customEvent)
    }
})


eventHub.addEventListener("click", event => {
    if (event.target.id === "fullPackageTicket"){
        const customEvent = new CustomEvent("fullPackageTicketPurchased", event)
        eventHub.dispatchEvent(customEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

