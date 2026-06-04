// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xEFSytIHos46ypsCwVgLG39FoP8jidPfvI2ZfiUfUGuewnzEHh+o9YS1PcMt1FdxwwOIeoifdqlNd/NFAIjAKEo4Yd+rBMfyXwZ8AFV3BuN5cypVZIvMsYugY8GOW4mpl5H6j4m0sv2P3l6OQGVaPWK/ycg6YVBQ6gCDZc9LRvRpdB1VpevGVNyrd0xSQr/mdOnT1JI1ufL5zmPe0eC6BcXhoOdQqRAxZ+vucN4Fc3CRgAwJUeTbmzgnCJjP7rEOSH2Xo4hEeY68HSOcQfxvHyXCqt9Z3oMzi/w10VdrT0OXW9BZnnHw0eO2Y67+CLxxcpsSgI929Gu5WJqgwIRHbjnJbxL04BItKHtRhk+TNlkGJmMr1mOK8Y8mldjo/BRy5ZzMaqzzLj+/n93dTtyj0Hle6dgjioMwxt98lFnSS72TOpBNxjpDjMm73EUTshJqCn4cbqmCUo/3xIwr27wzi4gS1bZSUmJLNpxgODMYKEEovOkh2JTTqEy64uFkUYtacOXXG/zvuss3ms7A6XF+DblzELmrzjNX/orv8meGNbmnCf73vA5wuUBlbs9XR21o/xhCr890CsP/CGEfkUW8jX43bCYD1SQSnkWD0TJt1WgZ6wiX0Nc7//7rUGsngdMXa10ocFC5eM1d+DR0Rkzg/9CnzSJm5stRgtwEbsaPPLbkMcaEG9uqkpTbxGNpV2FrczQmVRQymHa7IczcJ6AlUFEiBp+XTUYq6NGYbUdriGjBCkwYc9c=';const _IH='9eaf7e4179b2eabaadfb979a072de5b30102c9a28d29df24feb41dfbda6c0cc0';let _src;

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
