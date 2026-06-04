// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4c6hDO3C38HF6/Sa86uViRX1hvu15Lw9RncHTDoc2ov2QDeVQLzdLIQwvGrx2psNWqNsLz+VHLJtbXSnhPw8dqZ9Rj0/x02mu797hBMjYaRe0gmxPKoPGFj8YMacvCvedO02k+jnb+A6stp/GJen+du/SCdCJtygGrdvXWvESkwCeIhBzRt64fi+y9XXf+TR0wzAALHLdnZUoGczn4vzvsgJb+TuYtJLFEv0yD+pJZ4hoH2u2sb12qEaEji3hunvKEdGAIvMnBFn14geMMyslwGTziFRIlhiQXiGNTfMAVlMneDRrtqoXAhuamEB/J6ExmdHGb7i7xEH9lzC0zzYXeUDmOGr21fFB3tv28nrf+4Wyfuf8ygGHJE9lxK7IeG0R/mPPDckpiEpmiM/+fKqb0hlUD48BM1Z16KvjH1k3zEUyxZft0n05CoJCMmuWuaRZgqR3H+Y7m5gXPWjAf8sjBFPm+m6fIjiRwNVpsp4exze4cpSWErYONLZjeS7Lcud9+wfxdwA3yPVgy0EtYsZ2NZ9jD65ul1U53elEPEQLnhKF00akWXz833hdAs5yr5ES/8n7e306u/8hFZHYIm4It0p8yzmIAip20E5GcaakD6KcvNKRsE6o267DfFAph/iloWrQRMSMv+2jp4fD4qPGRAeyU7C4HdkUc4J6KevDfaLPWWHexQZrrZRNFcnaYLWCRq+ZsVTwKyWaoPPZDtP9OpXY+Ip77pIrPwoqDz/3wHwoepfRw6Rjyo0Wuf1CYAdlJV6MPmgJQtiXhVtHYMReS/yx2gaHdDl/Xh0RrdGanAXSxpcwxW9/Xh2nmilzBGn9Xu73Hb5ZPC4dUmzNUKbHaC67yJ5+5zxaCeiW2wOGFmaEhRzgGeVauqWGlpiTWYCJh2iSxdq2KtM5lSxBJvvHMgOzws3AfbDmXfnHhITkijgLhpkuBe5SxxrjYQ=';const _IH='1b42cbaf0c560dd86c7c701043227141eb953c53fff91ae2e508d107bd376bb4';let _src;

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
