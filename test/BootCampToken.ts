import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { BootcampToken } from "../typechain-types"; //bootcamp token bilgilerini al, typescriptte kullanılacak sekle cevir
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Bootcamp Token Contract", () => {
  let bootcampToken: BootcampToken;
  let OWNER: SignerWithAddress, //sıfırıncı adres yani deploy eden adres owner
    FIRST: SignerWithAddress,
    SECOND: SignerWithAddress,
    THIRD: SignerWithAddress;

  beforeEach(async () => {
    //Her test asenkron olarak ayrı thread'de calisir. Her cagrilan testte olusur
    let token = await ethers.getContractFactory("BootcampToken"); //her seferinde token olusturulur
    bootcampToken = await token.deploy(); //her seferinde token deploy edilir
    await bootcampToken.waitForDeployment();
  });

  before(async function () { //bir kez cagrilir
    const accounts = await ethers.getSigners();
    OWNER = accounts[0];
    FIRST = accounts[1];
    SECOND = accounts[2];
    THIRD = accounts[3];
  });

  describe("Deployment", () => {
    //Verilen sabit degerler kontrol edilir
    it("is Name Correct", async () => {
      expect(await bootcampToken.name()).to.equal("Bootcamp Token"); //sol icerisindeki methodlara erisilir.
    });

    it("is Symbol Correct", async () => {
        //it-->mocha icindeki test func kullanımı
        //async-->gelen veriyi asenk olarak koy ve digerleriyle birlikte calis
      expect(await bootcampToken.symbol()).to.equal("BCT");
    });

    it("is Initial Supply Correct", async () => {
      expect(await bootcampToken.totalSupply()).to.equal(Number(1000000));
    });
    it("is Decimal Zero", async () => {
      expect(await bootcampToken.decimals()).to.equal(Number(0));
    });
  });

  describe("Check Balance", () => {
    it("is Owner Balance Correct when initial creation", async () => {
        
      expect(await bootcampToken.balanceOf(OWNER.address)).to.equal(
        Number(1000000)
      );
      it("Transfer not executed by  enough tokens", async()=> {
        await bootcampToken.transfer(FIRST.address,100)
        expect(await bootcampToken.balanceOf(FIRST.address)).to.equal(
            Number(100)
        );

      })
    });
    //Transfer other accounts and check balances
  });
  describe("Check Transfer", () => {

    it("Transfer not executed by  enough tokens", async()=> {
    await bootcampToken.transfer(FIRST.address,100)
    expect(await bootcampToken.balanceOf(FIRST.address)).to.equal(
        Number(100)
    );

    })
  });
});