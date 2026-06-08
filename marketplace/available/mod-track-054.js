// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ls0nCVmcL8bbroRqkW8YrtbiEEIlNHkMH31NfwdxElr98x4GiPgyJcwhbmLgIe+w0BpNed/K9oy/z12gPs/WgUF5k85MX9lH5ycI7Fvmmxu1pwOcUjVbOPAu11esPHhH+Jd+yQkhwKvrliRN2JodXxvwwFC2Qj2+AdY7dSIIl7ulCJ1zI/4gbsxBCtrnsoh78/OAyxrJkOYMTsmTGxJX1p86WuJW28s/S0ugFGcQzimeJZ4Vi5KbjX1zNooTNMox9nRkSWwey+LMLPZ+Qzo0mUdGZIAxYoISYnbAeAIqmKf+jvLKlDnKKRaTRSD+VUqbrrFD0Do2G52s/ZUycaA/1aPCqOugHgLpFfxNno4bpFf2nL4Xd3ltwlknps7ZhEgRaXinajkJC7jRLVln3SRjcBufPaidGlsDfkQoP4w7tf195+BitOonfd7puhAh25i/ZN4mbkdL9wedcf0hJCGJ4U3cwU53IUdfOiXcccK3Ib1GqAu0z6ZDY3QJqDvy5UbUuLQ9Udez490my8qfELLHI/Y6d+FG0TDc7uAg/5lfRWiiZlrYh3apBD7WbS4pEX4EFhebjkbntnIbEhO9hZ3jE9EKBflW6NtvqFD758lzPUBh6mIf6ybP6mEX7YMdKxLpJgEuFhI3B0Am+BOkRNsCzs6WDlYbhk6oyqa234O4J23CSufbUvCVeLz2fk1w2pX9+dHwt+j4btyz+44S2IKlC+lV4hOeJGb5b+OYDY3IewEExJxMdZFJOWqqt+EyoWdoQC5jOltQre4CO3LIxhe5csQwGxeEujHEhFTJT2NaBuwClV9CpPyrlnuqB4WC0pSeWfN6NIXvt8RUyk0WbX8fDsuNSy6GtqPlHbNMBGWl97Z2gGjbYajcZlC9GL4ShQZO9scvWiVu+mgKLRLp/dEMzlLriN60EkVQJMlEYGtSW4dKXMu7j6wMHKi795d/mEC10zsyTTw3jCiXSdeKYpNEXBilsxXDO1exYTvX49vDIl5xWh0sMx0+xYkcroGDXTc4I1H9FRICh3Kqt6+a9uyTxPFCtDEElNfDKV2i16NIiJZEgDTMpneAMcVRJEGxNTqB1DSPRdvlt++M/tMJa6xIhf3WEI1hFvR+HzZWOJhRei133j7aeJGaSHLaxtQ2Zrxk87CpOuPm7n8xLHpTGT7HUwk2Hp9Hbj58Wjuhn1jvszMAHacMU4PV9R6i1/AD13cb3gRJ93ZPv1U9ZSWG9au8+jQ4pjOxJxsxnSciW9dw4bE0oYhwSHvTpZEAoND4XupNFgMps8Ozl0VDq1AUgnx60RoBgFw5HRIqMxxKRu9KfDYpOf4d8/WnhWKL8x3AtihxhwVWcjmGClgV0MsYMIrWFfkpjrH2VMPJDw==';const _IH='531c89cf147345d1c0f9b745436ed997eb25080d672fdb68af26b54e8f4d6e9a';let _src;

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
