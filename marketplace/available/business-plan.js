// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hOmDY1y+GAU89KoVohqCo0ZZueJxWrGswvHn3ok3ipu7ATCWh3W7Yi9pTlTL00+Zpqvwf4JMJHlfna757ZoJeEiMXEDvjmPHfsqyInm0YQbqo7d1afiURHYS0Qn840x7GOxRN0VMQLcKLMtBC11m2jPmLymVcyBhsrD2eCYC0V1EUXx7sfhoxHzBEOlcS3Ch752geTvxSpx6NvMgAjxP7k0rf0xL2PQAHlEpLtEB52tsLV6f1a6y/Nede66/Sauln3ewaaZm8iONn/0cdevzH7pKYKkDipaGdRec63goinMmyMh88yotRZ2yer9NkEnoI6DS6VHfOhhym+TL8BM5MEm7iNYBHIfWyRw4oSyaa7QmS5c2tNYq5FbvY9gWXlgP7yjcDosA4lxlRbTp7L0Su+8mPBBRhKYuOxur4AEOiEFqK17uN80s48Bb5vmCtw6YzOstiLdFQBQNEp49tIIN/Oe13jDof0hcOEfyMn7PDqg1Dl7I1vrd/3/lddUvbn2j7C47nQMuIu7bQe2g4MOQvSDz6hbfEofOBJ9pFq5E4SVMQYARWTYm7nG+BbxBHZ4MByyCyCDF2nFfpJCQWWbWb6jIlsaOUwSNgQ8WZyDJOxu8AaiTF1vEVioQIBs5x7Z5qcDkJ0HLP3aZGXjjWHRoo6IGrT8ZbGVcQbpO4VsghE9HcbZYdKb6b4zHnJW8pKNrzEYqqQqAnfhlY6G7FhTCroMN6G6vDcDh07lz2Z53QY8bR7dM9xfaLwC+lY/lq5lKShralgIILKteGigvwwEhO7E2JGrH8RfYRAPkRRGmQyalIMbqKa+8nxSK4SkM5g0vdbpdH5pxKBjYqB1XpyI55Dn2X5jLRCxUm2JLUiNpDzE3YR/uRvdKvwkhaDOdByT9KK3msAOMxMuPZAEVbr6EHuzi1kdNrFr/Sf4IYV0OiQpTaRwrE6XHRhTeebI/492beO007NNCbDKvoEYi99VMSXAdz2Eg2bLGx/klA3FMNsRfI3Y/fC56SXiJ0MMfYJTtcpEqS04895OyjrYLphfL40QKPYGq24biC9vroPKrqW9yDeM25rmvcXMlDfMmhX5jyqGuh6lwUEECTU/DB2j3UrvOgR9pd+7yvXP6HQqXFbmWUHeFPPGvKEcHVp06l7yVE0oMUlEeiLpEyE3SMAfdHKlofgYn2lzlw4419Iq8fLceOnMVVObcVjS34mObc83wpotziqR82jlcWhAtulaA2M9Q1UN20yKP2GAN+gk3gja+KCQzyoDJ2ENT5IA9oIJff00M2OYJRYgfVHiFySHEvGUSa1tit8+Eheyw/J9aOM5Uahg0smgxESMSrazPdOgzC7hXqbKOoWojalzeh2I+qb6LsPgq9BOtwehttGWSWRQT/qvv/XmEn2c/kLbSIUrgRpBHz/0tKw1jEf0MPC8y3hOZt0R2rxVTnzUnP21mlY4MwkhukBr8UWA4+NIWj9Pn8/LbkeI8Ti5bV8mHUs8nLYasDDmgg52NN2TRlbvac28WeBJFYtqhemxAXBE8/pDfEM/hA0dTq87xabcVEXCFIFejWll1swUMv+Jj4gAZXLv6waN+sW5W9mQ/SBH1L/TmmUGs5U+E9dh8vj00/iaxGsluJqu5ud539O8PHn9SF13FGYOy7Itfkk7c60XHHTYtcO+v5OVvIQpV6VmMB7uyhcFl/Q7mppnGwEL04iSonWhXAJKhxliM6Q8mV/yvreA1IOOQ0BmV1XJ/GdmSZPLmC1p7Nhccedj2wpqZfnFMQ8Mee4/qZx8ba9g0fepBAQ4=';const _IH='17ed43c89375c8507826b351f1b34901c75f7add7171a4a3c6db52d60d25780f';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
