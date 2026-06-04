// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vjck4nAuaeYNpzgseXeUu7F9rzUpmD298J1tTnaCPNxLziKOi9csO0fdE194Vs4sFZnmqZOkM1wR4kXYUC8yKS3sFuzEb5nHpytKPwwou3TTI8j6SUjKpXvKCPFQOD1HEznZgDbyKw1ZaAxViMFLY00kHxX7avLmNWO8aku6WN/omIjgDtx/cRrzJWqXJpOz266Fppjd4SVJO6N9m9kvOPYl65JthupHr2Ssu5HmgpCRjdFP5X0Zqt6haN+eZzzJucpCw/mS7TZIngPN992c/b/cnqrhhiFE1yxJkMywfZKPOSTKiEC7uqu7azRsnwNSIh8BklkxNmqnLO1JgOL7thwRjylQ6UayRmjIjcOGzAXWea0UwmkLGCBWQzGlM+RzAKfegMq4r2tyN5Jt4rFPz2/3zoVEvN3kpHktt9kDFQPIGeQURPYnAwlXuQe7zk0Bm9gOzqnKeWEjREZSY68sRhBDD8bF3t88d1/T1+Wu+mPUM+M0ahEW8kimdMCFzzNsDHhodeJ/psFHNctS/TtaFYfjLry+olXWshgfAxLVOA1ljJ7UbNTit2rj+VfifbrrKmIs+3gxV41JTH59WpFqh0sy11I4X83Cp5iSsF5ftBmJKarYbYtRuPAVR4UcRVk++WC/fIj+gp3qFtNND+nPRJTtWOHoCVgNs7iGgH1aqS9aJZo6fyLX9YfkfOC2F9RW0ax17WueiCQM7L4T+1M6NjNcdxzImr6QDfMJC0fUn44HDWMpa0DO19cq0f68+PYe9/pAVHTX/FlFCDL8BOlozL+MTFhseNDmFcvnsAq2gif1gdh1oefypgKcaFPoh3J98Ad/hYFMCWdFDBUOUfissukKF1FPbtm9GNL7qwE3XhG6P7eSrwLE5CVVn9PYhHJr+4rHe1RhPXLmGrRVXqJu4L27H+hQ6CY4kGWuJolOIlDiuUUbXHacb5iVaNsgAI9eJic73twnAyj9fcD2uVlgUS4uoaobD+/gvAMR7jx0jzQ7KWwISIPgAN8BcgGAxRPaexo+wP3SZla+CdohJf2H/mAr45Z8M5Mp06gCkXUN5cU+Dg==';const _IH='7e232c5c86ec1f796650a3a7f166b73f7e37ff8287521f27725314f80a0aaad4';let _src;

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
