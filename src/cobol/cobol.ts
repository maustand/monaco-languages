/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


'use strict';

import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;

export const conf: IRichLanguageConfiguration = {
	// the default separators except `@$`
	comments: {
		lineComment: '*',
	},
	autoClosingPairs: [
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
	],
	surroundingPairs: [
		{ open: '(', close: ')' },
		{ open: '"', close: '"' }
	]
};

export const language = <ILanguage>{
	defaultToken: '',
	tokenPostfix: '.cobol',

	keywords: [
		'ACCEPT', 'MERGE', 'SUM', 'ADD', 'MESSAGE', 'TABLE', 'ADVANCING', 'MODE', 'TAPE', 'AFTER', 'MULTIPLY', 'TEST',
		'ALL', 'NEGATIVE', 'TEXT', 'ALPHABET', 'NEXT', 'THAN', 'ALSO', 'NO', 'THEN', 'ALTERNATE', 'NOT', 'THROUGH', 'AND',
		'NUMBER', 'THRU', 'ANY', 'OCCURS', 'TIME', 'ARE', 'OF', 'TO', 'AREA', 'OFF', 'TOP', 'ASCENDING', 'OMITTED', 'TRUE',
		'ASSIGN', 'ON', 'TYPE', 'AT', 'OPEN', 'UNIT', 'AUTHOR', 'OR', 'UNTIL', 'BEFORE', 'OTHER', 'UP', 'BLANK', 'OUTPUT', 'USE',
		'BLOCK', 'PAGE', 'USING', 'BOTTOM', 'PERFORM', 'VALUE', 'BY', 'PIC', 'VALUES', 'CALL', 'PICTURE', 'WHEN', 'CANCEL', 'PLUS',
		'WITH', 'CD', 'POINTER', 'WRITE', 'CHARACTER', 'POSITION', 'ZERO', 'CLOSE', 'POSITIVE', 'ZEROS', 'COLUMN', 'PROCEDURE',
		'ZEROES', 'COMMA', 'PROGRAM', 'COMMON', 'PROGRAM-ID', 'COMMUNICATION', 'QUOTE', 'COMP', 'RANDOM', 'COMPUTE', 'READ', 'CONTAINS',
		'RECEIVE', 'CONFIGURATION', 'RECORD', 'CONTINUE', 'REDEFINES', 'CONTROL', 'REFERENCE', 'COPY', 'REMAINDER', 'COUNT', 'REPLACE',
		'DATA', 'REPORT', 'DATE', 'RESERVE', 'DAY', 'RESET', 'DELETE', 'RETURN', 'DESTINATION', 'REWIND', 'DISABLE', 'REWRITE', 'DISPLAY',
		'RIGHT', 'DIVIDE', 'RUN', 'DOWN', 'SAME', 'ELSE', 'SEARCH', 'ENABLE', 'SECTION', 'END', 'SELECT', 'ENVIRONMENT', 'SENTENCE', 'EQUAL',
		'SET', 'ERROR', 'SIGN', 'EXIT', 'SEQUENTIAL', 'EXTERNAL', 'SIZE', 'FLASE', 'SORT', 'FILE', 'SOURCE', 'LENGTH',
		'SPACE', 'LESS', 'STANDARD', 'LIMIT', 'START', 'LINE', 'STOP', 'LOCK', 'STRING', 'LOW-VALUE', 'SUBTRACT'
	],

	operators: [
		'+', '-', '/',
		'%', '<@>', '@>',
		'<@', '&', '^',
		'~', '<', '>',
		'<=', '=>', '==',
		'!=', '<>', '='
	],

	digits: /\d+(_+\d+)*/,
	octaldigits: /[0-7]+(_+[0-7]+)*/,
	binarydigits: /[0-1]+(_+[0-1]+)*/,
	hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,

	// The main tokenizer for our languages
	tokenizer: {
		root: [
			[/-?[\w@#$]+/, {
				cases: {
					'@keywords': 'keyword',
					'@operators': 'operator',
					'@default': 'identifier',
				}
			}],

			// @ annotations.
			[/@\s*[a-zA-Z_\$][\w\$]*/, 'annotation'],

			// numbers
			[/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, 'number.float'],
			[/(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/, 'number.float'],
			[/0[xX](@hexdigits)[Ll]?/, 'number.hex'],
			[/0(@octaldigits)[Ll]?/, 'number.octal'],
			[/0[bB](@binarydigits)[Ll]?/, 'number.binary'],
			[/(@digits)[fFdD]/, 'number.float'],
			[/(@digits)[lL]?/, 'number'],

			// delimiter: after number because of .\d floats
			[/[;,.]/, 'delimiter'],

			// strings
			[/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
			[/"/, 'string', '@string'],

			// characters
			[/'[^\\']'/, 'string'],
			[/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
			[/'/, 'string.invalid']
		]
	},
};
