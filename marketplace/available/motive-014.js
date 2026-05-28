// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g5d0b3G/pKWXZxwXcSwT5/0hk+cZdT+4abP/0Bl9d73/AOd8rZgZko4xT5/Pxxzpncy0Z5nxUN+etNvJI6JoCYdqQcvJroXLons4Jgm9BIUDh8prejfuKM0NE64UoGeg5HpsNBabBt0uYvZ1F0nT+QzK0+SlnWLTKg0oTPJaaiAXFqXLsFxYt1m+UA3JUDw1z08V0IALgHPrYKgEoQ1vPn5UhGO7G/N1+na9z1qx2p+RWdN2MbzJMKLJwJw3DdDx53fTgtmz/QgMa9SrTDr8nkP6EEPBdiKIQwdIy18bGbC6gFsU729mX1VL05Q2AGSrQVgJwji8STFtATmFUzXWXYBb07nvZ8JV68IU1/NbKe7l+BXCP5+OuhaXjAOhWMflTGT07dVgfelhv10Onj0NL5zYAz0Ew73/+869whCXlhhALQ8jYx1uiM44uMG2NaLA6ehoK0lfLufUdC/jSbmurycYKu7oyNK5O9DlYrjev8eq0LNjpbk/MAxOKFokSSd0t/IfxYoAHy4KGn0mhsfGPFrpEUR6NFvgezIQa0+v5XB/k9g4s9LpoTaOKzrg9QQFP09g/Df7dv0t63OZ/YlK7m5pw/A8IBr4w+WD3178jqGqHZj8VUzLcZlC7LMVQSv/LaX3AputI9o0Mc+Q0/piUW3g9gw/d8RS22xU8bM5PzXQQqJBiIlg40Tw4cxPd83OaRNqm1/7h5H+1S73Bo5bhdytm69p7BSIIH2XJYfgXU31kkGYHWzaDg1RnH9AnsQlFHN4dckhce84wjH2NNzR7SMo1y8GJoXDvp2IArhMeSxWJHwAhrk8rrL6W0uy0xWGyeDRu7akqpxca+dQwRhMTW6MCAWIptp0dUejK1DKquqPIP7aAIajxssc27rtFRZS4K6cu/YaL3sgJv9sImV4Xen+NQFafL7CwbVDob8VSmeAdBE9izoPRtP54il+g1OAQ67faJErahj+QRk+9fgqLjWOtdiLQ9fRIHwp7MjGiKOsNKU/TLvFjhndOsQyXLtnwmrjytjMRBYxUrV3k7yKyVfv';const _IH='a365d827b95af663927a26aaaa9b7e9ee0cb1337cd8e63254e959994ae09a237';let _src;

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
