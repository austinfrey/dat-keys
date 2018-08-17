const DAT_KEY_REGEX = /^([0-9a-f]{64})/i

function isValidKey(datKey) {
	return DAT_KEY_REGEX.test(datKey)
}

function homeDir() {
	return process.env.HOME
}

module.exports = {isValidKey, homeDir}
