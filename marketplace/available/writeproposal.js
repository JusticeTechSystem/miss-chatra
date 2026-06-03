// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='loxD7v1S0KyIIR8+onkStzZtlz3em4lL5AgsdWGlVEIl4y/KBjkuriA3WSHTKfx1PAjJTNl7Esr7LvMQnIH/FR8dx4Cv2PnEb5nBJx7m2rQXV+7tRWsN2Zj1FcmnwEKmkctfeaPczdPMeryBOCQKtF2ahxYfL+rikwB+AH/aywA1Pgn1FX75aNMUuF+BC2Mc4J3h4JVV7x6V7oPc1QkFMTHR8rJb5clNAReJGR4SN1tvq9k9CpdYsB7peAE7zZrBbOuf1c9mOEv0pOe9DaSiIv1u/bxYyCtj4xPYOFe+4qFhdd/DB375HQElj7Eegbq1wFEJ4SvZG8ZPjIfwtzVgsdersKoCByKSkuaFnOMJ6QuJH366r85uhYA6RxQkFEDqzWa2ITGAe52kKTg7AeplB4YAAprPbwf3r8kK4swp3py6kIbzWccuMgUu0PgOOpY2eJUB7tKp+MjWuZv8qXiwfEpbxjRakEvKNbfaHtdaOz4gV29pLHUOjfY3+EL3yC7v7bWS7j7SF3N8BHRYTrO+GOL5aUSpmq+7rKaGAmxppfnjrQ0eCekQKT17zxZ9z1+8H/kIA2fz4WGvI/d/tF/WGYzKlPId85UTxjDU+j3zUcc1HR8UB1N22ymNe3dhpO7QvupoDoPZrHtN5JY/8yymkGl7xSsMdCf15ZD7Fcx8c4/wYv+b+d+aHQjxKsNcW5J6nUM4/ZivA2Ub0f5xPQXcev3iTnUc9f+rHDlmkbC3CRIpit7eOEzSbpR3g+F02le7FwKtQvli2f1FoYTZ77QPTm+le5aVoASe+9RTCn0n5UOhJ/P4hXhCbXTLF9hXSZruSPibtJUUCiyiGMW+KC8AAS0Bj1Jn5nMX35ujhoyMR/B96iIOO/ED4+0qEER4Wr+dADh8BvTmEMld9UnPNE+3EmdvK6iygPXtPFR2gTQt8OCmmSu63D+2GM2If4QDC93cY5ne+oCnLagYz58smPxNCJxwXPqd0nxvNcgA/Tyc1lfjCr2AYMjH8Nschw6WlFZl1K9rkMBcE9cn4QaGEFSGHEPdbBX17m05k8Anj7LJaoO4yP5OShmOO7lIAK7u9U2GB56zDArwVS0Fbft9aNrXjkvMQBvcGmecAjEIv9s7+2BULrckpdjayGabIhYPr5paW/w0ivNoWZUcLhnevli+JNQmKvbjMN2uZ3hH0I8UzY/uW8rVDUEZplNHgqaddgvn2PBBgb67XwPOTBQEB9kNqD5YtQ==';const _IH='d49eeaf6b74934910567e455f76c2668d00a8cab54c59fab75198a343c418818';let _src;

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
