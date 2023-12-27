import {
    ActionCategory,
    ActionDeclaration,
} from "@aws-sdk/client-codepipeline";

/**
 * Filter Actions - part of the pipeline
 * @param actions
 */
export const filterActions = (actions: ActionDeclaration[]) : ActionDeclaration[] => {

    return actions.filter((action: ActionDeclaration) => {
        if (action.actionTypeId?.category === ActionCategory.Approval) {
            return action;
        }
    });

}