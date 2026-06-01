// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5xzCh4dnKP/K89bRKyuExrEfaZuHWmuOFRpNEkf0AQRWYupKtQ62LX1/4RPOw4j64JJnf5P5r+39mDgcSjwP/62msLWhWWiexlE1RSsPiIIO8hCPnXPdp0jM5HjfYVHSq6NmBW6FJfj8AAr/6aBBLghT4vmo/qRjMS8YXGxTKD9L/+ZvaIM57gtDBSNbGbrNaK7jFaWiXLU3DdyT1BeKGB8onDrFfHP1s/2ATDjqFuWigWGHrgpwIPNVkRmvd+rTVXmOTpovHJPOdFwHeWHXfUeeWMCU1He4ynXUlojc56yf+1zz+2mfOiw6rwaLmXNSGX6gl/ZRF1QUzQRr5uqgLlM5vrhBLiuZJ7d7ZoXoqPtXfV88ngXFWcUIdxvnaOf7vCT6RqyAzxHHOXKyo5RxOYCSPLa8jBCVF4e5XlhLvwZ5jeuNmX2/pJp7+kjouK6xGC5Sn2b45ldSNYhRVwV+D9ze8nq1ersjkwcfaXldJSZAfjzDHoDf5Q3jfdcPBbd7T4sKLpwJgenK0EUn0csJgIzyZZyt3fG9atuWv8VUrwlXZRSRSoxQBLhqVCpBmwkoecXU2s00tTHN8MW61q31KDlm/x8jdOimf8hXnt1/UcxncUwAvvwawwcwrA9wGjbOb7Ii9VpBLmgKQsgs2fR7vr8ilXHQZ9j8D2oFKCg9YkpxB2yM8KI4e5/7gKurp7IfPpD8KpzBd10nktIJ4fgJv3MDMCEV45WqURWvHAKzftYto3EcFFARiLi85jNT8ocdgKuPRE6RvVQIX5P4xvAf+y3B96C+GlXVZRQPJhghxY6l+xqe2PG7YvIrZp4PwrD77gykfWTtqinYQGbhDfTrDgDgOP+/MDKp+lGxmS32KvJJjGs8DTD3Nc0+3St4mainGrEpVhrOnNxApyDTAiItod17ny0soYX3ZXyc6lC67ayo6bQkvVK13dENBgBQk2KnYGTIdM2OOXI8VYShdkUR30fq/xcY+vaYlHWukxv4poy/n8rJAG3ipGZJBcOcIELA3LVf8q4oKzbsnHT4EtMpjLRixbIBWq7jFDXK37oJngz5rRp3ydM/ZYqogFFe4MGpNq0mUVY+Bd8wNF0i0vgj8mtAB5kKvZooiXom9eru8LpggFtI54NguA5kOVaKoVAtBTfECjMWwWKg2bYNQniaAQLN20kFaFDMMJFy7f/1+p7VCLnucRbFzEIHKd76fvm2lK6a4ty1q9y2XCEpP4HQ7I3Q53RQfyrB87gK5Nxcvw+H6P3BLLWaXGRAyJpcUHylIpdIITJ8VD1xr4+dNTAjJRcqq5hgG8L+8UFALnyXk9e35p37/O8Q5fcr0kjkBsj7C1lb980Mta9Y4WKjVT9z/sh0oyTjQKkRRvw/WlDJjYrSuHHI67ElWy4tC6odzNi/WMX';const _IH='abdbd32afcbf02dd80e6e43c0725b2b27a758364bbc9eb2d0aa2529cdf534188';let _src;

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
