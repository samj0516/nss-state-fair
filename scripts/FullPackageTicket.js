
const eventHub = document.querySelector("#state-fair")
const contentTargets = document.getElementsByClassName('people')
// console.log(contentTargets)

console.log(contentTargets)
export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        for(const contentTarget of contentTargets){
        contentTarget.innerHTML += `<div class="person bigSpender"></div>`
    }
    })
}