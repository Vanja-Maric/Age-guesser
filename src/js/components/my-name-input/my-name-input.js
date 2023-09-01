/**
 * The my-name-input web component module.
 *
 * @author Vanja Maric <vm222hx@student.lnu.se>
 * @version 1.0.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style> 
</style>
<form>
<input type="text" id="nameInput" placeholder="Name"/> 
<input type="submit" id="set" value="Set" />
</form>
`

customElements.define('my-name-input',
  /**
   * Represents a my-name-input element.
   */
  class extends HTMLElement {
    /**
     * The form element.
     *
     * @type {HTMLFormElement}
     */
    #form

    /**
     * The input element.
     *
     * @type {HTMLInputElement}
     */
    #nameInput

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      // Get the elements in the shadow root.
      this.#form = this.shadowRoot.querySelector('form')
      this.#nameInput = this.shadowRoot.getElementById('nameInput')

      // Event listeners
      this.#form.addEventListener('submit', (event) => this.#onSubmit(event))
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      this.focusInput()
    }

    /**
     * Focus input element.
     */
    focusInput () {
      this.#nameInput.focus()
    }

    /**
     * Handles submit event - dispatches event with nameInput value as a detail.
     *
     * @param {SubmitEvent} event - The submit event.
     */
    #onSubmit (event) {
      // Do not submit the form!
      event.preventDefault()
      this.dispatchEvent(new window.CustomEvent('submited', {
        detail: this.#nameInput.value,
        bubbles: true
      }))
    }
  }
)
// Hej Daniel,

// This part of code is very simmilar to a nickname
// component that I created for another course, but I
// code it from the beginnig and did not copie It. It
// is so simple component and it is hard to make it
// unike. I hope that that does not count as cheeting.

// Vanja
