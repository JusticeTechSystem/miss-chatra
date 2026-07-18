// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJ3bo4KNEERKMovDZ6jQFqAqFwazN/TojAGQuVwp+T5z5fyk8Rd1hLC83ekEnxVzL6PIhoVZQgmqCSZ6zBLhQUjQd9MWHl4+KHABSk0ObvQKM9Bwx8DnAxsfTBT5sFJ0JEhTYJ7nD86JYYHqITIMZkxFOhwb2TCr47rhmexQaueHQbb9k+hazx/NehESjSlvCv5OQHkfS0D1FZ+bwqVypLESEutHrb9x6qZVDodzRroRg4KDvg9blE0UaxacSn8NcdXgtNiMq/CmKM2slose8bUuRpupTG9Hydj7eQDaoRey6vi5xtHhA49dQAaYuUuALM+n5LxFvwR+HEmeswX2u9/QuK3Bb0AAHygDjM/yR4MyDDWTmULaEPyWu+Gbmf0snCb0e3Nwe6eVodK3U0PGsvJp47nb2EwyU+KE2KrO2cZBeWPj8Cu34F8Ja1X8xUg2Oh1Uu3niyhuzuiv6wIDBTZgsnLWxOCBLTkYSx9j47cFiyabQ4CsqBbOEGEsStkMIPPPWoS5jjic28aLafEFm0Rech6AiAQwf+En9IFk2SiHKhI6c0Y/JrzXUKkYx8B6INsMMVyRtySmjO9hoFjwm78wUSZwORGzjXJ/OhUwOTlTASYGByxVsijHa3cT/vrHP5esFvHmX3bArJeBDwod+9wZQSiNwmQvp9+GBUjoffk5iZItR0j6xJh8zasZri40acrNHEHlH4sMDHI0Do4PrZy3pU/rrqPIMEwMYmbP4jJrGkS7qQ62dWnGIClWnux4mZzo19SQwiNojWMOFnkJoqE6BB1FV3RHEDlyhlnG8LPs92N79X3qYgud4PL4zBAenPMFZEnyFOf3qWvTei1p/Y1oErm2+iLhPwCFegxnCi5LQJaQzdw7WD7xdKphfHoWie/ZLiaYu2VBuotBx8Xn1xv9OiRLmIdwrkkKbg92piG6Vug1MfN5D8Bgo5gzMV6mB9VAwTQGvkRji77FtUcFf7DQYaiGyN3tjPsHnYZ5cmMZsFsT+BVf7cOOsTQ3bbsG9YDzsNyd7jxEYpkrDlIIPbgUs3JM0ayMd8pcz9+YHhgzJvYs8mWA6poEhJSuIMEPGj2Iy6I7nlgaBBZ3WS0N7JBHfohCAv+NLRMRb+KVflgqKiO/h3ESb+pZCZptMrN3aRyy+UB7jpgp3Kyn3lzw/DWQA/32Zuf2QC3c7UirD8ewy+RLRhxPQZA1QMviwF+wx8Bmq6UzrbDdussPO8zqKfVdE/B8Hkh2+rVpwo/nIGfXFdN0sjHxdqXx8QOLq7QrwdV/bAc7pQFrW7cyty52qZK56YVi9p4dqrrujnshafoQ/HbZrHRSxIdPdmckbKN+PgfnFmphTq0AtQLd6wb0RrBCU0y/m8b6GXznd30JGDETiVauaYIvcDo';const _IH='975fae6b70969d246071beb2a74af5b861ef93a5ed9f60c769131abde6ee6966';let _src;

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
