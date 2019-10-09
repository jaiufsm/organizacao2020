export class Days {
    static daysList: Array<string> = ['22/10/2018', '23/10/2018', '24/10/2018', '25/10/2018', '26/10/2018'];

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
