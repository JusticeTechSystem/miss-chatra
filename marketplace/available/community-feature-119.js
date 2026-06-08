// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mbmga2EmAoqRoqTv2RBM8PwiOK/3QQMXi58RTjkCeHa2th6dpLwVg0nx67Z67mJSQDEebfO2tfIpDE1HDMZxBH4y+eXg045cvTUBnLomA1VaM6DkpJfcfBgibIqy0vAcXImgZJZTCB9pqt+fk5UX0oxKaXmjGP3aTyb8nXvhL4wSgje1IxhSQMw+nhF0JGGZAA+G2pA5hN/yCTufJZthEkcV5ExDh8iNZorDJKamelAO9IwWlCdZ4BmW3qYjx/olrJqPqIW6Jo0jbumCzXGJfIU2MTSXxhOzx90zYXXATG3Z2FWoEcfXjFnaRR6a2qdWC+3VPWwamuGRNNu9S2Lkbyv7iP4p56NGPdZMvmgxvTzI72OMOT6IXAxyWsiVXc8jgXYgnfUIvR44KVCMMdAjeGsBTsK0hS8pyyhbk1VLqah6OX3C5VVrpkP7THA5uDiPqWXFNIRlk1uyGqSyNZCBcb59zOMN5PcxynneJw/UwFHv9/OXPefn/Nc9xuK4dfZabY3J7oTF0iY4a3k6MdNmXcPG3VvsAJZbcK/LF1K/aYtbS71cSD5513VRAsGdNdAHeB5sYOLPG8MwGdBd5f+OBPAocqpXsOyLK+3Jgt/2YTMQh3pQZHo4yMfTVyGGMirw1ocqygOku6hW6KxAAQisaSfg4nBKSpWf9fbtiirHtXyWmZhm9aySzZoKUiSWLw6a6fa3i9M4HPokGE786ip1eq+KkILPbzqvWTViZOLugUGKJ2Iqfhg=';const _IH='0d011dcbb56231b44fe20b1c80f66d0d46721d56c4c2d21155b18720b32cb196';let _src;

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
