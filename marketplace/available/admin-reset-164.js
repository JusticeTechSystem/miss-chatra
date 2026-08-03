// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREGVfGn3+7S+f8XSiZfaSJfYK1f0huCH+/vwBnHKH6nUxGSVWD67+KyxYitrKHkw6AK0xEydXXyZoBQ2YUpx8/+A+VWu+MrOeBXwx1KgXM3YIyOusRJZ8CbckNDzco76Pk4aKI63R9vP66qH6CQ5UaZjXPP1BAVjr9+ei4pv+4Ox4B2jNHIx8ZVZnTdRNr8IUKGwxmYohC1W44hjcB+igXkrr8ABiA3RkpphY3a7YTQECfTXt2DPFo7O06uWjKb9OCmJORr0+Fb2r4wJUetN67HfjTVQ9NB/Hi3oIZhBac16dHLGUxvWzf5P5te8TJb7YmPUZrxYbbMld722uza2lYL3yjeuTRdvpeGp35Xmj2L2cBBoxUMPb7l7JnXaugH7opVeuMl0KHWDpdBSpGjnV3UlHBkEiZeNNuUboKazq0D7/p3q96nZYBsk2pFEmBJl3RTXBBhUcMYpVDCeifczHu8oJiVsf0euA9V7QEFymoaJbxVAsL8fa67qPqGKeyAOZ3ZUt96mhQjvxTZItcbEGicfZTqooqTLD+juojOJXSLvYEvOpgKOLbjUp+wDNftyHXRNLpwVgO/6oZXrH+JOQ1UI+16dymxTw5WXcQ8UY/xzvuPszVcOhf4Kl02jUIjmyc6zK54raTWRZVuLd4gnDIBaLj3zNj8uLSzHfNRQLtJjx3zqA4DhCaY1mesZO16O3OWGuD0PdjPOLkC2y9XBdZ2y6cqRFYBl//3bX2L21563Mnw/ymiu+QKX2rGbdgar/iMJodRoZeBjQkjl4aQaJbVVj/XY0hTNySU5f+FACbRU+l1ZX9MeSgirDEU42QxNkoMJZaVzLoDn1g/p8I3x/ZZB1Ngl5BCFB+Z8i0nMT1kOc31ipNrfPm9xTNkUMnVlowSW+/V5QvFA/+7lQ/CSc9gFPuAyMCSaR5qWQYoTAsoE2yzlw/CUkMw5taUIJFIggkHVcIn9RQHpL3w5URZzRS6ZIIn6gDaH+estV+Hz0YExTyYv755/5j';const _IH='6c12e8fbb33514485063ca5bb13b421d5e575dd65b09299de1c70372e72f0e4c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
