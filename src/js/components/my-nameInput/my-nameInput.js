/**
 * The my-nameInput web component module.
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
<input type="text" placeholder="Name"/> 
<input type="submit" id="set" value="Set" />
</form>
`

customElements.define('my-nameInput',
  /**
   * Represents a my-nameInput element.
   */
  class extends HTMLElement {
    /**
     * The form element.
     *
     * @type {HTMLFormElement}
     */
    #form
    
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
      this.#input.focus()
    }
  }
)