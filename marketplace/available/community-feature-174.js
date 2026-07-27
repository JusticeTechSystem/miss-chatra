// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmo6ZHkZfRMgMhMc4MRIZfz+QxKDhMLDBDskoVlMNrUM215UYyPe4A9wVx1fdWKlFnODcs2+e1KnRFTg9XEo8O5IeUFG5cC9wj5s9T0/TX7eQ7RwHyQrainALkj/H1o5ik3IFT7pqUgyZvEJhXHpCynZ5CCnllgXSpr1xYrz0mky90UsMjnWPJhLkS8/KU3qm5cyHY2xmIvdmqIB7OeBlubgYRxJ0cWWcR0cjPhKaXByiId7X7ME1zr/TA6VlKjsTgMBNW6oO4TGGlxDo/pHwZUMajjCE0AWmhizqshfhENYH7VCaYBxqRvWN0pxKdOKDD6Pcn2aRfl6m2MFiaFOAf/Ld/2VRy3LNotmzSEEeNhZHOj5h91quzXP/CX7G29WLWz9hsc6J0VkKDN9hTYFO7GBj8UB3G3YnyLz3es9tydSmBe5at4LGQZUJT25uxGtbuw1zY3qgO9LCjeBqznO/uJUk3+o3CfZ9a1pO3iUfWlpaV6BB0+98o2zMY21v+cVXEACLKWsnZsEWzKLkxBRbkm7m4AUvmJ7tVGaQATGi6cSWWokZENAowsyKfCO5LAfvqZqZmUtTVhmMzgshtZpcCGg1o6gKoNk4uI0a3wkEsDd8Gk4FV2XK4Zat4g5Dfn7Le11pegevHu5YhzZ0K6OTwK6TjqPemKYnJsra5zjbRI8yB8ydcSNdH99uYkpVc/AuhmvMY1Ms858hXzbTvK4e7G0vJESBIDIYnvnloYap35wVY6dLcSQ==';const _IH='6400c81d0e5647d6079c7088fe576090c89e22655a685b7842fd904bebd2eb01';let _src;

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
