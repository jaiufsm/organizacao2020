export class Days {
    static daysList: Array<string> = ['19/10/2020', '20/10/2020', '21/10/2020', '22/10/2020', '23/10/2020'];

    public static getDays() {
        return Days.daysList;
    }

    public static getCurrentDay() {
        const currentDate = new Date();
        const days = Days.daysList;
        if (days.findIndex(day => day === currentDate.toLocaleDateString()) > -1) {
            return currentDate.toLocaleDateString();
        } else {
            return days[0];
        }
    }
}
