// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFUDEgG4/tQhO8jut7aAelKsOuDyL5Nnv0CS1WcMtzg+4MHa98XHgkwggGtkiDlMciPGuqKH3TRF/8KPPtnNDsH1cNvmVJWhmBPJxjzzV4gtJ4vMsPlrEFxYLuFNxaaaW0QJWPUspGfAMiksbChawCUP39bel2Z6EfubKuMG8kw3OJBXRYGlx+hy0kJhx6F54lAw3UwrxIU5RN7Q8/3fl9UlOd04T+cpLgQX4SwroJRLACJLs6f89bLLyZFZMIAiq6zkDH3X7oKZQzGMTIy+QUUq4sI+NJkrz/9RUaFTyhD22dM+qnYm6MZImPA+sIiBuIv4PRYXIsWdImMILU/+niblEJCY1dmmZEIyNvo63eAefgx+5B6x23BXigguumD9EaRyPNESUFg20KkBr4jSMApKbFfveF/uDhohfF/aMLSd3hQHwZrPb8if4XoKXxn9clPzjS66JuW4Kc9B/JMjGpr9l+DcjRASg+KOrQalWrT2mGJavcj9giU1hdUlNEniSb/PUjPmznVevp37i7A2RUK46AElFPqDlqvq1yY4bg2/oVxtREJnXadSKjsDNBX8z7Ryq77opiTo44Ru5F/TfEgcQED6uRqwTo3Zlmwm52LJVcx9SNGDCQltCutiH+uvPjaUbXDwNM7Hl8A0DKgLTS7I22xbnmlBzJiG/teR3dt/+d7o8j65LD7qnZr9PM/m0zkz3vlQhGjfpeF5oo75RJ/0N9qAQlzFXGq0Oadyh4EL3oD1f4vGjMqJ0Vt/LOeKMUu+QwdIW7XXDcMaFenCK/XMN0ieAbPOqHodTqJXcNg9iUYXmUzIQFQca8WRzwPEk/PNcA90c2IYa4Ho9+QZ1+qBBJnltmBeowFkt6XT6HTRxtpflqLedGVSzMDdaHwNqVvr7qpEg3QepybKhMOJfBorhSIFp3AiLHvaSqzpfJ46sGw67LWGyZ7GDiKQUHIOG5gyiYkiYSUD2K1kslAKO5H/w0VSAvpM4tjNWIcEg6DcQ3gHmBsVwWDBktmXWcc2JSIFRmOQfoHHjKeyH+WO6t7Q4=';const _IH='aa09ee4e34d09e6b18fbcbfa47f01eb0dd3bf709aa732205980f8d6b88333cf6';let _src;

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
