(() => {

    interface Client {
        name:string;
        age?:number;
        address:Address;
        getFullAddress(id:string): void;
    }

    interface Address {
        id:number,
        zip:string,
        city:string,

    }
    const client:Client = {
        name: 'Sebastian',
        age: 25,
        address: {
            id: 1,
            zip: '1231',
            city: 'Colombia'
        },
        getFullAddress: function (id: string): void {
            throw new Error("Function not implemented.");
        }
    }

    const client2:Client = {
        name: 'Lisa',
        age: 30,
        address: {
            id: 3,
            zip: 'gsq221',
            city: 'Quito'
        },
        getFullAddress: function (id: string): void {
            throw new Error("Function not implemented.");
        }
    }
})();
