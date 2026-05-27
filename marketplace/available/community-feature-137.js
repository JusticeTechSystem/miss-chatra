// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='54AyDabQ6XP6apPx5Two4LCXLJVO6kYmNe4SsOD2pd00+XDHVM0HkC8gaNsMNkGVt6d+c9b4Ur3LUGtM+7bf2abx/yxumXKalguzQ2/+tlw5mkHzIjqGZPMav2YJc0NFHnDCMaL2Jwpg/3873jQCteC4ahQR5LU0IV5zM1uMsTFCF8bFTlnTQdC0QQYGu3+q/1v7CNH/YQvZ+9PZwGmYnSsFEiG+77lI8td95LeJ6/aCYOMo5MAYgpe5eu2w1pjk7PAo8YVGWPw/R4yPX0S2iElW/9jSZgtUHzXeWCfDcxWbGi/HbNddg+iU+nhNfkYiIfVoPZ923HW7I5iF+RKYEj8OKgji9Ar2L7JaNu/kOkIgYpDZCp+zFH2dss30HoXe+qh3SvPkWeUAcE9EOtjtJWaSGGljZnqgvPw1tlQLVa17N3x5mkvy7PTFa67Dd7P+HaDa2E23mjL95/BwB+mSu/UL4Vsv4OML9HypujESwTJ/wgvFJ9t74oaM/gri771yVJ8hcvAj8eQeZ3NUQwd1YHXRaC1OIH8ncCGQPowOfotO20KcQyGelnHkOV7VfvT5gNPToB4xJUb3yTefmMg01kHNm6uv9hQQvpN11sflTIZuraLKcCSULfJ9PiSOOX3jb1S83YL74oES3WUdZsv+gNKkF7yNlwVid7dc7NSMSKDSeR9bXjRgFyeye48WdQ1lBbH6Dr/F0JkpkM42aJjr+n7avVK7NFUPd4A1gBCDWEY8+eA=';const _IH='b3d702138a5a094f70a9cd02a3551a730404b7c5a0a9ff11572a15b354b9f8dc';let _src;

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
