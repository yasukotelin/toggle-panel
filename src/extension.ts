import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
	statusBarItem.command = 'workbench.action.togglePanel';
	statusBarItem.text = `$(list-selection) Panel`;
	statusBarItem.show();
}

export function deactivate() {}
