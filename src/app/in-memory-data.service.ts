import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let contacts = [
            { name: 'aaa', sex: 'male'},
            { name: 'bbb', sex: 'male'},
            { name: 'ccc', sex: 'female'},
            { name: 'ddd', sex: 'female'},
            { name: 'eee', sex: 'male'}
        ]

        let students = [
            { name: 'asdasd', sex: 'male'},
            { name: 'qweqe', sex: 'male'},
            { name: 'crqerqwcc', sex: 'female'},
            { name: 'zxczxc', sex: 'female'},
            { name: 'sacas', sex: 'male'}
        ]

        let teachers = [
            { name: '阿斯达四大', sex: 'male'},
            { name: '阿萨德', sex: 'male'},
            { name: '发生大事', sex: 'female'},
            { name: '自行车', sex: 'female'},
            { name: '发顺丰', sex: 'male'}
        ]

        let parents = [
            { name: '啊发顺丰', sex: 'male'},
            { name: '安抚萨斯', sex: 'male'},
            { name: '发送方', sex: 'female'},
            { name: '过期无法', sex: 'female'},
            { name: '能够大幅', sex: 'male'}
        ]

        let addNewList = [
            { name: '骑车去完成', sex: 'male'},
            { name: '发得清', sex: 'male'},
            { name: '张秀才成', sex: 'male'},
            { name: '爱上猜测', sex: 'male'},
            { name: '啊啊是的', sex: 'male'}
        ]

        let groups = [
            { name: '一年一班', count: 10},
            { name: '一年二班', count: 20},
            { name: '一年三班', count: 30},
            { name: '一年四班', count: 40},
            { name: '一年五班', count: 50}
        ]

        let homeVisitsMenu = [
            { className: 'visits_reservation',menuName: '创建预约'},
            { className: 'visits_reservation',menuName: '家访预约'},
            { className: 'visits_history', menuName: '历史家访'},
            { className: 'visits_feedback', menuName: '家访反馈'},
            { className: 'visits_reservation', menuName: '网盘资源'},
        ]

        let parentMeetingMenu = [
            { className: 'meeting_create', menuName: '创建家长会'},
            { className: 'meeting_history', menuName: '未开始的家长会'},
            { className: 'meeting_history', menuName: '未进行的家长会'},
            { className: 'meeting_history', menuName: '历史家长会'},
            { className: 'meeting_notice', menuName: '通知相关教师及家长'}
        ]

        let classActivitiesMenu = [
            { className: 'meeting_notice', menuName: '班级相册'}
        ]

        return { contacts, students, teachers, parents, addNewList, groups ,
            homeVisitsMenu ,parentMeetingMenu ,classActivitiesMenu }
    }
}