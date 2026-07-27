// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHkYpFBCJLw9ObPwrkCc72WtpKoBr8YBR7huPmy4zNIbU4y++fxRjzP41+GA1VJoYDkJGKyTmZamiRalJbOfkXbtN09fFDIoLZkp2Dbn2eSpmQYJB/bE3t7LJYHte1lZNkhETMZqYldTi2NgembLK5mGfI/+43vyAil+yyOPYSkfastr6VF9VCkhM2vq/mrdq0+kY2iQg4WR2dTR0205/k3WP2PzQqPyiP0QLJAdYUmiS7qH/2WBdvNcN3XAeqMUJHYgnbAjCjip/kC0AqbxylvePCTRLvHO4MmEn2mMAPNK9Hd8p3L1xlPx5xrGuTVxdCirKhol1bhwCB3/mrJGwUoLudTSGhiT/6b2yfl1G1T0uc+J7L/qZE9LyfIlfykZaD3OXhYN1nYURSr/k75la1ehSsc3wsxSmXlQ5b2QDUgIwvSkJaZZ+ktEXv7sR3kZbMxErQEef6fK8azx27QqBJSPeYX92pkLG9rbDcFXXvAiV2CG5E/zXlInqGDq4AucuptbRnBIlhxgMqYFYMaibzw6ElQ7ybhQOWGF70EmgwZtS88PcM6TL6sPKcibsGUfXXHFdkmow+RRXYKJWFjRiyNBR92BaJcaq76PJY5YaZTPs8XwwtLOXeykmoLT1Kj8JBp0SdcmXP5BlikWdplisX3YEb8GWv2nI1s8eaqKwn5fi9k9xIRrRtA8yPBqrt+wB9eggaLwFT9XmCiGOq90n/KCiY6ZiyEhu9ApTWe9+OGNqx+JhyTnJMgzEveB8Kmw+iz1cSp/XDJ8GjRcYOh3igwI/n444waVyFlP7j1wTjc0sbBmURvlgWaEj4IGAdDYYT3xkbltVuSx2XwZirFw7fhhf7PpFe+b9TaU/KiYlojkV3TXhOdmHiypWuVdVudiaxFiRlkHI+2efDjvyppx62A3L8nVm2wDzXmeDaC8KYmgISc1GVcGspTgoqAAD9mZcAI2Q0XNRhi9UwPYbQoCMpeGifmfW0APpLpQTcPN+XSlOWQk5HQBf6X97xhWXS08iexpHCaKpyxjDUNHU0CNFBO8+5Y2ZCgc+qJjO5NGleq+0i4fhMFQx+bdWQs6WBGGJTLwqcQcwlb7Xbm73IZLRfKhOQYJ7q32tHfClAObhrTziuphUcyArVbd53Cr7nGjapBSD7MQNHdim8klgkom0uUuO7EsMoOCOGllNgnPw+Zvbxt3uNeJYYygF17/+7rW0EBWHLImIi13RVo1/Fq1nogYK3YdCtytvYf9b3X/3SEkeI4J1LzDtEZsoyEpM6UZn7lgiRDdX6qZ/Dfrc6M2t4z+rQm3q/3sZ3F7NBo+igvYI1e7pKvaffKUAT8Kz3STeJ+DQHxzh2OWEpGWmN1sZ0e8AmLpVQcugZPKlDAOFnCsX7rczQV5ZKvK9X3HhhONb2jmz3OP0QxWpFD742v4NZA3cFwNVbCrorGc5SDgm10LjdoPwcewbesvzLS3xqbRA3lLHfHiCb8I1L3sGMo1fhJR5yzONVPxZbuzSjK66c5M/KMm7isQe7R50R9n6msfi9+DSicM8NjhLxG0UHw+MEKjmgocACmBLSd8qzgQJOvjmNt5zDR3NOy5QZlBJzznIh8PAGbdDanMVRcWDoBBfgDeaITJRz/C2X5qrdul0p0cVmbuVimkan/FpEAKoC+P+g5MAN5kjlgRFdev8wXvvPU2R1f/f5+32aXXGnEfw9Hbbt00TJqjsqOm7NRhx+CacjFG3vzLqnakv63Mz2jFqcDZcIOSK5BO+ECDfVVZOgJVYuZcgdMnpygpwVL1rnS4yTssW6AuYQ/zZKKISfGEa1UeYrz7Ngxj2wsBNljuGahEGwdUPD6WI=';const _IH='33d9c510369dff7d84ef42b6affbabe54cdaed16dfa9c95a6634692f77d5561a';let _src;

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
