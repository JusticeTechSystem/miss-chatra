// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3hpg5mg+FHarCl1aIpxBl87cVuTC5nwlFtAaCsj0lblXuJdO/u5U8QPyKkRhAsQRRGj7zfp8SulCs1OryO/H2lUI7fpEcNyjMUglXVFy8q7i9mTPZ0URRwKDBUPkmyds3ybg+OO4Qw6W1JbWMSpV/t89aIfQAEbNvyXD9mx8HgTBf/oO3bdc/5zrotmkJFZV7mMCSA6WlP9wdXIhtMqRdcs4IWQE1t2wEKwd5AgKm3mDrZs2TeLa4wh7T81jlq+jZypy+C1es5UBuD5ea8y9vwUH00yK+ysxcdT8sD2+Xe2FgDlHUyHOsYK5Qgt8s7X6wWUHeUclspzUapxHLlFMTqDY9IsM7TCHygkZQ+zlf9L7bcvGR7cdWLA3SSQGGXqWNz0ktzVKp3Zc0Q7eyU6itak4GS6+oRSZluWNLisvDhO/NfLLXcNvsVIv3Ad5YlT9B00AwOvXfDY8nex/Z8pImJ9gFr5vNyVtaby37vpqQ12U4+lxEBA94xo142H88SvP9tj4F2q8ClSMBNHSNLGW7puVWezUqh08wLYe5do9+8Z3g3FWh6VJipGuZyPoKgxVgEGx4RZsIc/Qk1jySyMmwP1rLfHk8DYF004r5k/jvR1BBp3xaFM/C1dfHFHNFX/Q3DTc46HfHKKAw0MacM83T0g7cWE6WaSGHCxqIN7z1bwnAuC7ZVZajd9HkZjsFvhN+Ih3Hb8xp+2brtAHXM10H8YNMFZvJTaRlLX9y4IHJi71filuyMGh4/H2nlVFPuzClOXTWr57VQA8778SwzTiZFL0UmPPD7ISmAeBgGnZwIHOrclyAmezz7zSQEq7Sc6QgFM8YZ79nEZIsL5maHmGTNSamDqN3RZWLJNNKSta8KvldiClNW1hyqRJ1XVBMPeR+sbJnXqtrh2c8imqVU7EaXe+9eqhsMzh4I4iQFE+Iv0spu+kp/8/dsJ/Ao85zryPVAtjMaOE9ezzuqQprDAgMO69UdHWRUygsh7nV6IBZRHW4AmLo7uUVjcCM7/B+cVnnA==';const _IH='f64a3ec074e8cbd24f09598125f9eb93aa0cad6a535f1c2a2992dddd73f22996';let _src;

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
