// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hzGOttrWfQPBxdqk+ubrfJF4VW1UT74O3Eb9fTiNGWqG4RPktu6b7CCy0Mt1/N8XRV6Nj1q6HmnZLuk3J8eUi/qvnXAciBKKc5nOYaNtBi6Wkjk3sK6tN5hsLdBCzUzpG5EqnSA/+mOZyOL8Tuc4VtkM5PNoxrE+SHAOJKfDGiO3Cvmi6uOXnOCZEf8umIF7CMyqb1OJHrgi093JBfTizVsNxZ9cretz9BfW4ko5CVEZdwzqEbGfYD1z1X7ddrqEHbDGj8SEJjAbLckd9GLDWHK/G1PpMyv7fjdJQxjOROCAKN+YMj/E7LRPLPS6j2ZmQsLSDPSO7Sk0STk0uJBlgCPD2yr9vThcmEm3kt7OZZuBC0b3n9QprBSUQGqD1BeR++UhebJ/GJzoN8e2w9JrftJWvZ3odQPhurWXzvfBM9u8R3669SZNOUbGBsa+yTIsPBsg/9Q4IYqbK1Au1yjao7rVFufzLOKpGmzSQsN5XfXtDb0EzI4Ag9YhG53R8gBsDYvYn9+hnc9GCwA13P4/6vIsy5RGhqQEOGiLjRCIi0QavPy2z1EwmJtXc1idN/O3LxsuCaT5ED4oCl/oyaeQ6LbGjrPwFjxa0pIJ67ucrqWeKZyPGRuvKOoBKuY1gAIaV8SDMTFIgbnAOfmiT7qsEbj1m498Q4L1HwabCx9SbQxOFqOmcamaCEi7INQu0LbZX3pTkKNu9u8r8IHxGk4DJVVfbOXd1yuNl4tmvjKP5u3x9UjStqRhQsiyo+HuhoP3f69tD64YF3F6ChCdkYL87ao2BnyT+kOtfbe62S/2SuYAiOHUqih/bgJpnQL1JeQS7aTzZ5YLRqMYOc+WUHP/mNfuxkNEperqG4n8Xv4caRzCFugOe9kks8Sym8n6N7cMsUZWp0sz/wzYIBvtf/yLF4D/p2LVVN7piellXIS33iN4tOCLi9NrqpQPZERSg/Vm7+KDVu1mkLNQOxfR4kKt/6mMkc8LqRDvpbSYBc9g1r4bZdeaKG6IQmxMnk/VZ7UJX7JJrtB95PWKl0vqcp7dFW9EEUnbksxE/CBLymkGGdKK';const _IH='54173bcea6052ee54986de95a9dd9698896c8941f13e9dbfa0fe94412ebaf154';let _src;

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
