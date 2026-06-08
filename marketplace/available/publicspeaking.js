// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aLdSSC1xvmhbl4mhPpx50paHHXrEAUxdFOPHlGezVWErHA8MvPBfI6DwSpoxMAqPsSDuPMQ/BnSaYw1tdS6hKVJDDca1XJRaVYjuy6nJspxU+jQ9qjF978H1EOloNAHzalp/inS8SALH9T7MLl+KQMDIJa1d7YCVppsZsYN8hAPh84ssXDRndDbqk96xC1Rd7L2/XBDFHNFlUTAPWKv7Cp9X0WdmbXEhZT1Tp6GC7GvI4BGoGTrGafM5L1z1VkUxV8087xTTBIVv37DBYo/kIK46pj3cI94jxW/dtYfw7n8igbgoh/595+LJn8YX1W/DxAXPmenCsUnSZq8CiS81Jo+0srap9eH/AGv3qDEo/HER+2FizWicHpKZDHpC5caRl46Xq7PPrq8CBvBiAffC4Ba4W5oBG0sW/0iui7uQGHoSLDFv6AjCpz/Wji6eoQYu4sehb3px1i19SZLQATzxbEP6b2xPqDJYi5MVSJfVgMd4OW2grsobK8vmLJTm3Sv+HY58TWO+A3h/a3Ra1nB4Hzv8tx66A7kFoANObnmYvKIdQPJvX3jCfvgqATl/QV6giYC1EgmaJCObC4aA4eGuLbkC5/Y85w4SNlFhvQH2NaGmEU+OIk1QzOR9z7ahofff4JIx+4VzLQLhpr5zOt5VRiiTicfreYKxjfmS0qfO+/BQS+JQjlpodhOD3pHC9bMskR6AxychDJFvVfbfbYeZWXhNuGGTS9lbinGeKoE1FOHpX+fv2WD6bVXOBTjnb1YMWs5iwvMCZrtwDdAz29bK6EXK8lSF6MD4qUxs8qddSQjftMNZfzJmRHAQax409RMY4/K+fwpSsBzDs5+CFi1VjFiO1uGwIejcS0tLXEoXGumBkvDqEWDnUkSUgQwO+hrP0QSmD96g/UnsidXMj2Ry1dP79f4i6Sr/BfBPCZ+JbsRpdGUPvthZ3Gpp9azHDSkBISkGfyeNjJwVo4WtKlrzYeLpZ6WK/W33yOat5MoQMaB8E82hzP632ydJ1T73ADLOEHU7Yojm4YHe+OWiupB1xZmHQ/96ZCUZW6b356SkHCS4hg5rY5Cs2ca9A3rPwOyPvBqfFBAHXCUYEkOzEFVPkB3/Fmu+ju7+8EKhLnJ9+Qn402vnB527q5Q6h+6jkyBaAwPEC/mguF2W/t+WvMxw1n0WtRN+/B4StDx3qLFj1n3BXDWDCI5i4sV4Ky7cMUqwkOsjZlrghmJjrrCdAY0TE5rD';const _IH='276cc59c6c0dfaa1708cbff19e2e000b96850456e4b181de89e9b57471bfbff0';let _src;

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
