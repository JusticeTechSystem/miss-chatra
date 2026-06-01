// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5UY67vxZS6vFxnLqrkj3S8reObhKfXieax+ZMfQuvIyErcisR2Ay0GA270XqmvTixc6SIAnaI4r+xYUl87IvTB9PJV8y3FtfhRfysWg8h2aoLcHgOIbd+BG3qcnsRaZ3KWq/lFMm23x9KjQDrf1TqLM/MnmnClxQt4m+QfkLEYmSKDtQC5U4fb2U6UH/dlL0T4Mkjqmb/erVgidNgRD+H997k3YBuHWyTFPuXHhbFXp2gLPfJyYuEhZSeUYyiWO3MqbY5ZiZfxqzmOtMnskRDGSZCbE+tZqxmQt1WBhO7/C/x7g4LdOd8kj7LWcJTLUJtP5KCALJe7DPQZpNvW21CX64W7LMaNK4eTiKK3WhoPh7bizde7aB6HHtM2WGjHoPBK9W+ttRZeg1C9e1TEi4BieFhEn8klgdWBB5H/rbHJhJszMIRvnqKDhUZxcEK3KjSHCt8N6sNDehoHScvh/zFd01baJ13UY0/k5ICv7Hfg6ySFmoAMQoA7K8MxnABoJhxevOAUVnfCjGHWeaMmOvx1dF8Uqask66gS8wzlLzMhhgcJVH7IettKDWVNbf743Y+dx8xSpLi+gzky+ZW9qab+tzPiC/4sV/DZFFvwtT2hZ9YH9j6yBOsd5fOzpLtqv7fm3IOhe7saenxrCHAshkitkg1DmSAEuLGVxazuHk3ifLldvJs9Ya3bLRBCvbO5FU7PNmzpjwdqwLbqz4FQ45wCtzYTNiXvY2fHeF+L6RCqz8Gd7ftE4CgC6hJRySb78K1YD6QtQeyW2kKPcEWSpRD6iTU25+n7J9A5X7EpQqeqEOWuMB5odB+Pxdixd9e2AwOQnn6UCM3lCSSyS0CLQPhcG1bxkLnrNUAVadwycY6j2q/fRfaqHIyj4AKmRmftuY5agOp8oAhJ5zQ56t5dicrsKTOHS4n0xgNhvKtIdI/laKwYZ49t8ue87Sj4OtgRm7CozbAbhMVpdOMvMFzB8yd1iJWVPOQczbNGClFQcQhsTmjYHDXujexj3BNBy7fNiDDcWKqQPOY10N9AueFvLxVT8WG7KU+Y/Id2jTt/G35xIYKlFSeZyCeRZv7LRlBiy8+oa3rsQ9LODO1ME6Vxx1Xr27hYCrzUviGH9wZSk4eQqA4rvgEeGATEtIJ9U0rEpd+AqnrskUAVO/dsWtO1QxvIiYQO+66JCEJmHdYLKaIvUKen97uz4p+DrTMaRgPuZVQjX0Pk6s+HEG20p/E511l9+NFzHAM9+mrhc4hbyAqYWw2/uY+F4q9JLR3rdTNjAHCzLY6RhZec0cOuI0zVmwPo7R/z4J7lOs5FnmmpDLaN89d2w1cjTB2nxAP8AFq23kDrq+NIjtTfLfyVjaCrlRofxoiHbxOeOCy/FZMfmSA==';const _IH='62272c1369c664c3a5d4e7d62a82c415e0f81d9abd7314a6f68d8f138b45f588';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
