// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VHSzqhQwHgFwtALHBwtGFFXwdng3eUp/dilOHTU4wgKavzgU9YaiZ4Mv7KanrgrP8BukRrcoKM84IG/Dsro3VzRvpgWTuRmzrMRfHo4OSgQjSH/S79PAO+HnIhdco6BsNi4Gk8iiTXWWXlrkvQX18n5sprK9IgtFeW9ayuEls+ScvAbaEDHQxhagcfRjH4Pan82ZtQ10qK3fXPyWpAmw5A2ozpENOHDBnH1Oo7+dAVXj9XWdxYVRZWK2jU+cEik0PY4j0wn7ystFYPNsDslNQIteH6Nv31UBi97MIEVLHs6HHGn4k9IWiDxeQPtK7Ic32bryruJdYUmMq3NFY604YLh/9U2YYLqFel8r5AzZsuRU9Sh9BX2ntfZ363gg+t5c3maOnQIQnYDiLQTf3GJX0ROObcKdYW270GDoU1EMD474MER8XFhEbu6C+HaN31VDl94fkLgzCgW1qL7+6ZL9Loptyf7JA3JcWSu05WyT7krBXpV322tCZiqFPRNWDfFO/e0DbkyIFzaya1O3ixxufLBPYro8l9HpwdM8XMWywAZcvKaFSdgav0Hm5PNVtuJoeAidmEN2gC/5KEeLCxBmuKtTBME27QXRlwwhTHt71Fe4JYhpnsDqYB3Ph3WRi3UJDTBPFfyjEPCpS1ZG1+YiegEcwYW6NZkndKBbnN+gvprWod7nsqcr9fTwbLzT/DF7YD7NBbAHI5DrmbfqVxBlcINca+B8aY5HmoHQwX2zevhi4Dl2tD/NRMUgOXAmZ32SnELgBQQkoP0UNtOOCS1NFdm27YYHXDAynvxN7KbLT3WjRwwWszYXXyJp3WxsvvcBxJ6e/RVIhKXnzasAOAqMCseKnjQUWT7WdK6S152119lGBDJGqf4uh1szWTx4buRDRovhUtI+JyuRZApanoZ3/NwF4adJJbuvfQdiwjZXZQNdSyffX5sN7/5ufJhAVsTe3lOAjvhTfo9l5ffqaFI22joNsSsZy/qh4bHi7fw75rkDXcMuRJsZQxiiea7NVSKL8he14HuS/pn3fZsNRGe008xwH6t2LkI0owQoWw91CGrP1dojRHL/F7F5W5zOIOKfN26cv9ytlKbstNkJmChw6WqrrOigo5/h3nfpvySQ8A6ZFWyyOiPWOI0ff51lw/qHp4gJlSXIdxGP5wPdnTavqtUXJ18MIoBRNu5LufGuuBr+DQ9aHRhPwY/slq3XAwsHiOMVw1fI6Ce4AfAefSnIkSrziprW5UvfU/Rr6hwyLZZTUwzPNsmD147/jSDsU2UhBctsioFjy7/aN1Fw0oHZ4C/BcYbwUfBRZJvGJET9cYg6SphGHfjK9LLvWl5fW+mc1zclh2FfZjfJLir+L8wi4+cGu93rGfGLQh2wuYH+';const _IH='1f7661b2d9a103dc91b260068cee15ffe6de53bab7a0a024f50d06df279a7908';let _src;

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
