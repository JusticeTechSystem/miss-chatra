// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jyj0bGSWDtpLqX/efqJ7st9aSnBJ4ajqmKIIHuuUTMPfWZ2o3f/ukNT+0dSsgbTDWuITaNtz9uqRcoNq49psGf6M0LLJ6JbtntntF+njchlSTsZvgJJoYTd/CKzQjBHmG5CGHDGpda2g/rysr2WivLQnE7Nc4cX4SErHH7DmXOGM9j4XP3KsoEY4cjFgUr6WlhahSkr8lhNDAorKnJMEErd0EMETSBK2Fa0YTJ3VgGIn7o6IlzQa6qDqTsemL3U110C8FfeFvejpvurXxVmtoyN9gPNlKcM9IqE3oeqYY8TLWcoYCRcjboiSKqafY0S759z+7RhU5bQDVMSLA0x1nxz27K39ipXV8sqTdUDbv5AUtrs5BstG3mj8HfrxdxRd34H2KO7+1r72r9VkeOSNXozBgzFCUYzWk9A8Cz7WT64v6Ty4WjptcYZWOrKhpzIttcuAY+hEr0QJBXbQA+DKh8SoO8az4WhmOoV2fEUOoLBrod7jew4kk9ZgDQsrAD9iPy3nTfKrYkvmvhytnuFXZ4dI2SiPjJ/TE5MEeJbvokd9NAlD/pDJwsembNbk8Tu7L88TK3/BoFIW56vE6plziRTDXdDCMQR09b9vfzBf1WhH7QJKMyyTC6nG5TGamOExGDsBQJAyz7KWyq1SKWomU+tpbtB8efhV+PN//jZoaladYo8CGQ2m/VsfH4LQoAlUrXlSI32bwZmzkhhwgcNs/rqwqwM/lm787AMbN3OKxmaSzgbYj8Ruda7MnYaJqGLX28FJGb91PDCnyUpV+QUgbh4S5uDvkdGwleJ9v7IblKbs58M8TrZWmZNvRiNyDC7Xj4I3r+GfmxzEsdrij4BarMTZ7G4541x9ZQF6Tqlh/fkDxMBkIJn82mu8O4lfMMn2qWnl8F3mDtUqu1NWxw7gC0hlNLn6TnV3+Ji5Znk+Ich8hRZok9w5p/hhO8jxDa8DhKM7+s1O29tQ2pfzrlTk7KzoxAgAoLEZx1oeKu0PisMNz0m42u+gaTTCVlga';const _IH='39651b2363aeac7ec250d7dc36f00e497c4f028339dd6424b76607006c70a3af';let _src;

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
