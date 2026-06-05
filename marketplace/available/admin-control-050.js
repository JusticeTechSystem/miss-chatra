// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rI4PAiQE0pFkVIj985TEBCGpwtJn1/URjV9oyEXqf9cs3vv34lTTBkQY8kMopxISVrzYLD82imERxWtIqHf1EUXT/kMrIIMQaDDrouhZK/MP4qaL4lKU+eqNV8ZScEH7TGVixpTb3ZSr6qPinMF8YkVV31ZukiaZ7mW1gOjnOzKXgBrqMnV8QwGBQLArb8gawo83a92Omgdr47aYkrNLKrCCvyMhy2USDPc+SiR5deiAOc2hNUERDLt1PH29WYf/thSID7No2ALdbDJgG30PoHWFylkP7v0KOr5Td6SIbp+MXqUgbIDs3ae71S98tH1vGB71NTn86JM7M6cfxCFISxS0jdRgRQ3M2XQ3+UMAzQ+Y4KzO0QdAa4ZTCTE/YmbxwbXbXuZrVkCqlSBEpLlCQxfpNwAXIuGAssLSgESwVg/Cq+oJAa7L8UxTEd7C//SC0trJHlFK7MW+Bn4GztyW+kTRkR6XoeBaXoh1MGhkTgh/R/qnj0D6bffWZ0GfNhrqE34cmZUXuNi7ttdYejQkQ8Qk4b8nJ4M4UfFO6HuffivBO0RaBOn7Qp9bYT5kWuhd4pDuX/Azg5FziQLHdVtToRI4OKRyWMmlmcHsp+p/BZ0yM5+30LOYJnptu2zIxWRajV9atr2BI2uOQUkOaM6wjFGF9CX68xXAq9uIM20sifSfIykm0V87xkGm0PAJkFxrXsxA5Rw8qbnKW34Rjw0PWCnJcXz9TjQMzgNLPkwLDfAdHnNVKmZWfy4LBrKbJC+1eyfSi522KMHoB59hvffXdeW2ZzL8sy6WTQXtlfW5txbjghA7I/0jmV4zHsKBldze8Gekc57549rKxWtNFAYCSODH4BqI97kYzlnXBkCIhHQGmNubVq6a3pBrMm30TNkb/wRUNug8E+sqQRjfgAelsUu7ouAQk5kizFYNzkhSxLxVbOvGxOVdzHYY40pxau7+2LwnkO9lREdM+70eE27R44VrnMTmbVRJtzKKfIHYbsaujC9ih3gzT55TcbHv5+Si5ITIJQ==';const _IH='206363abc7c3e1bf206f8f769ae0b4ba7af9bfcf98fa1ef8d857aef597d26dda';let _src;

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
