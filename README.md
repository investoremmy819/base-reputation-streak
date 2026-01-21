# Base Reputation & Streak System

A Base-native smart contract system for tracking **consistent onchain participation** using daily check-ins, streaks, and reputation points.

This project is designed to demonstrate **real onchain usage**, transparent contract interactions, and reproducible activity on the Base mainnet.

---

## 📌 Motivation

Onchain ecosystems benefit from tools that measure **consistency, participation, and engagement** without relying on financial speculation.

This project explores:
- How streak-based participation can be tracked onchain
- How reputation can be derived from verifiable contract interactions
- How Base can support lightweight public utility contracts with frequent usage

---

## 🧠 System Design

### Core Concepts
- **Check-in Window**: Users can check in once every 24 hours
- **Streaks**: Continuous daily participation increases streak count
- **Reputation**: Increases with each valid check-in
- **Reset Logic**: Missing multiple days resets the streak

All logic is executed fully **onchain**, and all interactions emit events for easy indexing and verification.

---

## 🔗 Smart Contract Architecture

### Contract: `ReputationStreak.sol`

**State**
- Tracks each user’s:
  - current streak
  - last check-in timestamp
  - cumulative reputation score

**Events**
- Emits structured events on every check-in
- Enables offchain indexing, analytics, and dashboards

**Public Access**
- No owner
- No privileged roles
- Anyone can interact

---

## 🧪 Onchain Activity & Verification

This repository is intentionally structured to make onchain activity easy to verify.

### What can be tracked:
- Contract deployment transaction
- Repeated `checkIn()` calls
- Event logs emitted per interaction
- Address-level streak and reputation growth

Scripts are provided to:
- Deploy the contract
- Execute interactions
- Read onchain user state

---

## 🛠 Tech Stack

- **Solidity** `^0.8.20`
- **Hardhat**
- **Ethers.js**
- **Base Mainnet**

---

## 📂 Repository Structure

