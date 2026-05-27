// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qo5kfiE9rFjnvK95egxsHWuT9sj/Tm2wZ4b4IrekkamJ2uQNxIS0OKIofLjnJkMSQDXxzdva3c7ZXouKBgr+6G7XIn0EM2BmBdSKr4CCzLqduAyOozxQHnvuVQ0iBZOwevIcMif0CYyiRW7cfCnL8I6ik1CdijS3y8t1XhVm3GgFlA2FQmC4b9jzk5lr9aYyLlMWlestt039HqcaE2zZvZYDMATPElXKn2lmWVu/yZvB+8hbjCht7NDIsd65IJQ6da9ZA9KtNL+K7+ISg425vqfbTqYQ3pfBbsjmn19/7oC296fmwaSAMZTwPv4I3bdp9ibmhCSb4fQvTNyNub2a2NsjrH5CE5NTDgAKLoefvyLSKG31lAeEDmC5JN3FEKn1Wc+3bSewgDj3LscWlQGZDL+qxCmUyIBMGrjbR3Hj6fyciUCBK8ECuFubCTzuRgH+lY9hXUG+JSrmpQrOxrACxasd0YaBmarGB9C8bOKObHcWLfpr7h1isU4lw4I0YRej5K/4J6pX42dkOzSlwB6kiDwZ6J73A9chRI+IcIcWdajNPd1pm4vpo4mieIWQ4WIJACXjl6hih1jHHhxgMYSFLyoN3FhOCbr/EgnM159eGArA0bjsKiWQuPjDEqB+RW8yW1ZqVed5bjKynHAAEG9YFglsX675qHd25L0cnwtjiBROHustChChWotIdrcS+TBP9JPyjraNWZ7GBOZyLLSDoopAUIc479V6gf3nZn0MMp/O+KEZWSA=';const _IH='938e74df56d46ac86b97604d7f499dcf56d3ca049d5adade752ed6eebd54ad01';let _src;

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
