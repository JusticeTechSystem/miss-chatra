// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pjt1x5FXMC0Y034anOEiBFeLoPcC0J9ZPnGiXBD1yQojeXub+BXkaFzHnb8ZttZdd5qrj37jPTakyrmS9IORuEABP8v5tmQiR4hR16hQ3uLIjQSBc7ns42HU9F2LvU8RHiKOpTJ8A9k/A11rEEcU8DTqF+O0R87YyjpaM7eRHM2YwG8FpkRbb3DLAWLLONh+ysj3B/v/OSruagi0wIDI8+Chlh1O8LV2rgDRFkRifjDDNyA32lFOEyZe+OXWnPY0oEXkWiCdMXtZ0Dvn03dc6hpKlsULbxvSALyBzdmkHPgZH8LzarlxJFfU0Zg/VP6mm8KOgQNQyKbhTI5pBrjNJQICeCojf5i3HaLw4bt+aPjtHtWTrhZipW9Ih4zATDEfRsVZXl/ThuCLZvgEjTSPH5zMZpE8UuX5MJRhApNyzfEPqNesL98NYoSJJnhBn6mA6dWrLsMBJHCfI7HfzFD4jK6Hv//nw+gDbjvMnHUPSZHtQDc8dcmVsuDf3NUbsazSAPlaX40T3YXMKaEirm/9EaYaPSAWLnusqYkXhFVTm5qh+Zb1cbCAVw1IJCx//YxPweNzfNXSaqhUUTqArwdk4TWVHHQ774iwItGF2spSWfvQk3ikSXGUWpzCFQRKMkLb6JeLhZAAXaaPA0FWXW4k1G3Iq7+9EKCh0Q16bXgR/ZKgwcvxInADKLUb9y9wwxYApScFTv2su/6CEVktd+Uj0QHZZckbUE/EkuH6R+Lwdsg3Dnb2rZjOCYqbmXdym8hfRXJw5/0LigdfXe3yxwGTkYQ/mrKNtp/qAa2ahrR3t03kE6XiXPegIU/857b9zSFm9U7LYeeJFnxfWyTMnZFSBh5DP26YJSZtSZTL5p2rrtMWBx7ojAa77LhtnPvfsva3UrAIb0bgnKMDzYEd9CGLQheTBiIWFgKPo2SpMCxsKyVWFmT/ruw57gBDfSY/1dLNAHE6ep23eMde60uPnFfQONFLTzMc82pE07ia6pKrhmtgt2ulIjS7rwP77gNl3wIGixieM/6r3Hj6T2nMWUxRWJGsq1gKf8G0rMjQLFUFgqPsei8OqVdHy9ElRhqBEOCcXBTaFy2uQDLiq10i176LCA9qIBjzXHNpLfcPKP5H7HRWInVoJJLEDyIbogq4ORe713doGxle0bR0oeS3VcVx/6JRgbWtZDF0x79UOgR0HOLBNBIrvFm56yIjXR4AGyIfqg/HzjQK73q1bh9uvA==';const _IH='3c5b507a9f2a3527f2dcf2907c0cd16328f0c4aed442fe81854cc0b7b04e48c0';let _src;

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
