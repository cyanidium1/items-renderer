import React from 'react';
import MenuItem from './MenuItem';

interface MenuSectionProps {
    data: any[];
}

function MenuSection(props: MenuSectionProps) {
    const { data } = props;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </div>
    );
}

export default MenuSection;
