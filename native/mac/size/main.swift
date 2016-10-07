import Foundation
import CoreGraphics

if CommandLine.arguments.count < 2 {
	print("usage: size WINDOWID")
	exit(1)
}

let id = Int(CommandLine.arguments[1])

if id == nil {
	print("error: provided ID is not a number")
	exit(2)
}

let options = CGWindowListOption(arrayLiteral: CGWindowListOption.excludeDesktopElements, CGWindowListOption.optionOnScreenOnly)
let list = CGWindowListCopyWindowInfo(options, CGWindowID(0))
let converted = list as NSArray? as! [[String: AnyObject]]

for window in converted {
	let newID = NSNumber(value: id!)

	if newID == window["kCGWindowNumber"] as! NSNumber {
		let dimensions = window["kCGWindowBounds"] as! [String: AnyObject]
		let width = dimensions["Width"] as! NSNumber
		let height = dimensions["Height"] as! NSNumber

		print(String(describing: width) + "&" + String(describing: height))
		exit(0)
	}
}

print("error: provided ID does not exist")
exit(3)
