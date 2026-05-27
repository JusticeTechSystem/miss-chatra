// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dTVhUAXuorigILYNX+vj/cHbWsK8AcpehHCKMQHEpFLtJmi9zzPrvn7T1d7+wwvwjjbVfS02HLn9kfbhcnvmCOMPtxigaFhgukiuWX/WAPfXFRVE0ck+nGrRu5mHclNYRl39FnXZPUrgYMhEC3kfpqtv/3ce3f8lUX9usmD4a8C2ekeiVTwfkOSl9g3JLX4/u0e8S0h29yYvuwhY6FUOqpKuCMQU9bR3hHto77jYmkc2vaXzdc9YMoT3NPf8tmPGeWm2Ksl8Pfi5s5rmU7uGHKbn5FiWkQbJgIP5Ldg6jNbl7BSyB5JAyqtI0t2n+gMlWUi9/nK2C/AtIZx18Budak0JGN1w6RYGR9luk11F5Lt+B/AchsGzUfckGqDX5zPxRB4HH4NWf9C/TeDmXFQ84ofnDr2Lqail8g74Fdnt1JSDTyPVrpMsVU5ApWY2ifnCgBkDokey4C3vqBexKS13GcFWdtdgzXp7VUato353LTmdKmBiWxC+REM0wx0x+MgFrczQ0rZV5V5FauyYaAp1WfxysGr2ZxYZCu/QoWBqriAAj+6/GGT6qS8dKQGdBkTzbgzCDW4TRV2cjYlqK3VFHk0iYCXXbkMjx8bWaVG1oekGZvPDIMjR8v1CrW4h815U99KokQjsgeUhOScUnLlbcXbaEOS/TjBHSUwAuwTSbf0+K394FXrZy8PBOMrzUJrmBZZ5mxnFqksnaVj8aqFEjp9Z5FuZZ28/q1POEWBRtPp6JN5kcwq6C7HVyzNK+gh8+V5J2H2gAdeV8XE977S2sWGqMGKlMD9dU67wfki91qRIoOy2zkp+fVTkT/cpRym+0NFiYUJnkW9IN73RYZAlvLEL45rJQsPlz/V+5b26a8MtK15oBBy+HBiTujXjTPkAY479qisJVl+gjZVUbhUc9//89aqiYi8P48QIjhZZ044qGpZB7zbu6kTFICApJdV+YLDvZQoJU6LxcDIyainAXnsc4bY4v49bmr/lrYO0xdMwQM2+gAz+Ty11g6wT7R+d+uMxkMC6d4iCYNTAUc9T0uxtD2wLm7wJQv78JXxZVav0OX/sDhdhnEPUxVuLGg+MOgPUkselXSANhU549amhAxEDpEHY0K7b9h9IfwBtHPzjkakWBvJeAi60GFEEzShz6KL9bm9YEQRsp80Kv8i9CrdP0qxUAc8pEZw5qJ2DpekwakJJMHFqN7L5qam+ScAFHEQsNLT/X8ki1oPw7Jtzv0mYQVtJJ9YqOoZWTzScCXr/Cu+6zIp5PQHZclSSHhEL8PqRzT5hSA/GAczILNrg/6Vr+LXw+D9iz79+y04b/AMN2+8g6vmnrfdiRe01EvVdu4nfcoLR1J6a7yhnK3k06ju9p39ZRcJmCbu2sf5t';const _IH='b7e4d39afbc0ee816819b1c8a6e03ec9d691379c3d810e142cda36b869b183a9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
