// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tXuKbTmkF/NYp6DjFpZtNjOUlpm6H3npOdKr19rcoXvQBP3Qui2uET1sp4vO7FBOXDfLX601LEGUW7S2P9tANgKRE3kAOPR6tVT2DFo2khmZQnNqrlPdP+NWel7/PVhj2nLvGqvZx2DEnx+nN/28xB0Lv9M0xd28Z2JcQJgiPCA8CZKXaM96fnShSVHGIPNeZR9EFP7tVNok4IPZT8c9N6Vn9FkIoGjqLmFbb99r3IFXSDddmwHU2KuOHBaH+lrKn+jOOHl55JorPJG0AiE03evmPRyO/MPNpYeuxd3Oil0wdTRzWz1MwK+vZmOsrz2JA1Dg/156nC4A6rRkwzKNtk5XyrZ8t34fgwoJZ7HTewZZr246COUHaZz/YUCMKmjx/DlbD1wH2PTHzL+1PiB0kkmdn/J3Rf60JHP3aTBwDTxVTYMT0jHj5YA+ECsVS1cS72LYygNIJUMaGypzhpAu/mYZWXCDX+v2OKZG5CQU/koe0oSX6HLFcx1HW5XclIXvdu2Yey2cmSmeeb0TmJUlL8ndZQkLntNIYzmleGmPmRo/SnQ6x/KNmpjjEuiCRs83A3spB78dpj4nEC3/CcebQNautEZ9KQQ9c+sN+IvTUWcrsRN1977uXsoTuqL094gNLTYI/fAsZNkghWoqXuimKuTkSS5DBa3y6mJ40ailgUnsFVNy/ABOnFT+qiXSGo8Rg+C2zOnH7g2Ji1vxBFdDoqF18tzRCQlVaR7Tz5mwqcZHAhGlpoYhDmITh560IxQYZj40RdtMTd2Lp6/t69PHCpuD9Ynz46lkFAqGenBj/1EZZxCjaOqLu+dYuHK+uG/OHrMjdJ80Rl++Q58I5d/PiKhNBmED8SoFbODGjzgRfiYBIK5Cz5bFUgdWyWwiMjCICDlNV/XbdkPC11pk3UD7M2iOEbiZ/onCCpGSX6dtQ6qb59uVr18QqcJOIW6jwG44mEEwOpEkr3KZRVQw7YkJ8dN+tYBnBgwI3gmCk+2YgLmn2wizJsf9+fq4aIfOJU3+/bEqcwJMYwdJAbGNA+TKxfvFuGjAeKEwNWYycFuflhUm55h0QE5CakwLmechvEEhuHUenldH8eCDYXy2T5xQRQRoPB3i1wsjPVKUeiU4CxWAhvtfWKjI3L12NHg8XwPI0OsqaPcHB8dW0UjWJ86U+Uz2drrwQRt95xNcV95v06XM8/2HMrfuhGyQ0XPP2HG+iSBAO08x61kK';const _IH='5c1a5c3ec5835edeac36c8744676f1f4f4e4815c2e25567ba5490b1f87137be3';let _src;

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
