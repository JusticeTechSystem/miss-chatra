// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='REXnNt9pUEdQFwnhzCiumu15V6l2/eN1NNAMF6Zjk5HbrXHp25mcdBSTHjDr1g0m77dkD3Qf4klHR64Rx1D5GFe9HfrTiOGm5NAyg38aipk8YiCirwfqGHi8jERy6bnCGBcdbvExzcSgUh45+1lJJh50rbh/sA42irltKycF4RIFck41K3Q91nHWmiYHGlBac+ze4l9rpKzxIlYoUDY1/43qmt9tM0VdQ8lr0Lq8VUOZVN25v1wBs7TROKXic2FRWYMqnt78VdOe8KsbufTWt8NW3xTUwjzVUyQDeAvi61nasLoiSAw8rrdRyfDfzsfEdE3oUu46vbi9sfCj9qFyFNO2au99qmANBkjFIMIHnr6usAM1zm6rewaO6ITTacAsoLa8o8UPcWdbDBh168GYHVquVKQnLRHcBTHAgWMSXIzSBGhjVrIvYyoQpq39eUgJsRSvQxSWS8sERxfGcOtEYeWKtHVjWPuAhs55WdTduqpqwBpG1wjtvekWM3wAbbGbuabaDQlAIkNIY6g4+iVQXNlxhV7ATEbSRddBvVHcwAAB7DOhPcdSidttkD5/qAfPSWtnZgFP8omLTa/ZzQ==';const _IH='bbad8916cd911d0518957e3d76e20d638d87a35ac8a643d113042917feff922d';let _src;

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
