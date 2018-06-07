class VotingCtl {
    constructor(eos) {
        this.eos = eos;
    }

    async vote(voter, producers, proxy) {
        return await this.eos.transaction(tr => {
            tr.voteproducer({
                voter: voter,
                proxy: proxy,
                producers: producers,
            })
        })
    }
}

module.exports = VotingCtl;
