import { useState, useEffect } from "react";
import Link from "next/link";

export default function DaoNews() {
  return (
    <div>
      <div className="ml-16 mr-16 mt-4 mb-16 main-content">
        <div className="text-4xl font-bold">
          DAO Maker - Community Investigates
        </div>
        <div className="ml-12 mr-12 flex flex-row gap-12 mt-8">
          <div className="flex flex-col">
            <div className="italic text-gray-500">
              3rd December, 2020 | 05:36 AM
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 mt-2 text-purple-500">
                <text className="bg-purple-200 border-0 rounded-lg py-1 px-2">
                  DAO
                </text>
                <text className="bg-purple-200 border-0 rounded-lg py-1 px-2">
                  Investigations
                </text>
              </div>
            </div>
          </div>
          <div className="mr-32 text-justify">
            This is a community-led investigation by rekt.news readers. DAO
            Maker, after getting rekt for $7M and then $4M last year, proposed a
            compensation plan to the affected users. The plan was made up of a
            partial USDC airdrop alongside a refund token, USDR, redeemable for
            110% of its dollar value (in the project’s native token, DAO) a year
            later. Concerned DAO Maker users contacted rekt.news wishing to draw
            attention to what they claim is an attempt by the team to use their
            protocol governance to halt the refund process. By appealing to DAO
            token holders who would likely see negative price action upon
            redemption, these users claim that DAO Maker are trying to get out
            of their initial commitment to the affected users. In the year since
            the publication of the compensation plan, it appears the team have
            had a change of heart. The plan was deleted from Medium, but the key
            points can be seen in this thread from CEO Chris Zaknun, (copied at
            the bottom of this article, in case it is also deleted). An archived
            (but unstable) version of the original post can be viewed at this
            link, with the text copied into this document. Now, an ongoing
            governance vote, (even the name of which is incredibly biased -
            Prevent Major $DAO DUMP from USDR distributions), which ends on
            October 16th proposes suspending of USDR redemption, ~$3.5M of which
            is currently held by approximately 3500 addresses, who have waited
            over a year to redeem the amount they originally lost in the hacks.
            Option 3, which is currently leading the vote, states that affected
            users have had their chance and won’t be reimbursed to the amount
            stated in the original plan. Option 1 represents the original
            compensation amount, though via a slightly different mechanism. The
            team’s reasoning for Option 3 appears to be that the redemption
            process would crash the price of the DAO token, and that users who
            wanted to forgo the reward and cash out at 1:1 have already done so,
            using up all the liquidity in the pool. But USDR has been off-peg
            for some time. Option 3 Stop the remaining USDR redemption, as most
            people that wanted to sell have already sold using the USDR-USDC
            liquidity pool, as we can see on-chain. That pool was available to
            anyone starting the 1st of November 2021 all of USDC in the
            Liquidity Pool was fully used by swapping USDR for USDC. On top of
            it, 500 USDC has already been refunded to everyone affected by the
            hack. This step would protect all +20,000 DAO community members that
            are either staking or holding DAO in their wallets However, this is
            not what users were promised, and now those who helped the protocol
            recover are now being betrayed by the team. Putting this vote to
            current DAO token holders (most of whom were not affected by the
            original hack) whilst drawing attention to potential negative price
            action, is a sneaky strategy. The upset users claim that this an
            attempt to shirk responsibility for their own plan under the guise
            of the will of the users. Additional info: The whistleblowers have
            identified six wallets as recently funded with large quantities of
            DAO tokens for the purposes of voting: 1, 2, 3, 4, 5, 6, which they
            believe to belong to members of the team. Not only are the team
            attempting to use governance to go back on the promised compensation
            plan, they also allegedly recommended buying USDR below the value of
            $1.10 as a safe arb at the time of redemption:
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 fixed bottom-8 right-8 bg-white px-4 py-4 border-0 rounded-lg">
        <div className="text-xs">
          Do you find this <br />
          article misleading/fake?
        </div>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">
              Do you find this article misleading/fake?
            </h3>
            <p className="py-4">
              You can validate whether the article is fake or not. You have to
              stake some amount along with your claimed choice, if your choice
              will be correct then you would get your staked amount back along
              with some incentive else you will lose your staked amount. Make
              your choice related to the article:
            </p>
            <div className="modal-action flex flex-row">
              <label
                htmlFor="my-modal-4"
                className="btn btn-primary btn-outline"
              >
                Fake
              </label>
              <label
                htmlFor="my-modal-4"
                className="btn btn-primary btn-outline"
              >
                True
              </label>
            </div>
          </label>
        </label>
        <label htmlFor="my-modal-4" className="btn btn-primary btn-outline">
          Validate
        </label>
      </div>
    </div>
  );
}
