// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9iPohC6+EgkzTdn1VZXb4YCi9ZAJKeoCA0DoiZdLj+tpIpLqmuJoaJtFKew9uV8VVDx6S3bwV0q+1C6859bzaBilXf8W7jpt0Giwy9ZcGUz0vtvZtfpqG8jvblemSxI+C2tZ3JQlhnTf4v+cWoder/Bn0jNChxAgiHyHqpu5M1n468y07EYll7rZQRkm+Wo4lufog04IGpJ0rRuKgRLmMq3KspEg02WGs6R8mEJ30KxD3TiqapQjcwtPI/qIt6mE5XbnZJssDC3DiGxq9ZS0kDQnM9aM/ady6R0FPRbKvEewXz0oI+CXUjw5jNtJ0OLNQ35CE80A33OVT75b7SMyovCrABxKhhslU0eecCVENkasqLcEhBnSySwaa8G8x7yAO3/67qpLt94KSOCHLj/9AmK+/saULw+TgbDcGIWbnNJjYDG4DaQ76buLcgsqwH5PDIfC9R1T2Rzi+tenCbZOEs/j4UE6KHGdqa+KqcXbyfa1iwfjAdLb0d6ILsJjKmsOakMaM2eijteCHHdXnwHbIbEjvHWZXnD8D9ij93KnBN9V7Tmn87PlQMzcPb+M7S3Iywzq88fDmmYAjkN+Z26/J27cqUXHFCiXOwgcFwKuDo2T3QA0z7RPp4p4nmHsTO7n+uB+9XtSIFQVzmlwl5y5jrYdbXxBOBDJxdJOD6cz8MLTv1inRI0XQvJgMmuTQiYR9egjnEMJcsrNgRTdxzzRJquLu6ONUImwpYxOglE3uR1Tp8nIv1kwKkDIjkPCz79jePcdrlpbeL+v5KNyEqrhC2AK/IKVHJBOkjDIyh5zkXxDKirg0s6EuFrZhA/7Sd8LwC+wPeEX569SZuO1eZOj1b3UJnF63Io/US2Cx/Mn4naM6aMG+NUrPhLevPTnArWDHPt1/b7aLEj8NwvWvTr0CEPNzdhYOJGCA9Hgjr+VV5tRs6EqFOYLMRS7stTjcOzPJXDlXKea3ijlh2Me0+XDfEUJ+JGxd1ntJJH8egc9AW8QXRpLsCJPeWuviV/1MHxkBGUOeQGBE0hSxdWU8IOzqQkM=';const _IH='5a664f0ed665b59c456e35defbb743934d115d99555bf13aebdb82151827d6c8';let _src;

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
