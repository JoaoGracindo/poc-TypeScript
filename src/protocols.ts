export type BookEntity = {
    id: number,
    name: string,
    author: string,
    finished: boolean
}

export type Book = Omit<BookEntity, "id" | "finished">;