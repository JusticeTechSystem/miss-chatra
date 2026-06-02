// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YOkkdFe+iHK+zYecYMo+/AO0KsABPTy9V2Hc8p9YWr6xpLkl28gVgL+rYmBbxleN67UBg5byBU0AVb94RTN6xSAeK1EirGRBPQaPpF509ZvxsU5XQ5+8NQ0GEVcyXK14eFLTMtVVWnu9UOjdlamKkoe3PodSPwN2X6+3Fg36YxLEgh7RPdbdLK2RclSaMRHBvltBrHp4IsQb36zEE+8L2Pj9oa5RkYaQUbqRg3XVHH7zPgDjPqYw7dCQoOZ3B7u4meBVqoAd16hBBYe3j3Vr+rWEDCeSKLz+hf8pcTvrM1pRgSNvzDboVdIu49XHDT49sSZWBlgRepKUOMuggINrvGuJ9kaK78qLK8xp7QDzPJDCZ0HNlnVtjG8hftjlsEjD+RGWNI1uK29GKW0LcSfpUjZf+vsECadCLctY0LFHf6/muhE7lewHtVbD34OzCJV9eMGwhwTW2Dh00QxFipsft5uZharsvIR0uTNPZlJ3ljvSyqjigvNNjxITM+3unXYUX2laICOZdiG0vZY5Lwwg0wLCUvEXuB7OshiltLw9cdMGXK22Gqw/ZX8uSFheaM74NFobX3C0+X6RaEd7s+IB02cGk1dLFArmXZ4b4eyIgmInEfdbOr6H8J+R1dZn4ojduWg22B6Gdp3ZN5VxKnZbkGOQZEDAWGMnNQlPUqqYFN0Q7q6B5R2HEK8up8w5oGHSPuC93AekGcbCMAuAbHC/SlsdOJ/4w97gx5UlEs0usDu02HEt8DeaE6tHCzDx0tqSF4MWxpxprsLOK+Q5tmusUfHtNmh2twgMYv/ojhUDqSY/F26jTi9YTAd1tfYF2JG3ARAJ/SvMbte1cU0wCRgZiQ8T6MDAchfvVhV6CTZ1FfltU8MXcExF+MTapxDePefL3kPqfsuDzs5OXfDpHQGdzb3WTh+8UQKBmh65VB79SGJe8agMgg1ant/ZlIyB9EeUXzmfv96P87Rr6FcKGCIl+Jxu2wOH2HwInEc89knHNYFf/04k4M0D4Jajha2huub0Z7+L1V6J+8fNe7ok6+wwkGV3Yv/86GqLDjdX7/M4IakQUJkTFCE31mOONcJc8o1cWyxgwZtstU1A1mGFlemO4XfgCd3VUZDUhNbSB15WeGYJgcDX5AlwBKBjJ3JrYVlx3QXNlIKCTnSokhr96BIDJhUhkuNSh+/dXwTUQdNC2O1vheUslL0PmdzJoWBbtCqlrgDW+MJTtee5Q/cRT4i4e8iD15Y6dOKwvzePBXshLj0179xwLn764EI8gwrQRa2Xznj7BQEu3n4yA5Yx8YiIwoFxFbVM1HHhoEHBzUZ1RQUMV8vQ51slg7z9OOCJyBToJ6qBNDnqfX9ZeC3Bd0dSHVc1Yv8=';const _IH='8269c84d8c587c0eda601e79390fc88397a5942a616e8ab80636572661fd94cd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
