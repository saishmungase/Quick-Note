import Note from './Note';

export default function NoteArea(){
    return <div className='note-area'>
        {
            Object.entries(localStorage).map(([keys, value])=>{
                return <Note 
                  key={keys}
                  title={keys}
                  content={value}
                />
            })
        }
    </div>
}