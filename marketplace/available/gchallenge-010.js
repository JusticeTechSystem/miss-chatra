// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZw3McnsQM2YHAjvrp0JM6F6MgmT6w5yn51QrIPKdYS+nB5qHoy2zGDuHk8FtolozDRljOVDgrmIQc8AWfvlRYTqHGW6CRbqxvRcu0eX3zLu5rW39FNq2791pZ5Z4Hc9nRAoW8Hb5cElZEyuVYDJgmZ1A4weEEHUwpCsWwbPnuhHWsBLyblBRvVDLaxpHqP7R0mkL6rItk5B5zYZ/FmI1v5aTo1m8wIAdWiZ2Gb0pWXnk/D4vsMygLVezXF6QL4vkvE6k3fmNANo3Hh9Ydlh218qXnwTzTsFFEbsMC8JsWUCMPhu33yHo1NYEqNfglNsNkpW801ftrYBCdNFr2vydIaaV86EBAhVJx4XCgbTJppdoY2Er0nb7O9Yb2lkY+d2m8mHe0nXA5ZMg0GDGhlDErQI7siwjuHAlB+DVd0LafnS84BToDKyNBuaOh9zUIu4qydFWko0USl0PyzosLrcLLa6QpltqQuOg3MgNZCAOTCwuDRGrMp+ig68x9zwKgHBp47TCXGP0pSpeWjilUvF7GasKyoHcvo/378tTsd0ZJcKBKfTP3floCf6fZAvFsmKrd2eljjqMcbzaQgm/bH+mENaop6YUfdFq/LkZ/avEVN0dm1K2lx7W3PG87HPaRQrV+ww==';const _IH='c92ed2c51fc14cf82d3a45fc1fe8ae1d59306be2f5e6cf1f09eecf859eca25a7';let _src;

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
