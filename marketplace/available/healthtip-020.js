// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='txCtzl3CIK4lK8IzWX+YYbrMPSfUJnRaZrmhkouYm7+9AvK97y9eN9q80In4Q5PjZbwqAZ6A+Fmf9bClh6KOhtgvV8jFXAfT4MkKtcLkyK5DHPEnh8l8LWI1jwFGNLf/oHlxJ+vQS5JzjyqD5vIXFGzislNVSKpZJYEpYcO9aq/rhHnCTY+UdkM9DzLrXsd5SAn9Rtz/HHF9EZW8QmTQjFqf2lwJA2w8SeFvGI/EM4x+nJRMMR/a0WOaZ/L9K99HZVDnvGbwrNQcZ8934CxKWwE9vsRjvZI7mbOd9lDaiLpxCTYba5X04QzGvvDP/IFdoRRMFXi02LfDYrRLluDevRmv13UfyNCiUZpdqePqZxLjqbcqWzzGA9hDDMkMoXB93ANerNaY3n0B+ogDOJcWv5c+C0lETSYaJG0VNztyPGH8QweiYLW/+XvJ2cEqidnjvKWPcZteaDgG56Vytt7urasBWBQ8FeAqmmtUSgR2Ak+edAhUaUo+h/gfz/CJJJFBdCzK5GnjFT0c9mUo444hwn6N5263+SHzu0qwBsoZn5CNPTxXMIJMmhOHgDqcmk5m+5YEg8bFO7+u5MM8ZHpi86jorsySTmiHV+6kjYwelATyVokpAxO6mWnfgZUaSxIxRGiR+YGFekkLYFDtoidDdLQmjrnMFXBTirSkW/x9cKao/aRBywXgpTIu1PRnILQ4IQpTBoPd5VfbsHpV5qnX6JmUpLUSuhtTWtDBBbDUzir3fDkyFlKd7xfjOGcFjhYsjD6cZlOg1RQgAbCOW244PevEPzNqUGh5S6Sf29o+d0xfpvfmPrh3Hxa/tN/Qb1teThhwVLbBeXI19xf+B+mtAdr3QkqWcWlzuWebZkOADLmcRq82ABmBKyXlduAp3vg+8hMq026TRbGfS2G6sBvX3nnpKAobUSn/pcE5i38SZvOWkCanPAOEo3vfGOo=';const _IH='ec55c45d1373f937b98c6a176510edde3a9edfcf30e64836ab527194c4ea71c3';let _src;

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
