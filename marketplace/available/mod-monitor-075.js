// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HGv+C+k5YU6wEESQsrwkqHToQ2WlNg9AMyfSMgs+HvMoIojPqTgfQB8cePEHpokVPm+02WwRGvbDUmXgVp7ZZUUvYTmb7vGovJnQ+JDR+UbJ5K+ntmEzC9XCtcBflFZC7x/Psuh2W9b4AfkLknoR7QkWDL36Tb8NBnZ4p0SzMBkohh97oJYNZPic5woI0lkm7KGRJ0WtfO0H9ek4PkI6ofkAN1g9JAsDFD3AOMk2hw9yQNztsC0gzHftlwbQPxvvQaLRgPqiR0qHtkPbTgzOrvBtXs81J8/i+FXrRR2B2I8rmfMNmSyhuMM8yU0c+ghdG3otnGN2YXTMOvGmNZvG3lbVqEthLUUNnnqmWJ8rJbc8ZnOLJ0HKxQeRguJ1zEA6uClUshgUmjSS1jHe5XxJwFv1kp1oEeY3VIrktBU7qxVcBsx3IUbFor4V10FnLoO6HpZJe0JFNbaR4mOtguH18n4MhSJ261CdSqqsgLGRw66PpA1b4ZyNVC0v3HC/jhL1knhc2gXkiefwydJpUDxs2CeNzL2b68O8WhXV3fSxWV4+CqEgncuiGA08+3+ezDyjC540d24JMPq4FeTO+WNLxWEL1i0iR2Qmaj2LyghKDAUXkm3YA7S3mgCoOabF7G7jKj7Ut54XwtlZIeFFeA69Q4WmsjRVujilx9ADHnpHKjCSlAaKqN2fZhRr4pek2g/siVDPashlHRPxjMkjhh+xQoDW7H3vzqj1VBAB8Hud1nDWTAbFBI+pKHjZeisz3enSlXTCR09sA0s5UNCrBt2R601uZOCe2eaR90RnEfANq62TLVUhesLem9PjMOITNOe2hdZr3iRM/dqOdMgC0kBNPtMlFagdWlXF5e23m8/r3Sfv+QY9fSK2hFp3miDJWKljGrgIqzllc/d+xZcYyQLHUuT+RMwpfCXQlPk6OWkOPCKk4C9wl1tFJvbX6zuUXOYY9R8KO8JJrTI6RaisYpvzH8jWsoXfJ6Jtn5NUA7vtldhRr2evL6fPpotfgKGu3+1WrXSWdJQIE0fOOVRZEaDJX/PaR2mdjoZAZDKSdzx06qN4Ix61IOdBU3mYGNC/Eb07WocZz7l6l4Lju10mn9bCsiGeQVOAXz0NGsUxvbXz2daJZE2pg9cOJdofjTc4LhdcDqRk8V3zkIh1bnQy+81gV08acerwZfplR0Ubzta6Kna0JRPWv6Jw9/6x9rQ+YdoqCCTQ8r7JJSYWh2RTc51mRMF0TQYkBrkNZMoqjoIs/+XT4CVvvq9OhRL2Y5DkAgyIfujprNNJsjdHfxtTdtWp5mDQ/tHaFRiunFkIJbN4es2jo996jL+MqJa9lHVobkpImF1RmHAMKxXaLZHLqrwMDgUeTGTy97EMmBjfrN86HaeP0c4HXclj/gSBD3Qj';const _IH='8558e358eaab212a80a233405bb3ab946e8b9362da7da64d255939b62d85e397';let _src;

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
