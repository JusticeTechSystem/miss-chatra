// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UT/sOAwa7M2HeJwtzICZn7+uHSgT+agWFy37X5qdlRsgLy6uRJrHguDJPJKW2Wt3BhzoekrEEJ3I6tXfc5tcMg5DUYjAAWzuTTfI89NgBL0JSg92glxQP55TjaLQCu+LrGHjVABKIGPwYO3AQ5MBsha2Y0gomYJWB7IIhCwEcqQxJvsSMgvFSLKjAujFJyBTaf3YWPmDo7XzZcInvZ8B2yrRm3Nu4rxxVE2rkja+Sv+vThrVK5hsEAUjwab0NwpMvN2qapbtW7H2h9kT4tEmpXOOPwPFzx8YBawTjMB2B3vjVGxkqTmLxFfvxULYPcD7VbJXqc7N+PCXja3KwUHSeYG1ejpoLRBD/CEuy9+pS3kw0IdmqgBcwHuBIqyQubp3y55nCE16/ycKWX8pqv/rquhweu78Hn3y/PAHtHPJmgHHn47nfyAzg9Zy+QVfFQ3QOZsg6S5h//+XIdSkp/Il+3G4KCrDTUscukovaxqeXrYgqXn7umC72V/LH0ohwayUpJbP/Dl7/Vt5CCRu+aLBpqGyUTVeD71copZtqMXpCV0tLQyoX0SE5bLa1TJFUixtMnEQ5Sq6Umr1shsgAQwqlK/4QzSTSSXJD4Qf38GRT1XCGCmrqckW7Fx9UyMG0LMQ2rbQYGYE8hbm+CrPg5oCU3IQTdMq0kPgZ5WGtEpB3OR/Sj7bXMB3NHPFQfb9y5Ow1o0tKBtoSeDPuHbLn6+up9NU7uowzvz4dn7asCFTLKxLW71GFsKN0/MMu1cVUQMEFo2oqe1M34KCS/COvyhR7CvcrIRgOra9ja0ay6fuq1asXhQLM2OoJs7xFAAit4WrRS92WUILevZii6wiKUZp1BvJwiLyxnEM4x96jevKyIBttRu/HjN5nkMqUaHbwhze/bmDMUzBcsw3sbg9kEmux8OvzduMII3k6wolBlbuBDNQUSeAviSqwF8kq2y6wD8Vt2JT04hgdOr1yz9eDKkFbupGtxca8bC0zp2TwQ==';const _IH='cdafdce391da240478da73f134e4579ecf785fd9d326433cda1ef15d5b3d053f';let _src;

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
