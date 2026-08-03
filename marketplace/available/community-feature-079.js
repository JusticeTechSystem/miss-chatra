// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjpB+9/fQu9sJGymJlym4E4K8S2cWcWCcd6H3meTys6/mGCcvlXHVv9eDbb5YNiFZgmaeVDDWISMOFEu7/yhl4RMttDO8XSXrGI0Hbm9ru/3Lbf/JDlHIf9Qkw/1jEBwgsnLozQ3KZdytFRACIJDN4I/syNCwCLw6LsggHpL5p/q8jZmgc38Xna0gf3EaT9EToNuXM3Nj+WX/7uj0SJKMmwpo5boGDz6LbjtIcH9W2/JXjcfNp32Vdvyrd6KwCiuJueirqygd3YsK6QFMv0d/O1IUIe8pbSedm3nDL/BvXo00uCrwODVEE5aY/TfEwjp44YIUfVcf7hzCC3WB+1UqLx4jiLkx0J4hnKLjeyWHfNscT3XTfIfnUGC4+BYQI6eOP6b81ffLnNcrfW9DprmYNyTp6B/JqUUmqYNOrQQxcWODAaV1ifOAwenOZGbgJvBuMX8t2sboY4aYceab3t5xC+eSO2l3XffGycu0PdfO8CAFDWU8XV/Kl/yIsKr0J+jT1cvAAifgTLO+0Y2Bog044rUalvqYRyNjtUOFh0lsB6l7QJqKK0IV5ivvVK8PgGalImMQNV8NC+l3nBO2TEqEZaFGfn4saJNVoA+jYy0c6e9YuHfqus/uaAV03JX+BmSpSDEwTCBvKy7aLZwDskP2yBYZ43Z34psMXVZfYDug4BilRg11SEJtvp4O2YK4jaFtGp8nH7rWktNDRFV1AiHt2IA+KWu6FWVk/fl+/MBQ=';const _IH='0722b19ccb6494de8447862eb47933aa9c94a209f52c24d4220a0e35b62a5c25';let _src;

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
