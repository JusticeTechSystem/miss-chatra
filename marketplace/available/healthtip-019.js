// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kgwisSlaGGw/x4MF9BPMob39EYbDO6AWOLt80+ZxqR1VxiLfPxuak7i2hoVeNrmhiGuDEcQiB7UftG6Aqgs71Tk49uydguKVUAPwImdIEju2qxwZ0kb17Z1QqWA3qn1CMB9Qp2CqUpeAvqnEdAAFadKNGSafQPd1/YfqYPp8YeQXPcZLCotnbLK28gAm/RvFm2zz4E3/vGkny9Wkz74HSCaRcoUIt2gUYZlq75E00XhVu7n7XEMjlyfQiHWQBodshCz88R+zSiDUbMIQkgyXyL4485Po14XleJaHz623uhwctEmsU1ANqFDrpi+tg/RDpCfqDBiWJ9uLv3P0oZEo0w8AJn3qb2Qdx95fT+YlYV8QhC5cWvdJ9xRIK6VeTJZ4g1PvT2dH/tJxG7/MRVZF/h/0Rofs81QQ1p+tvvK5oDD6N6l4WrI4VcYy3FyIAX4BZ987fzO6mtYy4sRw2CSvrXJpz5Fv4Jx3T3VHNX6XNmqFSTWzWtWJXAzvAppJhuzAaDov/QhYGwlxK00leiUxnzz+77pCWpG5P6jY54VofKVhqL7V3bLMirm25O3eIV+0yekzoYzN2dAJcKFCGA/39m62Afv6bBXi/8NsW2dD4zReV2IXBNfaxR9/UwgQN4+MbsyeDgrq15kshaTShtdJabiAhUVJFW1kRA/+ZC2jlZrqRJwnhi7g1eDU+/nYLW5zJBMirOj0S8cNzcsQlHgn+CsTcABlwxi6cEnTtAznM+cAEKXb4Qlrj0RiEn/dZuhlUM0inD8ctsQeUvkS5Jz09y8Y7ODUYdFfec+SstEF9gjKS8kTfAOvTTGSHDuXi5Os8Pk4tpxg2dQFE2xG6Fo8i1FZ+mIJRnGFMV5JMvzzOQMivneUDitiWUSNj3+LZUfWOs3alqPHdMau3ISKHDaoi5JKfuCVoMhLmKjyDIYBq2RqUOKx/XjIahHoiJg=';const _IH='143b04326ceb074d323183c6b349f6d0011543d9aefc68c30b64c008d228a1a3';let _src;

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
