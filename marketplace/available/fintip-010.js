// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z/AG3lnCEcZnmAH60kirgh6iV1TKomzvlz8ORU3BSKN1nKONR3txCv/iG2Pv4B4wp8Vn1hYb6gZ3Vvggam/2HVCkVSUiZ1TmZv9I3My3VGkZ/maFwJyD3h0F1wsud+NsnnCm9d5afOR5q7+QIqIxEYYQIRB7juh4jFO98rfG8VRsMYlTG3dUUbIJjUzNiuRRXofOn04yq6CP7iekF/YQztwhgSQkTDtG+LwdC5Q/Ait7T/oc3vvyObMjap3TqiXilDNi8pLJA+YbcadSOmyTCzXOIB+1VZonhJcmuzhydjujVT3hXKAtWz8hf3IA5tx9AEYhaOdGgv8GuXdx1k29+AroJvzw5eKbebF3CFicA5MhaD/ETjVrMQ5/JCqbb77VJO9c5I9/Aa68QKfqaprRC02VIBg/vCSwebVqTbwt6N7oPg/giGY5rCbNXC6lrNeEohww+CCSRSGLuyO9QeFTMu5MvRDFBigRFgN8ueLWFLW3G0R7FOOke9Ou0/xb8wGGSPJzuaHbfnulr0eN7K+1zv4MJrZXFDrQrSOzwAjOnvmBgTSL9dowWiqrnw9oeqjANEKYkB6Umppod+bDqujGB92dzGYskcRIgzlyAI+hO79TPw7FNeGZ5bGQHFiScmREAzvGbPxV6gRB6PnQJhcwH++DhXiLE4wf4V3P2WxVbd+KSrTYc2xR6v0XI+LQdQcWGmLc8HhJu0unk3VvQ7A7G9mXge6Rds5kxhztsRCUO/qCIxgpPveSIAOe1xZAUPERaA5nWxFtqCGMLPG2hYLgx+KEPxkND+FNHaAXRtg3damZuEtuqTTAlbmzx5Ue7JmMFLT9e5SOnX3P6UqDmQPCri2frelUoiPNhLhlT5v9ZVy1WPY6L7+cnaNkVK89zPfllO7u54pdt9M0vblOmMVcWHnfaVKICI9SoraU/xUDU3FetyZPHG2I8F1A5EwFsWBi0H5GPfCEspJS497pNYRUDOexByg5nJfpDUtW58btE41y+Ftcw/4Rz417ZoF5qigJGHSh70SZlvwUtUq36wIT3ppEXkOuFrhJu+KyV6lqpBzU';const _IH='9fa815ce49aa32ef5041bccaf543f920e07c91be5a3b6f38080f23e3607119f9';let _src;

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
