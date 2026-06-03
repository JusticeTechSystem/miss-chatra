// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ifr0SE7BWE494DRdKakCVB7Wq9dBxojRBQRXKxKzz/TETQT/Q7JOQwm1ucOVtlSQO76cPX3p7PfPrtiQRtVWUegSMVym0WrnUiEcvwyvWplXNyCu5BSe9lDqJ4qDcgmIh3MMXtLJV24TgRUjP2S6ENLgYkwFhyJdSC4NbFs2D3jsTLTxo1E4moIAEZEVvFfDjZ08syEUvPHGocuARp/kjjUVVEhQ/NzLCBqmLk/+7DfT9Ug1ufW9ZeGLFcCSl68oT6/qjrLki38mXsokfVMe1+dfi06A4kluLHa1zF0u/o+nzZiBubjf5aBFsBHuw2Plb25d1dZz/WlwLqfCPQaq6A9K6D9xbs+ieDuPmG1aqbRkzgvRo6JCvThHD/9agZfRQi/KWgBTtKFFbj9OLLJge1NrbPTdIrdp7FxfVBzKJDC5auC5EL4grjoLIXw1kSt5dTd9Dm/p9/DIkIplmHwvWvxL1UPwou0b1qev8anaXPDAL11ypjoSXwH4HVKwk/wbq07+mMJ00Eyq0QeFcxKlfQPyYrvYlYxmsim6QI8Zj9mibbWp2MmEF6qMzqsE6uouHpyePm1u1dEvAeePN5phmi7TXDAeC0T2VHchv8d+1f4IVaaOxIofFhYv2H9zoMuQs4dc6wodOjvNyJPJ/jhHLi3u8Z7rq4cLV6g6FIV8xC2yNERjzx36wkjxoji5WyK+zlAUJ7ot2rsnMpdwp4tFOn9nbdSG2Rt+zxm5VMykQklAPq4bvw=';const _IH='51fe42eb94f3d68bac2dce328f7ade9d705783515183a1cfba8c982ed847af47';let _src;

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
