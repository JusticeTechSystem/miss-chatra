// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7TgcWbvu7ZqIdHrkLyS4aP0Pb8SVrrLELPFAjf/OWhE+1yXNO7+MtBVkkJ31MYkHO2/U7GrpJQNgl2Z8uTnWtiEX45b5suzlhIeRgTV+FO8dysJYlCzt54ZyNf7pgQSQY07Goa+kI0Thnf61W9oW98U/hE/asE2mvBRc5P7SaOlZISEt4HOpPa15P4Zb91NtpQkC2fMaK/OYnIv19BF4dqDpVN2Oqmsl3rEsXtEz6oepmboln9UW5KD4AGVs11z5BJFVTwHgcJHa8PBtJFW3CHi35DshvZeIP01tDQ1KnNWHQheMhpwO58MZhZJI+kzj9NGHwmTngYv2IQ8yEQZkJmqC2frmJCdNUpfgRl36A3RnCFjVOqqvBgggjtYWPgytVJICR5Ttmwy6+gscsmnz90V9QQiehwjrAIemJASafDrbvQmo3hY3/1EeA99kUf4Iavput1H0ooyyeLSEmsiOt6/09UMxSfTy1pTnYPIutXgntZ+gRNdslaorTXxSZ9fcwh/XzRSZeOMLDJARlH1SeYScjsKIJYYULwQaKv80zW6HBHbBg+6sYP6uStA8Vkrciz7cpLfWy0cPID+LFeAR+4uiKgsIzGBFe2pn7Iw+1Ult4Bs1IRkgyNGyNo8WxwsKFmw5GsmA9kDGjfXdy84zAk4dSEkSmnYL0o0U+HtfNrXmkL4LeD83GYJylC2RRYxCyfEMEvUj97SC1T5J+ZGgTG/mkISL91ezt4p0dEMScEeYY2/4jQHreiMbAstafX5kVJEAozCpq1GXzDMiWRe1FcncI0ojhA1FLQrgF2TxAiAaEyj6NX80jEAHCP2w0A0TnrGTbE4RWUxfFzL8fS8V908zDPtPAG7it22b1WMgPQrkaFfbs1wgE9280LvRsT6GahH0zW8O0onQ3T9AUFW0ThZIbpXdBhdunQdk40gs/4R8C3AEs4lKrqGAqjg3LhxwF6nFPXFBp3EhxDvTuRUzg4dEK2LKymdIh5074rC2NhOeZAqto40ucS+9rwBHikxiVNT5GvolIcQOgkegO0TyonWqN1jV6QS3thO1nIpXZr8XWp1LSZBlFgzcyVV/yb9V3wYaJvskGbP5e35rmh0TZ2IUCxfORMwk/JfBn/vDFUrf6F9uCb0G5Rz4RVnzvpThP5nbJ2bs3IlBbMcrxF7Opwwu3MNMQgmMypmnsLALCo+BWHNwUQP+kXP0d4f1mqzuFgWJaQ6LQTXm/d55GOyMzKWtP5yuos03RrEDaJFByFbuBuyvkrqTkX6WOpxUC64PTXP5jDpNIE1oxQZA1wnBW5G9H1ZdePYSsnmmpWm/LxknaHXv0drsHUAG+7RVKAuEWklhSX+1oamOv/ix0Nv+wK8/iuCBk1dXCtmef6qo=';const _IH='cf1e490cdeabbc14560ab89cb41c4171454378a95437f50ec0e03f316f17c89b';let _src;

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
