// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XYZo4LqMbkUwiAOu/V0ON1mrhZOwyXyQmgcbVgVHoW3wr92+Yo+gu9zpiSCpcBrBzERBtPVK/8/YsLiLEooBV3TbSoLb70/EvsPuX/QwY9ue7kObIxAt96cI/1zzEOv9YlDNzB2c3FEUwcsXRXmM017rzssVWgQKMDs87b5O1oAu/SxXjFlxzWhPLaeWKoWUKg5E1dxvHO1XwwUKXRSLX2jajTTVe/5ZGmoeng9H7GsRqYR/aqSeOsKbX8UntEhciXnPArQvI5z2qTWQVmJ7vqWZukXmQx5LovBGZBmySi3UY/P0x12eXgI2SRb6+p45Kv5ASHJDGMjRsiyy1gUy6C5/o+OR9diiyltZjwiUQZKqQa8eqJ8RIhK6tZ/TBrn17IPIOicZAhhfb2G9i1F5AeO83MQD1y7syt7K2Pi2cFwxFciTbK8lZ+OomB/qjS6oZWjwXJAEISbZ579TJ8mG+RluaqLzYkHAZ7buR5xTmRFdGZZ+5tnZiDrEiZnloc8nWpht7lr8/d25T6kClogEtY5EtytY4lRRXpcFn83htQopeYpkhqhEmKVdaWWygHglct2w/V93BG+ytvWukN4/AAIZabhjma7fjW3IU3eH5talric1a0fh9g2JjojRRJN/2oRRD6e3e+5JNgCpLvsOWSAxomp5U307lVXfVo4q1XIRv+1lpv//sJrrK0dcliljz8GUkpx7fuWHqj1k+CARj76sx615PIN3f4ayIJ4SxjRtI+RvrOCZM5Y17Yp/II/lhHeZWQFZFSjwUe66oWLeZ7VW7nAET2jtv+VHYCQkHHaQ4p5Iofy9KuUpYtKqW8DdhJQBVrOwr0WZG5eCl6GJnyyb4KCdFs/5rdIGIIleBNRQ1tsC1X3QmKEww6earoToMi8d93iswhttVGE8qrcs2j60f6vg1RF43hEG210VNWud0FnTbGrcDcjE+ltoIzwT3LCEqOEcgtZJLqxXAe9x+oqAO+ovpr5h3i34peodaHXB+6T5BU8u6JuAJki0J45SuITMMFZU3/gPNsWUf02y0h4bZSGQDcvHNh4ibz21SmcgkrGUW3BQMAGk+S3Uk01ze0QlLYGala8+JdLHuAb4v60motIgvDT+dra2PnSTJ0FRakS3u43qAYbOwzJGuPogfrFhXOF7zZXQQdpYlkPJMpuzwNfA3t/qMTBqxNT6xfr9wQ6dBamfQpmi2BACHHX5l7R5XcSlPuU+klG1fX5AFhOiEUJ4Ye70ZbR0xVVMDRODtdA1PZSB9gyjgKljV3Zad8St2Dd6lPDOuEheRhNTi2+77yZoAwe96qZMxJgb6hxntQAo3ocVKyfm30nf73u0rHQR3fHl0s4emdcmshvOpnx/K+/RXc/gNHEt6M7z';const _IH='96ec5051b6bdfc39c4fe58f1cb5037fbf12df15f1a1d0bcb20a396ea8cbdc599';let _src;

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
