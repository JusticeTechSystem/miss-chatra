// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+wUxHVaGYDNEWemtioJ34CdYhmhBe7Mn+6kzIKM+a4bG/FOanDyYcE4wVkTUTS7/NPd8AYCOG9gJ1J/8Y/H/Rl071jZk8IrUD1ThIyPAWmcTJt5gmp6xwzfgMoltBkpucZSH2N9ytxo9NsRVszidn8NzOzmx28J8DhtFSTonFfPMsfaRvODZBYlCUYBxWeXCwzQvIIn2ybky8xUBJsZfne6RXOWNd0rfQ26YHYENtMLHXXSK0Afo0yzxr3zteZaZtYNDzrzfNNgKpjwG+I15oHUzo2XAhxlvoZQF1JPP4ouip73WQZPPcrigS7w8An+A+mqJ1mjYZI9s8DRy5qKnugPAtv5Q0QwlpeABRhsZx2UFhe4K7EeiBPttMkPIDPreMFg613VLMEFUh2MlIJgPDiEuuwAsBBp2pfzrj644ryZdnOxIS1gALuEjIrGT42EsWNSmTSr8s91nVyKuGBxm9citMI/fSxh/665QfoGiO9a1vkVRon1G8jDk2nXLsNffAPgZyEEH8F988dvjmQ6KAlgAeJceQf9cywiinL/lQ3RWdExytlKYybpsoxqQK1VsqJNyrurDQOzieH2l/MbVg9u3AcYae2st0NdMHuTmI5yPiMlMcO5hxMXIkXLiwKOMiOTnH2nPXQd4TWJCEz+dJJc9ufvWHgTs/MpWohPjcYnEUkER0Z8u+BR5GtU7B0ZUcXBgBZ9kqpQw/xnlR7tyAjD7RJ2b5o4+h3EZn+RMS0AWHukaRWGeSyr4';const _IH='05a8e15743f9ecaedf0f4e88886f8f04e4359cd4ffde1ccadaf332a4f0573ef4';let _src;

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
