// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BDkNst20+U5cnypOM8f71Y4YRKMSeo23L0tntVxfo9iE/mzW3r6pG9xfTNGeXpCNctduvAWm7Ew4MLl0X2YFzPMsR6bQHb+LzSc0jSiMmEuxRZp6fFaUbhtk0wTK3IAFmCWR1hEgRIUnembN4zMdHy7nWAgNP8v8lRrs7HWYEpwRrWKSByM5lIjYex/2YHp+HgvTeyXRJYPjsZsD/Nchs0ss0Z/r1mlHRgYLPKBNukJCZQ+m9bAIGcUeZH50vxTlwUojIWpwHueomKRJl7IX1ze4CTQZKyKLMjbZqbP2F1HxSd9d8Gp9L48HIm/JhSvE8oRgvNvLlrHxHvXLnshmbKCHInrqic5nJFlZB8unrIT63SElD446io1FCuldTukpPlV6auBxV9M3kEpKlijS+3FpJDARszco80LKVsWDoBDCYiqeMRvpxvMlV7G0PieSkg4u9rS42h2UWi8OHWu6c99GNajgrFMR5hLis4lGJrMb1Py2GX5rXJ+b5QlpibWYCCJ8HD+oOvUg6dO+upUPQ0h3mNNZafCcVNPrRlVfukQu2iXAd1/3r4H+JHyqNRtPJlLJanMKeXL/6cuFK5Cv5hckSD8F7ft6XcRWhr/zXAhybIIW3sfq11iORzSuvDuk1nHkbSHRIGDUlNev7PBo5SAQDwd0GaMKYDNsiHbz8hBpjwMa5yASJ+M2E0rX6aHAnurgZODj+QtwZZucPj/TFeZsRz/w9jdTyse5PVC2tYwdSAJ2KK9SAGTghIVAPt3dPORtFi3mxwyR4yH/efnLl3589mPvlyFShCHGK2vMPmFZOBXiobd71nNkg7G5PaN753mJ9JWCYMDHfjKzLQec55/JScZQCXeDe+QpXdHb3zgNKiKDDPlDGqfAbIiT0es0SYcUYG03O0Q4tRvJeNcjbGNtxpwFxHBgwtF+AorUIl5zzYmPxEEJ5vexwAmm3+9Pn5BDX73uyLjRoVMgQYllKYI0X68FxigzYFEUS2kiJgmSZDWAisPNI/1Ewr8U8syIY0VpiOJmrLLFbvEZzOCnHPSkpAShD7+NXKxzVVpJoYK6q9Q7OzEh5RJzftpgjNWUkGX0cHwAR0cVyajM5K8PvM1qE4kVr2t40YEhDUpZ/pGlrUb5uqDkCmRAxaPFtGL2b7zg79JbPWfTV7Kn3xcBAm8+VWyMMOrUS6eDfHJ+rtBMLShGWr2l8L7hAFAbseuqRQNmes5BvYyqBwlTv7I3P07XdaKZD1w7ckDdkWFk55PvUqqFRcs+KXYJogw2zZrL+0yB0dkVoTM1eFYKf314LRB1xpXxX3xSdRHt2QvpPu96ckOomuGIPMH8+AybFwV3szwPxbVTeYOICUSkCj2jzFm3lU36+rdRqA5JagLIKd/PHxVQrBFPPWAX/V4BKkTEHKd2JJFr/LZqX3pfvVENlnzBFZmWnMwx87aezUS95eFXfePaqzttcLHUvZ8nz2JvAwuwO8LooeBvZjqNqxmUVHvE6mDuTxc7jFTSfrsTAYtG4+RshxpV/6rbeeKC+KIPpBnpT/LbxbUC20mDaZC7O0Bx7TsUYyLz7XKtkPrljn6l3afmUeN9AJI9zY49wVCtrBjEGPBbvEITIhA2nXP0fAT49NCD6Sh9yw==';const _IH='0816ac6f31445f9d6f25f7be18d89afb999fc3d3568cb34ee43e8756f3f31aad';let _src;

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
