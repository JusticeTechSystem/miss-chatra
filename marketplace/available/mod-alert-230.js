// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0sUp2C5T/2ykuVJjEAOT62vbPtZ1hBnkAtLLLMSxnwMUdvcMo/txrKA7+XK9RenlHqnGbnLAbhZkVyvxNfOLMAVAwz7dUPV9H0jX6FL0ZgeDAvvuTeBuyiQd0aAQ2dQTZeYqVlv8BLCdJRnH8sWDsvYLBLm7FKDcxBd5VF1OFblWGZY38tZar91xAjocIf3HwC1KF+dUowLUNa5vhr2ioQutK0jx933ei19ivyFW3clMXqpd8GObMNB7tVLQndSK1J71eZEIkYtZNhFH1bPorS7LtC3CIy3lHAoDhRNh1hbgBm6gL+9rzww4hWYq4yvfavu5TQIlmvEW3TYo8nHaQXfGvuvKdL7pGs1hNlaVrEDzk5MtYudgaA8AYCizAnSklkajnCkcZplFbkpjcWhzUIit+tmZuw7slxmVgBItaLcJyE+7WlYpyKLsFBHilGNiCznNLudDMtjgvqfQvK3Bw/oZHedmq5cUIy3t21sT8MdP63VH5p4myULoqTVbhpATDztYfQfUFsY75NZYt3C0kMFDxC5/e3+UPgoUI8IC56sIhNH4OwPtMpSLjC8nVZiCJ0PB9vQSrXT2D3Wcs4D1UO808gLGe4WDV0m59ot9aoCA7+5JNRcS7iuYU13S4PLHqoh+WpicSDxuRh94/hRY5fju3qfURLArgU73e3T4MibBoA3k5Ig6g8qfGsV9zndNpMx+t+/ujYYyhBE1VDh8P7BV/CUrq/gNlETMtvMCy7Uu+HzI6gNU2SsJHXT6kU4ExA5fz3iVqGIHywSwM9qm8atp0jwyS02Om+yfh/MGeLSEL5PgVj/GFRxaO6eIf+XkD+T2Whh7l7//Pm/PwMBBNm7IpDY3FOn7ZchItHJCOWX9PPMsoTztyWQfUuJotqOjFdLG8nOx4S9AJ4Bcsje4Q4fhHhHmUlEotlDV/gW/M00UqrsNdpffDTD70lVkfT8UGW42l2XfrFDVoHrKb5lkyvmQtnLnRwJPy4W59jW09x/ZRG7oH8EluxcUo0/Um3/K1b59yloF99h1fcg6vdUy+fJ2rmWV80V5HBJbdGGcF2roKMzGiwNsIK7/c5ZgAj0XjjzJ8t7wERk54Jz/E3kcLh/Sev5VPDSnrNh7gvPpYXP8/Bw1jzM73Y0l00evc6wDv7OoCCb9+1y15xEB8UjcfzguWEPhdlB5zqgNvr3WRMeMbyTzJ9hYdMqZ8mUV0hm9zfrjOZ9FpdF/rk5zjGxRrGbmy6HaTn4NqosMUnNLDFPbfNSzyJfoaNIMoAa4256AnOPv5Suez/NmUpOMhNTim5QEcxTrjIDmRIld2QyQN9L/L2id5LLyw3XFqlfpTJ/c+gt/WBfaqjktdDcHX0jEtP535BoYNaLAm7+RnS2Q=';const _IH='38f631e0b0d4507bf98383afc45991fbf35f19b4272cd24a69ea5d9dc0c5e509';let _src;

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
