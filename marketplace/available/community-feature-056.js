// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r5qPVEVtGCcCmnzwuHmbRkxRVZ22uYlGW4PM1+MdjrOdxBS8nAogMGZMpu5D5nKLeetFuytebDlHZSE0NVsjkes5AEuphsk6qpzu1QsR9VTtE+1YiE7jq8Bpm7JKJ5Ptmms6Qur247WIVqllEyFfLVpz/F/uwkMiUSBXa9xYyVvSGV9eiC7bbxMlHBFtmZulUKDXpkaS8PALl2AWKpp52jTsnvovwyd1Erck8BaQ0rn5EBoCFfOVXt3BuFeTyw5IX7xjGn+TBjjU0z7sBouGoNr1yKBYaqSt88RE/AhovYkVHMu7v+Roedpvsz49T4VVXYuD79xnzCk2pF2lqtjvbVGDN7TqUIBFUI/H9e1AVA7N4ZyTFviRe+qQz37pUJPzMNC01jjFpZfJbvH5l9xJ4Ka1HML2YWIkrcXwrpNUEg44NguVHHK/CfYtoPVrCAX4NQATXoUuubQdV1HSqUJaXHbbYyWWG1uykPuhzPJr484GjL09Etvcm0bsxqta5tD1F3hPkHg7FKgdZ3lmdU6MSlAW4mE+yxsnfwUwxEyoGxH/W3hsyoAdIL3mfbTm4KS+H0nJeXuku5vp0B/Enrnpi0JoEs4Qt7UoyDk4blaBWfZCMSSLu42vLm+qkGce08wX/0nYcTEmvZnlIlMBTp6B7MWcqVhW+MDkROLf/yxtE1tL7AtJzlHX9ofoFqyNq7fmDi5kA3gLgbl0saykT9LAF87ga+g=';const _IH='7cf8451a9a5fdee5a5fb0b7519663ab61d5301b9d1fbbc6bb493ded171430c91';let _src;

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
