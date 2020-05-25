/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { registerLanguage } from '../_.contribution';

registerLanguage({
	id: 'cobol',
	extensions: ['.cbl', '.cobol'],
	aliases: ['cobol', 'COBOL'],
	loader: () => import('./cobol')
});
