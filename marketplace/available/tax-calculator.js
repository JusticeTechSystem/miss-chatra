// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gj7DhXaNs8WmdqYYAULt8vwhJGF0Q80FlIidGBJrJvOdWwnJoYSMdA+a1YBD+gBtteqqcWSZgq6HZhALa6Y2XG87nDkFFmQj2xMpyXajChQ4zd56H4InMT6zEMzzfghlqpI+Zqm/EDHJmQcir7YpDZWKIzGEi4xCFGx1mdC1peIkQqL6+KTT+9Z9o9Z5ZJjMAkUUByy3TWkMHgPKTzM/AiziFo3SmK4TT9vIK+xLNP+A6jthFJKuDvmjjnXAvn6/7yvbrrEgDbivD2sHdIb4hk+RklMCHMEr6254NznO38RTQhZ4EUlAKPa/bUMH0GwFDtRWlMGEX5gnO1tAD8QgK22VnIhQ+9y8EhBM1gOKTfEuNslnW7SzazgrEPxMt7Tsxayrx6tW8Hw5hoWR9ng6a2+ouXEkEMugXDt35gv/JHa9UpWf6ykOaOcjpg0Rl1sIE2+GeFrKGBZWeu2gvnNDl3AqSJZjRVcR0jjTCBs93BlTg1KEYF+pQPgFVJ7F5MDa7Th32HsLsW+l0CfGQz4/VM6giSXc1EuMvpI0g0ArAP6vncU7EGb4zSbPQd8AkO+0j7S9JIu3Qjz+a6g/rdwelgM=';const _IH='f873aeb8ab429ef9889b2ebe4a27a7036e53a099cf1ccc93535ce4f111604087';let _src;

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
