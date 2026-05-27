// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l3ar/b/2R4eB0yiedmOusq4kI6fWpTN+a25hflyMJHHV5GS0z8wS0iWN9W6YeyzkW3aby0bcNh1SO7Rk8CHXobYH6HYLyXXWpb/YQRSa8HLl2M80CNi58PotGUbiKYGuNC3mbx6tA8HXrbStLFRCRSajUadKiBC7HNjkZQlc8pIHYkx3MlzcfSZvqXfv9mJtgQfvt0fVfota1eIjYotjeafV5orPUFlNKSC4TnIH3mWfLjNTqpF7zwhqVitx2h0FZDyhEgwcrFv65ecEiNc2PY9JpscHOvtCv9A0LXmBC/LiJz9DvBQSrgiqGypoVgnUUlcJNgNt4eb2soBbeHNH6WEo6/uuRFCjPGA6lTLd+PFyZbQAhHmH1LIy4V8yG9nx8p7dHgIzg9GmAN5Sk9J9/J5ir2zI3COujfR+ta/3lKtpQQAagAk3pt6Q4Tu/MzJdKk9ZUsJRbyHG1NnTLl+LW2cTclRHJFL9LP8UuVssY/EPz+OEA4fRVxlHho793EgtiI3VvX8O6S7Y7dFtk642LURlxnqP45lsk0lX77lCdUavYys21dnxDLTFIUlu5+iJilZ4/PtYSx+woZjG/dkf4MNleD5F8/QXoj5sKQVjv2FGOPAqqlfKwyLro9Dkpnn3o83cOswjCRTcl2NSCPZvMOWQJAH5u0a8os/hRDIe2aLWP8BXWbAKQb/4yTKua/ZC8TfbJvoAmA+KVlNSMc5JTq2X/xZoYE5CG7SWGweshOFa7a4uQnwh14CS6vTWQ4wHQU26Cszs7fAftS5Rm6qifqqSBiczOaQ563WUOL4iSyeKX65T3IR4tHsHOoXKNpipjRvIkttkzpR6ap8EVxJI8nNoNn7+KUI0LoQzA54oNq86d/vXQ2wzwU5DfDHkSnUV7qh8duOL90ud7ZkVoThw6FORm08J/fktwif4OYBy/Ye+K9lKNWhitF8BJbdXlphvYeFqeieI1u68+utlyRjg6B3OpYk5tDnYVwHWop4dig==';const _IH='af88f997e10f8e4947b31742adc08de9830e1897f127fe94733ead93509413d6';let _src;

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
