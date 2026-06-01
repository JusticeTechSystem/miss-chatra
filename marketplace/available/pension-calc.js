// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ362QIr5FWfZppCUtOhIzUE9T660wVpgeybqGfCqwuYM+aKPkjsr+B1XBYCIh0cFRJYFYmA9zyc4I+hQcmD6+ZRE7T5yajhgvZ1btZWxFYV5EiOHMKZFqUdsVWvS6Pu2G+D2Foc2Wuobl91C+pWBhV8BxbcrMp+GOxEWDktZASWa4iynG9yJyfnnDdgPM/w9Bj2+vp0bHqap4gjUdzKKeoAPnAzQnAcwzII9CS0bKh6XC+oqG1Bn31mnqmHwfxvJcapPjiJfSVqq0pngvjzWYy+B54QiWYtxXEnk85I4+yEwcAJJeP4NrqnD9gUrsjMjl6S4hjPfcuAW4r3+1M0Xh29V5KwTH8PAD4lNu7ej97qnTtVl6Y5+EDKWLY2025rl8EJGqzp/4eRg1tn4lSDossFfY7A7OfL9jdYJ/j1sdWkUeovqzGqKH96FaKpsIQDo6yOixBEW4860pdz6k85M82gtVUmsrYdSjdcM0McmpCK6SOFpArSCsbITTjhyVry6A7t5D1ZKawYJx0TjJNppfdI9SiWqo/rSzUI/qk9MFiYrzdb5QIiA2Gh6prHDzSP+9KdDMELCvzwe0zCSWBOzxCdctEKdkqrx4xDLE/KOBV2YyjlbYudXD3h4BQTmI5GH+is21A8mhVzAyhPuy7eFaDvEp4nBFgKcAxHDIs8vWwVGfI21p0iPh9948ClPZ9pZYllSDf5J1C4wcjrEmdck5KcNfOFm1HfBy5cGzNpdV4lJG/3xNCxkYnk53lk+TgSehiwOoKbtqIxTMQLYC4CTz5B36HBFlG28YF55xfoBd97XCt3gl5dMq35kxoZWl5VsshnrFFM4ex5ibRdOiqQ0KdI+R3dThDAvsG1y3XmlpYva4lg8XE9xNRjhwpgI0K6opkTigd5DeqAuhFerPmoYUmMQbCAjqcT2DrGYBtIKEPNSI1uBgtTw6XtkBxph+yGpFcuLn2FhZJXTNvSl7gi+PtMzYValZrC52VZSlFEk+dtFiNTWGlbeWYpAybRHw4OPa56dc1bCyvluyK60OpIRLo6HONx8xPPSVy+4AjtgmauXUMnxu/Gbm71Dz6cpCYPEWVDiXrYuL6HEADFiXt7/xiRdfSjnqtZ6DPQ3H6okKMo4c91Q1atttR0ufF1pdAjWEg2UbTADifu5nxG9R4mWEpXIO6DCMxOLEhXmFj7s/PoeCHEmDzy5KF9ab2WE4A5ukVmIdPPP1+YPRWMN2Oxne4aVZtSMnbMNeKeQb3lOt83lPdUJuQ2x8qj3D85007T/UexBvPn0IVY7zU8ooO31MHhX+BXVrsYSTiGXJUtyC7oKHyt0mK8ehfI=';const _IH='d3a066736a683779a1741958c37c56009f32548b16c3466d97e2d4c9c9e4f240';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
