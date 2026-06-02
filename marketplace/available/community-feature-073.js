// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wVcaB15lKvnWXAH/jo6bfIe7JAt6W/32cPRyd1sbNz+dKr65GB9DbyrUWy1cE0EB4FkZExOTGudRuIdqXteAoN0RbBF2iUgI/WFddXZ/8tTpmi5wUCsY2mltdlHuuLhNe8WKcE5BOM5o56bCjpskIMloPQVkr21yh9YV0qZqYQHPENH1Rr+0FT6jbOqNwnWGKtURqBV4OSm12ydr17zLgcFnK3SuM8/2EDLszauQB7DvV4YNm9teaPrGqfzvrv/ouSEZmkpy/XGbk2jki9HkaEXCQTuDwMr56nisAdx+JRwOkzjMgTMZz6Fkh6G1raNZk+2ghhxHEW7EfrySKx+0HgVqqfIlRQjwaPPHk8qGS9WiJQvCNElnLat1m9hXY/9bQd+unRDhR4FA6g66T7nIkYeJkx4PX2RtpAIKXl32Xz8qgbviNODVIlY93Dw4bNOZYTF4tjUrb8I7bqv+xhrJUhntoBWaMZNog1P+s+GoJK8lvALwSCs3pRME5RuMhZlO/NyYFCm3ERsQ6gIjefzTtzYUSc7gE7E0Nrck00dGZhnWAaJ1E9M8TtE6Dy9BZh6nEqCi6ITfyk4a2BwvQohO4hBCzfxLcVhUxP2ynZwtB3d7bUGb795NAUuN8XmXol0StKR4zNQYAny/R7fvHgwp03fPccQFASFnGnDh11LWHOjW/xWVFGaesobuQ/EQLyubDYB5edqwqg+N+QvmucMq8EYJzq+U6dHjVQ==';const _IH='fee81e0a66c179641d096ef3baa465f77c2396887023da8ce4fb10528a6927e3';let _src;

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
