import { useEffect } from "react"

// Sets the page's title as a side effect
const Title = ({ is }) => {
    useEffect(() => {
        document.title = is
    })

    return null
}

export default Title
