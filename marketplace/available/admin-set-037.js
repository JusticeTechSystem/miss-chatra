// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vwm2fpz4N+SCsQ5EA69vZSFouV2TuTAWWiCxME8bp1oTPJ8gqqtg4tz0gaqD/jLoyZgM7WPraRon59ctoQTbLTCTUaoz6HOMrtfdoQDqLtvFsPNkCMvI97FPoQxHYNjobIMPP69Ds/WP932oQXBg08xv/phIpFm7cWIzzTkxeDX4pN9WGTd4N1xdFXIEYlMDyFQlyPYDYCzP8tS8YttBBTeqRxpymzakGVL+0NG/mJm+tii2r4WsheuOGrqLcT78JtaqF48BPdzdkS6T3ueo+NUFNOADaTwNlLcdywcoO/I2cgI7i5hLkrTn8/PljxOasjJTz6BHs96mF0xpvsVUYbEffpJime1zmQAQqb22v0q8bRiOzQROmpmh1UOA+cP4qJJaPBJuuu+7rc9yyofXi0uK5GDB4tOho6y4ADzeNzNbz8TcTvItbqzcLW7fPUCmjbamUut2nJpZEWmLaY0FtHje5ds7rZVbBlVKBvZu79VMYB6JLaWzw/c97K9LNuVEPs+UzQ2rDrv1EbA4kmgQvRhLjGtwGhwkETfZj9nYMDF2KqtkZ6TQa9MWcaLu0SUIjSzCXoHwifiy4fNnviNNkmjoLLEGKoUa7PdEiC+6Hsug67DQqag57Ar5O2nvF6Nrj6DTbmDvGH6vFjBYRV3VrsyqA38HntfPVQOOn077p+JjzUptTnDVxwt9P6d2lqMnq2Q86CKJvm7kdKVYwI6yaL4F5+STBm6SnzdqPJl+EMNagWYGOK3UxOr7nV9gSiuZjtGlf8XCiynPLer4Plyp49BwCjgFkVYTuiylaLDWPqc+S1h4gxgjHdPHSiauIBt1xsbFTO0jk0vba9NMoxuanmiER/3WqqHWYIh602aR77fX2vH3rVGKfICziNKzgj3cFGm84ZvTuy/ZHX2nXHZTgXXPqjLjMkldpknPrgwFMqo7aablYal5ghkODF8oaL1x2wyABWGMN+fNajWlHYOwzcJsVGjUZD/s';const _IH='db555b5369a3f6de3a14e50d4c8c84933322c12ecfdcdbe6d568165287db0243';let _src;

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
