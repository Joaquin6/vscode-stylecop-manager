import { CliCommandBase } from "./base/CliCommandBase";
import { StyleCopManagerProvider } from "../StyleCopManagerProvider";
import { TreeItem } from "../tree/TreeItem";
import { StaticCommandParameter } from "./parameters/StaticCommandParameter";
import { InputTextCommandParameter } from "./parameters/InputTextCommandParameter";

export class RemoveProjectReferenceCommand extends CliCommandBase {
    constructor(provider: StyleCopManagerProvider) {
        super('Remove project reference', provider, 'dotnet');
    }

    protected shouldRun(item: TreeItem): boolean {
        this.parameters = [
            new StaticCommandParameter('remove'),
            new StaticCommandParameter(item.project.fullPath),
            new StaticCommandParameter('reference'),
            new StaticCommandParameter(item.path)
        ];

        return true;
    }
}
