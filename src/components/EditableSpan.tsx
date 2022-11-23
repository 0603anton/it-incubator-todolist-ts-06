import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
}

export const EditableSpan = (props: EditableSpanPropsType) => {

    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onClickHandler = () => {
        setEdit(!edit)
    }


    return (
        edit
            ? <input onBlur={onClickHandler} autoFocus value={newTitle} onChange={onChangeHandler}/>
            : <span onClick={onClickHandler}>{props.title}</span>
    );
};

