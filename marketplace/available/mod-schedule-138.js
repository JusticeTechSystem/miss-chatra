// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I1W5TtIW/eovBmIHZ6RsB7BpEmpGxcTcsv9SHPQv+xAyLteS9xdDIcnOicw9C3taWbEI1Rtqun4/bR0BCU1+7gQEOhuxjZEKVwuiuHtZk+LSOf30d754Fb81N3p1IvLpu4gKgwWjS5j8ovjMKWHEaFpZs3GX1qIkV+0JVJNRRTU22sFxUr5LDTEf2GhX2OQyG6tle0VlsDdvkYBMDKPFXsrz4v0LhPgiK0Mi+K44RXgcLXFo0vmb+tZqMr7AquSADRWUU5vAlvS9KVxLo9YLMo1/rkC+RByVr7M4GK5mP/vttu3XU21mgE47FPs2FJJmjUmHh9NhZlTBB+B/5AXpgtdoeG9ffPgVJInxVYY87c49cfZH5nAdIFU+XUllJEaXA7/dRSbES3rKouNV/utr++EwcKXCcBA8+jay4TmpqFdUXH4WO7hQCQoWRmxN3XWrP5Cgo98vWZrqcTaC5egVnVGUltEyKU7ghthylcURGH7Pqmf8pj5rDV9bg0r/91DP5KTQJ6OQLvGkDd235VRNUips9xHQVM0W5l1Ay4lkug+Nddm/pgYl1S3i2JBguoQ68NQ46U9FwhA9MbZDNnfE6/03+3eJS47hlW//hlusCfhYZXkVm7liB6IyAxbzS2AF0wCc8LsHR20XCxaeHblzC7/Awv1lHjZXo2fh1oRhra2GxdpGX/KmOA2kuitG+Thc69oEP1VkcJE1Y1TnjdpyKg3csihUl7ykzktML9ygk6ZsttSOh+O3s4TgQcuYdp3e2PucLOmfHThO/qKuoWywQlrW52xwcwTy02bVJoycw6sGG7KdUNflR/5xnhiSXei5bNtzkK/a6qeNmgJTSJogwuQUTAEmA/NUPv8DJbIvRfvZKS6LM2xl+Xt+oqSOCjU/YMLUfjh1dq+OqvUD9JdV4Roy7eP2MsFGBygJeJ7CSl/W0vioS7jG4nGf1VHiqNBQIivIMEKPkJh4PrFWuH8Md9cunlpBexw+nZKMKYBxB6B0aLG5RaUv74kSGygB/9n01s1q/SwFDXg7W/hiHtOgGwxQZCnTwPIgdo9JlOwrL5EIgjy2McLvLUU5KNngYcsZKjwxtfbDGwfChZv/zQn0Mjx4Gqx2EGOYXwArnpmfb22yt1SlLgxKdqcRzcWOm1S41+hDVrKXNNlpXSd3DtMzGDpV51zeWmMHGCAoNhcRuHbEXze3yM9hABtajeBZG9AlmqAQPHoew5LKL7GJ3nirqQSXi0HQ3JBFuD+sbH0PlI3/L/BKe4H01so+eErygSF9ttzADZDH7rPJgwqMITVI5jP7oZk8W3Khp2Kc+9hkzdcUMfwGKmSZ+h8tqjKSadKSzj22bYzNfgNKnoigDXNDeuDEg1PVOxJg8myLcJGcngfdzs4a+l+xb4uIJgT7JwXHBGT9NnYFGUO5e6Cn';const _IH='c6d03e7d5cc03f988db57aad3218fef41f5ae2f48b2745d913f357dbd68f173f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
