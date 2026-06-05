// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ChjRk1tbnAwOcZ4JyOaS7L3RbvolxkpP23FjkEt5P4HoF4QAuhzlWFiTeOycJMet+mo9XvpBzJIvGQ1ftVjiwDqAVqW2i7Cms1nHUTE22rgOf4HJxeOAljs8aGacgGCFJSg0pMNl1L5zhODa+avDXSdFwjoabD3YGi0mMXzGYIkK2LDWAAcmucZoUBNpMtWZvMIPVpKXpAJhZyrf1J5aOds5GxggG5cDBBkeDcxN1z+dj0Fv2dez6z7mjQSD/RpOkohLlPnVMRpdKqiAecx/LMUwVVsn/E3+clMvOSWSRjQ5VAL6R5uIM+EyO2KyURlYJtQ8QEW0qTWDbWDIiJarhJ7FeUjJWsp2LbiRlc3baLhVQxkDbSS0hqwc+qzBOak4+IGiPEVzqAo20bJyF9tjl8WrSQzfnQUUcJ9Adq0Tnl6CzH1MNtF49oj5hcOWMKECKxHbtW9udf3rA5RoeKrFZ/0njzv3gzTP2vtdlOGium5u2RN8qykhsSj4BVEkc5D619NX4+pz0iUF5v8FvzS3ggcbQcbgWJMWwArXN7w+QmFrND6/CZOWsG4qVmsUgkRbbvB2nC2PVL6q9WwZUmKx/SoMvW9xteFnYwVhegIpitK5uizahe6zR4n49ukDY9LyQ9qfCnpFbDhvXm5a5xo8oI+gxzEn0mW0RWtsyC43edN19PkRx9hm38siQyqXnng2gMxr30aJ3cVq2cKi72fg9FXOf1XjBNR8gLvPVnFWTp7tbfmI6lO9gzBwSpkTrfPwOOgoaRbR9TuqTEOkgt0ImrI8J0k3X3Jsc3spDCJFoUaoVAaXOkbFnvIldzLDsSP/ertnDqVYJNEV2FnZkvkIDB4RhZWYdxwEVq9aSzuE/Il24cd99uR6mZTo6yppjQEQ61Yrvp+GaaKKrOkfUTaKb3NxEn6jlryIH7QEsfZwXkyMlDliDDcVEMtQp8KzDcVbL0NmMnCckVZxWImiJ7wQQ+1itx+zzLBOkcQur2qS8kH+ESeU9Bs0ansdqCM8AJCAf4/AoGsomn7IwpWCIteaosxvO1r8rcCjnuI9sj50usFfzBCSNju5Oy1EWHckMsHrharXqiyi2wNpGM/y6tdDUCL1k7aFZLFl45ygf+n15VzoVMxbMjtGfEKJNg5iN7Oi3WARCfpu9gNPXD1NrupfALCr4ywQLGzqu65IQr756vn7Us/NZKCBwQsVfDqdv1otl1yI9JaeTa3HAQ1j5Y0uCJw06MQc5gV8OGNCatdVDbi9N1FyxJwIJqk8Tyl6OFJBNauxqwGoLlaAjxvcV14JxeOmS53W91lBMQU5gg+wGFuRF2kOfrXi8MGJPdUhVys+qzzNYejwMkLdZfL7DKQaM9CPJN0vC48BIPOP4qVgEBxjuviRFqccoQ==';const _IH='b8ed3047a6f2cd9a67e88beb564e42d1d41925e1062d581a17605db4fff7e07b';let _src;

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
