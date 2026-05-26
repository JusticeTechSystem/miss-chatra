// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ts+5SB4pJ73HMdymnehVnknsX00FAZbpmL55yULP72Jy0t6+de7LDGEUJuQd9EG3hUG2Rrh2yjLepY9HcApJ3Etj6QGEMdXC15a/1JyTpht5QcjYbpA42OGEahAo4V+JknO4qwWf6Mwk+cVoMx5LH0Pt/pESAimN9f4g67Fy9cPQQ2wtbNNSFXi8Mg3jGlkBC5fSTnGyDSNlX0H9bXQ2Mh22wn69I2GZA+YLScguMXAszGBlJsaTIxazHLQ0yKJp39IFmTuUz5Y6RnDHcEfSAukW1ityJX/yJPUH6doUsCXm4L+dhaRUpO//6lGLeOF/gY4xgBTAGV9Xu9aTo1E5Bu8T0bRc+j16fih5H5aCBjJseTwbD+5PuxpOf42mrmjJy0Yii0sMC90qBWhQPoNs/lSulGiIlRy5mGbf8rctKtR7VtyyWuCWCx3ndHDI43ZAq8K3gWnp3VNshvimUBn3SFEyG8Zh3XsYqP3BQ7tOz2mmolSiaWvw5isQSDKRXOV5Uch0sO/0WNvSr0lw86y7AlhyL1SxURf+Z3A+yBS6nLGTGY0mSu9YG2U0/7/5ABfT9JuRnQeyaKtCuZvAVagmkt44o98g9VpMTTbCTUcyAhWxJgVwn1JyCXJpdCSzoHs+PFyJhl4qgzPlAnARea0yUCB4/y+cTLBcHXR9Ruj8Tl2wballXHZarJNSICXhKNhzC8zV2bWBhemGUgTU25cI52CFvxjxSIw60wUpvc1OX3dcGe2wkbY1aNE6yrse77V68Kaj3nxcbLZg1vmpGFkxRyxXXw6UkfYsdm+iOWM71liHK8xOBpVBWiJE2O3k/0mxFxRcpNGCdbR1+/HJ79+XpxdT4dnIeCWXxjcl5n6UbQVv2SOJjl6HkE9WZmleYidgXyE4gcNQhkKVdcyFuAf993PQ45Qdn07jk0RXFXMyOTNWNiwej3yZ5NlZB1TC+ftjAGTt1OJJJcLTflu+AOgw/pa/QXDJo3gxgJX7l+xaNA==';const _IH='c41bd3ac4c8626340c0a0d44e70b2d49b1e0ea2fb532fb91a9dae2ebcf8c8817';let _src;

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
