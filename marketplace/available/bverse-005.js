// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4RvdCf8RUWm1JLlEOHx3Joi66bqU09SoS8Jq3TmWCEuTP/YmL8qV9kVVycwZTfehHL/yZxk4HqJQaFBWHGuEiGfxVT62NDRb6DdHIHhiWxl09C5b3Gfb0sYx8nAh8T/jAUWYgcavV7z3YCEocyYGVQeBk+lg809cDXLyXLH9gZV41sk4xyHSZksjp95yAAlIz7BbE1KdBWfeD60AmoVHjEafzcpm8W/3zaYoWml0zg3VdR0L6rWbMbFQW46kLgm4EihgVPegUtEz5K2c6WrtFRnJ3A0AsWEkvnIBxI3v/14U9Wn1ohVjW+4DyrgX0TDS/+E4FSI+lIecH70Ur2H+nG1R2Cr78xKLlOjOYF04vSb+RKrPv2GOjMszmyYIZdt6bShglYfFWSPO9Wq31XXxgrZ0pqdF6VIR8eYFgMK//p3jGpkMCEDo/fACO3wSmcrLj0VZ2ylO9f7IhW4hoCm2oMKEa8BTRt6EX6WaJveIK2PhZBjOpvD8XalB2ijYCrqaJnI1ygoGxdpsPtpc+uJBQ20Ld9xuPvnvQF4SppJtTcniGykYzsVhwjOkMKZq982IPhbleGtC6NPFi5qilowDCcQamK2zUnCGoJCTEMbBm/wb5/Glb+LJAomcVsNA2rh57rLk+v/Lvfykk1yOPJR6F9wOBlY7UnosbKYWSF7lLS8MM3pAKLfBy3oS8DrIk6vo=';const _IH='b6da69e51b3026ea04b6dadf82ef3d0447f32aec82b78c5161086b3614988881';let _src;

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
