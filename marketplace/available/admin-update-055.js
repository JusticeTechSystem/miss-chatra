// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5vCVnrx92G1X2ioaOxvg7rD8O3hVzWg5YTSIbhJIQuZCYIuCScvJQolccW5LZlkjaFAY2evPp5q9ieO9zC+c5ymXB7DCIl9DbvqQr3JZ6bMbMzkLURrCxQRa2aQGpeaw0W2Ws9gTSU74KzJuPAyQLU/cIcEcwX560+/EwOgLM1OoYMqjX39sgxZFftiyW7dBdkTbj0kmOpHL0zodzI2P1LnL2Z/yXthkNGn1xQbTUtp/lA1O1wgxG+9UIgtsIdzxVrqlMI49hB3eqoEYL5bP6QU+uCylY9eiEO9R+ZcTY2obMYeqjPxpsDRW7t89ALy6LaEz6KbWO+trzW0F43yRXoqJjXzDvX3jk89xnUEJEaX6NM33NgjLBHi3eXOUtETGZ6NB55+50h2A8kd/Zvj5nmoWYNEUrZl5VPxFOeNLxcBDRo7hKzG7hz+FUQv0l9qzUGAgL3P0oxZ86+4PgyozKelcApeBDhz8Zitl3ps9rG3haPnDfYTF0MNTtbYrGRuu63himTlj9RTVSZ5pYEIfx07W/9FzzVWKbDV3kJPVP42gsBiglbDW1hnTo+JtCcFCiJJe1wMV9qJeXkunORlLL6Fq7wFEdDtwjP0EWEXyJVht58ugkVcBEYqgKAEG3cLYYOLTQaZ/vDnq6Qc9iE/NM+8RHiySdAZJo6Yxwc49+d2BQXbT594vVHsL7W6KJ19VWWAP0PfoEmT7aP1PdfEz99gl4ckl6lI4ZbsGA9x/eEO7KBjpKFBuqiCHm4V6CHpa+xABSjS62nCJVKS0n+OQjApOZSt5PoaB64gPisFg0R2mo6AFUng43AUk0Lhzrh0p+TO9TZlN3DD8RlF34wkizo+X7kYILWHL289hOzJ2v7BtnSNHQjtc07Ow6gwIMV7/Er/zc56uN2td4t1kLBpT838irgNKtHDuI5JqY9mBO5Dmcr9vrZGMTiuScpzU+YawWQawtNuWZSLmn5Oa792aAn4ZJbJBneT+J7tqPHqFM7+GqD0aX87PU41mDuza';const _IH='f7e63acce66a591448b2295c2fd03478516c7d866b6faf754f7575dc26254917';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
