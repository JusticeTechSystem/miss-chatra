// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LizFxjeNplsnfB6kheooBGslJyTSlDV1XnvHd4H+CjFYfysSlg3N46OFT3PBMSCPMkz8V5QJSu0X3SODblBbBH2iuC07nbqt9LbM6mncoIZrS/bLxQuBPuDjGId2wo2NIdKkhSViPHtpqAPqOS+nScsDb82fTgt0epFB1+0evn3NJzd2GJTJ4ONNNTvH+NF446CPWmypnS982cyiwuqijUFKkzuqYqbdEGE52e1S3IhDPCkFd9FY/SZvbNJRkZGnrDBsnDGRBWtJk1dohtqiGc1OIR2IJoOKKTn/QvPUqkSr5zX1OLWCz4D9HvWq494fY9rOvPOnnRTubQM9AoSEuF6TrCcnuMXkQXq2AKwru+GU96wgHUZ3JJRBoknbLnu0wJ2zouTQvus9a6ojq+QvfyFVqxhOVgMTjBrvBcvNLeFVulexMsljnJxgXTWdx8o5lvD/3E1JzawqARv70UNjplrKsZr7ZTso1M6fwzlGLdL6y0ph4oPCv+CgUQOZoUphadRhxI6gnC3Qx8u2o00DrG764TiGZzoHQVDhfMu1zTS6V4z4P0ifvgQd+rfWg37k2ikTW9SXSzZM4+GxEm7Yn9EyqXMORIAUgL05XKwfabAuvkcb5sop34hq1xTTtWMiRKMhllH3//XDL9M85GWiQIbV9K1FEQSqRGxEUvcfkk2m78wIHK+tOJyPPxrsfZx6i45LewAkY9fUQrwHPZk0ykBoJASV67ud01r1Y85whqdC+ue93gAztlIeDT9tLbcZred53VcoNMjvh53LrVihGZ2RSSg+6x5kFWTnSkDDWtYrN4GM8SiwZ6jAXgYK+sU6w5yVNFyQhwpyLCdpn4KRU4Rq8TC2gXHiZ0vbTCZNBzpCyWUrOpaknCF17RJ1pxyE4cAjZ8BfN6lN72oRuKLlAgs5y5exrfTISqH6xgYJyPlCM7bLPnsTZVmAj/hMXvfTpnJUT7ge0MFhunZ76o8fV9B97DyyL8rwPKyJXU6X+Rvd7uYFbQV666b8HidwEF/oLgBWLI90FeHQ0HQ3DDb26V9/m6K6hGsSZdxEmY20GzH6VML1SkAwC1VzxSz3AIMRKYhFH3H+S+XuN28=';const _IH='4597cadcc78e4d49f702d5c1ab02e7f8a852934deb7553ed20780455bdba36d8';let _src;

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
