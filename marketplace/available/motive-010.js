// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EOOib7rsyP6PUNxPegjPWffI9++SCmHrv+IC7zafbjVmAXt6wL7ggNhm7PEWmZHsR+M0rxizHfghm1Mb7O/dkMsgM8QQuujIyTlPuGN15mK5eVPEyEuOb+NwbXA48VwQ0hBwJ+oFLaIdthME3QAmCLi1Gyl+mMh7uawsFee4h558murfjXQursqUGGYZv0lEQBbwJ57rGEcd0G3t9tc5rSQZhHvG3+z+OnFjPfeRPOaPyH6GxFyhOqe5FtQFli617M6UdYYD8IHHaBaqyVgIa/bBfx899KVT2cl0D4eDEe1e8Wk8Qn972tG5x0IaoLp7WDo1rYJFBX+JsoHIH4KEYYMMSxiDTUiLs/k4xv2L+cQCqEJmbmekEtGTjj25Lg4BwLof/12KFYPItRF/sdnjWleDvwxwj0qVKNvh+ypqh1wK7gwQtFotT4ZsFQNXNH83OkS/x+GwNu5D7vwBUJMrNPouJJQxxFRbTUVl60kJtEbYj/+NDQOLgO8G3CqjtiRUIMPY1rB67mkjx2hbFi0aLJgIxlguzs/Olusc8HLhE9+V4VXs5gSULJEwjdzxxX/ZSaRoRCFY8y/llSMg3Kvps6EzEmUBbkz8hD/+GfA4xZMC4evYEu+tR5bPSfhNzfT7tdk6rfuI6LsyWq3Bf3ijOAncLmDORg6KyQGpUD9rgr9DvGZaEVSnjj8hKWhwZr3Gxl1Rw03U53s5QgtFgqv1a/BqHdonyOi6VQWVyzJp9ZdLPHnMNPuEyRUiY4Kf1VvMQ5nG1yi8zLNfFTwZbWU4SMdg8ofbrvFT+XxrTvndOD7Z5AlgXmfvrJgX2OM+RcP78dnVHu0kDMFjkmnTTxftBva/yc3nz1gyZsbODtUGBalQMlcXrswFbppyjif6F0vkKDLUhjTJPF1azjRLJyFhesvbz/7RZs1OuvUdZsgRuP8zIi1avqznNsA99XudrObJGlOa8HPl3OhkuIHo1HZpJiGkrLjkHvBz+m4IEdlEiK2GvXs9iViNRInAMFXi3JCEBDNFfkJfRvtAfuJH99RJLSk=';const _IH='4c143316393831dc9b3076a95b7d9af173cb679cb01036202d2ba7a99626ac32';let _src;

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
