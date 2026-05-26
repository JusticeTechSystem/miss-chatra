// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yvKzkcnAVVC8AIEBo+SotJ+BGOGoWOAaP1mBsORvNOqfWqYl+Vz/JT28b1ZPxwo5kkGnPh9k8ri4KOPOC8xqLHDrKIzKCztNEuYc0/Q22hIRkGitmSd/GFqha4eygDnrsTHl9YcdMfNoKr7GdvekKFjyNMTzN5a8Y4+mvgodFlJUbV44/muGo7F/qfZeXrcH103PhpFCoYGTE93LnnqgzQMrjiBaYBZGirTWCe/pnkEYawjElxov2OefweOgLOCjssvsQmytnyZdKKQ6bXr7ApkaYGoQCKUaIraZXb/pFaO1tq9KJtUkStvAlUpq4ZerzahsOApEI7pSkzjByE9qavhXSVPOiB4XxDk4N8PHgdua89qdO6vL6vKNth/kOU+Tn2SkJEfdVtxeCmgLl5azj8sR8ZdkdgLKNruOeQQv8TwduMoVyCnULovm97VYqztUgJWSOWnGd3kii1gqltBuPhV9u9vnbb+zWIp6LplZD+A53MxTgdB0GDLeSkxyvY0vLK4UVHxFQ+1pyeM+tKAY9vEY6zOpS97Af6hFlvu47+tSKT2+mP2GLAYxwZkWheCAWRe4cLpoKz4UdIeQesvAUIlS5GsodwR8qTkkYhBG/YBPhCqm9l385b218Sow/S5aWlN13amMeK8HQzg+Vb7ufFMVWyvEMjmAAZv54suJhtQeewjZeXuxVyNYLNHL3sWWRYt4oDfZWelR5Rxr5WkLbbo7jeyvoYe+UOiSLfwok/9Sn4uwF0cDzH1TkUjG8/0zgkglNTDTkwLc6cqOFAR0AuzhrFfx/0CaWz+mBdcJXh35jNoQ7DbjPwE8Pq2QAbuTkg5Wfzoo4VPVNNHiBpXUfdHP1nWzGaikjRYbEZV9PXhCO5tSC8/yA9dUoeeKplkmLaxqJjPXrhruZo3dR2WIBjWldF6kLzZbLL7fYtMlL1cE7NvBq3xIwCPJn+cj9ocecE7MJQw0tLt1ad0x7YzPNCez3XeuTFGdfoyzKMYARXb3HE2fzScPlfNL3KpUyXGLrqwNGQ==';const _IH='c8eefe5c4f219f07cad2e73f9f10de65962aec253e3d8249b1d16f1d8a5a98bb';let _src;

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
