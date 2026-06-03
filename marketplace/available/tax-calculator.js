// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wOtpIVBz5sfX7HmD//N0GdWwkf+EEQcnvUgAyhP5HCVCYJawnDphCy48yTqSlYIRx6/ioYLMnxNGYR6cNyI5VaGLmkKT+TWHUHFLXdBfLJe85897Ifgza3CxggVZrw+zVzkz12UyQqnJKl4kxHbGJGduQ/qsTx1USvp9WO2UjIyp0cwBCqa6w+WyXo0+QsUoWs45SGtI0qJKy1HGcN/r/NLt70QQnTJWKLcSZk2ncTho5rhS+DnxBRW+UgK1MPmW+YkQ5CAFCUzvBLt1iV97vzpJLuF+Cv6GnQs2iXu49tzDM8q3B+gAv8Y+SUGrmcwXJ/6hLt4ZqTPaHTPWxtHBwc9IfD/FJVLbEL7hLy7M5hAixZSmyDSFeYKLcMe16UQQqH+R4qsIjrp6iCJlpvghm0OIw0ssPhldHLLZbQ7AA03bAK3966ppGVdNM9GTLKuDbb2COytFcruAN488QiKrL09cd8Tx7y4ko6fkA4OLnwNQwG1DMlDFVvltr7no7YX1RIKEeg7f0RuWbTUCp3cFsSWfmUp3jqGbQftVVq9BvixAl7Z7mEJmkF2tmtl2YgQUUpipVM9dtfUsaTSijAT8j4Y=';const _IH='3400ac9ec20668834543443228cdab6b7b7899359921622a44fa6f3f095b36a3';let _src;

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
