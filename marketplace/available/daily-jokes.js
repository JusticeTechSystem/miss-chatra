// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FfDGPhyz/6+ItyRAS4nh0m6BRY3BuDMdh+Phc4sujESikDSyF5Ocr0a2ol2so09dPjmEKvUtaqrGdHzYqNYAXt/O5scmn/i4R2EqQOTYkPmIsFQHX7Sjca5vnv5sWGq6INKL7dSB/OH8mf91m4lm3gEKvuAurQk9FORJfIifUI3JMeLIuSaBikH4ySaJL53LuUwfQMkayM+M9Sd5E+XmCOE4DXjodYylZv3koj+g7KehSesRANDmh2oTQEaS4uAdljDbPEZ8oMk6YpYHVFa5Cm30jByca6C3RPreGMOvjqkvXvC7Qwmnzv+0MILmf4kuZZLQjRQoSNrAGGdCxbQ41tXdwb1vN75SoDGwACSexvSxlhaS05QwIUSx4Oj6kAl6jN70WSYv0V10XnujL13V3AjDDTDZVE9vWmnRe/sc82rqqAS82b64/pv5c7rDFJKgEmeOG8VU3cDK4fgbcsySajoMHEUj+SiUyOF6FTIXl1TXTvDzlEujnufEugnFSS0EeKKf8BwLW/WUAegwK8rfObAbC4/mFhiZxiDTzVQTbV6sCoqcghhdU/2BDE65yNjt2QFmCpYQUZgplOfkxE5bzt6wxauJqvIToigYmWoKp+CSZkJ+LHBv/6buiP/TaKQiIraVgT4SMRTmvMC4sMB1HK0nnbREsaGxJzpbAeQ9DYCaRBCvkzmu1fUOTeYc+xpW5XxiUm4V5D1whdqEqpGI8T57quRBQEYhqHuZoMRPpfSaTURac0PuFM6t8/paf1TRzhhkZ82HjuGw35GARtUCNWPCFNNoQqqdEmyfg23UE4KKTKl4tk5ChG48kIbRkO1C+9AVQEaiNZNBpLmAkSWCIH3GX2PHBsmVrtMLEcroTvMBz0xsl4tmBNIhYJPEM41isqmo7VxeOrWNqM2glKGxiRYvG6vFyH2JAZXpCiVK38kCPTbTCMfKrehLNwlYLi+YkI3ZRQfEqAdqpDiY4aj4uwDGlvW5qHFFPzHynN0MWXZMuV4JgTXAyzkTeYFoX0OhI/s9sQAk8GXMquwB3b66P6QszZpC6/ddX5DO3XammoNG4eJjf/4Z2MDk74PpaahIxf1C1ANF9f6Mu1WpyX6PQ3SElMdYuAMlrgxZATvU/N/Tk7Mg//9Sf+Zee8n5Bkvcix+Q1OS9oS76uq4JA62jadjNj1+crR69UJV0R9xgYLtBUekdjHiEgVcmH7AyiYZTCprWl8mCWgmB+9EkNV5cvobdaBvW0fZls7mLIoAyS8mNXT70QAuM5hqIyS5N28pn+m7xqEEPfmDHwjzr3UMmdvr34I9odKDcxud4t4aH4muiWJOl61arPHexZc10lTf1u0IpaMSEWZjLbvt9TymrN59Qogwgzcr7u1UKzw00FxM6Y002XMo3z84XuhZiliEZ6MnZuGaHoQHHtPyVgZVfb6E6gytPOthNuqOCG6CbMwm8w3r9t3FtN5u4okX5wp4f9j9bxOWChDrReGTBzfyW/ExDg5KqEYh5lxipmV1AFym+6z2IkyMUc8TAnFki4xe5DzkpfW95Eq5RNcg1WDiGMUINHugIVZEq+i+Zjf4i1ZipK077O5E9mOcEB6GhMNIC5VOEioeRaoLnh3YFvclbeM6G93qAfp99oaT+oN+L67n/ngQPe4+fHupqnb8XGD5U9WtnU0V+T2iXLGPFNQGWJPiT50gde4INMgqbmXruGn46tZmNH94RTmoM66bgsRP7KeTFPHNvB2UwqEugz+efGADfjJIp8zqPAWbHi9sWvZHRXK41yaRsZYolwJ9zYVOkIr3wJ+wF6ixrUw==';const _IH='67c6192ddd81c98653a9cd842835de9c7e06facfb38684d18aaa3f286e42aaac';let _src;

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
