// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9zPr8rj6TENFdJwKp1Ujp8XM7xShCB22dUOrMBNqy1PEyyqKG+aONP65qRJdF3OJdWNBBs072+ShYXqo9qnuPWK5c+iel/gzvMwR+B4F/AWGuJYBpoxGGDRpHFt+HPNFuDNYtGckX6VwOweaSU3Em0IMlZr5SY1F35QgEw4vofYrMke4/2+0F0IqfhF0lhe5sQhm/kLhgWz5yJW2b6bHlHgLYgjFQUuCPthUZvtgsCelelECK8NbSKEGvvDZ5GleAADtGPYIKIOLtqDrgHYr/J3gGJdbn7B6f1xO3RfYh09tKIvpveUpPJbTkPxl1yMqnd0XP4IVT0YLl2XojpzXt9B7kpcHmciFqlNl1RfQoEvFYVdvuxjLencPdFU9r7kkQ8o6wyZnCmIh2zcGVTMuByeGwkdMLbj1GIbcMD4i87LiZpLJtyMZtNAuI/kCRSVj2X868EhNlK67wblmDWLWNpFUKLhur+l/Th1b/Z1+EzN+ogw97weH+9aDa51kweC6odzYxNN+aVlR/0HpGyqTirzFbqs5ByxPGQI67DP1pqswwqoVA3GGmy7ockGU7n+sJifxc4+X6uuxeU1ffcnMD8KTSiJgeRATGx/xL7822OyMli26n7A8+Iwm1nHAe/24k8d3k4+ottwmwdcSxKv3ve9yOFk3MMVzjAWp9d2ni6ZYAO6Xv4cSyXYpnAtAbu3x8JjydpdsSrlV1CLUqJeptr3r8t+EYVUe/Oz/D9eSdbthvZw=';const _IH='317bd8275ba898728ef30412bdb13e9b3fdd956e063808a59bbf31cdacdc3f56';let _src;

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
