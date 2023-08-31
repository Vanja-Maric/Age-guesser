/**
 * The my-age-guesser-message web component module.
 *
 * @author Vanja Maric <vm222hx@student.lnu.se>
 * @version 1.0.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style> 

</style>
<div id="container">
<p id=message></p>
</div>
`

customElements.define('my-age-guesser-message',
  /**
   * Represents a my-age-guesser-message element.
   */
  class extends HTMLElement {
    /**
     * The div element.
     * Container for the message.
     *
     * @type {HTMLDivElement}
     */
    #container

    /**
     * The entered name.
     */
    #name

    /**
     * The p element.
     * Message.
     *
     * @type {HTMLElement}
     */
    #message

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#container = this.shadowRoot.querySelector('#container')
      this.#message = this.shadowRoot.querySelector('#message')
    }

    /**
     * Attributes to monitor for changes.
     *
     * @returns {string[]} A string array of attributes to monitor.
     */
    static get observedAttributes () {
      return ['name']
    }

    /**
     * Called when observed attribute(s) changes.
     *
     * @param {string} name - The attribute's name.
     * @param {*} oldValue - The old value.
     * @param {*} newValue - The new value.
     */
    attributeChangedCallback (name, oldValue, newValue) {
      if (name === 'name' && oldValue !== newValue) {
        this.#name = newValue
      }
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      this.#makeMessage()
    }

    /**
     * Fetches age prediction and
     * makes message to user with predicted age.
     */
    async #makeMessage () {
      const response = await fetch(`https://api.agify.io?name=${this.#name}`)
      const data = await response.json()
      this.#message.innerText = `Your age is ${data.age}`
    }
  }
)
