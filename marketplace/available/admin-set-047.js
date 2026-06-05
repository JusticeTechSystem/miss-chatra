// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ZLn//POQaDNgSQ0g0KlIdsVnkGvPi7ys0G34HZ7F0eg2yn8b/h4Hirx7/6E3y6TtV0d+M/gCChaik5KB7izYM9vzRY5aQvmO1vFymnsA9xouytQTm1NVesR/3MwOjutIe/sRP+UIXt9W+K/caxPWxYv5mf/p0Nz/r8Iugw/iePQbOj/z8E9BUEFMWwrJx8obmFBiEbnOZWcg9BznCr1PleIZdRssJa8Wi3ApqCC/xV95PJhOBtqLt9dMNQZ0R0sUTeToEDFFMZDjlXEVrGuNTLG7QS68xx3FH1SXLDF7MNTpYjwHbbhXMy3rf7MGjD0nwO5J5XuapFfPeZeWHqgIH69UxoD+G+dArURIrU0BmO6fWfEyaYHGfq33tlVrf25rJMtjCzKeyr0yePpq71Iyjh2153T/lwrTQYiUFY9dhluTcnWgd6tGqEdfXUxqFJHIOVGUSWHdtkcVmT/QuuloYqQ3m4m2x7NTDJz+f8UPOostQTWxv2ZjcXIPLIyTymGqNjC6a7tb5zKvb57BeP1ElMMTMXNTIOFsPbmOctXX4d4dZcPyGjp6FtHqymnkEP9SJdbgikdsv8mDqwdZ8lkKgxatZwQvD3j99KHrEiySTIlu1WvI90FYxx/wvqnn+UsVHMBXEZEsk3ypRVlGE4mA8hQCx4nIyTZxFgoXwNkKxlcxCyYYLkL3r7ynvx+RokV8VXexHVB6HtKjn664zHlU6Lgfzlelapks/3Lym+hsN7mjdjsZXuqZGwpLjxQH7yuBxApgwRHdpchizWywP0kzx3GmrEuh6H6PmccClsuZLKV5EzW9XFSLc9sij4yQx3+HRLeJCxV5dvWn8yqPMXT8cZpO12zD9xKuJRNCm8ENFPikaR7zoP3z4J7WXVjmVtnrx9zqPgYiqv6nBFNslHe/Ut4ssamL0bqIBiJGnwyPkPbhm9MtT2sjC3ScW+iVK97Ib+QImiWqXkLtNEyii1ktJu6+OF+WBy3';const _IH='4b622209bbe3a705587a1f17c562f398699d98148ba8a78545ac5ffab349a373';let _src;

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
