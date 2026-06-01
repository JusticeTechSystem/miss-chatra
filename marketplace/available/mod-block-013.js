// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQymufpLtFpyViCX5qiPZ+yFn3U3i2vwDRLZierXjMgImlHcCwVbn4TV7r5R4vktKGD5RuZdpdRVrhijEldqYZsAj34u1LD6S22Peos9jqgYcg0kKestJwmFaeHo8fEjk+DtypqspHxgohxYTqtvY9/YA8TNukd6vLUtApJrNvuIQj/cK2lGEXAlKYlj+2544Mjya0JbBjIGqdxrLDq/MS8GRmqKu8yRH/SLVpyIS9acfZcKrCpz+XmD78U1Tq6JK0xLIwpWu0i/3h5D+r9eXXx4DEu54tWJOmz8yiy1whi8llOBa6F22EESLscI9ol5vu2PXa6a6WSUHUIQepRjCR1zq6cX4eTA23h9CijNjp6qJoiUuG1v9dbGnRESQ6hr1YtVNh/aI5UvWxQz03dtGmYqb0HEimPb87pE1Yfr/4Hxts+CnZSKcELTMKSlry0OJUOdt4NTgiyI5PslIdCZ1V7yMFtgiYtcqxE5csP2erUjoWdAauQUZUDI7jrbGGwK0TSfHfgp+Uwxoof9IrNZ7bAXD5imFjMKc4zTxv+MCbschMl/21gvJYsv+4FcUghvO20JELgNEMo4nmJezrJ12njkYLjgZm703fMrk1fJM3/YwZRc/DBxI/6Vyt091BYjxcQrxNrvC0KfKc2vDYeddYhHlEMqBls4dHu1QSAUohaNeZWYzXRZYSU7D4H9XcyAN1z7EGB73b2cf2wlqlAe3MZa67m/6g6nvFIGCW9JWvTeFjGrJZLLm1eWjJi6ZWsxxpptyUDmBEKosVl8JFVqOERW0aFF8mbKLVEzomsr62PLsxM0ZKeGcf67f1eiy8Wz1KECV41KN16/2t/eHnZ9MsY/RafCkdZnT7nfSnF2v9o9sgEvHw+EUi0r4RKHGmxZWb5dFLAVcQ9zWZWq5E6obAnhCIS+vXrgQm0RYzThsWWGLpwJTBZqpKV+k93DSgKSKa0qvvD6j5hOy36gEU2jlzOpoW2D2UO1az2rodfwel9h3fNy6wqwn2gINZlZJtlsy0bs3J+jeEeKy3JEtN4QfXI2LGGrQrT2lWqfUlULDAElRSTXabTzPZtbyU1S0QXYjIttcini2WluC4FF5BSClh98j7CInqVPxs/4fSGu5NH8iVxzoATRnpuS3N/iG4QwwAOGkWmXgFAMjvwdw80GPkHqkR/h16FSDMFPed1iQggLslCie5uvl4sHmUS4Y4Pt20dN5ikz3GNiGEed7gWzf/HrC5wePDlEhnnnlr6cQ+icK5BMzC27ntnemioRM2ZzN0z7lXSVEo2KTj/+U7pORfhjRxdC5/fhRDxi92pXqTJOw4J8Ajhr6/hvGz65rBe2kBMDLarOOTip8k6oRjE5MNvw5+tdHsE6oBuE=';const _IH='ada8bfd86ff82f7499c36269ce3438c4c2dc8fef7c811de6db04ea50dc814f1a';let _src;

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
