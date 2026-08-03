// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvyIftAevRmE7tzOPIpMz0IgJ2NelMOXxe0+OiDaht8w6eTynQjkmNrHo6k9Ji7Y01HeJ3TsSP4F28SFjhHz7BDX3uxyrjZRCC5gwYlwoDuyZ2lsMnksKC+iFPsOZ1CJ34P3k7qrDgnnU+xW+2i0TUdnqSuMJkK9GQOPB3W5bhGWv8GrIkIeUm0Go4uCxcD5rY/P2yhDb2IIQaxuvhYCq9FTWpgN9WCotJj3g5RD8wlsK9l+eAyotqQA1AGjNjj/Joibjoq7OLECZgzAb/2PS80uDgS8/URVn5GTWq/jDnN7jpqlZYHU51W2if+O7OmWOfJaxFJkNlP7jjqRZ9CQ68Rb7UuGqZs+T3evl6ay08Ij8cX6FgK0zpJ55MT5/tMmU0VJJQFX3DvwP9fX9F8zJA4Ze9Js+Os99ZLVftjBR/70UuoVVxxt9z/lwogQ8YUBekrjyH24Ym9GflhTu1SkQet/HEGgcEI/mUSLE7FQ71dGdoD7yWEncILLaNKrzIFhVpHOKQreCJn76qumVqaS0e2M/knJBXO1cdFQfic/1qq3gkXieM+6ymE84Sq9IAN6hlV0TByI/t22B+UeCUJnWwzzvLhxbV1ttRu5fXODtpf60cGWkvuMMnfGzPZD/X19iuHYqtJV+FH1GPmrNx92v5srgb9VIivgY9FJb+SXlZ9r4R9DHbBdbbfFjrrpy4xyYtPMWNaoujTzOb9jE+aH7bHvlgbnz14rvZGnxpe+gBtqIpB55scgUxp9tHqsFWAIizF4/BFycPpwKVAaQSIvsmRqe3Dc8flbRZn1xR3tCE7BDuZHnvvePwdQlBXtIInXCibQQ51YOMoMLWdECa2vYP938a0UYjrRnGJ4y5OYkFqoc1XPlltWsZqfG2TTCpssNGK1w20S+B92nzZxWIPSf8t9P8kHaCSyR1HxkkpB/vA2FmcwJp3xZmFtSD2yyTnC4aIniLuQw6gibwyHUefmBlqe62fqJ12ziiOZMOIJeAnmi/V2YAijlCXGmBRyIMDI1iO37AFPwoML12l7DsEEMw66qPS/4A6XElA8K0DPZIIru0EBJDj2jx2qKX0GlCchZqEdVgjM6G5ZTQCbU1NoxbIxE6RyBhpxftUf7g8Ce8RdZr7OQYw2vDlSvnJEa9tjhaZQQrDIqj1VQe/YcpJSkp9uHkKXJd+/OF1Hziqsr0zCmTkn/1SJBzQzUnK2e4dmi+J4Wknys7mFetgLWF0mkRx26L8hzlFepF4ZKjABXvFqQ7d9erg3g1oJ+1N78w0VGZQR55Z6P1PBvIl9WYVtN5it45DZSJsaVw9jv88CjcQ28rBi8l4X1r1ZO0k+FdgUcC9n9OjhZBE3r4XRhMsssngEEAsRrs+bB57g0UvhJeq2UB6nQy';const _IH='21d1dbfc94e4643c2bf03a1fb70f64b6a703849058c4c5f3e41ae13390b5f59e';let _src;

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
