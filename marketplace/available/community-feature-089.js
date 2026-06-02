// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cm7kXK23jwKQBUw/3FWQF4WlbHrPxhxsT3W0fiiEMYgyQULP9sUqBxaErjLeNiMcN/51zJBIiCoHpvhEZZ6Hnq9GGg8Gsk9eM+ZBoHOrgWTVuA5y1U4x5FojP7vzMDkE2Qdd4wf3l/0Ej1NZbn38iDo1hrvIyt/EUkOZzJ2VnFbVm2ZH0ciyn+gCwtg7VlSO7IYlaOeksYaZtFvJriryAq8/tFLK7iisiEFkoyRfJswOGhILT1PXuSc0K/3YpmHXSXirwH1sevtEHh5rdvvjD7UYo7301gZohA6oirACHE9JBWLwBvNR0obr0nBRvdklbWi/ad0tMNmSv3Xj9iZwQ8PIm+EWEDUH15vIPSt6Z9CqJyxlAfwyuUDL5Ow7PLHWaFF9M7xUuPzQf8u5UR+cwwA/teF2bJczp5lDR4ee15D7q/VqrOnIqyjQ8H/evwvernEFSK0ozJt4DVkl7lQxEcldlT/FHRtXwfkJESTq/X9GI3BYeQQFEeC/x5iSzpQj7lBi7/mdfDVY9PYI/z6xpurqURJuI4VYyhZTtDdfl2HyrKwn1Mn/PDBnOTcCb71AVv3mBOyjNBhLm/LRaIpKYPeElj0siYnB59pGNlTOtMDAbWckW99vJA3CrNv/I5By3cYZ3GiDNilgScZB+nILSrpjkXjbDjG7dGOJS3HG9hY0tKNU0UwuEfrWMnCx9+//69tDX4vNahFsTQ5QvipkaPV4agvKx5XjVGg9LeLHm3PV/A==';const _IH='16d9056fb64c024cad976eb267b997cdfba0fe709f376c1ae53925c42310ff1e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
