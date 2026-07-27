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
  const _b64='T0JGdjSh2S9e1U3gmMoPdpbIDa6qDxWDqD/oxljUmKAskszvgXyzGb1o8w5AlNqD3fdR3O8fa/kIKkS1rAQNbEWiSBuIGiWegwSSbz3HaAGqQLq+AoVYSpOXxSjxj0EWtgbdMvar+Y8Oee0j64eR1l22Q/lfB/TuVWTUrOmcJKbkpp6UcKtUs5LEm7xT+QNOgP+cUQUUixcqGtM3KqIyILpeRGYmbQOv5ADpu6dY0bzioO3AAjo6ZjFtohJdxK/zUqByWH9j2KV5I5WGmTceK3hGEfXCvGptb9u2daU0BZ5wz2A7P149Oy8Xujl7HFYJA33TgXja2/urioMBwtjk4OtjUMKR0nskR6rynbrdEEBVcMRgro2SDTsgKClKLTKRG1Rg3tqwgere2KEg05VVdzCwfNl/4tj2TDJfok5XqVSPtYLEYAfapZlfEHyPzR5TTxF+tfyl+tF4R8ZIRN0C0xNXtX4sSalTJ0+2eSUEAcm6Hz79o+Xqx60/IDFcWUZmntiLvzHK+m6Hf15HWP1LlgUDQOHZ19WBbWCXcA+NX09VAkJ5NIddrnXNGIvrVsxYjFwsR9JWo9rWwBbI7NjHghuiWCHkNrEO0bpNJCuvDqtExoU56M9fdzS0EQRtI/AO4blXSUe2ZjloKUZ1lQUt1ZP7t1BbJt0BUn/ktN0D0qlPJ+g6UP99iAJfxfVnMZ5BIxKXrq2akW+c/N4hR6Ye/Vs2It+x8tssOHAGS1LYO3BQB00+M68tPRPW+Atntj5tE/cPHqdNS6s6ctjpVFllI8WqRpLLLE/abfKbKU/e0tPI/SHO/TIMUUp6k3ydv9VWa/YetrW4YcZz1mOTCF8uTfbeu9Tm3/zdrWv+xKRzg1/gFU5El99Klij0yah76KFFkykPzTAHWDtxZEtaP43ErOTwWbAQHt0lRxw1Pbv8hoCFAi3ZO8SxqdXDUamvjEDohbZ5+QhlDAYxVqTdTtcsFDMG9QKSMRKFFnvQ9Eo/ho2pKRFzhlyqFC3MyHGfvLS4QbRbP47D';const _IH='60e2a2309508c489677e4ceedff997f3679ccbab87eb39705174c3c67ccecf5d';let _src;

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
