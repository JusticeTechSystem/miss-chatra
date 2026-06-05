// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gwbRrbAfGAPvP9Udv/KMnzsv4K2kK7ZRntL8tBnxvQJnV3Fj7BuxTioVNdmvFRTkBzAcWfIzJX7oFQaa1U8r4XTj4ufsyekyorwuRfWT/1gMfsae3T4bHebiFjoR5RUjS/NNxhNA1+kPmYxFDUdqVnUr7qZQSejC1FHT9ezZqylwyo3m/sRuR3IeWPI2IPoJLnJk2SlPHY0m9k9D/tHRfcL+aChKDASCrq/7jQLirPNHqHSEyzf/V6/KJQAvFkIsA84hk8ezR/i4IqMKvKdiNDihmnE4Ca2wxkQqH66mFQqPLkzV1YFFQI7qGOPvJlZCBKFl4oGisq2CLiEhGUCWXTXsdLhw6tbjC98aD44byIS1UoweSfRSvlVCfaXGDWgloFXN8Z61bvwtIbd6hWhronhdVF3c8YBJP//GnzGGOxdWDr3TCYDBVWi18dWCdiGSwEILMHDB5y869vooaEju2EXwlQrJBguEZCBusXHL4nyOdUPYAnUojBeBvlpBtE4ei/cOZ4BRdYrWQIrgtFFFXjLMpvUneZ3XGW4CsLfqvOvHh2EXS+ffV8IgQD1vzMJCxQg2LyCzSX2UHKuTW+8Rm2wWvJi2SAcyPaYzREhPlJ8HWG7HXCokW5Z7eO81TFUK7yoNSOA6d7akOxYBmkZXQzjgAl0iSe4G3BkzPS3kVLDxJv8K/KlaDBiFJdTPx8mXWcYcu7qmo4vH15XeYloMzg10kpTBJ4I8wFFhCK3wxQ0RujTDU/ai4jv0vATUssLhy2VEsoZGoZZArIIpudZBt4cBGcEcZ0KY15yM/jJtTAVuMGhzK7EBzgombdkfRuP2NRdBRFhcpIB0tjENLrdsPysV6jNkK1Nk20vcJlBLBOx57U4qDMTVjjqJkewIMRK7CX0wUOLMVsW+MpkqT23Y2PghOTODhzYAduBdUu8USpcDrUqkYjsdy6sDDKYrkr4Q8Y55yHurnDYacZIIowJoYL9Mvm3x+bj9vrualRdIyQ0/w+Xo8n3QcxgQUS1uVIQYUWsUSmkvAMQ4s8hF/ZQxt0utU27WX2ySfyw2mR0bwCv737JbwKHBPNT8jov9slTie64EreTG4PqBrzBwKdz3/2WjxmmXD4MispL+ECtdBEdfez/KPMXuePd1+tf/6iLWae/omfh8R2dx80pOUgN4cGqKW15w3doM1+LSgFyV78Z+Vjvwo0CbIn+NwZmCITsTTDWq4KmGiuaaHB97ohKkhaluj9odzU2W875ieOkoim6vMg61M5hbF6C4L4fB0scawCDtmjD18cJG6tvKJxhfZmZS7XLGZNWGOWlXwjejyCLvfQl75Zgaa+C5xnL+ADGYl78aX0xJqmjZaA==';const _IH='230e1c08463fdefd81b852d6b0f3d343761bcee83761aee608bcb3f5a811a109';let _src;

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
