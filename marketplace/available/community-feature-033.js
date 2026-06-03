// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fR0Lcr8X1JYkO9GzSM5OklkU3qlyXkqDVFIf/cFEl70oglywQl0AllXfNgZmejD10pdXta6T/6aKWzS7OgWMLgurSpBuaAnMpAQxoa1CKyy4hby/SYXDKY76dxvIkDPAJZuRjcRkFn6b9eBnuUokVCG6EP0VBO0M9phR9Rr8PV+ZFI17nuxK9JFHXPFpdkv9EJCjuQE5ZSgd04mUuu1FGq06WasJvcMEOBRIxST02upBxrxvjsEVRtF3HnIX8wuICaZ4eMJC/TCtUG+TzCPo/MeH2SIrGvm2f9RlDGNTl+14VhhIz0N5LGrSZX6pmkRmZERnmKHL7r9mVa+Vf7MCTs6YYFKK2o9Z+y46mHRbbSc349M/1YMefGmQ2K+KNKAnqFaNkoqxY+fz4ELQ8P1C8fiK5G4PjU5gq1soccuC0aIZFOEwwpAU8Nvzsnl46p3UNhZBfwffv066xgZXI746jW0DRsaGp/vsepHAlXcFdUM1w6fzsVLDe7wjxvJdhbmWFM3379diYBkvwBrnL6JUtfuUmYLRHEojiBKmP7LKRFu4WcewSKPo56pzscmIarPbdK0d6pSe+u24yzTo1n2Ic4ztHuyULDmMfOdDXrpv9DOB/VfUpgPkxV3Xox6EbA+lp1eqVPCN2KDhOMhLdB7QT/3qp305DSr9LzB99XI7FylmHtw41BOEKAFytAkmGEByUyKopI9vpo6HofpfOV42JvsHruNRDxrErA==';const _IH='258a6ef48efab70e77a1757dffbc9821c648d61eb2b40869fc0ed3d4074b91f7';let _src;

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
