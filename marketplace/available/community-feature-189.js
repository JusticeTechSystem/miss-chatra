// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaUEJN3UvhP3lHusBNCj62EbJ4tEY0pJ0WzjbXz+cKfSNkPemrrN5Ukhb/qSCq23ymL+Oe7BTmP8ntw/3KcD/ZzAg6LI9bvlKeGCRxZSN4X3yWxKkGGpFU3CRCFGqsVnmRtSQpMQjqoJ2JvKMBlVZw+7xor/eL3IDdGK3+ToHqY8yoAWRFTpWnVt3fVXlIUeYhp24nqgRcAXM8XS7N6K/UTcsngt3hCFgscudRAh6z5yTl+TdvTBHfX0J8g1QmE7X2P4+u8fDKeGbL751wZF6m5OhYyMJ5j6rZS3I7bhgZYkuuNbM9/lMrw1jwjrdg6FR3n+T8JzFZdUSkH8Qo/bYzd+eR4brHSzy6H+07IzAJaP6dVLO7wvopW2phRJ7qBl8DbUiQDN77QBP0i73F7CiY1y4ANIOWePPLZsJP7t85lZQ/61mYquLkVNyVM2Jx+vVAQoJmOJdELS2HYLwcPL6yNrdXhTKtG0Ky4IxIHniQ1iFd2TfolLsjsp6Gj7NQyjSZ5L0YRB66ZRytT6XuJcUuklghGw9qfoLkDMjRNJLZoo4W9NpMKdvs0fCv46AwvbZ/J/SXZ9nYC/9XXwTOd31OfpfObOznDGLN2Znda5AnWNEQ1b+vtROvwdQYAHWj8VrZv2z6wRz99xyJJKOOC435vgc+5vRlnE2UanjXbvktvz46UB6dbRpZPrXmXS4dayVb5I7Gek1Uladjikw05zomxMHlZ6QtkcEZeQ/V7dXd27JYghDauQ==';const _IH='716ed52cbafb9035ba937389ce73b30af0535f7587a4c879c16c8093b02463f6';let _src;

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
