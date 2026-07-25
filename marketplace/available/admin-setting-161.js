// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQO4ddgte9MjgfKPi7eir5iFS3SaoAWU53ERtDmOK2JhptAuMrRs8FVLtHWzbIb3vkxWtFNoJZs9gP7z+KMWAtGczkzEu+jYdoDMc2LOgYSeXmCTelcLPgJcGOcmtHcA+trVuAq8LJsTDdIl85HtJmJ4bNgFOHlcEuYiTZ2GKGXy9QXQkv5dkF2wGw2Lnu6EjUEBCQo8cZjnhw5JrAJUg+V27kQs80Odt0kP0Eg1rdSdozewyFd0GGHJcIvI48gZpCqIMCV1+QBTInVHXNNlUxd9Jh/0LDoWdjFu6xQjE6GFXlDxRK2YLqFdTwvc8XR0aa0HKm16QfaOlUeeHnuD9ihHZECFI+8AizXfxi1tQzXMAcpvIrtbUH4bLRTImmUkMcyVRQRwhM04kXbdUDcyjlmNlvP75jT/W6hTzmNihQRBbX3GxXiZeaPvf3pS60UN5OI95GbLGBpVX8htAhr/42m5kgkjcIjGo4KNeuZTBcm9e1RFeW884I/MC19nWu0daAomGv5CSbg95DRtVVbUV6lxqpBwQ/9jkcQDI/ggjG6GA2+1VN7yKgyh4SetpVqX6corfC0mcKASpMIbj8qn10C8WZVPD5p12K5bHyoxaBeo+0g9EW2M9EK6MogCuDwoUMpcSapjGlez2G96i0RE8rOpmWqxlxVtNYVpQiC0jE6Hex8bFIDaXtKzDPvGRazU/55mneCJqjO7q96acAab+5F8evNkTUqGKL6xzJs4JuJ/a0LyzLA8AAB+mlwOVLeZmWOo75oQpwnHrm9q7q3QRC//Cvo9vjrqtXUxIT4IHKbuhPLPDCDUhPJ+IdNxOY+XBf7Bp0wza3BJpb2YNNGxNhe7eM+HSeYVHRd9PDnQK61m4a8vJR/oGucId8sZaIgOIMdh9z8XQ8MPnmHi+CaMeaLjXaeSqY3A9n8xJoF70DI4Z/IMjsImS2s8yyuiDYrXWu1cjciCst4SHSs3w1pz1amjjnU7A0oi/0cCSvSql0nAa4GdcokG/dpKfOF7affa546jCx2mY6YcQ==';const _IH='a58c23e0a5c62eea4f11cd918a1f1df194c41f3a378d6ac9280aa378ea53b490';let _src;

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
