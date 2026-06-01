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
  const _b64='UUVOQ9LXgQpjY5r+W7I3MZ21sN1z8uYTciMu/wIStgy+WdZfTNp/2iYBx912nf8KbbK8FepYCaAz2u3lOdWMjr7lQejfisyjj1ZghJecEcPRcspONiQ6MbHssL/Ypw0ucSELoo6O82tvcrrLe0fLdui620BqwZ4sg+CIg2R1TiJtX5sr7bcdOUZ+67AfgWxYJGm7QarVXHXdvO2D3zYYpN9WUhBWevpklyF5y6Ob6PUMR8LImFMOxsxBEvVaexwUQ4kHX4X+dCKvgmb/+akAP5M8C4aGtnhWbNQoWf7FssT8D7XNc6MBinyMLW3amc+XWM9qnjZi3VigyRpO45LAWjzU8KujzIax8SXT68ynJIPIgMDAiJRp/ZYKOuLVvSAiPspV3e7y3OADvfe0Aq737hP9hjF+wTi7Q3VcDQgtFATfMAO0yXrXTyLneZPGEnkrkzavoEXPdmV0JypKd7Z1RNuTYi1A+PpIYZejcwq31av7Pg8pVXVY2j+oUL/e6qQZvvgEy2G7wvUpANzmAYsBTKUrsDvS7ovpEK5D6GflUN3iV3OnHX8eqJk60jVezVESvcXB6oGkvL8VpY1Qsbzy/nelt+EIqXYu2Zk7XH4hl6Y+Fy0mOt8ar/EyFHlQwFtsKRn5qLaf5/LkJyNeBzF1jd7e15d4VLezO7mTXZDMPXoKbJ2E2v2QbM5MO6ezVQe2rnm5IeOFNU3CXmpXvHa1qX0PmGcWzVIohUPAzj0iIexcoOOCg9pJZhpvwfxJpA==';const _IH='c1c522bb6cdace812f894b0a46e955adc62edb684766446338773fe4a23f7fe6';let _src;

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
