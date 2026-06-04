// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DIBGH8gGc/r3Ny1/A0oMC2MsCyOU0QSbjocdYPTvf3twlFAcB09y9qpuUg73/RxcgriCqAGXD6rliJF8bECu6GZdeXt2reuGXvv7fyDh119HG46+S0jeyOPqEOFaOWbtS4cmJZFVS73Y0AL5A2bMGx2OfJlMx7dnjCFERX2qHZdsq0fM7IuQhOqNzT5Z4gZmILhrr5uuFltpxfJorfDWgQbBPQrJClnUTSZWzXnSVEkTecD0zx5crcdhngu5U2UVWIU367IFqMdfuQNIA3BXvOmnM/k17bUJY/l29mc3qIe2Qk4qGy/rxratJOnDo9Cpt4doX+79qITMJpKDUXskmQpUFToH/NfB8gCb9NcsILurl/Er5HIjpT1y4BQn3I3ERBmXqfueyGlda3znakuLZLzNsUx7K2NJSDh7aX+TxF36qAZZy3eZMpeoiqsLkC92KT+PiL951c+XcegwRdN9DMxNllfRml8gsPWdoUnpRvyDXm9gpcVy1EYTggvaSDmBC/I7u6wN1LuTLYICwj9jKyJnaMbt+68y8Jz8P5BidQ+w0RCH0WrVrCc0hVVCH70dTPOkLNToYQEKfeM0cvUTG05wlll//EpeQkl+rjI+A0w5onrSouyaiOYCbMgOb3reR5aR+uI/lSuwtdcDb8VuXKmi35/+C8lQtMRUS6Ba0W/ZhE6sjMXy5yI2CBtVvX+pi17Q5MVKZT2OPSMSGMiIFE8ghr8mjxZweJdYWCnxd/pHxDY=';const _IH='e110e81c96af4ada72e44bab0d79adb5775f03add09b56464a99eeefdf3d08a1';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
