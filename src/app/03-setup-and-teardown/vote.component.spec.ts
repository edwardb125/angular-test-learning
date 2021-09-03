import { VoteComponent } from "./vote.component";

describe('voteComponent', () => {
    let component : VoteComponent;

    beforeEach(() => {
        component = new VoteComponent;
    })

    it('should increase totalvotes value', () =>{
        component.upVote();

        expect(component.totalVotes).toBe(1);
    })

    it('should decrease totalvotes value', () =>{
        component.downVote();

        expect(component.totalVotes).toBe(-1);
    })
})
