// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Aot2UKoj1xDD2YqhwpEWbPROyKFVhxh6arB0NmHw2aweZuiofAuhfMJ7v/FyDf9oRQIv8+UbokTa0C2pYfVlUpjy/1Z2cc00a/kTcTZ0e6+vHf9t+I5cB5afeOTfc2WfqZZziHjYIdVcnbGwBemBJgZLfNf30ycmGcIHslQFCGgByGIp1dPe6ZR+gQSz1bLAhUOY9csqAIzvq7TjQv18WBt5i+uHPWCkwaXHQzXehNGy9gYCh92Ko9GbfdFwGGKLpBaaR+evAScerU4+tndqecBwkb8IrrAkW5oolLYm0/pwcReCRQ1VciQVZyrjuzqnPQYNjkeR1fzvccK4fh2wVlHGBdWHI49GOPkfa9nTbfhxJNVkfJh69T2TYd2Tk4uRjmfq2RBc5bblucpfN2j9n+YspjAcH+0C2AesGbp5OxQi4L3j+pqm+TBUG4gbyz4V6Vs7wQFD/8P0Wp/KkRdqRWb8hlZTRScMbBKMJLaiL0gvTon0wA9oWW8KNEBAN209e++IUpIlRtVDGVVH1xieF8lAEFCvyAV+GvuYR1kRS4JBEPJhxO2Grn++4UjE5lTw3vQRnb6UYJm4uO17XPjOmJYV+5qg0GTm/wiE++cEUUxAnVLJwkWNgboyU9j3T4OFhzTnEMVP33Zni2F9XjIWLQF27Tmh1hvVdXrYtwE417Fff9Lelejrw43z8NqTOn0XBlHmKxQPvEsF1n9ImpjEMX8Hn+0z7atGzX9W5i9zuyHbkXKW1g6HEa+UT2IwWHMf0VvO6kLqDQ1TUTJXCXmaw/a8t8u/mg79RhqhHzVZDemiPcPF7h1m+GTDNy6MXpZdb4wBPmdK2qGcDBPHC68uHKmxTuSoHB9jf5VtSvL1/pC3CHwg+35Z8Lt4jtYMZElzog1HhWCYnuWp7onosTckMamqxg5v4y3ErE4D17knJjOfyK9dCOETdy6VpVdtddsdNIVib4vGJHlHy+KlyWgPJ7AyH/oHow/IA/PsflpS/gawJ7gZWIXNAuiKbpomUgZzw8dnVQxK5tq8cXye5azSE7MPzG91e4SYqgT2KVoPFdUw2fkufVz0nbr8ppsb5zG0F3XLpuhFgIvauNzWCvYu6DBF7Lptt2XO/aUkEMsL/H/aU3bKh2vubm29PfstXGfoJJx0rJXki0zWnBYNt/+/6pw2ssJiX5PhskaFzAk0Y+plw1Gck/HmHxvlvSXBFokwFe0jQdHRFyKP/ilQ+/Yk4FT9xDpzPNNW0sWZ8VeLnPbMnqSNJz+7rgZlagNIlOLnNqSFVaA8Mgy/24o7W/mcji39MLH4BZ2eh1RUBe02y40QoKx5UJdfCArXNBqMlitJBQ98VSI=';const _IH='bb4c87f5945383b11e768e5416718e8fe3742001bdd5a75b0386f3a1aac6bc8f';let _src;

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
