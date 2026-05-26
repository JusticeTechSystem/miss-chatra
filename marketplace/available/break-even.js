// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S0n/r/kWDKYxdG1iO+SVD6EQPpAdaAkanITS6U4LB32tE7Sfn8uyGDqs7w8H3t+4vnZISdVomOdEY/SiZPELP/y9LmEB4KzLo3ZvNIILqCFNFPgS0FD7ZX6LlbaJl1YhRBj+W/V+c44oCOse9NLYbktV1VdCDkd4leJDbvBWLKVxS1csqsWzQ+Gh3VJjRPq2s2CgushEH05nv20d7iSZ/fdxaPpHPgem6nTf+WQs7N1qtHg3DxHcme2o2/cZ4SGKrU5Q1FAS9yNMuUDiTZ2JHdlWxNTWgFWkv8sOz8riAZfvirjt7t2oR3nguc6uZeRzQ1MJoao8ZNvYfnvdCLRL86+rPT0SWmhQu0NAEK3EwuH093+xaldly3sBjdzTFI1MztzpHu+N45CRCIGP2GSmoQRPxUJJToBfgg47Rax5Zv7dX2xdFrxhSBCkd2FQhE4mdR3drKFnjWFbrsMA/txyfhEHwiJTM9SYphXdXwTcNWjzz6urS3YlLcADGehLmYhHyVe425ECwrfbp+1tujWAlS/r9ZR1z+PMqj7cojzSpwFyzhbZIDqcBRLcK41QpjgC6WlPjkbBPYBpep0SV67F0qipkSf/M8FvvQRqjxOGO25W4tY4196/bfDuJ55N3ibaBdZmZMRAURCt5xDTNP40TJbr9INV7rmQyQ/rCzpqzlvNjYZ4drOSH8RkLZG1qKRv/Lm36mJGG4sX9GwiWH44bgHDRqtHU32MRQ6qKom2asBzqfc3a5oDPh/1jnPEisKECEkx0qg/1mAwkevk58gv596HyWFF1TxADIvG0L5keSgVDuyEkoeDgGLVHTFE5i/inoVNW40BwcRFKlV5Z1cf++UcQhOv/PO4PTZlZK9Wo/JA4RywawPnjA024W1ZLPc+D5L2WdcA+e6kWP/TJaQM0FE0hmPpgGuNpInz88CkHvH9caHO5cPqVxKsO8G5dnmCf6+Iq+OECTfhVk9k0CsP/6McUbjJvC0OcWpNNxt81OqiP8S7I27sMG78uEijMDwqNso1sG/gpLHM5sl88ktz6TCtcYeR9ywx4tBaa8Ga2N3B/CCzjJ1KtiALAykRoEtkI8JQDlpoao9IQPl0vUs3v8HOlZj2p9aYfXKxd31+Ra3YhDioKGiYKq3XEVm2+jH04vanZxB16D14qQJDfSGQQkwkxfxU6MQWbZ2voSjWiL6NzhzeknuX7ynOEbcHjc5iHV2Gsuamu5CVc92OhS4bzorYwem5SQgm/bQQQ4RH42qipYTDlZwLasw81tsQBxyggk71xALiyezr/1oWfkh7GWL9pe5asiqShV3tWEJXMHXVQKz49xACOvpKxz8hHcu+bM9mqX8+JNgCut0m6AQnDHveSwDjfA7qaPlvooWZSMLdZHK3LMAcMLb4AIJF2pyZKFR2rTLO/MSeLdrOpC8RTacdUWT1wjDfa77Xcfn4Mthqpo0WWZEKFfmfOJ8dtmQc4jjDVmO+uUdbWt/GqeWG4p0MraJV9RUJXNL293gcEVSHmR7daP8prccM8oIS7a+W0PeydXYWJyTvBOatYuBF4HEzAeqO3reHuEJ6';const _IH='9809ab2275cc8260ce659fef66e701db03f7bba79bd8e9fec1209593392a605c';let _src;

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
