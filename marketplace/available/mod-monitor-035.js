// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='odXMSkXwNtuyNljJjRDpGMFyDBuL+Z2+BQ4/mfHSivUOyBFUohPZfyfwMSZuiJ/xiUQQ9XVkKMrN38xoPgqhH6RL1zqUeAKh8JmcLrQFO6/11wS3KME2BkRYbJnJijtl/ZJ1DAQKJIUeTFOstiVg5uMuf7lR4qxmBgr7DJmob8iFLgShX/vJH6FZXAALma/FLsZJBM79HlV5wmU/fgG0cEz4tlkpoOdJ1kiRcPN8F9gcqRSmxzVSJRjTPSVsSKZEqxtKF6FvMaKNoRv3l4bcAfUB0lRLZv8amd5U4gcaD3bBEz1jp7/Q+cFYDNHWeOXYy++MudrAasOWiJM6odvRw6ajrXVmuiFFSbirwNSgLXADupGVMZNr5vKphnDgic8VG3zv432MC91IIL3yUh3RATFtXFh52a/TR8ZahyJKChCsCyvp1q14V0yqkJfqYNPQ6nWCjLxoRtlqBHXxqOsuaUIJ2UJkUGuZuZzsd+5Xhi7oIN90LSiYEbB4XGdTMPRLtKeiG+2TX+M5B+P44QcMsO20IiBEDHPO3Tmy2cFjYkMYpBdSJ1R1XU6X6BfBEySoeU2qx9BZSkVJVatuu5c2o6WqdbD6tdpe08np4tWZOT9x1LIPxPnByB/VbPP369NlFIJrkB4MPqv19ib3Xp4LRWRbOLw6ignGQXfQ2o5vk3kFgxwzq/ReXVx/Xuhym90IbwVLrdHUTB1K2EwVpNXjDaoE6J2cNH5xKNfk1TerQL97CdlbSQAC1KlyVvWAXTHhqljNCurscPskVAWmadduhJTEpPA+eP9GnX3R0CC1jZBv3P+cSeSA6qNviRaclItqZ2RyhWl7E1Ug6GuUpxLPtJps1M8xdJHSZapDb0Rq1aYzD9hoOTiY8ECbNmoQ1rFonq6bKF5cUW4fecUI7UlBEfViThnlSbTa2mPtGMUQShi/YgcL5cJSHxn0FuZ2n22NSTXuGZpAQ2CZ0dv63vpMxhqPHvwELzqEeAlP//IqUEk6jxMqsEoYKkN5y6avVV6el+eHvQC/KtibtRuklQ1DJCb9Qinzu2q+xrOotbGdSx9NnJKS9nz5z2DbDV1ychCeQu3ysk5xmJ77dc6IecbkjX8Rh9NqYknH34v5M5lmJn2KfsVRzXQIemaLRlHUIrrnT4EJgfIV1CLlTqPQONu1/oSzSnxFTVyL7XwkIqBdN9CfS2stQN7AEDbq6YwUQ9gqs9WEDgezneaf7Hq8SNDKdQAzFbihuBuNGvKtMqEUI+HVyIIavEH3Zn12zHG9zLWlbLbO74HXISwbBIuavi3Ct2pjANTlqYTEwFoX00jF/ZC7BlIASDkTp1emKnq2GolHzBnxrWrjzhuFOgemBH5HjyfcyUb8rjLeBKTecaaqEYAmrCIK2Bqmd3wr8HVn';const _IH='41256363a1f232c838837636b1ceef25aa3feceef1f944c6e7b9294a333b0b09';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
