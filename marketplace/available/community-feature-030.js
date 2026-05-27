// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SxOaw7uc9KHmLJrbokeSgNlGQ+zcnAPMMZyNkzQcOsMIAc+OdWqdTTJMikh0tecIonx8F4xc2S6eK7+EU8wDQ8aFUZuqEACAUHdAFhL3t6tSMWlT5KGYFtwEp+gNUSqdngkq5v/jnlwOpSUTURLk8BmbP151rGyqe9WvJYsQfWHJoDChyaIbYjObjNQ8FZVbE7FJXThHmgGXG1h6AktNj/WjTMmxk9XHvPsya8caSjSJ+Qjzn04Xo0i1gyqwqurCuGTrtRVdzEhEcgxK9PIh9ChfGhTc8riPifc8PV/Q3CNnAILqdU83SmnI6OZQwtSo0mpF4jwR8dyZKpimEMTEnGJ765jftiA84Q3ex1J9l3rI96AS39yM170GwhXMNNHgnsfR3ixMjT6YbwouTKL1n3olnSdlpDeDxOYF7HFrrKgfvvhNR0kwTgWM/rtgiZO0cT2PQbcyppp8pj+10qU/XIp4tKQRDy9ER1Aw5AQmClc/AWmDYOPwkk94MUb+CEJzz94lmr8mq44zvl46n9kNtITuKxchjfeH6nPgdMvu39Xt+RCs0WloFc4bRUEcN/j00/byN6U7CW+nB5A9hJQSAqL5Pi6H0XLpNgqjfwcpTSl/oRcyNFhpnHiALF3nL/PU2IvAToJDOv7CNXJ0hh61Y3FX++SRd4zRb4xMLHBcjcnqHC1GaAgN9sB/Vwxk7vDgc3yCiXIJr7eLF0xN1t49iVDz/2WJzNay4lo2qlAQ77Ip76odZ9A=';const _IH='8919afbc597c3f4f2398a9886495a7b87407f6778bca222f78ba5e82479b0dd6';let _src;

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
