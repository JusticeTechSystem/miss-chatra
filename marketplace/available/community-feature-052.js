// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o7DnbYPP4wuTjnZD3b0XRiNmlWMidtqIZgD3QewFwxI1Tb1P7jxYms63xE/m9U2izFA4dG+Veb4DUeK5OJtooYvD+8j8UXmnG5SiBoGTvtbIvvVq516Ub4PfCBmT0QD2vJh9I/jJQnd4wrgtCwd79L2N/K7jVBsE6WYltt8Ts6REKLthZL4nHQrmJFtgYHhuHhluKmFzgAt8uCycPAk9uv+BbDvpNuvujC7ismDAS8CbLESKKv95lglS4TmpmRmUbL84KCSKfXYRxQcdsV3CFo2ZTWlO24DHBias6uTWy5jMWQiZytE0YrIuBGe/w7l7fWgm798HFDehaeH5qT0rlkfT6C+6ypw3JqyP2LzL4VwLCDziBheD/+4s5ahYAolVOeUpANP9w1fFjAMWblFjqnu0yDOlW4UW13GeNcIEapcy3qA8mHYeEICmpVMWvK15e/hbCGrzXWgc2aVogyVImO5zIu7EFcIvZndQ7gxE931eRccmzOfGGpHmLfD/GLUlUJzHjsY4qomnw99VNpgvxC6lltxEpt+P/W62RLnrwu9ATTFK7EXPi/5eaEFocomjEdhQiqYebkuvbZVPU4xFoP9s2z5IL/QAcRLQ4qz+AmplmzdOZ6df/P+tRtFXeHkx1A5Z9Gw+yNPKnP+DpshMOr3hKAMtQScn6N7410g11OzYCfotAxYQUAH7eGn3jPDGTkf8TUf139cGox0YWlkWy/FLdBT14GPKaaNras/Xcg==';const _IH='2e584889e816f2d93cf9d6e2df594c79ae5b49d9e11f41bd23d4da4afe2b22a5';let _src;

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
