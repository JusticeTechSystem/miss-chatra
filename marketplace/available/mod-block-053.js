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
  const _b64='T0JGdjR93kwipcyjxLNif22iwa3uhMVmu/D8JfVacL+SGVEfHMlRghBp5ELGfaJ7cwigXJ6FiGasADeRypKUrN63QEqSdsgxxPe4aL5r7SYf/bx0DjSad/hHzH54zL6+D25MYfpxupwuNxCnIy9b9Ykz81IsECxBneZ8eL6fxmAHhPnzqC1FfyqpXxqPjz7Zu5K5w3I5nMuC7oom88fId+JNoiMD8UeD89bpK9QUKQHudxezTwpZzxoHow8AYQV4JXOh3PoJzDUshP2158vtBJJTaNnoSBRLcMrC5cMEhq9YMJRxHk9MzpkJjZgAi7VpKrzQuPns8GIUPQRmJXRXaUfmTnD/A8aNgVGBpLfhBw4UiuQhA4zfUFQUseNNdhXP20JgvwVfA3Zu3N3W+KjNvhTiMa4PE1ctJlxA1dedJ2aEpOOBMrmRz7LDEr4WR05HUTgIqcaaaKdTShlT/GrZkOavrbsf9k2wV8HIu1/aQEH09OTI506QhVX7YrISsoJSLP6ly84mpRO1RSbGlDrFlAcBSLOMVrI3aBwDY7B4W4uZC8T0yMMUB8In2w//gYdXoJ4HWR2WItF+u3F04BATj2DwbH75Xgtv712eWjqlknoclEND29zLiTjmKtitjd/LCm+SYBvCMWthSDhvFAJwfiS1btdVoGOEfR/JjDw9I9nEr5XWwx4vQ8ylb5Z8Nw8tvhdws4yc6AxKxM6ZnykpmhtWFCMuxq/MlO0dBVH0MWxq13CBOFsGpMRcxaJFShKq0byATmbWfsMwdSixWKtSTMJogPMV03hIWJrSUJCikoE2N0yeFaA4eefDUOdUYibZKCnh4NJ8doUDtZi5eNieFXZEsgCQfgx/b7y6oiPApb0OjSpPG+pfcE2vg7MYb96Vb4vemkdNy4n2uPAbv6oify7Yjc+sVl2fAeDZUsY6H4Qqx7GasujoCaKnqXGjalLzgKlGxr5SPPyhemqS8Sk30YyTrjj0TL2uo4iPNlaDeAkqZuMQx+PrNvRrXzRL5BaXLUN62m4XNZ8omwimbu1M/EF7rKnK4W6HjZRe1tJ8LHoTN/UixsUIq6OH03jwY3QDTyXw7ZG6v0uHAmvEOrVWM38qBfC/I+9QZfRh1oX+aYCbJsejvxtNj4TtjMa+d2LBAZbf+oaSfal5bqtyGI86nteYz+E154+Vr9GomoCjsxvdLm86ve1nhgqd54lESdnkVNdPCw+ZpcZBnpd2LAsoOH07o46aDpFXEPngVJFhjm2W9vMh9MKaLFJnwqnAOZow6tjJ1B14/ZnUD2nm85inkL51DBzcbH6MckUvWDTlklHStMFIZzLhgv8wQFEfWTuh3MemvGPbWvu8Y4r93ZLtooPGsiiyeP6ceOeaQGpV';const _IH='15111d20daa1c6fe5c8203cbef99d354b68e34acca21ab725a797d44643964b2';let _src;

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
