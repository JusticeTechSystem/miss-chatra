// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSC9syVk7PUUB4DlZ+JT71PxXeZLqIYYYpFYRUnmNhKo10sboBA9yG+MK81Rl4Y2DBj9wThzQsI9DJYpAvm16DJew5wj1HVAIFCnbK1p9aPXToHZNT70t/J6CAhY1MMUYdPnN6+xE4IMJzUzyKwB2hNt6cIzlS6v0aSRIi7/ZrgXggnYJksfb332j430JjX1Iowaq1B0Fe3U/kwVfPhR5LbdLXEhdZPW2I/ngPIKUay6vM5nDVctFS6qkm8OzQm0cXi6qpkKBbq625fVagfuKxWzeGxn4Efg9Hs1BIFkuzgqID68G92xcBbMXjAoVK+dWfL0hFaXfFnnnQ+2mq9aOtLMqmAIR1AjLincK+fhSvexdha9gXC87bU7W/v+lrUzeXs9hdbYHY5AacqneTtuw7O6H5sPVCyX8g2XkS+EXmGs4oXf1eXo56Hz0QBmTuN4ytu0bZaZKX+3P/zoxyFcvvMeUjSHMmuaBT6alBP/9bu8VOv+1F2HNMssh+LPwtKuA4KWdvVPpWdoY1UUBYdeyiC/tK2jA9Z3qhnl52usPuMmv7Lf7pnlIDLT2PGDnWKYhsRCLp4F1uwoFF+svtwb2qvof9pBJNVe8wJpQLDZ8HxG3DI+Xi5QfPhXpGz9mrLTyDLlalNXFl3sXUgtX5QumIbWVTlojx1oTgp19AlXWc0dG0eQ2YwwomiolL3EVA+bHZllG3reoy0aLzYucjRt+P0Jlx407ANKvdrncbGsu0NEginTBBFSyhp8Fsx/P55aEfmw9/DnHkV72uk/PVSMng7DVg35hlragX0dlBo4OZslmZA0pMHSnWsiP1yjoGaoJQKp7VNVM1FH39nHtzXP9WjnWnN2TviTqSvNs85JPio6aXUD6FIKqcxMbecpFlu+D0L5/zGO+gOZoyM8UOhB3zW1v5qBXPdTnHggw1HAXudbi6Wd8SKhC9Mv/wjoe5DhS48MVbPXRuv7bKom7N7+oExF9PcnX8gt6OAtTON0lFe1gCpNyr47/Flz2BDOr47p+iqaCPqWElj2pWAxUsdZC6LCHBXdR6B/AyHQRj1qghLimE7Tax6aD89YhyXOBJs6vJ4d/s24TQiroAQwJjukNKHcbjOxupJZYbbK8aIFxdowEBRW6ovij6V+m/AKJpcsMfVvPH3tsBqqarEgPzc106TDUiqi1i24wjrzTIjR5z23wGxIik2zmbc6wYrL/Ba8hXlqRmFAbYvvmkOS8K6HqQ3b0XyNbmTGBvekvFadrl+Lk35h534L+93jqngWIqRyNCvOqEIn3Suozgb+PnZS/9nKr+uXUFHDujFSgIIf/tdwZCH2IaVqQMGcFE6qLsluoyWzmSDqjWFfzTf';const _IH='7a5eba7a2c12e9e60150b3ab88c67a648c085f3509e64507d70955d6b852613a';let _src;

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
