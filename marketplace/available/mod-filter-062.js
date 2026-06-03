// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rQw2RtV4dbgntR2uGviEtzEdL2ngunG2BzVoPbIndwzecWOPLiF805tIcWmAZ4LnDVV6s55zb4J7zjIKWqXFUuANgCufpnb3oDJZc0B9BAZ4wt/hs/FWbKe6F02yn2CjAhySAx9pAVYBZbZYz/7qBpypSwDXldnVpr/EuCAwzNkBJ2OrClGJRzXFdOb7/20jc/SuFnkC+XmiRHUrjGOyu1IgwdEsS2lKvmWyyEmRLDTsJlh6LCNPRPQsXZ9uXLKrfrsvU5/S+Pp3eGqeYzfswk99GjqbSyTux4VsNzdPyq6S+jv9P5UNnDSGfKNbMnZoou0PcIN5UHM57nYKJddc/7i5LkMABx1pD1qbM4x2gvgZBrzGyk8zwMS3dDEB23/UYabFTm5G6h/IZSbT4wZbFtBfn4oJdfuMK+17KEHpFQA7aANcgPmMP6n+4QPqo2ungO9iG7FmsK/lDhv24hwBGw/R6Q21gXaoaflvPal+5Ti7alBExRck2ZlNj8T1S3hmv7wUQ5omSN+eIAXjrMbVaNNRBrnoB/NHw6rYM5jYzgF/V/RqDx6gaWAK4mc89MccRN3ARso2RGghOCHy6Gl1pJTfDuzgqr75qHyMdAKnZT7y4zi7zy+dJ/fNKVlfZry5c0y06OWGZR/ke205zlYJTNkYxgqSNWqD3DWymWMYQM4//wI/Ajoja85AQbgU6ELRcz7YhUbk8tPXocH+dKyebSmWvBJZw7+tsUCgUvJUTNkVBAxxqOSVOtvPepGPoZSbVMKAKkrk9E+lif28Sc29EqcT2O2NBN91lAKHBdb1gDhIPO4KM5+6+FxGq3n6Xd1ha2nQfmeIw9rdavvc5/Hv09kOj8vqSKz1orDkXnKQL/Nc0dN//qZGgle5fEJDEdWOBAMUrZ27ImnwjBLVF0i6183jvcg30FXG+Fu+rJqo8FrN8N3sNbbwvenWmB8HVRJMPx//lzqBi3d4P3QomCIJgAoX0meGyos1CeSHiFdd6O1noqpgyOk9NWxdrvWQ2y4mSSrWaWH6Ah1XS4mrjU5AnsCLXGkYB7TOU1MrgCXxtLkQSNE0OZ1Fw5k0j8vDVUJbfT2jlMlvbJAIXUlXKC+/GSO0DztMO7Dz/snteRXTu2T7+UBYbW+WhzzaDaQLN5i5QTx9zD1IxuNZbjIXJfbyj2D8LM4vi9NlqMq+hLcAsJa/CZhTg/LNWriSeJfxx2odCHuuAofksX2GAazyDAlW0UORDeqnvCoP1ewXj12xO4TdWVswl6qqfJl/mE4KyCiH1z4lK7kxNBIoP3J9+PfbTYBIShY7kZxYICxm4oWeoUxY0GSP3qTysC0dqT7l1FxApLbTF1/pHgbnPRwQrXALUQRF3zYhW6iGp8ZXK/TQrim6/dM=';const _IH='c258afa7a07741bc9a87cf64291c002e6a2941a90d05ca125b116c9069787920';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
