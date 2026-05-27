// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/Qt4ml0uCyTz7l5q5n3D3EeeY0pY6Xnh5fl2OXPov4VcFvnpdjuVjGXO85dC/kW6EbDaXgT8azJGzftqnCE0T+1WJc2YFe8f+em2gumxc0eEmFU0FSQeWBns9WvNWq45dh+CkK+qVSUDJoabyFhLi/qBykbC82V1lbd1M/Cp27bqHl5cLaI5/Y30lcj2T9GZDGC/ANL9HQfv/KNKKn0IAfM8lxeE6gflWW973jekW02Fh4u403hn0J9ewnI7q32ZJ1gQer8k39MdklWvON+qojEbutQLcrXsNzP9M/4YeBPlsAbtbQ7B4repYKOKMjWI6dyFDINTK2fBuHNQ4QIeyVb0MOOxlZJhzOoAcox42QIoj9bgjVrZbAPDx5vAjTfU2DPhxEjYezG4qUHfZRRK000Mxit0dFTP8R1sAFA7xXevjVeIAvEWmkDQz2ys9qnqIMEzkI82izkvOWCzXdfhgz+5VXQymquM83blvZxkHrPXxSihZU9X6G54Fp7OfiKZ+bvWp+W/0odtoornxKrhuRXnvwBvOT/qRu0ObSRtWmpc1FFxx1d5QY+/zWwmHRPkRowqPCv9khgt7w5jXItm2r4vZJEIh1Su5PTSsuTOHdUOmNJDsS2pqr5a1qNTMBE+ths1OKT/tj3eLhJJbRPgLsMwmEz67qCUUvD9pQzVVckxzjoGk6pv7p42/+121EV47+n6BpX1Mu54vrAqkNSFaKzVwg58hUJr15FnpCAYLvpiXOUDAjn/0S0B0GmoMY3xgSIq9YLH6L8qKik/YNqJwl/n2b+YSn7WJ0lTlXj6/avApeiTWH7Z11kRMkc3k4IZT/uoyAWVgl5UfkR8cNFgFe9GCz8sbqZe8wHHQpOHafarHgRG6YZ+tcv17ZJXgWuesmL9y2WyYZnHt3Wt0tL3Y17SmsbExPlVPjqR/36olkz1qazcAAk62U8y+XgICdGp+f91kreyc6MWDIjpusVvFnZZH6ekzWPs';const _IH='63b44202e08c2455ac71ad780bd6823c390710107b30102cb001cb591c29bc73';let _src;

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
