export class Deserialize {
    protected _deserialize(input: any) {
        Object.assign(this, input)
        return this
    }
}
