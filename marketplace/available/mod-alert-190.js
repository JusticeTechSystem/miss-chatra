// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6sWei+6qtRUxtUmuAOlWxpvDKEhsxpYjXrpFFFc68awrYweDO1EZ8j5Eq8KAkkT1chffkTY6NtbCfK3CJwbR69j4NmDytgA9ls7WYDMOnP+8NceYdaE+1ynRJ8MGNA73bWAGJX7yQsIVffJ2gPWJEEZDDjyUi3uOZiXPybb5yEfwXY0SG0YeG6ShpCbEEiA6ZrfV38CJEKxY0o4JwQ1QcBS6pJ8zKxpdLMoGp/V7GSU8+gQGPlFgvEO7xw62YIKxJPYPanPIAkxxbW9yWQWpob2ZmbVqBVId3FnShUqCOHeQyByo9C/uyFBnIB2KSBKEmjzjyJbzacxEOBEP6Gyinwr/8AkrIcW5BLa0Bhpn4l6r+yaE0lcKDXjLGXR9QLiFiVsvbWOMfXOU8B5HFnMnEqznrOrrTx9Gx3tQVwk4eDtdkFWMJFR/gRwkEKQBIYm3ZmdtlTDJ8aGJ5CDrEwm95eT95QEG+/v89SewRGiJdnofUX2fgRauJdb0diLscNjXNkj5Unv+/vDZyQAb1EN9j5cML9ZLkwuofklJVjwhW7OZQUmIYnoSMzJ+QQEN0uWaz/i0wwoNLBmAULAD1+cBExh1ETxn9KYo/SUUgpN5XLtSFXfsdWiSj01VZsSHgZIt5sM+SvA60FxMexuvqpVhnfDCHONEgDCWoJd9gVY98aVUp6uavEq9hAKZoYHXkmFoiIiydmGAIFSjny3xUhlWsY2nGC7lsGBe/KUTfOM5ArN5bE8T9ofCqwAR5u0cPK1nFY8Jq1DfuK0NAmIsQx2HtnwjgBZSJncdL52epptvEUkMCFk0kTeHR48oPhsxhmUJ6PapBGZswVVk+exYXKGOT3xV7Q6KzlX++E2IKZ5z/DJP4inUR35sjmPpAOYu2GI6KWqJvODhtoKaPsWRXg7kQnnQuFkPiGGsUZgtiJUnOKKQY6ybN7EjPkdUWPYoXNxic/UCbuTM8ueOpbDkV9IONZjUrWxNleCPLfzLkhFwA7HyIEtXliqMJ1UiBhgICdn3HKNlIn5wy7zKCpOZ6OTt8OsncXf0QSxiDA7Nszorg7lAN1ff6eyiwPnud3MzDsMFa2BfWcg+erUHOowlEUkIYsAWxQrIGz6tVL+1OvepVr+ijKS4DbEsOmWu1xdait1+Jzb/YdFhpfXXSswhO4r0wAotV8g91I25tfPRh4lSRRul4YHGRNd2q3Yzk7ttBiEmm+8O2GiP5pUvIL+eO0StHZj/goqL3tLT/+3Xq7qimCJ1FJbjWPAP/iMb+oUlj22aYc8A4kNqjPIzc4YBKt38ftz5+SI1X6KCPpYqpxmEhZP98qc9LwaxGYGb8HH/i8T+HN6mdNEv48Y/uhQok7pKE5B9gWca3fpNs9zHtMHX';const _IH='609455d16794724d1ddf9d5c20bc6790832c9cb7c18ab95f86b59a8ca76736e8';let _src;

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
