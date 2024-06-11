import { expect, test } from 'vitest'
import { fireEvent, render } from '@testing-library/svelte'
import App from './App.svelte'

test('increment count', async () => {
  const { findByText } = render(App)

  const countButton = await findByText(/count is /)
  expect(countButton.textContent).toContain('is 0')

  await fireEvent.click(countButton)
  expect(countButton.textContent).toContain('is 1')
})
