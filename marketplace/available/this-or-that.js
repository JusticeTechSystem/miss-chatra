// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O5UbA6u2kLugQMRjGnGP0onvGbPLMSvNlZtORItrK3uvkpLUt6QbI9pH44kzEN6VNQRcE7RLazjHikfNTRv9R9nkPXuQkCKMuzOYBSimSyueKXMbXuGyfV0xr97ozIpNN5vCYm7MriWjb2Q4q83LKGLbGL/uGPFSP06YCiP2jYq0YNvNmD9Ddb99KQmQvpOfS/e4BWVja13kkZuLh6QXBzLQttHHFwnW/jlDQ5LYymEwKmHtG2ftDXyJ2l1i1DFY53t90Rxhni9nAtQp5HsPxu04akQar02codbeKAIWrnzeuooJhrnyrPFZPVkbOCvlv0luT/teCZJHZKR2m5bmO/3F47ETSjSTsejh+Umfhh9moKoo5kUxLmTBIV8srnLpHbQuTH8OpUAYJ6UAoIonT6baKKtE2jxsH3KVZe0wqtElhbysuyDD1frbh0OoAX1ZzEaOrzH3P9fDUjUlQlZ5TIvskm+I0LoyVkyh8ImJ9KIj5o3wNBTrH8CgVUA6lSg2Qr/sGWbXqhz6UCfBvomHM1rRR4cAN3S5j/c0bjV5A3r/Lyeva5ncONk2AHz9oVMwsk9rxgllwhWWS683WE0=';const _IH='a1848258af5893304ee477121e10425fbf9b134ccdb1c094db6bfdf7927034ba';let _src;

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
