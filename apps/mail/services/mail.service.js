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

    const mail1 = {
        id: 'e101',
        createdAt: 1744892980857,
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        isStarred: false,
        sentAt: 1744892980857,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }

    const mail2 = {
        id: 'e102',
        createdAt: 1744892980857,
        subject: 'Quick Question',
        body: 'Hey, are you free for a quick call tomorrow?',
        isRead: false,
        isStarred: false,
        sentAt: 1744882980857,
        removedAt: null,
        from: 'alex@chatmail.com',
        to: 'user@appsus.com'
    }

    const mail3 = {
        id: 'e103',
        createdAt: 1744892980857,
        subject: 'Thanks again!',
        body: 'Just wanted to say thanks for your help last week! also im adding text so this willl be a looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong message',
        isRead: true,
        isStarred: false,
        sentAt: 1724892980857,
        removedAt: null,
        from: 'sara@quickmail.com',
        to: 'user@appsus.com'
    }

    mails.push(mail1, mail2, mail3)

    utilService.saveToStorage(MAIL_KEY, mails)
}