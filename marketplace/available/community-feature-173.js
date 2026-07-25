// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJCyOcuaM72POsgS7OGUHQlqZMDqZtm1DEC5BzzHLEORwWfxm9BuDfY3WyV1cMP/PCcxFJlTPUUzYztTnIGVVZE5OfNBsjZ75DJRH/jHzQY8uvEpYrZIC29twlY4/6GTf4ICCOL9je3jGMamabnOqwr47LWTXMLRZZ6e4oZLs+Gdwf2JT5LBXduusb6FgdFshWyPKnN9Wldd2jsnsi/8eyk+d4B7HHOL3TmIj77OPXGbhnKvnf6NBTMXeTknjUOCApM2KXomk9KBbukZd5/70T5ozAGqwdiaSxz1pOL+Xzto3aqbcVbGkWhBL/fAwnT+vkMyZAldxpZo/2tSww0SAy0AourEGQVVtBtwvV91GEw9yw8digAVSf3uT98Zdgmb1zw49bvGoUwa25up5Kdr2yJ5qmnIunuSn1QCxvNis/Z41J/xpomOGQLzHGDARSSOAzLw4+3u+k5308rUshyvYtRaJRp4gFCHD2tralKHIAkm3PHZeMIpkcwgxHBkt3cu/VheHKHssBtM/JB/FKreRg5SswiMQr9Ezs2ttBy20xDzDw2iTDhL+VvJqWJ68i0pfIptAmZKNkPFlzCc+L1eCgV2ffeLUPMel/Qy8dv5ovhJx5jz9LbUa0/QuOy9MGiZyUcSYxyGnqHrCoUnHlVAuapiLcbNYpQZshKtPMojlYckDBLaO48eDgaNeXfaAlA8m+TxW9nWlhQUNkdqcAehrJM9Aw87mYXyIliXSRAg==';const _IH='6789166cacfacbb51fb55ba00ddda77f71ca7b59823374bef5456b9dd39c12ed';let _src;

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
