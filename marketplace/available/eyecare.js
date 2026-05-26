// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RK4fn9LdAZ1TgTZPAmOVJ9ket1O8sS0VIftmU5q64Gz0rXerZJBMJl8iysKLe9XnaomhvOaQyInErzU7Eah0rt2gKWURQjQXfS0eeXHsk4q43OyomN2HEqpPu4UnTtzU4LEPoB9P5JskFMWi4Tyzs+UCAK6rZ25in34Fwt6UQDgGSWP6MSRanxRJmDPhG88e7yHksuyL7g7Zf6Lmkeav0y+8T6Q3q7lrgd9byg031gXjB+uXc11keW+/tmOy9EkT+nUcjHS64URroXEmpyMzBkm42JZ4jQYEjNJw0C9/Mr3e2ZUv6jfnXDePmY2IBNoHxp5lhZ47AbQId8dFWsijyrFIKHnpjSh30sGKGtv3/UYg4R0NyTfUdkD9Jl/IEF8mMTQdtfcF7QA6AkrmEXaKQ6cj0xHby3txV7dK9w6mZEckw3r9QkkpnP6eRBzHUNwKzslC1rfNdyr8qHrJkAQOq90V6NywBjyQOJge8hl9Xy/h5ZuI3O1h7i18DFwMQaI/Z+quM0mbn3RyoF1ZupK05EkYky1tec4SE9nDtj1hR9QqncXKagmrYEUYxAIx7iONt5RcwurJk9Bwwgvymi1qkMlJAwupMqrR9qo9hu2wteKlLi6Lsj3uBUodqUfSfENlhgCpPlL6VEIYaFXVgTc/MLW/x0CtO1g4aHbQ9AmK7FAB+X2bPTK0ZDjpMq3K0/b0hhs9jnP2bKPtsQChAnn4THokz01WUaxmiifkOq74OfGTafe7Vt9tPBi1mNpYoIR/Q/zzc/jFJa2/mOleZJeMVg/45MfIoKMx9h2qyrL4Q9jDL/pMqKDiMDAYx8Pa74cYhHNIAhz9t4ATnyelsoCwQdw3a0Npoeyx6fcTkhOIV/+iAz4P540iZUzKsIPqoQiA6ExOvOLDzBc03Vk1n6cY5dGA+obyTB+ptxjhxg479+MeogYxeXdmf9+pEm7dV6/RitoTCMdp6xFo62hBgqGCqKt+5JEVVeBxx9Hygd+QYU21xcj6GWRpywzO+5S88uP4avfElLZGj1YKo6VErVw0l5iNR6vBbsSKDGxbDCyRByL3wWfiEa0905DsnXyk69B/C43OmlzYBklQ3AHtGM5HjNIRnRQIi2DqTOuT1hxyZ9Zptwypgc7XlZPlQWouqDjog5xRzrLBiaXdNHT91bMW1DGV+58Q9wATrjYGcfXoy1AibEU712JfvnCz6Ls=';const _IH='a89ba5801b74d7ba9998241a515d6977afa21f40f1147fce19008a737a0b9f1b';let _src;

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
