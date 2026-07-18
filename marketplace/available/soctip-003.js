// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZqsAWL9Y5/Wrg++TTUYu9eC8nRnKxv92LbsxmcB7EILDSoYEK6u3DQCqXlA9iEs7TbAitUXYgPZv663nls/SCT514l30R9OFOx6iJQp/36nGHR8gfs7385O5z8Nh5g6u+jg9WHeojnysVbQb2Dc1Ma4tRV/FrBZdYBHFX1rXI72h132yNYkPh7i3uSNlU+o3kAhDxEVpEqe8lhIEf1619yLYvBY2Q/PBWkW5maFkmjjvNPhmyH1/1WyB4X9VrAjqqubTs13UdWORKk8+BNn9bu2XWViRROxCL2i1EqIPIEXxvof++3lTQZdUJT8ecKoDpzZhEU/RR9r6EF0389kgzPyJMiHMqJ1tiQgAofrXsi83IKcDtBHzbEDwtDOre2thqDbQhsufKA0fvDzwsuRaPFQBphbekQvZQYuAfMyUevwVK6aPHTx9JdAHVvLsUg/SCGHLoBSN2RXEwz0vFduFVd7sxcAvm2Ni+xjuWHbbT0s3+0PfpHhgAaHjflef9FcpdiBa8Q9VBNDbOtSoswKoPTSn8Vqw0JnrpySp0qaC9TKmhw/ggTEFqCFA5v0dYlSzYeZy6ym2GpbFZxpdNmUds8xc+LYOl30IP1Aq9ljHmLxhfgB7nXkoKftYkRRHuL+B3zNpdPDibhOD9PMIB7HmYUqrq35JW0LF349dCp4TP5FcLFg1I1vz6RLuFwzkwsnAEhMXLenFe95SAeIXLZPYZpiWQx/Kcqy3pewvtSU1xxywLglJmgi2KFkCYYEnMJisP/LpoVRwab6wI2DB7h/APZmdGAmaQecVlS+ixd3889tI0jITYaGwzwkELra0ywiSxeAYpYWoMfXn7erpKB7nUrCcnhP5MmU4PtaKv5BjW61pjHSK7+KXW0gT9hPdOCnuCTfI/KpxqzanBA+Z6LVSTy3M+6H52FGxwLiknlnKYMeLtYjWCEUnf0SJwHIrKBTHc/tccSthWn4v/e4u9CSqwuyA6QqS3TlpT240Q8ZED8Mf2ZCItsxwP1/+asON+mH8GmsQjCly+VKNuwHivXbsNOw9+zwTdtfBkXP7FvOF9cb6iXgsmqbesFzcn7tHzb93YcC959Q4iJW5c2Q==';const _IH='1e51d5699af1f7f909cef86267b2989abeba9380ca1b7b1004abf035b402009d';let _src;

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
