interface BufferedGraphics extends Graphics {
	/**
	 * On Graphics instances with an offscreen buffer, this is an `ArrayBuffer` that provides access to the underlying pixel data.
	 *
	 * @url https://www.espruino.com/Reference#l_Graphics_buffer
	 */
	buffer: ArrayBuffer
	/**
	 * On instances of graphics that drive a display with an offscreen buffer, calling this function will copy the contents of the offscreen buffer to the screen.
	 * Call this when you have drawn something to Graphics and you want it shown on the screen.
	 * If a display does not have an offscreen buffer, it may not have a `g.flip()` method.
	 * On Bangle.js, there are different graphics modes chosen with `Bangle.setLCDMode()`. The default mode is unbuffered and in this mode `g.flip()` does not affect the screen contents, however it will cause the screen to light up if it was previously off due to inactivity.
	 * On some devices, this command will attempt to only update the areas of the screen that have changed in order to increase speed. If you have accessed the Graphics.buffer directly then you may need to use Graphics.flip(true) to force a full update of the screen.
		@param all (only on some devices) If true then copy all pixels, not just those that have changed.
	 */
	flip: (all?: boolean) => void
}
declare const g: BufferedGraphics
