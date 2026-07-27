// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTs7bTuo/u89q54+eJJzigOggX2vwiwAAyg3ZQbfhyhJDqbo7Ga1kJLpOywQesMC2mD2RYLAFGCOEyPjsWeV+9U2cmJR2BMeQ1QOcne43RViOUG0SkPyev4h1fWQbZMs05FrtkCnv6Jzr4XeAQT+QmK6+FvDYQzzEnloBH7TRLmgVzSUxjUXE35djkza5I5NiMnm0uXh+y4nCqPciwoudh80qAg7AApD4BvPy1DYU+fMho70TH3qy5rYduUduFtIyvWDWe13zS2jnHwZykj/HfAzamAfdPk45fuFFSEqvOLFCUyULpfUZj6sINIz06bPL/WMpFZF7a283t7cLQfhvkXjLSQIwCNZ97q31+jBIpM5bn+/+cp6YxjbbuwjWcoSZzhmAaAzmF8LmJnn+aBW06A/vPHGWg8+0gihxPLbNm3cht2yUUuu696FFPUznwBTOfds730seOZNA8hCLTHaCZIh3YMruulTTPqeryRSsqjDBQhax98UtGYgBlA1X2bqR7vItrnNg2libRngXOnzlq5TtvaGAWi1J782Gx9GgJQ+p6WpphJsCjUgG+LNUnU6ilww/0bIaPUBIrmmEDPu4C/yA==';const _IH='634cab93dfb7044e8329b4c4274e374e99181ccf9a2c9aaac6f99d0a0f3b3790';let _src;

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
