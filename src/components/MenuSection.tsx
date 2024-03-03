import React, { useState } from 'react';
import MenuItem from './MenuItem';

import merged from '../db/DBMerged.json'


function MenuSection() {
    // const { data } = props;
    // const [jsonString, setJsonString] = useState<string>('');

    // function merged() {
    //     // Создаем объект для хранения данных из DBProps для быстрого доступа по идентификатору
    //     const dbPropsMap = {};
    //     DBProps.forEach(item => {
    //         dbPropsMap[item.id] = item;
    //     });

    //     // Объединяем данные из DB с данными из DBProps
    //     const mergedData = DB.map(item => {
    //         const matchingItem = dbPropsMap[item.id];
    //         if (matchingItem) {
    //             return { ...item, ...matchingItem };
    //         } else {
    //             return item;
    //         }
    //     });

    //     return mergedData;
    // }

    // const mergedMenuData = merged();

    // const jsonStringify = () => {
    //     const json = JSON.stringify(mergedMenuData, null, 2);
    //     setJsonString(json);
    // };

    // console.log(mergedMenuData)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {merged.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </div>
            {/* <div>
                <button onClick={jsonStringify}>Generate JSON</button>
                <textarea
                    value={jsonString}
                    rows={10}
                    cols={50}
                    readOnly
                    style={{ marginTop: '10px' }}
                />
            </div> */}
        </div>
    );
}

export default MenuSection;
