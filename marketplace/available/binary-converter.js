// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6A23Z5w0i8FFN+uRA6qHBErZfgIvjVRTvfg9J3X0NVpDPFb7GxJwF++23WWnWpQbCgRPq9TJE/Tk1TCVWaNTNqB2M+OBuh8+peaz2Jhw4pCiaZnrDMXiDh0rgasUCg2MqowzP48M5gkg7rVb+kpj2OZub90bBflCP/QceHnPemKx5eWTI4yIf3ZUFen9lyAKtlNsONEuFZXYr9HBX8hPnXiffPA1R4KTmqh7Us2bBK3WKKCRf46342w9JPd7c9/Yuy/Urc/p/qIrjNBEoNmbmpVpHDzDHffDYCz0MvjokJda+tBjuLl+woB3u6BLL6TTuDACYVpf1lNUWgcXD0Q8DzVQ60HG3DSVVL4n+zGggquqPn2HDH9A/vvkJrglVubF4LyL5XWmeTkcUytotkJ7YA5OXt2wLCVI/rSCcVPF69A0jT8vtlNtjn+GH/9N3A8eQwO55vBWt4/jyHQKYCK9c5E49oCE+aETFI+pyN/JsRNmcfK3O+zrEVLP/PPki+TviQ5pk3ZK7hqB/OY3dMdBGki2OKaO7W3xO/+YLgUadc38RFG9grgx0+8Y+C7H5BwiiWUBHHntDKWRFN53nQ==';const _IH='f5188c37b12f089d8e2fd80f3f6688f9dc47e5daeb483b126ea2c659dd54f22b';let _src;

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
