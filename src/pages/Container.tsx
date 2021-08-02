import React, {DragEvent, DragEventHandler, useEffect, useRef, useState} from 'react';
import "./index.css";
import Editor from '../components/editor/index';
import Control from '../components/control/index';
import Canvas from '../components/canvas/index';
function Container() {
	const box = useRef(null);
	interface Pos {
		left: number
		top: number
	}

	const [pos, setPos] = useState({left: 100, top: 0} as Pos);


	const handleOnDrag = (e: DragEvent) => {
		console.log(e.pageX);
		console.log(e.pageY);
	}
	const handleOnDragEnd = (e: DragEvent) => {
		setPos({left: e.pageX, top: e.pageY})
	}
	const handleDragStart = (e: DragEvent) => {
		e.dataTransfer.setData("pageX", e.pageX.toString())
		e.dataTransfer.setData("pageY", e.pageY.toString())
	}

	useEffect(
		() => {
			console.log('useEffect');
			console.log(pos);
		}, [pos]

	)
	return (
		<div className='layout'>
			<Editor></Editor>
			<div style={pos} className="dragBox" draggable={true} onDragStart={handleDragStart} onDragEnd={handleOnDragEnd}>
				box
			</div>
			<Canvas></Canvas>
			<Control></Control>
		</div>
	)
}
export default Container
