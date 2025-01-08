## TX Link
```bash 
https://explorer.solana.com/tx/2iqCs4NXr9Ccuz8CFd9edzpsZB6FxnRssSTmjkhjD3vJ4Vx87SsHVPxFbmGJWsKxYMPigNGFKMjPXi6WDegAkUdk?cluster=devnet
```

# WBA Final Project

## Overview
This project is an interaction with the WBA program deployed on the Solana Devnet. It demonstrates key concepts from the course:

- **Program Derived Addresses (PDA)**: PDAs allow us to sign transactions with a Public Key derived from a deterministic seed, providing additional security.
- **Interface Definition Language (IDL)**: The IDL is a JSON file that defines the public interface for interacting with the program. It contains account structures, instructions, and error codes for Solana programs.
- **Anchor Framework**: This framework simplifies development on Solana by providing a way to interact with Solana programs using TypeScript and Rust.

In this final project, we enroll our GitHub username on the blockchain to mark our completion of the course prerequisites.

---

## How the Code Works
This project interacts with the WBA program using Solana's Anchor framework. Here's an overview of what each file does:

- **enroll.ts**: This is the main script that connects to the Solana Devnet and submits your GitHub account to the WBA program, proving that you've completed the course prerequisites.
- **programs/wba_prereq.ts**: Contains the TypeScript definition of the program's IDL. It defines the structure of the WBA program and its functions.
- **wallet.json**: Contains the private key of your Solana wallet. This file is used to sign transactions.
- **tsconfig.json**: Contains TypeScript configuration settings, including enabling JSON module resolution.

---

## **Setup and Execution Instructions**

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:Stevolisis/turbin3-steven-joseph-final-project.git
    ```
    ```bash 
    cd turbin3-steven-joseph-final-project
    ```

2. **Install Repo**:
   ```bash
   yarn install
    ```

3. **Generate your wallet.json**:
   ```bash
   solana-keygen new --outfile wallet.json
    ```

4. **Request SOL using you wallet public key**:
   Head to https://faucet.solana.com and request SOL

5. **Run the Enrollment Script**:
   ```bash
   yarn ts-node enroll.ts
    ```

6. **Expected Output**:
   ```bash
   Success! Check out your TX here: https://explorer.solana.com/tx/<transaction-hash>?cluster=devnet
    ```
    