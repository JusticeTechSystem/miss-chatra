// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpdg/5shqdgrla0dWmYRZzxO0adXUUvVCag/sSxIx8NlH+5RuVnvB4ptEWE8vnEF749wSwwxu1G1LNRH7LLMxyrXTMU5Ra70zNCuG+DsXDmyN4eJm3HsfnSqiv6zogpc6PoqSXY5U69annJvI36/0dk0TtIw2/ywPP5j5C5leuh2nHxAUKyxv9REkfgMpqkygql31XpbqtzR3N29VC2Kn7ODbxBZwZoo4OkLHLVOFkUvKC4k1hC8QP8+lxgKsMUnVNdesuGdEoq6eYr5fUkh1DyiGG6FPlWBKR/HYUZa0dwUfivGy6BmOtW+I1YwOhJLHy832L71ebmFr0Ti03AojtnZdb8f+W+Ad1kUiBZcTdAzf3Jx9MyCVqxr8NvzwKjeDcTTJUP7LXjN/jIBPMFWp0X68wtkslBysfqBEBeOTJXlYUv31HLD3yAh+js/wpcrGrQV/KS0hvyRVH2/eNqW/oi3kaoLtTJxAfLSjmNp61Tp4Vo/Eau6uicPrqxb+1tXQMofFRxGQ5Rs9SaaGzeKSwCSmtsRHM+Ww/g2JDrP1xzqrGq01/9Ri6WRIsfY5SZv5juRoYED30G1FHIvMEZR3/OT10gmyUz3SPp7WY1jfrL3iSCaaIbpw42+vfI9ZSgh2rraAKf8aFHoZtS9MD0zbZ0z6CqLdTP13fFLHwDXDNZqQcwSjJy4fCW8iG9Dj7Tlh8kY5RvaYkxBxAl4LjPJQvwOQqX1yErQ0p67bF2o0pm23iDf6aoFnGOenCkMo+MHbvnvz5mIP7AYuYUmdPWp3kj85564JGcGUhkTOBP5l7ZABBCTD9jvSb2GMIqsgJ5rsC81MfhmYmhvQkXWq72lbPXTe3BMZ6vTau0bieCpGZjpyj0oH3wr6jNivRgXdQtHE1khaAUA3nKOsUzIO7RUBA3x+jHwCrwqwUMuz/XJywsz7NmLhRX3vUa3M5A0B8Z5NFDLCwrx3ulcpLb7pHxITzoEm3zIFKI4xrD38b/GMiRrEB2JOxMxesw60kPVbBtU1zi2QKdhbsXrTqG0+acA==';const _IH='0e587bd3b5eabd897dda36f290fa1ed84173e0e842e0d58dac346922fe30cd49';let _src;

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
