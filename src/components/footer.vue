<template>
    <footer>
        <div>
            <span class="copy">&copy; 2019 Univers Travel Ltd</span>
            <span>
                <ul>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Cardholder Agreement</li>
                </ul>
            </span>
        </div>
        <p>*Balances in your Starship Spending Account (“Spending”) earn .01% Annual Percentage Yield (“APY”) on deposit balances $0.01 – $1,999.99 and 2.0% APY on deposit balances $2,000 and above. <br>We use the Spending account’s end of day balance to calculate the interest earned that day. The rates are effective as of October 15, 2019, are variable and subject to change after the account is opened. Accounts subject to approval.
        <br><br>
        Checking accounts and the Starship Visa Debit Card provided by and issued by nbkc bank, Overland Park, Kansas, Member FDIC.</p>
    </footer>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
footer{
  background: #192735;
  padding: 3.8rem;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  color: white;
  font-family: 'Poppins', 'Josefin Sans', Raleway;
  font-size: .8rem;
}
footer>div{
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  width: 90vw;
  margin-bottom: 2rem;
}
footer>p{
    width: 90vw;
}
footer>div>span>ul{
    display: inline-flex;
}
footer>div>span>ul>li{
    list-style-type: none;
    margin-right: 1rem;
    cursor: pointer;
}
footer>div>span>ul>li:hover{
    opacity: .7;
}
</style>
