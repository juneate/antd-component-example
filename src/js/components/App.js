import React, {useState} from "react"
import { Pagination } from 'antd'
import 'css/index.css'
import 'antd/dist/antd.css'

const PERPAGE = 2
const items = [
	'hello', 'world', 'this', 'is', 'a', 'test', 'of', 'the', 'pagination'
]

const App = () => {

	const [page, setPage] = useState(1)

	const handleChange = (data) => {
		setPage(data)
	}

	return (<>
		<ul>
			{items.slice((page-1)*PERPAGE, ((page-1)*PERPAGE)+PERPAGE).map((str, i) => <li key={i}>{str}</li>)}
		</ul>
		<Pagination total={items.length} pageSize={PERPAGE} onChange={handleChange} />
	</>)
}

export default App



	/* 
	p  i        i+PERPAGE
	1: 0, 1, 2, 3
	2: 4, 5, 6, 7
	3: 8, 9, 10, 11

	i = (page-1)*PERPAGE
	1: 0
	2: 4
	3: 8
	*/