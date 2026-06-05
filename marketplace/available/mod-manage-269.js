// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ce8rQkDO71W4dFRH8ShAf7AYjyabrWhUr+i8yTAm5+saCl+rkX+diHjH7zfHRGnOt+evIL45AVAibgdMuNoyGPh2AFOvQTQmNOF+oP3PhDiKy9A89iBP81MTf7AFuQTd5A9VgJSFcGwrheMvsJkU0X+eqKVgqAeuVY0IgrFno889PlAbtcwePhpfpe4Db/VbZ7BJcMl6G4/l8cYVoYmgsQkd8+tOCcMKW1d7IYRvUuAIKy4QuWHq9xFLLWGogahKpM8W0B0xAY4ekoAAYRP2srs3WoD5PpQH5lGjyC4dsz0/EHDRFM04ONWHO0mHiu6TnPWVqr6CIZe6MQa22LyAaVTXzQ03WgCuL37Vn9ON3l7GAEt+sbJMuFRRlCq4uQOHTJMq5N+BX72oeXti9gtJE0X8fc09ERFkQKFOrkv0kJixSE7lWRHj9sb1S9CZxIKeCYfRoyiGcKd+Qc9V8nf8yrCDARDcVnlqSMyZXRBGo/+/0U+8sbo/uzBqoFC9muiYYWGY0B8ND9FpBVg93Urr+zwvO8Td77xChzZWV7kkFfvDf2fZvaY3I5VYRaOrIv7mJTA/Oci0/WmMFXIuXpsy3UEmPVouCH9JwGKLBH5el5eQ0CPC1WmO+I4zypIPZG05ji8s7BcLYiJo+yDvLO3pKXrisnrqGlPQHDzOSxscOnJMqplGb50omTMfTRzGwWQiZATpq0FM5ELu8h3wKhsAuL1Ru7WB1XF1kearcz1KyN4BBR4VHU0r7uMcQYS9MmDJwexw1XrqvgZcyrmPTFcEVTRMEW/WI8krwyThbIUNcITbe28e2D94azyXNz7QeRSj5WGs2pd4aXLxkgWZi4KPewpij80pJ15B9wyVQbqynFXrez6nVGmYRdlR5xAqDIKEW9zfXl5KLH+gLEm9zB4KlntY4AlMo9P4B4s2m/3I1TO2p9jug4EDrmoILeRYFwYOWvviTNPXwjAGIkhUfpmp7pWlHIHHiclDjF+d/eMv3jZBT+iU7V0ac4pn/Dsmu565lW9vMe8ad7IqK787XQj/PgbnRAgTaqca61S7LDQRcG+2wvCYh0snTtCok/bILeF3KTZX5WKjlZX8iFknZhs913pP5g8gfyZpxwolc9ClO0/OsFpNdqdn8Qk4uKRl5TxEEWMoXDO/IQqW7L3uXcsjXWx17Bn1igyomKGAdfxKA/VPRUL0DNC1jp3Rf/JFc0mUcBCPdQhd3qKsRuskdjuCpvWkZs7oyhTtl5FN8JYHgCcp7dybwsHbRw7il3Tlvt23pu5FJc80N6SFFKfiBXyy4/PB2hnkSrL/N3RHCV5t2LJAf5wbkdYFQ9Evqsks8SqguhsrxtIOJ0CUPDdHHtjkk1IJmyGR1MYTrGVA8HSZENK0RpshmAwcvQ==';const _IH='bb2c792e409fe232c4bff107b7f203e7656edadb8ff982a681146371e3e2b5d5';let _src;

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
