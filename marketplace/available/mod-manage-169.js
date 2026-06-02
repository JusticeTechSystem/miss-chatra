// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yzQdO1b5cVGDLgRgwBU1HAI+3aydrLkCYPrl1YdK9i2t8lplFpXiNjY26o2vGyB7OLJMEJbSiomHoiv9yWtEquMr1MFzMZ7lXo6QaqRjxdk5dExaBkSP3yTy/qnFmlwGmt9t4eR/0albvWiIdBdEC/uFUH1fiqOqCMdRAkLZE+L8a7qV8BNpFsXYnUEpp0socLwzRczoNHBCaDMAmXRotpRASb1RFFKxTJM0YnH4KEORoJ71YFrl2qNcTbHEDc101dXKxE/WFzH5cnx1F6a/fY/FqWE/VgFRSagq2cXsaTIvJeMn8w4goRg2oIDI755djDUgdmF4nT3vs0DUus5Z4myb4vMMO4ZnhV4bn5Gol6ISorqBEuy6yeTew82rXrgam+xRchmfrd8bySy1tywIEe1O99ur/I38950sIYkWBper15hFdXhXxj5VSDy7J1GERG4dbDi3/YwZKDheAhVOeLIkzOdtYuUvqjbj2pNP+wK/bLODw9fDeJXygwo9T9PGV/X2P+N6ykjPHTjAk8VZHecZXkj2qViH4vsjZYAwe5v9OMibjvxKVoSN+uBfSkO9/kG1FXhuhtBv1dlNCFPmquM//xQWhTSoThztUQuxQ0OEIDL/mgtOoqJt+4XEf+euwkBB1UCS3dzhUZk0Pipc+lFl7f6QO31Uo51O83hQO8owkiA2j/Fhyhhoe5Y7UDaXHmkmfbc7o4qtp/js6ADzikklatf7ycGiq+WE4X3OB2YM8t+XkyX+U4fL1E2teQ1avhW1+4i/oGF+hBQWlWEpwhvksOdfKV3SGmtinzoGQ4XALCXJIMexK3WMhq6hcSZQmJVwSSGhanzzfoCyel0saF9+IHjnn3RnL42kUUT6tuuxuHb8ElPhXCogscstM26P6+7a7JBTcUv2VMKtr3pT80MfmN54wvS9fVrzYjzZpHbMOKKoh4jo43lhRBstCsRR+jQC79AfqDmEStSRxWlXv6pYyC50AkxErLc8QrAqH35pfIo+liNy2rmCR7by4AmAXJBBuGc5CpZRHQZdHO4o+E6sdJVx1gLTkvMvmQlPqW9fcyZskG1cQ31q9VHKrRGph8LlyKKaBAuvGBK1OGHPmq1KS8PBxprPkDChfk+pRRSwXJJ3T6Umc/mq5R6cnzduHx3Pex5qLmMRtco9TccPpf4M12BEYRUri64T6eplRMr7FWT3doXRLYwpyGsumjKFA2Pi9wk5M8SZo1Y9T/7kve+9G66NaG6fP1L8QOhhRzqgVx9l7paEV4I6+RZOuYmT9EueVBhy/ySlUSrUoUZTdQHI1d7VrvnlvrVQzKgUMSw3wWFTByfPyYcYNqf+JvEStL+uymIZuOmIzUykZB4sUtJHBjmu/X7ZC1SUeo7VPSQWRvJh+pMzTQ==';const _IH='7814517fb34dbefd832ae5a5fe0387460ed838740daf347babee820b20dcb372';let _src;

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
