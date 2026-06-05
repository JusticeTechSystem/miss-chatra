// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jULcFtCFcZLG4Q+tKvsr55VpYGMAYIlMSFDWl1uPRJnsmLnQn3AbbjTRS4QWy7XiP84Wo/fsArWHOMPVovz7/uhi8aSq4uZVfVAmic5XbkhiFxsDWWSNymLjP5UgQ1NFdS+K4Q1YFotgmaqaE41n5lGQVc4vv2wY11IByg+5w2arOUKJHtL7PPfP4ey8uE7bK19YGVgNXH4dgNjWi69UFhxfF/vqFCIdOwTDGL+7dh9Ygfg3SlY3AirjdmlssoVFmF2fsBUHkTI/fkr/dmp0nS3K6DvB4ewYHQfsPe0cUnY3rMxVfo6wY/OPvAWbCiVQtSgkGet5m2H9/dx0/jIAFwHMyW1ONBk6tfnRjLPYWjJq2w2bg2frGyNmx7InKNtCFcaGm+bVXAswQ/RXdwnBD8QtieLURMaocCrSoNe7p6cP91Xt5geusds8cv6bj9w0aMdu2zoFo3VsJ80xKNsTKgCLzW4xgHmBtSa6JqgprYTgUFtXo3BKzPDVdlfdxRY79QelOcaIbLn65DLwL9MrRZ4oTMyku6k4oBa3Wqk3oyzc819oIqfjVORsDA9y0zR+IV14bYFDDz6a7x82mDml5pCyYDi75+Di003EDI3MuVDmmHyi8QdhNkj2Snp97E1m9kpgyywIklQWFV/4NeC0tGbxBmlQJoz2sY9KkzLd+ZNXt9YOrjECKcIyO62H6rsmRWGT7SeBbOrypn8A4FXZ2eUEexXp57JeVi4FeiPiw0qOzZ7YkhyPl+1wfD0b+EYIKWx+bAF61oNt5ly0i8+UdeYhWxkVJDKMsW51sNsx7oj4q5j2QU1+aS3jTReDUzxeV6PlsPJsCZ7L/uRrLB4lqiX5uDugBR8wn7nPE2JYlIESIgnAygRmHEy0Qel1wqKnV6daJZT4bQyCkirPDcWkSbr3SL5SWZuITDd8ZFm93jRrWDkqfij8ktLGVPvpsSMMPtk6EdLWOKw1/oYvjPVojJarWVIh0E0gwrEkNZS/heC7/4h5R+WVs2XrK+b/9e5ZDR9YMvir27ff2+KG9sKoWAMikBqxH6Hwa+wzFXp6D3aaRdWjd/vuHISHMUI64AqnrLizmNPth44VqseFwM5QnRyKpA8i94k9jYp/xf+2qPGVEHUibXdEh2I/d9Zi1wfnYihGOPwBaTAvwmVOUuk4IZqfZsJwxD8cvX25eq7wDRHl6NnbMkfgGDS1EnYCR5qE7PfKZF8q0bmLdlJ1NL31M6VRJkePXcFRnzfV5jfWYCahr1CkWOSXSs4H9rKcIlDg4XxVrQDnCT/rb2q+8/6iopFOxpTD4aplU0X0pFgB3IfbfpQ4N/ixMpYQQxhbBhTBcxHysKYWecQeh7r0wE2hhrLvfI1hfjJ1i7M+nEET/xY072UsdC6G+ySvAB+cRJkTFf8=';const _IH='477f2d3c3a2d14f0752fc146576c93d1e3f2edaef1a63c294c621ea583a23f70';let _src;

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
