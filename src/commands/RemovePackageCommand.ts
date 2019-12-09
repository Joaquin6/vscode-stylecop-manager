import { CliCommandBase } from "./base/CliCommandBase";
import { StyleCopManagerProvider } from "../StyleCopManagerProvider";
import { TreeItem } from "../tree/TreeItem";
import { StaticCommandParameter } from "./parameters/StaticCommandParameter";
import { InputTextCommandParameter } from "./parameters/InputTextCommandParameter";

export class RemovePackageCommand extends CliCommandBase {
    constructor(provider: StyleCopManagerProvider) {
        super('Remove package', provider, 'dotnet');
    }

    protected shouldRun(item: TreeItem): boolean {
        this.parameters = [
            new StaticCommandParameter('remove'),
            new StaticCommandParameter(item.project.fullPath),
            new StaticCommandParameter('package'),
            new StaticCommandParameter(item.path)
        ];

        return true;
    }
}
