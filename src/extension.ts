import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    -200
  );
  statusBarItem.command = "workbench.action.togglePanel";
  statusBarItem.text = `$(console)`;
  statusBarItem.tooltip = "Toggle the panel";
  statusBarItem.show();
}

export function deactivate() {}
