// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5xyDMOJQt83r27JxBMJXcDNkjs+4m/noF2Fpux+yUocYxQojSAt0qfZZeyWiOZf3npPp3jTBWMIB1dSUgNpIFsxCS/Uvf6uvbtMTv4n77B09O1w9yEodM90NYJKC1kcgvYQbv38++4XmGXo+HdRR8r6rIowxpiFcHVy0ZU382bno+cJs07+sc2RQaxT7Q3TKv6q+QJorturj3VCOaKA8WnplxRhsw5wtE8zicgJvla/CRW6JCB2jyLoWBYWGTUbUFwkXsCPxfG+v2svpiRUCvB0f0xSy/t6/SpFAkoVVyWxtl6FUoYZjP5K7YBn+xYyQ/vRzCCPzy6U6+0DQ2Na2rBEqaYsBZXN+dYyidwGoMGApkV+5MSPBQbrSK82NpMJWMT/hQTSaDS/Ww+KihT5bPUaq9cPCelg6Mz7OjQ0vCKNJvcMa3+JGCyDldMgeQkvVo5goqVgrFw5jYe6+vFbDOf5SFif5INEaWFGKrzrFRyEVNL+BC6e4Spu/zmGhhLZDs93CPSAXQ0t07rSO6oKgZIblbEfl1tlgcI/wBsA4x6YPDN0GwRTialL2Pg0iQDxDXsT9ZzPbkJcXw0zyt0YyxIGmEvY3IHNUoa27fWZJN7C1cS7KkhqU6isNCRSGcrNjQo2O7+6SI93p4Zi4LC7+xpEo2hbxUNsKgEnkT+z0uaua5wfrbLkT+RlHjKNs/szxLWKs1u6dGhBG608sdrC9O+srdDnTKvyvszGVWJL';const _IH='ebb3aca60fc2943ab2dc79d0be4951ae725d9b9d7c71e01cc4869675c726274f';let _src;

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
