// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eXqc0NAywX5vw0aufAnhIyfTGQ+Q6rgps1V+Dnk/FOdV4zvuqAX1amyeoWNXzUJr3uOlTB5F2Qi1A4z0nV7+JRj8tQDs24p8rQpnVvnn4GiZajAGut2H4DlbsiJefDTLy57/l2y5pW9fUpAm+o8/i1Ahc2W89jfdgy07NmmqN36cAIoSsl39VY8+wijzV1mApVnIvHa7cbdhOzkq5DO2hcizBszFL/dMwAcVBz5XbIBk4YpaoRGW6/r+bF88+zzQcx8gGfu94LDQ2Eqe+Wr6rp9oFb2ZTNkONJiSBTIKnhIXkY3pr51jjM9wizh//nlhJ4d9ZB51taZLmTMfiWJ65nPaVc0Snk1gZUwNysMDtqMjVzFN641E1O6GM7JTbCa8rpRwFUDaxwqK+r2OBKTLxChfc5YnWh+VtyAQDvFiTjbZXFWo2H/sbnlv2erWriZfhjedp3o3VrKd80QgLKfqoK1u3UUWCHnCSwia9edkjJNfIRAidMpWAkpsMpBwXKpUSvhL3WnHkeSeIdLuk7xMUiIUHnSavLbw4T7da422z3WMGHmqm/WXL06Arv/iJNTNSCzZ28fBQ6e1ESx/haxBKIryI9okIih2BhCrxVwUJtyLtkQWf5prrg4rIeIDd33j5emmpVvDn5fBPCPyzBNFS6akK3JzH5UvzUR+0E8KAdfdgVNmEl3mu2b7e2N1lOoHHnd8V3/KmITIupUB96Y+gxKEKtOYxMN9kMPD1O8DVgzB3ARKdyCxl+IKCepNFMRd1BSFtwbudBKeGD7GqxI0I4w31J0OB3Rv7yzNwQbLDuqqssZjOoLWYwUITy7oH/9AcQUCmhe9RevupN42NS76bJd2omZP8ONNBKa37oWhK5Tuz54ncf/IewpaS9lGhr91e7Ex9LDmWByd5szYWhtrK5Yb4nxaa50jeRIQm+wSdLE57VgZA6A2tKTvSuIgCFuvYj5rq1A0eVee7FHwjDtS/F+SdzYZ+gIEm0OM7qeH5K6JTy3OkMztDL7j';const _IH='bbdeeb1ba48aee45f1481200d1b12a8d478ea232fe656ec6bd2baf70b22ffd20';let _src;

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
