import * as vscode from "vscode";
import { StyleCopManagerProvider } from "../StyleCopManagerProvider";
import { TreeItem } from "../tree";
import { CommandBase } from "./base/CommandBase";

export class CollapseAllCommand extends CommandBase {

    constructor(private readonly provider: StyleCopManagerProvider) {
        super('Collapse All');
    }

    protected shouldRun(item: TreeItem): boolean {
        return true;
    }

    protected async runCommand(item: TreeItem, args: string[]): Promise<void> {
        let items = await this.provider.getChildren();
        if (items && items.length > 0) items.forEach(i => i.collapse());
    }
}
