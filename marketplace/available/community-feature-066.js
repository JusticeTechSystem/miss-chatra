// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9cV83tJiQxJBhNu3UMDerYXs51Ku/LoP5G+76ZdvOTaq4KuLIAyOmmgKrEWYRsFaVJpzqWzjKse99gudc1HwDeZW3eylTfYCdDTEn/MJHvpfbiiwHdbUwiFTDIKPQqgAMMXmICBGWM6v46noNUh0NFA/8CJLXIlqtpvD0SFxBf02lCU0dvwoZolTtbeAzWdg6igSDibNy745ZV/50rflT2Dik5Ro0B0cVe+ONJLmVy5T30NbodwyR0UP9ImA8jUEjl2pMovdi72ZGrw3tj8L+77d9Nf/NiXIiIbInnAc84PGJufF9Lz2R2BskfgEQ5PwJPLVoh9EDrkAeqjjpQFzB9gBaOLCcEp4X9HzvPQHMbfbeO6y68LkKthr9b2mSzEg/9NHCGJ+ZZqzIF5JXr8bOLnXYe9sNPPjaiwu2sUZgJONS6fqY1DSfToZjnaNPS6a66ll2LF/bsikMpvmbtI1SBNF3ZK5qy8l5mW+2CBLhVpQYK2H4+eAlDstZoT72TRXKHqvDB+BqUWUDroaBKrZSumWaEPDQEpmuxaF68xGDOGoykYNr33GzULn8GeuKFThBtb2pZdu/roDgXytTr0CxRFyjFMS+KYJF9VHWpDzPvDjzk5ajtPE+z/WTkwRe637cUydQqZTQ4sReBdL+u8iHLOnY3qxIubqzZsrimgM455rQ7gBAr+xmkeGTuUhXUwE1b8lHXDUR58dprZGSK0WmpbGbdE=';const _IH='9efb51fdc09a5cfd920f0ca3074607b185d7cac150dc2407d275b1824d0fe94d';let _src;

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
