import {
    ActionCategory,
    ActionDeclaration, ActionState, StageState,
} from "@aws-sdk/client-codepipeline";
import {filterActionStates} from "@/shared/codepipeline/filter-action-states";

/**
 * Filter States - part of the pipeline
 * @param states
 */
export const filterStates = (states: StageState[]) : StageState[] => {

    return states.filter((state: StageState) => {
        const actionStates: ActionState[] | undefined = state.actionStates;

        if (actionStates === undefined) {
            return false;
        }

        const action = filterActionStates(actionStates)[0]

        if (action !== undefined) {
            return state;
        }
    });



   /*     if (action.actionTypeId?.category === ActionCategory.Approval) {
            return true;
        }

        return false;
    });

    if (!actionFiltered.length) {
        return false;
    }

    return actionFiltered;
*/
}