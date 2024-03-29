abstract class SequenceGenerator<T> {
    combiner: Combiner<T>;
    windowSize: number;
    generationLength: number;

    constructor(windowSize: number, generationLength: number, combiner: Combiner<T>) {
        this.windowSize = windowSize;
        this.generationLength = generationLength;
        this.combiner = combiner;
    }

    generateSequence(): T[] {
        var sequence = this.getStartingSequence();
        for (var i = 0; i < this.generationLength; i++) {
            const latest_window = sequence.slice(sequence.length - this.windowSize);
            sequence.push(this.combiner.combine(latest_window))
        }
        return sequence;
    }

    abstract getStartingSequence(): T[];
}


interface Combiner<T> {
    combine(l: T[]): T
}

class NumberAdder implements Combiner<number> {
    combine(l: number[]): number {
        return l.reduce((prev, curr) => prev + curr)
    }
}

class StringConcatenator implements Combiner<string> {
    combine(l: string[]): string {
        return l.reduce((prev, curr) => prev + curr)
    }
}

class ConcreteSequenceGenerator extends SequenceGenerator<string> {
    constructor(generationLength: number) {
        super(2, generationLength, new StringConcatenator());
    }

    getStartingSequence(): string[] {
        return ["hi", "bye"];
    }
}

function main() {
    console.log((new ConcreteSequenceGenerator(10)).generateSequence());
}

main();
