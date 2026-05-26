// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hwn2FaFTrLVlVh1pJSZTVMdvrrvfg2H1jCEwnwC/fTaH4VKauS+754tIOV9yjXbsCUkfaSn4cthqraGI+jdKX3KcDP38q2I/zENRXO2Pgos/IRpX0Hv/C44k1riJQP1ZdjdaRm91h8DOyMdY9cxNyiDQOoeu81OcPIqZCpbiDUuTDBU4wzbzRV81xo2xuEEvcwxpWs8Qy7g2ITi+eXzP2bCxV+BTvWqYF51buIFhABMZ7TIjL0XcSGZ2OWrxydN7r4M0ORFfncQSuEhYovi4uxCTELvT1Ao1vqjJg+eurdWhIYy9Uy9MjkB7Bo4wyUYgEvVsKdTWDGeZVcR5HJWgDt//fDzWXfI5q0IChnOeaqgCuasO1AVKZB748y7ezrQL3yMlXgHT9j0phb6wNa5rPGKz01fIVOC73P8nuUTVXCpcyH2ycCPQ3NTbF0hDdr/6+lbkY7pfUy2zeu5f+1tsJ4Mu078MlulGoRfQzY7v9rTTQAlqkDtSkJHmGAPbUcSHAm2SBqmLalHVli5egWaszVRXBbuLBKPHxenrQMK0CwT8W9Zc83X96bZynDw+5CiU2J0ZDTRnwpgJR4thTpSgIzy2WU3xCvWwxAcD3211LCpXhbJjpyLg87WkUawGazQp7DsS6UZZnKC/r+PkYmykrkl9X+Ma4UO9XQ4Bq/s6zfqGtti88A1hgPPVC2lKIIpNlP68tsI/r8nppyfHkwWepF1O1J+Ov7Hj356zAK6UHurDBwA3mYe4r+nxoxUDmbaV1cZYn0ZUlFunXOIrSX9q66AaCgE3EK6+JSlfZntk6x3wSQaChaSB8VPkxJ2P8blkyWTrZ4OByOUD6aWYOsmyj/dfASAc6Si6brqFQ1EHrwFTLlU/euzzdQdsXrr+5jRKCZl9++wmsAPC2fybLyNSqlPrOEAZhVKSMmHae64Q0s7xIG+tQpTxvm7Ct0yinQ/H6ZRQs9nDCvyFXmNnVm4FX6B1FyKOyFM1timqkhkjFZ6IdRn5bWOnXhLnsgjwbuvWZtO571XuVlewX//AQ/gbOXrwqbxYp5Zkcek8Q82kUggmmIvniIZTdCkQKD3/nlk+dkRcCslAGoVZnVQZygd3Kj85DT9qU8vhH5gFSN6IzkIqf504XhYa0uk5htyEnAiMr84nbX7rmb3/qjTNQDx9S67UWjhtFt5foaCL59OI5pqaybbfICA7Fu4UiUBoksl+MZG27+QGD4F5HC5QoF7ijVJWuaICSX3ZmeNsc3SBr9MciFyoLz5M5pMy67kPoDGbS1B3u2ukjg2tz+UTjJAuwpbMbfH1aytYawAgwDoiKnkVBYRobvGLMnv6lCEXyvAYmyx/b2+HqvCbSV27YYKEP/wIEMj4WMc72punM6Cu1qbqPJCLqYwwq5shtDBg9DNKecaqasNZ0G5SLLnY';const _IH='da804575ca35020db47535e9d86551316046f093680de6d1daf71e3a78afbf54';let _src;

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
