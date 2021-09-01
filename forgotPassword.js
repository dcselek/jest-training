const doSomethingBefore = () => {
    return false;
}

const forgotPassword = (data) => {
    const boolean = doSomethingBefore();

    if (!boolean) {
        return true;
    }
    return false;
}

module.exports = {doSomethingBefore,forgotPassword}