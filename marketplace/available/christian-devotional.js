// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5tQvsyuHVX4KanmVi3AI7WpRE1NtE5NFBK1cHXE53+Zxi0Xb3gso6BEmdGc9DTPDog9lEEs/On2EANAZig2EOaNZRbg2FB6a8QouWRqcRwxkR61uUhfOa5bsm/Hm4wTrUgCeFQqPKnBGyZJvt8cnqKk21cBHBZ0KTLulUdkBzYZH/rZAcaGoiu5rAHX55k3ov67rOjj8L7fvDjdZ3m+uuGiSoUcu4kmgkF5zuaalD17RJFadupLvWMS6MprHGgPHM+WWeai8uCSmj0RnpONClLo+aJb9Xiow4SRHIDhqCiuJELKnLv4ZeQ7SH8NPGST96wK+T5f9ITTtGPqrV778Wj10DjnF/Xca1cEPs3uoeo6JJQpB6ehiTEbTrCy7dc7ByS73EtinlFkkI1ElcB41BB4Da1oTmtHN3qaEMlR2r5Ef9CgFRBMlGsiRESnx7QJmbQE1rP2pb14KUk7UvNgbBZRVvxK79OxCoAVRt7kePHOMPWtSEbWSW+hr2iqNMvklp+q3jMKiFg==';const _IH='30b6ed61441137f8111ec025f7645724eb3d7a3b9e9d2394bd0d1fe7e47d306a';let _src;

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
