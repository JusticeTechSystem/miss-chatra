// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ59QqySXSFH3HdSweP0QGIzuzD1kNhWUyE8u2C3GnR4uFXEgdf10p3aAR0Qfqqq2gvSJILM9WjwfloNPgDRsdE+PwMLzSvTfufG5BaRp/Eo8tdQcCw8DWPRjZoFJn1XElDDyV69Z7BHiKpKHItWrUF54eZSK53bPvfBTu1XmiiEzIs2e2whcQa0eP7geNhwzc4Ns+HI6klhHe0QCbFoFxTzu4YSOuAh4hRJ7xsi7g+g0j3+HCe+rq/xn2SGQ5ST1BA6sSLKSsUPbCVUaMdJSihkRMskWRZ0L0O17Aw/ygnRMOI7E7MfLljc0KGOLC+XIEKJRIeb3WVvNbSO49vHWozIR73FQ9N4Y6SLw24cP3noaA3tPUxx9AAGGfYgb0aiLDjqhVXoaeTBlDze1hQpAgQozAJSHGujuU0xyezYKMPZW6hJxs0Hw5ayxrMNkXGiTTykai+NcUT2ShMWpOloi8UIIA6RJ0bcjjj23RvG20AOYAzqQrZqa6o8C32IZatepY87I8OgGiLW9jJHKA/kS8up0FKFpk3LgPCpUSDIhkhmUH8Z0eSYIIfJwVbiMWzDUZd6k4ObFSH4RH5niNcXi6aUc5z09EPE57HTujFpWJqhlTKoSh0WKan6JK/bHD3TOOxTb6GBNIc66YaFjUVnx+GZ3TMx0VfW8pg5fLxOPlfwhMGed0GFBdj9e7QASedOc6YCybeno1LNO9hfE5T36KZx4EJn+eMblAUUMjl1UuqPUS4pbQvNzYR/mhaCxH6tVy2rp8ZRWyIF6EulOXWuj0nh/NPjE3hPZD5H9cZT/DiV4eMFaA1ZW2X9bOPEE6POMAKqz7KyVpx+rKJUlZHZSJpjg187n3ZADLPfLUJXWTZnEIezwzoUSoadYODtbBe+WrvjwK+l5NlyuhXWWt6aXCiIInzQ024DQ+rkGLawwbQIdlTAp2NQSp6spDc2CIsii/BELZN2+yM+gZLL8/G/b2mKw/zMG2unjxr88/GFTJ3+BYQ9FpLCAabevblDaVSF+VcMAYvvuPErzXPiAoHJ0qPGgqxhfvy+awMga8OyO/PZbb0NOXo0hs2RhF/leycPbndBadadHjqnAwjqATtAZKgSN9t5vRZXExKnu5Q9qJXrLx4g8HoDlGIuKDDjhQcpaHwjlsVMG4bXr54v7Wo1DTDjhf1WFVcTIven/NJ2UYZwnxcGbttG4WuMlR7xnFh3EvauBdVMn8pVDdPcYfhxDqGww6m3nX3LYtBDW4X+PhAiB9p1HA9uyqA2/Yikz/DnkUyHgCUV1BfH+S/LdRF7xl3KsSBrHHc+AFEnh29HpHIs2ZS1vQwtdKNK9b8Y1WpSCNoH0lSCftEGyHACDZ6eOEQl37lPEk34kqi8=';const _IH='74281c86216c135a10da36402e2d5260a7801e8565811938ac403a300b189505';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
