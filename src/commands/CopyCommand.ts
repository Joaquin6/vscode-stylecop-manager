import * as clipboardy from "clipboardy";
import { StyleCopManagerProvider } from "../StyleCopManagerProvider";
import { TreeItem, ContextValues } from "../tree";
import { CommandBase } from "./base/CommandBase";

export class CopyCommand extends CommandBase {

    constructor(private readonly provider: StyleCopManagerProvider) {
        super('Copy');
    }

    protected shouldRun(item: TreeItem): boolean {
        if (item && item.path) return true;
        return false;
    }

    protected async runCommand(item: TreeItem, args: string[]): Promise<void> {
        await clipboardy.write(item.path);
    }
}
