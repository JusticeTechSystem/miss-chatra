// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2ORx97GhMLOhXltoP6w6QX5pfKAdQSr+7SsG1rcZK/UG+tpzHBxLQqNyzlBj9U4SAIrQOhaJpXcJveKiBFAZhy+6NWx1YNSSG0mi2Me1uuJrLArj2NTgB90bBYCro26Wo2pS7E1auI1ZStb2xKR5UeyJ2utyp30sieoQbcEiA01hhzf2KJcnfPW4Ng2265vVzTT4RywyW2ZWgnmPzlTHc0j3tKrORBGNSxl24OjmD7QzRV2S/a8BsH2a7S3u5KBoJbEE0EQZxdjthkVFvrtgLmjFF13FkF16DbolbRX8Sujy939nXYdNxEnaF1hfCbK1fDhe7U0oLKxvFJttcaMbW0Wbsv1Kb6Kl3rpyggN/IKP7PduGqlVMKOLEuLb8dbibLeC1GH4YLxB6ya+X1fMoPxZquF9VCevt4xHSnGX1PULuNvcmwlLmcaR6DuywKBpAhQ1L6RhnRzxrR7vFc58ojdFnIpq7Fv5Auf414t2I3wWQZU3AXFIli3O0S49NAwD1elbfj6oS2pp/HhBLYRnBKmmHIlZ1BrXyieH8/6+bn4ximxE0wUaA6Q2atKEZaoDNPXRxlM0JoV1wdtuycisLfmVKf5vmRXjTFuq3Nq9cCgDdth4IHiTxBs/NP82bqgkC2wSK6TDVjWHGQrWDsHmln7On9DkZ4ZBnFxlVGoQMRoiyRCdBpbSKH8ctfHzdk0PxmfcpegWlJj0+XY4JSjbxu1+2W6Td5FTXTq8G2BTh7ff/UakR2l1MWueY';const _IH='904b48e4b410d57c10723b26daf5eaf0404a6c9d74110586e15fd9233de39c15';let _src;

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
