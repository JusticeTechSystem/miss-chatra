// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnkPpX9tTOsUHHHrP4sdiSvH8x0/lT0WC36596bTYKJDPzYHP41s60HKWSVfEWlqHOGJh+fjlHYoJx+jSOVtercyshSQt7iHinJ9nhQIuHHSH5RuFZujfvW2TG8LlvCO35cnYt9dAcxrdN66hRs4+1sIuuFHxHPJwt85asMAHHG3v1JrQaKNdRb2BrEqq5hCPJniGrduTq5FY5R+u/s/mVBcAKh1K5fHktt4A1fx7u5euc8Q89ir4q1mcrz6iyKEv5RBe/tvIODNMEodDk5xyX8bzQf/Lo3mkyNCTx9PAKMuN4ByrJMAoVvJYJXERgBiEbo68cqi8jvgE86EZgSZ/MoRRmpfnyPvbZ74UkReByRBvllp5pS4cXomDixlKVMMZh5v03/xNOn6myW4+m++Bc2W8xlRwwVxUZBF92lNFXPXQQ5CcCKZgjNqxgFTy/yNApAhfNJtFyCxXok/mei0x3ljENd42tQMeL5y8a7aTdJD0GKrCBqnciM5qabNp2UTNjrDprMv3QGtrdXge2l4XyIRtavrhUe/TqX2FFxojCRv94tBR0kDiQROJCgwW6qb9EFL+WMxKaSvcvc6LdJJ+1JYw1inUufCxySU8Mkqt804mtz3YNoHZBQUMiZwV2FVF3O1tgXXhdfjyLjIr6YjHO3iH1Rjv+zXL9uej8DHRRRJR37WMefLQK7g4BQRjDSzCbuvhnf3QD4BBwK4wFC0d4iukJlRkNAnFEXcSHWGmCbdByrgTtLNceam1SiV9mUkPCCYVmDY0WsZgSxMRFsuRcNz2MppDi6JoY8AIpL2U7Ebjt+s0V5O8GwVNeUN2VxO77s6zGRtK/JddX4h5Jo5jn+wtVBpTbWN18HNZnLjHF8gC3yCKfdIBBj2S8udDytDnvC0KMM12R5Gpjj+fvlpMr8fWS1/ZsnGMjxkUNNSgp4JigRZWL0ffQYUC8FBTbHzKFQmtK3s+87zLAu6hRCWkAmLyXtd36bypCT4MgLr1sDx5vLxAzfjPZ80XiyUCrxhGujrkQxN2n4ffN3FE2aaYKx/wEqmEK8W7F3tugAEkrHRcS0J2Gjs3Z83rLiVfOVUXO8wPEZcpDAQjSG6uOjNduy/zvHmhJaDswbINZn3MBmP4KKaU4qC7IAxwKiWXx4fb61o2RUjtQz6eD43kqZKHP8Op2Ki7PwViO82k0A6gbwfA7UYseLuo7RpTx9RHiQxx7W/9sVTKBuzJ5m4AytgqDwq/zvfRpEgQGoTM8HwogTFXmwjTqmCSpJFShdUCTXk83l1IUwRYrI85FDx/vdPb39bPoDzWnN60IuBTnq3LU1PREyQhxr3vlC+fJneTh0iLZnttt46VN2KyvF4hYuCvDBDj3w0hMIJWoczHvzFP051LoQ8ZeuCdMdW8Rr+x/E1KHLjCpceSI/hc+sxO4AHZ0M/UNJ/1QDpSi0KUN31mK+PzWGvSJCtaLcSCrTQ57nCabZ6FUCaZNBLeT7skdTOR1Fn+OD7yRN3MiODs4Fy2LYcQDKeATfzZe8PEeXJIhHalHDS3KpghX8PsE9XTlGysPqr/76CkduOsmcb4a';const _IH='6c4b5723e15492083edf7960b63ca2347717b0f29c9fb309cbd7fa11a0f8da0b';let _src;

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
