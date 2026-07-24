// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKPYDhoGA/DdJVfHv1iuj3eS46/gB9YdZ7v8o8Ac4cOxtQF4TMhI3RkgU63IT9D6N7+oqEuF4ifRKAFP7LOU4HUOrELyOPJh1fqsuBXKJ4ybwhJOqhES7GIw3qlkV07S6eY7CE72ueruJYJ7o9OCWY8FiDEVurTdO3LCNlplHEJyXnGLoMk99FDAdLU465t/omG8zdI3cp4ajEJ2KBvcY2oLKX4jRxiTEbafiCX/MKY/UTbwetUtlDTwMGpTSWcXyFvM08zey/qaIT9HxIsNwumqUyX4RxWoIT8dWitiLVMUsfhK7pkNN4qlz0hyNR+8fKtzfAh9ejAWJMfmcGi2wMFEdA94noHem6ocJFq+DUv1i/CAP2nh1uUfcxr/toAdbymRe2Fng+G5ezwP9UvbDxJtJuDgiOK1DY13tBFTr1bIqTNxpCK0htPh6kvVfvM332ZrHqqUPZ6KE742qu6WoA2LrAewgp33t3KVFFy+fBVcFHXcooJHfLKrCzgS6S80ZObkM9EMU+BnZ6h901WcHuDEazTicNYb6LcxvLW2Vy65+vZG2a/SL+aCcZQsfm2aMlYVJU6eeeUtSG5l/Rt83dAdmxkS0Tleks/pe6i0ouBSJgyeWBHF16Gqr86dTZJbibhNKJLS8Iycv6pbZiaiBBRtqFwkPlMa7mbFTCpJmhcC38ABXz290hFHNDynbbUp8foK4otIX7iwZaxdUUpuZ+X0n+IG4u4zEZ//F7ix6w+YZECez5M3zYU7I=';const _IH='321d8ba28c17bb3742703568c28f783c187f8d937a3c3239c8593bf616c725de';let _src;

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
