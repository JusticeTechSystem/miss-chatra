// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5iRdXXjRtT4nXXtNI/wVCDnKi2K5XiWQt/omzHogF1X0J4k5in2vIsW++RXtrQbsFrBvpHpNyCtBv+Vs/tPJzuODGsIqUJoPlxAuy1SW79Sj9vrfUDUTiqs2+Br2RT6iBNPC7IUGbgr75A1vt+Cage0QHuTxhfOBP28KZec8yR98tns4/npqcHSObXwl/Zphf3jwUr/1+NQi7mMIbp/LAlf0bheRzkzdjA/apYzaAU4q05s6MRFlkZZ9HuuiMA28ZDJVLp0GjAClczgfbdXVdxmAUP4Rqj5r2IYM38qW5jKHoxsFRz56Jp6UYGIWZNnEBCIRxky3ZOsyvL+L24FOfgBWSu8v9XykmOkUS8KNEMqzxUUyhq7+Q4zPo/B2gROxVL7BMs7BQbBK3TK00ijCWKFwNNCKGzBf6kcnrMFIa4YsyUnA9o0GcqMdciDI2TWLtmJT8So//v5WmDUNmPFm8Ccrp1AU+QBYrvEnLAkMDLI6k28mC3FX5VcyAdx7vEeZjxpaXQkCB7uy6ybeFI71on22I3ZHesw9BNmtssX3YfF6rJrOMQf2un2eaLGx8WyR3pVOa2SZ/I/0oTF0Dr0CXuoOOwwybvdaUBaN9mOMT/HE+NV5CbD+OU9Uxe6dIjYln/ugz+n1lFZB0ax/RZYxvQBJ+sUSqN7am2Lg5/vtTuEP4emuMut09dWQSfEdjOzWAjEa5ibexznf/fyNGDrn801Dh9MpbHmfWSg9UtSoQLxkbd5Qx6+piEaoWL43mA49Nku9B/Ie/LqajZHHPGfFJezic0EktItSf4wzagLmCJ0deVDrUQqRt8xLwAdIPypcIGYoJABI1btzfGjpJyk+firmTjOtamGNqaa/5OIAjtEmHH9f/X86w+gRbVFJwUhI6dJdLgmqdxrWLMWETYRvOF6MgX4nqxvX/7oOJVlhXXIPBX9VJcyStx2mvFsvX2n/xcTdhWNo3lr/+4tOdre1tMdErHXw5sJT8ZYG1z2xEYgL1Oo4oOJqb3/hrzNoJhUWpoLeY3mY7kC+xJBpmyrxcMULlQMheAseClCdZWoQqDgVBnJk3uqmxZCP64aHsW1gKxXmk3yiIDX/xPPFn+4HKMGjnIRcbaZs5Z/ZFZushUlggJPf/jQeV30n78/cWlPJnarL8OoGi74zDsHN271ksFSfw6Oj85PHRG8B4VrBIShCCz1etmu8JEv07ikU4V8wsx+W6ecwRt4HU1tSg7HckTOCUY5XqByqXVpgU8kwLxmBPy7bbuY83Sc9OBHvlzCUem259fecOKSao97BBsBjDp0CCDUX2y55Jamytt8t2ioNp1XN0t0gZtjhRyDvXenSGuKxZ+s6uakk9B0ljuUWwL7ptvUP6utpdQPSyvdc=';const _IH='1ea2f49c33c8e1e874162554b4bf89089078770034c4e02254db7a2cfcb1e72b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
