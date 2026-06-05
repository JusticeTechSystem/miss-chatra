// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RO6oD9ZeHLKBB5+Nj0rSWl3AezKiqLx5vprs55JBx4c2RUGZVPnQTB63WtUa/eSs0J2Sdbyses8lHkWeng3H46uFunInkn+GQ89ck/+v/hJaZbtFtCqk0nI5pIOwEr4XdxjCowqAYM7LkQmug7zWeopozPPkRn1GUySTrgPonZ1xh7DlOOhTbk4aYllpbtsuU0Fl4P0lhNhxW0IKipfbw+hqWuhR6IJEHVTdsTnpcyE5Mq7iOWMGULJ6URh+uYwoDI+1YitklfOiFvq6T0Fj30AeXbDcR8Zqj2ysWtUwmXuAeCuqUOYk7Wg4Bs+03axSQXTcJy1YtZU70DH06dFe4Cq5ldCq2gdPCqhlWSJRVqWo4AJCOC/6+jjsK0tYdr1im5Z0XbBXq0HaihqDhR/K2afGPuAx5C25+5gDALugBCWKSRkgkF3Pl0wFT7/fdOK8nqSzHxE3uyCJvQiaSuN9PbYRAEXA6VhRzs4rhTQzB/FQrVfg5xS21T4X3BlFOEgwfm1szrcaBu89CILXmsO0oyu5IlYpY/Cu+AtRpX/QdrTgCrgTaGSEsUGJ8YxK3vhFjrSO/gBDTzd6Tp5xuB/uynYQkZKYnXdQUaMA6N3PlH16sAlzcs21/2aC3v7Efqec/0z1YPDDc/ZFqU1RMrfFNjIGj1C//KL10vNDZLNCc5IJUXHwXzkza31b/ThcN2Psa8SHkPwd7txlmQBKMIqslzPRE/pTmkFpcZ4F/ykiY+7eME3G5/bYgbeH37SaiF3Y0Iqpxvy8vatmyjyOh5txlM/6mE2Gb0bWVqEzr/0mys7Tlgf452BlpElxvpkvt9MBPAq8qkrWunXkH6sHgz+dBLBaGGj6FQPqfXqXEzoSLOzWBJgTlH37SjsfJ0Uf5sytcyX1jN3TuasQ5QCb2p78e16nexdBQC7S30Yvl0mC/Bj5tIYglQlCMA==';const _IH='0ed102ec508e08c5a555ae7414caa9f8dea9516d0bf63871510ffbb152b20a49';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
