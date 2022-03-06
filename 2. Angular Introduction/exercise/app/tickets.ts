class Ticket {
    private destination: string;
    private price: number;
    private status: string;
    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

    public getDestination(): string {
        return this.destination;
    }

    public getPrice(): number {
        return this.price;
    }

    public getStatus(): string {
        return this.status;
    }
}

const customComparator = <T extends Ticket>(
    data: T[],
    comparator: string,
    direction: 'ascending' | 'descending',
) => {
    const compare = (objectA: T, objectB: T) => {
        let valueA: any;
        let valueB: any;

        if (comparator === 'destination') {
            valueA = objectA.getDestination();
            valueB = objectB.getDestination();
        } else if (comparator === 'price') {
            valueA = objectA.getPrice();
            valueB = objectB.getPrice();
        } else {
            valueA = objectA.getStatus();
            valueB = objectB.getStatus();
        }

        if (direction === 'ascending') {
            return valueA.localeCompare(valueB);
        } else {
            return valueB.localeCompare(valueA);
        }
    };

    return data.slice().sort(compare);
};

function sortTickets(tickets: string[], criteria: string): void {
    let arr: Ticket[] = tickets
        .map((t) => t.split('|'))
        .map(([description, price, status]) => {
            return new Ticket(description, parseFloat(price), status);
        });

    const sortedArr: Ticket[] = customComparator(arr, criteria, 'ascending');

    console.log(sortedArr);
}

sortTickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed',
    ],
    'destination',
);
