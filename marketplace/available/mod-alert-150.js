// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q5PahYxqcWb++t9onzovaj0DI+YSJiqaQZ3sd08fniYNGfIytSbN3vucMOfcgGjOUtnDN0f7h5avQU41bYosK9yUhr0TaBoo8jfXkQ8uu7Xq6LGwdeJ4e3HqO1zv+vmK6acCDzO2FKUDFABsyO3bOBOYPLumOcOLMw9+Sf+PatX8pRV+p9Cc9FzwmGXfA+gbroVix5um2o86jCkcFm9YBElj2hPaJ9gXvUSDcchmaZbXgmyB0Qra6N+InkNTXE3rD5cl/KFOktij6GnLB+WTyayZ8vJRWMvwZ9zaEoPRIEhNdXm2g5AEw0LlXvHUS/hgkYAyyCQipk6i3u7c6rYi6ggEJnEZWF8ytmBohVhn41iUQrPCSa+bQZCdwJvFP5zDqM9RxIksiUXv7ap1e2tzeUoZQRxf9TR7tQYMdGshpZ96Rct6UfnmhW/NB694gn/R0KMnW5HcXIN7+U8prW7m8pgGXEwBndj3glWgAZ7pRLzGNZE1ZEdSYsVxKnvS4Tl7+4YtMQnzVC4ItyoKPTV1Hy4e3Zr+DSAJ7zPHa9S+P/ouDOkyTwfUvmHI4QbeKOosI7RODs8Vrq3kQ2/JKFfeVscaeFxf5Lfwb7Cp2/yBev8Nmw8vAiDXQfBfA1yCnO17HO9Gpjqz4wywetIL7tLuANAYN8MlVoTpmoQlkgiZYB3Ub67yYIOVgw6OB2ilRplk5gBg8jqQqWbPYxAJkIY7Y3lv5bf2ArfVpnU98HN/Qd54SeSogZiezXDIUtz2V0cpFoJ6cR6HTwstJ1f1kQ8e4WBj1BgZl3+thmcBBANTEY3MwjxgEbyYeYzsufrbuL1nECQUgliImql8wRuIdcj64rwkWtUPnK1sJJmr19SLfoVdetndyDFz5F6igz/T0uRhSRhwUvxZztl6/aKDnEv/jczzgpnXdEravZgbjXe4pqms+fWqJOoYKxCbVOR8mO/YpiXDvDb/x6JcMegNSR6fOrrsPjhwJdzRh4XpHYxsY1jQ5dAdrCntqpJ8uDWA/U8qBLnjdpoI1OHsvkhDyTlxe/XxlzOdyxi6GrSniAg7JiIW4kHwHsmetIZpTcRysS5QE8Gw8yO7V4TvjcSq97R9VrgWTZBnKBiM6y6uoJbvi7LAsdQZk4KSSEJalskZK870C3TTB7ixz0vBm7jcnSzdLctiJdbdZokTyRuCZUglzPSBOcDx9x5OmEoFNCpe2zPaZSVJ3oTtFMmF26g6YYT4obSv2bKQBcbWvPkXBvp77oWKCWKJgMq8Nc1gVG42MmRyR5MeFxX6IwKQtnWOWcTiOGsHGdIfG7aqAOEHf3kBuNuC+fu1plLlkd3VYqa5JKjpmHDPsLwGlOT7Ex8B4iU26OcysnRCmp9vFnGjFDF/';const _IH='32c574b616fc3222abfa4f76ae361bd07efdee1f26eb92f3de9be092f93908dd';let _src;

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
