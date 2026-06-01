// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5ry0pnJb5u3sOXtXaNEX4sqetm6Nc90/XrPx95KtxXPdwM8k8YT+0v2HMlvNqojU0pszrB0vYNaR1ky2tjwSTB6gB/ySqP6zXUA2AEF3aXKaAQtK4q4liJxT4j0tb1eDM4vqDDtoOVTUpJgjdl7uiZ6ZhNsx7oDaxo6c+TYxJv5wfqvWw6oEGI+kcmqYl3Oy6Qg2FU0XfGXh3OcLgdlv8x7IxDQ5mR+LLLM032m+SvX7zyD0g3krH3tenOF+YGbcjwQ7ei406Qseak4EGq249o6Ssaw21XH3PBElIOlxvx2JLIsK9n7f5Udj/P0hGh3qe15Y5ri0cPUTai7AYqlCRAokS8X7DNkhjwGUQwtEdX54HTJBc4sZBmofrJTHTYMbRAYfgU3YLH/m2l60pAxgrwEIFOpxz/+xt98zKeh1ZMCg7QuCiYiYz1Vgwdb5w7NGQkITIu6b+rOVXYMQfKd6P5qu9DyLWsTndh62/Npz3q4RbgAmFkX9aRoipNpJdA8JnqvGS9TjSLJRavqArKZeT8n4y8B/QmWOamjvVYfXsdw601rfp1stk7jOYL6pnT0Zfw0BN4tCqjX/w8U3G5aTmlN9GDi5SqDuo1dZN0rMwwOoH5eoG8KlmjDlAAhATdLIZKHBu5gOTebVN9dUK52s9FLWYkKDtu/OjhpUCW5JEsuGJ1lPJUCnqUg8PFyy+2zDU6gJLXjpVEASQPALPdIHuE+xNNigPiAFXaAqQdrU16GLgfs6tlq';const _IH='213f587482dfab3e8ddbf1d59c278f2798aa8dbc2ed9a593a577b4b28605405e';let _src;

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
