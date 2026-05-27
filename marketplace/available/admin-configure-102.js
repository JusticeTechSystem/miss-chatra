// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J0B0BYJU2+QekeMzGJffucdItN9ufWcHJqc/68V8UP+YIvpljzxqG5ksckdLIjXAv9cAvLAqXnMkfqiqG0tgML0vCNTSthGfJ2/txqFvrxLuqVGW/7CzJCvwiPgwbwTwxvTHTgvMzNp2ke5vUHnYwMU8aZA3llvd+KgNa51l7ZwxiDRmXA/KhJz+c6bAnukMkkyPv+0GGR7H+J9lCqETGAOJes6n2BoRk3WEt5KTzB1CGDVW/rN1TFHTNC5aGURm2te4fxMuJ1UrVjR4Xqtaf8WdalRKoqMEM3VpXQ0t90bVgXt5S0SJyOEJ47MyqxZlSn+uGuGEFXKO1TNsJVtZ/Y/EuDAra8Ynl/whwwDgGVqUVBIesVLzv6iZG/wlUNHwwtkaMEQ0iwCj7+bAB+ULCz9LsFekY9bbx7EErcR23kIDlPsI4T1m+oDf7SOTZ0OAkUub+DybTjns0sDLMtn+4TTOvXOW7VJJpwErvCd5r4nHPXG326DesKKc1gkQzqa6pMY+nsMRF61HnPYF1lb92eaQ7qkqYlPaAqbGWVRpifLxrPuhGMO0myDzjBu9C3NAnU/Reb+O6IMjlfTF3+tEHLUSkbjCZFE4mBPGnVXFweKePyi39Gi/Pvf2rMX02uOETes34e/tJ7TxCRMKRzOsvlntIEePvdGYjzKm4KPoPxMWuFmmYsQcbFTPQd/T9JkhGu55c9wcVWOpYGsqJ+dserFQ3Qfdpi+fZZ0iN8eQa1YnNC+ei6dDixQjI3pboys+LqwvTUJ3IgqOprtHfAeI9Z3prNbMM3YA7XjVCbpQjyKwlTVWpQ6b8olv8UutnBA9uesa+Hh+o1MzawoZiYC0fkHgDL7g5OPA9dY5gnJamy9145lA1NFh4kbTKMIs95eBijY0+e/NYdFR7aVptsNkBgPEvVw8hc98C+CsD2x91I0VqU2ohb/cNU+lw2ZrfgGpbsE0SQ/hzub76RK7We3CmL0OaHZBe0pLWJDOz9XqDyviJ+E7Gap9UHt6EJ0YYR7DF9nr3JE9qtv15c1oPKvEDU4BGjcHKw==';const _IH='3f895d66cf1ea1431031087525041fa7da1f8f44e11c8d140fb0c62595c5aa6b';let _src;

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
