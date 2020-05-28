const ORIGINATING_SERVICE = "fortnite";
const INTENT = "prod-live";

class ErrDef {
    constructor(errorCode, errorMessage, numericErrorCode, httpStatusCode) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.numericErrorCode = numericErrorCode;
        this.httpStatusCode = httpStatusCode;
    }

    apply(res, ...messageVars) {
        return this.applyCustomMessage(res, this.errorMessage, ...messageVars);
    }

    applyCustomMessage(res, message, ...messageVars) {
        return res
            .status(this.httpStatusCode)
            .set("X-Epic-Error-Code", this.numericErrorCode)
            .set("X-Epic-Error-Name", this.errorCode)
            .json({
                "errorCode": this.errorCode,
                "errorMessage": message.format(messageVars),
                "messageVars": messageVars,
                "numericErrorCode": this.numericErrorCode,
                "originatingService": ORIGINATING_SERVICE,
                "intent": INTENT
            });
    }
}

class ApiException extends Error {
    constructor(errDef) {
        super(errDef.errorMessage);
        this.errDef = errDef;
        this.errorMessage = errDef.errorMessage;
    }

    with(...messageVars) {
        this.messageVars = messageVars;
        return this;
    }

    withMessage(errorMessage, ...messageVars) {
        this.errorMessage = errorMessage;
        this.messageVars = messageVars;
        return this;
    }

    apply(res) {
        return this.messageVars ? this.errDef.applyCustomMessage(res, this.errorMessage, ...this.messageVars) : this.errDef.applyCustomMessage(res, this.errorMessage);
    }
}

module.exports = {
    com: {
        epicgames: {
            common: {
                not_found: new ErrDef("errors.com.epicgames.common.not_found", "Sorry the resource you were trying to find could not be found", 1004, 404),
                server_error: new ErrDef("errors.com.epicgames.common.server_error", "Sorry an error occurred and we were unable to resolve it (tracking id: [{0}])", 1000, 500),
                throttled: new ErrDef("errors.com.epicgames.common.throttled", "Operation access is limited by throttling policy, please try again in {0} second(s).", 1041, 429)
            },
            fortnite: {
                item_not_found: new ErrDef("errors.com.epicgames.fortnite.item_not_found", "Locker item {0} not found", 16006, 404),
                operation_not_found: new ErrDef("errors.com.epicgames.fortnite.operation_not_found", "Operation {0} not valid", 16035, 404)
            },
            modules: {
                gameplayutils: {
                    not_enough_mtx: new ErrDef("errors.com.epicgames.modules.gameplayutils.not_enough_mtx", "Purchase: {0}: Required {1} MTX but account balance is only {2}.", 12720, 400)
                },
                gamesubcatalog: {
                    catalog_out_of_date: new ErrDef("errors.com.epicgames.modules.gamesubcatalog.catalog_out_of_date", "Could not find catalog item {0}", 28001, 400)
                },
                profiles: {
                    invalid_command: new ErrDef("errors.com.epicgames.modules.profiles.invalid_command", "{0} is not valid on {1} profiles ({2})", 12801, 400),
                    operation_forbidden: new ErrDef("errors.com.epicgames.modules.profiles.operation_forbidden", "Unable to find template configuration for profile {0}", 12813, 403)
                }
            }
        }
    },
    ErrDef,
    ApiException
};
