// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aD7hCwCDYGCfX5YC6lbPFHApfZ1q51IW3vtvRFxZiU2uRsQbs63VFh+p4Uqm6aKEED4bsEeGxJqMiWCHM6cnFpxxmbvY1vS38MFUuecUMOci+DxZngPm7Wevr8IxT7fqQQiSCh+Rd9eUu79zloQK27wM0zVi0Ait+Rf4Q1VLVFku+mFyyfmloW8P8KvX3wJ8uuLPKvOscTcj/bDmgMmcuz/ija7PcS5YlJGEwnu5tcCdHrOl3XL6dk8UFtQdCmuBNpw/L8afaG3OLK6K0jZanXoTdrHiwskVi5Gq+5ZY9hvgEF4LihXLAY2cUkGHuciQ2XJS0ImnbtGvVz+aLvYaBaUKm/u9P2tRpGchjYPT2I0BGwWp8yfgxPSLabxDOW/JY1vLU8k3oUoN/m10oxja8wis/zMeMMQhV8O/Ln2g6v5c8OTAqo3tb252CFSkcUJ/FVFK5Xv83O/l9u2+4MP892tO7bqmWmu/XdCrfp5ir3ZD7F3MwvqJocd2U20fL7DGTsoQ3YFpQtLSxnZBDo6R7HTWfMj9CISsNcGsAE7zvZgg0G+BWi+fL6M2EXzAF+uwfNVSc6p5DaX8vxbHGlqxMB+7mj5r3Hl3858xDqh3cH2Q5F4+ToTKK8bqiTmMUjyYcQtAlY7Qf5PNz0Taik1hITD7gLhABhDGTG8Ln4HP0Vv4Yd+QgQHSsiPaIzGV3H0slttH1wpqApYYR96dHeeICGO9hVxmor7vFMx2tY/vQi/BCrTSxMNb+r0BXmydvL7Eq1ZUOXg+zsH9B1GMl+PILhJarmlGXfnGM5VhkfRj6cHsZ4tcB+s1KPuPuTuh51jxTk4wk0IXBK6qNzh3Wvh82RKrBEEeLcDFe8BYKuN/ltGedFjw5HFv7ECyIQNMTyL7+OmQaO0ME2TwBoYRTtnpTPhw4PdFT72d7DJn2mXVNBd7g9oKEuawzBNFjrU546878e5OwHcf/3kfi3e88Ue542T2/5P610KEgjxrRAROhA3e+VRSRPAPxhqCsQdlemdhINspZ0oHqCyHQ+YeY3+cukuKrsS8XcCHQt2ELiXG6Ka8GkAQfmemephjMNzh3ot9HO/A2hnVFqCQlJ8rssYmwik+Mr5xFLX3zBu7HdlNp+P8aXgZa0NarQabQeC/5MbbGcamANrULZ0W1eb+PAMXaj8pqpE0TJ1qLxh+mdUzxRt1S2qf69Ln+tW3tj23n1d/xrC3SQ==';const _IH='d67262443d7b062945c4457db485a7ff65baf0bd656bb15c6e9f56a9758699cb';let _src;

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
