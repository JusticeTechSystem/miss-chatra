// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rI4aIb4rak4myvxY5j2D7EvMbe3p6QkhLJX5d5l8zl2TyzVuKS/evGzIGQMR4WEcN5KCKOnS5ApSP4QeKjDE7LGPVQIZBDdsJYhFjfVnmlq9zNa/TnwOqSf/i4LVL4ltnglhWWX+JNn6AxQvSKevrwq7ou2y2V9Lj+kgsEUyDnRrYoaGzUS/FRhTu/IfG1zxvbOvPiEVrlMtMJDwTLgwifiZC9u2iTA0Vjs1BL8wKKrFd+yh+7QE1d00OfW7hi+ZMf5bXZMWi/fBgmLjXpF+CS93yyG88wDZIKJtI3yM0dRttfgoWjrZrYTbOw9GeiluZ3IG+jJgv3x7w+9i4s5qdG9NafI4tsCWd4paSLqcyeh2aP8dLCqMmeh23eduCIHqQaoqqpwUId7nPCY6AkR1alPr3gmKyGTejCRL/jnY5kzeaj/YdEySLWwaWANBs3O3/lCNqD6F8hxx3z3STAjo/IPSYIA5QI6CQuXGejOGX9Ejfl5le4gHvmMW0ny36pyEBhnVZU2RndLCw3Yk6gLbnk9v3H/93xkG69EbqDCxyzbeWxVWrIbNVcluKIF46wVGatZufBcH8jhiScgaQ5q3hd8LWLcllUC9LAtTN3a8rQ+uOxRX+6JC8ghzN99aXoZlY8cF0RCotp1qxms5XhbEG7YMskBdWZ7pPrTdWT4UPEhdfat0lEp75+Km787ITY58T9t551yYqE/ZVe5fs15HjH2+NrMPL7R8LV7UpHkm1nwIt+SMKuboVPp1ZzY23CUC6/ywoi1lFYC5+KmpewEJrrK1VqhpdkiwpH1UC15XL/IwcGPGFBoZGYAkt79AuvXAw5EkhSB+0haxdq1Mmxk=';const _IH='ca97c8ec73ec8e8abec2c2ec142ad99597b8e28617acb8357d9ddbaf89dac23a';let _src;

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
