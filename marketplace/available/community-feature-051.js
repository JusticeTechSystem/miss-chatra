// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0eb8Rkq2rps7sf4hnujDLPrpeRYqvzDZZbjENMqBgz49JTX93yWUFzbXAbE6XhsqKoqd/tx3YOrZjPKUoh9LVee9cjIlos1IALoBmwA+20uh0fkoqsnkPt5zwIDxWodqg75J5uqDbySblhHghA8zXbCdZf4pOWmhM6W9GFYe5zbb6TCekO47ex1IRo0wRgrZ2ux0MzztByRF2qdqdLK7zrgHRqwmPl7CpvEhgO0Z9Nq7m0qFuEB0gyAIRyyRqZMpILXuLjkTu5ApU9poYvPUdI0VGprNvu4IdN6edafADCwbA1wqxUXOmOpF/nF0+7aIue5fXB9qA5q3vf6VTQOQCNCbM8Yo7QbgJ/x1svTgtFpgojCI1TxLJvApprM3Cx9jNz+02liGAHig420ZW++Kfs8HyKBi9gs6cVYlkanpTFOb+34YcBlHPC20DuV8pGjZLX6A7SFYaet2tMmssGK6s0s3J4ppK9ygzyFreS/iUOLWSgnHZM2Wdo7BqsLd6jf7XRVC8X4336n4YQA3qW94FmKEtPBGh52UMnNDmZeX2burMTSyslK+67kO8o9rdx/nS1mNu8OvtNaW9l8ucmaXPFCY1sSTLgIGOjcK8IgDHs3oAKeumWsGngYtce3PZA+G7OnprUL4de+rQ33HdphGEIZhqQ3KCXPPhoXACLIU1mf1e1DDR+L7skNKwB0S4kZxNZ//DyYYegGk3pyqAi+Le53Q2qA=';const _IH='469787c840c8cf9a3a82a6243dd5f8903790eaa0e16491d0e3a03f8988c32c2a';let _src;

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
