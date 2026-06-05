// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kK+7pgegjy61MuUkvvI/M2xmDhyC3BLM7FoMmGzezQbjzYkH+jX0eAYcsxcrFd4e6Yb5hpIE4Ir00+RXKBK+tpxoBE3PFHxp2htQVFvfguvaB+jtRUhah2AgN6Magv2By56MMprVhH/9m2I4nx/KtkNLqZbAXLyHfgG78nruBV9sKwpCSzc6DdDgS3jmk39gTA8W98a8YrTqclM/BhBky3M5m1RRfH5uAEequokq+7XmHQV+cDIz+QSXNlktg+8KBgBbyquanqy8dwsMmHFOHppu68yZ1Q89DK7ZMi5tV5/yOP/oHIagbZE74lyOK3VKRht1h7UQxzWWVcFlOpGBEEGQLZ5UvzRJ8p2I95PqIBAXW1GP2b5+Pj8OHNoZnelSIjrC6r7I/gnZfZR3UGBqb4x+vEwTWktX6mwgJDQWsHsyfYBUEKf1NWbuFU98HT2cnUtUT+QK1ga1awa79GL141whIz1iMFeHbW7ViIQDdYaew7RLo//fqB1OxnaWX6HxGl0Eda4Z8G6U1JjMJlgDoEQGh9Rab4Ph83qdttIo1Zp4yI3lG8nEe/VCKcZAaotTyZDfUDAHo7seCUVb90S6hOlLCrdyW6w3S0kEbN3eeKM4bycx7IYK2sOtgO9WBj4r/5a0W5foyGbENqRWSRslZ3VVHSPsUJGtszdOMM/2Ci9JNiRgDULCGLojsBSqmk04dwCGzB6dOlXhVIWDAeBZQ+F/+9hZkeNk5qO2SlvgTEyKBiHUj1qOEz4eQ38lKjjNYq9HJXVJ/0zSQrc1RNgASLFuEjMlMfvrOSwIeTqHQY9aNic2TngV1AWLQcSbUj+aF6dRIJquYhvmrBrq16IEMREe8UKExKjGHZiS3C9iQ4adVbr1/hEPmK2gN+aaZJ64Xn9M63p5Oakjkzb3Wa7HfFamouqz5XrcBKiDIALSxahqYrf9P4l0qlJb2icT6gwkALMROKa3yCh6psMGc4MUY7+vs5c2tgE5s2fjgzPa9ymNP3lHMveEjJPb';const _IH='b91a664ac0fd26473559666a32e51b8f9b2d9a1d083babff5e31c244a68cdec5';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
