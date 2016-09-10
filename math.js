function roll(q) {
    return Math.atan2(2.0 * (q.y * q.z + q.w * q.x), q.w * q.w - q.x * q.x - q.y * q.y + q.z * q.z);
}

function pitch(q) {
    return Math.asin(-2.0 * (q.x * q.z - q.w * q.y));
}

function yaw(q) {
    return Math.atan2(2.0 * (q.x * q.y + q.w * q.z), q.w * q.w + q.x * q.x - q.y * q.y - q.z * q.z);
}

/**
 * Clamp value to between -1 and 1
 * @param {Number} value value to be clamped
 * @return {Number} clamped value
 */
function clamp(value) {
    return Math.min(1, Math.max(-1, value));
}

/**
 * Calculates degrees based on roll factor
 * @param {Number} rollFactor factor from myo
 * @return {Number} degrees between 0 and 359
 */
function rollToDegrees(rollFactor) {
    return Math.floor( rollFactor < 0 ?
                       180 * rollFactor * -1 :
                       180 + ((1 - rollFactor) * 179)
                     );
}

module.exports = {
    roll,
    pitch,
    yaw,
    clamp,
    rollToDegrees
};
