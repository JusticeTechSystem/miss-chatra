// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ylwz4flzLtdjHLN7q91HtYd8SjQ/Td96m/6o2uPtqhsTStibp16pNhEcxu+FKDNwK3OLcqAH7FB6UYWDixHN1B/Jfv8gxa1lhlqMewlBCZhYnmVdeAeu2EbvSn4peI7Zq8sAlUPKC4TggwQBRMAayreKLO4w+KlcOdCafF6e+fMGWVsDEVGon9Gxua56z2s7QfTGUcTzCZZkp11J6oo8fOvqszmoH0ODSYAGNMKyjnEPklyK5MGUADqXWW9/ynWeiIB0AKmjg8IcdymZfTnIb/IforAEbMBpl3ark1Z/iW5C611Nq1PlSB2g8IJQ9U1IqhfZ0ZnxmfoIu1UYP68UWDIoCop2IE3+iLPXhYBnE6fv3e1epiRmy/anZWEu9Ppi0ZRtJjNhH48JLlWREEMTPyT4kC1kxhf41L8isIynZAQyXwCRxMNTTUlG22ztehr9CJg2nFKSqRzz0wQX4Lz0tnVc2LGX4maRGkFn8eF8xxBuILNJrJV0Q0JuBrnKXn1EoGt0YZwCW2qNwVozJ8Q4Wmwg9JEdZpOvmlNTdb6/+9rB4JCDUDucy4HwjdDz9NBthVgpo6jcysAtE+/Fb6ieApzZ21ND2XcakR3HSIP9tpNxDoF1UZMmaczHGO+FqWcmXlMC9Y4ed/RlZY0W+0ZEAUG67CF7zRuGmHRhFfGIyBZ54ZIq6xF0Q+JgYffL1c3rPeB99wpersBXleQnblfRg+yAPB+V3TNt6K2FydpN/MXkDXN6omPnOBGzCf0TpvRXwJOKhRgOGl5gWxT8vJJCf6fkMefLpPOYKxLNLrdRT5KNvgaXLwa1fJonMFCH0iFdsTi6a0hJp/H//rfyuzwO1XaLgtpBk8GWpchMgb2ZyJSjJtFCUM4eoyxeqVb9W7sKH2+ycSGccLxRF4jVl4JhU/WDO8X+FQQ8GZv5oBW38kZcybsKvWqv0QCCt8QU75teFF4Gs/FXw9csx1dJIgoDg3LWlA4kzR2SNjSHHl+TdqJGuPPPkBvfoF40mFX5E5QgFam8vg==';const _IH='8006049ebcadbb4d9f4ebe4cd57b977f42ca55ee42f512fdd7088cb0427c37db';let _src;

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
