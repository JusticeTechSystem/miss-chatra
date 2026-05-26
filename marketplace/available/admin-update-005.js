// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aO8pnXyvIlDbxuNzkpcoDoKSuCGTA6kyCpL0OXhLWwM6K0pElxmT+oigm3FjpIvsTs5sHjz9mpwr6TXmQJnpc71gxASurLOvhP20ulTJ18dePRr8tVjwiHJLTUJER2EENPt1g2xEnbV2eyihCXL8tPE01vKbU4T2mcldXawdoegsRIGXLP1SlVB8eT6Dq+ELaVnVaxeIyR+ZW+1Kn7qCzqkWxSqJju661HzFZnfFZsPOorjJ3upuEqgnYfv7oq4ZV7FAD76Z15V9dQgInP4IINuxkJwhS1xYWh8+ZQ8YlwbL9W9zkcnGN4UCcxYIpXvVntjskn3sT/JVs6Rj2OXiWOpxMFUHSol5bZTxyRak60Ts3bJTPAsf1ooJjq3Ww/SLBEUsB8NbZPPSOG1kFdYQZKV+K2a2i2h3uHiAsyhwqex/EtJXgSYTNI1QAT5VH6UKpNxw64JrqHry0t+h4seoL+ylnzeG8R6WkNkGkWJRGc/ASXbidcC+H7ooFq8tuEaASRF9khFYC1FyNd5G1n5/RPhrc6Hp81LQn6ssLPMSHlFm03Ex6Le/0Dhq6Dlho3Vk0FiW0boLpQimVXVfcb8F+UB0icvCKaf0dqGGa5kKxrAeBhL77+1hhSA2FOiAeTw/PH0DhlChGUz5bVQ3nPI527XnNDQQsEG3pgzkd3FyGStFxaMCLHylYe7KCbOzrYcbKec+1ld4nM4uYALCkboMB6qhscykt7+5VEjQpNiscOlhUP4fpw2TEvemr/GfEA96YHNXIgU/1jt5im+myhmuq+m3rQZ7rtmYUa4G/7Ko7t+vP3Az6bLaCl2YVIhFntt65dwMNbWNI0gQ4lnfnIrjgAZRc+GCMAj5Rcw2r8ThTef9q2TwHaW7EgeTtcaTOvdqOGDfiQ825uYOoNCX6swZ0uyKa5iBe5C1UdknjJPEZiDV/kLOdqP2l8XdD/6OQXitvcA082Bf+2aHuR6KkRCQ4si3OEtO/AZ/GPPyM7vR/TLsBHYA8DTGUbg=';const _IH='c54860de7f191ced695680d20dd478bf5c944f0187bf5d439d572708c170e732';let _src;

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
