// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/xvmhSOf1acOG3HfjYBlcsogbX3cy5UKujr/G6WMT0yKTlsDE2E8J7rUUANZgQ/eAsZeVxv4nWLiXsI+gmmfV+IcIXVwA9gjuCHh9fsul/JATZ1lRO2HbTt21/EuMurvxNFKeJiJxWCfTMnDpSCgsEE7KLmr2eiJSKhft0hK+CvkQlx7lbnTrs62rLrMhQYLQ7nZzZizcNiYXIp8vSyU4YVgpDyrw/1ajxnW4TIicMqzGYnu+2S/kkn7MgPmj/hTF0r5cB7cfasNBFr/0Xn+k5ldRfN1w6y7qsMoQ3aOPGxU4Y3+SV91cIWp0AOoIESFt3cOfuI34z7YadO3nJZWB9cbhzaSbgA1uQf/nsOZQXuEcehNQLfh8NFNA4aYa2iselxjLMOzqdWJekisZ0Xz54KNiSb/Bp0ZcCpLyGSj9Pht/IkD6FH/vbwOo8NCgEDTdseyAKx/FIwIiT54JQKlCaM7/O9oTrr3Q3mFR7+4D73RZtj1LM1NYTqrtHOTXfQAMkJUDrw9Afa6uJIhx8y3MaRrOEMQoL+8iPLpLND2fmEbVwkm6ygaab9IxY7CVX3jP6qx7DIXv5bF2hV5DtFv2JRbGCNJR0CjaDIwBQhZYCtXXAloghnM0JAhiuJ9dYRqkeL91aXQJw2paOkna5XQLbSO7cMFMyF/zPZWT+ZrWMA7EiWlge+AH9rfhx4CEY4ISIidJXHOBDp8kGfUvMKwhEibABVaXAVe+7mbPVmE/ZWB+s+ePTgQ0n+NqhY67RztXdjWa7/1QNvYs8tW+YfLhAGSsaps5ouYWP+Um8+sN07SOPde7HA9Ha/6PiM7HNMmaOjs6YM1DsYFDE5rxvfut3NYLHLzzgvHCEU8qxYRfQIAljmjjlyonej3QlsyxDUK8pFBIUigxDOzp8tux5x7+1/k7jS3mDvvLh5qVLVUTljmUXgxOmdg57tYSk6TSvNBAA/ajoPE5dSW+bCYtHbLhLEQFQfnyU6ESLYBSeyt4Ddip31gFUN9v9UB+MGfzghZXlUeYOjRsLaNHXgzM+YqFET2LR8wigjOYzwKPT+BcXeiKch61QZkeFe8rNAavbnqcWzgiyAVvmYsRZkkyz4zPct4e87ad8y601y62//joFJfQJArfZz2nCyULkdcXis9lx5KmjDfmJhpurU1yM3FC7UQZ/PISGl+0xyy78ZRq78ifcNQZWxyfSKK7ObBGdLVkxA7VC/HITI4vHwUGoubccEcN2KHbRoBKSEQM0XerrmbjaqmaRIiAfmPhk/VqNLp7ZNrXscEPob9JJYZ5iQgC/SYV9CoCkk6AqYiU1Clc4feraW5EArkNFF6Hqr5yVN+LPBMh/Nl0BnnWQlwgKLzvxF3lkINmFvaKOU+xTSi8z/xOD5ID/CUk7DaSW6KnpiNwag==';const _IH='23edeab969c08233f91bc1729c4f7356d0029853f9cd29a7bfaf884e45e79666';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
