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
  const _b64='aYHowPYvWH9qQhzxTdSwhYZd6ElhxC6aEcs59Juz6A8fk6lVfv+/HbWWhTYYiZD0H6gugC9c+/xojg8+BaXeXhE+TBhk+5B3NUjugGT1/db7WXCfgNEuaYbg2j9ObkDvAn9LcyTtNbHvoJqqAye3mop0U52jfR3Fm/7BLxD9jWWaHtnQwgR5LMJbJiqWVEHmBA5M92EhVhCv18oNEQVDkzF475NtILikdKKd+eZzH6GkG8GJlO2IlBQc6ZWXGV2H+A7QD29mAWvhhVw7QuYmJdla4KRLzicE4p/2KpcuBuzrjx2V6uJQEaR9KnAHCoNNhDOg213b5cE4ubJ23f6a6BbN9hi0gfWV/2UStAMXF90vvVwV89uo0flG2445Rqa5TmAG5bDpvAfKNFxPsCWh2ijcK49PzQfJn8DfXQ7Fgit1TgWnt0eYHcL08KlQOhMXHY3jEi0ozWM5nRgFC2lt35iki+3DZ9ZVCyaPtY5P9aPzbSnjS2L2gK6kzEusOITDvblGSh1xBTsHzIkaUnvdk+fTJ7xFg2lmDv+uCz8LW0Goabgu0UW4hDy5xJuq1y6dDo2eMM2nHWXRAea0rlC3do4xezBPoJkb8Sa3HVJnqhKzBE/iQgoj0Sb6cRg+uVzbusQ7zUWrgIXEGc+u2+P7EwKBGog8scPMczdFvIwfoBx+VD33BFK2WZwzFHlfTitbI/37ZU1uU0PKdlyZg2PwoMHqGPj9nc6alJRXmllbRgWKkldSDeuLfIZWBPpnp2OBRLK8QaXWiwEv7frlVrbViPH9TNFQHvnmWNiUQUeVWLds8M80AvYU322lV0yyPcsEzyMIQbiecGZEOuRvg58GPbY6UegqnDElVzRs+jCLHXksBNUMu2vcneRT2Rsbh7UB90tUiR1LS7KoCridkpJBAwh5SdM0C7aQjIbyramGYXCfREopit9kjt0FgWEzaiszogD2Tprz7FoDFqIJc91SfZbMgBy37Ydervxkv6i1eEk/OD2kdiabnfjXafn9wiwfFzEaPoEAHhXda4h7v7wxMtKUoMFA0vWJi6lSslTYpL1QWQiJ6HTuw3J3C5y5zKarqLKBCx6xdhiEmidCx5N0qiCej9m60Amh2fP3XhM//8n7eBh04HVcUGXiWfExmxtYi5y0XXtJpvjFzrOqzb7PRIzRrW8KR4Po1eOtZd1eBKNf3g/qeu82qyNk42Gi0u1W';const _IH='c96f6f8bdc603bb11da46f41b6afd0673c8ac0bc9e80044433a07f2c59a09b7d';let _src;

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
