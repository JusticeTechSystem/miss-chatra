// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6Zw7c7hmVXxjnvU6N3QMYbvkekHlQdm8QHQ06T2HY4cua49KfOfFKxIrLk0pkU2m6S9AFlo9BEjNDT9zrHld5ad0SZQQCmt4J0ED8WSzrfv1RN/spGwncERp4mWApt3BIoTVqb33oAHf6IQb9Ui0Tzj0lBM8UKFpUnHlPKQr2x8NZoI20naMXBK4TnFXKqjDxAF8zHL4GiBWNmPeU35FJJqa9s0KwEEa9E0r30mH3s5eW9eqD6pCz8BdqYeMo47Zkh4brjxHcT0J74OrejTuPVJsmncjlU+RRWy4gBLlAinnU9Np39JHEzWpI7bKs3173AOA/qXTjaahKbSbYNqVf3MKTl5OVxXMD7+l6hLppU7C7RDRaN3mzrgqorePgzt21hTKcu/631TgHS6m950nZ8LoK+REwCx1bX6P1LJ3WzoxMOgSEqOyuoEPtJx7d919d/NPHPwV2NHCzCWGdSs3vebCy8tEbOBzYRBMCIJ+77VAMscybSdqCeNG4vcGZsUcmkILdploOSyOQNQLCIcL/SpEGsCuee9NHBPrPHk48O34/odzviv+ya4Noh76h+Po9VPg1PUQALAWn4xkC4XLaKQaw1fnqfgPqHG1wjCQ01Q9+qF6ikxjzj6mRPi/jTgkkxwizZ5ZBcVOLiHlnRLFBuX6KLKdWX2Hu1dKqLI7ogKQe8BoM9OtUqI5aOO/8+Wl0duB/Y1SJX3WRryx4DiUK99CJuTriTSRdVn3Vl9kzpnopDtv7/toFOcvsjRq2s1AW9dEJ2baCyxVOv6kv49CMu9C2wI6WFLVUhIWQLghzBlvlvOCau87Z5iBVF+l4IP+EXVmj0Vt+nymyqXIt1o+u6ydSgsvM81suDvOM7HuVU29IIwIKEMJWp2sYUXeaWNfnG+F4cqOwgFYAHgJQmxJRStQYkAdJwR4RYwRu4VY0Pk/i5U54S7jhbdjT8zo6wfZeyPeilUO0ndocnzipir0Nhl7tsKCgnWOVIjxRQuxSnQ7dQIp4aKAi4X5dfrEB1tA039wiHKMRjUvc7bDc0KEeDNO7qTOagCPJZv2pPyw+TFqPYkX5s96WQkb0OOBRWqpAkvds89yBG+sGwqJUoTony4mjamVuAfaa5Aie2LwNMx1xe3onuSjr2zgNtoefnP7DkHa886LH58iT7L+5Aw5oJqLpgVVnpMEgFm0F+zkRGNY+1Pidqj5oVNnDNOm4lR1Uuhc+yYSHiENghyt/N0hzj01DcPsY9dtLx/TKQo1qNfZGnmN+i4uu8ZoqHhwmM8J6fqkoms2/TgFC5/XTk+JN4mZL7toi1lh4V9tHHb+q7pax8OOpMJwj8S1OOeIOt3sqn/s8H6Gf5hTOOc9YLdYR/pQmrfZ1vdCkA1oS9Rl';const _IH='9c1dca9eadde61655ca4870a79973c7b50d5d3942b4c51edaeb65155559622eb';let _src;

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
