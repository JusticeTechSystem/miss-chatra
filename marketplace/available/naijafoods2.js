// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tHScQ82CbEmpedVe3T8hQvmb/h3zJxfGpcAewYuIBDFDUPI1SQupKE7SRqrwUE6JoiqPHBrUugnF8bET+TrnUZaxK1S0cQzv7OMDPnRjFvCFcJbvD7y30iwRLrmXPj06e/FlcEwjnXWxn70wTpKLaz2k0aXkpWqqMq+Glx+inRE62OT/zRMuJOWEjwiIFN/UyQb13kVoV7ghhjzQoaW3lMFWIsmoWzrBAdITrrqv/ctAx+1j9Hk9wR9K3iwg4wUBCRsF+oHKIV2yes0geICo6ESki63EThLrAIGgasAm/EqDKdjMsZUkUKlpgJAqP/6VAbNuyJ38Tt9sPaRxnTokfTMpE4ecTAVHF1Gv7qL1tUPhG6AY4yzNsdvI4EYpDVJGbNmExNXibzu/Zhvtp/fnlImAbtRqzaraQsQpOVojkEGjcTYUd+E4P1Au9kNCjJEHtu6iN4ycAXgv+hp1hUTo43AveMgaJ8oX4/pCLLSkC7cvf5xjrlvgV5j5qOLCdT1zAEh6l5fveFdURPsYAg0Jvd5p+P+R8yOqGxmhOviyTsVxfSG25oZkhEFJwnuNRvCgYVeg/+Atj74sRaG4xJMQLIvXyUekw+FfXNdzoyQ8zOsaMBj8m8T4+PECtdd9agD+dJv9ioT5GrbHHdDG8R6um1Vk8N1ecxINhARlIbXbKW3YT7Hke/CZmmTitYfzwtO9ILE0wZceTavcO33uZ5gKLN0D8PMTvAsGeVyZDakZThDRCj+ma8X3wkieHDLEKHF2LR5Hp7d8HcegVTEjK0ac+KIqkxBQsWXKozRMWupVHoI3wO9r+3smHil5Bf8HEWxX0afWyBkn0oGHMwfF+SmCIZkPYOT/DAPMRJamTIrrlaRE8kGh905NhU2u3OJ+wfQrlkItuwVrQvbqyhHWBGB9VJfrc9Hj434PbanKNOy+iHxiJ9Rmnsa4YvX5TCOFk7BEeCuKGLjcYozW6OJL2eYKBpsLqCJTMqv0X0S1tx77pn93PyG7qrNwLFaR5WPRpFYA0ifyBO2KUyspjYVqOpqIeLFgbFy5/PfafV46C4XYaCqCVkRT5WmR3O/XnJHBe9hL1tepBrUYOBXeH9DARx4EkxtV2grwEEZEsXLpKzGd/dBzqzh3serIJxyoso2cu/0TthAFDjH+cr9WaZKnuhC2BkTDle/3TCRWX4LW6vhG4U/IUC9jjN2H10yM+947Y0WySw6JhSKaGyGfooU2SZibElHR';const _IH='6b3766d4cf0f834298ad494f9bc25b6a950a744871433988b7dc27b70a2672d7';let _src;

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
