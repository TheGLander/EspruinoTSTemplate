//Freeze shim
import { fs } from "memfs"
Object.freeze = function <T>(obj: T[]): readonly T[] {
	var props = Object.getOwnPropertyNames(obj)

	for (var i = 0; i < props.length; i++) {
		var desc = Object.getOwnPropertyDescriptor(obj, props[i])

		if ("value" in desc) {
			desc.writable = false
		}

		desc.configurable = false
		Object.defineProperty(obj, props[i], desc)
	}

	return obj
}

g.clear()
g.drawRect(10, 10, 50, 70)
g.fillRect(50, 50, 200, 200)
g.setFontVector(20)
g.drawString("ebic", 10, 10)
g.flip()

fs.writeFile("cool.txt", "E", () => {})

g.drawString(fs.readFileSync("cool.txt", {}), 0, 0)
g.flip()
