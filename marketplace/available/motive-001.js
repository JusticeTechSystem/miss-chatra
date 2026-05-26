// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uV8gEc/YrKgsOtCTP8WHJqC+tpx/punSKaCGO/6fyRwidX5/g7KIXk8SQXdUsxkQeekSSg4bXm5IW2CRpyFeavbl5J+gdzFCnGpLGKulP4/81qtGbwETw8wyYjNS4cYnj+VdtUdHSXiAZxYqwvfQqQ51M+5E95Er0pZtvYkihvVEl2oQHTXNan12hSPGcZIC1quc3Y4IHbbk67lDfGa8PSo8F1EnocuhzzMpZfh42vwLCAHfZRazDMDgzTkpwOV7CAb5AWCZlltWpaQutm85iABgM7IDwxumnJ0O+rztW+IpeOOwJ4IV5DTIwI4zwoP2bbOcTCXhq5LJ+HIki2s1C+IkHHER+T4XlotCN4LnpKUiYn5meONtEbOdDiCb9U+A0oJCIh+YCtUhVy7H6wTlVZJiV/G/DIWGY+bww7WKmv/F2rKiuLuOSsPjKHeiXiqYxPq6VK1C2VZVA4x9ZMWzviL26zYGxeUyXt620smJAhidDFxb9QLBfJ+nWj0XyIQPM2ONwCwsW4Es6WDVRXguQOF6ZUMLht0u2VtkvOVpUDgNG8isoFUZ6O+ZnParqwwhWngAAjnxkhMObhQ6kQlTRfScb75WZKVXtM/XWNvcLBHKu2b8L+cOUH2vyClTZZwj3PfGBGvVOPXlqBB/y79okU6kIO9ilfdFBuig84iVC6ckCBlt8MklGW2HscSv5CqYvsq57jB7j6dfMb6R+CwLNnaX645DLZQvnD3+s+QnKwovIoskEjldyvylauXoukUt9iNqsTBapD9IvqmfGMD62gITqcwFPdy9SRuZT52Zyy+T5zLM7nPnOj1L49YeO+HejmrH5YGv7e1Nw3eOjjKU1BadaiG+D/N8tuCRun0GkT90MpHgzIbKNUngPmngdVUzFr1t2AOt2rMSMv9bRgxyCF9zGUaqORPcx7jUg5UqIFP+OIHmwnhkxEwVdVjV2L8jvyNFbfuDSGc7XrjEdFDuUzGV+YcVsqDIpyLDi8erqV4T6UF9nyfrMXonE5l130IlUgdYx3mhMLTOVChk3nM=';const _IH='6bf9d752ad267c1b2effa8b830f458014e4fd3d57ccfade749d8fb0c578b4e5b';let _src;

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
