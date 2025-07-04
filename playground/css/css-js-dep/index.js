import './foo.css'
import barModuleClasses from './bar.module.css'

export { barModuleClasses }
export function createFooButton() {
  const button = document.createElement('button')
  button.className = 'css-js-dep'
  button.textContent = `button ${getComputedStyle(button).color}`
  document.body.appendChild(button)

  button.addEventListener('click', () => {
    button.textContent = `button ${getComputedStyle(button).color}`
  })

  return button
}                                                                       