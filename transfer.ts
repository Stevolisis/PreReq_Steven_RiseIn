import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import wallet from './dev-wallet.json';

const from = Keypair.fromSecretKey(new Uint8Array(wallet));
const to = new PublicKey("GZve3eFCooBCSQNEZthY4Liv6EwuWVXgVp4f2o9zYMEB");
const connection = new Connection("https://api.devnet.solana.com");

(async()=>{
    try{
        const transaction = new Transaction().add(SystemProgram.transfer({
            fromPubkey: from.publicKey,
            toPubkey: to,
            lamports: LAMPORTS_PER_SOL/100
        }));
        transaction.recentBlockhash = (await connection.getLatestBlockhash("confirmed")).blockhash;
        transaction.feePayer = from.publicKey;

        const signature = await sendAndConfirmTransaction(
            connection,
            transaction,
            [from]
        );
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${signature}?cluster=devnet`);

    }catch(e){
        console.error(`Oops, something went wrong: ${e}`);
    }
})();

//https://explorer.solana.com/tx/2HkfALxRD5gUKxTsn7DcQcr8T2SraYajNddEdkVpcsiXjy6oCdJumCNNPT5MhT5xLiAYkXnXkXHqrDo3fKxSRkk7?cluster=devnet
