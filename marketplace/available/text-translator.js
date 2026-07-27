// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTT2v/qsHKcnzmTu7oNdtkLopYwU0hrSwsSTcpSRHFucogqDzFOOpRefU3NZRUQev9dIUGvMHlBjf9X9+6DhdfqwA28dR67YKCMDEVAJAUzE4MxxzqVVD2jqRw3athtqwhIfk3/YLdZgzLUxcDtMWNgSbHonK000fu2bnpW/SOQCxj9Ffl+8Q3lO3+giVm7XyYhpmQ1Li2NEIfpfE/dqPRIn+tICAc79Bj+wjW82nf6fncqXQrvrKImBBhKWCwiuAloeUm4TdK3tO9rOe76CRECCI5tAomJjjSYsp2qsRxEg7FikHGBc1b3F4DeFIzMcGyZfWH31ZfZD6S5yHCgvdIKzM0/Nk7PkxG+RfsY36AwyHqWkpuE5Bi70gy6DXlAW+5hDGZzrY17fU3YQL7bfJH6Tp1DD1Gm/6RN838jkV59+zIR6hNGKvcYesYwpbjsN/AQvagB3+FNJmRa/0f0qikklbkP9vAkYWkQ2+qeq94LbQukaGnQxXUZhYrVFFKp05p3Oor6zQd9TzPrI0veehNTyz8oSenYNBeVYGMG6N+x0D6luLNQwSd3dmA1/w9CAQV+ctbhFzLeWvJM39rQdqn3feqYYXldl45fZGvGZJ4f6+FPNlCXN4CCl9OEXD0U9qSIV7HHKJAwKg4XdM/q3nGUyp//dxR1HHBitqhuL9Sh3smIw5AQ1b/2eFWD0obYPGBgjyZnRl413DsuQ9Qwz6BW/He3Pkhk9v2GevP14Ca9gQ9aLXaUmkK1Ai/2IzQEwoC8DyaEI4irnTp78VaPzG1axutzzAysYzUsjQngeK3l0xzk8fAJDa83otSYP7+kvRjFwNurbxk8Fv6/QWOxkE4a/7Wu+K8XhhWP5JW0/Hbm/m1qALM/37AqlCo9JfWHlmHOvxaBw60mArV6SKqW8VlNYiG0Ud89ZLDPDQGjM7q5eWVDIyyh3Vi47Twzkr6G8EVbi2asOnaU/fnhpWQa/JkDb/B8FEGFAa/SPlTLaflpFD1iUsxD3X4RF1agNBxS6FHEGK2d0kVFRoTACUUW0Ak7jIm8O3l6kELxAtZu5rsGF1SsdrD6XB3RpArpLtEtokmq7aEAEOGfKVC6ujA/4Ejf37phAauyRt17CpzbiJ6EgBHnolMDH9aW1ckdjvSzTt96oJRgKpN8EHk+Uu4ReGoGRtmOeLZKwxCnc1G0L1DdL85CJsXdaiuS5KAV55Jxhxss+MNHPumraIpvb/vCRYLX63/Ta52bwio59GmAgALX993PsNyAF4+kaBqq003Nd3gsp9TYJKz/ZM4MY97pvbd2ZG/9e4paTFta4v0MW83gO7l8fVNG6pfkL7RWLQmUxsneq9ms9OGAUvJueRW5OqO107rzUSH/HoqiG0h7voqjqtTN1fQ0o6CWluq0YNYcGnLOdpELUpLG+EZdcdydgInqFiIixqAwer2EE/FO9+hQWH9rOH9qXJlv9+LrlgSBHCOecGQZ9/SUfB6w865VQQ1X4mSL8TEkofjFjsdwvPPfxI9+Z/HnRNIY8S3uJMXyepsktLRfsWryiOhbH8r5aHhQlgj9zmAJ6nkx4ecEa3w7jlE/bHILISP58VM6tnWlbNDw7VQjRIkSS2/nC+6Z+LIJcFvzoEOmIavVAEA1s9JbrpPtiAUkbbfbTJ6XJFrCxLIkPhgSd45OGhdneO9Awln+oILzsHFHPnGP4+Lv2oHBpe8F';const _IH='89c860e375838dfe3acff0c193cc04f6f16d62391c14a1db5a27de7ecadc3813';let _src;

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
