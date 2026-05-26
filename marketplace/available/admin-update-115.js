// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jjudGpEGaFwTneG/jfumTJlHVSh7t/x48c3wqsAzDQEu4dMh1CrfcmDSNmtWL0+Zuvjt6JeiBBRVO26l5IffAd1Pjp7uP5/BZGcF7fv9ZbXFoixLFg04fvcZyiJThwcWJ0T8r0wIh42pLbR5m0KftlgTSis82tPK+uJGQe7MQtV2CE6Ia7o7n4WmbHC5RgdSouLAk1rU30ePMIP3bCz81npD/dtQLS98awM58tf0dTaarF9er8jTEQRBdQ+Hc3W9wPmbe+i4S8uAkKLlsj9nP/zrEHr+MQtWqVS8p+5rTtYkx0Up1ss1m2kg6u3qwyfrIKFerBTXojwArnTj/yoGUlRkePps2RhHD/3uannzmz6qhGG8clP6rBARAr+1YoJzjoegkLYR8WOMpOzu2JMHYsQJ3OibZAk77Q6PLtw6DJReomG2+xgzIs2iC/4j0bcPFiNNxHqAyaeY8lMkbalkgFIjkMpyh1zLDdBpCW72m9TXF/w6Vk4vysa3vAT7rzCVS1wRRW3fypNT1m8bwrIcYKeHL4kagv1jH850wcxu28ODyNcC+LmvEZET0aTC5CvM79DZQEb+tGNZP9el21jpG991Jaw4JiDQb1i+jnkCJ4yf+2Oi/Ro7Rf4wGohJwSoHKvkI807CEUbMshNdAa6A/akMeZo0TImYG31zN2Psb3S6zRsyr4E0LYLQC0y/6RZqBMp6F1f1yxIgSB/5es5JaPWRsk+LdLtoVTbdnwzWbe/A1DE/nHKIEdEFJRQfkkAseo8N3oV8fzqnuEf/KbOhajpsE+vGt4UzAAL9jfZ+a4I7A+SFcOtLbigbjYyrZ7mCARCN0vW2i1OZbr96pkj+vHKZsZF2mdzvinzQluqZvnnQRcLtIaQUjySlGZCuSzDuhGszzjzn4EyWim41ZiUOHbtJR+k5CxG5tWaClYD6eZBfe22b9EWau9botaiZrY8UliD+8JVU+PNh3VPD5eR/pFQbsePFeblbC36bbzXtAMwdfaaBwpHy17sFpmTOnPMxQg==';const _IH='d723fa4669a1068d32c486935a6c1b4ac79d161d65209e0483489ad7d869c0a8';let _src;

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
