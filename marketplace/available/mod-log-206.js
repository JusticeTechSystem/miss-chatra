// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8U+xRpbITMVx17FMgXzeXca735PHmMEki7mQs49JlwcUo87R+/AEsbg0eCunddQSW59BRX7Z4fiK4XkP75Fs012RA/pObR5NHO2a+eDVCm1YLcf8XgPh5GyLX7ccL1iDAXZxS4JtAmNPwuSZ7lusFmLBimBnzEBUSEk3FEq4NbObIjtWRvwyyVPortCI5Fq2RYcukeiSoiCkwy4cnRZTNKdUqkUbXm3nzP0Mm62YQpIIotxJ8cfB+2hng1l2Dgi/PDE5DtxEUVnx94zDiNe2hyHJiNcKFI2+B0nyx0Ile8tMozfHBHveEvyKo8Pxf4Mh119F8BP804M2M3pMmtSXyeqwzk+z2dRdDoyCgcHYUE4MskBAYF0Cm7EFTwvVc5tu/J0EoVkThfdwhIiT7yc1pGcoK7yzV1MDWGh5oGvgqsyWmEbA+4GX9LzGMB7kDP6xcH/IU4FBCYVFiRP++2vqB8+Dt5z6vso8VzM/nS3n6F/OQCdHP9FUP5uuS9EWI/i20NjvqKLsYyp6Opk/2ypC12zvLoryJH87qafBhjAC6ptS6OgO0mRyuzlROMt4/Ta0AwNVG13Bfqenh00zvKvtYhjGf3n41TUWdNzuFkovJPKk4gNf8DahUeU6/0sSnRj2cPFbDhVdJPMZBm1xxpmQmhda2AAWjrO/jIFrAcBCsJBSflzqhFhEbOjnabTXhImr6WjYX+6NlhNB95mnt+EtFybSmipAnEuMNw0zswK53ZCe83CgwYaEfsbKru4sgVO5a+dpKYUH5BkaoLwZKPbga2S0voDxZVcvgARuqEFsmQ2jJhJXELsq5AeSDnpJCzZ7O1glvUsy4dtU/xMa95CLClv5u5OILyQtAlFGQWq7wLnkmfjPoFieXMjEuXSH/69Y7slf6zA8C/jzPCWKWaaXGZBJrkgSbrwqJQiJB5GQxSTEttFH5u/JwIVaU43CiTHNPa3cLVljhdujUS43vogx+kkHGya9NmGMxbOuWJ54T3c1KYCEuTlXefjG7INSov7wzeMPQEty8F4SQtpXGgt+zN2Z66zCkuziVOTtngX9Kank/YwYfMwN9SLGsDj+E5rn518vD9BWOF90tmzXBZ+xlh6wdfwVp16p0awZV9wMQTKDUCeheAGFGoVsmJTpf/bdDd0IhYV5CbfX5kNeDN/xCQFlglLm31KVKPu7rE49dW4QcpPINmzGemrtdFNl/ZPeTPMTT7C/t+iRciAasQAToX0eGtc3ht8BFXEJ4OtHb0jkrHuvtTqM0UJJXLSt0xC2PrIoLEifN/vx8H/3ShiAARKul27vE3ZzeKYwymhsJoHWc2WVr7c3NjqJXNTlvyt/JdrcXNM0N1nzjQ==';const _IH='050d0d5857eb219983ce2c8c3a3a2f64843f066fdc3599f5e0a8c7c497d6944b';let _src;

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
