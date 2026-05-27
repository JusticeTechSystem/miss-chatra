// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sSdDRcFZrawqUuP+WcRgpW6Z6VhcHKZTM1Sol2cb2eCd66uAhrlJUtQ4EtzEQIuaYJW3eEcweniESzHD2s/5Ti0/5yx3hPra/4Hly4XciSDIyGJtci/+haYx1/JTUssVBHhNtfUjMqM1TqJ2BVmmTuXj+OXBnTHMJ8zJLrCNdW0LkM/IksTt4/IgX95dPLRPUdRliSXlpSmWWJ3XDBk8aNU0W01IGF/uy8MF/odV4E1i8D4x0n5b28mU0WZ1OgOVpjMVSXwYfp9Dl/qFk7+L0tDwaFmDq7plxk2+chZ4aOPjpJSL9PPSkUA8efINXImQ3VRcKTxn9KwJ7Z8cjRMLwacHQFv2iZaAhv9foFbXdB2vUF7XnduWiv2pj9yw+mngAYsNmAJ7pXhiTezCDYMyvwBPdKL/4WoaUz1XDoKTa1rMVynV2dgvgO5co2Zu8LoH5b+GpCErsYpndD+HoDp+ueLj0pDYdzSh81TZRZi6QUCK6MlfiwbiC7SzR/lVIGnT2kO4UmPmRjRAx5zJ1qtgrtCVKpmTq5hpGTTThDtqpGZLfadWN+I9/WGADIqRd31keqbEbTAS4R1VT9uQOmzOv1qkJVtyMt9J4IQiN2g5Tk8jJ35GDWpeO2SFLSetr8MjJXq5uakJ3FhvBwo2yfJ5P/NQxn51fSCRnaNKCfHBBi3rIP0JZElNd3QhDhdp2e2O9MqerkuK0GnX4Tbagl4Z3siCGcgz8IjlHMY5f5mHt9wCwLSA7WEd3xoW';const _IH='c72461937a8bf2079596e3df34e6e5c808780d29d8d33bc0854721d8ebc5111f';let _src;

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
