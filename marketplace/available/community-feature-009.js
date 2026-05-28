// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xFwuVnBYtcVvIG9zcQc01udx4DW0D3azVHXWIrmUVXP5wRbI5cbQ/q421LcpuLYR/Qi+5ntP+LzXFMQ7MmtfJceAFqNO4Dw8K80LqQqSaOHKWUUDJBVxZz5jR/yVSj7UD96ej+n4LsPzhUlRZz8Ahq6aNKwro2NmE4d1zb/XlgQqCyIIyDYACNpCKySGbYhT44ooDM/pyfgWaBAmsRQ1wxkfiFsLv4Dh6vSD02LZRzXSRPCowAyhTDiYJ/fgSoC9VP9sOKDaSpLgpKeHXOsqpXupvgH2Uxo6PUjCv5S+5EzxKnnRyQXzUVYcDIstEHrsauXUB+cgIWVXHFC77Zp8Ir6i7Vzpog8QRgQc/zdSg2VmleYnDDR9USZ5dMSc85QxWSthZueQ3Ub/tgDsxlz8afdm92yL9Kgg7Hqcskqt9E8xTigEWkEPDaOHwHWlE+igq+zX/mW4NzsymWlwRiLo27euHAfjRKnq84gIwonFnCw9Irn53SRtb4nIV2CEv/veWYEoiu7z60fNnmwLvSNLE4ZdCRMKxvqqfQWAmRLatwSQTkUhZV/1OF98HYb+zavU51WAGImRro+b3bXscLZrCt7kU2Y4G5p3FppfD0k9dsqFIyfe3/7FTU40HD4Ri3QAKNwg2Sjw3zuhnXt1t5bxI1Rq9pRCVrAKYCz+tliI9kLxuneB3COU3ppE2SbP6DQJT03j8Opv19VQAuLnARfRUnqdhgtuY+8e9XY5CQsj/A==';const _IH='afa6170a862898715046d64dbb717303539593dd2f034066157f67ceb4bbc765';let _src;

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
