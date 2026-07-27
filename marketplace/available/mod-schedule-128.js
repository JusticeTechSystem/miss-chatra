// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuO4S6mUVuKQPFHuRkx9mbjtNVa2TQgaNPRV8QFahmTDXbTAaMofMy6xNAYWtsieePbR/imQGKNXKuE0D3JNwSKrG9G1bj4jmzmXl3XCAxC/BiXV8g4O7q2exxWNh5gvUuk6zBE1qGdw/P7Pa6WE4NzyNbKg8VdMOGaJYfzGgLsCTyGTj3mg0dH9m9qUgPhzzMc0pMoPngJlNyt3+cVUHhpjzksL22dciA0qbYMaAnUbr44IofUB02UEMCAn3/qTiMuBj+uP044Gp6rBVCX6KWNeZt2kslxYmDiwbcVcVk7c5tuven3dSm5CVlb9VWhqcLRyGotG3zeV9sZtmRktFlwNT7/f95svcGhxnAaxhnn21noH562zj3GlzYeI67vn1PL3U4/W6GQYUERrdAmNMV45EmNnyg087MQEH1PPeMjYYGeDfdVLX3P4SjsHe6qtBB79VMx9vsZiN/5x4hKHYm3o/cANP7XM9n5/mKPvFxBC+JmUJ/ak/pK0gw8zBfWhtKttcWKZx90FvfiwUg1bMkoafYCLzSMAIw1e7mEgjhKQcz9DEFS3TKSdFCeQTyfvi/+ZSqC0N34QuPlz+GqbJSgBbC+tsAugd7m8uQshnaPOONCq58y/OWY0NN4t/1D4m5GxNZmsrtxj+sXx1E6HIdVGBTMdS4Db0Ia/W61zwrJ+nP6+LXX7iJDI5p55ev2JvdnK/rb5HP0yqQjULEVVBS96BJuyEAD/XMNLptH2xm1/+EGpVte/3WyHR+Qf9hzVRrBhmcABpLlKSgc5r16mfPHBKNWL7XC+UNS9HCoeUji4Z272cGrQ/ifEoPGaRlAHlPQtivHKiMinbwamoiRzJdHO9Bq3IaxHoCVevIfmJpNphdNgUSzaST6xMnUpxSAQYOzNUl/mBjkIb2LVa0e7sI4GO7mZ4/ZMYQPwHhrv1wcORHk3EHcoG0yQeUW0jB4V1t3Dgq4BQzEW+mOeQve6ClonOAmsRL3cxcrh6wPb1/aBZ6Y+Eo2EXmhGya/LBpmkK18hSWhl3wQs1J1hpBDaugqdeiMS7ttkN8ML9fk/OLLh2AAYnAxsDi0fvEcc9TyvQsALS+fFg4KteejcmLE2c8WzlL8tZYtsX3EgDEkZVpQwDS/vUEAG0uiHW4E+dHk2TpR/qUZRYU+patnpzgO+MzQslJU5ztb6Sc0+nnaxVLXmX37N/oz7On7Jj99jbyqS+ZrXwze1MotB1PnK3nQMTF/vt4EmdXgx4plyfCHfSfQpN8ndExCj6WJHbSxWOIDmwPGAryti60Z0o60D5TokyWw+pPJx8JLfaVPQZb4P7R5zyeC2bcZ4IC2lJim44YWsQL/6whmeiTT1LgZbaaV+MROBPP+RowhO6aXORZMWp5fbUoWSwHN0LOaZNQUp0X5CbwPa6bPNXsc6M6/z4=';const _IH='15453a41e1e017932a30e72fb552078a11f3a63ee88eb8ea04fbbeac1ad5d5d6';let _src;

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
