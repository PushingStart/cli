import { IndexLibraryResult } from "./types";
import { OBJECT_ICONS, print, printProcessStatus, printSectionTitle } from '../../screen';

import { output as guardOutput } from '../guard/output'

export function output(result: IndexLibraryResult)
{
    guardOutput(result.guardResult);

    print();

    printSectionTitle('Rule Library');
    print();

    for(const category of result.library.categories)
    {
        print(`${OBJECT_ICONS.ruleCategory.get()} ${category.name}`, 2);
        for(const rule of category.rules)
        {
            print(`${OBJECT_ICONS.rule.get()} ${rule.name}`, 5);
            print(`Path: ${rule.path}`, 8);
            print();
        }
    }

    print(`Library Index: ${result.libraryPath}`);

    printProcessStatus(result.success, 'Index Generation');
}
