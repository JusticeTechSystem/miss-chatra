// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nndb6+1Q597XKf7X9VtpuR525OtjatPyrQWxbkXTmZEuIbtdWoF2t47NcF1cihZMnKblmJZODZr9nJ3JmFEI1j068m29YqH2icfFHVQxeIDliHgkQeitYOqkQD3jqo2jnmtKCuk2M50WQNMVKOwHFn6MZKj0Nvv7jJAigrR0n6Jd4eF4XX7voMBBOCExqcGTMOVF4N1SbWRsxs1GqojDMAmpRw6SX9YO2PFWqree+U1HTBMCGTWRtEutsJYxWAi1AJ9rIZ0/fLUnJ1q3MATy19VQW9sgCLrTm1Q6lFyjZf1f83ZZ3qiOZhmkQqD7SPL0FaB5nMu8oF9LcJtnxZTdQhaAFMHZjSPe8ZLW33VJk+wZ0uvxuTLX6+yKjM2oQn3sAONOXAjlqeYuPwRpGCKBWvaxHX9mCjtEdgT9rYfMdYBXZyOARogZMOfF9bpTSx+GTGqq7SkkQb0F2VBUT02D9PpTHTWDryOXjYCm8Y4/axIacSZMDLePLBd3vLgCJOEinfzhBr0w0dtzffFxhEG8vSKYdJ0MyBhRHUgRXEOLDxVcOB4pGWZa2MIC9br09xPdPwkkNkIC5p20AdiHvsI7E34Mf/4/7kPE94LNcQzUg13eZFl2vloKFeWoTLJhU3D90g++JMZZgvoJClpgDYwoOPDtMGXHLY/4IeQo2x3Qy1uC2ZTMM5imY4rDs4J9i2HmACjwccgXFSiFL0NBure+xTkusRGwKXgb3Kz9x8Yg1gOYW+BDpSsdpHM4AdXzjvqGD16sayN4QWVPW4gg+3L5JYvSxZG6bBTbjSuOKS0MMwGIs6IROVD0FNXnsrlffq0wXVJIyHJSmeEjhJbYVcoW8mOslp/IlTaTCNp001QmPAj9K19hBV4RbPTv5MaOf8FUD8fFmQTl+ytaCI5CqQxkN0xJkFxy+EVdyBWcHbOIo9Grt/dCCcsruBhXYxDfSsCCpYgHk8QOk73l6V+cbpg4JN9CgBM2rIVN0Jee7598xziLIZzKLUC1G/IA3A20D3SHO5zPGw5j5oleNC1vmzDr3YV822cfLRO51mwS/g9fIA8AQoMBNhx0vTKFCXkW5r1mKSeAWDXJFwJaGfqvVGhFduJ5BXucsI+FZEEgYhi8KInFmeASdhzgjt3L1Q4IwRZ7sROH79wV8+4w5I7YG6ne7rnklSh9ict7P3Ur1qPDyp1JE8tNUN/jS8Zgpbo/UsxD5EU65nuUx1OfAN77gmuoSkWyAR3n76cPpofP60ARMQkc+ssodYHOFylm08hhPH0bNkf4ZmnAk2fuc5ltOq2syVa3DGYEH8tzcWPIMbpoTZrApzyIHM8J9WgfUQDz3Rmp3B9RDyjM/Oqjjq05GEe1EczBA2ZVmJfB49SUxnJ8FVnRp/+tr/1UVCpOQCMhoJZOZPOtX+xlZCKksUu9DRvxXlyAxVoqslRX+70qyFxNcQXezW7ewFlkYLwsgYjwSUa/72klVb7VLJ4MQUfMCooU1KrdR/x7wgQxwbKbuP3heOoibZVu1fUNn7Bqodu5K0ZJVNrUhBIX4izFkP1s7HPLORFQ+0E2Xg2SOcHtD9qpnUx7MxV02I2NMVUdIJdnBj3QS3y/s72ROXF13ASjjmKApQen3+PRsKuVMy4UPgYE';const _IH='b4b0e3dc60d7dcfeb1315ec17363da7d15b4239129aaef92489480858a7a36a4';let _src;

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
