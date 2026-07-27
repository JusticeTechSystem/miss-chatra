// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGSsC/W6lQWCl6WmsT7EMDBh0+lpE8+PzlpAxbPJs1oefUYL4ZGfcH5I8pYIbMps6E6YZaYuJGrxh0YH7ROKQ5tuL+e/fn36Yo9k9Y2U7kXUwaETIAjwVZW9b+Aq/n8PoX3hSM6/teAFGc46+SoUf33szCvqg/eamNr9magLPVUCEQHqfikPtqzI+ObaBhUoV0NE7gfk4xsjlwPjJFP+bygcLMsyjBSgpSe5Dm97OL6EonK0mJZ2UzBqKEsDfqCqYOGMGGybSNAmyPCjUIV/JNtLJsaGTmwFUIxocquFBhQHE6bKaK9ieRBrnhqzmP3jlZmXGQXFZpqQjES6xQW50XPkbX511AMxW2Xqi9ZSUKIzbamRQtyPBUCemHmWO97GIFnorAsuMFnp1FGWLbsBi8pvH7EB2qJpI5nUl8N2GTSuV8SRRrsLlfgbaHJDpM94sru0vxpjKhXs59owwerTrAQw4jrp527Iu4LPqbn8K6GXOUs7+RPiIzko2M3ZJvNyfswi+ReX5apIeYWeBJJO/GcZXppGlEHoLliWdx1AJVmHgbno0lK56Ucav1L8tN2M0nlMN5SQabWzZj+iSdevTQCNFpyQxUF2C/NZAQO3R+06O8jYFX6eTGC+LMfkhT4zLAs1iIfpS/OjE4VY6LeCKYfLpbRTS0W5CHyaokNlnLVEGjkgUQBir7aSh2/JG75Kc2eRDRGX/tdTHTJ/S4mAW9pqvnC4GXOxqhpW/T8hMwAV0BSw==';const _IH='b8b87d5673babc170ede12349007e7564e26a1b34281d3991f0e11289abd294c';let _src;

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
