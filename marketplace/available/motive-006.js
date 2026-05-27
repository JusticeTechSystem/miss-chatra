// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PvADu6nzxi2lo3KXP/FDcBTMBsev4sNueQ6vP9byGDm9p3GfTcfxuHWSgxr7NbtyxeixNqjAQA9IUGm+ikvHhIGVKxoWv5Hpc1Ha/s4eeNpUTuBeEthaWI9Qinlyq5y0vglnlRw+VKuuacnC3Er8oxazS/YNhaCA9bU7xaasHl0YJJOPSJQ1eJ0QAJM6NKnJZlMd3ixkKavL+yoUlFUu6/7Vf1POiC+bTEXQGHZ2F353lx+myktOtr+or1f8sJZuVLomCKQU/kyYKrFhzkdI/5Vceas8TowpqrT9Aq1oAOgyEyGAG9oiidhI/Ea8JjBM41SP3deJiVFoAWG7NpcwbwsYZxRAOT4+ZSRziTqMJzOTynyglErx9y1DuTrLAgWUD1KBUybulvmDQsDjgmoY/Ln3Xl8/9B/UZhqw59BPjlzM1j6HJgFfrPJK8V2d5NyFmq0BD/7Zg54Gtu7VKEygF3qHhir7zXspYcIv6vKBDA1e9eAZZCji7lY9FxEmztajiWRw9Akx8P3/jkFU0CXFtBsKpf1fi1tgiARcElFF0hUOyx8h9HN3eA5gDMivB4qIttTIn6/LncVXmn0Lg32qBBY6xyWUey5lbgcKSwp3Kqd/kcdrw9/N40ay0mmcp/OzbPS7cYxuCocem39lM6kGnrRU9j911vaKFxHygMNa6uFthS3UWF8O/y6K+vzltg0gfcruLaAV6s3fzT9i4eW/78m1Q1nBblTHYJOGTrUdGfZsXPD7Nb5hiMN2fdtuebBI2k+rTNoPciUbnr067VkY5Hp0OnG3OUYQ6xEzI8jjPNXVciY+KAixs38v8P0cnlGlv/g9Hj9uuj/IN38vdHQpRirJpmX2cTc8ehZ3G+4EDxdcy3sctWzNDbz4GXAVWbmCVua4SJqrOgKYs7Rs0jvjx7pEpZf20gu+JSagVs1muvpk9MEty0CokOuDOVV5Fazz0CaXJGufqHh+HV717zZUNdyUMzUdNteUQZ7cBY/naY4zepZ53NtnWscyXQxEXaASD3+pva2GFb9F/M7Q7nY=';const _IH='bb6325369295c8e0783dbabb866b714da6ed878ef6c637216599afa5caf7f2eb';let _src;

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
