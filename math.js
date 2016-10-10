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
 * Clamp value to between min and max
 * @param {Number} value value to be clamped
 * @param {Number} min minimum value
 * @param {Number} max maximum value
 * @return {Number} clamped value
 */
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

/**
 * Map one interval to another
 * @param {Number} value
 * @param {Number} fromA
 * @param {Number} fromB
 * @param {Number} toA
 * @param {Number} toB
 **/
function mapInterval(v, fromA, fromB, toA, toB) {
    return (v - fromA) * (toB - toA) / (fromB - fromA) + toA;
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

function wrapDegrees(d, delta) {
    d += delta;
    return (d % 359 + 359) % 359;
}

module.exports = {
    roll,
    pitch,
    yaw,
    clamp,
    mapInterval,
    rollToDegrees,
    wrapDegrees
};
