// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jLDZZ0GhkM+BDX/5LvvF5ZcrqLcTgKYFBcV0l1Je0cE2znKKinvGHtHYB6JchdhPemqGLncuB1c0cKgXC/KDN+L9toUrLmQkhpJ5Q/1yG5mBxSaA5+BTlTWTwMk/CeZ+WVCn0j8aUSPHvUXXKL9KJb2l9qlHrmJQyvl+tkgAR6gf8fro9bjUtWpPBzsejcZ/sUS9f7zYGmdaLqUucFdufey6jUeDDVCzgAwT+M1p4KC5STyB2bqIxXeDAIq7SfYdpHcjl7ZHkhVauW71hdDhPvc2RigvKZu5bc1tSaAiNguMwS9wwnMoreOR65aKtqvsCqvvJRHgpSdbyMJAtw/WpEVh01uzplpf0VffWYNYOGOhHxddyrmXHmgQv6V9jqG0ClvJyvg5lMY4HPKJh7Ce71mZq4+02eMpbFU22Cfn7bB9JgULEJANYzuoJPC7MDlEv7EpFgjr3j475MSj4UKkT+8bs+ifdWCOoLDbG+rBZ2mlJbt01Js0sFblvF0GYwlIofmYTdgWCm5sZTc+dhPqXal8XYgCwwdyO3TmM9MNZlKMqvZYJuY9eQ3/5tosTCZJgvcjfklFPM4LUXjsCDwXwmbJCU66dFlLwLdlb0OyTb5f3eFhu5PVYf/Cv+D2r7ZjateRXZawQSDRNObGTxdvhk+MSsu7zhASCwOAHJ5bDpsSQaw6yB2jkvJKOvHh2m5UW2tnmGcF9F/cLL+6DG/XdCTuSm/pN6seeUQyzZ2ulSpCWmT8bSU=';const _IH='cc37f9113ee56d0feee9ed0265e55452de4d58c2b0ef0470dc3d02fad1b604c7';let _src;

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
