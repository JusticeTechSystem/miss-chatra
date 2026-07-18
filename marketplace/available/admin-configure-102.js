// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9bzCT2/vd/SIr8IYbtuAOKjQIhffVxC+TWa3mEouFcAS5UBPVzlv2U24svgYZ/KOcpNzqovd3H1DPo/FxaA62iLvLquCDwjRJhy1Q7wFCMxsubsp49rJavGEov1AP06B4QU87N470/NwrWkE8/hgBuulytxgyPOZcF7bjP8uzXDWQh6k23uouX2uktw3Nl0sCGvDHFn2kfp5FvQGKx6s5+e9Q+EDrkI2daG0TQMoViuqHQJeZE929FuUxjKViRyPtcAro4JZtXjy3QZOg7ecEmrxnkMO/gRS7gSWbVVPWT9Ju6tlG7dWXgQZhf1gXjkiFDCGwpkmninqPX6meOjtTOUUFaGTq2eTHxPjVARMoesgFl8OOwK4mp876s0B3Vbph6+o1F25ebpb8Ut2MFK0iPv7+yTpNUGY7uxDhtArUcIv7Z3xypIk+JzLojFJ03PGr4HUnCaMe6+lAiF8nqJLqIoklu5EnAreUXMGqTnW7UF+pGlsG9s1AnKBk0dnQrfTor+8sjMImmhf3YwR0WqrBZITPs7Wev0imwqzq/9v4l0+teruSWBAQumlLInd9x/7eQB/yrvmYVvnpp0pY3L5HVEp1xrydwvpvFR57YS3lResmbF79FDdH97HLBXzyZsV/JDyc9wGrTzcsKHFEjBP2Z0t9yfPT3gHninNvviNrh8GkBqbha7grBzdnLhDnm3kIR56fOppIenN/lOS77FDPKPMMLlTtJLRHYe5nXpJAs1wZP6uyb1xwhMWDXt+SO/t//WgZYkosqAmmllzI5mb8N3xdQBQjH/4amLOwAefseIKILyDFcRsRGsK6CuGQjoAzRCWVu/olbyYBOn4r8sDHSrfnXOUKwz777WWC7S197cWCzDjJNVHDJtUw2RXwryjAHsfkIaV7Iv6L0atfXjRPvnmuMZfe36rnwI0fmB5P/V7HZY0wUZle8Hw7gEUVXlKo9KhzI+lxsi9bYLk5so4v7okCJhBsceCZYoFOZJlLyq9S91WVEvP3zRnODylABy+ZUGFxHO3Czd0TwWqBFIXfKC507StG';const _IH='e91ef9ca9b6c961e6ace760a14798ee8692b846e2178aa8d4e853da45d6d1186';let _src;

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
