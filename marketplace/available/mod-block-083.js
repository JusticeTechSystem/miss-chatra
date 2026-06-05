// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1UEU5SwPYL43yR9Wp1izzVdTUa27T9OEY+kOnsj7gCt1avf4M14n878JkwWDbTIMl+/018R9qGO9aQJXPnewGStEP5kA2RnuP3l8mbjcxfC2nNcTODP/9iRtOIwJc+Xn6sIwhtZt/oF7ypvnjb3MO1ZoGGKrm9Hq+KkIFpP34yOFkuHAWJ2l41JJTPZfsnpI0er6Hd+4TLozKQRkonO79ixjjyafAQJhsBQ1BRVYqXqWKdiXLRAEyyn6eNb1QycL5MpMoDuCoB9QiKwS4pHN2nu+GzTeU/rS8VkR+wyTEjYoMAt6L6/2yP5Ck8SG6/eG/Fy/ygKXpe3oBj5TPKz6l5NN5naZqRnPT83KEOtqQ+/ttmTtwK+u4KnW8HklOlFKBR0jOlwWbgTZVEdMJ8olqpA/ZH1FLKIzsdt42vWRuqAWZAdzicXDToEeu9zdZ2IW/lKaXxgWDfgbYsM+u5TRDsbdA5tR0Anz4I4MmvbezVcamjas4vfnZh1mhBvYeL5BHjDFmoV6a4blSxL1q9oZa9LrSGK8wzXVMzsEsuc8OixYBG5yIP3lE5ECo1M8GZm4g+AojAJ13bf9TKtUXavky3zGsAHa9Ah1q4kS75xGAOkQ+hqAbZzVsGggLhlrZb7pJQ2xXB23xfp8jH9kCltT9sXroudfigSUER807sREf1ObLaZnyImJfCC3gBkiIPDSqh/SvYItVWrtgyF9Iin1K9tpKbQSXRgvJ6icZwOW49MuX2qfVtDqFxW3row4bH+o1+DQwoGOAe/S8LWf2ANM1gSaRJFIsmvTFd7BQoKwvGzpiiDJ/+hHNlYXwm8MwFeGgqR9PsxRghWBk7rTwnOiykgiwR2ugUmXHxYWlgjF98Hop6pEi5PNl233U/qvlRCNLA74YoVu7g28EAgRxO63+y76FOLLaFNAOkc/u1yqv2z6uDLD9dRIryHA4i6jBGtDfT/w2KE7Nwv36gfKYdRWQPbgQnrpv+ceBxWtfkHPDc3DYVUlFcPhz21sFcyMQuRMK1BvmDLz31aYREoefu8OtfVXWNZGtEqqN2EUc9ZbNatYbFTT+kPooNFFojPcNVD3NSigMFRdS5fsAzeAI8DfbTIphr9aAdvGjwN/I1fez9a2KfxlSzY1f5+qoeGiR/HgB9N1NLKRPUyNdGKzfvpD/YN41+Ys+3XEU+YNks/n/2NDbBZStULQ1USv6I9gk2h9JIKHikK+jR999Wyd6mweB5uucsxeNtiJTHz7rdRaTxjlVrhYdXI2unlIDUV/0P6EK226jqzJRuCvlQv9ozuN/PFI6xu0AzFURpwvsemGuZWc2KLZ9tWQN1Vwk4jqsNI+f+BFsrfluVhGM8Jh/Fv/+DP4aab4LL4qFQ==';const _IH='533c1f8435ccfe5788e7abf1a51bf49844235ba2c06c09301bd678e636a4f870';let _src;

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
