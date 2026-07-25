// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQR6zORIEZU8g++ZgG42SRFG2wVBmqHeKHqrBgWIPJ8k4exZ7WfmEw/E1BO8MgtkdMeFVv0Tx6SYYM8fraI46VfMizuHpYw3pcM4ZR74/TiFz22+oSMYI4odkqIO5l2DKtfwiEISvW9CTPfqHwfHKy4rSIyHRpQYZODMfVh8QZ2KJXrORxDMms0pTkjInnY4yXKtmQh+H69yTs8CrrWA62CKa+V3O9ztH6QvksnOZRsdXvVwBRYcs50fIG1qPRStVatrk2x+v8sCAYKDg27+bwYSOvQvhyuffoDBx4fHQ9f1r/Az46QKy29VVuR9q91jq4c4m+Mu7x6PM5WWvYNXCTpCciwbMzqF8bQABgPFC5jYiBmNgMP4NIhnXF5gf6FVZJ15+6su/RPBqXeTy9ea4OSHbZIUZ4pDNhYXlhqOmecp53X4HsUp1BjIoHYDh/nYg3g0HUjARo6K8ACTkNckF+grgSaxfHD8/DU9ndTSema4kssR7RlpGvENBgfhxCw+oK5lcT4ote2MtMtGBJa3ka9ACMjgyCrCu301Trl8tZBWkf6eeRw1zbLyVCklgd12CQU7pS0OQwf//LYpIDP7R/vIe0umAsg0dET7hUavRq3U4TFniCCxN2dsX5b9rAykCGO2OnnNebs5HQkIUN0P3+7Rts0pSXED+ApMlDBkOwfYE+1jGGi9dTNxh1yaKtkZj2MZhMIqjXYJaVHYchcgnUcdfmHLztf2zPvpwGrJzp37z6l3xYp4i9BkCxtI6e7VsdDfyq4V24l2gLUP2EYxafVNIZS9g1GgjNDzBsk5ftckaFMLsC02J+O6qT3dydAdk8hILffHqdrW998y2m8c/GwfKA+nE0oZL4GJlI/MO/zDkKa5lAPyRamywVR3TkllLpKHcqj3NuCN1KXb29oUs+K0ZHO7jjrATDzT0Wq64pl+hVrh47QTIHOYOWXHa4t8qNawSs0xpkAdB+YmHnnk0IY09nfDO67VAkD+8ZIJZlP8X9g6EfHJKaMgE29k4aCSQOHtmQ/wjLH1Q==';const _IH='920ebc7af42c8f8ab6f06f1e55445544f33c4eb4d0ad63440b9b6e0e73f24ae8';let _src;

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
