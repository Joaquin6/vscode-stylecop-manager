import * as path from "path";
import * as fs from "../async/fs";
import * as Utilities from "../model/Utilities";
import { StyleCopManagerProvider } from "../StyleCopManagerProvider";
import { TreeItem, ContextValues } from "../tree";
import { CommandBase } from "./base/CommandBase";

export class DuplicateCommand extends CommandBase {

    constructor(private readonly provider: StyleCopManagerProvider) {
        super('Duplicate');
    }

    protected shouldRun(item: TreeItem): boolean {
        if (item && item.path) return true;
        return false;
    }

    protected async runCommand(item: TreeItem, args: string[]): Promise<void> {
        try {
            let filepath = await Utilities.createCopyName(item.path);
            let filename = path.basename(filepath);
            let folder = path.dirname(filepath);
            let content = await fs.readFile(item.path, "utf8");
            filepath = await item.project.createFile(folder, filename, content);
            this.provider.logger.log("File duplicated: " + filepath);
        } catch(ex) {
            this.provider.logger.error('Can not duplicate file: ' + ex);
        }
    }
}
