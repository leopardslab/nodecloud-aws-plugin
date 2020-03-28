class CloudWatch {

    /**
      * CloudWatch constructor
      * @constructor
      * @param {object} aws - AWS SDK
      * @param {object} options - { apiVersion }
      */
    constructor(aws, options) {
        this._AWS = aws;
        this._apiVersion = options.apiVersion;
        this._cloudWatch = new this._AWS.CloudWatch({ apiVersion: this._apiVersion });
        this._cloudWatchEvents = new this._AWS.CloudWatchEvents({ apiVersion: this._apiVersion });
        this._cloudWatchLogs = new this._AWS.CloudWatchLogs({ apiVersion: this._apiVersion });
    }

    /**
     * Creates a new cloudwatch alarm
     * @createAlarm
     * @param {object} params
     */
    createAlarm(params) {
        return new Promise((res, reject) => {
            this._cloudWatch.putMetricAlarm(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * Delete cloudwatch alarms
     * @deleteAlarms
     * @param {object} params
     */
    deleteAlarms(params) {
        return new Promise((res, reject) => {
            this._cloudWatch.deleteAlarms(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
    * Describe cloudwatch alarms
    * @describeAlarms
    * @param {object} params
    */
    describeAlarms(params) {
        return new Promise((res, reject) => {
            this._cloudWatch.describeAlarms(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * Enable cloudwatch alarm actions
     * @enableAlarmActions
     * @param {object} params
     */
    enableAlarmActions(params) {
        return new Promise((res, reject) => {
            this._cloudWatch.enableAlarmActions(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * Disable cloudwatch alarm actions
     * @disableAlarmActions
     * @param {object} params
     */
    disableAlarmActions(params) {
        return new Promise((res, reject) => {
            this._cloudWatch.disableAlarmActions(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * List cloudwatch metrics
     * @listMetrics
     * @param {object} params
     */
    listMetrics(params) {
        return new Promise((res, reject) => {
            this._cloudWatch.listMetrics(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data.Metrics);
                }
            });
        });
    }

    /**
     * Submit custom metrics
     * @submitMetrics
     * @param {object} params
     */
    submitMetrics(params) {
        return new Promise((res, reject) => {
            this._cloudWatch.putMetricData(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * Create shedule rule
     * @createSheduleRule
     * @param {object} params
     */
    createSheduleRule(params) {
        return new Promise((res, reject) => {
            this._cloudWatchEvents.putRule(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * Delete shedule rule
     * @deleteSheduleRule
     * @param {object} params
     */
    deleteSheduleRule(params) {
        return new Promise((res, reject) => {
            this._cloudWatchEvents.deleteRule(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * Put cloud watch event targets
     * @submitEventTargets
     * @param {object} params
     */
    submitEventTargets(params) {
        return new Promise((res, reject) => {
            this._cloudWatchEvents.putTargets(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * send cloud watch events
     * @sendEvents
     * @param {object} params
     */
    sendEvents(params) {
        return new Promise((res, reject) => {
            this._cloudWatchEvents.putEvents(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * Describe cloud watch subscription filters
     * @describeSubscriptionFilters
     * @param {object} params
     */
    describeSubscriptionFilters(params) {
        return new Promise((res, reject) => {
            this._cloudWatchLogs.describeSubscriptionFilters(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * Create cloud watch subscription filter
     * @createSubscriptionFilter
     * @param {object} params
     */
    createSubscriptionFilter(params) {
        return new Promise((res, reject) => {
            this._cloudWatchLogs.putSubscriptionFilter(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * Delete cloud watch subscription filter
     * @deleteSubscriptionFilter
     * @param {object} params
     */
    deleteSubscriptionFilter(params) {
        return new Promise((res, reject) => {
            this._cloudWatchLogs.deleteSubscriptionFilter(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
     * Create cloud watch log group
     * @createLogGroup
     * @param {object} params
     */
    createLogGroup(params) {
        return new Promise((res, reject) => {
            this._cloudWatchLogs.createLogGroup(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    /**
    * Delete cloud watch log group
    * @deleteLogGroup
    * @param {object} params
    */
    deleteLogGroup(params) {
        return new Promise((res, reject) => {
            this._cloudWatchLogs.deleteLogGroup(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

}

module.exports = CloudWatch;
