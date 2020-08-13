const Migrations = artifacts.require("YearnRewards");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
