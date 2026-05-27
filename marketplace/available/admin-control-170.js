// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LBJyK66LCf15pWbVZx/sm2SncpKLNUArpMMhTrN+Y/K24naZzJy6Es5S9KWML36cYvT8W2ykhygPEM6Oljn+EtZi3st2dr169vKryjYFFhiUrE/RGA49FEx+sWKiRfTq0ncbRLmxTiyAGVtMxsNpXuHSMxL/mXyAE3PhJlokGKq2pULVj/IkGWD011g0O9qVCD3lpYZ+DqOWFAqDZDNbKZ4hYPWVhQrC0RCL9Fyn9PbnbYL6S/9H9+NyOjtgWgebE8DEP+c9oeYCHEKqq/U7QTx+iUAgHwMuoa1GHouItoc19PC1wAXpI4Ih0mWd2DNGXoLyjgAFXFwT+qw3z7Nv4qP76BhSS2g+fdGl9pFB0zC6qqLg/Xoe6EGZfBI6EgueMPuJ8rAlk2EkSvZrrooQWTFdqaZR1hD5YjV8gebDqFhZbBOzuF9m7Nqj/1QY1BKTFVmz89kKM0fgCr9z4NY9Pp8Yj08sCUQ+G6oB0krxvLX73YQ+yVH+hzgbtfXh5rwqWyEt1N1IyVzV6Ay2FeNA/IQfRJMifrOlLeDKohncuMiEAr3+npVLTKxawDPB4D8WDvwY9NkBpSOwCap/VGgtu35unc7rdW9BhT0fRJaTgnvEIxSPKw21TailYd8j7Hngp9iciftjwb9UmcJ+oiNmktzTkor4i35lR9AgDszrvaQTpECz2k8C8RBZlnxk05s4p5jPkrmGbf9yPTPglHuBvGG+rn7rfIQC5pqmYOCatIokqEUoqYraHExbd9PL0zXAhpq+UHzlNsFWWfIQDjNWfouu3FMxuv2EFYxLJfNSLfF6BujjxtHsGj2HctOPTqP2/i3Oqm1Y3Ezcl31D6ZwUdraYJzqnsyzmw3V38OGJwVXhBy+ifPI3CBNN7hjrFz8iG7IWbINc9yqRdPTHVYBoJ23wDE8L8x/Sma1Y6sAVWGD6eRs+yWneJNWLD7MoLMnqiDRnKpgjSFAM910ZFgCt3ci5H1YFO9WkHXZ2z+9teRkcNigg614RE1Aj55YNJDBE9hXtWbt9yec=';const _IH='c618cbbcb7e25cb299096db3fafbd43b829584ce16c265496178af516631df14';let _src;

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
