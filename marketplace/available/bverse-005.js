// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M8p1LbSjm+tntNWXkrLB5Iilnw6Jq9lZgMLe80b0jzj5s2N2E+CGTTP69IjC/hjSn7MLqaHfgyw501nI6v2XfDNgxAFDcdbZKk16hQ183HidCHAB5fBxC4KSApQPi8zunTmmKoCN3cmWWEZv5pp6xQgHf9slMh4HfvBMAO+vPki8dyQb78bRdc8vKy7vkxRUqtewGqEZOk92QGkTYFtUjCWI20/opR2PhdVbZuwD2+oAxXC7jvnLtLLq/AhiQGFZ+sNqfH38rTJdSgmoW9SCFDeoQwnf+dZrX1H8o6WJhvGeX2bUiTvdLZpGK5PfvOat7L1OlTrBQXCs1F9fzeGPkrSaBMSxyeRHd7y48mBJaorSRpQmwGvACtdr26V/H5SFidNzHpoYOiMCc1Kluf0i2MoWTBv+bB0zi97IB1Y65iRhQS8iEmKY8iEXpi9N0NgGH6Nv6UR1t3H9/nV7qR0/96IVv9T+7qGlcOobwRjmJwBxOSed2SiP4+gv6jW0/AY32dCVjV4bB1jG4SAtOQH4eVCxJhzLrqe4L0MDCyxPHrHrmF8IpB6QZ6AcSPQ/vsUY2x4OVF2w84xSt7NYPHAT1UZoExs77ivbb8CIHRi80B3L5QmkpGFj/fUOSQ5K54TA97aB3AMaCMzw2o+VabmErskbZSaBOV3dLDh4eONDLR1pNqMYWfH1dqCnJ8frVBRW';const _IH='954db1589e08df9ebd963a83cb0354ec8ad96720769f2fbfa58223689fa3c94a';let _src;

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
