/**
 * The my-age-guesser-app web component module.
 *
 * @author Vanja Maric <vm222hx@student.lnu.se>
 * @version 1..0
 */
import '../my-name-input'
import '../my-age-guesser-message'

// Define template.
const template = document.createElement('template')
template.innerHTML = `
  <style>
  </style>
  <div id="container">
  <my-age-guesser-message id="message" name="Konj"></my-age-guesser-message>
  <my-name-input id="nameInput"></my-name-input>
  </div>
`

customElements.define('my-age-guesser-app',
  /**
   * Represents a my-age-guesser-app element.
   */
  class extends HTMLElement {
    /**
     * The div element.
     * Container for the application.
     *
     * @type {HTMLDivElement}
     */
    #container

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
    }
  }
)
