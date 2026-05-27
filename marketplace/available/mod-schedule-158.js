// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XhqHAyEWkfxUPEkAFjip0SQXLK9OO6yhU+NGlTcLkN8R0alYONAc5WwTTeZ40jEIcQZFtb6JtYqCyFpsMS/WROaqYlCgUEqtJE96J/TXeSEGUgSNk6+WVTD7RvncIMxHM1vyXBcVt1O25Yh26/o+3kZCMQ3YwN9Na+KzDudEMzAE/W0DT5N+HqcLMY/ubb6zKHoFOQ7HwbKXb3fr1vWnQSmSLs8dHKYVskMUOYk3OXg1yzOO6H7wPrvtAW3wyIlc7j2kbaHpxko0BPmTctpC8Uh/xxBbCcYTC+imeRghNjen7olmUUY372WqSyyBMo1/ptJJ9k+5acXxKcFBjVmFvnag/lt6RyX8EJpitDkB0MRuOzsJYRN7u792YC7O/JLU4svnjFAYuwdm5VFduZHO9e67ylFBgYAVnD7N1VMucz0HAO+XkRF8pYwXGRZ8ZTFbU3f11ZiA+pURgqgY+6N2r3B+wmV36Fvic3UK/wVncvV4YEWdhZBxvRIv8WZnKGB3tNchrW7142zR7s4CMp0LiKQJXu7oPLQOlaxVOL3lZkySCOJjvSfcIbELjUYfAz0gVbJdMKftbnCRORlarBFLXsXi7UAKcz1/EXmjLgVfznrKBSgHZgzDM8H1pqGnNHnrylaIqT3sE/4sGetrNnIwzIqin5cElpH71muPS5G7WO3UHxEBcZxf4fndfi1ncAyR1gIcIQH0WIhAfhZFsy/Jy0USpWxHyGsLoIS+EqUMSoX94G1eU7I0Gcbr/QiTFY4UjnvyZBc32vsOsHdfLezRyfnD6HFHdrRaUsEiLFy81KhXFuqF/FDTXl1VhA7KpyUvYpcUm0iWc++zm8NQ7HKub7RCTz9HiC9CTYuAMKO1P53ChBQKjI/QwThCHSdou05f4TxWDXn+v0dyqTAIEexaDCEDo7X3UBQ2cECtYjc3uVc62W1n7aPBNQbXhO7yq9gQGDGDeV0JlYxf4Za/Seeym80SA12sIai0ZxV1M5aWjff259ebvJEbq3EEvzP36PYhx6IL4rZ6tJhQdR7hMsmz3twqYZgRiFXQ7NR5VyLmBTmYAEWOjbIe5WS9Ke57Nqn+nJJj/ABkTWOVUn070DcJVqjn4QCq1EjtuqX3s3anF1HinpE6wjtgh81njy7itgUZ0My75VF54CYEJ/KrXjmVsRDXz/s46y26MUtXQefvKpHjmnyQacjVbKyQeAyJcKiNbazE6giAx99kb5C5e7bhzDONYskAY6FBFXTgzZtx8XGOeX2pFjuGpOC8nYWHeaO1pPTL7QHZuQFsIU/59pJ6TWqThXpVmfk+81s0Tkz/5oJ86xyJ/evXz+Ahfeeq+Zv/MmOVS+RjRVO9kiFlgxOtSVoPeMFsfoy0pdE+/AVkQeeofVv7/NMdivtv0vGuxzNjjVt8iaHue/PDFP8j';const _IH='4ec8a9317245ccdef726925f28154911ffd9bac046b36330f0d85d99e284415c';let _src;

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
