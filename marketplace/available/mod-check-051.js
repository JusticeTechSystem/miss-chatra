// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='72nua9M/KzpyaC8+STM0SJ5N+WBQhQ72Ja4rUvuyT+2v15TVJSOjbsU/fiUtDMMcgZ+Yhx4jhtRkfzWisuqbxiCWBpP22zkZeF9F9jG3W044DUISJ9kmpr9EOfVBPur0Rk62vptgA3KsQVqaGsaVjc36OT5eLo4UXtb+52M4yDgZm4kE2zTHDnYImZU1T6oCYtCR1c5ht++U8m+xywEXmTd103oSdYQKubl0+eYnGemmNAIG15RoXjU1K9rUj2xqvMLD4zCahpijhfNrqLRp3NNL5mKPrN/PIaA6Jo8wcOEgC5BY/HUYwG6C+avNOBbPP2uHYg+lrI8rJveKqd3zJOx5yxMOu6oKW3J0CVfL/5gBiw5GGsZKfgNrHbuQzMwc4H25b/NbttTiHKbkWsLX8suFzr8jDi5gyWXlckmg5UOYJPAA9c8dz2f5obHbtHhkvEAoLMC1ozhJv0y4VzyOmE4yZ8xwVAjFzBCUphs3+7zg/4H2pSLn+eTN4wiyO0UNtb5roAytNTIUFVB4e/1iwz2orKecDJ6s+domTD1s8eHgi0t2SMqVxSyhSrVxd5amfI2HKguK+qIIgbud69QberlQFQvAlVw0tgs5b8uXXowtw7UI0r/x9pCzHZ7L0F6nB6RDrF8/foXDaOdDmgwKWqbgWmrKtL6y9yO6EhmVbXMwjE3Bs7HyFVoRYS1N/XfsF+SUQsF2tfbab018J2tIokr5JZ8SgdTdUJvZPVrsqMmbuunQOzMI3X206Zt9lIbRqG3SISejDmuWYirI2zVHS8e6PYiHDYHYdPNvZF30bFSRFreVIVYJU/AqYlePXPKC5vBbtypr1Yzct8jR3J1dAgvZfyG3CaxQ/5f4+oJliQ+i3nn6Lqa2dzcP6AD+z9+EVC18E0UOim1e+6vLDlzm+R9M+BxLWen42IVwp6Ei6sfToEFg7gxKjgwSvK1porjAOwzDgNyMsvNksDbkukuXSHh4zOD0TZyiB9BYmW4pj1ghdKP5ezmtlIKd8X5h3LgWVPfbwMFeFrEjNB62A90HNF/dGJyBG1cfD4FK1gtn68ymFmJElISV0i9up75PSY+8KJSuJY3FdVvHCqp0zPUJuMy0OKqTacKmdyM02TqFwdCgIeUh0iGKOsIGG02qkgEUEPtKr7ZOfqjMBRGgt+bEzHOsGZo32/w+9IQDTGJ56whivjMv5ebeavp+upaNER/ErznYo+8kcT+d/SRc/Gx6ihqFbmD69XBgeBuy2zrp5eSaNkm/9QmO81IEMul+cjmlow3GcP+srxCcEcapFy8eNxlX/jCiB10petEJqk8bzNOPjwGBDaJwj7LPyx1Cg4jP7+6XdMT6TxwzHzhiqIMYFE1n2PaxCw5e5g==';const _IH='65fc6e9aa265df14c68b7159dba62a665915318ee826259190a8668810853a8a';let _src;

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
