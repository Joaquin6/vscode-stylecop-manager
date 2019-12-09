import { CliCommandBase } from "./base/CliCommandBase";
import { StyleCopManagerProvider } from "../StyleCopManagerProvider";
import { TreeItem } from "../tree/TreeItem";
import { StaticCommandParameter } from "./parameters/StaticCommandParameter";
import { ContextValues } from "../tree";

export class CleanCommand extends CliCommandBase {
    constructor(provider: StyleCopManagerProvider) {
        super('Clean', provider, 'dotnet');
    }

    protected shouldRun(item: TreeItem): boolean {
        this.parameters = [
            new StaticCommandParameter('clean'),
            new StaticCommandParameter(item.path)
        ];

        return true;
    }
}
