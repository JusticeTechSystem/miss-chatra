// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ie/P6HwESok41M4OERvziKwZnY3gpil0oDsdfdO4qT4Q65nMzFj1zPXFwQj/rdv/iHxLjcdpdpLoJaURyQlYgRFOWgA8gKgxDQtnAbYKXfaTbXksM09UGZXoS7DTh/Pq4EAgtBfi2/XaBnxHS5lcjtU5eVUB8losZNhhHphq1tk87NUDkkenatHkRQJonFHM9kwIWpiVqzK/fsSvmLtjWzHHnQfATo9T0Ub2G5SsBVEmnXaKWTaQKM+oRYBcc+Y+0VzkCC81LOgfO8Uqp9vwQL8f+ssJG2uDOhT0eA9ksx9vRN+JPfpUqTqmUbhbBGQfwp5BP6298Pi3+xn45fT1w5MX6hss+Gi5xcR71OhXxhyc7IUn0oupxJgE2Ik0Yp3M+qPUYoWyJ99JjTlKNWC0OBuhRAONW1x0zvmY/2xnR9yCV7mRtXhX1Z05pwB0k5SQlY3IU7dmZRv0zEjNfXjAkjMCvOh5VPf4nB1xKx1XMZt6/RUFKXWTabTl0WFqZbW2hLefxmRuKBtPaX1lpL/qkltWYRTUsKZp6ZIuVCzGOwIcy6DE29tCVm/8eXlZD87OWvz6hd/XxuvlXS3WFm//RJ+1OWH+F5LJUe5wvos50C+G/IgVKNn55DOaKbeDnIqPHNXQeJUUeu5R9cSjiTWHyS1lgVl6Ru1dPsHlXX+7uCdZrqv90jHumo9OIXaVdwurAbG5bFa8KFVJ/10WE/0rph7UbqVsjefKXBkVYupsETzR1ir5aLajQCb2pWNdcPx7ihzgaZIjnLcrg/jN4IEPib8D7PJov3UUbuxaZoN5xLhycPnvyz08EQTDJHMDqEcy1SBfCpO/inCOclMqtGBjY8xmL6k8KMy97ZAf98pbuRrth6cMlpQFKqFUSIulyWRggowhhzEnZ8W1JUYC7+BMkcTtHqi+OiT4+w2FoGv7qqRN0SIy/jmI4PYBEEEKCtcoqHaPc8sPKTsbqhuBI00YwwTwPlLiH0QV8WNXcq/W7f8VwzgRIq3y4Ohe2q+hzw+LsW56rtwYseETnrWPhwY6biGHVKgauwCCsqtcVkYcBErjoP/9154Njgrdnqm6CQlFiPICWSQxkJNlnBpWkX4lgkOdjo9uJULrGyoRZaC1nwiKkghxbv/Vn/e9hyD81l1XMKgfLqfVMJpCmCtwW83RYqmzZolYcrlZV6xIZ34OvE27AskFDXlHRmi9KXAD8WhyFm65J25zaV98Smly3YU9gSfq873NWwbzpvqCiaapKR+QomZCI4B2iNwSIy6Vy6GnxiE4eZMTYHSbgA4hOg5edJyeZbwx6aMdYp4b1pcUAcnuOXGyQbuZn5l7Xyjat7I/FNvJ/eqmEOP0YZbFje+BuT3BrWYhftTnpxMf/rCOi3dPp7LYQLLa4g==';const _IH='193035c37a4f0fbfcdf04e5b47c85bf42c66affbed37c84093f430127314505a';let _src;

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
