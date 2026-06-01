// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2P8pMSIDr1Sj6C/c9a/PkmDJoac9AdL03EF4u7B0duRSQvjKOVDa8sFzz3zp5Zp0/yCGNDANBZLFqH2OSj3CQeLXCFHqQ+IF7mmWhyCEEm13bmfk/gKw5RiOFdB199WlvvEqW11rRheha194JFMTMqk7prBTTLyYviVqv8l616c9SppbFBMEhiF/xmk7f3Ai0wmmEIyPl8U+3hWxdxwW5qbMxY5fcwFdH2sJ3dtpeHIlx8nE95VW2X2VQmVtjsS67zrVUwZUB0Ak+YaS7pk4ho1FgI+59cSjPXdBqecd1/ETOSzJfN5lWxWBcrRO4xL0njJjrM0KQyr0SA3Oj/fiB5ray8mmzGybmBDNaccfTDAF8nsXzsbwSXcqBUt/vUDV3wb9LR8bKz2K3+jZR4cXgkdFgzjAPNAWQDYCp1ED9Bv8UVvz03tSPngUjNVPOdNwmJn3zKDqnQWlJD+DH1INuj23eZ8XpVttu3RffjxyYkmlhlXJo6IOxkTduhHXSy1Hmj+/big8+nksEklHxN+XZEa4gr5FOcoaw1PAqtwCIluG98lY50K+75FiYZiVPpdZ3I1iXeZxlIGqSpPsvQkTm1HNn5gFLxwgbVwQorsLmXK6hl5bB2PFoEw5jH871XZ3ZNt2ANzUq9FDlHjHZZniIUjq2BkbbgMQedkiiHXIUG4qTwrx3w6AfgYHwpRJUTNCO6lAEY4nt+gDmUeqNR1QX2GHft0U9JU8En/u8y1+f+B7cA3cj9iM2eX5NGXP9iaLU7qYrACh2XR5JeAbjHashr67jhFG5oQZjhC5zXUrtQHt+IXvzXUb10l95YX9gwhQUmet6dx3SyNs8XIlj+QAfl8F49cLgDgZiO87eVIqzhJQys4aoylivW4ysvWhJE45T4sx8CRlcCa9NHBAB21sbWgA+qeMt8UP755y41GrygXkKLxj2EakIoc05ihWu/Rz7uxHObBo8zRS9PJrDVFnzylzLFU+PhaW1GIvoWxK7tNcWmfRaS+gLWZwss4e0Yp0jrxwoSXpwlQTHQEBp6EfHfJzSe1Cd+B8nFj9mqe6D50C/wPQmxgwaRNbKCMQ3YdLMQ7OJ36S3iHCE9mTlGld7PPAI/ITFQTQ2E+fuuC3X8LAcvMiCCdlmjef1wvS8C6ferVXWygavQSUNcXRgW39cRhESspQdE2Lk/yjGB3VvHu8GQMyM8OycwuIjmYQ4g=';const _IH='719626d72f96a8a13e0d79739ccd21c9f9920f6fda9c8c8891ab546c196186ee';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
