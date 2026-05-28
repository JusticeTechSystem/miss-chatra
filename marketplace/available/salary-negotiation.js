// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ai+PPaaukpfkFK7ndEz01ux8ZnVcKHMrsVTrLvU6Tmjqf3J6dLsuDzvju/zfTSkX6AwA2C694K3C32liPwXVzmMYSO+CK7u2imvxwy3SuuH1tlAZOhjxOshniPotp/6xsIKDCe+1/B22qBiXfkFjiGNv/D2chHGYG5Ikrffe0V5p/9DNRsbBdajaUOBu6dF0TLtJdqiR4fp5U9Ory2q8D42gf+LmkGwfw+6mom+9NkRXOZrPPg8t5UXPtOcCMpE2pmpnDpGtlTaCF9R+BgHN5rCS8dbEH5bryBd2OlCwxZUxGytlzCnjyc8HS0RS2QFvypriop9P2oHsgQ53gK2WFEFQjslPtyegSFcMLI9wsTkHS+jrk6bl/41IWvUiihU4gCnFhjEJ/Bi5KUs3U0cwmlX95usZlXr/0G26IwL3vh4Icks+5mySt9wcBbyVdHuW99D4aWEHL2vLtFsa7kvvxWVk8+nEtsVliH6MQuiPIjUtMk5tc7u2OdbE3SotEeO/d71TVaG81dWSehFrrwfUfYKtvtKobcOoWT0QEzT33uKNENja15eCFq7uGsGB7pzoDh0St8OVgB2vuX8Sdgfbc6WBKO64IG/wLjnfOhpO8eVev+fe2WqIzFkbqNuR0hzo47RXGWNQpCbtygPHARLS7i4VtmDlC4smFf4zNIKk6pQ5MjIBYz7EMiS2De6cTx+Fv0cMpI2eObb+VXDarIqZURY5BZa3CQAR4ai4Ra6BehmlQWXlc0WNbdRbXcwPJarskp0MQNBNl+YF7J0D7QYr9wfDotOYOLxIYGY7qzJkVmiCQSjoJ2zJpFO3Hh8+kgTZTWT4t+Mq1ggzA5A3mVtWfMhN8AHEzRNCIDrzMVK2Gb00iYyAldUhd/26rVyeihhQxKi4VygGwFy120eLZEy51LdO4uxovItmk++CjYYvmIlKa56n19ogspS9yWydwtmaEZKDHr25A9/PuSoaQbEum734XqEm2tDKrhHH2gscDrT5YIppb30GOreO+zP4lPxZ0KNflO/hk5aGN87FAozJxAyIhGpX6hOw6kcIylHyGQi4H2haSoEJjNrL7qII8KaPElEgh8F8RSitUKwUo352FAGJnDmDzEn+/BDoR/BdXyXP77T/FjXPeRsNDfD8kmhbfR3PAieJ2d6MDUyhkidfHkVDUlBd7RrLx8XK5dsKuwxCzoVCU2thQHd8iDwtt892QUzYvjr3MvbN7KTh39yeUCKZq8WoseGbAOH+C6EKUTxruISLTNcaZGTh77YsGq9UA+BByqJgA4Hkx/ONnml9R313wZy1ENiyBX3VJ9DB6oYDscEFzenOIUIjEjVjvR/ScrbvaRRGt1xCce4ZdaeBu72SpJwRl1w=';const _IH='bf2aabc7a38d40fd024b3208769baaab31fba7341cfb5c5eb20490f998cbcd3a';let _src;

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
