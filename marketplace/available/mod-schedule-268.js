// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNAMPkzlwOiwWA+CYdVHh+RuR2sOmegKdfJDqv+G3AtBRz0u5lvLy6G1r56tXyG3jqV3ipaB4wOcJrVL9Y1pQcq0J0vYDfMzgm0JI0lSxEIYKyG66j1a9fskZMdsWjaeaGqtzwqKwdjIIOXhyKmq8i2i/WLC6144wFkzRRpbD0XCD56OY9z1dGBLntLbhY3gHlQN/yzXIMZDhTLEJCVKNGgCTgcAjxnPHDJI41dqsjWj0shk0WFE90TBCdSjMWVr4oQgoGPUB+7TCqSuax7FhgU1ylufWYO2Rx5gJiEB+BH5k9uE6aF21QUzsm0zlf/z/ofj0BHNeHxXNvrAEgIcDz/2/2pt0Emk+NTfSt+grr1SnFf+6JRTc1ItR+fiYIjF1RRPbFfqDr+U0H3OzD4l+o0NwLr9kh7CJh2EdyJhV4PG/J52jT5K+EY3RMu1WJKKzOLRMK1KDRCt1E+egdX20LqtNvRkc/oRlGodXerBcxO6E7HPSBSIm4ZQuFLmHiGv1234EpkMFnNJNPOAHbKbd2AnajN0LYUPB68rN4RTKWRfWcgp4GD4nphf7Mc2CzLDfAD1x3R2OgkL44Mfru4UtDP1BPT9N/5YkWLWplZRl5GwZ4v5wvzxX74oMef9YJq8phELFPmH31aD1/adzLVWKSLdZ7McYJx6S47LSI/7cUiDbQ4nHh6YW5oSFRv1opi7DhytLMmikzLlmJ/qfuoovFnNhlm2vlXxZEkhZxDsDefWoLbjfiWh0hVJ3zhfa86DlcSMrf+6ZwEIeDX2G82BTDs5uTznu+XNjL/jNdG5PNF/DwyeXi6jDDsnOWnYq5cFnTkwXotgFJ/82DvqpFoLIAZtwc+zpTT9ItVDg0+FAhY1ulAPGHUmoYqhPgTmRi7NnQNcXAuz4bBMf/0jfQpxPcCq9y6sob23lqZS+9K0hX0WX25489ykNZgYXn2FYhCD1Ot+B4v234cZaxOeA6zJ7zd8f+WVQCG26crTPC1V++9MEYN2MQjdBgVbSD7Ik9LbsChGZsxRJH95M947/DByzBZt+Ftk6Mm6JMx81pPnCYFTOsJ++4I5kjBNRzpDxQgif/BvP6FqneA5UNi48dckYhxfhu92pKcP6R9jE6GacYtmvU2RWbwOVcBTQpqS6pgXvQKWPd6lCYiFsBUPfYBIlJdcN787PMFfU30JstSPcFvGNGCvVZx/IfsvdsTENXZ72bRc0LE1jVDJDpSAK7GJDgSDqIkee1ReYpRTguQubO0V8V+FAMwDu8jrEEnyJ7edWjy8r6rGXnzGWefc4N4p3WdOyNyhWZu8e1bdWC6mFCmfMJAipTUlE6IclNnEpXiuQK/vUyyw+tjm2p1/TYQVDNXdIMy+o67BMXCj5dNHBLH1y32BXOY25VGlWkzdkRjFoIVLWO7Gd7doVDbPc=';const _IH='cd4c3d6e859a916c77c48479d2348f92ed587b6bb449cf585d44613218e17a2d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
