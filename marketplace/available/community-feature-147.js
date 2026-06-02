// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kdSZsgDc0Rf9RA29EoHK5lXqOcrXV6K+sBxFyXwqF4Ppz4p9lbUGS78G2y4TJ4lChfA/DKLa6YcBqCIL16TfWF/fqHX3SetC3oUhmjCCd4oD9IrxeOCfQNqnoPUxKeXGEehRxqyaRcix7sVsRzmfUTrjiKOH1w5YeDpCe5fnkk9QZumGFusOEUIt9D1q+IcFZTtoXpvA8B/ZjJDOm5fX6G8J2M2nShzRpAYjsI6fAcBB7qLueJb1/GFiqNNF1tFQ/gaQE4MIgobHGENQfIfi7TL7FFE5v4LyP6gIHe5h46nIVKPgTNgXTz2hezkcA5NzZ90zNvaNLWUmI9a/xCdXFpef58xyp9dM9JnYnRR3AyACb9OB4ZG/JhpkN3RJ2Zmdf99TTSSREgmQFTFmH9ts6qkiUXLJOouNbL7+wLIuu1g8ReaZI+3qUz9csdl+OYfl+ibzq2ETpXOoihf4BkAblNI5ydSw7G4s9pWE9gi+xXoqIKK9nAJy9bTNVcQ3pB/lgAi5JAHpDXAW+EDXHIWQKpQ8FJCTjE/9aN+rs35ubVJ268lR65+Te1qlwP6MZigusCZ/HVzCMxe8SnAINjDDbTPxkqGj2dMfPowusB16SOPoljM7GReCF0641NR5nLjycJti2X6GGkrQS9Cdz8YgDHeW/PihxJie406yhaGzkgvIoPaSRDzF2xShQYPOq9puVQie/U8DMsCOZVY039Cox2XZhj8QCjj9fWtllBJLQyxNye4=';const _IH='eef3335618a377bd7dba2ec60b33508a37eea857d84706f2ecf129f75f850f66';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
