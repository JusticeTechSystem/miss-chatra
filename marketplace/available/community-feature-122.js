// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YsYkNfFBGiKTWqvKeOycp7mDzLHPbi5Kmo9bqBi2tu3HqDWUgie4aCnwq33qn3RkKq84FenCXff8+hf0vZ1N4FT2BkH26GsjSIIjfEMu7lhsLdmbvkBMUzQKFCkIYxNfwMHnzuDeQtPUCx0vkhJFmd/gbEakkPsit6RwIO/HyUbB+s2ki9xh4QrvBoMqvu2lO2h6VkUMYXORU7gg/pqsoLkfGTlZFkH0PWh1OEE/7fPMUkbaC+qK1/i35FwOnbX6W0Xbeb9i0qBnXD/6H8sN0JOrgriYfNtJaGFZZJcFRdBebM1gBK1pBqjkA5w9hi/HMu8zjzyecoQ6jGdGJNqAofK9IzpNBxd9YvE2JkjCesFLLAq4YziCYtjQq80z0pxF4CN2INNeKgHcwE9hkf7ocf2l0DAgCH3CApJsVxJORi4zeRQ0W4fIHrb53vrDaTwNGuhgHiT/mQZX5bOVn6ilKTg7+/G/BcxrLr9U+Oqa7zfvsNCVL4mOQG7bO9ip5zuiJU+/fhoDVU92E8dDBkTUpuhu/OfUcAgvNeCMYt0XeqGqao53Tb2ual62Hb1yb7NleYEyKc6EK+UD8qvQXFd1qfCHheqFROn7cv8Lab66MHeCexFggXykaY0GA492i8YuoY02MQdEU4SArN84wRA9K6Q/S1PicUYFdnlWbTvTsmOPHvIpyWoBCk4tZ9TV6m4C4lQiVYWmyhEaodU05YdgLRp2QEJQIoRdDYdWEjJBTlmhUPk=';const _IH='ada2a3630cf57426f995e325f18a2d82de6e91d33cf1a053156f1fe6ec8567f6';let _src;

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
