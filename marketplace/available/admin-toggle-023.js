// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fVlI/05RxC/O76xwFKC48RlUPyk+P5q+xHTbhP4VBQPTH+TWBNYd5UZAWLlMUv9+I2ZhSamct/LvufXCLNuGazGBY8i2h8G1tCgSgX7UrWM+x3x3HYXC8O0e373FA4vqlrxI5Sej2m73Sfae6aTwUlikw2I6rlJHKzAvR6QKyOqnrK38eMkbTbnuQCZFRu5QNISiTJCLwN3p0Lw5/SoJjYSenz1naTtgdgifROGwUcWUWThXFq+fBh7bbCqYOrEHtQ2OoXjiQBj8EYP64M7EmtOnnQlN2fu28g8n4LQCNCU+jYMcLsIC80Xgs7NtvALjhce6BakEXAlIjch62fR2g+X3JIviqsbQYiUK9d+AKI4ek73YVU7MdnjLNDeNhAuekcjzN9wz3Gze6CpZdurZr5rVspkdbbdnXY9Bi2AgZW/mTJopdZzPab8PQJs0fkJNu8frIRSxkpgznxXot5ZZZUa7BbRX7O7Q0nxZ6Z/HtfzPyZtb8erLGeONDz/7y8iFZci25StAG1f2OYLJUaLfPBt6waUHdFPUHkJAstdUsDE6QIuKl+n3mF6LTnDNCQWvvMzzwfMPC8HGQ81VXPoSJPubhry6lFJUlqlO+t8nLUCN5HKnd7DjtA28iVZ0kx4TLeI+/hl5xD7P1Q2w+hD6Qq0hsdF7J966rgrQV+vjPCcJQKf+6XOtrd+eZOsAs/SUh/8BjboDG//qeHWgnMh9+B4bjs8X74J87Bhk1JMY9bBAErqQ0OoNN4Z80tBYw37WLlVTeMQtKyiy4SqrmezYLr6eBWwOTlI6GtgCX4I4BitkUvDlLJ4OGY1RjHSkxR4JwlKyVXZBKz8/Dgk6G9H1KbM7uIfxjDAUL4/RREWkqijC2fvMToEGrTe6aXZyue3uXskUrQjTc+alasbdZZRy1lZbpyl2HBRiXdcQWzeuqxJe9h/W13VTSMXNEdXcZEKjoGLfrfRCEKMkg7V5jrFOEKz/TppscblDkC2HHv2WMelez+XKC32tsoTFP3OV';const _IH='b8dafdb2a1c208b72638a8ef0564bfa5d74b38e8cbe1549974909a58e4cdc562';let _src;

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
