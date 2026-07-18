// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSiCEUi0Zx60rZseaiCgYHVn0+UdUsImD8PzEjBvZllLYWCj36x3Neg2oSPKg6xQV9LFV7itr8AJSOQf5uTp/3o5oe5q4ajoYuN8JdZmHNUBE7JlvJL+uPr6ivzJyST5qVZ248wSCP3Oviz4u/dKGI8HQIlW6xPglEX4bdJt7xHNnRPYDXrnLHEtIYQJwtbjE3SW6kjuFHkaNbNdAstPdO1V2fZeDdZaP1AHG9o19boucQfcawmefFwfOJmBt6Cxc41TmeDeMrwyTsUAmFwnXDraGLTH4dN25RuJkACd++5KQ6jITUEvWNUCHExXGY5MWvBUThluJpoYoIC3WVdAYStYJ6WL/OpDZi/t68yugUqJMl98onJrpsWpk4VCqi6yiewAefcRILUIpbNC0C9sDWxxIv+nOFYQ2sCTjBAIoxYJb24g3WlsbiYv0u0U6OdqhewNYJuK4/gBGrw2WD6H+MTnhm7fw9xlomyvBXmiyn7HH2oNQCkJBg4gSTzQ3ZZgHs9otiyFFuBYBr4picl17g9scC4eO0W+oyOQADGzJxB6UqY2Jo7UMnlIup6He00ZALEJMBXPm+FTyInj+y5KNz3nf5v+ty7O2v87FJh38ntrrb3sNBRehZ+IG/zSEnkr6zLLoimJ5FfIeZj1vwu93gRKHywmiwlxS/2QuHwgqbAVxOQELj6NMvLk6J9crrDF/Oe6W/0vhDi7YjZtSUt2rzCH5qcm38FnheYyKsEWydIg0ugoyadQIpRnqLMHuHLwjxk4UMyHmMnHx6Rt3k8Y1Zch3sC5oQM2lEJoguiKVl1Eltm7RbhyTjeIAGpMVTNtdmoekZOu8uz7rP9Ed7K7uNkULyBPafoGoEIdak7mtulGRYjq5XLT8beWtDZh/cG/vYptRh9ylomTvCfIj7FdjGTmSbltgQkyzgRjJEJ4oeE2WtRuWtWE/OTXpdDjXBWzN/rI6QImqEyhzcy/ahEDdUkvJlUK2z5PK5dMM6PVpdl+pnWDqwV4SZKSwNbXx1IjYJ1Zvh3ePrUUgeOgHRjOQy2/YMG4W01KbDIq02a+VHtGLCAjA+5cEcma5uamXIQR9s4WQSjyP+PwdLciIObv+h/WW6g1IiNN6NzjqpavK6Pdgd+WuVbxMhc+ubzNbpMsaqQKVWz/K2BbRD9yp+IuyCdBWXxBuqC5+FDryFCMbwp2tFdZQiQhegbnth20vWrGIMtEDkskZbcRok+';const _IH='6e67547c68f164719f84968e5980e47a4a0780dd29a4f1423c97eda5e44ce20e';let _src;

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
