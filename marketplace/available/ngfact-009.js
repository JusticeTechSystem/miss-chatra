// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ms7WO52dQQYsSDt5oo7cDxYXyf+E6igVdRtI+J7TeS+ZrwR0o+Zw7/EKxI1eorDr0UwnvmOE7h9TAN0Pzzfd7drAyeu/KYN92aMurAFOcxSzuZxhnCUyf70iud/p7TCFp2QqXhFJxnC/Z5foUBA/JV6ybA4alxWB5NGZgdk0k14Tzvad8IIukWmMIuBNulVnfIWiThFQQ7QoVIaKJCfgCq/rOaXXoJGPf+rpn+xNPn8DLlBevi5aEt7cYfj8/xzpiirSnelxZP+QZ/DMv8NRHXV/zueQ6PZxGOm2HYc2vnP/2mFizv3m+Vk+icvHfo+hqE2cU7jEvvOInW4nBYAPu3KPTuU7KOiML8u3Uxkq4B7pdPopSosAWMjvvdpUoaoLLkAjAtvu9Qus6BzXgu9aiSu055fphXjZWn2UiFNcipQM9gIj3Ow/8p8ktT7a+QdV7z6f7oULxSniHdIcVY3y3oHCm1SyoMHQyvgVs9tJm5q0Wos3SGyppjm4bPbdw7iUsknKUKZn4NYqwj6+h5B2L0xt3ppdS+utH1sS/vyHOlQB1HmStSu/pUwRWXBGd2ngNlxmdUlIBAFN/D5e2385bjhAfmD7JzNlKE9URTH+jhHrhH1zDFY49GFhWMLvMSikK2ICqpGoHV726/zavk9wJwyBlXJbfD3JtfcpjwqaNvHxZOcK0cMdaBSL3yyxb8B/JtfhCOHmSvzpHMU=';const _IH='0756969beef4ffcb0bc24a403d6de428863a22d4522cf456d4eeec0b0844c7dd';let _src;

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
