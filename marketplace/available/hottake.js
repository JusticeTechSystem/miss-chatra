// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bizTomPNB4w6Q2IuF2cARHYJMGywDarXuBT4A4v8VvE24UVBkwPwxmj3Hjbbsbz79LrGlpwRdbc0LUaOxT5nQiRnPnscvXtbTN3gqpsYJo2jLHFcC9ZCZ4wJNWB7qmEJwS9y4Oxl7FcRp5Oka8ObOASNAtOuTo/StPwj6Ay+h6dtbqtItrz7OzZ4zGtkzTV08Zaur4QIiv/XzdINt3v48txZ+gikHqrnCYbRYjWv4t3uADtsMk11sJpWf1Wdjh4AZKexKJpBbmMTHIxgv4/bt4FlVqm8H1clx7dywU1h2X91hEQwg/IQ7bMgotOGi+yKnAVs//Qx50DNhk49qao7JGVDptwlZNdC8tZNc2zaPcvDWvWxMZxDz4v6maLu/50FZCKOV40RqmMEKpWPBR6KTOmVpH6T/kPEHK6ST/Zn2KrgipX1He+pp9XhGOQMrsTXz9Ks6wkAcUHvQQVq8Oz267kszsqy8qePl3CSq+m5apaFcQhAZFMmcx3IuJT9IBOWzjKF3NpTtsvQeQ7NTelweIia06Rt4Aj2a0qOIlXVZ3t4cZHJ8fzvZgnkp+PdetdRkqiBGzMvtODPBrlAkeq7huqkRdXhBDkcD8o/Gbg4X67+B+4GOyAxmhplb8c71tkDZX7BzY1wbkjbg6GtbYQfFVaLuUPnjpRID8JX4MLwCt9pgy4QhEASsmnV9lCxJslFm+UJlCuPdmc1VgTkHxbKwXWjqzTNVD4HjfRe0sj0Z/gE208qsWzHZTkrsBawl9UA0xr9bXN/fWazfELaSyz5qL1VbAAk7EeQ7ib44pBzAXvDoV6lSbdFYe6tkJauok5W3C5RWWdYeMioczfVFIQzUqt4+C1Rk2pi7mrxQ2wl9IuSwFx7zzupjDbqnMlgfzRdi6w9bry79QEwoY+451P3O+IEG+q/vcv/f85MSFCNv4s6bhqFW/Ep1cl3yNiJFwdM3atBng/RAu5SQfjbkFSNpp64WhVjrC4HZL1lHpsHqB57C9rxHWZmP0ZSWhTe/QIbQEJ8XVZTm3Le032Yanp0k6eAUEjYJ4i+8drP08E4ELJcX1BCOayMbChRVuNgYAoYXi9ovauCHegbF6mIEJNrTOcI3+1Puee9/K9MP2J/WkjB/+ePMI8P0npVjmwImGIppkegIz/ysuBfNo4EjXAqvaCjAEAKzeDoXIvRwJlagBqQNO7QqABwSGGgcGW2P7SPPLs=';const _IH='98e056f9fe10359967b7bfa63eef08877793750946ca11d265e219525e9c6d97';let _src;

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
