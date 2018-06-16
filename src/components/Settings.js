import React from 'react';
import Range from './Range';

function Settings({settings,onChangeFunc}){
    const{contrast,hue,brightness,saturate,sepia,invert} = settings;

    return(
        <aside className="settings">

            <Range
            name="contrast"
            value={contrast}
            min = {0}
            max = {200}
            onChangeFunc = {onChangeFunc} />

            <Range
            name="hue"
            value={hue}
            min = {-360}
            max = {360}
            onChangeFunc = {onChangeFunc} />

            <Range
            name="brightness"
            value={brightness}
            min = {0}
            max = {200}
            onChangeFunc = {onChangeFunc} />

            <Range
            name="saturate"
            value={saturate}
            min = {0}
            max = {200}
            onChangeFunc = {onChangeFunc} />

            <Range
            name="sepia"
            value={sepia}
            min = {0}
            max = {100}
            onChangeFunc = {onChangeFunc} />

            <Range
            name="invert"
            value={invert}
            min = {0}
            max = {100}
            onChangeFunc = {onChangeFunc} />

        </aside>
    );
}

export default Settings;