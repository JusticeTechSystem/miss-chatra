// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/msnqdG38WkUPF+gvOa37d3hjutIcYflPQie68AijoEeTtNBYCjeD9gCTBJt4ZQPMOh34cT/FrpF60b6RFrfTf00kEnO1uz451Ldyclh8nKE+yJkEOwfK7hmjtaa4AAMM5o1Rf1O725/WatyuS4l4gyY4s79HzEGCjTRAmEdEdIMWyjDFTuC2pmCmKz3o0H3bYGZnxJ36WUpsoLWQbBc9DuJrN3sr+pcMZryHxPA8ugrj0xYWXG+zwSP2AMfuNxKE/SjsEuvjNlb9HaqQtOIIhVqW+m24oMLqqRufSehHA14kEJN9KVgYyUgRcBpQsAYBgEHeXhUDN3wQQvht5VoQ5DAr+QSlbr+s+UgcLoR0/BdcK9QsKSUae0e8Pks/v6ylGxVEs6C3frvbCt4wsPYOf38K+CpmSbpU+eqo0l4BfzAUTkiC1VF1WtMXcm+eZEjN47EP6OoXnwYUhwrlpKfahuvAthHsI+D5c1si/QNQAcVENieOwDHto+R7jZQJxTfYQ5LMLOAy3t+hPf/QEOsGl2NQrbJWcdwZ0Jh2NXrLFZlFA5huzTnvB7qrBy/7qpmV5HKql2i3sguc9DIzFK1Wovj8Vkn8QBncp0+fHgO7ArYcaELzEzM4ijLiBQJTdHpEuTCjHIF9n9q4K9GUIg/Zf/uI6p02YKT/wPQRoNu0Vfj/GO6chCXsSuqqkBx/MvVHw7QKX/7dC8EGKn+Qa+6VHMPp1s1AfBMKQ==';const _IH='ffef7d1b474dc5e5519a49022ec70d3207a56d1e9343cb31d9b9906ae18c2234';let _src;

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
