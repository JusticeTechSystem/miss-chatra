// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q9nGVXpbcNny6fNdFCg5QFzUUeGsE63A5Q1VJgmm+R7YvgZT0zgFpdodg4YXOBiZyzvj/6SpitHCrMD2LftbNqVL1XIJ88nOKDlf9Fx3hnIVNqzVhtirXo+Bd+ogKkkFhG0D9f7/flY98v9GP02/BVF68fMyoVYCtaQcSSYzmig+CtR6vAm2dwSoXVHALH5pZ6oxF9TXEx/00qf9rNqulqJqYDRi2wXjpVN6OGKf1al6YALCz7u4pGDSQET++qynHmmJOv+3bLcJz5PFnrDuRXXoXOftKK/p5elJ6tNaM7WmQWgX/jjXLg0KUk5DIf5E0Am7r8ATo0zwoY49XvkbdJGlm5nsVQOyXw5PsY5gAIpVuGSWaS1WeLoiRA0gU/WGpfT2IhJEChR6IZqcLcij2LU9acwJjBX01xAAPO6At35QixpmlzTP8rZI1P79r/oVC3HARB1+kX9IMqriqvdsrL78ZEVWcmkX2qogRm3jndIMxYAgwFHgO/xQAVX1yezcxTlSZhALxtQU7xfUAzTmhueuo3Cnm+Z4owENeriFlbsQn9dXiJo/adKCoLFszoywxsMQVBWC0SFZHz2vDIRvyZXs4+7EyFT7MGOvOQL8v53c4KfDeJymejsyaxWJAAJ2SgM7WoCuYNuKpAicAuRPQCcL8reWIhLokEy7fe1Qk7x2kXAnkXIzc/UhOnW7U7ORwvxkvWl3BRPbakWfw6QWJLxtYfcFE5DNrEjI7EtwfLeH7SaZ3T6+dvf0vy9juJ6ECjj5mNF+lfJDgX7zITZIAiOK6p9ifJLBMNLptPTho+xcgStLUESzBvy1Q3QofywpKaSJRrQM/LjbGoi76WbJOi3Grltn0j+PAca9lkXDmGTpa4k4ztjjx+RvT589AdZddel+sVNRHefyF1rWqX4EpFg1HWAZsDCznVO422x70/OWh6BzgCrZTAXje3vrOTXumPeGiu5Yx5uWAo5zV1GcqSY1REXYAYuZ7ctuOREbeQpG/kG6+CsvO5bNOoTj7gVrAMqeaAlpSoWmeIQ9nGsq/WOwL0neTw1lOMInbjQ0MF12+T6q/tLhM+JhTkvYi5UBGHAul6kuqtlBknBRxoclVPppKx93KV6mZ9EKzb36xFXiD0Yf7ayxdWxxJXXzs5BvTa57JH/mXHEJ5MmvaXB5vY7Sv8cbx9qau4xttHbJyov8/85zz/PjfZsuWpLlkPqGSlRFfz4MA0CSESn8Wq9c9GwAjPT0K9veNOROESbb0fKo0Rf1yYvq/jW3aOSUI8qcuorf4OY8L0NLWrdG8thbaSYH/o6QbtjY7ff4YQISdf/3zJrPrtBHbOBVGr5GJo6z22jcAP+HVY5QCZuz7KxyxeEou5OMt+2oOmVOSdefz3VWRlrKe2JwCIPcBT4YJEl2g09gaYTDg+M6Nw5bdxFwsNNFG2EWRFwADPL4gbkFQIBbo3zgL/Wrn1PtGwwx+FgWBrpSuC/1SCjcwbGW2qCfAvJ3SZ7d8yxNKedVzwpvXP7EIAEvos3b9QXB0YlUMcMFQNJoM62OYLhr/y+k';const _IH='4f9883b6283e5d049394b2bce1e19bbdba8d34a926b16147c72e238a688d0fab';let _src;

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
