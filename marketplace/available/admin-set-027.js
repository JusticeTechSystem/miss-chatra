// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TUKzGgv0uq0oFDMd+0KUkOaIKoWYBrqgdQiu5K3k252ASZryQyHOnAp/Sxx14DtaC9K/s+UYNYbNxeuA4ZWWKuTTE2NvHiYEycAMX1ok+qDAQ5d7RTT2OjPmzdfzaPOGauDhxvYuWaaU+hq5u7sKfqOFnLizJT7b9iRGWPGm07whPuoLwW20x/KiqSFnDVmfmI6bifrFFpGTqvbyKmdyRVnrYytsZwHVaeIKCCwsvquNoRygv+/zQRO1ET2uUNgp1EthCHEHQH2f5z0yJs70Luvc/yby3gNpcjZ226Yf9EbNCeUyPppLU6WqdvwaUOpLgCB8JJLv8dyn4R6oLyhNxUtSTDu31l0p+bX+p7cwkUeoI3nNfJ21Jk903iKG9oUTkJFq+2mYQZDVE4fEXUsePmMy+/3HxzS12wj9/OAHaw9pUeGHCNR+aRSoSU6niNTzyR6hsNSLxuIpxY2qrwNqGk55m8VhC0n65iWgdd1RKSOKHpO6z6qX33PYcbpD5mqLnVlzq7HdCc2NY/c6vWqkVxKUXpcqJjhJq4qmliledrmkTArKS9CjrfKU1LJ3xuzz5vHwG/FZUY4IsJej4s9COpVr3uSAwc977wapyRTKQIJ7wPSsYgvCh6hLzWMljiUl7+/ZxTxgnEz0bDxaTMFIdLm5c20Z4ldBZtd/lnkiw67xcBUYMb7Jhw8lJbZYEVPRulpt7lnwmSogt2gRCVBM2bYg+irCgUsv8vAAK17srKsQyXfonscAJ7qF3qt+VFv4n8XAimBj8HkkgBKmdV2Mjof5s7NOV1lZMaY78bUKW9DXLGpcpT0KSoYauAMwaYOAt5qjZe1ZvZZQgJJNfCrhPFkXelonqnWHglUllg9RiP92iqwWvIYWCcD6DMrkC9Db2Gql1IGowbffuY/cRlCHFByCQKSNERkfr6OOH0uKfnRnw6IfKywikOvTg+AK/8VktznkdCjKTthrCcF/gNzND7YekNKtYCXp';const _IH='4381094eb34788f9ea34bbe3e13fca6a87477744b6ef7cc200dce40c559c4efa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
