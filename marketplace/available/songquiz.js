// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pJ3rbIkzccshK4m7GB5GrJb1F0stPyj05Er0wk2A42T0GRriVNjO5Z0K2rsijzFXOipl1zaZisKTlXb+SnoUWECzQ3i9agRAOEoVXMXrTrW2uqXPjprmaB9sQb8DNgk+rEE60o0rhxXBcGsqRyEMVvidEp03WXfzDx6aOJ8enCr1jtBlgDYBe0Cq3WNLit602lVB+WtoBQ05OwuzpTp9/fYfukvoKpjru/x0RS8JFVMVaeSG5ZZUInoS6oCVRZxBCdrT8QrDs0chE/fBPdUHJQFzWpfnKUhTHqhCYBs8vx4S6cwmeg/euKAqZaovOmPoTqvJQmPzekRilgBcqUMIsdU3CRlOybGkqp5JL45aNVcKnbU5/j3RzLBHo1mwFi6yD6ZMfEkavS3aDCqfTcXg4iHAdMx1lolWvUKKlbanNd4laGBfMg/hr1pjh/hggj7ZW0AUl7zwpQHB0E/KtKJYOZ9kACtNSO3eI51o7GjuY1LOiYAIRxVwjK5+W8lKZCVwhwa9L2BqUdG3OAuOwBzT0qdfwqTK2JbeNjnWhwd1POuJopThuURSqoEmp/FeiQbLLYSVs+x9WUbm4fnPoyYGbk+rHeq5a5+wZrfCnSFK+RRLaHcvoZVpowtBwiLPhlViqyahs8uUp9LMRDPnci/vOHUF4UNDulpdsLTMTG66sR7N7B6MopAKDl5opTEQRp9SFCU2UHGaSic0AcsUi5W4jAV5lNJNzo7UNj8b3eiXpj+454+t2UqZIfJzHLSUQnxQnQXRwMSaOm1SDlZVlX+Z/0XgD8qXlxkam9mMfFAD8cPDfQvUXMmw39VwK5KJb+NR5u0afDHcujNuXI13MDAo7lHBkWhHhRg3F/ISvwX7o6DxpPXdg9VOPK+k/jB9EHaKH6ULHjfw/jqDjDrHMYcQEAw6du0Ne+Twvt8H9zGaRnBz2QKbYY3kBq3WqyZcEBHml/tKQPjFF2w77CzpUvq9AFGlH7oOFLuzakUriZluuJJ4H++fgIK/zjM9sexLvU4ZInH1QChvoVknrLCDrTq8/k1bVnLe1GYFs6uK9xyv2wVodOm4zJ9Gq8wPZs0BHYRzYc8rnbZVt6Uy4ALQvGVwmA4xNs1wkSi05mEv8+vn0p0QtsqDcPDsVtroVxiWJ9olVeP5fGPFWyYp0P7sqV7WpLNxxQWh78bk6K4WHIvbcsxemW8rRE1uDyBxNLYLPGNdog==';const _IH='0326a018fd5d52c766f9e6896ec053aeaa02f07940b5a33ed3b87ed73ae2ce92';let _src;

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
