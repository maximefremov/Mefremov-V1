export default class HeaderParallax {

  constructor(parallaxEl, height) {
    this.$parallaxEl = $(parallaxEl)

    this._height = height
    this._scrollTop = 0

    this._transformPos = this._opacityRatio = null
  }

  transform(scrollTop) {
    this._scrollTop = scrollTop
    this._transformPos = 0 - (this._scrollTop * 0.6)
    this._opacityRatio = this._opacity(this._height)

    this.$parallaxEl.css({
      'opacity': this._opacityRatio,
      'transform': "translateY(" + this._transformPos + "px)"
    })
  }

  _opacity(height) {
    return 1 - (this._scrollTop / (height / 1.5))
  }

  remove() {
    this.$parallaxEl.removeAttr('style')
  }

  set height(height) {
    this._height = height
    this._opacityRatio = this._opacity(height)
    this.$parallaxEl.css({'opacity': this._opacityRatio})
  }

}