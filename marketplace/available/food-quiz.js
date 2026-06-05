// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZRDdkArTNhnxoEAzzGVNNtelPBchMZdUJQoLbFteN/V4werLgFkD52+fDIzHQc/0k0yaU06UbdtaD98AxYO4909pE5/6ItU/iLPoNRuFObcP8rKRATLtCE6Cs5uL4HJzVEeITqxilxEqVFpTPJKzL43LkbaFuNpALg/hZE4+ihQrn+gM9CApQAyqp7JrB6GeKKtGUpm4gjliHRDC3UrQuXCAqE6YVNyb8EiJFLIMXkuVav44vOMCaIIrCew4/CNyNlJiW+ahchIfM0QNfFlnDkwcLefVQy60804YVu94Nn4ZCexzF323N1MRAqJBteDMtsqz/3dy+Jge/W/jmhG1P8kOx8Y60AWUcfZaohY2q46Oy0BawPJV+ATt4qYzkoAFvsgQR8U+XaFfF+ExzPaTyBkZfhi1q2sUky3wAyVCU0nIt1UpPQva/HKdXGi1j6b5uvqzK65l74cbSGydX2jiwYiLw6Y7gzQsSneNHgEkN3Z8T3b99dkQ0tF6dhqNuNh2Rt3B0sxUSLN83gmLp5LpvF2sxfevhACJoEz3Bb6/1oSSjeN9vklR4fbv9s9wevRgNpxYy5TV75htgt2OY4g5jKBjoxPCRriAj5v8q8DCl+PAiojZ4Bbj1oztikCAZ8gZnpP9JumR4AB2qoX8ZGJdr3bnvz8wX1t4LviMxAyOhOfcQ/yF+pn6mHGfhArP04RMtalCoKcFR85zqEBrBzFZuCjU1hSvqOPhYRl0gtR5CPdMtGybPvbdzOUUQJMvzvXoJwb5aOS2NAKSe+YpekZUVPtLi4mGlhA8hV9ALLQNyIjgfQ9BvkqcllsCcB6brl8yvWRxOK7eC8QJEIzjVtmW1DTUzL0veonnH3l1VvnVYzTuGQ8FaktqCH+SsqvwHSmSjrM7HKeWalDyYfyp30hR8GeGfzBm82bGnslsFODAPcaQ2sYsOk60nls8mSbaSYRkXWX9thTHxceO4a/J3SofeJZCpJbsoitcfd7mG+/XIwt1Fu7qvYZ3dMqKZyObGvhDQSTfn5I3wLqwjk68y7zAZHzs/NGCwmZbZQ6EoStbxbIOSo4X8j9GNcxefbOYyIy1yLGlEgBDc6LIPigkSNsrJb7+hnYdBFLD2IHZ1f9KDMNPTpgtC3sQZHkrKeCFO+a8NHeONQYqtBLvOi2JganucjT7vX5PsGQ7RU7fOn/+pRCCAIIAc2EDW4w9cMW1yfR/ul80RC1T+AnVGKR6NcXEsPX5DtR2/IGK52bwkVI/BZr8AgRgTyTZ3SWBh9wuUMxy8tAY+7Oqu1nPXLJIqhLRUsKjqw8kJvaMECjjpRgHBnOhjaSUiApk9cdfbRTRUnIbagbCuUt1TfUShwIsYhM2xtzlNg843jhfd3luCohM5lQP9/GUB/+tQ05aTxjFiVvonKvtDBxVIrzC/YDm9yFcpGNrf3cOCTup7vfyRqhgedPfcVkz9lP4Xw==';const _IH='415f90e9fad6f5b3b662be2f69252a7c6d25c9cd7b25d72598c85d83fefec0ba';let _src;

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
