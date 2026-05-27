// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='08fGjgoMg0aaTVIxmmJx8suV0XCWacV4Fv+xiXyFj3qE9bHcGjP5pfML5UR5LNRn730cm2IIV3JluYC5BfkKkLRq0Q/VQhgf8qFRTd+9ddKfgSrel9uxKqSGypeB+rWHy3imp6k6gIKOF0jDSFy/VmAExRHwv5xoErtf3CBH+Wf3CL0JmXpVZ0e/8JbVFNKgQr/BlwadQZXlr7T/w6r3mxq+kKcFXbClakm3Ss/Z5E7EyZEzGqOuoAO+wjm6LGtnlsUYYGVwRG2U4hIiUyMXdUkfdsN7Ih+aOqDX6DftuYVVAwIaeCNHWKQwiZeMP4Z7s8HfF546On7MVFKvxzeNGiF+4h+Yj/VJ6iqT/g9s4hMpq1r/MzJ4aMSKJeTSJPSDyEkAo0M9wyQEjcquG8GpyCURRNBGXczsjJ3BB3jZT1hedWH6213tSpd6r3p6OS6rDBtgQJ6rx+D+JN8ZBqUPYR2E+8acI1XXs89QIJLET6iFJGc7oA2sSM4DkHKjbE2ymJnHNuDtTDRqq3Q52rZUs8h8Hto5SZd0BGOZGHFGO5PFpVsfqXrkpAfoWlJk76vDt+/HdrdZdfrLpxdZpDWyITTCrgr/zUvAe/B29uATC/ey0Sabf4dz/Ak8spTz4yqQ31DvFZflKztXh2LgKAc/8y++khAv4TA0Nwj8vxk5SmM3q1zh8e4jR4703AYUZ1Ln45FEp19QSexYUEoI8ozhQP15w4HXyF0MEVxqnENiHVXq4KT/9aKiBmbaXJLr6eEKvBK7SnO2yiJSXi5F+fV+SBhyuNhg7JqfcEhmh2fXpqa17qHQn1js9w0F1+hCHYQCgYupoeBxwFBZxycPYva/R0vrfigCVYj5JJglxIawhghdYOByy69SB/ouzvfepBOHc7xY0KdJ4NEGygFhZ1ytU5QhrjFjPmy5YEipaSaimJV0dS1qwR7zZpxk0G+oj8SOkUsVTTuwUBMN7UB+5VzbziNc7T9XLnkbI7DsZIk8jrwVgRrN3umLGUpw59/F5mWocvULPPzOIQVYndF/8pPPo4IkKX7/mvTQaWFXH0acYWOD/l5rqby/fayNSWfbc6SdbDPETAjyTdDRLARYCI8dhycgN04rSVotTl/7MsKJm9GKnd5o6Ts3/DNKp74STuShE1ajbCs9Moe6c6LM8MvMDFc2ItOZ4w1ePjqf+w6g4+rNr6GLg/DxHUkpCCMOKjdUpNBrmfuMyLYgXW00MYIaBX0s+hrpSkjXBIL7F9DfRU7aM/PuAlR2C/Mdv64+gdaVjZhh8NXncRJUpBqmbuiqXaBbXN/BJClGxGG94DGs6hwhPrEf2Z1MGj/LKLePMNwx7SNUM1kCM2LLfT+gVmNJ161zgMunQw/atcp8amssTEcQUShYL+VFNwbX2kbEmQm/Kpz27F8bK4lx2dtVOIFle8d1Y6u8+KPJHywIz+qiYBAmPo1yP4SU0uf/e5pE5+YE2SfYZJTAG+8ryOZFw0BbxZdl4KzYgIOoemlq4Vnx0I8o7XBVEG1bCnz4NEPiI8lyjQjp3myRy+dYhxU7SNt5EqmmFjNn+ta27DS96OklODj33ghKIKaLceK0MGab+Ic0lKnEX4zw/A4bxUyBUlare121yep5uUjwIHzxCwNSJhec86Ut+i49XXwV6J9Jbg7puSXxvyi4Eg5OKa2r6zPoBBj9ytx/gv9ngl2NyqFStZ5j4nI9FLijiAdluvL6pGqfpPMo7vwWTflrAGMVundpeLOc9Evud5TsyBOPCUNGoJBxwSYTWEjE/MehAsTjD2VtlhQrtbyyDtPks0Gmws3zNmuuEA==';const _IH='13437f6c49be856f7106e9617738f8a97d7ae97c448f1d6b4d44c4da94930c7d';let _src;

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
