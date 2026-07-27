// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTO6eyPpAvd6o+qT/g6HGCDocmc4cpToNv7elfeYp8IHr9+iNVVrU0JVF1D7SRawLn9j1wa7wg4uVOmdiU2GytitDjwBN4PfInSVMkzrZwPSasURxmQAw9T8SADGZNIfiW5v5XRhqbCjDaumGn7si61SH/YUzsJcean1FeowdYcf2FVmgFhDXhA9aKkbBL6iaunyBsDSGMHlPLEJy1WZplvh+4xnIRMBQ8ViuGagLLENww2CPVpkF5hkzr50tJU7kFZXIWe9AYIyfpBZVuuxOMRvu8VfmQCjymXjWSg/ojIK94raQc7b5G/kBf8Z8m3ZXTjOnz8/1M1Gd8LoMfRup8NE4vOwz4d2u9cWjwY16yLVhCQ5X8nkQRSUt8SOio5dZWw9JqynG2aftPRxCtaoIB7yFY5y4PN/eC7OtrHsIVBIK2KlUrXtv4HTh0pa0qClBgFk7sLq6Zsp0W2dqk0UCcZX2g0kA3+o3evCeK49m4NFv1noY61H3+pkVha5jCrhDFOy5nrI3iL/8zZNGs03cXnV2F1OJ//Li7eHb7UDyeDZE9NHtM2ZpS9rNdyBjqm1plevcw1b8TF/4jGZBqJBnQYY1msbc6jbQkvbOLnxis196OHr6qChaSAPaxkXPjTHzUOsP4b9rGYO+v5QnSBiM5vrr3d+YiNIxwlUujVtvtSQvETDTqx57L0A04+PsDY0LWzsUBmod6qX6bqeUSncJQmUF4Hz5UhvCSVU5PnWp5b1TsU/hh/9GO1LCQ0dqKjg/G9CyUBZ3vIhXn1tlKKy1/bv08VImHSvzxAUi81qAM6kcsU8L8eDY6Yypy/pVc1ylVEaB5Fy/qOiKk+yaoX1Q6RjzceTfQrXNoGaYwk7I4Ps97kElGxVQfcwPKr6m4lxWDmnDN/9W5atzYRiK1/ASKezBKNhKRoJVilPhEVT86tD0ckAionGFOrXkltj8HykkzqUmxj6mm+S+bX9/fPkbdbRIenHaBSjMs0RlTAp5JGqWxdqQao9qJj/isOhTo4YPdVZfAKoyrKSha7pZP8IQ2PPC23cu6iMVhkR9eHTaxyUv9T2rDej7T6moVO4wi20QSlDnsCSOAzwCRQvW34HKzNJujGLlMxTGk5/4o66iz3Hgbo6K5fOcvmoSmo+ExpBH+Z4Nugq/XEF/RL5puKmFZIfuVSbi2MFtNC8VapDCdul55zcZ1Cx7iY9zo/fB5ySgR+0e74PHpcW4LmVN+ymTZz/03BIZhWdqdCHzEDM2ebxoKbVNb+BrMyfyCEXZ1SCrAF+XnUmhdzvwxCj5Q7dQQDhBKrCqxHOSPc3KbrcKVHju/rn4tOQU9MEivJ2RZeE6Ja6rL+nfniV8BpOZ3qRlrNKdmAuAfilj1NbR4U6LgFxvxLgft+X5JHWKtJ+61iCFd/JfjVct1d5cdGoKU=';const _IH='2454516f9a66c2b182754434d7de2f1e86642cd9b4b2f74172c6fcbedca9bee2';let _src;

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
