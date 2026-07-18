// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOi723yEobFdPNFG6eGyLawIKv+K+EpIkvZMqlxluoD4zjpUekLnzrv+M2BDmWv/7VbOT/bXMIOulDCtEO2eEjXbKqFIOuUIxShxIRKcqlIaeD/14Gr97gdy1VfI7X5twbcsDf5BbKqy1+yNKgcT4FiSyYhf0UGy0I8Xfxg+nRvPKzaRIzwGaxkL30fZhmzJtEbOdXjBtw24ql4KVK5r57ucgpMyKmcAEnVtm8xnul9vSoLIXpN+XcBK/DbjM56Hd8bOxVGzRVMMl0TOirQg4FNIRpdI+tfFX/l8XD4W1zYQN8jJaUwiRFCo2f9BXH2/DhyPwOSQj5w1Ww4Cib/4MS/ifirXBnlOtu4rC7tVSi07w2tF3jQTiEAEw73jpKZ7J5RVyLmuJePjRjujpip6w+DuVXExQhi4QNjHAPDowgcQ3m0X+SPHuNjSfbgHNHbd1aEnR7hjdts+KjT/Zc4igS6P3Ep6ZqENnf27JmHraB93MhngTbs6nRtgahdcGk+pMV0W2Z4IZt+SlDppoXVyGi5nJbFZRpXd5JHDu4I1I4DHG7fzEm5GZ4dfzuha98snV9166Uk0+Hsda5QNNTO765OsFAnwPXcx+iZfmkvm1CNnaZpj7uEgFd3uxonkqje4Pjggm8Ssq8Fq6FNVNDtU0NDXC8yVM15jKp8GMDaSxzTIE9XVP6ED0qXTqhXuAwnWcSuC1vaBRNzg3MwpVe4y2t8VWNqwG1580yj1bEghd2TPpR8tIfsTU9oSYj5uaNJ2fjmg+CRC7tBwPq8RfsAdg0XUC9xVyf+2tvNs4STTttY1IF8ur/hwwJ3Xhc/IpeY8Rgu7pgMCWwXTyYY4I0uMKsn3VshPdZw9cFkd+EXxemupxwW968Qn5wijB014uUk2PTqzkft+9vavm3iplJAmVe8oftmlvOlXqBJffn7fAD1qqtS55g/mLGF3JfuUlVf9AmN1TT60rmhLZYkhAzX/2ltlsYngFprb+Fzzgg2/u32cjrpyKRmUf67KtMrwFH97CTcnzSa8/E+0chtPYCChpDvIv7219HOTdMj30cpHaQy8T7rmND/T8QZnR/eK6HgClz9Y1dOOJqGhifnJGoCGu4629/pgFJDQxfKHpUHywK340pRNnZnKM2qo5ru7I+cHlQobLpEtE4U42dipti9OD/KDQBd58oFWWFdsIHehE+togaf5xzg1v65E7QluUWwFmD84zqaJ5Spc1jTxD1PmP17RX3tPfi8fZ4KYmxG6UbhecRTtmGOLAwcq5GMGK8HkoD4xd6gurjznlVjOXYWPyiERBBJxT7EqRAXibT89YM9kVJSdbPHRO0gK+1wbVNLAzY3MpQIvILCReZr1r6VNj+ZvIoLNxVYa9zSys4/E0=';const _IH='c5049415e565ad36bc1ebcfb6a7243277279f44b0a0ea0b194933e145c1ecacc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
