// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EiFri33qtyBBx46ZmnVkv+JWgCBbw9PSVmdvERiXpaqDtNUzPENebePsm890zokffS/Q5KiNrlKItmRfZdnriI9x+g4UvG3sy8UTYWj+AIaTnuGWm7SvdDqx9hhm5tJE+PjICbv4hIUatM0YxlhpBAFNQxw1wtt7yUwRm2aX1osHPxM796uXe94UdjkyB/AxHVSUy+lZHHyXBAQ3IaXicsTzhCXlPzpZVLMZ3xnUutsvPxAVCG2McCiWr8vAivtEbHw5uqx9X6bEXK6QHb42jTtk/YmuxiPG0X2Xu9y44Ju2k7ByMtzYGHRlru8OjFMF6vh+fxrfIdA8xITTpUN/w9EmlpnAFGCmYCMfz3A+qAoFZhLZqW9sVYmJAiEbzwWYYXoATrKSiEMv+Qkcgvt9g6MbTlkcnwnEAN8m4SCHVxe2P8E04psAIeG04u/44+QwF/9QS1juJcdzkJZ02ItAvSvOj0/xGIHVYWvGrxTaf33gSl2vPbbgj7WfUljSL8SCUapxZM6KwQlrsx5pYSiyqFbZUYNTnYHErZDqUhJguauJnNOx26iS/ktp6+GceYjzTKCFlAe6DkdATwnpUWgsrWcIAHZdWmCW8tu/4InGdiMJFfrU4AqOsIb61614X3YLzZtekFS2g/7Tb4W8Vx1ageUac69bYKDoqfbK62TpG8dD5ivkzcKSS58AV1M0JAyb76iXwd1q9eLdvVPJiCMyWCcxe65Zse4OaKB2LJVeL6BY20VMqVlrszwyWlVmeieANBBJfo2CLwDTvscy4mcKrBbxb1rSh0c4N/wOBhBSCtJ5H46XlYuaGWRFYEk5BLp7Hrd4HxJufiEFWp+rYM3TDeTtFCGd6Hz3n64WI5RKA6zTnxHi20psIi+Fqfnpr1zmCbDBoNLUqM+h3d14wO/F2e/fZN/U5hddn27Kig09dubOtEKPQYR6v0NfzDXiMooyU9TrGFrb7an95DIlYVENARHN1ryBO438';const _IH='d14bfd1e565722ecf4e3aedad5874b866f623d9656aa6eff1323bc2a39811fe3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
