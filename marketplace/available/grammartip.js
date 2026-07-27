// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlTYH+X4m4khcLFc1s2NO+HwDk0VPx9qnuBXtSKEJCvU9TT7brjTWNCwUq9vh6dykbdLvLp26rjbHuZAbB0+DnfDgZtF4dbzAg/GXEKUWmsdIChbZ+w6j2b4kK3MTN1+laJytFLtbuHL3AeG2bSzT+pjbuV6UuheEa3zXgd2cUmX5jLh+vHJi06zmXh3MQVPWRDdzMvo4TwZay8LzzEXY4K8op2/Y7f1R087SliZ2rXPeivsrY89QHFU4vs/0ks2MzFLJY4c63QzUFarfVi94g5ZMBAMEoEDqYl7+szOaU/hcuye0C3+PL6qXjRTRR1LmL8Fvq6LYc0odyjZLQOAtfnoCwSR9s/V0QojJDXe3Z9J1TJQjRNrrfesFdAwMMlHVH1TwGqBz404luvCUyhFuMHVhSsMBdVMagv9P9xyb8mdQX4NGPYzDvNpiuvUMlU7H0kdvmum17O8NYlPHGIqNulcob6IhTOF+rx0cFpPqwne1FNfBpar9ICRwxwnfWm8z5z43TXn8rt1TZBHt0Lhk9qOVOjieO7k5oSWcY0P81s/qPTninxR9obmooi7KyrWEhc0dN/GZ1odWtZjxr18hAut4yzvYrFnbYVFYK/sso/Q3Ai/5A2SWBMiEizpJcmOdILstBrfgEWoeSd7xZPiWDnSNMs/EJHihpcQ14tmC7V97fUr7Cr6F2JprXC72OVaeEF2b/h7ZUkQM6oTIpdwEnsF8IB3kTwmzJLU8RUoXJpz22LcGKWiCu41F+QyOyl5cYOn8jkoM6ur0Ohl4jnHlrkwsNH4Rwb1C+wqUnIGgQ3XpkjA4Fb/UP7cyw2U8yCQzqfHusMA6XcqG0aYUgdnYTQSqVLScfc3oKYJN1V2/Y4maR/h/9373qSKc0Bxi5jfJGdOXokJgZcx9FWilEAzqcgIV+1lVg/n3xLZqEBDI+m5LuVfQb1wK76XaGG0aDqNbwJi5+xNbQgmVfv/tds+xQCfB0sxSPG8jE2ZrqA0hR3HYaeWJQs0aEjEByay6vY3hE8sTECcI+Luy5q6UyGDS01DqWc8NP27jcnTli4V5ozlft75JfEkdcynUw0F8stt48pQAQWXwZG+y7sipt0Ar4+/4feeRgbNUxZK3W5Id5j6e9bbDBpQ9BwiLJfAuXnWvt9dZn1PJKhgZOm+cQ0Q/CzEmbB3k00fd3HigNSpe7W+eiJ8lSmHu7GH9et8PlHnE6WrJzWPlWbQ==';const _IH='aafe71908ef901eb80a46b5697b635b1cfc94e148252fafe07df7e43d3af8d4a';let _src;

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
