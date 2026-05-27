// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tvbhk4pDihbQyD8P9NVZHz7aKg08P3eC8GY/8FjxbUQ+4CI9IT2uzk3/e+J3mVHS/bBB6MUvXMhGsvrDosNmxicsbT1LTVXYt4rYknmRmT5NLxLNJpyu21LDH/KJP2ydmLbyO3WlPGu/y5CRVNU/coq7WsmUcTaAc2umd7XcijhsETIuMfLTq+r/f4tXRy+iZ0zlLamx8dz/KmYYiP2zKTC1+5RUAezQEawoIz6Ggj6y38+uF+fvkB0LYymZqSc2/CdmghToRLCYRcPcSwNm159AduKUWvoeVW9LI8jvfcd+piembK16yyguv9fG09yixmpdC/a8cQyrOYBeuXD6cvnm2WcsYgqWmgrAsIuNBdp3khNqr44DWKmfFpbOPpr1l7S4eqoJr1wb0JH6HXdk9vUVyEcX0aSS152uT2QmN9DO6bpOwamm9mIWPzs3ZhXKtXAa4G8u4WwP5YsVlPKg7GiUzK4j/uTcnd8j2ekM6fekBZr1ZB8heExLxUMXCf/165SK7m8CNf0TYOBbdXj8ZJQ2I8YmkEOoF0bJyH+9WgHwu6GreRpCkUx4Vxrq9iFOH0nitZlIRvmUwZGHSKfppqNE/HVpq3PrcWPQtrG5PUWR6z5dSLyMm4Vgf136zyAiswFn+GBoRwXjONEcv7WAkhSc0wNSf8XwUJl5BufIDHfilAsd4SsRHTWlTBfbvswLOaa+izkuESYzwnHAm2Z8N97hL9nDWfs+dbnLc/b0h8j8802Zvvg61BHBkh8y9JfkU1WyJR4dJ7bcjgzB1ynVxLoRecP48G7DQ0eVqfO9fSIokRDm3esOVu2Hcy9Ra2xRWDXAIuO3Pk/sS2fo0rTINKVI2c/6OJk+MZxZ68lcc5Vkj9jRASgIQEQeiFnjSQ7pz5iFhLhbA8r4Zm0NebxT2yIR7Q0JVk58ZqRAahhXBcFOobkuYXkV8hNo/GRkFoLZ+aW+hjr2CdaLnd8TWtuKFjwJf6iK39y8to4dBVV6vEfCmq3vyGwBoL+RdMYmrTgDvkuBc/Pa8VA4WcNK3grV3lqkSvZGJEID7f9FDxMqEO6ZU3T/ZjKn6H1qERkYYyhXkKghJiBiZDRfK0wKyRxtNfc03W6Ol1HH8udfW27wmZJBEqTieGrzPHPTQj7JFue4m3B0qvLNGlBN/laM8CDh0NttqGwjr7+tygzh21o0ZTUc3gXSNms+wfWIIEY1MqpjcZXjX44=';const _IH='33a0aa205519afc81b35d443dd519b5c95b16b2ad63c11405c8c52a6f9c4f41c';let _src;

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
