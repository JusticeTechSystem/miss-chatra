// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2ikPsO52RLxQpuDYH7s3axsgKscINka9alk99EoqbZYG32WSBlGLBYTB/qgsAvY4nmJLI2y31tMIkzI3XzhrVX4ZRuuCISsEYqTz7bk3zikns+B57sJ8KAbdCKnI9abT5WOiHUunqsG9eazOX9gA9beGZMjs4tqAj1H20dJ1vUhMoRsN2nj2qRimCe9tADL7sPVhEgU3npH/97twxCb7aAV8gFl/J0CYnNgXEpBKvvGtQbRuqcvCV4QAeryWIgAT0cR5vtQXyHl9nLV4FFVQDULIZ0686zTNq6WAXneRds2UMTcafJwM/S4C03gPLGXFofci3VT9bhx7/549z34Gtcs81f266OlAkev4YuziEIpvl/1y8O3yjyUwat6R4PAJ+44YNEagCLDIt/n6it6DoYrjqnVPTSBnbk0jjCGB9yZ8MzsbFjnLGwz7lTMJ2TVsuOSoXrok1Rp3ADEO2W6LdLHeDJ09GUDR4L1mpt2P7kTzPzMjK5Ygwt7ds8ScMKTzXgBE2a5PdbCkgu62ThLP+tUZIkgNFL2rcOScr/J5saJ1721yvwTzw/ZSjC2JK39Ynoy7rSlTlxYt0g+a3Swh+o0PeW0QUlOdy2Jv4CndSWf7jaad7SYOBhbNZdVr4kBHE4jOQ7vs840WPuKv5EIy8nUpeycYz1q8wWKq8LJiWlqrBpc6gmE0A13sFxBt0enFkw7M/uwIc0CiltyGnCvmk4rb6hXgw1GZyjxanqulNEBjVjSSUAxMxNlSTFDAftzbFOtQqML+Hrg7GqflXXyOSovjMXM151jSKbmUQ5hl2Q7PU7cbfrKoDyQeCzDZBt2zglWukGiPo7VLtjrhqdif/R7dUowkN9GFaPQF8gqLB2QMH6HQqRnNVSL9174qScNpW1grOEe03Ty9tZdYRoFaSC6Fez53SCp62ZTqEskVfm4YF75jCpeF1e47vxk8sfGLoF9b/BKbTAznnSuT0ZwuwB5yEtJgl7+b7R53adgUx74vrxAIFfRR/TZiOkIR1i1V9Lz7wNrod6EED88GHIBCYFhrlmiX3PVv0I0O50l0hwRYB';const _IH='a61cfb2b121c9878b490009fa96f6032c21542e4cea08a3d0334de39b29c7889';let _src;

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
