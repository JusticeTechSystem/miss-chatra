// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CDW0bUUi7z+b8m5/HmhlnajnMECF81m//2mWfsSeGLL/YIu8TUDOoMMZq3v82of1zhZcqNcxP0cvNeHlF7fi9K1CJYWEhcYXuCRvxsMKAsDntM/tJRooN17jISogF1wXrEUOCUU39XkAUtJDcpahLbcEas6KITOC14oiR7cUyZxIWmK0A0/URld/xoYE1A9lPHsJm9EfPnbLnDfdQBskWEjiudfy4nxIuhHXodfkr7wX4tCTbdGWIqfE5pn5qslGW/KTaLI/X3cZcU4K6Ijjp1rmsPJnQppukJX1SUt4KKzna2rtP8TomAjIVXWsLPXmQwon2vDFYmWGsuS8XoVKGeFQeDq+9WYCoEOx3lnZRZbAAjYjaCnRJUc+VmPF1LOQVmSz3CDqpJNaeDULxm/qMy+yGqUdaUxV43N46MW1nvclOhe5mG2JLhDkEiEGw9WAoQOQdACVxvL8AY3hOvEjAs1/F1bN1nimr06j27NlpYZoWD6s68WLE9e7vDltyi9oeruTpyCRcAtSoCN77CqqibXxP+4X0pJu/cHVKZCnX0J8VKcf3RxVjmMNtoz/T4BzuTG7JwdycfDLH0Kw1IsN5URfBUuzkhN93wYn3Kw/HfITYT2+DztNCn3SYSFeXeImoS7DjdwwVkqEBIYRb6MGHNgCIhBWpQceky91LAqhSaCsdmKIjeH2tdcCufqH5ouxWvEYuXIzUumUnJqGuyK+b086G0KMMmdPNUcLlB/f6R3cBSHUDgHJfQ9+hZZR3N3kx9CbO9H0SEG+cfGbRr7vpF8zWxJi9uKzNv43pC4AFb4m+FfYPWiECPozAfmuF878RXf3+tjjEKdUD3Y0ZN4YSU5Y+TQyf1eFo3u5+9CU7dYjTYybwncNHhQJMgOrpgqJlkg5qqA95oKS4OkA/J4SAvcLY4uOmyqKmChM0r9HkuXAP6BEnXrVD6JGSmDpLxbGyEUdSg27Qga3vW3KArCzAmJCk+59Yv64XLRnlqizq7p6ljSJA2jnkmGalffG5YpnXcXRbhhe9lWKxoSe5MWX+zWq';const _IH='4a30dc09d41a5c433a66119583145a3d572610ec69bd8ca09c16fd955a80d36e';let _src;

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
