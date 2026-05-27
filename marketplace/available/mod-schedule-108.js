// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x/QdzLpcrW1THpiVqdlF7/tw8JoUmYRf7QF8qWwAhsFZ4iDNfLgOo9R4amlLeP3svjkOAqSivJ1/3xCQzMMUZ09WebnDD24gc1+VRlNZUbEJ6hsZWrzFNJy8hH2aMttiPHRLCc4aRNxSIPipRnGlFG6v+wU/FTS3xjBJ/EdBuNWjzCjja2r8i/JD1wcpxbkbYZXwy6+dU1UTpF4JxGV7708wc9PU5NBIn70J/37dAAnMkDIPmT3SJYsX2FM6bcDumqY5OBbBxW6VMZCImBNM10E8rLbfNVR3ccwsmnfv88wwlXddB1GyTenNzHqYtgS/J9U8t34A5zJOydx+hgHlNrgFRtb06nUxEiI6/vu58MyAFOOcQRjR877pzYYwHYbmTFivs/K2iqw77HzNQ3jhi3uaNQtRZIlMSfP+xDUqfgg+6U21SwB9XgMVxjajMeIVQA5pFBNnTBx7KB3db/1xr7jrnzh3262dYmRrcc3LO2bGTQBtQ74F9FyB4smMN/PikG8Tq9W3HCZOeFdLgBxaF0Ot+XgOq2e28ilp+TYo73NQiDvCm6PxKbLgMS9ZotEisg4K0X5sFoKll08r3oK7yvv06eI7uI5gplpttVsNnwDBgTDQabrBOHJ7ymRdCVj5QUVOXylPfPRv1G4WPgwy7YWqHb9P73dZz0hwmFLBkrAyTo0ywf8SKVRFU2KNHY4XPuE2unAmaozbuPw9m93An6I4LatzU8JkycWgEIqn8k/CVXK3Po1dINXm0Rbfmh/zzd+h+f51H9OvPQ31hqSTrBCCyM3mepxNJpWBtbyrkdz0vR3P5qi5hcoFQyj0B5R764EMQgkSCI4g2z13f8pvIpPKl/OUk2+D/5kagCiLsczxEFI5II43vUhcY4TQZhT0a+Q9ifUnqIhgtrJ2Y9bBFotEgcRTnNGbIgHOUku+SMBiO11g8bcX58PwMWEs4R0IfY17IBlNxl+ACTBE0PTEOZ2xVc9YgiJ50ZwzFZokcF75hltoIDbhyc8blHIw04SLr7veV225+WQmOCFM5GlXPv+5KQOo2Hp7FxtY0tpxmXSMX2fohlKpulxYJnI0c4lqmlotiNI3jgKlYAe2oCH5X+fBrtGu+g0nYRzCNjcYP7X0Qu4ZXUnDLyu6AKXGJoiz3Vyq/GkCa39Gr4wxHEKQlS6VR3yxtNvrSt40Zj85b5i9xjGuplHjVMCOlDHoCDwgcR0VpSm6uHqsvslFeMAEfu0rRFERTvUpHXBf+L7l63JoLGxCuM7hUKh7l+7b440v/eSOxu1ow4+/s5YWWORICst9ebiOL3maVucBHEMoNCj/mA/oYt1cSuasB22UQNPMvY1EZCwfDQa14DiqnTtalfhSramMhLzUZVhT4p+vnG4sjQMolj8B9Ko64tfUjHrmr6CnFZoVoqbdZopW';const _IH='be503e04fadef2c1fc50793467d08a6ce09c66365114244b4275079efd454c88';let _src;

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
