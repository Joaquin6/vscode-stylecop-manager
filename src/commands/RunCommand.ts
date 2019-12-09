import { CliCommandBase } from "./base/CliCommandBase";
import { StyleCopManagerProvider } from "../StyleCopManagerProvider";
import { TreeItem } from "../tree/TreeItem";
import { StaticCommandParameter } from "./parameters/StaticCommandParameter";
import { ContextValues } from "../tree";

export class RunCommand extends CliCommandBase {
    constructor(provider: StyleCopManagerProvider) {
        super('Run', provider, 'dotnet');
    }

    protected shouldRun(item: TreeItem): boolean {
        this.parameters = [
            new StaticCommandParameter('run'),
            new StaticCommandParameter(item.path, '--project')
        ];

        return true;
    }
}
