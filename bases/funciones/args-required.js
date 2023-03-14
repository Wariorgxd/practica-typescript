"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName}  ${lastName}`;
    };
    let noName;
    const name = fullName(noName, 'Stark');
    console.log(name);
})();
//# sourceMappingURL=args-required.js.map