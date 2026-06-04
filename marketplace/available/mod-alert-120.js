// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CFSOJl4i6rEbh/BeY8aUdBUGmcLHB9qktVbOUCG/gV6ZSmGz40Ovvf3/RaRX7JfXm3B0nG8YoI1L96PzIqqOCWi88CYEerH/9sQbbgXXzikFcqNU+Lz6btULZXstjeEYKSWHvCL9zaGMzwGarPDYdmNhdR7oXzYnU+1pLiUW/fvc+E04+sw8A4ENeAx6JpS/i5o4ARzzzJO63h6lf1KOE5erDEIeE/dIAONh/xz2lUD9V8y7cUCvUakGBAgXWJ4UfsnDCrISYU3GVLX9hUtn63kkjNq/Y8qlYTCgMi3DzYMFBSUbv2l+6pukb8nEsM9HczF4RrxVrUbNefuwpVKX3H6+wHjP9gOhIWpmPUQ3ujhwOeugGJ5/qPhSX1aY0m2n9qoU+DiaxiTcj7z7+9WDDs7vREz9CjaMsXq0ZZYsnITcdTz4jSLCwL0moJrjimIEWLMzNLkLP3CTzleVHul8IHQvh5bF3nzLlnF79Cf99piKwdEYOBtpzUrsvlUStSv+RlTlYn0BRoKOITzCd8RY73K1eD7M4esRPOVfy1rBbp1m4e2KdkDLZFGHJScgN0s74kaBRGqUi51qunC43Khz4NhYuiY4Q8fiA5DHP5WM7+1DQ4B9JUigPMQTmx1miFR8ut5oRDc/ZM766/AIa0jvk8w99zwpwMN4pbqsJiw70SYN6Ok5eS5r65eFpUm+iz+nC+lQE7iTQ18Qus4BQ/Btc4/mPSb/wCiTAQTq4R6z/KLehgrFU+kQJlQ5mShdVbJhLPCiOL9tWG0UhIBTyvfPGxCF/NQH+h7+PqsfENe78o347F63cA+gZJxxyc6MVyJmb9csgrv+u3Cgkxtn/prnJpv3W9pVIJ/Pnkiic4GWmTnEEksr8y9/3nrkDDTZRprMuXtuHPLK92m5qjJKX1iKHZk6+tfalQz+d46gRZ5SHpNlBF22TZCufTOAYzFwOkqEoy4SQMCL4uksaufQXQzN+5HAt2vgx2qH8kQgkM5o0wNzDcTFM5C6a7ztkPBziZBW5aLV5bIVWe5WsOHQb0DdLhIQ/mybYjmzLBQ/TMmyXsmAHZaVvWii/QOD7v/VTCoxntkPWG0xRVkoBwZB3vYSBhVFFoAj+vK1f6aew56e/BmU8xZ9ZEBb/fAdXlTZgDCt4/JAIzQtvbsU2aNo9RQy2+5HPwZJM5wcNg/EdCOZTeJfdYuiCs9VTEM7dHHJF3mgKeJuv49VctZ4o01DQAR+7xAqodhEU2DEMQDzzNgaWiHQNbiOqTCQv9AkAJXwb57aSEpqTtl4VnsnApX7W4d3dGNf4RTA4FxFspHlj8C0bl5M4aWqVgXF6kpdLVQfaINikopSVGNeb6+YbgW4/E2c5thGjxWJV4B95Q0jqiDu';const _IH='921e8bf90922e01d1f20259b0a1151c670ac1b39c36fbf16f978e704c35c1dc0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
