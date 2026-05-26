// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uuOuK3COi1n9yjs7ZwRGfZNxndctl77hZ6AwWFqEBGb6say9WSKnTCCfPXK6e5Cc3FfIHMEbUaLADUxvYxgWWntkSyE0kEogtavHm6iTl5lzoKxJwunMFMWQ5HN4RN/19EDxtp9bRyvp0QVwRmMqVx0/bejMlcUNbDIqSFxI4gZz+u6zNLowvZZmimPdewFrTeJY8pLdONCo6dUNoxK3TE1e/Sm+F41x4934IuNM9h69ghIhSjNosECJE7qWb+CLO/nnRcTClz1zNCtGGDmWkSOgiwb0pJF0+tHxZU5O3kwBmuMHlSN5RtHBnTCV7MA6itUgyJimd6HiE1ipZxj+/zAO1KMuZMjcH8CpljqRNU4yHG1eQQdPvnPf3eByF6no2JN0m/MaPD+aV3Q/FnCz1yLR/dFj29lQWwYAfK/pDDMsnP/ERkMVtSrv8Ts7lPdXu3wVczmBYwvXqGNEwE/Jpfhdk+W3GaDIiqw7Sj01MB44MxeWT+ObjEdz1YT5Cr/uV8zw8e+wQbjhPPZSYcas40WscNogaVCGigGwHPe9s8HdZ0Yll6l0cQbEpg0PMQfLp0+CqZOimZ+J2r2PMvL4OQdyiK3VDIA8wcvQQXS1EaAxkH20RHOoDM97iPxgkAHh881O6c5hvbg6CK00+5TFeZQuViykvLxrHVAEwtQGNH4D3Hm5Vv2oln9FctzFdq1TyDldDF75B8srVGwrztHKBSKmqtigfCX5Qw==';const _IH='3c1aa893d8eeffa0d812ea63585646cfd167da8e36a76b90d33f15dd96575170';let _src;

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
