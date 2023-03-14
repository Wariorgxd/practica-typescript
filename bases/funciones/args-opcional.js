"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName || 'no hay nombre'}  ${lastName || 'no hay apellido'}`;
    };
    let noName;
    const name = fullName(noName, 'Stark');
    console.log({ name });
})();
//# sourceMappingURL=args-opcional.js.map