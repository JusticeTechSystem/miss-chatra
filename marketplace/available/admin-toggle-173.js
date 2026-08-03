// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSemoBFpYNOEoma4wVnadN5s86FyEmRm5omC+2V7hGBoe9Gt1gEchAxgwyzI0Eh1lrOL7RkX9x4gltxdwVLrpGy9DnrAYRQD4+TLONQi+lQWV5eypChgiHf1VF3bjfy8T65UgllzRDQ8nd1OIP87+nfiinLqaPjj8uvuYpVurOmCOXaW5djVDjFfgnbSz5lMYAuM8dzj3dBMpUYWzg0NxlQqpEVTpV8mwXgj3zYpuqaKYvwVH2mVLXITXaH74aDw/OlmYXh6DGbYFt4SapbCPYZ2Ctq+sZp1JX27DDloTwguKF0QamKq4vqD9kUDz9JAXvxRMLM9NQZ5iJoh69JYLicC3Y5S/xAF1FpasGQaduLLMDpS5pZiDKaPLmYlBPTgBrTVGM53fycGKdCHrJLfBormCl2m7/JVttkk5Joj2y6A4WnhMARt/UDXR2+JtjXXBwOGDgvmvO9bIFTPIxzGfMq0oRQ/j3JAob20bMTeqetbz32G5PV8O/GXgGOv34hySeAssvY6RIqC1Uhuok/jHkNIZ5adQyfEvPUbN6yoH2FiM0R/fbrfGe6DSqQOXrWZt5pLLf6sumvJ+eV+OmoUfiQ7OBb219F7uHUCGGP7njPqcg/oNwua4lnBLxWt8TZAeIQGMijkVn0DvuJZpMLJ2PuVponW1ZSh3qD0WjR1YOFo9whI6eduzVo8GhgDFaoc8kxdr96ByTqs1+/OZiOjEoLkOP8zAWyDeVELyjh6GpWu24cjrc47U5SOfwDhY2xTEvdYcRoBbXpa2pVKZZ0QtvhCu0J+hfX/IT79opnp5cUmMSVA+5UmUiCRTm+jd/EESoGF34fNOwjtvAJXPWsZV4PuKXpygsRBdHejC8D3lYHsYtR3QbDfDyZwyF49wsKTOISv2wDcF5RkvDNPbY5SlVKW7fZSRXfaMSoOYc/lcXSAY2DXN5lNiW6MM6et08Tw0cujkZ9nlYh1EU9b35P29bNbdq9fxwz3Vn/LTd55Ihqv1wzIVfogu+YNEs++DEKnQ==';const _IH='dd95b5ec21e7b77c89c243a5144c36302abe2bcbfb23f23f60bf57af30c36be1';let _src;

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
