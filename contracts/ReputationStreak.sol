// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ReputationStreak {
    struct User {
        uint256 streak;
        uint256 lastCheckIn;
        uint256 reputation;
    }

    mapping(address => User) public users;

    uint256 public constant COOLDOWN = 1 days;

    event CheckedIn(
        address indexed user,
        uint256 streak,
        uint256 reputation,
        uint256 timestamp
    );

    function checkIn() external {
        User storage user = users[msg.sender];

        if (block.timestamp - user.lastCheckIn > COOLDOWN * 2) {
            user.streak = 0;
        }

        require(
            block.timestamp - user.lastCheckIn >= COOLDOWN,
            "Check-in too soon"
        );

        user.streak += 1;
        user.reputation += 1;
        user.lastCheckIn = block.timestamp;

        emit CheckedIn(
            msg.sender,
            user.streak,
            user.reputation,
            block.timestamp
        );
    }

    function getUser(address _user)
        external
        view
        returns (uint256 streak, uint256 reputation, uint256 lastCheckIn)
    {
        User memory u = users[_user];
        return (u.streak, u.reputation, u.lastCheckIn);
    }
}
