// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0zNbPn+XtKp2k/Xcj76kOu7Geo8Uc11/Fq1HHs5HADNOY85kEKUOyR1dmH9EsIXC8FViC7KGQO74Q57/owd31OFETmumIXJLhp41ZBDCc7NEZ+AHbXa7shmkNbzuZQZ+HII7JOCMsVlGa1zzvlQ/q7bEA9nKZrUfI3ZiTYb25BI28mri0GWhWj2fi1cQMhEI7Ds6uQ3IBlLM7xAZVJRpHMyBpVJD2WRFGKQJytIFeRi0DLDdRGsDj04QXkFxJK9rBt7hhCuO8FKOjZZ6MD5TsFh0uyKM0LkcrwhoTOptZkRPbT086b/mNjPYCgiQmPUHShOYESFMdAgylucEFPVoZ53p0laKUUevTyD1Mv/BLJYlH5SC7mJzb9XDhzdLM0wt7d3RDTXQMP8yJYy29yu3fDybkKvTiNUm4fE7sMUOOABxR5gnQK6VejkuUQcjW5ml17hCuMIqKHei0kEw7dY/C+9/FmWh5tWtZ31ylZnGnYk8DRZRtl+mHuRVzIK1lulJzk2RpBxm5Pak2YPH6iGy0AQhqdwqrNp7BWnAIldcfSMujc3tMAmyUBuyF5eVGksQ/c3Mzx7VI1K6zoNprawjen/uRf1L3TM9SnpvLZIerreBEqGNwr/pErxmihqhaIC26x89l77qvZn8it0gebhW2wFjETDSgr6J5MHNay1Kqa9RKHnjicpuehoqCm+aGp+v58EDZlTpHSecXDav5DqprISLu9Ne8PcmaOsPQdG2brsr+o/s9fXWkSrABZQsyRTr/Mw5tV2inf63kHIu840jW5k83hCf9L2etOrlo/VpPc+prBqjNABpIe5F3E/et8aICHQdAnhzcRea7JaoaWQnMBMpyGZv4pAjcUEiQf9biQhD2ceDkOibmqROmEtgUGSqbrlF0b89q3V89TeKwdF6qw4n2npRqKT+f91Bj/HLCeQYa5E9KzquNJTOuqorQVRW+pi5L/5hgqmGs28dOQUUq6BlyDCq2kfJ';const _IH='df4dd556a33109d7f6fa9669298f03bb7f209defd32661d902a70b5692a0ab9b';let _src;

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
