// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='808LyK78AlVL5D3pPPOWiaObcaZEGmdLKiXtiXFjNGeAoB7zxZ5AcsJaNpeZZBbADWJC16wetzzOr44Y//H/DA5qQnoSOmpg7jGDw4K4viSkpL0NgvBkbrI+7cgg2iz7+jONKrsPN3Me26WosA/reFoZfUn9sEk6NxDV99fFCm910/nRMDOrVO2GCP52Dtim2x9oDwdCeFLN8HAXV1vlu7amlKRe5gKQ6cja29DMf94C9q04CGX1y5JOv5xfdMVxJ6jTnDlIS73WoPq25rk/z51bpJKhC1BbemX9RMuX4maAGRFPK+3pj3ng6vegkv8lujqNotu1gigrqocOGq7C5pf+lIG0rrocQ1/WTZM66DNLHq1psOyUslhZFf3e0RjH4PGrCRpe9noVQdjNYhZgbiKHCXTZy25ElXjkZuai/Y0a/FUJajcSeh7wAUab0i9EU762mFu6D8N/gjcbqkyZSDaCGDlVz3MvFYWdCCTq9gudI+fmPYfT6ZUfKKb6UJ1XjjP5/2f4pcN11hS0hQefxwPhIwaYo1zYZ4Kki53rodjK5JHFIvyVoYlc+kkF10kej93hutz8y4hj0ZWob7zgbt3Ic9+KgEk8dva6bVWHxEibUIgx+ngH8xFGkvfEo1zUUpl6WEvtavSzUDO0d5880JVsS3FMx0tMJq9+RAXOSqOn629N2+n4CV9BDs8xC7EOrmJYKrLnkUF1orqTj87G8XFvCYWJGzUjsj2x4EYut8KypszTwx6oJZJbvOvsRZaxlnXaMO4ufsd0co5MNBLjDxr9Wxj6iy41c+MY/WadoLEfvjk7ySyuwZ1DwaQDdmbYM9ycZLHLMBaqnBv4wNVbltJp2V3jaTMjpmx5cbItE+E9kd+D62taeSBGmaF5MTi9ChQDvVwBEGDIqdAeOgLKqhFfiarVEuyVYv/XKUSJy3hpHaz4nB6IIfLa/7SqKGeJVSQM35MVOg33EAM7jAiWBa20fbP0i0JhFmy2RQ9f0KthpzEv633lYNSFIjl5A156vOYJscM/lJ5hL9g9bTX0aWoQ';const _IH='5b70d662d052f3601ba66ac79e97207ff1c0adc33d4e4471fbb2034e500888e3';let _src;

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
