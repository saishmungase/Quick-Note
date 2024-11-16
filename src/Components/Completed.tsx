import Note from './Note';

export default function CompletedNote() {
    return (
        <div className='note-area'>
            {Object.entries(localStorage).map(([keys, value]) => {
                const parsedValue = JSON.parse(value);
                if (parsedValue.status == true){
                    return (
                        <Note 
                            key={keys}
                            title={keys}
                            content={parsedValue.content}
                            important={parsedValue.importance} 
                            urgent={parsedValue.urgent} 
                            status={parsedValue.status}
                        />
                    );
                }
            })}
        </div>
    );
}
