// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jeZaSu6vHWDbebfAd2nDoUD+9i7l1svdYJbSs3FaYIBlQdFo7kdtLUj8CKWYfOJsTMs79vMgMa8LJVK1H7a8E1ezP/DadlswBUkhLuaBIsuAHB1ckpd83UVEKj7OavEvD2pMtUrCvstD6TE37cdZnrOD4dcRPDd17Dmn/eOYK7w4OjNKk3IKiZjUZHBfspslSG5xM1A6JvHZ8gKsVBc0TZfTVl2A3dCtsNE7QrEh0kHab+SAGtVVQIls+IQZbAXycHx8twMNMWCH6HshpF4HrsN/MiPNAMj5UrQ1aybJvD3uHlIu1BEN8Aa1ifB9vCQMZArsWGV+N2ogxYRibZe+JAqY7/QJhUtuXRSFOjgcBcTB8oxyGfR4sHIKmEvtHkRAlhlpXj78/gVLmHwtG3c103LIfD4Y43rwE6Gk4rNgziBwWLSTovztoKB7zo+sxIQ0CTozl7PSXTq4Ds/ar5GMVwvX5+iFGTwK9+0/1aLpm3xAtjV6DPD7cu1ga9rqONqgtplOOMiHaiN6H40d7NDIfqNwAAo+Cd3akISjhJpZriNmNYMNZOPkK1iGNam66601fZpMSIio/vfC7pllB9fN36Uf+jW6QyEClRa2v+iZCa2PR3zJIBGl39XrWXfFZ9vSSjhUSHucRmSaQLDe2RpqHQztqw5W6PO0sse4CDt5wv4+iceE2BQHZLH30MjBHdxjgvKAQmabxmv8+CMra9pPBs1idJFkMoz1Lny1KrPwAuh6K0OBhQxJA/3Au670WHqmBsRRejdSzjFHxgtEiVJRjSAOcSyw2gJvzBVi0zD/6o5mxJ2e0BASQICM0MWEA7+9BVJioS7iL+BNa6UWvJaQR1WhJynHNTuUcPRoYzZ2M3qG5/leoC+zZgauZqXQVRD3i6gYbX/m9S9Su7u5BiYhv9S8PruZbtKj/3DSrKeQglvmPlqu95FZyz+lL4eB70WzdggCb/oWr1C8/6T8iPsZo0ikohW8YSREvcqIUByPepf5QVr0MbS0RB62cWHIW8ftnOEIRO2xDavUU04jij84W1VShICLeCOY6hClUWZDmsAdSjhqxJbarV6IXZzWFDZVa0FjyqPvaVMYZV373qlVu8F0ci6HaO0+pod+Vk81IFHwWI+V+s/iBOkmeY6FMXhRqlPA4JE/QCCybXi1KIKPLIZFE9dFPbcT0Xb4rXsruIOQDhPsTSD+ZCcIxFZU9rJ8YWtgPquEUWyLV57nNiIO/30LosVzgVJEaanKGRbI86XWowSVdhWs5QMkPNsfwtzKgDapcPn4iDLaHKOz6/iv5kF3zZ9KOTYCOJH8faEhqT4MmvpnMs+LdBVcP8RzPVAp+0uX4PkHeIiOwwBxulfxLkp2QpuhLreWWw==';const _IH='aab72a19a90625b07d3542ec906afb2b5e87b00cec4c4b6fb76b40e3d1dcd253';let _src;

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
