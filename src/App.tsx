import { Input } from "antd"
import { FC } from "react"

const App: FC = () => {
    return (
<div style={{ width: 400 }}>
    <div>
        <Input allowClear />
    </div>
    <div>
        <Input.TextArea allowClear />
    </div>
</div>
    )
}

export default App
