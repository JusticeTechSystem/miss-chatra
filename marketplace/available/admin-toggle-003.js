// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qHcgYjUcA4se+Jl3IcBOalLiPaBH21Y/aWcnt5olLTV7wJi7cH86Ao8SjK2WlZ1W5yrkiYzGQixxqnHIGS5zaN9piWWS2lwf9ZMWCMrmAI67lKRfx+hwKF06dJVButfC4Kj7i5S/LeVghsNdT0oWzFArZK1fTuDA2alOhdlcnY4fJmNKCAFgEvKrz3g8XJBKlerolINit5j3HzGvSSF1bzTSAllaAGjDQNnFqKPHrCtZyOvfYisOcwdz2DGKgM5ZXBF+xWOMQwPlujAHsKx803RDK+VdnfCOof+tGv8ZdDiLRfO+4//wipDDh89vVUOFSSKLFwAxXJ495cPid+inhiBH3EIPdJuO0r1RgLS87E2LHm3M4ZspTIhRITDoec5VoLuUzSGLLjp9Gm1yZCTkS66bze1+DH6WVTii47Kyu58Q2d79mY7OtsqjI5Vh7M2+FSDKyoe4myQOj4FtOpwucz5B43bECcw1Q7g7DgJ42sqxFllCajolDQBabnEMoZqHfPyqApitrq4mV33g3lg1VxfvWAz3RHYKvODf0AY8uINkcPySb4EjgjTnK2sJz1xvIxPfzyYTJTIPZ6+bIhqxq9ma67/ToSBzXovj/XbSs6lZsq66aY6sMA2RPtr466fW6o9KBGtCzjlHR83QSzTZK2R6FrfczjCwvC1SxkcUSv4VrIXgUTpfDXG9FFK/8VcTTtI5f2cQ8UTLBEeHx2fyVIfoVlaO9AJ2zUJ7TPfWep4BPW5kfCsQfS54ofKhMq+GtaL7mKhAdGcLxKRikIIy7a/HvR67KUpKji+SjKMLN9cq2T6HIPLmszcsY8CdE0Y0+JdzAX7XqA1Dt/VDvewI9UaVjW0zE2ayIQy6aPbzYqemTqZU6ZTuvY+duwgDiVfMgw3Xy/8e1WWefv+G+K8c21htWTit3cefL5VcUuXdxlxpIJpd+RMaVudsiRrsPIBUKC0v+guRsU20PaVr6s97auEQdFcMTC5EsXkDyerhirrx/C1KVgdeaDc=';const _IH='32929ac5677feabdbb12bf94f16a6a03ac9ddd189c044575b0213f41ad7f4d30';let _src;

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
