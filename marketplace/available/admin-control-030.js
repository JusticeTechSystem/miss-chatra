// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1to5GsjTx2P7Kh3A2cfm4OeHcKrs19QXquWPXTqZU6lleBMuqe8qc4VmLtOfJ5/DCZ6tgJRunL7hmgzgHpWl4ElLrVy4fnDR9X5u55XM3apumZvZR7HGJS6vTboXcMQsXnLECIHIHO6gAsVi9h6QvE1czsMKsVOQLnS1Wy7RSlz0uNCrjGwBTK0ZcQBphZ1rvBME/wffHKnInVqmI+n9hjmdmcmCeg2wmcaHvSWVwmBbR0fSpfScXMhgGLOgNZrk4dWgh20MbkBU1ABjU5matCNymhtw/w356m6BP1mMnvDjnZC48umO5ljknolpP3kQx3WCNrjXQrws8zea5kDL7Ho6S8/fbOzIk5KSy2XF8iS+n+vZKY50qwJwfOmF0HklF6uT28EeNoCQL4mCWKmu04NDLdQXn6y4ZCu6JJJ2fyJxDr84mgJ/24MIUQ2Qy4IfwQCoSenj22E8fCZopWl8L3XKmJZrErybP8nYdTvSR2T3m8tjSRbCg2lMKlA0ja8hC7ymxZPVGAdGDLKJHaBKOE+fKKdfTUmP+e7FJra0ijxsXgeQiaggO3LfyEJ7P9SevulA3I+lHdaehje0SNKLwKxw11i6HV9LjRJL8k/6m9U1bz3dqmV0E1KwHYVq1qH31B8oCrhPCbFTU6q4y7GHWFM6dnxnb+BTnbSPUTk5V7FW6X5NgDlIh7iia2cBWhxFA0RYKe42Eqfu1GoiIbUo/cwFkCBjS+GWUEocXzhRRYyfMUdYU21Lz+NjMtHTlMgrNoBrw/Fr8nqCHp8hAQSlga0cBt634u5rV2ZQj6QnhGiyg3hVXKLvLv1bSYc9g1bsAhZDbAfTWbbciDYpv6cKPRNADsGSE7HzcWXDhxEg9KFBjjIEse1HjvuRyvJb4/RAlyiICNou7yD0d0z75eau+eyeI5GA3Q2Vo9aJaSGqk9WC11zEUh8qIRVMWiRxXRxkoB7VZNMWs0fV1OzqLpiOrTvwdxHK5w/w6Rfgtg0MFvj4ZmPLUWfItofSKmSCIh96lHThZc=';const _IH='f689859405518da3d6e897b739245346256594fe327931ed89c4a6d1e8ec71f6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
