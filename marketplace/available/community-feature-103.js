// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M6yViwjzaiE3BXg/4SM2Q8HuEk9gnRQ9KuH+5rqJYJ+/UlFzZG4Kl2AZVVPEm9bE7A5UXqQ5FsyQs7CGRQQBkEet7SAPORWmo1CEIOiGccpHSFyYQbct4ztbV2VOkZqN/3LLoo+EHNRx8ik1eNM55aox81JOTDV9HavPdpLG1yUxQDjg9bdMuJMC27oOBdzGcL91nViWQKvPQcCf3NXuW+jCSwgGcKEJ7yGkslO1Nib9i+CbQcm6R0y2eFxWbjBAYYfZTSbBaqvxZDDQqjuHgDRQp9F9vbpDi0/I3mE3Itt0+CM0pYJVn3mnPv41ORoEAcwzKcHkAwsmNM0IM578hPODa4F9J1dcbF65THKiuEG0jN1PUtttQnB43ROiWyCBmFyr02ZjG0WSuAENaVa+lxf+K3KgeiZS1ap0KyDHRWNpBvxfRbgzMu/pu0tSUiI6O9Dxn+MRgam/5Y7pR5SqMIKOdH5cEWkDAlYTDrLoLUpbUM5waVO5SDyUTCiUBP5XBXH2nMIqV9B0OWEhbq2U4p9cV1JBv9GKPYMjIApwJbipPHcEIpOCkscG4t6Bs/tONHJmL7ebhJyfsJGCJXY58uX/cowVXJmMfaKHB2h2UhWijFWKA+WzIB5OapVQxpb0Xgt/HhbJh5v/sDrr9asFa8FEa6L4RGJuiDF8B0YBUZoZ+qCgRb4gVGHL7kj/cVDVmHcVkV6mrRouArubtrEckjQ2Eol8JznN3XMocpo=';const _IH='7b0006821dd6f5ac081cc7f4a1151427295cd099c4df14d03a6e682d75ee0c0a';let _src;

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
