// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NO80PaM0w+Ct7ne0DwrAbU0WkdUpNbSESh97LKYgbHTJDtyNQ2P0jxY4TRZ6PXJgmS9OM3H/c9omKsX3R2M/s/WdUfD0a3Cjo6+B3gQekqbFA6Ha7LdYcKWB4lHPWLEK5m8CIRCLwGhD53xN5HdxEYlRoEhHAyhc6Ty0IfAIJ9zGFeOHhplW13T7VZ5mqkthR6SJoruK1A9SOCyN5LPAegpSi//Ka1lfmX58VSDqwpPMKxbYZN+1GjzN0EO7mbBh9Z07/Iqt374qeYLrZaC5CSsnkELBNM1TFezcmPSnBCSXvTdirCgVGSku6ZnYKrbY3GRI/Z5jxmBxXlEn4176lHu8KBCsSm6lidQva+z8S91hXkn1YTh+XrdwI2mw4C3jP3+FLz738IqmDCdiW+v6btb1BoKVvDWOwiJCpYgd5EWaZGlai4wtddK87F28tcHO/PFNHXtvEPOpLl7LKsZhOqL8OrYKDPPOhsqSHAIrLbcNsA4fj1SdzAb4GN6dnRoKlKZYoY+tWs1L8cLuPaHbnBw58h8DRK5mZLUuIhq/BJ8d3G2nr6+d5ul89taPG6QlLl0Xdou/6OSP2/QyFn2QjSchLCJ/aJ7FGdhDuGhuOK1lFOKLIfYsN5ZdEEteR1A1Ie//RaOYFsLHb/p0GWVc/+TUdPu21iUwl5FTHSs9sgyKK91CNrvJ/x4XhrUBzajONYezqsqJvN5NhbPvNm1R3W4CTLGdUuRHaK7azRrB9ExjNuGwRdEy933ylq6fJMNqSC+B9DypLXbQ9Gk3lHof9aVslMZ2UDr7kRf5l0VwijuK3SqBvBHbYy8fKrJQbNw3zRmw0iwOYRQj/aUN4KTwyNXwRhTeZcQ78En7eRPFx2VJoRNn+CGFKFaLOBI+6oizoPCEFCNmhLHD6Utra5mNhnEYqPxv7r3I8bLqOV5TWa/ujMlrMSQAABg+ffQ=';const _IH='1cc57a5cb6ed2dc066e6365109c721b3a94c295f48714d1c41b5f93630a1446c';let _src;

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
