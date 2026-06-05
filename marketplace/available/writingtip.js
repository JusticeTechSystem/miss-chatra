// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4DFIweuuasppezqUnmogPhrcri+Ka35pC4RG6tbSoDJgrMr5tui+9PWQJPI3OLqYXnEvKTsHJx2vh6oX1qT3K3KcBccIabUWCQ5pJbVPOztCOQ/a1mBnxwk8vb4LWJwd588VzVQiEckhBrUEvUMEhH7eq8SCax2G5/YL/vq4xuAVjmdSNQSLfCpyZZTA/Ipl18u6c3UEMeS+Y8CAgKTH1hFHBbBwGKAYpoKUscJwXBvWFwP8KCszM0Df4cI65H/YeqTnMtjJou7nkSKo6jedMGJh6kK2qwAykeydbX7oUKYhB7TXTyWi0KF0pGcytAfV33vInZBD4wUXUDaNjXIlOajQQYWYZ5ucRECohdHm7dlNY2HZ6BEL/Fc2WMlL4lM13CvrOv7ShQAmetBq64VEkuqD6/SQCHBctmF33iwJmABfF1x92ZwoC1dEPtDf31YijoZgGZDttR0wPtKaLgizdgAEyEfp8ibbpr4DpQ3semijVdQlky1AC9wA13fokHmS8dVcpt7T938E1Q48jMYyTsC8gMmBw5T85CDp+NUVWOZGkcqN+WLS7AiQptZc0uREJJLrkaVtBN/KtieMN1Ep3gtPC2kqG6RFWk8r45T1Excr+899yCzBkgcf7z93RSqqXJN1TARDTCictLtgTGlnlOhlmUhB+vY7oUlLTGmWddJq6jpQGZzr3RMy4MPaUV4de0m5dWD1V9/1AGaVY2aOaNr7IT7jR151xUkJpCsUn6Vada2CI46iz/fhXzhjS4WxviDhftKyV5p2M1qvzmq6DzTOJlthhhalKkWLgIxfWW512DKNMtNuQbbSPyVn7r9PHUktcVRk3WzqTGW8St6eEHaimKrAUQ96IVHotpGaOW9CxXMSuBJnOUiG0DvyvbUO/UPo66IAhbvzl9C+amDvNDdKzLflBJ89nJfKQVj0a5s5tupUpmLeuindJmcAHMS5cI66UKU0qVDur8I4ISktk0ZOZdDW1kt8dJ7NZV94fa2o00rX1KBQFNrMPKswoMPN1//EkUlPui6JsqDEzVwB9LhlsQQOUj6TnbA1ok6c+e7anKR+HdrQUQ/t+qR9IneN/pO1hrZuS/vXhKTxn3blzlx2/1pGycPIF6MH3qYwG1l2WfYDByXhSn9fUlTO5SjC8bzFSFxlbqPNoPrm+WlJ+UAnpPwjUJX13UlQ3km4bxfZtl6imxUD27iuOsbSgdQacxg/6YU6jw==';const _IH='acb28f792328e000e7cb7e84daa7be5b03cda624197b0e384a073034bda0aa40';let _src;

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
