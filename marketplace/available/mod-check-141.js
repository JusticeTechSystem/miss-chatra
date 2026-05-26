// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1r+jZzEKh1i3EbLj3XbbpzX/khcvp1YjTIT0FTy5Y9XqrUQCiSK6h7qiZYBykuSa2OhbaTge0OJYaPChOfchh91C+Zx9gWyAgZYy9CtgZ7J175R6YG49ej5svuLIz4dRlujE0zE1twMcwQNjP0C5301joeHx2rVFcm2uoklXt2Q81gFWcldg1ga4IFq7lUWH1nQahOvXHV3ZUTkAJ1JCi6UD0gg+NFiZxMrhADnQWej11r/b79sTYcHa01pjpOphQVirUPMFa3TR8qptX7FgadTQLnComynkGjaM9O//dZy9McJXNkKH5o0+oYZXyrFZc8M0QvTMxgvbJ2PDR2FfhRSFCD7dmGEqKuxuZaa7+5qITLasmUFZayEKiQUxnFuuwxcqia/vvR6GJ34aX3GsH6zGe7q02P3s7kzTk/XF4Reck1ApObZvfHKErnmGxN2viXAgH4rQedGiBhVj8n0NIVdGnxTyMaqY4fYEBbaXQtqo8WdxzKUb5h3FrSsSjGhEsrg/BEQfeX/nmehkiL8WalNVrjN1/YfnvlybW+XBGd/6+TJKmFe8Rd/hEUvUuiweaZUPmDzwtWuhBkIvE4awXzYIxfmVDytymnotCv02uCBVJpUREkDM2DwNlcEz/443NjjQN7nIollNpeFa0+lhtYddgygSj4CjhgrtmbKvpQyMaGV8kjaG1eYe/IKw3Tr5DYaTtJ1qHO0fjWuiv9BLvNPJLdzFS2xPb0et0/UhvF6X4U7wTKbUUr4Nd9d6N7Gq2uzRgLhk5NdHdN+7CX1Qiah4q1V7uWg2IsuhJfQv96rjpW/Gp8LTQjj3TTUE32ELOtamwzNw/FJEsRF4qeoKqBm2erEyTwjCFOp74F6/+5LyAFaUKmZTOpOechTkf2oCV+eXWLdBYSSCOISfkJiPIfQGyKB9HlcDuixxEnL3ubHwQ90M5of79e3G1dvcPxOflRIXCeFLbShkPdFxglh4lx385/Wo1skNK/1wyeydioE22YiCMvbpwNo1GPy9XhmOjazyxeaXRYmVeYi5UESGKHHhH7/U1IwOjM69ay8szzGLqZMLZbLOkM9aHhbTaqNnvK7roQXY6YU1DHqCh3CxWOr4KUHiuLAFbYquupJipuEWftFW8HjV/hdVLm+D0B4VRxSiomuiTwKLdsabfg+81s+fVydFJrmxYqgMkdnvl7VwUb68uq0VhUm/3Ce79+oBhEA09ZsS0E4X/cqjXiaml0IEb7V66uq70IYEjtHszZenAZNCe4/3tzJJzDiRsCmMYuoktiYif9XNJ8zq8u8CUlSvz6pHm8moqQGyU0JCQs3bZ5x98j/Yr+RUGleeFBUbzOj591/D+vyafKWiCGy/V+WxEWDQahPwIOITTlqu';const _IH='165389084c51e595338274ec49d61c7dadf9c655c47846d5292ea1676e1f5592';let _src;

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
