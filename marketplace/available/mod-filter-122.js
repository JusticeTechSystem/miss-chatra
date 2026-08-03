// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMyw0WJ+f8LiXr6KkiJ/fTAxt1tqAAP3brQYJoRFei70X3RL1752/e1fCT+SeNU8vdgdsvOQlxdzbO+xs2zxxJu8TPAF934wGisDhQ6nhb7tm+jNeFnTCwex7siQqNizj4NnIPWcaC2mme2lKlwpNFTvrLxYxnwFpCnpKSQ0pEvYyh6qqsp6LLxlLIm1uYMDeFvdHvSljl1cuayTATzYs7QqoxkyioB1N8qkCOX7oeEF+htZjt9rwp5GVsBVlBrNhSu9rfXVimeVhe0v/ZCPbnGCdbcHD+9YrcoIS6Tb519XACk2yPG0OzuCZc/tdCEiKr0lP/WF1VwdO5kWt0CA9nSD4hWsOmIpa8eliJ0K3OARqe7KjooWsTlA4BE0u8azocQDWBWVyDHoscCjzNBg2+aencQT4ljNhcYlnTq5f4DzT50pVXNf54I6DNXr8uCnNOyTvm0jrd/Rff0CZ8XfI7QCOZLpwPAcRGRaFbKU9pdB1eiVAGREU2wmWOgmZA1klMqh2FPBn06mztQjm492iz+zWM7cZWPE1C324dkhn7QPzJr9eNTQesCVUblvRx8swbP15N/oZiOXWhP5GvzAvc4PpkzeqXJdDkS/puUluDHwZabspBGvmKff0N2Vq1LLvEmMXIoTFjdrGklg5WBCa7uVv+rJy1UeHsOwZjHs1j+NlLS41dkTOQTm9Q503qugj2iUlLU7+LcUWHCX50XNEye7GODZSYLcdEvi4nOI9wry6TGMgKGX3ey2Rqvvo9Q16/Y8KSbvKg6z4HTQeBxRf3d5a8TZtlSIkwOrH5mgqLkHIdqna/Cfb5b1B5pojSdtUJaoH4n0tPz/1ntS5eWFplbP7fNL1cO1xW2FgzQ8dVmtE7fwz2tURgyQv9YgijE/qYQCZUaEfFKx/UEtW8tiCRnyBiQQdlc7xxUbET3wd5EuRgHSeZCmz3wwG7okucd5w9z2KMtwjGRxofQkgL5/U7iwPgBaJQj2v5zPWAc+PNLpHB/On5Kz7of49VFqtQtdcTBjp/nkI5TFm4TQHUDsuqUVutmNvtXb2pGCKeWIOqqfrjg6wD0pDiuvqSc3FPti301VgCBUf/KUuogBrnM8OPmQKNXcd4Yo6l5KfK0NIlUUksEWbubdQU5w0AMUYjDuAjvbsIjtS0c2aE5Wqibihbkzt1IgZ+f4HqATYJqA/ltW3c75bW4AtcaVdTun1yaxJLhef6mwSaiKgeOUYnIVw2VzQ3M46IJzJ6tBypeD8DIhYXLKlrsoYBCVGyBdrqlV9sfSYGYCXyyexr7MAtUrxHP+nCRCjZCDm8KLU1h4whdmE/glOSXUvnKBlb7EOxMTATUaKXfWkIypOusKkbTjgLXdsVIYjiOR0Hjcdvo0YgRvMWcW33';const _IH='40787cbdc204570ef36191ed54c5870f793650c0aa90422e16130cd97150e548';let _src;

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
