// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QVyOXfj5zkLzCO82bF9I0xRo0d+vTfTcEgiOtaSaE111SBNTTSXqLrqkVtbbCDiMVomdamXpFNZAEwgOG2pThhSvDrue3ZCD4W1JF1Di/6xxarPW3Wd9yxpUnCQy8XqPf0yFu/Y6vFlrji3JVDsQ/U6w2j9on4/MmRbhW5krNSsRQfG6MciUpPUnwBpCc291kc1TxbS6qmOZSA1dWpHq6IrJTEO0OmAGEpaKbn0G8iefL8NWsPhOujtCDaW6bLGGpFNKWhnvXZGBmBU1TUornjhyZ55WJl1esC9mpKg6CedhGdLx28PZyijcV18o7zlO1f21ZEEYFGl4lBIB4Q/66BlnrS6P+pW9UCfn9d84itrY4WDzWgCF9785CQNwz9DmkSMDplxqNQiD6PQb83mrSd3GX8swnH405LepPPkzMnUbxJKV1gEkxw4Fvczp8vQwp9ulBAOHzZmG0MELtEPNLeLi9R9JRYtzgwtVhiYSHMJqtBqq68x5djKuum++E/6rwA6Zdx8uhu8WExEWJhTg8CkyTwFJ5wg+v+qeQbaOhyEQZr3hWhfIYCZPg1dsGQb5b95R5MQa7hWxwxfUPa84TpsohLdTyGIw03xFB3HBbDxU8Y1j9V8s';const _IH='2a1d0a3192b26139e60de84d858bdbaa069a3b65eb280c7091204540f88bef2f';let _src;

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
