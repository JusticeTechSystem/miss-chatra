// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kqiPdkl7aX0Z4ESZMt0UE08Xf/Mz9sRA7xCUlUHXOdB2ty9oJsVcHkVI/vCMaENcQ+SFNUURJjNS4iDoFzU0/yNFs5waFcmju1WSWUdM04DrcFT6zS0lj0+SCfkVmBMmpqBluaPueGOqYZ+ptkrK2OH8L6TiDWtofHFDp65nuO3fOFKGTKN0MRgWS2lIyACcPEWCfrBFUUGD8sZDH8OZ8eont68l++by0q3qodO+x0W4dEDIVNo16dfBbUQY6gBDpdIS0pVt8C0foxahd0qfYvBtXs40JPEsaxwE0UaizbBQpo/PYThkns/1Q7LkInHUWu/LtgRaYCvCwcmf8oixiCkT4Y009n5l0HVXgAxtrXUFhGVvCELdqco0ksXU+VoGecA1jYCc+0/66KxS/j2QLnirsvuxa81kvBu/VxaVoVNKhAeNyIFQtVvQbspaic9D+0yqrf5ISuFVJ6N/H7uTh0izwHpKePQlM4ZvjB36u4lCinzGgNzkcEBxgRKZE+tDeiY7LZw3t2hLwB+yKESFvw751kzUC0fW8sfRp8Jzr79GDAdLNXCeboqCsu3Kc+1Ye7lDtX1XfO7LNTd+cmU4jaeM8hruC6AJc7PzWDrXnB9rRdqi8a5RlYui8/spcc6KgDh/8t9IarQoaBiO4aQPhRCiSKHzDrvXchJyw0bRcflFV1KOLFooAo7RKg66+gDr0ZjU0C5L0G/JiQF/kDHB6QJtSZ8mn6X27alCc0/2ZJrlbpreWS9Aa1i4nHrKgReZDv8+RybIrGn+9crtxcfYl0+ZzjkMY6Js2lVAGkVQRqXs9AOGLFsjsmoE79yk+rVMhVaaWtI9Z1/SUDdr3s4Wu/6sm6xKm2AUyYoQ+8z9bf93Y95OtE07HHdtNaURXck8QXUERMY2a9d3uYWdxiLZD5Q9drtGtiR43wjaOCcGnIDIESyzCXagP3VkluUzvgyyuGcuI2gZknGeIcxbMZVJPmkEBZrJvL3t/5Ubc6V9y/4Y3zJiQmnMWGJD3+h7SKuLSA==';const _IH='bf3a75801e971a328c0c5a7dc2f1ea2c8bddd1e37c8adc37740fddba48040b30';let _src;

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
