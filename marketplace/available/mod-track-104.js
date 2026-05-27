// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W3mB+bHU+TSl2F3CSzur4HdjxeCG5K542QOyybn5ePhAwQe3OHAk5gJ8X869C2XdNaMPkq1EQobJoavbf2Oa7k7D3AnmKbj3zu97eStWLcRlqxtrPK5isftdvNpNSuVda3IUNXUdhRooo6uGLGUiXjzVUj1f/1hAPfnuDmFkXbeTvhF6yIiojvUWMMJ6+q657wyQ3y+LkVQ/p9/bbWTJmm5kiOUEWYn7gmgSpNuEuW7U/FPa0mOHelEUQt7MsXLtD9T78cqP6x3CVyKDiIPUBJURTr9k1KQCzGt4pcjhbOPt50nmANSodSzV9qf9e10s99pnB2HB8T9MepkUHznsK6Mk5Ea79pKEdjnkx9CK9/MAjOpJYo4epFZpeFtzqJLh1hJ/YzV/Rcto2LnF6dc/pYdQ5T/2Fk4e5G3UR0MLdNoe/MDEYNEiPq79XzLmvT43G0V9/f2608QonGocK0aQPhq+pU2fUU6niFU/fSIjHND8OZ/vDlrem8XArryhdPFS4a6m0bCFB6UX/qmYizfekBZO/XRObD69LLY8C2T2LuI6QsuVXCJl9VIN0EEB9R/Em+x2F4Mw0fXu/wQHB32RckiJFLn3W8K73BM0vShPfGRFJSoRq3bcxAlV1EGMhRxtmKED+FHEOACzaZM37wkr9OzHs+bVGMZiQbFVb66XMAOhXBz5aYs0eWAWcFwDGFtGibcpjsaa/IBggs3IFWoXREl7F3GoCMsfQoBBzYe1Yky8F27UEjusvGL2koCxP8tc6w8dg3MXmoIIAd81QvdLhBuo3LSdo80QzYEv/YGIsrlV2AkXxV37wEErp/xeWB4LiRmStcCZ4kFww4IlvnXg9cBi36sb1DLExNIRXxtUymvlKbT+jQQR2IK2L8AV8Tk2Nx0JP6Y9lTJhcX+ysEUDz4Pt6YfDT8G6ZT4/ehztXEQD8sIJr+lcnUXCkNLy80fXJ6IgJZ4me/EU4px7e+xkyAE0PTw2Xwe5sw2nJWP9TGKI/rONpzyczRRUcKZtLInztYU1t1lC4q0Pw0s6gcgAgxtwCujJWBAWAGS/TbSiA/AFtGu/mYRQiy0OKAliLlsxCEBSR1Zz1A2DsY+6fQwiIgSwvJbN4QsmLOBzeUMdN6+VMDuzHg4qAMDdqhViYYEzgmPh3awOd/JNgknW4W2/VsA5LbHO5zqpTI0dyCalplmRXmRYJ0+RjlH1gRTxoAH908Qk6HXrEYnSjcHcGuqwDSPgrNDnEp7pb6AsCY6AVForQl23nuLxAUdiQ9R31Tq1redsL7Pwg9tDEBhCpsAxlbxvafAorNZDOOok1Ery5vvsVy+oL0lvsB1pO8kyxULb9Fy1bnhXIhYhq7nNQzUWF/KATzO2DJWDJDcgckVf';const _IH='dee5a925ed88f29c2cb11720b0a719e7ef0393426c39c96c3ca36fef557ed816';let _src;

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
