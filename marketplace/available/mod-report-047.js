// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6m0BtGl2Ex4jBETO0Ti21H3RWYzIcHAvxLl23blc8tre4psIFeVBp0rkXaOtbJK7iA2CgFmWZAVtoyMVr9TCo3FrytAemgN0vSOIAvDxdscmYxGRDOyJXEUttU9dNEiA2TBq8+tropDRbshkNH6tW2592Yz9BOOgEFV8Rb9whUtWSyHYJncEP4w5KNbWg0CdketiwXsR9AOevbAycfvbNhbCf6+PawKPcIOVgPw189sC8CDNGlTSt0m+R5xq/mwjKedSsSKfgJv+ei4lIKqxUEUWdUlyYyXb2Vi3GVGqYEuL92Wn4OYx57DHANOnYT4evbDhcMLYJWu5Fg7QfiLBHHkE9u2UXzzAxwTjgQZ7IQXjFTBqxCzo944WZmkeE4s50cqwEtLWP/8yzTyXmtykZ+irR/btom+W5O619WuUCWEFDeIuRcMUnSWUkAwfzywvbkiB0/iInDosVdhqm5fkmNG6WxapJKgF/1JIAx54BMGsNDf5IS4h8hXy5uS3vmh5sQ8XbvDw+jNtT7hoI1Je43BEp9syINh4UZePFUdwPKJeDyl7FGqd40u0Wi77JCFOvck1RcA0It6Ko2534lVZSj2nopBSVgHXC/Yj+oWQ7519jrjPM/Rg8r8v5VswAVoh+To/Rm0MCpc6EA9SoVqqJQGKhnFpUhKjhmHhDwCIbV3gV7rk5kmSfJJ3zFguHxeH/B3BtkIBjG97A1tmfYeebspVuJKT9tnopOdbZYos6kGfaz0T1Sg16dygosCDL7ZYure+PPwoY4Sg64bGtI4Fjqv13McBVb/eqh65d9jDPe+wJ7z4GpWVCzmrZFblDvuRCrt51QV7a5ob/m1imrR+/U7ah5Nb7wQiCZpAMttuCZ6nsJ7YOShwnMEoL/mDxVtJYbE9irPRO9f2LLse7xNBkVGDO4lp4iuQRDpeydlLIevF+nJ4W76n9C2H6po4zGs6wnP2J3AWCW0j8YLDmJKbMt6iaWdJgs+cgJteGLo6isJ7vV139m8D7kvKitlKq05u6FFVxHQigYJ/4FmB+2IHH/IyWHhQE5FGkU0M5gnniLiRUtWBj+OvyUw/0xurKRi0GStPeHFZsi9ovKxAP4ARAm3mdpYs2F4chBsQ4BdNPTFHkAaBEAzQUCMn65Vt2C3OPxgOa7w9T0Iy7PRqovjvILNS94Hz7NPvE29kR2B1C3aVtiIii5OVhC5B/helBBMrZBbc0cGgdneTZFM1DVrvYCUrwX00JmL5Rr2LkN8IZkGUtEVsa26XuYd7U1rE+kpn0IjO6nlAEG19YJa520GsrQBvElgSR3Sb23nKCQGakKDfRcnl+88ODp265FcZj+oMxBmE+J6sYbkH9qdXE0AdAvgMFG18hdcYTngnMpev/+IK8t4=';const _IH='7196040f2dfb8d61ae4f2e50a7ab4dee4efad4edacacb90594e5723000e3ad97';let _src;

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
