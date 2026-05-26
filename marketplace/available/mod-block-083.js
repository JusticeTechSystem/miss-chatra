// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+ecXVG8sHkGx4bCj2rXeyraqt1fEwHOzU5O/GAk7tLBimC6h1v8FPUZXHuiltB9oMPW1uhVPFW6D0QfZjYThlO2gO4G+aDdTy5Wjpcjs07rI5vH4TjudhRNX54GdKtCyU5VqFn7tpYTtQ0+2LT1CDD4k3qRiKKkUGj5CDkZdZI6uO1FLOWGuiCySv579xlruExq55VfdNLo7hcPfI0z11jZilhsgu2/J5ysrnnHTtS8q0WcSBDvIz4dJQTIl4Zizn29pRQsUv2abUXtjkQu6TKBpWgiV0i1fAR9R9ZW7ZpqHVI05U6b6PNLQWEPfF6Jfwt/Hv3deKYACQ6TFKNaKRQsREN7bffEGmo+dr4VD+zrjjeAhjPxCQpkM6PcJMdh/KTeTQycQfiYrR5785P9xuB4Y+f0M2ISxCnHHJRa/e1naYiN3oO52d8aWLiKMkzHFCY++chZTfCrCHXwTIbFjKeTWf5QmF9+CZk1v4lTmeGfvGDqsuirLAtCTOKd8lIvGeD3EZvcbSN1OAyjkFkfA9u6p9Z5E85k383vbZPXUVQCrqLO0ZxrT1Kks8eC+4bNK98QeGV4PHvQ4h4vrENQQLnu+EUo4TUlZqb0jm6PDO8fMkBQVO1UtHxemDcNkFxRvYcm2ocp8gTOCBzkqJGXQTnU+dupZL4iYKTi1jYpW+VMAC3EEx19E5pCFxH15+kIFLpuxTqKSLggU5bJ1PxqBGf8zX3HK8bnKzfszMfFcqSmu2JJ6eZnkstCNiQjjrpwS88MTEdhm8q1VUB+365Nnpmf3XsrAANjr37NoH5K7pIiURX5GLDDabvqQIzFW9HSc9lI+eNK9/l5QyjHHIhpVchV/XvsIT+xTJohD4geuOD+2KWAxAbOCnPWpe9h6lf08XYI7J753SJ00OPFiFHUK+lfW4nwO38r9LTaxGkVGWoRrUWf1l3rOtvcGlZHVOjVp6RvslAu4m5zeq9mf9obEPaeI1gxBM8u/BoRNFFlG3Q8wcq7mgqW5mJjSgORQLb1aGnt6LDta+8Y0YTXM8oSKjvq4ZRvbM/r/Ik+YUnz8SpubO3uoxH3f51l6zk2I+opNNLnZeKAikGRDOnPQ97PgwDkBmBlS2hF7/jQo3UkXslVkePf8d+cQDNczl5tNr+BvxKl4sUqHsB88xd6uXIkN+y2glJWsMUPo8Tz94Pq/ySyx9bdA1mM8qUcO1AVo5SHZnKcgtFi0pkBc9qLU0XeLiOCTtoJmZFm9MN0nCe0uM2ZwL7GKVetxH31RyC3NxP33kXKLNbzchHnESbZNukI/Twa0WvblUMpX+nyAo7UNVeaRSMNzE+FzIksrbsqIhaHcfSjGpJTqRM4oVnS8DjCmLEhETy5dnYR3lQ==';const _IH='f57b371576527db45c1f5776d56dc70a7395fd802fcc810f0a06d16db34c421a';let _src;

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
