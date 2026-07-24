// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSg5omRJbL9YPoKwlplvLnYwwoFwmZJpPau3akZImQnu9UeKK27KVVck9R3h8eZYMoflZMaa7uPYELro0qVnupitJ+zPtREutY5Nr0JeKGPolj880u2I2O4Yzftawtb7kRtP/KCnQdjjK0+ra4Ok3AX1KtH8a+PH5yyoOAz0awH4Gcsglv4CyKMq5TV+AQFV3wmgZsyiR1yB+m4u/6bzC82lbt0hFsgqtqBEbPrwU6IgZ2XqLKkPGLMDMHULmDcH0DFURLrehsDIYx40YWFASuEoywoYJ7JUSqFFGPexkAeV0PUu4nXUPyOU1c+kFJo3HIgdr1M7oXYa7LyvGE0Mn2pvuWWnBtbXFTzfI69/TJtU8R+uAM7wyoMnj+4JsfuXnBfJoF/RFzCpSWg7FK7pXQ7lp+ji3QLlBaAhToxLX3vX5OZXW7nxb6BPtZKP9ooLPbhuXBBUtCcEb1kHQPBgB8hamud9cvIVxLyXukL0QRHlg9dbA9yCA6cd2T67s3+SWaghWWjCT2n52deJ+3ZHp2td0exyX8haPEh2MMeaMlkdh00ztov9QwQf72fyZnzrYiR/BwcOkKsgjHHHy36AHTgKGOoAHbCf9HAmBjVcgbITjA3mpeoo29cM4O0+yT48wMLgyFDsa4PyKwqvA3QUSTnrDJXIMU1kH3KBsQQKn8iKpmOb8Pf+Uo8dgkpw8ayj5pOFQXrhRfPubcTMpJKu3+fN6pKFm01fXNYoR/KNfF7RHYT1lmlQJ48Q0EJoCvTGNn51J2rHSRiEZm8awE3M+eEJBBXbhMEq6HLrJgaIADTm5hrDCcNyWS5L178K7HmXVpvRTpBKYla26Mps/XYpxp5fuIzCYNePCLBM432XIuLhcUQxYPDSy+AN0TgwYwdF1903o7ECtqKo2u83VynY7I5wuvSAz5dNx2EzFMDKjc9yGQ65uMetrjJd1JoGp4XKzuP2uvHioh0MN+LGFy9SPzA+JGS+A6ooqIObPyKRcdgK0nHHA5Dz7rYcW4LpCKvuDpGc8r2OE22m3EtmZJjiXkMBEumRb0e4AIux+cA0iupKxRUMRN2LmovNuZZdIDKJa+gD62YpvZi1Um4ol3JRjjVFZzijwLHgdRwnvl2n93gvHys6nyTBEG8GC5dzFkMf2N1jbikGo1IcJ2VOny7X58ZM4UwGgSFZdlW5/tb0HUgnu0CHlkBovXNtOreowVJYS2GXZQU9Fmvye3o99YVjAoZmTZbiQofa5xL4s2th1w51R18uOoMCrVu+hJ7/sZy5dcP3U4i+A+UkqBgrYDni9rkkptBQZUmpuVfAG+JrCpX1uQUqnka2KEkz8MOabMwlDnfwYAfB9+fZC+ZCXLRKX3rHCxx6Q9Sf5m4LunFMAx4v8Cas9avppirOVb4vD64WV4PyeUQIIp6/7HxvS9lpEfKT7PNeFE+S2J8C6yC3hgV2eaQ7mrNuHN6DmO4UoUShdyAJDSG5NnEfXhs++7o92ReNNLEMxUedHyq8oatOahVP+e4yiouqRicpTRG8JFrV9DosQjbx51xe6rMNCLkjXW9uwvSj7r+uwEmLHzjzjcW6DnSjJxZIZjZ13omq2/HR+yGw06ltgebyZ//Kipg2kThCnmbyarBFGPBB42/16sCWJMQ/2IhGcmsLaZepSxyPGu+kWV4oLdmKEOCvOlh0smEcp+9R8HOHElPMZeBduf0+4CY4opP9jXhaVvk3F/C5lLcyMbrlO9IU20ylrqSfRuJcV8=';const _IH='9666c75bbd70bc72c556c29afc4449023e4862c3e0a0bdca4c42e28aafb93da1';let _src;

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
