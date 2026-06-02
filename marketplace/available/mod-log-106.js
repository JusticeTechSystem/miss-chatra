// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dHSxwVMSh7hrQ7EFHuNFohwnrqva/bpM8Kb+Ct7U/O82Wnf95Y4LRkwR7bisZFh8uGOKioiPZpfMWB7Q+51Tlf649vS1YkCTV49wGxinZiJ7ZTZFv+hc9FIPYBkq68adb8Vlad69uvfU10Fio7F5AyAzOsPxju7lEiGGZaWya1xyiZvtFmsksPOZ/9j82YQhN8rVtwe4qwkgxtfdLBNH9zFXnnCFN7b5+gdXD+rqkl73dd+F2FBZkGuwcFLXNQl2IkPA4rJM2CP6Yezei2oiayBGs0CRmac0xH6CQdJH6p4XsJYXpn5mgZOdEZ1+6hArr9g1hw1Bgwne9BQaL7KixvpVc33U0vjyiahCanesHW3K+aPrkAA39LHTGI19S+mGEpricUbVmaBFvr9WpGGdhHhOMLBOLD9Q08GGMXMFnSgm8AUPpWIErm4N/Wu62dZWt+EOMvsxz/JcDhpiZ4qkD6FC32QKqKpbkyS12v5c3ZV5LYeVxaCvho33gkWX5Ckpdd/yHagAehuMxEZplvRtQHqYwHxW8ri/bYKssJDqonoINEYrP9qGhTPimm0QnKeYOaf6l1kujBS8vS661+bP6pF2J0tv8nLNGmlCdiRreOPsep+qu1zQUgsvVSLxNs9uBtY5HRPNdDYR+r7jXLM4ZfmHxJK36vWpWN77+ge/zK8RV2Nmaa/HGeDJ3y8A4P33GBnVry5J8euMTiqJPYWZozBSgDkMIv2zOq9pxvw0vlkt4zMiJ54vX7fE68Ool9EwE5BJx47eHGEjnI33baQVwUVvC0xNZSwj15Ve8hY/I9VegO7Ac84DFlQ/BNUtSC0YCw3rAK8fwoSjJniiE9N+uxRXXWOoXBHJ0TxevdcZA7CVu8vgvLz3veSydXH5jSbtNKxR6Fd4ITeH7Ww6pzwK/vdfdd+rVozMmFXMNs0w2jvfMjKw+IJO8/0npewq8FzSYJfmzMNnAO/0jlYmBEOvBl7HLIK/VbnxNmxKiEpa1psr0DHKHuqTxwbnQedIulfN9XrFWEsapco3FfEdALTixGE6aTEjSpxSZU/YjP2lrry5ZzWCtHI60V1na6ym5nVu0G78BpQ5spFwWgbwzu01g45DG7BqUYgOfvcBCkOSlziCklZg+ag3MuyylyN8HyJGfasLzNrAIAXRG/sjZY/sLUmTewIgp7HGmjU2KVapYhN8QlIiIlVJgX9PjcU9Ilpgd0gE+Vl0AO+NdDyCDLDlkuyStlG9OsWp6WeXYLgi0gZscHmWZ/ei4x1/kvXHJgFTjld2nTST7X3nJcpbbnCC+MzpUTkiGcxZCe8kFHKCNwgpXezCtyCPknH5YwSUIBKJAocHjPOWg5WxVQ==';const _IH='8f4d78a67d3e53ae0fe5efec252997e283633e3da1385be48d596abac569477b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
