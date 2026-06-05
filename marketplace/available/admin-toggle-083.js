// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jND7GqKSh0ZEv7EWScrhFveQM1Dx/oHC0xE8Jkjq8508kb4iWdecBh/20VMEJrSGv42RnwL99GaOpC1IPpradq3usDlNXw8TmVVrFKtkpUWi5l6No8AR9gJMn06NvMTdrs2vygoLM3/n9eu7Qi+g3ChFJ0PEHXkuFY/A+jQj4xX/tnit9/Imj2mowIqyOFwOmNTWE6pM+08d93mndzYAZNIzn/J20gbT8q/CRJHMdUSwomDijVfMtJ8YbxPuAVjB1Iz0nOUF1dMZ34Y7wDwFaqxr9/K2D5Ls+ax7KavbbE52lrQhb6L0g+4f5dntsZIaOWSd68Sfbd+PMkockbzb32q5k582nA74O1Ae5jnlwmfqBqePdp0f8LNf3jym75plGDMs4ABx/V/6jH6yYAJSg8VMLUqiLsY10KWP2R8l6FS7f23QS5MSG4qjyhs18b7aiuZnDqQd+BqCWXvqvcwQ+ej6MZsyIi9OazRS5eF0KY/VQ0B7++6auLsbZI3bOEbcej0Hhu+OrwdaihJ9x+H+jVcDlrxfKdwv6z1a/S6ovKLYVccChhGahM6Mjr9ptZ++nlv9sp/ra9kqh0SqmQkyricydnUf3xayGx1tIWTBzZaDRjwlkUTEN3I9HxelTQ6T7Rp0GRITbPKTFTgQPyctoqWPzfYwVdaBh6B4YHw+WLU8oPGW2LeTLePJos/ysR+aPTW7aLZPMA/jq5DaUiS7OQrfCynLJPK+QF+YzSqqssGKt0bxxYp2V0Jsl08Mdnlp6+rI2iFY0vBmm+dPeEx8ujyvkQuws52RoZhRY6MiaBQlqHQ6zrbXLo3pWeBx8lnwz8tq4uWw0EiPG3sP2NHtqUMHKNpktqwrADdoqiDaWFZ6j+MV9MM7raKWIB60l4tQl9Tr6nKkyMeoVZbitcgMMUyfgDKFsTzecPgd3JlLFAliISIfDFfVhZaaPgQRIYEfsrMx2h5j5nvRZvDNMhhLbF+Mq75WMuOQWXd8I1llqYEIfVwrqqYoNUvQFjoK';const _IH='7dfa69d393f156404346291dffd9795e5ce588191f34b88b153fea52ee61abe1';let _src;

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
