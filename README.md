# React Avatar Editor

A React package that provides an easy-to-use avatar editor along with a customizable avatar display component.

## Installation

You can install the package via npm or yarn:

```sh
npm install react-avatar-editor-v1
# or
yarn add react-avatar-editor-v1
```

## Usage

### Importing Components

```tsx
import React, { useState } from 'react';
import ReactAvatarEditor, { ReactNiceAvatar } from 'react-avatar-editor-v1';
import 'react-avatar-editor-v1/dist/main.scss';
import { genConfig } from 'react-nice-avatar';

const App = () => {
    const [config, setConfig] = useState(genConfig());

    return (
        <div>
            {/* Display the avatar */}
            <ReactNiceAvatar {...config} style={{ width: '10rem', height: '10rem' }} />

            {/* Avatar Editor Component */}
            <ReactAvatarEditor config={config} setConfig={setConfig} />
        </div>
    );
};

export default App;
```

## Props

### `ReactAvatarEditor`

| Prop             | Type                                         | Description                                        |
| ---------------- | -------------------------------------------- | -------------------------------------------------- |
| `config`         | `AvatarFullConfig`                           | Avatar configuration object.                       |
| `setConfig`      | `Dispatch<SetStateAction<AvatarFullConfig>>` | Function to update the avatar config.              |
| `withAvatarList` | `boolean` (default: `true`)                  | Show/hide additional avatar customization options. |

### `ReactNiceAvatar`

This is directly imported from [`react-nice-avatar`](https://github.com/dapi-labs/react-nice-avatar) and can be used to display an avatar based on the `config` state.

## Demo

Check out the demo GIF to see it in action:
![Demo](./src/assets/demo.gif)

## Example Output

The `ReactNiceAvatar` component renders the avatar based on the provided configuration, while `ReactAvatarEditor` allows users to modify the avatar features in real time.

## License

This project is licensed under the MIT License.
