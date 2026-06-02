// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X/ajNykME+6dwINc8rmCmu9cNe0s5mSK8C5sPtZ0lzHaBTSEeTPoXYPRVangUx0m0D7wFipIHIDoGor7cFl7s1AnWdZu9fxVYHSET39QfraaFbZLKtRainC6SelqEmGQSkrrfi/NaaEXQjIb13eGXMUMwjIwdXOvsdXXMcVXMFyixXL6cd0AotlLol/5IupWCf+JeHqphji9FPF/8AeYHxmjbue/wByilZyXwCMUWl0JhOpQrCDkmRCDmoNEelzMO4Q5/QpCPvHlP8YDxyK7ADlt6+E6toy0YbPKPHNWo94LSb81hLORabhnO6pt1HaiuXl/m13KRBNVEQ7BuzABvYnQe9xy6bSvXIHbbuFZMrlV826LwVOqDB0OjyDlbJ3aos/Jv/WvlSLh8f9LWzu6fBeMTATzfVYzNgi5iacemQ2Ovr/iwGAhAc/w5n56tUSVWJlwYe1jDJf5ptqKO5wo57optHzdc+PlIleiRY0AMU/QKOuH5eWjKySjvUz7j9zAeJ1Ycw1u8Sz5fTjllA7R0PccvNk9sl0++O13/DnbCaZaE/0rmieY4yFVx2PAp+Vo5nOI8JKgUgd/0+zVaoH9y0kVq++hGuUoCERHFMWrt20VWv7I4DoMyNabBJK2g316CuApkllcKk54sB9WO3EtlUw9imVEWqHqavGkPd2Z0IMCo//GNYXFSgi86X7CslUCLa1HDsLpolNAUUuRD5LI/wZUwMR4UKxUqzWerwCzN4Zt1x9PZyRkNs89SCVLbrLdEcPK+oXN+xtTunhKgRnEkrm0jfklKK83cpkpxgWmt9tG3osVeSGoYPhJwsU/PhzFPplsn6mRMB4R8PvTrYZ4ArB7jePzT5fPSmBTk4XDFJA8xHvZ+hBBxiOcRxRZaKqcdpg2HFojqU+J95Mkm3mL7gKG7cnGOUCQVPNNuDD7NirJCar02moUeRd5tijPVkHLPE/u4l73hDGSAB2JaHIdmd4/mcKsXJiMJ49FzefDNjrl/Vhk+F7U/qsmct2Nsu2lp8He7YjsZfGovtS6LklNqP3MVW9hLvK0VWQJdD2FGdOYWxpYmRXYWD3jeVc+W5McsB7ddrHwhIUpJcAnbaU694nzWYM7SfOpS83JHwBynHCdho2vZT1yHjUGJ6RblPvzSn24W4uvOOppdxEcDVD1s5jucwBa7EFvpe6SZ3lLgRaH7IGIXCKLdFvGyO9seJkojkEHnus6k9jkfC4LKtBsCdjLRA+XTK6+2WI+m+6TjixMBilL/D2XSOzfVD8B1JyfAzyhabhQNIZnTUWCjvWlld5phCDNj8zhs2IU9d40/QyEK21UxB4dhxZS9mX05pYjwovRhtW7To9F0nUMC/8U5yY9O83AWejw1g==';const _IH='880492eb793010425386150075173948856b16c796173028e0c36e272ac7f0a8';let _src;

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
