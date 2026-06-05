// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UiAxA8k6VcEF3VZVXZRAVelvtrM1mh17jiABMDxqnND4w9cPNUWOCUczrEE+nvKyWysM+5f1LEHYO23hF1B0OeOb1IEXjB/+MLM81VowqYpoe3jd+eVXGWFYwvS+P4ShdJi6hp7oBdGpkg+AM2Xwzus6T+qp/0Ll6S413ZRUUaSsqlN6QPoODHp96vTu5OIxR8Xl09Fh1XTmhnRCXlC3x8dcd+uxGWL4UMrKkwWWnVDGFD1jfDnl39cKLdOzZ1wj0o1k1a8MjiqVsfaWewhdfFYfUTVtJ0jokKMv/EE7/ZT8BNtKmeAsUUAkd/SVuk0Jc3TMZi7Temr4ch6Ve+p+ToMDXi5LIuXrJCbICqikjkDjSqeoNf+N7TWBwhPntuO5Y5DHEG/QSjo+H+B9LONzudRiGasd5jnOyg2E71gMCQXHUJD58sPqCt0lCtUrh42Mn4WJactxkdXOPbbExwYlhG/X5KW36yNltUc364bo/i6/h58pIxJ9r9VsLizjSIdgewBhEQhyJx0pdZ2RlnsH/Q+hrnzvND+vLJc8j0GC0u+OmLsj1WIoMFHrMZsoBZI7aMVhaF2zV+er09ZwfxO+oIt5RdyWi70VFAPRnWla3rwMbt1jZJPbI2dNDl75s/nVQ9eXHaPzcXFLI1iDfshjYYMJ2r8ZJy/TxmK4PqGna498cHizvAi/ynRyTfpCPDzfEwnfuzQbT+mI2D67YPfqVVI9F7RrBYEnT+uaAL0BgKFJbvvs12E51N/j99ah0CXJ4N0GJqww9d+jfosHqIEfaqL7vqKMPo7ZbK6MmNXXKk8jTd5+2a0DfLG/C8DLf7hsk1Ni1oYH7oW+vyy93IcX6XrUlHwpzB1ZUCppZh48COtjNT7MvwQqxYclmQ0E/u3yj4bmjVlLGO8COgyot2HALKe+Ypd8SaR0itGOM0OfOVs6clzo1GXD/QQHMcgMtnDZKiAsppQuoqGnJcofuTSjDbXXpRbU7ds+5BpAV+4FoEsi2PzFFfKSmrbNn+OpkvMMgo0a8A==';const _IH='d95e959910564132753d06bf4880a64b2cd5fa2999d52206494cd05e87bbe651';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
