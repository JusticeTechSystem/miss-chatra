// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlEen8XfdinQe9R9HyeJLd/y4VxkzDBd9b4bSItTZTQ1k5UJ7FUnddUrx8sC4BU4BZwDHrfPwFJGBc+6ope43m8RijtBShd0H2gvLOSqSBOBwed0kvOnI1275rGFDADgeOsSeTf7bRC1Fbr++bQzprtoVFBxZQXu/oLStGvJnIZBgwOtXXBlIWj2Mn/yC42Zsp2OlQ0weyACzWhUVfeml6UgM/2xsHzjAIRrFGn8IztvGbJ4Na0XtcYEQpFbjROEdTqhCr/YH7MeSTTgFhKynI6iLbAcN1w0Z5wT5Cy977lkqEUw0fpH4QjMaOVkep9Ph42CS7NP+JJfp83/vBEpjQqDkjwAG61yjgMOSnog+SPoDw6kPp1LRstKfJNvDLrk3CY9zYZV9QWeb5gMAaUIPIpl1zWbzGBsUhNX8EyKnvE6CtWF+EIUTiwh6gN5n/k9sDSIa2i38vlBqMmVeGVoVCcKfAlADCcXEFqMzocTM1JuCdU4GaFpxDVVctn+Lx+2+8BFzb452/zqfTBiCWwP7T7TolUM1uYUwZnW24HKZ82uwUKiXxCRDGRAk5+95i7fp2lPBuxXpOyXaEoyAoJ7ZImrUJ4Y9ptCmdivHFRhZkhpsA2iOCB7kez0S2LbXpLWTK/oZA/O7Vbn2+yEntbsjaKbZCOwvZYvL4SfDcAUzUsAilOpD6Ssh6WlgI/rcQ31Qri6YM9NEBLlw+nD68uuz2hSS167wbGHfTUU61DeK3eQivFFXzx5Cl6ihPy+Xld80IhH+VHrW6lqMwbeZfyKsbdyzLf43VZt/DyC9pH5sRiTwQsTQ2x6r/6E033GCcxTUzUCAeXE//6XsRTsC6WjpPozzyGCaA6D9ZwahmGesuy0g7hXiOZC9gHFYY/oN6ereJubc7QsrtQvggCBE+bhWkiq1Yb7bKBmbGaitRkSHOvAMdGfOfcalPWcBkFgLTr1reoTMcRNcgOFE8ebbCVgkV4pm7dxUMxorNRLX56m9tKVfVnw==';const _IH='a93fc77a5ae7ee91438f728f21d4f1cd9046844048f948c1cd2d48761deb1914';let _src;

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
