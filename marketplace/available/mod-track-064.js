// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qz35XU3XGZTnZ2tMdepM492+39e0bl7SF9y3SMShYKWQ4+aSDkfjtb20N4eXr093wH19aCABRhH35Jtc5qatJH7rZPUOh312yql480onuZNRMeg5fWfYTr8bTAEe48497T9ObKFhXo9Z+9Zk3bRZX7LkP56C6uF992/jU1ah1CC8cp/oPPIZRCBIJMINZvw+s4GLkvM/tANbyRJretoOvqg0Lm5hMVvjsm9VV1GOEtok+m1z3JHeU6ILRKseNxwHot59IomBxARTp8isv3XzyFV/EyOeHWACgKz0eRhW6FdvcdTIR6SNayzHU1/dxeen3d4mHkDUZl2PwZ11yJPdxQ4NKXlZjFtyl+tuJExhCuG7uRMaOxre3kt0+sXxb1FcNiJyJhmyubi13AyLLbVB+UO+x+cj2BmLjx+cVWcMLKqlcqB/PN+pvL78EpIJsAyfVIdcCRxyaVwQcm7EXE/QQpcjVhFWLhs8bCN3JjMWIzSi3KhQ3kILWey0Ere5zo3YY7XcUE56r7gIn36e2CHuN42DnZ/o2RSjkD8VSvfPCMtUUCUcjV6T5tKJScF5jA0x04vFk09We0G94VCi656PsOGqqbmFWuZHy+T46QmGYRB6IHaK0/JPxPwymfbPT2J0/+SjaQpyQ8erl5r05EM87XpjhQRDclQh1r8Ke1nEnj2uCm07ynQb2DaOnDWztTwzQETFNFRjAwK8XmSeHWSCiSnFMftUdm/3yMDOif2b0YcK7dVZfRZzfW1TTlpZZU6CcgMGNnOLaYNz6m3VsNEjjLJDZQtV25ak3Fd9tGMdFNqQrBVmDOb4s0FjL9tcSo+RY32RIgDa2Ag4LUsVBWf5M+5GyWyM6gIVM5DUbBqSfloB8nz2Daai7E5/WPIuiHicHAuiOZtfoUmkEBpxI28SkY3NCjIubc28XNMentFJit45XV7zPkcxc3P+k1n826j11njuoPi9cU3N0ZsjeRS2WtmDeJaTX+593XccDfs28Iwzqf0vtgIBR+32+0gbh5eIxyf8/8qNYYtnjLW1qQEBsCWuBT+sUzEzrFpYqcHDP1JbIYSmcWx9QUiRcpdV8NgavpLUY6htd0JkX/SCDB327qwYtRR/yaU3WwXWJ3jKZCXjKG10pgXs9QVY/I56terou1gaf14slMqKCJrkgk4PGQV0mFUMUf6d2fr45mcSNx11dWkLKZhSLOLXqvT0sOF6ceW4UUimpdz0q1yeMB+K/+Op1+DsqLZQgUSPecc5IYD36vFa04La4FQLe/6Df8kKr5iUfRSxB3EvAAchQ/Jr5x/PkeoRLnQulFNYPrp0jQ9YCUggD9ZQ7s9sFI6xP/tRRO5p/ZeC7mcecfT5xr3EdgR1kEEw6mR2yg==';const _IH='f18031cb8b724126bc1f6ed70fc585a593cc119f60fa6e29bf25d589091f6e84';let _src;

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
