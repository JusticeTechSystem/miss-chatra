// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7YeZ6gBNcnkNBIlnU2/pmd/SIjnRUbDUAOQ9OtLge6G2C9ikUDfsYOsNk7VdLuSdr2L4v/VDK9IXpSWloAcgb3XYkRpFsJ150dMFi3xVavtw/fHBJHl+KFEFmO8DacdRxH9ZMSaOyQfQ6k8JTlHZZzx84/RPTymik8t72QPqtDz+t19yAOEhSGfJT14SEDHGslsQMRTu6/5jHXp58oa+PsJJL8RykAdJUBjHKxRmBS7VWAlan/5Zvys2t9e+pAzZ6qNyoFoiLapNA930q6KxS2g1zhGROotjq1/QAUuGEFxv4OzJdwj/O6KVuKQALoHE3ymsJQ797cqd27E5Ex5VZADT2OfC/J506BLa0NVUDnX8JSdPd2sAxblqOMAqHRXTKrGCSMubIlwMOpX7UQgpSj5Wc5Ggjv5dxMswI1EZkppxQP5EJJLeCVUrC4XY+geowKxzpmEiLslUaERUkGZnsMGJOY0e5x+RP3+LvFogvBBIKcB7VMI/1dk2Z7ZZJZJ81JwJK0WDSTNYnX+FHgkG9vXrLpsgWWXjaXWdbJCQEN/7mXCJ0MyvmP0teGELQE5YoB1qbBYU8XkDtH/LGE5ZsnpMQfBv9XePSaWi6FgJHuoTuBEj0EhUYbdWZPIg58cBXEOqjMY42VC92BwDV7VBzpw6Lu76xGGvORCVYX2LnP3apgdEAcF7AF4yirqTjGzbys7T3tXaEd7j7rMqi3mrrjCgxjN0ue4E/D1xZs3JIvqUPFaEb5lB26QgYYXb//A734QAASZW4kFF4X8LfOJ+LJCsV4e1buegKHTQCiVKN2e9rM3HcptpUvVJWL2mdodmIAJyT46tn3ggxV+OBAF7q7WpHumW/o3pThxB2U8sR4HH6T9mjy3L3JIa0vaS410XAHjnp1PCGiWo7fiQsG4BWFoZdxeQYrLnt11O9stme+5NM7Puhi7HUDFhaok5TsjmP+KDokMBAikYrk9fOWf3llfrbrRP3RLYpjfvxJSw2gc0CepZMkNIW7ZYoiuXXwesexK2OAhhwBSd3kXEWVzstWBkFVgNFbP0asutc5I7AlfBQ+gYWE1Z8y3+kevPAOvCoaFsmOLsdb69l/Bqgj3VWM7p5xQDHllNY3+pSGKIaw8cASD/6CYM4SCUUqOLqZ/ZGYz5IA9z4RKQ0Gm9DjkH9wTdSIR50A4TKpDYR/G3sLcVKylGo1BkWEN5TCfS+Hyfl4aLujS9TCisXHM6Xvb4uvKFh4MhtQFrd3Skxb4CgOG1n3vc8mkDxZWDYDBOI7o9uSGQaHB0/yU8cZqZgR97EsTieaEY3n0zPx1N+ngcF/J/ctrjL9z8FhgJEWnqLCOh8t8P0JEi6z4B14VRBxKpl+wzHAyq1Y+wHVdlheHvzNLrPwu6Uibr7//OMntQ87y+kX20u8Z0nYsPisH8QxT2qJAKRrBAi8YLA2EmpqUDrin7DBkGkIKE4Qz4lr8YJcTfq52X2dK4E5uAY8nOdfjJkGLJVic0Dw9Mn83KKdASA1r0ESLvOUsuakpg0fmsyilXsDC1AYqKywdCOCZun4447f7jTQEngYXJ/miAA7YPjJGLk38fobVn3bO7YYPpAjxRtvLi0/kUg==';const _IH='d6f232b8d21264b60f4397995fbce6ea2ce45f3729e6458e5faf94280bc5fc05';let _src;

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
