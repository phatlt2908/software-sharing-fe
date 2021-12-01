export default {
    getCategoryColor(name) {
        switch (name) {
            case "game":
                return "bd-is-link";

            case "office":
                return "bd-is-info";

            case "graphic":
                return "bd-is-success";

            case "technique":
                return "bd-is-warning";

            case "os":
                return "bd-is-danger";

            case "common":
                return "bd-is-black";

            default:
                break;
        }
    }
}