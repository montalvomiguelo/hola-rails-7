import { Controller } from "@hotwired/stimulus"
import EmblaCarousel from 'embla-carousel'

export default class extends Controller {
  connect() {
    const emblaNode = this.element
    const options = { loop: false }

    const emblaApi = EmblaCarousel(emblaNode, options)

    console.log(emblaApi.slideNodes()) // Access API
  }
}
