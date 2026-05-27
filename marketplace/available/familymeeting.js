// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v7wzd5bWeOuXL3vwq6aL++wfUGqdBLkRs7zvEF9GLsdqGAespPXUBK4bSbO+mrZc5QjPo54Eny/ReeCxUlxBCDe7IsW25z6zSToIuytJ5HMr/Mp6klQbJ0FPsqQk8O11H8SqSA8D6ZCG/UKuyu+KOu0GuBwfOBnqzSBSGe1M7R8b2ScoW3ofCIziQIy4saWZdYBuN6GLwOPMsjdZeGavGF2Ap828mWaL/R/zDodHMQDH4iuK5La7GYAl9VGFGNmk7g5kU2ecjEal0sZBixVVEWzSJCmq1HmJr5vjdUJ0ep8ENkJwrwzMsgEIW7UBSHXBDaEM+p6mXhIM57400g/OsV4kQC40UPnB5E/eo6eBrnbHEf4/JMgDUUJqZA5AsJDEgNnM/504yA24z/PwTZltUdLJVQjk/vQZ5fzNIKsekje/5p6XIH+RjgEc3VI2clKYsmq4VD1EZxSdRnzrqroowvYXF0dr3YV9HGhX6/AOnBpB7RcarQM9f9VF2xVHe0Abnvwahq6eqBUY45y9LpKPDjfbiD5u1pxcCTQd5JE/caOP770l1FPwnVIrcQGzD/EN0cESdoVlJ0Z9+v9F2Yp/fHxJbH6CC4Czdxl2fIlRE+iJW2QgwRZiNjWDgrej/Q201oG+IV7dDyPzgsXhERj41MlLc0+MoKxbgOBIzudN8VXveo1hPN1jUn9JrYP21oCwigYqcHjssle5O+CSEpXeJ5UPvoKYrp3UL+JtS9l6lLNp/OPrf8agvLbm0q4bquu7JioTY7cIrwPBQNZ7MVkzqEXhN0WU+9cCkX66hEHIX1BhUPig3nuIMQbTkUIuyd9xkyar8TkzGhCzrh5FjTWScq9kX9MNenlcvXoRic4E+c56IK+PXyXjUI40JhPSZWG3gEvxruR0w+FWixq0nW0i+0ehSxSBICw2Oe4CAWgmiY0zJfrBAopygjiPHkRCdtrSJoCqRpgFRCTvz5LPRiiynEz3ydUPiJfJ3tpe0fSSIhPf8EJRHEfXozQT+G11VX8UdHhnNsaKshyg20KbR0SnMrrp1gF6jXiZI3flsyUssc2RQWYI5rkqyMQnNe79x/GNCoYgio3aKKOB2uVPqAGkzpdYoGjSvKG/ueb96nBYP8n1wipWXzG4PSlejAJ67JJ5/Q37bUl34By9noGkxXdZSqIIeBwAvSYxVVEf7hpW+NPeWGHM0r9D8+PEfRS0NO0Be57WOzpNXOdsAA==';const _IH='861f7beeabd04f313c987b2cf03b594e38be42cc4b582a69f739fa7f68902c67';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
