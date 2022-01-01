class MathUtil {
    static validate_plane(plane) {
        return plane.slice(0, -1).some(x => x !== 0);
    }
}
