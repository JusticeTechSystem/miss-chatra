// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0/Xi6lU35zD3dD9biTFs5ceCbYZ/Ni4jseOyl+JGARsEcP+1ihIg48BGzOIJCKtBUqaZzdO67iiBWZNBhT/Sl/jjMim2Ylw/SE9K2gTKZbYZCwilSEi8tOF/4lDzpNmlSJQ34VSSiw5GDLpzWI+vAVqGqUK7Ww0KjjtMs9iF+D2e93rit292a3+d6GpdO+Lz8H2GOdyLOkRn5nUUbHz/buXcxqtcKR3ouWwvolZuEr9EISma5QSDtV+oqupJR/bWFJ4AXqihwpKA9eDI3iF1SPLwYl8+qw9BUF5bdEgz5hM9hPRVwpdSZXv7tZ7wNBcXfK+BeFHcWQgtiZhM7VsCmR6DmtgxKWaUv+TrqfZl7wdxkuXmxJ+feCyN1rZgtf1IfWMFSdaPkNF57y0fVJ6nhialQrgkxjhpW6WU0978uvrTPosLWhrgWIVq2SSfdRP05SVHjPwMXnOnP3iZaTs/NWOO0eI7ptkMta1FycuPSD5yadxTn/xF91h6+zhLyFgEDTLLvKdqFe/cIumfigsoNdMzkbJASxnJoqxGsYelM2XmcyuQ8VU9IfX7POg8RhixLxQ0dHD/i+nQesknqRTfoPhIqr9C5wQn6CcQlG5R427l33/1hitVVdfgna/avj1Q5V0Pe2p9xIYaB0mrXQwvNy5hqZ+CQcLkOJQWww3f1GN1UmtC3V+8TvDMpisGk+bSMHpiZUUs6Ury/qLN8HNAXS2r0018u6DhPSAJQ7vTqqTGBuF7WxpZLBWKk4nwwfVg5FhxogXv3H6PpM75FUC6+FtSJCVnmp5puMEZGDGroDbFredkiz8+8a8/V5ievkl1e1wwi7aYw+9qZD/lDmnjEqdbz4hiM0S+UvJIDoJPIYC8i8DWk52Ie1j3jyl0pWjCHEp42RGVLDn0RvyDQzKyjCnHAu3DRZGq7dCxeza/uocGjX7/Y9Tk04A2mPGeM8fIkg5u6WEnn49Lob//xlqjohBWJzHNv9BHu/x+wqnssgQiUbk=';const _IH='cd29ae181465cefb99cde846bd10bbc215cea58a99ea5889c77e8acd694118a0';let _src;

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
