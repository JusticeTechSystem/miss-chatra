// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0q5YLcv+5j4HKluUHi2aEZ2cm/UxEpFKc4jUKabAPTJvhPqWYJYakDl+sX2bmsnTAc7tU3uCyuCwKAX/6w9xQtNC2nSSeuIawX/q6Dn6MYC+jNCwFRdCDVHXiZcg8JumPY35n9efY7PG0DDz3dmVA1rzuCX6R8TmwkySv3hvGauEAtnDKO2S0OjeTL58Sxd4YaVTCti01tFGEj2rRhwx2gpbjW3lh1PCWyPxUXwBK7q6VIuSTGc2Z25OmFmKBk8JkfeaefMeh8AsxkS4ExnL2vH073xXQ607EKGEjCbrteeOUG7ndyVgJdHySocey7rjaqgUD9soYL3gRNjquTR/J+mKKWBAAN9p0Ol6zRaPzCdwphsXyZTjjUJDnb+dlSGpCU9bEAeYCw5lvWGrTo4QnhoaLgfSwDJ/sAIlzoJZH1sLlxCDC18Qxry0hV8aYW5FvlTH9RHH1jEor3n6RJ6KzxVktnvy8YQ71khdjuvd69aAa6AsAJCFOYJXq+sEgDXerrwJEytJRA/StoQbjy3ky9XJaM/2nd+b+EZ+cuyEBBP4rt7Txr0h5LPga4N6+ur2JFj3wsR7g5jhXGFnCgycd4LlhYSf6B4bDNFLMhTRzb1Qad24Q/gDbdJUgZ4oKv0NqpU/1869GPNno1r6ar0KukSKI04GqfoW0WJlv7RNRmiyyU46CRSLMPbE8L7CNE7rVAFVZgPnK1FXzKx8eNeO2kB8QEn8rf51K5T6SynJyr8Db539rcZGHCCzp6+RONNF/hpOSCQa/5ln5nHA1xzi6DCLJtklO8dEEuGpg+Om0Fhgzh80TOiMgpHXp4JWJo0+NzqpMdI4aU76+1SkR9MlC0fFTANYlSVvxWPveHcc8qYVIuexpf2PcCtDbxH6+I1l9/QhUtTKC8jGmCfObgV1As1Sv5Rrfmkvxx5LjLqfNkf/0ZyyfFqRNYAHJ04sIffQWFJKXxbX0JU7UWkpatkAtzfATJvKm/oM5ZzNlEBQpV4apZXSXbRyTZQTWqlCes3uPvE96xmC++8RjOOTUlgTEvAzW0nusrxa/cH/EGfgGZv/xY8OQ1aK3wbFUMh6szkaqKd4ej1kIKXuuatRxzPEwnDbiGqAHv90YX7HC/TwxvvuiawLXcPgfzPrZYcuIcrS2q5gTwbY4Qmic7Z62yVAfq9bKVMg0NCf0dG2svmu+2d+kGM3Sz8uEcm7aGU=';const _IH='f233483a25dc91ef0eafc0ea3abc9b804e875da8aecf06a731d632dcc7728f37';let _src;

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
