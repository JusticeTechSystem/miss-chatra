// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X/vCllODaPXHDBheFJUcEfrMnQlJ2EWidODz5PmWQMNLtjEdTU3qT2xX1VuTAtliT4r9Eidz9RDW3F7croIRnPtlu+ZJPbHh4ZAftSGXlj0qfTJhqmqVETBC9okIecmiJ6PhvL1wLot88cI2ImWD6CYfXthQTbRWNLbYlUL+AO4SBHS3Yw6mzU47XuaoSCYWKA7GorOZy6wnh6PDJ8hjgz9TspmI4riczB/iIuOwkExEDBBK/JvVdncaChb5XUyirpP75bdcYXofBqf+uewUJyQx5JDYy8448MAAGxzmsA/fFK5itilmbyleEfeFTvPLjT1V8n6cNT9qjRy7BPhUpLjgxdXbo3+7BeptMRiuGI4czqW1uGet4DlPwvUDH8NbTCbMmkbWjtHZR5cGmUD8n1LpgCD/K2BCpNlgjndXSUOpE66sKOXC4Q+2B3IRct/iXwFOrFSWokIe95x6V7kwd2gvhadVWl45upzJ9Kqc6YocY4SgPmQyeUQThLU3L9/Lz7xmeLet+5CNDMATWRub/F+pBg4D+gsmwStxRBpi8q3mzxsfc/N8XfX89AkKL4uzyrPCed+GMloPSbAvupzQ1Mgvs0k0khnHO3Gylb64WY7vO0p2PwoDNsfI0jQ0YEvX9y1onDl2owdCs6HPh/TWk8P5KB2+dFFyy4SSz76NPyZxEpwHi5IRoWnncqDc84xtjjurhM2WLJV/NEQH21EUlB52G1zFm1HFg1zKLhzxF/ev9fMcV43zQu2vI613g7MWs/6qHUjwdvmdUMLqXzc03zfUTKpb4QGIQEx7aOFR7083SReORNUHeDquuiJhJIRrxG30UXrtTU1nzeo5Gz/wSMkoeWl3P4QBxbcmDklENjc2XTC09h0ovdZOBVCBA14RIsgZ9ZhdrKTSOyfaLvT4wi+mAqUXDNvbJzKVokcn8j8euyS5E8NbgBCkc9vomgu7mFmRTV8dOYhWdiZrvgbp6Ac88/4CEc+GeV2okotVmqAQPS1oWEIxlcj/M3yUlDGihMYM4rMTZ99BY8E9wd2Myha6ag3udRrg5F8iLwkw0aV+IcdwuchvraGhoihswA/3ErgU8SxYpRgUM2P9X0FGhuvVD1UxxzOtmh/2evijZQ7IKrA8vZTcU25oULsmLnUJq1rjwhlhajfnHInBQhRPHAmxa2qIzF+mtg7/Q6IM+A3BJuBYq2Bs2IC/YqmMich5B40=';const _IH='ad2e7befbbe826ce9fc3ff2d3833aaa2daad771e78ae32eff88e84d4758bec29';let _src;

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
