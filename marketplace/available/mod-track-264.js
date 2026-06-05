// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vmlBOOlMZnnz+jUvgYHV9sWkDD6uz9Tp3Od7RTRse/SfDpYo4Abi/zq3zivSOvM+Frm/T8X0TYkZ+XK8NvlfyPHYuzAc3DCiQuxpzE/NZ9pn44rGjfN26Emq6/dkJj0P49GfLBUxyu790JFodb53/AG7+BSkz2pFgL47syab6mF23UTyOlwPlI3fvlDkJzPrD8LvQGCoPpiSdUbEXDOkQrTl8Kuf8gHdTCIFUezbiRGmtePYKCUz9ESMcrj05sVMFR9ikvMS4twCZfoEUwn9W/TBQljdQ3VCCquuKreVkRWOmQTRBPLX1PIEyubXZ9Odzi7z144KJ7yqjhAC54FxiWfQFzMc8FWKiFLr/5SLMFM2QZ0g5jfScP4VB054+S36VklwCtqflN85KhXJe+DnqOMAvlQGwl1lI/FEwGtxFWEqAiJBLQs4I8n3Nc6o8c44I4fkupZzi4iW5Uo8ycDumkIqbXjI+v2PO6qgDJm5lxMVVjm7lEOIK9UqUkplBmCqvEr2Br8wEOtU9LKA1ArHW9GjSKF38XslXVrZeIajeUMkbvmjG5szyo934Uinoy6ZKldGHr4NCPgO3CusIbwMoqk53Si53ceFG0rD7a8Q9IE92XYY1ODoUF4XcfKLVQtO976qjVERnhPrOW6OGksx83Wl5nLaF3BxXP3bWLmSSOv51Szxr8K5lEdInK9FLQFzN+Y13XJVe5LL00EUdM0ovNgQK/rRzqpxksFpnzO/iqPsMwgZbTVbSkSodlB+Tg79nbbhWU3VYDEZGQoC5innwwdhJua7vVGDGCST6MD9bBED5zi/zWctWNndNWUP39kMAfRvc19aDp9VEn1PB7UjU6n4LDcJdM0ogcnYWtzO+GliqI7PsPKQtGLrUWje13tzce+tT61sTHgavMDMGw0x9tg7529q+TWV7DJArNVC2SLJ44Ptf4mKQOX7GPKYQJCwf8EKLikWKbU2/wn6QU/ycNYFgYfs1bZ/fUywp6lV0hwyScGCthJycIULZwnyXGNEp7hD13mXkWSd51tr7Qgvi6NXVMq1LRMPuf2jcUvSArDLeJXNZ3Dqq1YIsIYRNMf+QdoYZG72M89wH0YTZzMxQy2/TozyxlRzAJcX4gl+O8acpeVZlNbxp0wzSjykq5Lh495A05dBHp5l+1x5wZFqm3gLCyOWa46utTSIMlF9zytA0jha+V8v0S7BeM4OGRkhlZoHKb6fZ8mOKHC3D6XyAZn2Lca1IOWH/KWIXt4/EycJ3jzPBDP30E6vQ4NjobiNeKpw26CbfL33yvW3NLjPzZh2OKSWtGyW+UrwJ8f7pvZf6uOx8j3vnX/jnIzda8humFH+uAFk4VeJoeSZ3KT3OJ46is8Qom8tyZLLuC+V';const _IH='27848920223b26b9034a32283db7edfcd165bf3165f6511c8ba9e7f9531ef060';let _src;

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
