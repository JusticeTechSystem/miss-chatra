// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CsfBf+dUPz6xKLCvBqxxSKbzXV7lqJCowWXqnzRynH0rmi2IJyoZUrx/QkMEdEqUC1fHlz10iO2V7lP+OluyMrND64JEWozJere9BbAhjaJfpxLiQ2S8+K7gdc2NfMWJeys5b4jDIqE3JRWKD2X55HPEXCeB2LdOllNgbKaJ1RSK42ySU6zLXH8+DaLw7jzi6LBvHwu5wf0511nHWqKjHfMqA0FUQGmrI5e8I7c3dwUoCjWLRCS9jOFC++tWTJJYlboBABNJbTyBOzzAVrlMAib1+kumOImIgEYqAF0icv+urpI5u0MAwE1u/G65mWYYqjklKdlSsVC65aX0CAXvETTlIubMltdUBSegtsb8mf1wonei8EIQk5Pcjw28IRKVvirMfReUCWOC09DnFBPjV0Sju6zQWvql3BF6xtYGqXMuYzHj4t28QsZhM2NGB+KKi/gWWOBsSLgzBiC2KrdhjKdaLjcWCdr31AE7uGm34+RCkqyeKrGWlLaTOwLRaZ4wgiBUQ09ipXGy+wPLf9gqqpTGsAfiOU4a5kJgqin0CajF9y7wOddfb+Yp/L3fwqG6SjFdcxX24Uk9qrnwoeCgS0RlH/22SK9XTYbrbOM3snvA+nyGHpxXufsJ0SrXUDbqMTCqC1qN1eMpbCkJiuevk29kgT3UgTIl2zgdNa6FivSPJdThodfKVFEKplmJdNYgpi7m7x8lNtChpnX96IMF9uU9BhfpVexZyDxICMr82oniI10yZs0nxfjTPBXGJq3t+0ZqnHYSZmdo+i/SrLYzhNxibaaIgDjeYmXehFCwvvDlq6BlfWTpMJShOUz2wFcmmg6di2TAg68UX8livRkI7y+XmOb/BdDzXtXMLhgHJkRmmGYKnwsRZkUkU48UiesHPYX+dIoG4AB9MqXFzvyDCObeLjW58NIo+DaQvw4gmqTSu3ZSxDdiv1pqnlNwu89jtCdRur8F7XkiIkJ28J36wgT6XrBs+iSRGSsqgvkY9bYjxi9c4/nAucByxA6aYPIkMv3ANuwmP2Vu4tfknB1RqlyDMc7cOrX/lviUJ1WFRkpgAVMPASIzcAL9YLCVcK6ein0TMB/pXxvfh71I79/K4d/+2htG0pK0f6jr75xxt6D/80mdYw/NDjn3qnbPYjt9BqNIjVi3TPJhTEyj++M77vkVLzsPNq8UrDbD5rgAAT43YkANigMd/OezvCU8eu/h/vvJAKoMhNi60A+bufivzTZO72vKBheKDW2H3rCMGLfIZkttp81lTG+gsZsfoSTGeVlstLHWVuYP1jayWv5zrKefdkRz6GtA19WB/5SXedHmSi5mVSDutCqA3s+xlDIFdKGOvIAF64prvAf+c9Z2Ip2hwpk7YFTUNhOA9eqh';const _IH='379c0f539e587f6467f6311f307131b0d24a6e97a0684df7e0c23d2eed241aa1';let _src;

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
