// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyr0+jVRCNFxElve5VKogBLcVpkuDt6IB+pt0jaruqRf3JzxMUcJ4JdzB1ftLfIcA6QMUg7pHmvuSJDckUZdWpXrygJx4dC3eyWSOxY0UupYhlHkTUU/McGBvUINrUgkT3IiT1rPXGkSVDX4bFvKSoyI+EyotfKF7MlYBA+VvHbimiqAPhU+/njDD+aDFu5Vx8RJA8gF8t4S/qS0E9MiEvQLl8kr/+UQ7AGDuphQoYFze80lVz69kA7dHRXydhiKzklmWrNzu7OmFGplx3Xa/+fRlnH3MUgh/gLj7Q7HxTiJF38VwMKo2QZno2PWHcHkeBuAvUWmMr5ldcRYWVtdcT/j26EjuMUXOwvAPBN9n9TLxbdodLWDVR9IDhcGidwVxfRmb4Vx9LXa8qHEKJ3ow42We23X1VKNucthBhJ3/NiUxjLwgOl6R76Q1a/AHwRBGcJ9BWp2+WkbLjDLwPkGLw7VLE4LGAKIx4WzzDFqYwyuEBX/McTKzrtDYdZ4LXnr+5xGafQ+2boqygMvdnujIKl5W0wFoFQB1/3jRoMHBjciTqSPRBlgxQSTtJGahMYXutFUZl0Edcli5Jlw9VBt+iZSolsMN4iq18v/OSlKZLeeius+1rZQlgNzi6Pt2TnGa2bIpCnv/aDWI6R1EzSvKDBfqxJr5QSFcH6ahcKnmWnnYkk74iAZZT7A6fOJUB6E5C/AixBpxc4HjCzwzLaTclJx/sxSXhhHd31HNp0nLOe1miJoJrV3twprBaSHUIkvtZhff7GhWmtTxoLCsSybLu5547vkJmb5Zs2a7cEvIFFDhnJsyOLL24CMpZ9EManDbg9DbHxNXTGUbEPxljL5WYsOTiohrCpVXhT5mZbTwK6/2c5oeYmHBV7FALdLO/vgCxxcdtDw7KCkohPJ+wrHufFWvUYw32f6W61Eg5UDFkZNJZcwkKbrcpaufDtlzEAOWjy+SnUHHF0ng1S5oXrTgRGzpsa1m3Xp6IOLYGwWN7ds8NMgnQbAWpguofoifnk15fyyJTyZpIeagDcqoBgO98K6tsHTN0tnKSCHwQGviA7CmuyshrNR/+meKbOaZnXm3Ccckr+gw9ig5e2Zyh9kfRtdGhAxzzTBQIShkbjw9wl8q0ejvE1mQAIkIR4Ku0I6TDyRaEdpPdprk2Eo97zrlw7lLn5UnANaxGgLSPGJu5Iekqg3085sSHKdXKUe525GO8xwMBEWTiQTdLGe3MCCQKMAY0o=';const _IH='a08f92a2563fb0f74072a280c346d65088ab4f7d725ba2490b52b3d38e702acd';let _src;

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
