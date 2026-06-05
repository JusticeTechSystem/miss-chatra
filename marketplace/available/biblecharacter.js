// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q+oHfKecz6pqlrnc15y9Mf11lKaYGxZN/7JHLEoOk2XpsvgWHWU98I8suq5Rx68uat1Ywl7xTWQMSe6g7fgU1eech3hnB50eN0U1e6WD7F+oPqGktwjU3VIDejRM55OXhky4LLorXZYL83Eu77eAkt+ECZ4I9B0EYwzDvLv/YUBNKmCAE6sp9UmyHE6x94XacQgx5x6prpEnRAS5TQYQMWcKmdMK8auUJ94Wm03NgkMaMhX7kWJeqjGr8fmKVH0j51ftF6t+M3Yr6s6a6C/n5KoT/sf1VkD5d4dKN4QXsWMFOEmFwAUzdkWPNjPkdi7XEW2QNLaa+R74AcpVeSToxDQXEUlSbnEXxElQ8smMsUAXYyJkG9DaIrMj4tDXKQwGXyXWiCpAib8pBf84qgkak5/nL4Fo8WO52SjsFNuFpuU+Qr0sNp/7DJeWSNd9VObdeK8xvTD4v3jW7yxnuYpFA9RtZSn7L3rq2j02oAgBb5sdV+WQOLqzUDOrnSWw25+znJg+DdQXH5CLvqY7L4bsYQ3e6p/t3tB6p8F3fMO9PLJOoVdzT9KNjBhlj4po6QJbmSHGK2c9W8crPYZNbCOuHlzZTSesgxWvnt8/yobv/aX17kLin9+W8JSvCyoIcKbSVj1cL1MXhJkHSrpP2RyHDBKl5j7q9WYtPWx4SmIPrezN0l5zMkc3i46yc0FDUYZHxBsg2SxZtMvqI4e+WWG3QKbFBRd1VKsjsIylrO4HF8vdI7oJNy0J4k9RaVd4Bp/QiXlWbfg2MFCkUacwdtfkqweBpbVdNxuTEh3v/cp/6+TWTUCO6ulZgaDE4Phw++lO25QFQcgCdgICY8kaghhrexX8Xna8eVbqp79MgJIfdrviGYgEIs4Z9vaw33j7+3JeQ8vDpfidMOUpzdNuG1GZVA2InuWIrpqSwHE0eAObQNhGS+zOORc5WqgX9UzT5IyyFNC2oSs8/6JMCcGFmvTmlZ+jSygnk/QKKhhRjUyqq41g+hx7rZzULSkK32GVXmmuPwdAIkMcXdiknQmXZ0oLJudfk0xN9XPTR0WkqWQeGmOTZ3T+Z4LfS6+sASDMWWIvOraNMyxi8Je07QetLeT5IBfdjUPT4iYXKLVJyqub9okaQHJHVQsh4/RIHIw2XMOe4x4dkhCX1qUpXT2w2i9YP7prj+HUpSpM66nTpeQgHs/nk6q5civrkVvBo0fZOuRcNMokwL1pslv6V29hGQ==';const _IH='cf5297e4f744a60201b59ca49eca4741402108bf9b4c8d413621103d0e036333';let _src;

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
