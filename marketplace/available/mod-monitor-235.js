// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZHzN1J8YnuL7zJi9KuwA3v123K1khCzowsx+YuagqTszki4OQA/mKBk5arft5u+HRq88tBbjn49tH1MW3cTnoZl+z0C4nJj86xBTjbYqQb7PhAUUf0QgSOggZwF387MjODqBTcjQGTdgW8Qhs6U9Xy2xLAN0fNHnaYNEpgOULwGecx1fEzD4vmrVl68yb2CqFjSHyOQ4XdD0w7nykGsV6YGO5A2pDGAV9R7naczM3GqaMEOBPPmv/YVOOBqqrFju7VxPmnqg7dcORVSSG5c4utQEkewwhCKam64PHV0d194vZJmxnjlvRidz6Z91wieBMkGxG1gx+BiwUFb0cF5qwxy3nAg9pQ7GUNNnYEGPB6tesfwya9P4V38W6CaW9dXHP3TelonnYRQeo8FmscMmjfEket+91D/GvG6R2++tdVuRbaBH3Yl/YPIq2Ia8roJsboNk8A4pVuXBIxaasihwSZ8SINyCtUNV+/Q0Yx/E6tWC9d6Qow5UQh3MfD7fXahl+t31qiRwtRuPn4NvtNz51f2WtL2zkVJrTsEzP930txoEZLrKMr1tWJNz3YNk0lwEUfrXkg83alodO5gy4n+JnkzhH7kNR1smMVqiif9c16bjYZIro8JNL/JgoqMRxUxhy9Ntrw52Mxcnpbx2TOBkK8aZFX/ORioCz87/XfzdDEM7ys81NpLDZlWTqj8MqevYEwJOVu45joJY6PJbxfMOtcTp+xdNGjyrNkvTxxD4Bgdn/KPoNSrLhtDGn6f38nJNB5N96ZgrmTPc71T05Iw1W8x1D/D0EbEG6b+WQ/AbPDLWTla1UX94U+wMNoKzzQ4K8INq4LjL2+IuZvetrpl4Kq4HqVe2kLJFuf0z1LwpwMYcjAQ2+km5kjJu2vxa5pOXyz2jc8rIijcAiUEvHNits2ks9NPGXRD+CUGIoNXaxNi3epM1ER+ZIrmlaIlRLP8LqhCfDjZEsCrhj1l5kTnUsoyT/WN1Iswdaq9URf3mQuHdUma9gozO/+pX9xUk68IyVTsG95V4+EKwFs1RAbg7rOUK+3I9uTlAgzRN2Cg8KF+qyeGopZaLSZqTRtapz2yDavdqkevxhrqSl84ZdMbYfAThgQY1aMGSl/CVnrCFdIZucrOShEiDFhhxmtttpJLhFPi4RCqjg/SwRUA3hcsFpTExxUuGLSE7eQBPcxfqB1UwmVrDg9I5QS1sW4zxZFFRKbAX2Mr7VA2/ASgs1an6sp2avkriRUtC9t4w3uwf2mompEsFme3exhp41IgT4r8Ey3YV6hEozg5FyQbrtXL+gP6uS2mbsNds0ydrtPakV7Jb01YCeEY8De+4X1YP1YTsRE2hqsFo1cM3Hx7eAFP6yRyO01SM0pkwZ7l6ELuavW5aIIAb+avpluTA17yidNaQih0=';const _IH='9c898e59bc3bced70a25234e06d611357f45792fd70c543827d9a89c7dfa62a2';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
