import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import type { AvatarFullConfig } from 'react-nice-avatar';
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import useScrollManager from './useScrollManager';

interface AvatarListProps {
    selectConfig: (item: Required<AvatarFullConfig>) => void;
    config: Required<AvatarFullConfig>;
}

const AvatarList: React.FC<AvatarListProps> = ({ selectConfig, config }) => {
    const displayCount = 200;
    const [avatarConfigList, setAvatarConfigList] = useState<any[]>([]);
    const listId = 'avatarList';

    useEffect(() => {
        setAvatarConfigList(genConfigList(displayCount));
        fetchListWidth();
    }, []);

    const genConfigList = (count: number): any[] => {
        return new Array(count).fill(null).map(() => ({
            ...genConfig({ isGradient: Boolean(Math.round(Math.random())) }),
            id: 'n_' + Math.random().toString(36).substr(2, 9)
        }));
    };

    const fetchListWidth = (count = 0) => {
        if (count > 20) return;
        const listElem = document.getElementById(listId);
        if (!listElem) {
            setTimeout(() => {
                fetchListWidth(count + 1);
            }, 500);
        } else {
        }
    };

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { scrollAmount, handleScrollLeft, handleScrollRight } = useScrollManager(scrollContainerRef);
    return (
        <Flex align="center" justify="center" gap={10}>
            <CaretLeftOutlined style={{ color: 'rgba(107, 114, 128, 1)' }} onClick={handleScrollLeft} />
            <div className="list-wrapper" ref={scrollContainerRef}>
                {avatarConfigList.map((item, idx) => (
                    <div key={item.id} className="avatar-item-wrapper" onClick={() => selectConfig(item)}>
                        <ReactNiceAvatar className={config?.id === item.id ? 'avatar-item selected-item-avatar' : 'avatar-item'} {...item} />
                    </div>
                ))}
            </div>
            <CaretRightOutlined style={{ color: 'rgba(107, 114, 128, 1)' }} onClick={handleScrollRight} />
        </Flex>
    );
};

export default AvatarList;
