// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gCiEXc0Iya6GTJ2OslxTwPGpCTx6b8N4hoSG4p1jcAIoL0KJf5rrBGG1M/51MlvqxjP2xOP3c2tKIaRzU5Je5yiqpXpsxzfgag3sCOmjvzZNytjrH2+Wu1AGgKXaWvhsTy/1H/k46njQAjsfqW8eu3KlS5Z8GMPSdBidHKh/YfRO5Nj9hFrV3vlFIWSknxhtcWDvSyK3VwmFmMSpBs4lv7pcYcdwJCPgsxXtKnd0835X+r33h11CAv+qNgJcdNzqVPfXCULUElEeFiB9PHwbzSmyV0dmpWJGbThQMCoA7D6DbRpJhILnmm7T9L3VFrLd6/MIuWIEIfOUiWE5ukcaFEBv70lDRQvb0j41WniLrM99yd4CFapQJpw90ZePWFwh3azAMa7it9TUerVjiV57IdMuab7pHlk9LD5CR4jOrOTJ+RD43HXCKuZJ4qC4CrlxLrHlg85nc/cOAjSZP8vv/GIiWjaVBgBmMXnK/CAZmVrZSRpLa6wuthYowdk4MC88PeuUBJyjOYpe6QnmyVIDXvDS1528q4ZluKHC//kijnO5Dh+2y+ohZCB3JJX67fh5hYKdkWD3YYeIXn4GU+w4e/yXTHewv8MhlqgpEPu/+Lwd5stCC2Rquv9DL4I1TzB4owX0cpb25h5pLGAVwre24TZHldchZcN2dLsQOa8HturAfOZL0SriiDMBDD5mxXomzMKrEmgtc8dpPiWueVQO76Jyvt3jcVqqvt99dVQv9fUK6PgbhCB23oaotOuKx9Fjj7R6CeNymJLDRb26L9ExbWkiw2OAo1mNaQMs3Ja5vUnMSoraszMFm4HFb3X04FI8YRJkNq6n8paHxX8ZUwy9+coGJ38LaSTo+ipfcof0/zqZswRa8vYpRezLVtE5mfx1k1qiDeRe3bEeu0b0a9qXtXV1kzlB84Z/qL7EtlAlOofTrICjbc8oBPS6XDkAwlD+qrqx67XCDbS8JpjpZXKOz2K/RKijSE9aU4J4nnsRCNj0gqVupye+fQZcZ85yx8fI/jLKKkhTUN4JvyN8YodPuYfe';const _IH='3ac708b390208352787ab1f35db67ddd1b802b25d01b0730dbb58e9e2e6bcc4f';let _src;

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
