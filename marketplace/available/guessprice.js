// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mFAjfRW5bj/4F/3/yNb/H/lXCpfvtudHErtMOkk5GFwfth26v2IIZQ8gQcMIb+0Z9NhycNDYmLMgGQLUWAExGg+5KRMMhqL/IVOU/lbHkAkPVtunr4bJnlgO/1oSy+G6mbQJJ5aufMVuVvTnPPesS0v0Pg9pRItRIYUjnW/TvomLlJMyJc+9gnlubYX+yywcANtRt8svwxYTzEU5iVthjA1gFYK2vRj03S+0ranOerrERqHiWbjKn3Y4pE4PdZcr9XxISCiTgCRvAb4MznxV+xw0VGgbTKexSTuyeAo4cxZwjzPP5L+3AsL6OaFcKGAP3YqxT5Fb7x2TAdLyBeozhmlucZAiaMICt9rSbPQEOsDjERmd2bHbho3/1rDpwpXahupv9s9wZZqmvxvgUZGIPLHM95rjf3FH/2ofjWDOAaDQKBmPj8jfXFx+Hw0Ax4Ruay6b2Kfh+LmtWbYGsXPe4sU6c2K8MrtV5cxUJG8/q0rNnip0ayymo3vkbSgUafn7RGQDB2wERsU5SRxka1TTvfFiSAEj+BjYBal4vX3QKMlvE1vCdxHn9L9mGc6s62ZSWMgSRzduPHwkyy78/IYlOqfYqDPuc5SUY/92bTzVm9CYjl8sUZkB5+MJdM3jdIka4cIvmdEqOQzoOMDWY/11Kc/1YLYNKowsH22h287Xsz6UXz9diDMvddnkpz7S5OwX2wyFHJdcFndRH7aXKvI2nIH0wR6TrUm6OeikkAk0I6OMShhZXS+H49Qsj+sVgUOFhSM14cV650Fb+nMGBxmL1737FuTrl/8/O84J5MeZTLtBGyfQi/EMaKA6M3aJ1kwimMosTXJR7QcXQ0iiTIqYCC2m8w0J+i5Sh1v0ypq3z1RTl0CNf5VtQOI/+zdGcctNpQKdz1lS+b1qWASxCgvxsJXhdNtnKxhnpwxQmqoGsdfDOXTZ4eXMe+Ww+cwlEb99IfnySHAD4I/pWCW66GDZMbu3Vowk33GfJKZvzpzBETkywj6le81U5LoWukD4ekypR//DnbgaOWriyrkojiGyXoqvKyKlzBECb7AzPTEEWwMuPOg+uawtaRgI7BBRPdg5wCrVWvk0OvwXxv901OWtNFOKjKSmM2beZfpJUO11zX1D0DY0PbgGYS7BLb4kD0zSVdeMmCtzbluF+S2tR2rHl0tNjw38N6umJOX48fT3afGcPy+DRN4MkO+xkSdHuOZm1by/IrD8';const _IH='c1cd21ef16ca05c99ccceccb78b84139bd7b54d87a1b2d35fd75d6d190b7c613';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
