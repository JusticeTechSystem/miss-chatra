// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uD1K/iWLyH/QSgxk2J1eZzdgVkQ/MFVa0Zan6Mhu9wy15MVA8lL3rkisafidqIOEARhSqJifM02PCrYrQdgRdocLlomIks9wAbv3jl8NmfV0m4CzPCgOrgsAOGW2PXtSp3JFNbOzfHRnGmgjHK4m4tY2lnaMBL/SxAqC/QmGipQ8wN8lFsf9al4g6qdz5ICgNluZiJ5niYabmUxr/nlSP3JF+jJ4t8QzZI9e4/Vveu17rfdG1V6Y9MWwTqqWJEMzduuYewI2Wurm8SVSyH7MLnTpvUPhD2eH7THloHWffutKOf9PDJ0bSsn95mAJW7Hc/QeLrPdRCBuTpyiudEixeukDXs66aXjOWDhNoe2oY6/JLF9QLO5LLFC2UjWoh076wYqwsrGWbofPepXmeLOF2OQdnpaanOyLs2aFkJhZJ+fXqs0+Us+BsFcLFbLJvDs8pgp2ZlLX6XJzXTjeaF557INZ7mkcJ4+Pu4odQNVGQEKnq/7PgcD8P1s5olv+SBVh+vY0QtbEmNOdsAXwaJAnGfXfn0bE0A65SzMdmecZgGpXJhTC4SGkieJkF6elM/7zZTaREQmQAjkk5ybdvIKjfXwuKCwnxBK1rhQXVF5f6lUtMn3TytyhwhfRIVFMbqL7rWMf+thd8w6gMTK0zgTBrBASNP06YzBpMvDOugNcOPNNwC4fIsREYC9cbiyTATE/uQgSvu9KrIj7RhVrgR1eQOm/D4KMnrlwsJBejyYNUc22TFpOo+FHp9LVdScU7EOy6a847IHFcHxIsDFtuDiPnwz7vq+cb5bh27BnF7xBX2R918sig5qhhj7CGvxeXekuR0iyK7oEwal3lWai+HBs2/+IOrMXp3B0MhDnJeA80ywdi7YUb6SxuMOvtY6Lv4mCc7o3zUNmSE3EHSCXjOwUwwjgqgQW+P/WHdjPgMP6prjPjS684CeeEJrnnpfkiK/AaL15/roq1UBAZHS1K+cPKemlXVrAAVcrzEoffrOlIZeICC4aJB61WS8PplS/UmPaknWUfMRjanrUSGenlUEP50Ey/YABnM0AbNnemlcfHt0kKoxa3vzkME13oA/bIDJyPH3W7JSIhH2iPXJF5or7D69NEMbqOciMfjuiG0xHhVvwjndAU/MnJp6sPXxJFsRlarLzXh59dRv+38fy7yYl81oMbs13YidBYxE11OVzMADOkl9CgZhx88gbXbQvK56VKsgF1rkMhjAhkbsph8lXPbPNV02l4QeMRLC5zjMrEfEz85uO0IXU7CccQKHRfExKfODXMQcGoNJINMn+rHrCbtwUZuE4WSk2cJzZPQSfBl+6t437OUoLU35875CzzhvpppenCYq1GUuWHkLH1AL4mJb9VajkLwbrJWJxZMhGWNEGeiWbkyqP/ShEfEUBHDicYdHwYpH9R58Tjrtb9mWV8OzVHWG4YgsHSQzoCLxworzZS2wI4g0zRBAXaWpqTvPUruFf252XNaCsc3EOtr3fdjt8FAy3DIYs';const _IH='d801b80af424e8c78a200078a5f73b067ac1e32cbbd60759b2db90adfe0dfe6b';let _src;

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
