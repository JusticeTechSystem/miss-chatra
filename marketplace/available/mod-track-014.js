// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLhgtKZPWyp0rTE/37/IKHR1Gbg3NGBDsfdNZML8cX1TPFoDSS4cExKfeW0iUGkM3/V0fB3IiRyHwQ4Z1Fk7NAbHlR5IreyaM4SLs3Uu4rIhFbotfCAQ8EW9gcAZB7PkKaTk2XEIY0PfRxGZYz17lbgfAjvJDhkQ6HT0htyc1J89XPhn1xjvND60nm7Jsud9pAgFa/8JaVxISoJw7KsYtSYiE4YjKSJUJtTdgyPcWmIWAz5aHt3N6JHpJ99bHAglyNJFsipAaYneyN0sgnGlu+1kq9CklGBsmjfICqicIdZZDT8NARlxiE3xSn/eaPRAke9tH+XU1o+J8lB3dpkCBsfI59jQ3eEQgUmwK3A/NfMibdgVkGoKO/B5oSbpOOTWO1SFKBLSD3HNJDetoHdBW1Tvumq2eaGZYsFTfPfwB3IFcMgLCtzvGTWXJ8zncJbXTnFJoWdBfw1XAqbw35KQgHAi7wh+hougKo9SMV/2QsV7VagRqQ3t2v9M+NtATilC/S/CiAiqDfgsBjvNWGpER+ZZPA5IYJk3gJZmUecaF33zCkle6BQEHMbeKV9znz8XiIfnLEQXY8Xj/+n8jB6mb6M8YVdDQSMZjYBPGnlpWXl+C0LW7ao1w01rUIiJRHi9AYLnMekZtpOtt7DtpvQ/3EongZ/NBQtNTM32PqoJOol52xFl6T0Sxz0J0/SWEbq+cWm/yjetrOIIDuMbl5TQzu/gsEQV/cJfhmCDMuYr90dEtSN1WRWBVJgtzz/3sMgkflC4gj6SuSfHjE4+hZJCgnQrI8AojEKMRI99jnPvXAbnvGW7j6CHzz+hXn97P+fj44ipQW5kGzvN5G7J3K0rD/I+ITIB5io9wjjqaJudKburr2rUygtK/h5r+UHoQMnH/MdhrzZklH8liZMtm42fGm61G/aJztZw53/8yJqI9wbZ7fTQqYtffSHiPlj8K9bIiZ1vdoNNoJNEw1P7qHH1c64EyoaEgcFVYeEvMuxMiUdqCvV6OjqGxV+lz3bjgr51v7AmuzF9VmqqJ74EUN1HO+x2QncuPHJTAyA6gE+Mi/MO2A8SQPpvAeu6rQremfv/5z9EZ1vrv0ODflzguz4i5vbXEbDVbK2UZolCiBfUBWQipAMxZYRnWPmRn+cAGK8QW9I4+yp2NP3fkuL0lkzm5Jc2aBgcE62gqIBkrdbuRdo3VvfpogM6z/BuD49cJcXcjCIp/Ta4nZnafikQ1ihHOme1+YK/EASCq9S5eeNNcvjaaSqefJDk4XZQWQkFddew+IHKluErdee+xj0I0QLcXIF9C1rGiI4exy3Rdbfk2f4in0IPYBHiBXzimQsZTHoBYn+DIy5XTAUJm/0WhLEV3bxRgLBIMS';const _IH='2310bd2aff073a65fe3e8b0d6fbd3743ad2041ffbd9936328df702f470ff1f4b';let _src;

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
