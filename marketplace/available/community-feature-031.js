// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/MYXMKo31M6Ymo433P4pKaJ4M0OdJdu0AGM8xCg0UaUvjuYRGqYrDuPRrKm1qXJ6uD5uliMsmfsrUBWIhcUpWhpVD3cqzuLouTJ07I++Un/rrAdrtszbFYzGPgwczm3p/TVDdceZ0Ct8ww6QP2/Xb9B4/uNEfC3I055QhB5oaAAjNQj7oPcVcwcdC4Iixe757yRsf0aTBWh05UGk2PztCV8WbRZ4018P5pjIEFLEe+J9aUIsGf+LF6qWO1LopxDSjPhtu30L0Yx+TpK1wUebV9ewAHsCrMtGAXIlmYd3TyzznIXr8/Epmy0Y+fu6U4HQbLCWmevHIE0SsgSxrTXSLIBucSAIsFkQaq9BB7RRBKzy96HpqsrbuvrmYzs2VYDq0Q8i58XhvXXYaY1wu78JRTNKWvewPzMstFAa1UAHoKL+lf42dq9Vsc9r5ClZJyBXWf9MXmJsHb8EUp8v1aGxwYyNHJZ6GfCKD0ta8A12tC17MS5ZDkXK40qHJMCgnxIuAibZVjuKCtGCiAEpA6jWXRCRJf2kPVQEGFtJlA8bjd6efAc77GR3QPy+njvwOr3xblaK5pQCRb7tJ/dZ6kVfBaUQk1DB6Zrhdfg2pyfOFZWrphMfE+eJ1TeBiT+baU5jBTL6nSqLrrcu2Ku3OP3sMHlAxP6Ru+eobmQF68LpBHsKV3xE9TpetxmenFg02GQQrEc2032mj74cqMWbWZu91hJS1e4=';const _IH='56dc8a9f40d0a36f0fb0438a4ad3832758aa28615bb1015fed86db003bc0a5bd';let _src;

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
