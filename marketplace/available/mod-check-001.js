// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uV7a0mnVdrsgn936Q2h51zkpJpbhbCK6vYtPciUdKrQCYtsTMeG5MLZx5qvS9uh+O8jjvQa9KKZSnEeUzxvBJARkVIpQra+hpszp5hQOy28oWLESPnr2A26BRckLY9iD61E06M7rucv6KMVskeDUBWaJPPFoodriZMG6okMl2v1mU/LvQxbO4Ow9/uF3vtdTDeuvpE7yWqeTMOu+cPyFHbXZOidiPusIvwA0s1Ja7W6AUe++QG+wwnYLmJRy4YSLJMTTPsJXxAZ4JBFdNEl/WnSAPB0igYqLp8u7YgsdkSyXcXAMQ7YFsc0RhPxgdaX6gvfhs+DqA6O9HTirV0BvjhjQYRLfXI2dvbe557hn/n9UCBDtINI5M/+gp2ZOEJwxyXZFwQpI495WXmRp4Gf3NsaJw5rdd/kSWUzi1yw2wu08mwJajR0MExGdIeqBN8UXT17tzhH1Sb7CcmXVTbm1fYzbnA0fP2TWDZ2qhNwEBszEXySsnC6hddqc/kj+hS7ZcV5KKA139yatKx7mj79Rr9TD8vm+jGSxIgABf/8bb5+vX+6tohwToU7knkQdZe4DZot2roRBtgWftBTBTakeWHeI8H4NJoZ6IU/7RmWCm9hS5DyzINxhFpAXcexIYWWkvIKtoi1k7JWNKcQEqFrLT1Br6xBNaqYy8vdygVqRXauIU1wx8hcloPaxQH68LOUC6WUffilphjnHOzm/gUBYjFnI/MkQbBgQbV3FHF9RwZNwJE+A1L7W2IpSOh+4n3ftSCbtR+9BycgY0SOMmQTdua6mX1fxcJRdh0EDSCXEJWNEI9ztqwe3zGp9e012AcHuu6IVJ27bKgxBHe+7K/gEHdOvB6dW1JuiPZ3+7Jz4hE8dF4DcLchZ+LjueyonUKCKgwwN3CaS+EP0x9/X1iID0XnXp0vRxXr+02oXuB8Mj/Zzc4VsrtBXXVmC9sklT2pcfT9v0JZVSZhWAqzOD2FQrRD/ptaVMyCy98mSa3y/iX8OVhtI2USVCMLDoGBlWrZSd4WlfLZgsc0jRScjHsvNuopf9Kv34Rdpow/XlqeiwKM8FdNxTt+jWb8czA0Bf6Bs1aS/Sylby/oavMY97C4Umdw/z20e0EvYxrqaeibV8GKfXytnlAbMZBcPEl5vaPgNG1JvRvl8QA4Vs2oVaaX0waFJP9nx2egn3TXi+BBxH6KjJ82iESbsEQ6PUMv49vAH4ETAvF7K2AO18ygC2g5v5+aFTvqEn1AZyPY6UqyeC5Q1SlwOUg3jGPEPH+/VX7TDXEJmgx+VhJ1qKw/Xtk675VuJRFPWbXt54vmUxS8nP8iAiWio6KBzsdkIttGQnwSgLvOVUTDsXNnoxYvmIoe/hQaf3Ig=';const _IH='b2c4598d5275247303791b4d6cab5914ff2277acc97b83e83ca8bcc650f0518a';let _src;

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
