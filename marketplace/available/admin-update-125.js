// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7CbCTs1W+LMrDIA8eHTzLDGqDP/KZx+lxaclfZRdAmFRjtXwjqm45+gmed7zRtQ2bUG8s/j1dN+o93mEUFEoFutTmQ0qCU80Oli4oHPw8uJ6E5c4uw75QZaOvd5TIL5f0h4hrkgpK8xQPoLApG4KjKxSBYgOOILm7m44/Wi5s+0DJOMZxc2wwA5yjIZ3w6U+fkd18279DVM4hY4hZkFNxq9Y08A/vhKAkzfre+Mx5m1ESfBKO9DGTpr16vqRqCLfihDZByt3m/p1u9CeA8beqv1sjF9JQeO3gx3jWt/jGV3++QqUlcSEn29DUM1YprSb2OOVZhdh5BHDC2WVHJbdmr4OlN/T4u+ixf1FCXuXZAgykG0ADqCQToVGq6Quw1K+zGdJX3FNwcUJWmquSWRltlSAREmIhDJ5v+iHwORQ3SaWrCeAQwXErs03BkkARDMNhnQzPafeKQdEeYrq8DTlYj554jvVZHPDaanPJVaDLyOpQy2CZxrd7IDLVCSG1suufTM8z9GfTsd3VfKU+DBugO0NfczVNS1SfGXb7FrDzMcyj2WzB7U2PLIJ520GhKxe0c6fP51Na4n+QMgTLVaRTA1UTiaG1vDCt81HOBvMtrGtVtXiqQyQkfYbp+wl+eDkP1s9RlxsmEAUUsXLfZXbfdCwwJWnSHtCi95dEuMZLHYYWs5/ziojr6eYqEfTxGlwHgYYKYMCKAKArkWxox7JRVHktLdBZg9dVw9wreeSk2ZmdDiVk7TuQEbUOMFiijpOpNDXVuOrcDTwjbdY0egjr+n5i/PxaBnUP2QBaXnHQjEN8lgjmxmiknTYkjBf9lWdRnl7kY3bFMjkz9HwBE9l0M9sdFpJpfu1MzzM3lE5tSmv18rXIYWRsH52JwduqKAEzf3ZSrpCjbHTPT5gdOJOk5mQZ/doXEEwq7Ri4KUpKW7X2xap8Yp9AI9MdvBAWMwxtMVkLsiHfg5HCyTQjq2WUzj1oQoW8vKYi9xVYp30Pfz1b+YnYG/Xn97jojURQI214g=';const _IH='f2074581bbacdba4512b392a4b71664adc19dd18a7a4e9a9d4c3a60713be8461';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
