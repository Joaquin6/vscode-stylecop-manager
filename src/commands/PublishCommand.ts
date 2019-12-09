import { CliCommandBase } from "./base/CliCommandBase";
import { StyleCopManagerProvider } from "../StyleCopManagerProvider";
import { TreeItem } from "../tree/TreeItem";
import { StaticCommandParameter } from "./parameters/StaticCommandParameter";
import { ContextValues } from "../tree";

export class PublishCommand extends CliCommandBase {
    constructor(provider: StyleCopManagerProvider) {
        super('Publish', provider, 'dotnet');
    }

    protected shouldRun(item: TreeItem): boolean {
        this.parameters = [
            new StaticCommandParameter('publish'),
            new StaticCommandParameter(item.path)
        ];

        return true;
    }
}
