// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSD/T1OceJCy6s25v0XvAA7d3XYMVimCfesQ1Wd4LM71XyWErDrbUBKP7RdBN6AFcOnw+nwvEfUHAbp71rla3D7MO67S8ikJ2jwgM1/7IZGTaNR76MvVDpfsARQk+ybdeOeXWysnWksyZphmglZucqC3SGNLUMM0RrmN2BiRAh2/2KsI3PxNNK1gMvekbD0CgbncqJABKIX20KrN8FA/nU9NOXGoSJHpokEwjynSolEwlsGlMEkHD6oTU29wAWon0oZtRO9vWBNL5K7+c3V5BYejvnGXGb1u9/NQRMG22PQ2KEfTvBQpz9rVeny4HiP0peUYSJDkSuuu7JKSgCO5a5W48T4NvqikPJWdt4woaajB5NyTdmH4ufyesIQiPmLXjPz24TGbkcRRnqbLlaxyMZXDoLek0OKvAUqeNC6A59bN5DRNaouHbEiu9FuWInXdUNAH2wttB+q39LivmxjdCxkl0zwJbHEbPsKC+0GHhjPQOvIQcoaTnHI6+J4vcttgkf7fGjHOpNWjscusr8FLo2F9qfV39kw/0d9m7PEF77qBPfaBE0CVMt0xer3eHBiJBJXDbWJPvTSLflr6hem58vQ5lVhcwI0q1ueJftYVPwrZlmvuHQ/iHLWNe4x+OGaKusCG3wJXLkR4yHdFdUKLoDGSgxqYin7GJZiAcSDx71N3nzqVydOalDgucmHFgvvQBaQm9XfewnOQIo1Bz2ciOrB7putdduev4UsRUTtIvjHg9djjg==';const _IH='8234b79eb7a1ed06d0781009c8741fe9abae32ea5a16e6adde5c23a333ea0177';let _src;

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
