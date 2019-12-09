import { CommandBase } from "./base/CommandBase";
import { StyleCopManagerProvider } from "../StyleCopManagerProvider";
import { TreeItem } from "../tree/TreeItem";
import * as vscode from "vscode";


export class LocateCommand extends CommandBase {
    private _provider: StyleCopManagerProvider;
    constructor(provider: StyleCopManagerProvider) {
        super('Locate');
        this._provider = provider;
    }

    protected shouldRun(item: TreeItem): boolean {
        return true;
    }

    protected async runCommand(item: TreeItem, args: string[]): Promise<void> {
		this._provider.selectFile(vscode.window.activeTextEditor.document.uri.fsPath);
    }
}
