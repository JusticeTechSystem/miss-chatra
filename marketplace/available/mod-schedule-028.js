// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vs3qrFzikIzt1pY0jZkp0gj6e3t0vwA9y+XnV4EQCL1aC2YB8ss0+2e6PY7vDr/KEwSwUG6zp+YkBKnTLTtRktsuzkBBP+Y+BM6K+OortwiYmFUiR2FbyW0LAXKOMlA+FUW2f4gJtAhDTebZ50cCM0BSK8Fs1BZeBOsB3YuI+q9/hl8t0+CCFVR2aumb0+T/gPA4iN1lKJwolqOI+eAWIN8ZiYsKmijYACSeV3zsLdYG+9sJKJl5fkteugTC46XfeeUeq5eaQvhx6BXb0gjALzxo9+FCmNLHfD3S8I/nRnzaJu05LE6jS48Gevxy0GJSXKS0B/Qv/z8SY+CxXn+DdMSKNJAmccUxxBGlzXShYhw2qZXc+Thx8a429hHxeiXMPj5XqWVDC+8xoqGkFfKCMl0feAYcZAMcunivfbb50rjWdLambZTBkE5WFg/6APFdavWBUtzFcduLhse+TmDjqRfsQlCd7GkdS/+i6VxiVHH4yAoRvWsjLcvlDjjipRARsV1xyUcaxQ3ibm9uiZINZjslgC8e0e0oBvDByy9MI+JxLGyGa08Nkd6D+UGJ3vjBEx4N9EnlCo7MnCs1AA/jGHzLFtoAeBKQtVEss1WGKR4iiX+Js70Lci5lYwAuKyifaP+rW2aAHTc8p5bRO4R9Pn2WffIJKfBTjR9QppQaAmRmaIVgiYwH/jVOdreCirOpML21VYu0R3jyddNiM8ex+1gRwzgtw0+lp6HmBdrImJRVy4a6V0RKraAgtMP5bsbnXxGOOAtEKJRgiMuus7Q5outZste9MQkz3KxXiyyPQzDRue/8BHmmv0YRt6vFjDF1b42xwdU4KPlThHfSm0ma6ks8PZspyt8pwu7cQIBWxMc/vFA2ZK4r0JHzS3oDjR0meImzxXq43VJ9GnW10/TMk5hVIIEuizBmoZ25dPiXJN5RgEI5bt4paIjnGdoaLqCjeuBZpbsywM66q09PqatWwbZMSPUnexkQI4Jewvo2Pv1b1fkuNiHk80iMiTYqgoMH3EnHUiqpVRmqNQtwQeRBWUnU8cWHEdTA2jVufN6EnCW3Nn9aUa98GYQGVngw+aShgq2DBDwCVbDG4M1z20MvLSCUZLiSUgaA2CsbI14KcC7Wdfr/sryHFXs9n6UiAP2Nw6ADAc8ovQ9Oh/PUMGfb+NoDw+BhBC6JCTF2/5toj0t/oI5p4ZYoXhzbTCAmqB5KxVPMLeolBiu1hAhH7JBngrXIwzj9n9S53TaCPh+AU1qIRoS+NrvlKFs7HDjDuWFd4S42Cnj2hFGpIEIDupogja6s+XLphJEbiKatdqYXkymn7yQGLY1VAc6RVYG3nhjmV1AbkseaE+P4YJi2nTQiw/2LwG5JDr09apd3DownTuNYJ+AHNUq0TRsbQgF37y8EYeWxjfjQSQ==';const _IH='c11f00ce94f07e1c651c7559f5caf7f010d5d40a8be92980ae076961eac4fcfd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
