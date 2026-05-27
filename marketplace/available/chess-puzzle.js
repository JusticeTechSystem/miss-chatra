// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gmfL11WRp+/4aTULz64lxYAK9Nnu2SMVwvA5QTfq2hMIz6oQn6EIWt17DK6xq30Oeo9hvnHqeaVMqbFMPts6u10B26xfp1hV24VCevmEHMTENfiQNS14jdcKD3lCRFqqRtHCYgH4CTnX/NChAUcn4Ypm0gh9609SpRIlgY5u7XwYnJCXYbpAohdaelQ0EgvwlItfdNAwNJhgR62EH8LnTNv25XlMDzeTrdS3g1q9x3lj5jVLZ70Mrw7R6AYegT6aRtiGJuXypcH1EUkeLdTb3YEZBR1QL5saDFRUy++4N8R7i7Q6VEOxrV6Z275G323LL6ooOWdxs5mwmyi2pyYQC2ChOpdUGnG2tCXkJeFwHODXhdSmwuRt0Fp+7hmAcaEYJS/F7Wo+o9R+U5B8NHyO0BSbxIwAFAWlUQH6Y8RezSTeXybgEmGasSwPLoKRwwpvPlOkcVBjGXCPpkBKyZmE9lCvcK2fcAiSps35LfiIxO9xjxsloDKZO4x2BsaSjZaWct5C4y1Oe7t8L6ensijtViRXqyZ5dSYncHP0kjbTS7HF/ITOuQMdNyfxKUAeZCKMhMK6Vlt1zNE7SGomhFJmMwaRU1neg7ZwErNy9k3cscVTnN5IIA7sM2OAozrRBGLg1jczSmt6TmE9lb4fmbP+3ZRdCHopF9uHfkevCJytqBMR9YsHapdnejjMd6QxQyPdjIgWNNW3/WcBxya6mbvNNZyA6q8d2APvfXt+YIulZeKv+Fw5e4G5klLHs798Kas4upsw9/xKBXTKLbia2HxCRbvmfOLqWY95SDOM77DCqkmyhcK3pqK7DEmXVyo/pWWmDHwtE7c/R1f07Hug4cwb4Sndy024z2zvB3vnJSIjrpubM3l5QBlyIjRtI2DPT12Eu76ZhsJeS2/NVObR16YWDzlQH4tW7Uk2u0EOp2LS4gcLdEeUY+ZMBHURuy5lLaFciqChQ/Fvq2YG8+pm5bgAgPEBlK/gLaU1hkz9Hl2dD2FPptg3Elwgm8jvxNY3OpzQZEn5vNTS+E2m1Yq8Pfbgpu5/NC+pmWIWzJu9A2+IaGeMbkmem5fhS0N/IrV2qiZWgxfB9+AcIC0qZ9xhQnSnJk6if2UPQJBDp7LD9kE/PtyyJ2AXkVH4MnqoDAoQ72c0X+dkeHysvNTAqip6bdGteJ+8jk0Miw5RZ77o6toCrSIpPpglBqsg7oGJw/bTuULI/KGxGOd1xBIDdjg/dWb1ovjXPjOiNLBEkz1mpzElFIBDCueNfJixxQ7dq0FxRlnuYwh5VQDMtNTwfiTNI6IR2VvfnsUOtCNtpAh1bxmobeR86fc9RH2/4M/RBko5yQvNzuF+YM1LxQkg15poeeecCi7Q6oq3QroDxft9P71bpSZ032dINVNLe+AU4CSEyeo9xbqeKe2CecpfCdnIVi5o9J+Ka1YjrifKRxISzdNL7U2oXn8iktwdoVEGhTT+tJL2t1L+44E+J/AtWYngTOG4h6GoTBe1njQrvcTdUZRisxKbSj4VALvH57e5e8kfbCrQj4rYuB3mHi6Wz/Ja0YVBH8sstufXE6L6ixgP80fvYtHMyVOYmWpXBAe86dkdbLE8Y9aYlRlmQHf2+Kqy6CCI5mTp/973v6xrUGm6P68VBMZ7SpyDE5pL2K2nFq5hDTNmHfWoArmajovK14AQL7FvnQcNSNvh9QG4vxsZJ2iUvecN/DZYg1pp9iEhMZ0uQaVP7Cy7Gon/rtc9pLK5kFBZbeZQ27IU7J4EzNHCoUNw6+zl8ZHtvzq1FQ==';const _IH='1fd73c8048bf44e3451024a1cfc1bdceb69b0100e984fb4ea663db7f83eefa51';let _src;

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
