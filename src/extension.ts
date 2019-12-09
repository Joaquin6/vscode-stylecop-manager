'use strict';

import * as vscode from "vscode";
import { EventAggregator } from "./events";
import { StyleCopManagerProvider } from "./StyleCopManagerProvider";
import { StyleCopManagerCommands } from "./StyleCopManagerCommands";
import { StyleCopManagerFileWatcher } from "./StyleCopManagerFileWatcher";
import * as StyleCopManagerConfiguration from "./StyleCopManagerConfiguration";
import { StyleCopManagerOutputChannel } from "./StyleCopManagerOutputChannel";

var eventAggregator, styleCopManagerProvider, styleCopManagerCommands, styleCopManagerFileWatcher, styleCopManagerOutputChannel;

export function activate(context: vscode.ExtensionContext) {
    const rootPath = vscode.workspace.rootPath;
    eventAggregator = new EventAggregator();
    styleCopManagerProvider = new StyleCopManagerProvider(rootPath, eventAggregator);
    styleCopManagerCommands = new StyleCopManagerCommands(context, styleCopManagerProvider);
    styleCopManagerFileWatcher = new StyleCopManagerFileWatcher(eventAggregator);
    styleCopManagerOutputChannel = new StyleCopManagerOutputChannel(eventAggregator);

    StyleCopManagerConfiguration.register();
    styleCopManagerProvider.register();
    styleCopManagerCommands.register();
    styleCopManagerFileWatcher.register();
    styleCopManagerOutputChannel.register();
}

export function deactivate() {
    styleCopManagerProvider.unregister();
    styleCopManagerFileWatcher.unregister();
    styleCopManagerOutputChannel.unregister();
}
