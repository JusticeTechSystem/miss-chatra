// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ619h8889tegdD/aw8T0t3655ZS/dRkjyloHlNGtSdQ/ddnNBH9M1VGLcZSkiW3EbzJdOvWMTFyRD53Jicji/6p2mmJKBZp4ZjyK+uQ01j6/mQuZj2Nx1gINAQm4iyT5Eg9XqGRzUKFZe0j3GZKBZHZIN+W+YDNRYJ6UnFMLa1/I2Ewy2m0SE5XPy2OSHvAKwKU91vzFwPTjWYAjIbFqcL2GPAkD0h976eQMiSLz9nRdoFJ1KHX0By95jsDTjfXRQN8/QazS5vM4nTLn08kY5PVZyiyEgT1h00fudJrWtA6BZ+7fq7Jd/r871NexSSOPLHBPGKF/xnNBTz6qjMGp0ajfwuIuNGM1akXRPfAfaM4QRMfkD8F1karV5W8Qfi/poPRpUCrVVu5f83tf3cq7rlGcSyeYTz3vcsjSNaHFRcdFV6SLNloRt+ccYZCf3q+FnTTOJTrVUfzC6+JWFrA7GSHI7uRx/hqd5fsdDUsevedZJVc0/Jo0kjpSIFZZUNi471wF8nbX+KQHE7HhiBvdCyv0+Dw6uP1BKoN8lRpBq6iyRyQCjGj3bRULUH8qwDBuwxkP44TfTR9ZfptpcUMRgJrEVLkoJJ+38UPC2Ix60TePrZm11vL4jvcJ+Kon74/U4qGk4t6nzObXbGKOAxQijUjo5C0KZ97PQ1KuaIwQ7TaKe46DhuEe71TGmWGemcHX+b0Oun/z02V18YQMsWxF5Tud5VP55sRrQDIkwQQH4Gpyg4PGdUfl3Dr4k/n02L2nAhrRtD2PQIpLKN+mjN9hMUwvnfchcAS0Gn732pfLupOPDA8Rbq+9Wc9ZeceTpCc/vXphAVTCfMc7yuFzxbob9rny540fpJ3I/jEYvL4SLebqWOdjKh4Ru3JH7DAwacT3UxeldFybqcKETPsc4A7lay+nSZQScS6e613p1MuaKELJYQOoeRIgfDA4r3tcs15gBEy6wIEr5WQzKNJXyVi2fL40MulWhyxQaWaV85RZ4VRctq/+ceYZnoKESbTdAbt7BPTcZGYXPptb7o9bp4Rrd0iiGQ7eIrGik3OcJxRdysoC/tOXe+z1PtbmSyWZu81nyoZcXizkYKEtPSm0YecN8zPrdhn+ib8ES7w9dVOPd8Af90aci4NH87RWvg+IvpG6Brbmv57AXtEFmTMjcSIX5UkiukEBAQhBcBJYAQVWZym14tOdnIF5wqzBBRK1+YZflIbln81MU4oimtwlkjtR7X2+dZUqwV1mXu0Xv39Nukf9nmeyzlu44yGAciZebQhKCGUgLchCCe74/EcNNmDsEIuxzv/NAJrPGq6kpszdqyoMnZ00NRi95yUAfMJAKwv3w+/sgF8Oxa7XxUdaTsbkbkR97jbb9Ndcope9ypA528aowYhww0U/uDESiGHFQQ==';const _IH='994eb46c89a580a951a8ab75225e31255320b123d1329a60c49a9a5761d9b889';let _src;

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
