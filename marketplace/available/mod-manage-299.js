// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSS+Mv9fCrFJKM+MKjN9TW6brC7Rge6EZ5EQoV7AvNbn2U/zbaXxsauX6TM9KMGrxVvT1b+CuEANsF3yJUJmsss+MxrddM2qRyAx42A2w7863CqNIgmqoU4wEflSrjterpoTE/MYq0TVZvGtSSxppiP3JxSAB8EqdDD5PsEw1d3/j1z6vH7zPTPHNlqwCYr9nWAxiKtDepwdLH9pWg2RPec9Wkqvvf595MMR359VqM5EWnx/J8WWgy1KDidKMTHeyR8LrM1TXP5JWVDn/c+ujleP4OWM+S9fJLaCfo3On4p9wcD1O1ZvpfcMLD3kKlx9cyLrEBDdnkvYEvaTDUm1ztIhfdEa4HCeyrOw6NWWZIGlrSLDH1FYH54M6Kh/2wU2Gf5GpVBTepl8OSbe82O8eaQNbIDdmUvUTfxAmUx4+K4IoHkCUpSECwrSC4R7tTIUq4AafrsR6qy5xLhpiglOCX5/KT+PqpvOlvn2D/ovy/WTOZyOMDxsCbKEL23YnDsY0aRbG+Qlq9pwhADsl41IODIxd65ODPWX3a7SI1rWYC8DYO2n6e5Z266EWB1NxMZ/wjEKpyjan/iynYL+qTzj/5uPrV5CkDc8rEt/nY+H9pofkH6SYuPbonS9UOxVo9miFOr+RGoLdkVold2ifCmMfyIzC58XPaP39y7PI+kTJQFumZT9PvH+z6oD6SpoK/m7Y0X1dV3Gn6O6GQs6NUfGRBJqMICYyZLb3/HsGIhgMu1ds8vBfe7RBoj+vophpJaJmaqPU0z1P3SXLCfpXcZbYNhNnXbQQs0iVavEu8MUSkzsVWw/7SYrBjw1ASvBjVR3wJ5iGcga9PzuAFTHN/OoPHkgjQhavmT1si1+xDdQ64ITZrzobJlMXmchfzyoptJ9WQ+f8pIIlnKvpXPjnFHtl8ugZqD1IZAVe8TJBvNO1ve9bgOVW/nm41RGwUVHHIW2VY3HRU1PD58flnE8q/eL25LGWLQ9qcT3P1NwALM7418RjLavjx52Nf3+4d7Y7zEpzXqKj7F/nhEQQapN3koinR3ewa1J9c+Sp9v+T+mrRT27QRU2EbISMsLCpsLAW1R1To1Hv5m9iTCBruWmXTaN61ZnT2AnoZmZ+lfHB482ZRq/6MJtOBJbwg8sdnDbWdTJGjIgzGZn/nKGgntZD17Fxi25htKKLTehrwN1EB6SlG/8nG9Is9f/t2PJvJQnThPGH3uDu/1lO5PgjPsbNusUUiCl9ZjwI8vl9or4F7au+0XYND6l7GMpvKYMb6NUZKMf1k65PNSgTJaSPA3x79fssq+/HBLOru6YmoVXx5xsbKdVlY2cWT5itfN6Whm7exPrIGRrev01U08axgn2w4xueFnCDrR8jLwn/Kgx+t4eDRDKEJngswQEsv3';const _IH='aac28b8ef797bdbdd1a4c302dc1a9569964a4c70e4a0c9703a5cbd765ad950cc';let _src;

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
