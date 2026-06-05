// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9kW4DOVMx+lfSUfztutBq47cNDMfkyM1xwyITUGI4wKqlghkPDdQXfF5fst1T9X0ogyC6uWeE4xQuBOfLTBK0GmAaTHnu0mexEy7JEGAwGwBwidp2X5q80GwjXxHBtZMHk2k4NvnwxMCB0lzZoPr1dVLq+p6/znkJFvGh3HFrflU7zi6/bd7YQx2Xj0d4ioEDpp8dzsW48lhw6PIqVEriPeLx/+eTYqt7NEzRMsp5Y6TJh8QtXzh5P845eJrmbWd+IoIvyu84qYYQ2/97HjzCyoVw+Lnla+nBPpUsZt6kw/A6HC6hmEtZh1Fd/58SfHKvvmdvLNCQkUlQCNre8gcQKAjOW7qhmCIAScZV9bB8ypa1G9F/MX/oTPpWub2qz+b/ssxLkYut9gWgFEBteUAoZXYMvxgQH6HCHNoo802qwbJhSClgZ4kyAQHpFWTanbQmdF9bz+Q8FzRsRWEILGMYy5WP9yY3sVm2kJmsvghoEow+V7C0FhhKRLFb8Hnsnun4y/2ya7O7bgelTBqZgbfs35PshZW8vLotPYO4PLxZxV5NGSSh+xzxRqHJm1IM35WHQiIJccVGh85fz39uMT2ntWWah9dvEaJa+Gc220b+FHl7uOWVLsBzS8REIqipxUPYzj1/r7+s84E2s2p5FleN8j5ZH6sg1+816wu8voaqKyIjWhBUUYl86TpNSnvE7zqRoOZ9ckc9TA8fwUwH+Nyevn35nCvD6bYM/rAyxlEI7TZMiicVxg0XIZ2PmFm7Cf1NrRLuWQ9r0p8gvaR0lsTXkB8zyDtkuvFqlx5yWKbkssI+RCFOd3LbzZD7RcbiQo0ZNpmILc35nOXJJD3z61eKUf6/iGs/NCq+jyZtgpqvCm40bPgcCXdus8e3byHk1SAxH74r1YxMM0ULfXZAY6S9HQ8RsCD9d8N6miljLzUlRzNZ6zHbfRqne8ZsfJFIpYByVpK7QzyN2D4dq2Mdau1bjhC7ZlFgeMPrqYclL59uubQFlVvDyqUYfQUU0FSfnH0whOu3cuWthkDHnkLL77qURQ0BR5dSmyY3/MuiLUvJYpSzmAiwdV/tqG/zjb4SpD0sl4BrMqOXM4D9WFfSYUwkw8igGloDBr9fVYAmxxklEZhqSSt9FuhXQCBbvDr7BHCKA+SRO1U0Zryd0szp7xiyJ5+TT87QL3G0MfvbLMJ97YpGqPz84xxvjER2XW6Fh4XbL1WAEpYZQhC8+ECStA8MvIyXOuXfz1nIZIE/KA1yL9zBNNENUUca1K4ub57xc0LfLfyALUy8mkoOLwmWEIFboq8E7SHwNNGDRTAp/zGbDGWSIIcGVz2c4O3VIR4DBCj+MCaKPTDRVwxOUXRNujvNXksTCUHga18nOUbe44riDxKfJj7Kbxoqw==';const _IH='219b2eb520f59fd550d905aadd65099e6574ae5ce584f7864584b735aa9757b5';let _src;

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
