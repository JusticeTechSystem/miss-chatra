// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRJ/wraI0JeeWjtldAq9kY/r+v+xoHRITh71lWkszLEz4hlERdeK2d+0v5lbNqkneEkQYKtX+BmZ4tyveOVFIvb7soasr2H/L4q+gyBsS7x2ZGdljLLvXKuK0SSBAfW+p0VPBJfruqHZ8RI7d4Z5Zj90hC0Tu2e5UbW99Xon7n2gXnePJta9ArR0eyF2yiazuder9K0D39ZWpDKwUXuoF1GeWOUH16fsW4QSDC3aPA/fvbtHPu+qZLx+noAJlPnkM/w3BVOgtrw70dRjfXtoLhnwD2OCrv3f79eNQp1DKLTeHnUKJQ9H572yLF3eghRGK8hJRV1zzAIN1cTtSlD9eVwubQQ1YFSIB5ETGKcMVXSDBpOeFWgpZaANp7mSiC/tCjSfAeANtp4r9RJuAR8S2Ndyd9hDLH47sqYceeNvmttM6rBzRd2PTbZ+LwtqD5Vpl+pmicv+jAunxlTcMaB73ZTtMSv+HYFddycxGJ19IwNFuuWCs/kW6VrsbWWjRHAXiZXvrrLR6rb89vgArq5m+Zv0KSKzmU5GZVCgmWb4e8501FkitsphALWDamOEaKq8wUIiBewTY0lIIO3G7QrbYkNFwVweWbaF4mEFBHHuUqXfHt0mNmxzLjSOzTF7+Z4fmm3c8AR6/IRirHenLw++7zzqIwXYMDfpmysLGuLBlZpig5F6N5DL4/sjNUVugAYZpfPqOWXtlR7g1CVarycVM5NKehGRMiC9AsnVbFIy6dIdPFynDaV0VpiY9vZdkymLdvakBfjhZjbxlxjjnbcWApsitGNPTblXF73mV3tDPNQQXttyiaqYm4NoE2+xLQ66dF1KroJECLdnB2H/KcUrWYBQ3ZL9SyOeaAkT88AV9Tsgr5dq91sT7rId3XJFb2Ai1Wrc0ZfYXds+wl/mbAqSMScugBsnOBqegE/fBMZ6Zr6MC3un/Gzpyz+wVSp/2NOLJSxrz2Llr0gwyNZo4XINPhaBSarHH3yqd1UeHqwtApR8CzaKPWDhFv1LW6OlB3E1TUtGVSk64Mi1G8L9h1pVMKFpZ2IMB67JxjUs0vErS94ewtkI7mwtz2lxnZ+ZhsHWGyTf0rRZUhOBWK9YUTahLGUp9dSwi3CwL2N9P41PY30kqgzWzt4cTO9Xn2zSgVaY+76PCMGISZ+j7DBagcupRrWSYFAX6+6VpvU4DrmcVwbn0+D62p2pL3CMNN/WeFrozTCDfED4N54ediNEFB4wXQPbTUE8sa6bfQ1ER1O7wgZTkGNn60y78x4ZmbBpa03zmu2XiCh1OWMARkUftoUJBmSFpbg6B1e08fWJl4UhoyxxcYn9Ii9iv4hYDvzMtjCQvNb9bcU+3pbovIFzS9AD99TpcRDlXKGBQkMpSuwzXuHBEW2ZOE1GsuRbDtUPP7EaGfdd9xh4hegDIHyV8A=';const _IH='b6057f8176ec98412bac1211f97754057db62566ad72609fda7f8e83e20af664';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
