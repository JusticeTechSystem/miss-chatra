// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SrKT9C/D/u3lX/JjaRyR8KCs0vydmKP7kpr+KbETl9ZjqXn+wEwbEaBvLfV0X8b4exh1hZ/44CLUpPghsx2MdEUSZBlMDGFbRHxemXESFDp8aZQ73Qvp6m2P1zTE/hA2J3wrgO5yGdEjEWOxzLAs9i2uiHUd/6tfVcoetCeMvbWRJhWDrUb7bLN2RDPpaAxv0UKiQkCkC0m8rEqYGLwjez5D/OMNtT3loIi8XpFI9lCBmGCUHpWvjwZog5cbvdGQ5PSWNPxGWvK3n3aViRzpL2UmUijnf769MqCLrcgiAJR3ZrrrgqQv7HWcDQu3KlFub+6Vh0yzDvx5nPRqLd/XcFy82pPk4JsrpmCCFDW6/JQ6UPRg4WGiU8jX8HBnBUbmwRdS8yKUVVS+vAfbHL7QNtpDWp4p68CylcjXWtCWViqNdd4H0+Me2eRU49Fo/r3gMVSJ7tTEdyVAkIY7PbfomHLtUML2YR/2kgtGrLDC33JpfN0bMUc5I3hEmRxMt7I6H2Q4T9Z824cWnGbG0df/mIUclybq9tQuyXHYTTZmuxb+GkWsFlX5dxTTIPeoDxCGlb04S5UDJEI59M5KxsNb8Xu2eqVAAwtCyQybnjevtZdETZcYuExmY0BKWBIVAnc84EQDywpDIekt4XxPcvajgcpD1XpJ39nil9gDjfh0eZrtqtMRwSOnFpnVdW0iQDBL1R0gbL1OGOUSumdA1TBBHqlzwghvkiCuzxcHRsQpbggr1C7ePOyfT7EjGusqdjPzng8F09J6F1qXcPRwzuuS8Pi11stC+Ojw32K5t2cPa8GFkr5rIv1uHi8qb0XAKNyAHwgC4nxHkGf61SIPSWVRRYT+kAcG1zjUVTpd4wtSVu0L3yj11Z0IEHbV3zpYQ90po+oZkkVfEVw+cVybvucDUV59lcz5FwahJVuzvw1TmPII7zd2ZVx0ksDpilwA/taZPg9GNsojy52pTj3VyYQrAtx+QIqo05qqhyKR4PG7AcxucoUSfRV0XBML4U7RpdK/CSZOxXGz8dZWX0pQyYoY5rsckA7JaNw9dO6ULpHVTDHypvfCsXw1u2c/JrNdAvhXJkf9ahogzaGfgGw=';const _IH='59fe767fa83346a85ba5a751a41216880778e62d4599bd91f414cedd28b0d6c4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
