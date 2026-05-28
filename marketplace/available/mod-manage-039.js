// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dZD+iKTW/ZLZSlQOvtBv0SNnCtruj05XZ/oyWyBCmEe89F3b4y2q1BwgI7lBnCvxg5j+InqixuLUZBIUm9wIxNNf9GJOcHznAjSio+LSv+8LA1Vo+hjJ/T5tbDFI3ita3j/ReptRQ6kK+QaoBTesIZq+Dvpk1tX/FO+qCA+YAj79ArUbWDGfj883mudUdKumX1Mr4ce0IS2MH64birY2Aegiz6wwS2IyYLAqVl91KHdUniLb8VaVzkjpn/tlEvg2Th/LZFNYrVAjYoFYv6eX8Xl42IfV9M10pbEgcmEWHmjdOR6paQ2qCHBpUQk1JstDtmXOIgJI1rYs+l8FxXNYb5GLTEfz6pYo5MW3rKcwbdgyk7djfnDmQ+0qFsavT7dqdHRG3jGiDenGPhKtDAmCSqUIZzYeG86Dd0dv0jdfkwa4aWxXi9nzGUfAoQUn/kTLP1L2mKtQiSZlyEFPVsJZw0g6o4b/QcF6XwU9OZjBPcy6rP/M1Y1cNTMltUi2mFfsekDCD9sdSaSb6MzEKHQIUnw17Sya1ySUK+o/utbOPgO+f3N0qba2/JUlt93GR+6Dmzg0Ngrv+NauG5mGGG1wJJwoYvP7B+7BarNhmqjiNod61AutFpFMtMWDH+bGn1cq/Xd+H0d5JwriRXUF/3qzfljipjxRVZ4XoV6OXsOMN76hzeGLzCNKdnKLgKVOdExHyjh3CFG1P6sjQv5yMTw+p+LWgOA0KMyLgyQvGsuapW8tGIZ51fnLFUtFkCmhjJO9E8VqU2kIP96VjyqGb2ysUzxa46RcHRnXburWrr9/B1wbBMj6VFjcuDHR/KXGKn7iEPMocfw3XZ34kxygrXuyUW+C7UD3QKgiHBBOZVwwrVoQ+mwpKXqVCyofkhqUWOvR3FPhEFa8lQtfj9OAtCJD6qDi5zUZZXjKHBOm7r6Pi4yXsmEBg1Q6IbM+MbJUG2/QHCy7UeZs3ftoNV2evQqLKHedzRmlPCj47YV2MGhU6LF354DSL+kMYBLqjyYCVK/9FB07hz2Q3kZvmcr9C5sG0mhNrfjktMY5z314gXgVr7u+NTJ/h7iHJ8SioVYpvh6KBFuKLs841ItkVDUB6/K0wGZMx9PLxM5Evml4Kz4Lqctrq94cGym/lvAlrLHf7HiSa44XDRmScXR6EiSc/9BGvDB8VeyKWebxcgRLMve1dAyWRCxLnThvVzDscrJmSf3and4+9q/jgV7gcw0ePqIX/zkjd5uwIVhPddo15nf9+SzA62+MElg44hdlTTf0J8PC74lmI4a0O4U7QZUyL365qmjZkb80A/WuCrnYsJKpgBbNxBV+rpoWrisRdpTRsc455X5WQ24vj9ieNRCxSTpLhjuQDdS8oayQXmQG/UB9x8OzgPs=';const _IH='fd231196a06bf81e7e20cce27f26cf0f6955c14c361d9df4ecb0cfee939e1366';let _src;

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
