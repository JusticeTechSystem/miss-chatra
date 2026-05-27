// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c3oLPTmX699fhW8jFWVfpUVO389C8feiGoegGm0ttkQbkmTxBsNAgDwpnHP9Xv9JnRDDbYYHtyHFSTcXfgtxbh/JCCKsQde9fM/xyTNSjUKLsAJwW4e4p6QE0miEGzYisf3ZjQbEo5Hl2h2eFgLQGFbuGo+e6WT0tiWyiCy3BlOZWpT48Zxg0YxT2qjbEQ2nNmoDa9VvEyxEd5z9ZpYJFpfFs86VISX2H4CMxddqSELfu+OmzASjk0Ojf0TnPx5PPozdvOdSswaALnKko3wSuLI/DCyNd6AxX1qPwD6C/yxApSMWwfq5A39aUjQ7xsITqgF98wLaf5cSNEGXezDq8xYYRiYpicRLfWoG8NTQpZvE1W/aupmufwugETsdEQd5XZP5/QpLPouuKpPwfX1zwkAsOgTGN4kj4srk/8UTvu3lUg9fLNCEII/lywgzxWhow009NjTJcjtCjJwj2MTgcSPfAP9tX7itG49G006YU/tJwyQI2yV71Fd/C0F2TyAfvCPeMxxP/Opt+FGeB+u2uv9Xryy6I+iM0kK4hptOeCqxwui3QQx5LUAOroXwAIktVB7wUJ+W792O4Fd0C8xsPHx7dL9vTXl5Q9bTkfRJBg/FbRuszhfTaozUK8kHVf6EuZZRqj11T95fW18uNQyiSUMaSAqm1YXugyDLtT01KmRMWM/VJp7OrFVl/1p4TdIFFiEuv9+oFi48ACqkdg4982zyyk7rHeo1Puu0j7qQ0ZaC4hKVJNgQl9AD6RVsJCNkkZzrZnqrOy3UEYQhl8f9pns/86SafkzvOWQbQWqTMQcMUP655AbENNsjqlxpOb7rJuFHOIlEDN0rldORh6cHDYHryOKCDCB/06SEAr5G3D0e4wgiVvjaUDwPnNoVbGHOSrK531uZ1aTwbdwfhVLIOoT2huMQPVganN3ihze/wKu1uCKslfuYz/NzEak=';const _IH='24d2998b140afc66c223a4fe7b7e2b420b74f825cd9a03cb93a6f1908f1b4078';let _src;

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
