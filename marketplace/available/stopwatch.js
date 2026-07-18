// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJt4WqwoHroYfEz4F+slUrcO3hv/XuG2zGUtqIy1aZPV9ht0D2jsNPsPA7dIlIcaXbcjAqM+wpBTLFGG2adeKmJ375LibZU6iz2q0d/ZFO3Shd0Vws2OgKI1bTjrQ5jSaEfH6SV5e0e2vyoVBpjHiEZ21EvQCchnV1iVylhT4eNlz8CUF6QK4ZhZAI6f930FWtV6dKNk2HrJcz16RigfGIMvwJMwKeGfb2CSeeOCGWBm2Ah5CnBPpFExRpt6WpsHEOLSDRxIXqK7BWCnMd1HOvxTOG5V43s0mkq7wwqzU5XYBbXVcMz0FtdtFNMiMWMrEL4iGNl6rmPbkxopYnYzno5/7Ww9OOVmIYQWxoHDVs2JTzXEhlR1h+LDAU8USa+kJGS+6cEf2VLPr4kKW42t9SB4O1t6jnm79bBsw9Rn2DUXJC/M0JOwGbzaZTW2VX5wh3BPkmin2WAsmirQ2xsJA5EHq0+SzmohlQEu9Nh/Lxd6FnzkCZlyiFjzk88qkvdgT63S9iORWqyGQdRL3oB3BmMESI4t+o2oQwhR1Tt9Rzh02EbFIa2GpgKtNRDL6qbp/ST4n8VHk7';const _IH='6e53908f4aa62ca0f50f5638df4755159a5e7208a992a0a05ceaa1260e23789a';let _src;

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
