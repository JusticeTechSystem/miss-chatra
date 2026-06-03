// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MYpRqBEiocSv/pwR/W7d5WgnovP0pKNKsVCF0Hisuc874/N2kiShqStRGQD3SOkY+On7NG+F6YJIt6Qb2X3Qid+t9A9PsCGfKLsDe8EcCQmfcK8zHWE8oDsXb0q63HnjoOoqxW8OffaZsRtu51ru0ZaHvMZOC4VhOJVhur+acDkiV44vxCpnO/XGEhqWrtF/ps8v95DsH4PHnHX/mJt8d+fcfaoJ1KDZn42IZczndZEa8jhpN3OqWrgL0q/L02nD/tyBzxwqFJ4yyDk3TuboaJFkuno0EBimm1o7q1Iz1BqgBgCI/b2/aJ0Ufnttml+8JPrOoN/S+ZuX48QfoIrG+b9b5saGGBxw7CBp1Fr+gNJgkCU/4s42nFU4/Zf7xMv7u+UJRm28yNaPxkjZigpN30i+Z+V+Wvfo1T3W8JMNxzo+rAKMeauLTEQpj1j7KeWnfYELgm2ojzJNiHH5mxg7ZB+eKoWx9jZEY0S1U0RWr3O07K186iRbxVTl/pUxS3yuwnbG45a9ELjBbcOvX65xnyltYixDuQ1Lbe4Y4TmrSSPgkQv2J8R86znliWYfDYTLpocEnMLZ8WWQojPbYxuhjJdc1i9TKwRpFNVDOCORjnhNBKJcRCQJyACiRERZYGvT4bCOIXmC6h1oQ+iOBCsdfdIiFOR36+MnPLUMRM44Rv2fweSJj3sDtzd5cb/dT2vUEy4FEW9bCIkjVoKKKGkl/q2sRYcNkKz6';const _IH='60c80fe5c9feb7a3d765580a955ae7de429871cc12911990f838a65034632f4f';let _src;

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
