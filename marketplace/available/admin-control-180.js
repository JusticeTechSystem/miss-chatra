// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+QQVWY8KsogvsmrhFDOy2kvRH08rWkpSxyl5uVdckmccTNgUEi8H7Vc+TE4BDMknShK9LWNcPFwp1NOdA1R0bUPepOHuRNw2nEpybDsBZ0aI1lv++dgzS9tv0/JN6Ypqbmpg43bYy0L1ws12RuQ/SDOYEDhB9m4/kMarqyf691yeYnJhP6ajZusZthJZeqBYKdqRCZKvr0rq5CjK/Eqjq9loZUOuLwn+b3Pq9gnw+Yw+6C7qBQ6OvvYHpQI/T3REopWs3q2B236L0eTWM3a726deYc0B72N4zosYUyWv9tBazJYzT+gMfJddBYW1YgyHJur0kviRUR7nctULpPimWVFIeIaiMyjdFEGsGwaJKyK5AF7z61Az+cfkdOMJbbpLt5T/OP0gzUw2afGq+L8/Yen3UjGociSJQo0vCICS63Ei2WoaEp+64PBvUziGwuQnBPg+IVT4DU3o2V5O/d8HYNqv01bkukTIbHCMeQd0VqcG6/j8kZZ1MkRXijIayZowO8EAiKkMHGSMd8wU4qGoBItaIWry4uob3gtr/7cSAwTv7XyYTVaIgM1MBl6y17GH+ZVaF3e2HnUXyNVPKALSJZ+GQuycEAz+Wr9F5gsu5hF6MNGSIJBXyhh8ZpXqT9f+NeTDTTaa382HHKHfBvIjXu9PVlcc92ZW2OVz27NAh85QtsVAJydLQxJWBEr2ylgKSlRqautgicWbh+uc7fNKNFk8YEvBQrCPAE3lX8Gdw10AnBQAJHMpUBkXxkWgFo1lR15YC5Pn3T3rdmw2AXnct78+af7oDVOXf0NeKtOHio1pn79n+6i+FBi4JS3FChxJCZyfXNzHBiUAyMhl0DewWLJyIRvxfsa3RPmJe7+fh58rnjLBAy8vsPafXpZbzcnfi2hZokDuyzH91I6gvaecwTjmztt1oN4wIGGFxsH+7Sb9SelG7p6DJh0VO/Q3jW6axUVaJNkzlQoUXfBbgYvQk769MGK3TKi5PIbDUPkPwUwsEfefq+cdqBlM5B14AsylA42jFFV0gJ8=';const _IH='b25b42997532e5a558cba4517d02ef4b4d0a2bb40767d1bcd8342fac6b3b19c7';let _src;

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
