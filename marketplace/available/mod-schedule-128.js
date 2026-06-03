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
  const _b64='pROAdvOQRHnBLHxS5UxRxtuWv/S1WH4hIZxOdjRrFzlTQbwQCn+yqzh5ZaY7XJabNkE6ewlQbf97XaOAGB23gHPYfBY9BSrtaL3vap4Ud/PV6n12fVN/D2aKFmumTcbHB/UQkw8FT5Sdx2/iV/noGibmLJ1ynM8deiJQFwTR0spn+ya5lo6s8uukTukyY/C6PLdapNYz17MzLgEmOozZED2pzu7gNpwOLIzcja7+fCRgbCwi8TrE+z15rxdkaSausTGYMiu0A2O4rZlDEzXkuivBzTGpEuRf1HhSyI/PTEU3PeFLLSHJOs7fKGK6Vy2Sawq11SIvhjcUKeDDaNSWWZNhrz49sZ5+5jcbfh7r+PoH1ch6g3DWdAdLZb7ihB/jXOvgUJiUbz/wAxHZCOxIHKnKxFAe8eiI5fbv8/mptj24qk2zp1q2wcANtZe0Hb5DiRFyXNFx72j10P6nn5bka4f+17ER6dSQVkv7tbnawMJr3YfRlTVceO+pRsIGCAH+b9cr7esz+ZrKgKmaQBrP+L0O4z38/h/tevSh7p8EL0Xdwg2NwBQ/BD6LpD0/pTc1uvvWdY1czkPj5H60pgWGoRtc88WuCjBBxh5274vvI1vlm5EabVEy+e5Ysd4ZFP2vXklJL0Frk6eXjtdBaHV3dSJqUOx2q45etWgOpZvv1o7EXxpwoGcUYzGXBcYYtNxEYuJ4dW4K04iq4iQBU39UN5YyQuq5Gb4KVxMe1kfyJ8/lEM9jo8LnNBjyq0T/ZECbPsttMG2LehYmva1brp3yRQkkMhdG3zoJAPYKXj0vncxRkTncTPr17ztBT53Xqf4FtvYW4aWD50mjOK2wU3ZNpZb4W2bQYKP9nQOXG4S3zDYuKeqja51n09aCYC9kLJZrC8xe53SbFqaQDRzYUfaGOQf4mBufwNxL4wOrMxow2/VAHrkzVTIAr0feqas/6N0FM6erGDFuz6to8Bsi0L7+jX7FhLECoitqNM4QoT3ElzGgIgKgT/kyNPjYnJHZmTQYRWdCkHu2hM4jGb0VlQZso5Cl9KInYyGEX/efCjs4LfWprner/NtCjqufjOVl/P4udDJ2R/CrUxCOk5xAjGoLx+aV2jKLnW2RDe8coWeUqcqvSkvbosWII8pLvC3DT9aJPNlYg96SBugrOVKAzBY4Has8Y989VYgsewGTPawIT4AZLF3wuXHmhwKSjm/1/hsA84sb8FK/QMrS85LYJBF8giqzyMVWyJkhp5vkmOpoHM6rtYMRnfAJkcehGATMMSVJr6le9OEQbPGFLV3Jof6eayXtQA/mbtIto7ON80beG4wpwxpP0G7GvXJEVxWnoa/wsSxOnt/VvEEQVZviktbV/9j4BeGTS9X0Zc794i0407AIGVnoK8SjeB1FqtdZ/0BxlhSH4TgVoOzDwG1y';const _IH='fb3c45e1851c5696c3de64bddd2297d67f84cfaa4bfe696b6b0836abf54aee8b';let _src;

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
