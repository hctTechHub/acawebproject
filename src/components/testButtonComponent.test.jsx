import {render,screen} from "@testing-library/react"
import ButtonComponent from "./ButtonComponent"

test("Expect button to have 'add user' as button text", () => {
    const text = "add user"
    render(<ButtonComponent text={text} />)
    const element = screen.getByText(text)
    expect(element).toBeDefined()
})

