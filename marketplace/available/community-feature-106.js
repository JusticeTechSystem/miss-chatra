// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbqFtab6EIEdD8dEpprsWX8Wbq8jJLR5PyDAdqyD/DK3UY58qU8nm4R+LVL2MQGS4sZs/Z7lT88H10KP1kWx27Es2zOhwMSQUkiPKRCAuGlXBSX/sH80dSId39Mdyn8mfRTaE5DnInxY37GRRCKyRyMiODohyeAQgpAIV2j53/8JJViszxK1xAW5xd/fSQKZm31OShUop4Hd5n7HkVDembg9i3q2735UnojsyLddKN8KFfyRlj2KFL4Iujn62urmCnR9X2cZlU2O09qfECzteL6C0sDk8d0vOtSpLzx/1Umlske5E055/ijKtkm7HyRjyD0XqIVf1GC5cXe3y+dz0Bw5XkWBEsKHYpwaSqHP8kStrevyIUnBpbeny93vHy0kjx6HfMcWXmn2dQK/1LbLLkbH6Oj+UhWr5XXLuCNAX2rS+IsnRp1B+f4F/ZTOTdTw63L4pfFpM+XFX2aK5pmhTfVQVvJlueix85rPtYr8I+fKfEKJz/T3BQpnEwj82QoPvRNLOQmKWlGfCB3CpoPWHBiDUlcSI39eZbc0AFc+tZuT9nBOo0Cu1LxNVlhB5VCEoRGRNcp9bbuFxz4DHDjECOMYZLrXwA6jLrz2TVyan1yZIliDVKSvlVTR2eckuifOwn858k/GKPnRa3bL9d3kgVwuIXnM2dAullyLgXWZUjDbQvSFTH+TSgIspQP7Wo1yNPLoQoimlDdmgkf65tmOHvZKmkSVLMHAw=';const _IH='5da63b649ba8c5e0b2606c2f39413819511d8a01d5beb371589b7a4acf53e4d3';let _src;

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
