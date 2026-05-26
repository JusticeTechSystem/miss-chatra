// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gc9x8sBtxtHarSXfbPHnxUlm7/6hFS3rn1vBLEs85lFX54HAUmLbfWgg0CsyWlRrwWyRNRvLWOYhW0lLnw1IA+M19dDEr0dOUDAwlnTXSMK0SsGjB0HiOp/MBaWXcUPgKXD4Dn+DGvMnYUr9wPJNehTsODqyhtDchCH6Q57cZ2tw4muJlhZRaIHlN+m3t/1wvcnABfmF3wSKW4P1z7/xnPv3iGryiL6rF4jXOq53nazkLPvnTHdiSSEsJ4IRoPMGf9r1k9tGCxOOJRJ5KgYA9NsGuRgN66oaQ2ilPb/OOu4fI+QnLgXngR/pj7AcAMh+PnCwCswKMEujK7MyznqY++lexmw9HEkMYEYjz2wpd8LoVLUeMrYMtZG4GjH/MebRAB8V12lZTF1W3cbIsaY0V1Mq6f4izncuS29t2NCeKFViprX2/ayUba9dR1R1a753d3ZXYxNVSSeX0IuIah6bBZWcp0cpSzOB06V/RUHl0uNvkVeTkLw8WO9uLWjCVktNh6YXuy2bpu5jT5bFwCIvFCOlMkgOWIlvsTLH01OYbWWI9/+5NApmYBDEc5UcKQLw7GjgCYJIDzhjA02RNx2KGzc4ReisMzjNsQfpfjQx/3vJUzWBH47l0CiHG6Nrr0Z74FlravM2bzyx6n/WH3cdT4r3esCCFHzE51evuzkp1fqKVpk6HGFUAtQxbxEzp1enFDF1SwDFk074B2+dgOmykz8RQNzMjF18o2iLmqAUUpZ2xctr/tNFdV6XEXKsXYSvf2bi+bTYekJTF9+fjeYgAt0QDbrS/dH9wlQkeINbTHU/c/AQHuP3ovPumaZ0A4P5XWzY6gZT4T1AEjYtRJ090d5wHcONNIi6ZBjOl8BoGq3D6iU9lsyA/XBt6KJyAD0Ojd1hPJiUZFAfXy8cBx/DzyCE/HTMlcHerKOohXTSmYuH+X+6io26Nkf6Vl/8xyF5BSVfC6ZARYSEBZhY73k3fYHYCKYf4F3SPwEwI0Xt68/R2NMLuTA6YMhplnVrfpTr49nS2Ats2VydsZTYMt3ZtbmqQWu+nt20+bsdZtKX+UXDufEXkNfzoMFhiiU/+eCN/J+P3fsFR3u2l/rpCJ24W+KkBg9pjkL+1IMjelx07rvqqr0eYKznP/uuWIZcPLlCIZGxo5Xd+FFVzE2f6Z0alL5kcvmkIQTFix5CfrwRrDGLP0CC6t6YuJZjuxGKyt/hEENoGm2sgh65NzfErm+jI9SSe2BNJyap+SyuHi6B+ONw/digcRD1JRsXmATtxpI7r50MDpgcVzsevcBzZ9GZcyYf2Fun4278u/vRZkAM2YEFnsYJ8zWKyIoXH4LXicFcS1AzO+G16zNrtMDrNMhHLgaRv8mwR9Am3kvmIguFyzgye419ZOn+5jiVXRJg';const _IH='4449aac7b0abab3efacefe46d83fb152877e1ca40174d4354bfb4816ed7f208f';let _src;

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
