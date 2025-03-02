const { BotiumError } = require('../../BotiumError')

module.exports = class CardsAsserter {
  constructor (context, caps = {}) {
    this.context = context
    this.caps = caps
    this.name = 'CardsAsserter'
  }

  _evalCards (args, botMsg) {
    const allCards = botMsg.cards ? botMsg.cards.reduce((acc, mc) => acc.concat([mc.text, mc.subtext, mc.content].filter(t => t)), []) : []
    const cardsNotFound = []
    const cardsFound = []
    for (let i = 0; i < (args || []).length; i++) {
      if (allCards.findIndex(c => this.context.Match(c, args[i])) < 0) {
        cardsNotFound.push(args[i])
      } else {
        cardsFound.push(args[i])
      }
    }
    return { allCards, cardsNotFound, cardsFound }
  }

  assertNotConvoStep ({ convo, convoStep, args, botMsg }) {
    if (args && args.length > 0) {
      const { allCards, cardsFound } = this._evalCards(args, botMsg)
      if (cardsFound.length > 0) {
        return Promise.reject(new BotiumError(
          `${convoStep.stepTag}: Not expected card(s) with text "${cardsFound}"`,
          {
            type: 'asserter',
            source: this.name,
            params: {
              args
            },
            cause: {
              not: true,
              expected: args,
              actual: allCards,
              diff: cardsFound
            }
          }
        ))
      }
    }
    return Promise.resolve()
  }

  assertConvoStep ({ convo, convoStep, args, botMsg }) {
    if (args && args.length > 0) {
      const { allCards, cardsNotFound } = this._evalCards(args, botMsg)
      if (cardsNotFound.length > 0) {
        return Promise.reject(new BotiumError(
          `${convoStep.stepTag}: Expected card(s) with text "${cardsNotFound}"`,
          {
            type: 'asserter',
            source: this.name,
            params: {
              args
            },
            cause: {
              not: false,
              expected: args,
              actual: allCards,
              diff: cardsNotFound
            }
          }
        ))
      }
    }
    return Promise.resolve()
  }
}
