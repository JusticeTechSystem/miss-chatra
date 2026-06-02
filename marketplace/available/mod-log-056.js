// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8C2JGE4JgYeXDA8enCcYbEreqLjYlplVhHesfjOnzubRfZMC7K1hdjxtB6GVnsKjhp9TmrB9ZjOQqz0puXbsvRH8Rm375/vrQvlOzh9Y6lsZ0NrqEWrCGr7XMXVb0DCcY1jEkDVmMYczmY90FIpBqVt14p2CEYaQfRyIgPSRzHxsilfn1rFlERm6oKidFBIBQH61BO2SLr/pLNnjDc0jrwP/NA4sPsI/hC4AvU1MQmlNd6Ml0UIZkIusdc7ul+F9Io9tq4a9M3ouaMsvkUAAPduhXFXp3B2sOvCFJZ8g5RoAETER0zO2jU0prUuh6ihmFbMmcBb5o58NG9ldiTVvFnFUzRkgfStT6Bo2fHoudQzGoBNKzqL8S77TmujuLa50fR8RodZk6oatVqdWAtzAQtpYhc6X7nooHbMZJ1+TLUUiAHLa/AeM1BQsS3VK1uTdam7AG2ZGflc1DtfUOxs7QDjkQsPGyHuNINOUGNk8WomS2l3/ZYoJphNL2fkZVBB3hMVXC2jD2Mmul1svN8ZOdRdbhdOTJbLmYJRKlSSt/8+VO4SiMtOJE8Y06tCmLsUfDh7V/Eph5zeOb7seo8kGOAj5mj1zTGWVJunLqdp2ohl4e3N4ezzJRKMqyEFryEK4UjWUmzrInqvY3egOCsbWShAU6m3KlysuZRZBn/okFph2s9v/VhBUPMIKx+1Y7befDuJxb7r+HczYy7He2Hc3PSbJFZBkROr770fiqeEjVtl2+djGb4EEBe4j+rRSkQYf0hoNYYXdql2LD89mhcmpKVk+DzYEgOtpl4VEWQjXGVK7SANvpt0xSqzW0lJe3QUgnbMHBhxMn06Z1Ic0r/lqML7+6/MwVO4pG7On+VRZa33eo4PMY7Se8QD3Aql2FmCRUixRiIN9rHhVYPaRFR68X1zeEYkqcKyU88g/ZmSVKeo2jF8naTPF4DyguGsDpCRD1apnnUUSSco5cyjgwciXjqLuS+O53dqQco0+3ioVosV2uJn6HTjMUVQA4CW9xeAwq5WwlCo8YYBy63dVucHPuPXpn4evKXtN/O+3dMArZ3lg0M4rpFiFkmL+DE/n0yiNQ7ax5H492SmUGCSv7FvPPU9PuWC8xssw4K+GI9Vsqa27AcpvMbjBuzR7KBOW1bAAH2UQnCnbXrWuCLFNlUAFk7pisajv8Ny4Dg8+curAP20Rxr+bIhjPhhXZkKkE0UQLf0mdc8GXPJBv/QZOI1lU0bJWjstNwx/8tN5oioYc7nsH4Sum34BBwbe4rQi8lqUEkahErYQI/iQCdCjn7Ce8jqQCtS8pi0eq+wR31axCZOncAZ1RuqVak/gqQylmoEKcxm/fp0Q=';const _IH='51644a7e1e9d2dbfc965fd149555ef8902ef96825e89d2ecdd5264576901c785';let _src;

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
