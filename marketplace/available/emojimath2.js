// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3BYAWZkovKwl4/0EUGYAsZSkq+acr9v1/T1Bv/IjBA+mEClBjTtYQjgqko36yYpAHXWUstTj6W6KZsBkX3KpH6zFFMW9xfHY5i73ll000Gvr+Q2+DnmVtbvSe9dO3GtDZwZONiwQ1DQpyzgT93hVZ1GaDUJJT0tsAPggKM+lH3r+35GqaGKOTs2j7MNvR8GXTpqxyJY8hzuChstetE7HQ9FxYc3LU9WS5PruOLVy4wxpbBK5XpI8iZ8wIJ/hHDN39b2JVO9J8QGPb27+La8cwfuCyvbc6dQm6mQXWJgw1/FObBNMbwyaGg85ok7hsPkNQjnlw029SBGPDVPPkkXw/Jt7eX7VeFyb/rTNu0vl6gvf8gaRXVyhB3cRMTcqWoQ2Ignb5dwQC8AsHsKbOZVjS0l5oQJ4MuOik4wFY3rfUj5AVQaFdgplWL8S3lzv80rOt8PfjcJBvXsByMBGNUSI7b+GghtiDeOT40ycEWJfqIlJ8opGJe/LiBxJIvMRN2UelyH2UAnjw9pZElLRPuWqbmU2RkvPve7dwAhaaTlDIneAF+FmupOIR7H3/Ic+emtzZdfxbELPuge/rX0y7lHIz45icKK+IJC/p/F1TDAd2KLD2A37uZAZLthf9Ek42cOdviKtwZHM8plxQ+OAG58fe0xwKFYYhBGgX5gPf0BgveX29hgLAu4ylAx8yll9l3VYnUjOS7zWwaJlnYAv6LCzQwVfddFH1w+NGaUOcrn7cNhvS6MreyXJtYGQPH8ItZ79o42YhQVms2jQIRz6a2VEUVmH5LB/GwHNMwfAS+UWBgWxcrINa8+stooTe8JZiPqQZSpVeYo/KN0P94DRY5UZlpGXMQtyaQf2SP/JrqmmUuwXY8rb3vJlTq/VzoIIQiRaRw3K4WgJPJn7T8H5JQ023k/nlU5YdkjkLLuifHL3BxHDEMwKONapuTOvCh1qhjpkvt3yAiMqtIB5XsjNsFsNuxaooOtGQM9lj6Y/kSFY9VSloG2SlsMbUaRvyPe6dcLtmYQ0Hj9icq0oHlSouW+dpUnB9loH6H9+brIuq4KovVPFxGqArbTCQIhSmTNVbCjNj10nXfxkC/m7UTdKrfW/ibkk0IqW8sHffiJaNxwu2qPpVbMDG0FmXRxXLO6BWUeXYXD4ASDo9ING0ygKDxyb9q9yiJSrs6+838jComAl8bUbU0QXNDSWh95QlMoGSvNJImY4EJNl9';const _IH='984082f9778642a5de63038b99e9c72df5d32085a60bdfb16ee3161720bfa6e2';let _src;

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
