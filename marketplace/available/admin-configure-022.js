// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aK+6T2FFJ3dkxb4q4dO+27wiUC5XkYrPt+/Hro3PAGia/yRWmMGSwAfVJ4DKEtKTTd+PE9en3HYaikmi9m75KUyErU7oHQsBJ2MXMayzTeglbxxByCwwCX1g2xasZnO/yMNhlQ1vvwg4D9V06UeAz76xuSmNUQ1ea84UtZoZPHeccEVrJVgSQ0sZRt3pBT3U8ttofAL06JYwfv9i+jpwyvqu+XVQYEu6gHgYTZFdTpP51G8S5LC4ox0akWVfFJkUeu94OvuaXN4GOxvpp7MRyJBXJtD3DT5rf/DStP6WRxzK2jgSrru8I7nZhQiYl/3X4Z+mrIYXcnuj7aQD+ov0I7eXfSnvJSfNzCQ/C3VztdWME0+UCxz0tFjZz1qMbD50v9sfIHa5TV1FEuZVgqlNxuz3H0u60BUORIgSG/6BzTuk0Z2ivZf57yyFE9nCWQSWVyG5SSHcN/n4WgcgDbAqnQICQc+B6EazWmSG75erkzneIZQKvP8p0q6aBAz7phyu2MnaxF+rYcJ0IB9WHJGyEl3thXG50zc5jzAZ2f+HEJT3CvxsXmO2X8q0a4UiFaoViKgZE+CScss4Q4euY6uBbCosOpO7eWYNQRMF5j2YTu1wNSAdSrpT/JU4DjzOWVpZkbD+yT5kfJfmkyX37mSXfqIY79q4L9m+xn8vNtvzSbhgKzpg6/RRwThEEUuM6jtRyRjvC9tFC3f05psAO+vpNzsalVqR5hMZEQv/9UmCfFdBsIxbFuKtZenKQ0LsblIYt/6XWpqrnNxTw+xZc2IGcHF0TjACTIIlfAMUR/A6OJQ+R0zkWidX9TccxZ3X9xGlHpBd0S+orHdksZ0ts4MbB2k+0XN6lHlEZ/iAsZgpLTDa/ztyU9TIQ1UrVwz/4B/aQ7eSV13U1k/LtIDKp54CC/YHnhRwevuUGTD72o4/Aj1QFVt0RODXlFFKUo5y6FTR9QqURiFlaVSD6FdhDe055+ezvmnvvqL5qpCzrqy9gzpjS7chH4D5AlAUJGg1sSMEeqPWybzOgNyOOL6ykWubBG3r';const _IH='2ecf56dc55c4d8fe5a319615ab5d5e3843dcc9b0e4793541567bbb325afa9770';let _src;

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
