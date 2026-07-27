// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXJ43i70WOA3GBoxzpOYRDGDGHeVwjM5DXLRY6wTOGtMAwElB0tdvii72lnf/gofFjxrpjRwbANO5yFjmr8/tMZBeutn5dgO27/+Id+PbJ3xMRldaIQHi4eByntIvGxtrXDyhLW562keG8VUOA0DXA1/JxT92sUVTGSbodxazMkdd8Xj5SehqAUlRc3fGImt7mACI7xgsbkGUZjNiTRYc76M+1iMzfIEM2p33b+o/jSFXKJULeLmUICoj81SlsuaFaCgpHSDWnlraMp9jLhiMJJDkzE5PrsKAwzRFVManPh0f0l0AhWcnumW4WF7VDYer5kwmwJqiyQu2BeA1pq/8CRXsPRReBVTBeWDrgWIyve9N2/nHrFADann2xcctxUVgY8Jj4D7XQO54TFOhe9ZNnheiC7zzOiYKsQrGYe5emuuupCozYPQjSlV3/eQolfZmMkew1qR+4Xp+mz12giu4lWwyS3lrp14bsC8E6WWQsRP9o2VTEt5DNyWNxRdyKTz1MyL7B90f6MABBqcom9t8gsdLdxadGPnK6QzCspCYavn/auQz/0UzEhjB+abj60CAd/BRroOK6N2pE/YZLitGEBH9G1h+NunNnK6rVEVQyAnqYllk1Qj7A4N1TGHTLxo0Ffae4ICxDDXrckCDfaNCBlKS16egjySxSup/Z12SMevsMcggQmsUMVtCcyfGEW/1yVkTltYx9ocOvh/TQt0Din9pyI3+2Fz18bu32b79kirgEtsYoXoM68Ix4EVtswA2aoQBzjF74wZR8esajft/hpWI3Sl+mbbSUrIMe7Fnk1ti/dUWFrg00bTDyCsik1AzKamuTOZHoTg7ejCO7qvtMpMS1j4XSgjpu3YQA67TWI3QaJTdfBwwLPSabPFZQqWRHOFp/tLFhp5e+lVuXA9JDmp49/CrFZCSalNOspFIS3AIjCa0MeQxgrFI1XgvDcvHkTq6nD2kqWCZ9SXDrf+9/wL6cRW6LfJzeV1NfJKcMCE55LiXA6K/NQmo970w=';const _IH='b6e06ee52c8334736d22e0f22b5c9d88bc1394b3122f7a2859e19a6c681eb9f7';let _src;

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
