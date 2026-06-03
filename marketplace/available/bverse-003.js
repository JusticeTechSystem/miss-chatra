// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PPIRa2M+gBltD9QnFYtUt79KdKybTV3CItpdKEhgPmLwpll1QTUXMfj+FhHqQBHVY3z+9gYq8l5ISBR66TYn+hajDVJlzQphvAi9Yy599RkQRqy4A5L3vKgGgyTk7v681bF15WsuEY2ka90sLtT8rd2VEsTEvQsg2AUhAUS1uZkT0TC/6l1cSUzllx4zvB6UPFaT9Rig/yz6KhefdketYzcp5yvElUErSpYXE/iFYFHO8lttCl/qoVP86AICQa+T+xNP2qFsFsknGPqQsDT9NaHbCh+7KEnKV7JbVIhgWc6FTnkG9C5TIMJl5QXflrn5UyrBxGV574hCk1ZTk7/e3Vn7hABIgCmPzpEy7GeC0ACcBopkGZ//zQIkmLFhBjaryQfQrmzK8y5vJ8mWWCWaBKBqpCqIP9+dsjk1tVwgQ2bKJTVgTblF6+e2plFbTuwR66XBJNfrojKfZByNPNCUPgO/onkkIGuZshvonkUDw8uf/E/JLApLLPAgHVu5TRlmwC9/vTDEPK1xt8R9+a3D7vG4j1sFb8U19k9Ovm1EioH/o4hNqBY21gMLaPfpnrJ5D9zkjpohhVBB7A6zZSFm69KOAupA7i8mCUNQFC3gDEHrf4rU63d9mjcmSbzXClE4+9u54SR1IQjgGFPy2y3XS8qoEysAiXqQOUStZSjwKrHBNOBd0ilPOzHe5eyZwOa1dw==';const _IH='d373f57cbf46c39f6035ed9da21d22feb0dbdfdfc0fb23ac0c0e1be16c58aead';let _src;

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
