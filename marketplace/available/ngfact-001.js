// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KKnBSEtuSdfPIR78KqQZ34CT9pVgqs7JsJZQcH0EGno4JivZEfK63MSwkNShS35WPYpLwDJLq5dtEMoHqxfiGVex3cKAq19GD+tVfQCwn4WeadRlr5q0KBrRNRjfT+PBE+HElSx9+OLsv4IfuDDhdg+11hG2KFANzUIabQZlVZMBo5T/egwtQOGgLMxBcdXyft8XBrNcEY9rmKrDinURzJ0OIywhHa1dlZPHCEGCqLttKmdmS83fckuvkyt9LeEIF5qEvwGRaopYsDvvhfYWs2hSvqYcHp9r6nriUcTcb25BENj3DKsnSdOZTEvkRzp91BokULQdrgpwf6okVmvKRCEISYAY8KksBphHBAkP7zGaPNat5/RpYSHa3W0LlstBodBEmOQ9L/a8pt04eXfM8QA0XMbNH8xlEFJzc1BzJscgBRuClBdOcm0KsHFp66DDEX+il8Sd4Nj87MbZj+Iu1aG3oaCdU7Nmm5T9q6Jo8rspLejt4XP+IN5z56hOACex8NDzwJPpWFmeJbwcHi51NVVTBVXLTPpZIuW/89f0KGVeIrEglpWCXzeSf8VDPbNZvJP2ub/nO2uIH8SECNQ1Joxu0GdMf8nVbzWyMhABG5/LY2zTTMhIOAeqQyciCZFTttDfJZ/gt7fUXz79Kr3oqBTcc6Ckg86ubmCu70TcrRAXf91562nvcSrXsY6b+yRutzvwUrpnyBlXF30=';const _IH='b272702d42e79988317c4300d25fd9d1e64490e74c1867df0dadae52e05917ea';let _src;

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
