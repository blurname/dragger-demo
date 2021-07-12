import React, {DragEvent} from 'react';
function Editor() {
	const handleDrop = (e: DragEvent) => {
		e.preventDefault()
		console.log("on drop");
		console.log(e.pageX);
		console.log(e.pageY);
	}
	const handleDragEnter = (e: DragEvent) => {
		e.preventDefault()
		console.log("on enter");
		console.log(e.pageX);
		console.log(e.pageY);
	}
	return (
		<div style={{width: 500, height: 500, backgroundColor: 'gray'}} onDrop={handleDrop} onDragEnter={handleDragEnter} >
			i am a editor
		</div>
	)
}
export default Editor
