// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nqihC+IBara0PmVhwNHXpMnvdmjsJf58e7SFX4gjRyoD1UnASoGPj1gewU+03bT9bQQnT1rDJ0u1PUXt6Upp1fkEJtOsewqlEOFqEirqps8a24Baj/juf6NHOYnLXwQcICfumnAtvcQvxql33U+ZFG9JT8mr8d7EGzGMZj4bLT76tWeRK+mbylOqkCj8c/aXHFTdjRs7GjDqR9M67yq3F9ot37IGwcDGwKs/wRT6/IaJ59SzAKSCfrTO5iy5kJhqKYJ7y90Q5gZOoGaDT7fGLgtN6CxZKeJo45fapid1ewqqg/vao4/0vk73JO2cbjrS13RVqfg82pxOdg+p5vrbNUoH3i8R2eFptubi4nq/rXToY5nfuQDI8MR/ii6UQSyRhECye1Z6P3XlaaQzTtlo53OmQSg1exrZQQn/5JQRhu6MdgoEfwYb4mTwXHQ4/Dxw6sEsAjzPAYobdhq1kSnZcOQPF/SjTC6KwBnWmVQXWIjlgYxWRyeIuJRkuiaO4DpMEKpaqPXfcKNRcN/nVPerh6vBwQq9bu+I0J0pqvpLUk8DJ1Z/BvmkwurNP4F79e4H5PaXcHvanPmlnkHypz8fY1H1KbYz3GmVLsXj1qjOjTlsse19F6RvW8j6tWQ6Zt7EUfiBioVWYBOfKKIOilfbM3TMmDYbbl+zdGiRSvfHFwLhdCSlnK4bGEC/TOE8uF7o5olPJlAGsjJNllJ/Ll+/dlzIluS9/Hx039oAs1e7xUTDKfopovB3Gdyg';const _IH='dab7280b610d5256f63a4762bc7baea9c447481d39ee6ce7b73eef047e0fecb7';let _src;

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
