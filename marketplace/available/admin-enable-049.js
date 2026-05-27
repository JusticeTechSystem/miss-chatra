// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tdDRgW1O4zfifD9ebUck0RzKkMcDNchWb5+Zp1mH8U3V5z863hZb0A5QYYy5VS0ytO9Dwl1JAFtnsTFKFM92RpKScEtaomoWjXOl0BWf5/KtEusESFIPGQLynu5BGUKnk5OkWY+PVKxutWXwdaveJYMPD8kxKXhlXgvT7D6HteiVu27onjL8Pnjk8yNPqWDWi+OD35RBauZnRj6NT5XDktwCNLj1FO0v0/0U+/6wSbQ77n6Q3xz8zQuES0uZER7icvDoZ1wZXleYT1pWfOo4TFvwKp6CQMz3rYq/cDGXcscFOrLi6anzstPkWImJSG1wB16rgmrw+UFrl7EqAHlmMouzwh2aRAEBVxGSGhCQHIerBHT4/1P/5Q+KQ2fnv0sZ74N0yJuDvF7ffUVvYNUDbBCCaeAK8e0U175xaS8CoN94/7joXJNBrlM/ESLEcZIa/CiC/DYj0a8BlfLGI5K9+mwug16sZhSf3IwqZTyMqHsMDTs1qP8BzwCGC6K40IU7HHen1VehtdMFZjcmZKoI5D7gVpxverViP1f4Ydum31H1HBPzJ6p8Ao53mOdZIbN1b3usrxYhPa2VLHbiTPQlAv/jJZ6UJi+eh2XYdeoXZziweoo0OuH0LCWQ5KpT9VN8Lncm/1aojPjlQoR4SejWNEI8XiEW16gz8uNzFRBxLZgV0INOIm8BKLDLY/fN6HzKCTYFmwXuQGhtlrFeUOd1b3huvdeex87PQvsYmqGg4X7bTxZ3DcpRrcbTOOw0Gmr+Y9oAEaGa4BtzVHrKSWnmI+PBr0Hxy8T9DVYS6wz6YCkzkai94svYo0xNpw//+A53fX6EJglJ34P0Xb7mUXJmulB/JilTqynu8Z2vYtsfTBFGC1o0O0M7MWwxrrnYVRGT5r6o80kuhZVuOTl4bu7McXrOm0L3DoDw80NJwuVAK27+F5/hiu5DILlUVB1TLdNiIsY4mBPiQg5shfarGBVPXicX3jvcXTfJ3KQXpFKxElogI12KjFsdMJnCAsoe';const _IH='fcdead376b8686e1cf3b5e20c2a1d846c2afc91989aab3233046e16a2bd6d866';let _src;

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
