// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uDJwJslCJ5beLKCKjfKGbrdjPWNREeeEW/SGh2cMuephwtlRbTbaXiSNpndxiJjLaGWhK2WVSGQX4TLM1K870flT71UuGIRJQxVVcPoWLby6cmlvOUtmkx+5+XtZkB210M1nVq3Nlw+E+cDlGb3LbDeh+6V/AdGHQ21uAriG72txW5APNMSTV9Aij3fQnWydjhBUWlVfGPth9Yw0WoRuwxgzCK0ocyf5ZQnO7jhDC/ROanbJTkXihhUPu+/HLIpPmFaZiwjVW9+o6O0qOqtpqtLYKkbKRMqKqQ2jQFZ985s0BizxO5GhTijxaxg6KpOCpXQAave6qM1iA5Nxm1FM17bA8CQROHsNLENA6+IghkyhGO1E8h5BeF/+dSd4HnZk3dvkTQHv5eHf7MVAVoOnMTpS1vqSMDhp+IT8xBicylHDsMxFe/Ke5Tci/x9EZXVukBz2feRCEm/WPh7FrpXbSlRxb1BtcWjkNs/9tAfiyWG4kB90CUohsYyRJ0sx8MK5eby6GeyrKTgrnD0WTcprvW+wbBYizHzOOwxNX0p2ejt7qV0ezgp0aUNekQYyT6Loswdi8Zo0KgDkg3I6yYTbDiFskhDlsf8CyI//bQ+plOWAQowfN4TLk7NYlpX1KbH4SJIHMY5rwAZvSEnINw8AzKFKgEbADlsX7gHO5jUQfi+gXahk+bJhfGvOVqmPFsj7UPWlTHee4fFTYw9d97guCCi+CGypEVLHKg==';const _IH='884ee750ef039f10a136f1f00f34de8fba12dcb8fdd77f50f3d1ae2ce7f95bd2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
