// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vOpVBLR7UCO6qPUkPWMuKYn83URur0HLFdT42yctjHa5y5xsOHquOlODEtFnVPcxk11MVdSwHLi48DLtUS1RAr+RQHzaef+un8tCyzmO40Ne3fyJqoalqNkLtGF7a4aNssv9WOWmoETF7KMkUt5S7kMPvKGbhvCGSzV5oy5bzWe012W2VWFyGcGo9tlvluuzp7D0sPfxWrORuVnTZt0eLZGZWTDkm1IP33MFkNnJztAr5ijVV2lAobUWS/koBlCCzeDkxE7hw16YUOHNPnoBvEq5aAtMT05YCVjf22pbGd7MbkfE8PT2uDah8vTQHkdGcUOwiE9SCo4UPR5SLi0qqr3EVS5lKZuwh9sG8QI+SOjZadnsjGzW7WG+C59vFr7WfCtHPRxnLIwhFWjIzCpaDtTcDlUMqqXGbPiaHoCG+87S7JfV6Z0DbjehVnAUpA3w7wrQYpMDUA8YOsVI4gNWD1UUDS9P/acFbbVP9V8OprGBMJXLUe88/osRCWavE9tOh4n4P09q70x3SnhBZM0HzNTJ1oXyi+QNOBxexZgVqcPA3lV2zP3d418MDhN4jZqgeVmG5oAWvpdD3fJSIZZBt+2jraf4uYi9B8EyNCxS9iCnWver1WXpJ4syqOrBp1lRw3xRk58ycc3khy7PT1Zs6Jh332hzEck3guZ4++mVTXnmX5puOHYzcVTbbkAG8V1W1JVvecPM3mEddVBcT2QnBAXUlmOu4MEN0u/KVSeIxPyXvjRKHeihZCb3RMJ5sWBWBj/kIsxkhucdtEvTFGYAPM8qbC4oscRoJF3fR9FKcNSTVCoBYs73IkMpLdcWeETv6uIqSnB+ohXftipkanF+WNfGz34c14fCY6y8+vVBpVYkXTqYY1Jbs3zYC6oL6Opx5Ts+VklDEsEm/6On05GFEgxANKANfaJLgWpMsoPmBscKIP8fGK9OToEHvQDj41T39O/3Y7N7zKdzmlEr+nkXoEvLoP+ModNyZur9/GrcFmZM/C1C5ZV0tFJIfPbbE/MNyTbdpp8ojqLXuXVMgwlGuwsTcATTf7uUqXoUvigKpvlWbgE4oPvxsFzRcv8cLHy+exjjQ6Cu+W+RQIs6/A79Cm4Vo4rN8t9igBMZC9MVcjIUD9biRol+V51sqr3hZt3I7b29yevOMwD5c5BI284GhmgAJn6yI0j7mv1njyz6eVkemove09OJ1nX+ZhCjCaGbzwz5';const _IH='13895897dddaf8734958cc921604c9b429d69b368fb1de9187316dfac919c612';let _src;

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
