import { Tooltip } from 'antd';

import React from 'react';

export default function SectionWrapper(props: { className?: string; children: JSX.Element; switchConfig: () => void; tip: string }) {
    const { className = '', children, switchConfig, tip } = props;

    return (
        <Tooltip title={tip}>
            <div className={'section-wrapper ' + className} data-tip={tip} onClick={switchConfig}>
                <div className="children-wrapper  absolute top-0 left-0 w-full h-full flex items-center justify-center">{children}</div>
            </div>
        </Tooltip>
    );
}
