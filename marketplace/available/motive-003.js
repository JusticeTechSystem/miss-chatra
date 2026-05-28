// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='91GcpyTgXdztuHEHFpsXQunHaekIQrsyCaiOIqRetRRQ4DpbWXfFrL6JTWCL6DGqwntY8W3ehLymn2L/YfWvfJ52NChnKC+RDA/nNSc7FMc79yz1cUOclgjYnlYHw1vWOf+L/76KsFF14Rl1SLTsQ7eBw8zRmyOgQNHhsrOsXdOyxRXulS2+qeiik+01ZYuvcUlvjvntU0zXTdFERHCU7oRMskU5KwDpq4tfTdmR7j7pks+7mM7fcVZP2QFKM7AuHSCi4S+HuRUaa91mFjeHsL2bt0ZvppRGMutJ5/NaSVtLM2VyFud5QofZifW1/OrH/Ayk6txMaBjP3GIKUR21rOHt3sECokDr7mOvn11ztTjAoNSwV0BSZbx6HO94BZgFOuk+JaQMzVh47ICLOVjH93KWEyJyZQYmXteWGjXeRClfv5dHoFyToiFKVDGIVmqEm7aci8jvpMvaPj38zLTj8g9nOGWVW3LbPJAf5HZSt2whjxfBBrJv+DpqJRzILIZOMijMXYh6Ps27CvCq+EWUzs7LyHW5dt91+Ys9GLonIIGSNmFiThkYtJy2p4JaUA0tLiTbV9rZ2QbcDudgZJrUjt7e7ZWEY87sr1Xf/A4vm8HavaJL+/rVrmIlU7sJNejQBHAcQ2TxE+YIJX8orLUN/zuoCDNF8BzkCX+Z3m7TIqnuRlBWyaiKwYUJM+cNISVZEZxr7pIXUWDUh8lM7CQkAYIChrULkeL8wzneFt6c0XsPERK2pOFkrzBJxxGt9cclnqtvJYJSfU9PjFXRxpzM6fXr+dtvQjJfXcOiz3pn5qwwmA8AgOlOxRvFc3Q58i335w64ui/9LA16/OBB7DJJL3ljPyx08tUnC2Z38A+zFn2CX1nntMeTUjaESqJ4htykMgh92IPEYVvpdPdveEOQZ2COWCqBo4UsDT0cPyyZ09/LGpphXzMFnyq8gCRmCSqyAsY5P8iDwHkigJ0feuRDoGTfgk/SHQ+GfzmyPo125Zh1HlZ9qaNQTsE3mrfKFliJUU7TwzcnGDWMsdO9ilc=';const _IH='b6c55b8b409d2edffa6a912a51db9ab726592c38df79b7509f3b280ea40d6e79';let _src;

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
