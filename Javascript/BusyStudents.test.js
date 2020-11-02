const busyStudents =  require('./BusyStudents');

const startTime = [9,8,7,6,5,4,3,2,1];
const endTime = [10,10,10,10,10,10,10,10,10];
const queryTime = 5;
const output = 5;

test("Whether query time equals the start or end time of a studying student", () => {
    expect(busyStudents(startTime, endTime, queryTime)).toStrictEqual(output)
})