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
	const [pos, setPos] = useState({left: 0, top: 0} as Pos);


	const handleOnDrag = (e: DragEvent) => {
		console.log(e.pageX);
		console.log(e.pageY);
	}
	const handleOnDragEnd = (e: DragEvent) => {
		setPos({left: e.pageX, top: e.pageY})
		console.log('dragend');
		console.log(pos)
	}
	useEffect(
		() => {
			console.log('useEffect');
			console.log(pos);
		}, [pos]
	)
	return (
		<div className='layout'>
			<div style={{width: 80, height: 80, left: pos.left, top: pos.top}} className="dragBox" draggable={true} >
				box
			</div>
			<Editor></Editor>
			<Canvas></Canvas>
			<Control></Control>
		</div>
	)
}
export default Container
