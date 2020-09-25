// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { LeftNavItem } from 'electron/types/left-nav-item';

export type LeftNavProps<KeyT> = {
    selectedKey: KeyT;
    items: LeftNavItem<KeyT>[];
};
