import { CliCommandBase } from "./base/CliCommandBase";
import { StyleCopManagerProvider } from "../StyleCopManagerProvider";
import { TreeItem } from "../tree/TreeItem";
import { StaticCommandParameter } from "./parameters/StaticCommandParameter";
import { ContextValues } from "../tree";

export class RestoreCommand extends CliCommandBase {
    constructor(provider: StyleCopManagerProvider) {
        super('Restore', provider, 'dotnet');
    }

    protected shouldRun(item: TreeItem): boolean {
        this.parameters = [
            new StaticCommandParameter('restore'),
            new StaticCommandParameter(item.path)
        ];

        return true;
    }
}
