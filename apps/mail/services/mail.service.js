// mail service

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'
const CACHE_STORAGE_KEY = 'googleMailCache'
const gCache = utilService.loadFromStorage(CACHE_STORAGE_KEY) || {}
_createMails()

export const mailsService = {
    query,
    get,
    remove,
    save,
    getUser,
}

window.ms = mailsService

function query(filterBy = {}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {

            // if (filterBy.title) {
            //     const regExp = new RegExp(filterBy.title, 'i')
            //     books = books.filter(book => regExp.test(book.title))
            // }
            // if (filterBy.minPrice) {
            //     books = books.filter(book => book.listPrice.amount >= filterBy.minPrice)
            // }

            return mails
        })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
    // .then(mail => _setNextPrevBookId(mail))
}


function remove(mailID) {
    return storageService.remove(MAIL_KEY, mailID)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function getUser() {
    const loggedinUser = {
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus'
    }
    return loggedinUser
}




// ~~~~~~~~~~~~~~~~LOCAL FUNCTIONS~~~~~~~~~~~~~~~~~~~

function _createMails() {
    // const ctgs = []
    const mails = utilService.loadFromStorage(MAIL_KEY) || []

    if (mails && mails.length) return

    // for (let i = 0; i < 20; i++) {
    //     const book = {
    //         id: utilService.makeId(),
    //         title: utilService.makeLorem(2),
    //         subtitle: utilService.makeLorem(4),
    //         authors: [
    //             utilService.makeLorem(1)
    //         ],
    //         publishedDate: utilService.getRandomIntInclusive(1950, 2024),
    //         description: utilService.makeLorem(20),
    //         pageCount: utilService.getRandomIntInclusive(20, 600),
    //         categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
    //         thumbnail: `assets/booksImages/${i + 1}.jpg`,
    //         language: "en",
    //         listPrice: {
    //             amount: utilService.getRandomIntInclusive(80, 500),
    //             currencyCode: "EUR",
    //             isOnSale: Math.random() > 0.7
    //         },
    //         reviews: []
    //     }
    //     books.push(book)
    // }

    
        mails.push(
        {
            id: utilService.makeId(),
            createdAt: 1744892980857,
            subject: 'Miss you!',
            body: 'Would love to catch up sometime.',
            read: false,
            starred: false,
            sent: false,
            sentAt: 1744892980857,
            removedAt: null,
            from: 'momo@momo.com',
            to: 'user@appsus.com',
            unread: true,
            primary: false,
            promotions: false,
            social: false,
            updates: false,
            snoozed: false,
            important: false,
            drafts: false,
            spam: false,
            bin: false
        },
        {
            id: utilService.makeId(),
            createdAt: 1744892980857,
            subject: 'Quick Question',
            body: 'Hey, are you free for a quick call tomorrow?',
            read: false,
            starred: false,
            sent: false,
            sentAt: 1744882980857,
            removedAt: null,
            from: 'alex@chatmail.com',
            to: 'user@appsus.com',
            unread: true,
            primary: true,
            promotions: false,
            social: false,
            updates: false,
            snoozed: false,
            important: false,
            drafts: false,
            spam: false,
            bin: false
        },
        {
            id: utilService.makeId(),
            createdAt: 1744892980857,
            subject: 'Thanks again!',
            body: 'Just wanted to say thanks for your help last week! Also, adding more text so this will be a loooooooooooooooooong message.',
            read: true,
            starred: false,
            sent: false,
            sentAt: 1724892980857,
            removedAt: null,
            from: 'sara@quickmail.com',
            to: 'user@appsus.com',
            unread: false,
            primary: false,
            promotions: true,
            social: false,
            updates: false,
            snoozed: true,
            important: false,
            drafts: false,
            spam: false,
            bin: false
        },
        {
            id: utilService.makeId(),
            createdAt: 1744900000000,
            subject: 'Meeting Agenda',
            body: 'Please find attached the agenda for tomorrow’s meeting.',
            read: true,
            starred: false,
            sent: true,
            sentAt: 1744900000000,
            removedAt: null,
            from: 'user@appsus.com',
            to: 'boss@work.com',
            unread: false,
            primary: true,
            promotions: false,
            social: false,
            updates: true,
            snoozed: false,
            important: true,
            drafts: false,
            spam: false,
            bin: false
        },
        {
            id: utilService.makeId(),
            createdAt: 1744910000000,
            subject: 'Invoice Reminder',
            body: 'Just reminding you of the unpaid invoice #234.',
            read: false,
            starred: false,
            sent: false,
            sentAt: 1744910000000,
            removedAt: null,
            from: 'billing@money.com',
            to: 'user@appsus.com',
            unread: true,
            primary: false,
            promotions: true,
            social: false,
            updates: false,
            snoozed: false,
            important: true,
            drafts: false,
            spam: false,
            bin: false
        },
        {
            id: utilService.makeId(),
            createdAt: 1744920000000,
            subject: 'Your Subscription is Ending',
            body: 'Your Pro Plan is expiring soon. Renew now to keep your benefits!',
            read: true,
            starred: false,
            sent: false,
            sentAt: 1744920000000,
            removedAt: null,
            from: 'noreply@service.com',
            to: 'user@appsus.com',
            unread: false,
            primary: true,
            promotions: false,
            social: false,
            updates: false,
            snoozed: false,
            important: false,
            drafts: false,
            spam: false,
            bin: false
        },
        {
            id: utilService.makeId(),
            createdAt: 1744930000000,
            subject: 'Dinner Friday?',
            body: 'Wanna grab dinner this Friday?',
            read: false,
            starred: false,
            sent: false,
            sentAt: 1744930000000,
            removedAt: null,
            from: 'jamie@friends.com',
            to: 'user@appsus.com',
            unread: true,
            primary: false,
            promotions: false,
            social: true,
            updates: false,
            snoozed: false,
            important: false,
            drafts: false,
            spam: false,
            bin: false
        },
        {
            id: utilService.makeId(),
            createdAt: 1744940000000,
            subject: 'Vacation Photos',
            body: 'Check out these photos from our trip!',
            read: true,
            starred: false,
            sent: false,
            sentAt: 1744940000000,
            removedAt: null,
            from: 'emily@travel.com',
            to: 'user@appsus.com',
            unread: false,
            primary: false,
            promotions: true,
            social: false,
            updates: false,
            starred: false,
            snoozed: false,
            important: false,
            drafts: false,
            spam: false,
            bin: false
        },
        {
            id: utilService.makeId(),
            createdAt: 1744950000000,
            subject: 'Team Updates',
            body: 'Weekly team updates are in the shared doc.',
            read: false,
            starred: false,
            sent: false,
            sentAt: 1744950000000,
            removedAt: null,
            from: 'team@work.com',
            to: 'user@appsus.com',
            unread: true,
            primary: true,
            promotions: false,
            social: false,
            updates: true,
            snoozed: false,
            important: false,
            drafts: false,
            spam: false,
            bin: false
        },
        {
            id: utilService.makeId(),
            createdAt: 1744960000000,
            subject: 'Hey There',
            body: 'Just saying hi!',
            read: true,
            starred: false,
            sent: false,
            sentAt: 1744960000000,
            removedAt: null,
            from: 'linda@hi.com',
            to: 'user@appsus.com',
            unread: false,
            primary: false,
            promotions: false,
            social: false,
            updates: false,
            snoozed: false,
            important: false,
            drafts: false,
            spam: false,
            bin: true
        })
    
    utilService.saveToStorage(MAIL_KEY, mails)
}