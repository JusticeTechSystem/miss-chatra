// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9B75fX/sbwnNZmlNRsma3WGwAoJZAfZQtqdRvUqeWUri9YEKO5OYS9BgZr71etKujnZwkTVJvHTw1odsGfCAE3N9brKAvJIye0tyVisKfTAngaQZG5h9+o+s07wxA0nhmReGulsIIKm0VXNuwi92jIgJnYbbuW8HRTb3f6de4fV6C4KT4MtZU/vEGxlbuEjeM/35nJ6uKBIk9oXHnVBQviFmSeTXFJp4PHlax7anSWloxzi0K34ZiQDv50nYJ7gh4tz8rWaE95kFJiRRy6KZdKWBWP6/QQ6/lD1yuUZGLmx58sLFbyPcvwB24EBI4nl77udhe3KbQYSRHWLmAoh889RGBSy49epOgobXZcwM3zoJwS3JDv4bKVPy6Go81kYFVp/jw6oZPoLLuen6QqHbQ9iIQJ0M/YVrl7x/IxSgguqNGEXM1NHAEyU+z8pxTh1LHUOxRWzOsrcG9jR/rL06YgVKPtgxvHgg/hWxajG1MFXY/KWXIyERYkYlMljyMsqhyJ7MEeZ8V2ojNRJPB21kGKS4Vh+3XyK2d1YeJq4gYW3LriIaJtjqSAe2GMjFEOH3/QE/3gfwXOhdIX59l0UiFkcZ74Fuxc1p/AHUDVyHdKI0aB+DsSPI5FPjf1t5A7m10fOO+VOS/DYgZoa256QWSmbvfoAaqo1WEmN4hcTW/CgOO/YJOSEGIYIPtY4w6WlVf9HOlVPiwCworu1jvNaLb5sOx0IX+xQ==';const _IH='c1f3389d460b62fcb4904cdc57708db99e71122f0109c85e2bfcb689215b2da7';let _src;

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
