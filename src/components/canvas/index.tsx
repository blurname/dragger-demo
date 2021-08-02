import React, {DragEvent} from 'react';
function Canvas() {
	const handleDrop = (e: DragEvent) => {
		e.preventDefault()
		console.log("on drop");
		console.log(e.pageX);
		console.log(e.pageY);
		const pageX = e.dataTransfer.getData("pageX")
		const pageY = e.dataTransfer.getData("pageY")
		console.log("dataTransfer");
		console.log(pageX)
		console.log(pageY)
	}
	const handleDragEnter = (e: DragEvent) => {
		console.log("on enter");
		console.log(e.pageX);
		console.log(e.pageY);
		e.preventDefault()
	}
	const handleDragOver = (e: DragEvent) => {
		console.log("on over");
		console.log(e.pageX);
		console.log(e.pageY);
		e.preventDefault()
	}
	return (
		<div style={{width: 500, height: 500, backgroundColor: 'peru'}} onDrop={handleDrop} onDragEnter={handleDragEnter} onDragOver={handleDragOver}>
			this is canvas
		</div>
	)
}
export default Canvas
