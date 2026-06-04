// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nx2V7qfO+D4o2jleHwQCc7hguNHjm7J7Q/qoj6pShNlW51aj3up79ClwbZaT16f6zB4eKx5qeLESias4p6dqOf9Il7IoSJp/bO9HVhHZPL6OrRblH12G3vdH5RPqUdoN5KZ4V38wOBttemKzHg3Mw8Hpt8HD8aGYwC+aLEBx+dWYIHDGG2jqZqWPbBAGg2b4Je0EGH3RfE2T+hzNBwbn4ll0GGad2Q6T2G3HXFscjXtPycIFO4hImJ/tcbo3LhS9F3h9XGCpHFcv+6WvVQ9ItnCFv2+SLr5pXhF2J2gTrKZY2ZDdEqOQBgSpJ62KE/lGOAxrYX9t0XQCi3mY5Of2fNk+ibXiqWAHZOPgMw911vXazgr29h6xUbvn9ugEtcIJQqLg8cu+xevd60i1uD0HRb84WRzlwlf/yQ/xYpv0wHlhA7xK7jKSfnVHTtCyVQvRrUfrLDanguH6BnF+xzqRD89ctrP8zJP+8DWQgEYIIZHXlBd0h0XEDDas2foxB4JZc9R/ZxpjWiuYQA5LO9Ywami/XMPt8dZ5yTqXz7Nrfwlq9DlhTdzkcHhunyqzSk7kDIRbSptRIWcwv7KOlgc7NXqfYBlXvO0EgeOGfcGu2gM+8sW2igi/DiIaNv97VALco+WGpwWD5TtCuA3M2coS5IM5S9VdXSFZ2HVR54NIhdVdVoPTy2leazHiGLF0b/mcEd/xERwXhmUidgh1O3VmMhpV9SX/A6r3JV8VZmYhAdeUj2poKCQoNmTlNltbiDcw9RwIW99p3UvQTwam8WzWdfLgyap4d/H6YaoutoX3/ZqZfsf1sAIq/cOh1y3fUoxD/doUzcOnwSQFz2C3WFAiA8ie6Wj6352t0ze47bM3AYe7TaBGVn/fGjrdP0uAarfNKCLZZqVQdPdWofSMgCv0xuOmDXrTxsEALblvE7L6YgEl8IezNa1sNovHwQSk9dGloe/zjM9S6TH7q96HYU3S0Ucc9PK35XhDKnk+Pn8m/Gs69voFtxj3e5Pw9poITGsOMlrU4a3xWxriUkPIGTesbJRqC8u92Cq/QMZCWI4pg0KonEx6iime6jQmCGFKlgEMfybV4e1bHALfmTnf8iEeJOIi4XbXflIwtZWQdrwBpGsJc6caPsMZFmBtWte4qEvEbrkBn3sNNfe/ZVACXnHIOu5BtNi12PtLxTWLDvvCNFfttUQFyBdIBwqCqSrjW3Zwx9RVpqn/CV2jhcX0YwBrmBfAi9Jazaac+33V3FUUA6W8u5V/eIqnGxoeZpdELQu4gkKiMIHA6686TFQJfJjtQtBiWItocNLb7P+Jw+HPyA4FeR6MmA7kHIPd7+EdPnuchmddnwwqsQ1SkBf2ABCke9S84njvUeXV4krHSVh87NLyZ6s76gfcUg==';const _IH='f8e13d8d6855e413b22030617dcb8f1ddb1cd233eeccd898b1e4bade7daacb47';let _src;

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
