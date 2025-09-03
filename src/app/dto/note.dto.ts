export interface Note {
  id: number;
  title: string;
  content: string;
}

export interface NoteCreateDto {
  title: string;
  content: string;
}