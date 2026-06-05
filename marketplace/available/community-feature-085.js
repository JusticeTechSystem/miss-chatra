// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='upGe2vc9/wM6LZxdAwGIj1G7Gn+HyC/EViJDFo47p6noAy5szn1Ld44R/um0RM4RD1+LQqfsamegsdkHQvcIKw9ECREStra+WdAt/x3FqJA/WOiQOJZsFiDmoTLxq0dF/IsNQGwxmWWluK5VY7dQxAtyPZaeWjV+viiq1c5W1gj5otV/cOMlQgT2kuIgXtIZzSzmCCkNKAq366kDPA4ixOTLQhIaz1DvqjXkuRH5Q2gEPHEHX4o5mVqWX90Chrmsrshi0D9ngJDpKmrID8yZ/aNBiDfjVRMFBZ8iE5cE0H6gJFdxG7sYVWWA726yGm2yFCxotKKBvzASPNeuXkm9PuJkqBUym1bR7hrmxWfAq/SyOP8uavFYx9VO6Xe8Smjd91lhKCBSbsRkdOe2s1QAlXpAuaszCggGydnFE9pCz5POks7bdp5bqhOJaJR34xki9q92/EXKvRX/OvVDe010UwF0m4n/EnQ4KA7Ylm+jQA0Oq7KX6haIwthkdGn1IOxzt0CUCoRPchIifa5kwcMTlFTWr3wr9EUKy4qNqhHGZ0RltcyDBONwisHWQmNf7/bZ7SpuYdMesW4hp2DPgzCuw+wPpK2n9sx+z4ewltq/3BmvwhihfSuG7gGzeaM9YNZznsjDf/R/0gSQ16JRCYfCeSqtSeH5uop7gUwrqslbn3690dnDNyG/YdaecCGXzO9p4/8DqlT3BmSbYkcuwXRCw+P5dIq1mtsh6OyPLrh3YvcDJ3seMks=';const _IH='bc1cb56385a498f364e72f4c9e235104d61ab73ebaecec9da284957bc6a8b878';let _src;

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
