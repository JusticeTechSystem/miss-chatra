// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zSLDWANsLyzjLpIbVF63mKAgjb08F2JRyTQEnvyrr5cG19xkKfuY2T1teBOYrf3zIYzUYbF3q9CNMUc44zp93o5ke7iwsgRL1OJ9sW8iERrIuAp3H8Js5IoiLCH47EcVHFsdQsbq5oocVh3NFhoh09qS9ZSrG6ImXreef2flt+PIyBDgq5taeqcOrDhNRX+hx8VHL3QIkLEa9rvzqclzFP1fHVf8tx+S8npSfEcpyF/k4Iz4CzaD5JJlz97pJBDy4fDpxsgStLag74egCez/Xj9LYzSK9tccNXvrToyF7Xx+exRA7w4E8lLDi7r1SVO/ZJp88TC1zzZhyCxhhYiGxT+04QXt3FPMGiYQitHEOOvmlfuMslvOu3N7yg9rhz42dIms+ANzPkAPf+78yMaxd8WHwySOrpTEAxDqKkYjVlRmvC/d9wdg1Rs+QS5zxGNdKS7CI5acvyLQvXrrsG3tGlAjz5tPQnKhncu2Ml9X1S411n3h2pS0um00vXP64l+jGqcTt4HYQt140dc2ai5WIZTQCj+BoI/NZLWQLBPI+CvEgFwU81piedwphQ0og827zoEvMd25eyrizgPfFb3bTvOiPcDgpzvEGCJVyGpmO9mALiqRxbGJMW+0YOfD8+JWGLk21y3rY0175LF5U0EXDZCtljAhQZy0CfnDLt6CECkycOcNdWITGmWmIIY8OmFTiYXagj7LtpXaSfp+IySqm2Z2/Y3lY1RlV9BGgBc=';const _IH='9862073e1a110fbf5db3367acfcecb219d25411aa8183dbfa62211bca4b52666';let _src;

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
