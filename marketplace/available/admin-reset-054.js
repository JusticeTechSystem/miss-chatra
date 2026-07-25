// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPF7sHaK89jod6N0uDgRs1RZ6n7r/wS5cVSst4h3Z1m2NksAVkP5EWFJB/HGFflp9kYSpgwUhElcKq99dshBP39cOzmCuW59roGIGQMW7LHXAiI0alp5KzgB1yCd3VZpQkVJtPsJ5QLntNOdAy7UFxv3lQnIcQPKWdlVODBk9ATQYrdGiBlIR42El/Wu6ao77ISpCINyXJKkFJFEo2wSCmd8Ie0TdQwINPfo7iHYtR4AMzYzzEqL4I1dYIJ5Jx2pTVRmHlM2TEvPOHJU889YiXLZu2lch/ndOOpTe2jJKAd04kdCBwxRwuvHXSWCiAaXp9rkKPluN0CqJYeto7IAclwQ1ABx/W6f3ZJG4WYqlHdl9xv60JMe+/DjNwktqiw+ut3Nb3+NzcbpMX3tCdhSNv8DdndDlQCD5+aYpZyY9NrB3tG0352nW2C6X12r6m96aI6wBcaOnbDnwPI6gFbnAJtKPUMqL4q/6sy8Rh4UHCnZ8LHJEl1ya9rGqsZGlkMYAQ7nEJ262dxuZEjgVSlwYEQugf1BP6UGhxFPmBcr1FKSrv70OpIpJTDZzhiBd5puqCPNHtZjkQkKFoqu/QiO3Ua/Tab1Ayx4GcX8qIQW5Kw9kfihOtoODpcfZUR0+Ay32Ynh2sqE5aFK6NdPahDB1dR8e9nGnbxIWmbY9NAxnx8FY+8wTEExWjqo3NSLALtyPXBG6MUWkDcU0pSmJy4Q9ElL/bLOgd0Tb+d06e/yvEp1i2owXdhmdg+ZcUD6dpeFb35O1e+jNc055+rK3261fL3cf01HEyIQYdpfg2LuY9OEkvXnp7g/qy5jgAEKt/Yezksukqn1CoqeByNMZE2b3YectFm4SfPuWBc8B1OvBAxv8LFmuHywZe0l93J6KybAeR55rmnm2/8yiIndFmrKfLZJ7PcAO8oFGwgNACiXorLDEAijZwFKFt3ChfdwKYPbckGErTyLh7Qp+wqJZKWqlwBM0KENs9OFJL5kDWUTvdHZ+2uEb/VA==';const _IH='cc4258b190f4134b564ca400f42af1b3b0b50288083f6b8ce4707f646c2c19bc';let _src;

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
