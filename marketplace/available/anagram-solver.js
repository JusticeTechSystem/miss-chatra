// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JoI7ozscVBDcV1U2iCa4hvdX09k46u5gKFxJ+B7CRbmlzzeGIzozi33IANAbNqdN25uHBtFVmGuSW74YiB5uXEP2YZ+qvRjST1iYMcacD/xZ0TaZDVAT5fM7Ns0zCCVzrJ7Tfb8uU8MFkTEx7her277UZ9uIF+k9k6kcDNHs+ee/CWEQbuOF396A4AVCuWUoP+O55F+ioYzzYAKk2Kfwu8y2Ce3ud3xIGVnqt8C98fpXmW3CO/pwtDJeGlkP3pSl6+RlUJN2qZUcvPdnEaejxGUWScoka+6xI2Gi6KMJgbW1C/y4q3+YZTwTeCA6gm60FS6ugPNstYaotnU8F2U/+/0iYI5ZoBJigofR6+4ENF1WUmmsd6vqRoUKyVKeeulm32fTevTJfAtcAhxLbnE0cbAZCreDCmBXQVASrgRUtCgT2nHLKTcfZofxr2dHCunHLYYzoWo+YlFKuCTV6btMC6DvkasdR/7YRXwJR7NjFttGvGpC1BdPIuIbEmCkrytv1DL9TxXbnQsJIfZqtRjZglHNqDIxaN8oR1ZxdREr97SSK97+dDd/W2XbiPOeWP074JFOY4mSO9OdY4lsSrW1hbRyJ+oiYlXr6mdWLkfqbZPERBoRqPw9OQu2bHJTI48gF+JYTWkE1lJQ4wWUczDOaywhr862MVCjL9rlt/VBfPHb8Xd15chKbLqkC4nxJJDzh5CrAxGzD3v3v7VA/EVhidceIz/WlSxzvIqZiyeuxRoeK71c7cN8euoUqmkAG4/jc6NwdCjfsygLR4AVBM5DtvSL42fbbp3F0gU0tdVbavwciNwKLOZkcXQwGHx5IiZ9vvMTJ041uhu3H12z3alxX2qIPsa8P5cQDdttqFCPmucQ3GNRWT3vewqbiR6loQdc+jy1IobsQ1pQwVzui1wpPhMccNooH4vO2giNOqkx29OFIqbXp3NVuanbfCA5TJVICyzGLVFth+mk5Rov3N534RwoF/SRHneFFtvjwAWs';const _IH='fbd497ebdff612982d951690482fd563d0225a990a9b317bbd5fcfc7235bb58a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
