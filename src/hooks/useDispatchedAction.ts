import { useCallback } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const useDispatchedAction = <T>(
    action: ActionCreatorWithPayload<T>
): ((payload: T) => void) => {
    const dispatch = useDispatch();

    return useCallback(
        payload => {
            dispatch(action(payload));
        },
        [dispatch, action]
    );
};

export default useDispatchedAction;
