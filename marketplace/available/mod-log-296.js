// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQdi2hkJpYpzuYfKLu0T7w5HoPYJ+/GeF4T+FZ3MB1kbFFc9/eYE8QcJ/rpyUe7iBPwEnJaC/Wsu8qapSL8ZWAs6KSSkHiW4oQJoD7W0cxaJzA9S6ZtLdNBpb0ufP2vkV5xk5+j69uyI/UMIILj2TgzVHGz/T8Pk3uQjJdRVxssHXaws+eYSfdog/THAWgB/ncspFtmQh694SiGYQxvTe84PBxm2y7r91hRfLUUxIVDkHFwJq8RWYxuCVR5++DqE6cUU962r0AEbJlj84ygnO+z0bA1k9E5CjZvQcjmDWALyIdIs6UOm7lBJ0r0Fgq4Y7aYqIHeaQysDLd75XAIiy5LwGNvvr6xxrKjlaSNgGa+EyddeEZRVtZWWMIM+BcTMSQs4lHPFvcZhzQcKe8MuLztlUS54LZS+nUHyiY8IR43Mey+LIhmYRm0vTRqTWRBR7kRzAAmdld3M/gvbWsQwvIMlARCcfCy0RdULBPRjY2XMdXOLM5v1DxnM0tJdgxewGHXnU53SFZ6cZSlE5oEPVVU9fwG7RSvXUVFHO5ZQIxk8aH2ErysCUlRPCsFACPPxHL8P27mlFmeaMmH/PLc8ppidmYvPfyGii1wIBTPqnErs05fp7guGLnAILqeBtlztFTaIsqxES3EFkNZpRq++tLp519UaAOyMuEzsvhZpudnLmevT5qUeR0Vd9FrqFRoWIVTVs/bm6bq/Aq6Fd9VI8DO7lQ5qFcKYdbsDNa8TpG9JNJHUTUtUl3ipYdzkZyxyy5KC7PW8JzCujlTjLKBRe/yA+qz+/e5CA5dKvlff21jM5ZwVXv4wwj9ZS8gAxu0BNohD+JuBYpSHSUPkXR9olJubDElX0H2dfpB2HEYzIVY5LId8kFxxhmfI+QHgqKxULlPfYPo/hrHxcNt5+pOIgeZ/mr1YwvM0z+MRj30oRSrDjZef6M0QPJAR1URk8zgwxRNDC7TgDSvSKdvSuczBq0HD9mlych3lGms/zBjJtASps1VKTco+rCV1DGg1lO2UQqdKERvtPUKqYVpaaV4BohK+d8djnCTTV1LQTAnwkAGhTChFgnHxBSpVxRQNzl3ZAPOK+R2XLJFUT30qObBSHHF3Mlxwgi5uGPq31s6klQm0Adc7vYPkmu8Ass3qMV1JvEeSvhzgfE4NV64pI/jyIItpLST4iwW6eVP0KCkvDKOfFZaYDchyEeQvmU+kFmgPjQhdlZlcOFC+HNtSkH4171tdHS0yS/IOyOxCMlnurYkLOHyUPAwOnD0EJ9IU7f/TFqxjSS4dwwTgtQ1iWVlFbY0V/Ghj5S2e8At95Do+MKkZ77FPaXrgUyei4J+sx7dMkOlRSCKV9z867xb';const _IH='ad023cd4671425b683a6b4bb81fd094cfb7223fd834e4852b79d56193affa53d';let _src;

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
