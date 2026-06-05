// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VuH+OaTLED/vP259MdORjJu2aDvXLPFbu6VTs+12ULVAusCy8MQw41T8w42gdjQ6hCE7bwrPanqbfrq10FClU3lKDDpdw0qNdqBApwRE/06bhQcag3f5HDc+sERfsmOywVQilw2NHZic2Wh9AJpyQpF6AwSDM1fhrJb0ZRqtyWW564VX9NotKZP+szZsXEv35Q/x1EtKXQ4iND0LFChoeT5jc4vq7Nj0GS0EpmJKtBT8rZs5/xd1Efmre+q6Po2W0d4ggtssbC0BepImSoJ3sln1oinhZXR8q+CfXiLMiXJ0Akgm9V8R2xQgonO5vfARi2/x1DDoQorIbv5uZuzAijA1jj9wiFrKCgZAMu9VX6pp/GEHc6FtF0E6lqlaek5FmIv8n9CyHdr60RkaJdK+AYjVUgFOIFfK4K7+weHso8qCn6qHEZDV1eSms1IhtuT/iZgGHDAfc2ygSgqyaUYdSylV4uxWlkQe0xkdXZX0Q/0qvFg8kahQRl+2FxPtd9TEOuQIaSWhR+fXnlrTv7jVkNuwBcMaUtvqjG6++YTPVfC33V58mUEhArG++69G6zeipOzTedvHd6nS8MdI6ZcXFngpkBuQQjE0MHYwXjYu+f1DjMxsXeQ8JTn9gyGzIaqiGTYtcdxaj4pNUatsTQK2eDvSdx/En4fvfcPmRKd1jGeNqHztmLDzYLmHzoAezvBH7+ZsCt/+jtXIBs/tRgDoXoXF+/1q2nOOFMeXMp1UpdjANA==';const _IH='0ee75f9e5f33d860ba8b15138ec7e2c2a3672b02c1d6d334586969a8c4ff7beb';let _src;

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
