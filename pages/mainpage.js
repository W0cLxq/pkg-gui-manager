const { ipcRenderer } = require("electron")

var GET_JS_PATH = document.getElementById("js-path")
var nodeversion = document.getElementById("node-version")
var ostype = document.getElementById("os-type")
var filetype = document.getElementById("file-type")
var exec_command = ""

function create() {
    if (filetype.value == "small-file") {
        exec_command += "pkg --compress GZip --targets " + nodeversion.value + ostype.value + " " + GET_JS_PATH.value
        ipcRenderer.send("command", exec_command)
        exec_command = ""
    } else if (filetype.value == "normal-file") {
        exec_command += "pkg --targets " + nodeversion.value + ostype.value + " " + GET_JS_PATH.value
        ipcRenderer.send("command", exec_command)
        exec_command = ""
    }
}