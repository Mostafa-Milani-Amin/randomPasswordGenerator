const randomPasswordGenerator = length => {
    let charset = "!\"\\#$€%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * charset.length);
        password += charset.substring(randomNumber, randomNumber + 1);
    }
    return password;
};

module.exports = { randomPasswordGenerator };