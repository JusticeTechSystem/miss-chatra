// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yCecW1SAwILoizPGxsJb5DOeEaJVQYhLlb5Mp/ZYkLmNICob+KJGEnno6taJBY35b8qb0m0Frn1QffMhxCYrnFTY7ZLV3alrUd+PcbSlUXq3+RCMU8wLNDzAOvf47Y2CHbUnWZJIWuiuesLOrbYdgi3x3ENAh16ahxzuU5m2edVY+5BZlr/J0LYk/ZlrMBNVmNqfuam+gJjP4D0DhCqWBJ8lQkoFi4Acd8BVyEvP6qxcAZhXD6TvIQf/FjnmfyW/zW9/ek/AYn0JqMPb/ljiosvgS/wJhTSTAroTBW8R2oFJ7nhwAhzGKWJ9S9eYgxYnhKtvO5nY4frbVP5qHT+IXb8kE3W1KKBWadoJQkyaEZkM9NcFBbh8r0MGH8lmigz7woFYDVjqHrrT49ZmmPnRRlbO/KkVWY3DTs60F+28s0qHbD6331+2JmYbMLqJflHCrZZzHC8os0hYYGLDATGmgEDcqNp0OSq/L+P6Y4udrlyrUj/QprVf1IeI8gdedmn4uprZTnAiiTaDK2vtzblKosassqzjkAcVjA1xdRJsUXBIi/9WgvhVNDmuC8Wm4FZAZq2g8nM8Wi8nQZbcrZV+BzyCLWba/mcDhs8B1IyejSitPVOAbefQT6DaD6U/ahXZjS06FXDM4RODeQ3HVF6JMYpsmq/EGJOIMAaiwpVB16j4ClEd+/uoP8lL7XYshKuW/+k/rQR91CUDGLQzsjW6/mFzB+2sr4dHqQsuSrYHsZW0I+TTCWBfa3K0U+k8fzonNFoYDxX/0ybeYn8ARJXiA2rSyzDR7UFLT9GSouEXdL358bII+p51mKAYL7jaeHH2Be0I0of48N2eGKh8bipfLuap4I9ZcIJsZa4OLE2hxLoBrRXFGPrmOP3gyeux8q86js9Ut6mcyHz4949xRqRr92w9cXak1lrEXYotdJhpXAqMGNPQHnwLdBPFnQmpn80vBHIOPa1SZOAaJO84Ngf0RPeoEXgziSu5TQdaX06kLyYYM3aiPkuVRgmbgh8hThn4H4NLKD4imR4bsyyU59ydY+JGp44c8nhWtmwBYqZytMN0nMR35QCQdbb5SlKOREZii1LubjYTqkv9bDyQJnTWouGlt1Q+cN+OvACt1Iq90DwqrVLO2gN5Nwnk1sAvROAF1ANgNyImkiVLEead1RrZy7TNHFJmEDezVLgVVVClq5f+lQiM/TU8v4aj/KA+PttjdhKJwqKJi9SS2oYyzqHG5PqaucAbaCjTzULLSpWYCIdlSvxxzmfne4tF2dK+3KTixKkKE24m5Dm6FUEoztvRSHyOfXE/EjxTk8MbvWF0b3a0w92JJLP4suFtzoU6NTXMsIZthD6LsAoQGjtlOJVtmsjNEL4jhUx4X+QPgu/pV0hKjLAcAUAHRbT+arPjaRq93Nx98MWyWa/yL3xSRc7OGK8COErPKNkoUB4KlTqKKPD0YZPc1K+31oLKsmfgio1rmko2GHqy79COk2BoRiWvw6NLAfAC3aS5OBWUeTHxvh5CAYGDzyMXQYxaSJh9IF33h/ibENWZ6ArTAJvM7VGs+9XHFgPOiULa/Eibptc5lasQVzARfRPsWNczMRHJjkVNYAJlE2pSNJuswRWQ3I7/vY/xgdGMnEMnuPTEpklw4BT1WqpE9heLWDyM0ReRvCao9J78sc+swncnVFPQ74GVXNWfV680vfaT5CsKYRTLQcBXeg+G4MaQxc5auFCxJw4bYws8XoQVjAHMtl1Ra3sejstNdjjI++baF1MObnKlQK0p';const _IH='6407a4b9601f42d7772013cc91e7408e60bead6670e94fc9efc5cebd4de52d15';let _src;

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
