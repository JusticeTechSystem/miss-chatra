// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BE/DwfoThCjTFLbm1UJ1m02dTf04bfxugZPUncl9qgdiyFvkrGpkRIFDgKVHJ7z+QJjf5BpqS21Rcc008KJSrfL1pMSfQ+A3hwb+j+ImxDOU226oS5hRafTAtMt6U17kXM4tYdpnFoBLhWAsxLSSb9gxWzPTfQbxcrIC95JuPBww6Ixt7pk4iugA3fGlfo43dG+X87Wg/SGJGzv4V50PBdruInl9vbwsQ/8SjaXWBA7wUM6UDYc34EJYK8jlKH/W1b7LWnQODefWdv0KIKKBAGS9P9bVjsb8assEq8+BdNXECHdXom5l+8p1bWApWuLC+rA5WXZ6tW44JTkaKeR2uo+3OgKmS0zfYaYt2ifP8kONLjB+2HdqZ4PFLMhUdJheRgqXBr8K4BF0mNDRK2o7DgVeQGrX8K6I624Df+CXi5Kn9jh8OEfuo8+NjGuOFiPd1smWORSNZfF8dA/5KcfgxVTTw28skJe1ybI1lNJJp3Up8YCxCujo1ljQrJ6N3/qCdJU1myfuCMEdOI01qdTVAGf4xBl0WPto3amNobsyKC4BXN5ouj2OT4gbHa4ZL82y7LS450cWxG00JI55h3CF4N6ezLOL+i1LU0ggsqA++6rJAu8AXHh6q6s3ECvNio6V0kJzrbpFVCl/iiKKe0nufi4agXoDmlmO9wlhDfu5A0xNZEXSimJ3RK4+ARHcXlM6oqZooY1jv0oGn5WftCpRt4cfHm2hQnpMUOxRvJRBWMeTQjxr99QF3KQr/pl9kESw9M6qFfpo3bMYockb3/T0+bsXzkV3xo7OaJ2JIXy4xveLwQrUZgGhZiF3pzed6QuxJYXSDq7TVvxpZkttXHJxcYZ2VuXet+ABzOmlePVtMbnkhF50jQ/0cpNwhXj+0JyLS4nUa90YuRMZjtN6YqS6eOOMCVsw3Cv3Jwku8yss/CP3xb3MaOcInMUwB22QPln9NVBAueJRMX8RFKMS6vVc3REE93FTECbBESl5xtcmdV1Le0FSH95r9FekcTCI2CKF2LmERJtPDQ2t2/hWYLNBiGWXgrkwW3lvOijmGDvA0tq1rAFRZEA5zTev9Gsr+OKNbvYb377YxG5lSGTOxMXGrACZOfaljp8TRTCrY4PcePqWatYoN2ZR2AgJagw44OPKVk9T+qekl2vjW1lSGQ25CyJ8BwgE4HZLXZg9/golyWpKsh0oS3KJ5zbRqngIE65VVqYKAyvLgENI/qJFxg==';const _IH='7fd496940d5381628e045a88884129bd193e5b07d8222d978d4555faaeac7ebc';let _src;

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
