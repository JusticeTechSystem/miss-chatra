// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7orpy+rIefm9H167SGdJ6biOTtpCOxWAHkjhbceczqm698EKceKsoE/hJPp7F8pL6AjXRi4AJxdR6QpCWKjWLkdeo3xWSXSp89xZ5syfdC9YUQ7wxNg0YG1ZcJM/yFITbvfn4IxklEoHlsdmmJD+qHxYQNhSGjnGDXL3qmE+RzBdr5lWndAafGXn4u5ZTOZBr16zMHW+PsSRwfOwryLclYnQwYYYmWqSldhLMtUWsdVVHXQo5S5BWtv5OrUWStAt36xHYIkCKIYQ/Blj0b3pS1M/FcrKdls7kP0U3AbutMfNJ2WM9/u6l+pCgtmB1SeDhJFVT84ZVMeHcT2o93GeoPfUFpWAC6aeSTnSaLoCclh4LIeVOMC9cFaGhkNPgzdukEF7X4HTooUdUaMnyN+Lhl/WXlvbSDImZBPvoFU6d7M13LIhLChR20MCDjDQr0HmdkOC3WyFaz/ahptqlweJeS5QG1R9g60+8UUKPj4GZ3e4k/QsodZ67NtdnQxcs/yuoH+DWTaMMBPhPx+LkX8EMTUQVfKvXHidSTQ9enfrvuvgyzzA2z88539Saa3iZaPIs+poCOzdzpuoaTNlT2Nb4fyP/RvaR2q4aalGdmWZvlVZJUiAvSZAXgiBNEuzir3LWis5Q35Sx4/64ia+uFVrLp+X9cQMSW+nGbE9gwHDBVcZo2TsHcnqnTYrjegvhhpFzIdH/xq11naTNhseaz+vR7/SkLPrD7YO8wZydbD0Ymj75clwSg4RJsYQj+recX0MAEae3kYA4q7Zmwp7x7dRvb5yUewOC/Yi/ESNeAbO1Cy17hxLVhELKpiKShVtptaxXKgK8Sri/BPmbM8O+4uELa9rRrNPfkyRkgFIPymY0f1I/fTmursL0uriRxTDJ1fkUdxNgXI4kPGqqyT3LoRz2HTaC0vXlaPeMxH4Kwtuu0p62kxAsly0tNlgjyCoInQcmSgdgEf9HL5M2pSfCBDrzkQNPS49fRho970+tyN/G4pBho3gl90WsbgdrENGHNaWtGodsmVoJu1KaHyjQOlTq9AivwiRTurPnv/10im4c3brzgsg+uoZvPt0jN8d8lvkdJR+/9gYifi59KAd683nIf5kMApe+JwnekoAXhiZ308fkCQ93NKFXmTHIHpvBWkvg1XV4lr/29trmB9AgaNlmywMeOgwZhiupMXURd8dAuntNCcgyh7f7eZ32Zgcfle5hDbX6lKEM8Un3gVbKkQSsZLaXdt9zW59Z5pbBo2G2MJTP8CTQb9YK2zanR42IrAkMzwaJ9MvAR1YqvKo4N10FX87xMmeom0UNyXswhE1x/RrdgJcbgP3CvwgdQN1PB1HetC9nPdDeHaFn6vzztU8c9UpVg+zmzJHyJALiS7c';const _IH='8c454a791c7c25260a28307f6403c54104ffe461e5c3be94d285ff9738e1715d';let _src;

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
