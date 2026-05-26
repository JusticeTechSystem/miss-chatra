// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/FdJHWV7YXASlvPrtEbeaF/NNG9l3EbXEw4v70+e1YJ9PfC2W3VH0+5MjAk8i7xQxUNKjjvcmNt5ZQ7H9bM21y91xoE6d5/0PFF5IoY2gcKLU0tHrSnvArq9WuTIeKpkBh6XEwgZy6tzIFe7Fyg+MigutRb54efrPY1UW9xndC58aSBt0sK3t0Y1LI/Bk4caiWoO1i5wTIN3FqE35/bHwLuj20h6lOeiq8ym58FnOhpS5kQ5uOVAfak9z6xYDOjoNWGBU6lX9L0ahD6YVpEIO1I5+QXywKsewOvvoMXxfYn+RpbogxETsLw1QraxSEXbulk8r06rtvM6A93pyTsdMUl02xA87ra014waP/ayfHrZWW1SuxCLE9Ye9t2iWHfsHQIvl2RVzEcSjD3BUpwJ2+FgISM7eFpgZ6qUkDnINbiEoKhQwdKRINXu4oawrzVMx+ts9Ff5GHiydXGOB3I4wEH8SCx+OAdUzfvHdE9lK6ZdqoNZ5QtQznRsu8rcvOp8X+6FvzeotnBxEsd3bEiC1CIUxq9WqqTXZA8WvRVJ2ur7WEj3HGACLbcIybkFN1yAbelw4v0IwQfoFFKJcHcrAiwLj6UgrdN+MQsWSDnspdQ4RMeuG2wFjclbOO0wjeiBJN0xDBcHDJTVjminwJKydH42FTNkRCdmv1CScHRfOmaSIgZ3kO78c5yiRkBFUO6/XCihoVPwdBrZfImYgMDK7sL0djlVkxb6XxCACmV0UCMEMxC/an5bs8Ntzx2jpAg73NHnw4aZuvDgR4Tnz9JZPGoRQ2xTXjK5TAOkDRsDiEHcoKoPRjt0e9oWwn5Gjz9alCptwKXAQUaSYNMUs2YiX20hk1teaWLZUg8xbgKLE7vVq96zd7ZhEZHBprwdb2Hbt+gCxpsu0iJXpDJ/fW9VVNlyoqYr24cvsKaUbKSGpD0E5UXtYthUXn79Ye7Wp7qy5fnMEQcQN/xaafWb/rYAaKpu3gLdJSNy57ujtjp2S91h0n8p4CJ1L5QVQUR4ivsvAy6KuhT7vYjj9Ut1L7Y9uK1fYRvnfMhC3R3S1EGicFzOjvAQUsMpzz46Lu8cb5y1KJhMjsM8XCgodLRxlBCqRMNapsFRLnccDGBaN/E48jC9jigm76Z74HEvmljmsyTpRsEa0Elp32ZANajkvPBl+lveaisz2pxPwex3KOXSwRISTbCW3wfwZGvQhi+AogW4Nh5diJEt3rZJ+hCsIHCE5IYBONP2WIDammEO7vgLruMEf3dLh7WO9WC7X/bqmrbzEPNODrrqbb+h64oKtQReoAk5opaoEsK44p9ooC4b3PtWjd6kN3ge1hvwGzBHcIvLTQHeRIOpT9draj220+LQwFW2xzl90jYKzOLRMsiu';const _IH='61ce9f1513dcb701a79e76c11b21ce0191c713f8c9105175ec335fa492beb973';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
