// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuuSa9wEQroTbglliWaii7baqGoA+485Sko07BmSHkoBwkYaqWX4MVBGFm4s0l4iklFC42Uepp0jyevdRdH8kanW8X6nk+gJ1k2/dkv0cVUFUoVsc6iAdym4mYszdCT3EECgdA8vjqTXoCqV2L/WFWvM+qlJEOT4hsGwQoM8DBHk1mw5kCaQZK6wNBJonf/d0vEqw4nS3jV8Tntd7p4Tak7ko0fHUIKz6kR6TVDqOKVZJmhv+EIxTUxFx2eaTHfK7HphKjlzSeOw42ncmYG6wCYyNwyO3GR9u/xr8y9cGbpivbJMLyeLC7K2dqzXAg0sMFS60zQ5IXxoYmsFwb6MIzyCPHY7aWQtIeMGS3PiuhtIsmTg/JcTXhDkpxDfu9M3cXR/WWgwHGmUOUp4nxzrD89b6Z9uoGC/UWIbn65aroy5HiwXAXK1no/SZIAMI7pfSXaZ4Vo4GDws3ZIYAr8f5gEgcKiYPqDwfI7T4zIBGaJZlbpm5QOwv7wtN7ihaeiP7d31xyqP4KPuvQr1Et6d9Ffx3B4uXO2wZSRHg4vBWgaMBe21jJvzL7v8J0fxc2ib/VeTa5YFYojL7xxRU1zmMa5dgEvmE2ZrdsW52ETU355wq5ZTpmcpwrJyiTgBGjjELJkwALqXgjOqqdA8nTM7KyIZm/5VylJcw69p/3yi+c63YYS9MxaSpWZEYmdafXGuVkdcvcs/ZRpkvzfe4RbGHEY6GInxU6MVE5EaUx1NfrjXygby3CHM2EEouKGk1rTXmWip08JrGjjP0Ddot5G8FEAPEGcdLPumJjW83A6zBzPcyFwGq1f2kMGcfHNYO+83VTySbMeF1AU7sN3cRwo0wcZ84F77tRMS+I4ChuNBpN7JI8LbFis4Ti4ixf6wrjcoKlKLRj3RxZhL9Dhwc0i0puTfLPIhL4j4Z1FjA3/901x7IoykjHWFAWkH1I45IyX1bF7kqD77maPhaYvRKESHwPmOWy62T+pxXAWAFiQxaI6nkaEOXowjCNrrI9Wl9RNiJmAPSMFZDX/N7DnDIgwud9bG//b4KaG7/F2Jm6wnpIVWLa/akXN0GGUwdzr9270gwicd0vOCXNzbfGw39tUg/Oi62mOpVfoG0s/II6e3ZphjENagz0wLfcxdIK4yxkDczUh88l4clPkmJmfJJ5EvoTjH4oWy2Vnduc+oLQH3LNCnSP3NvWAxqRXqhstdVNQRRMhmwogOtL6fBDvd5/iDhJA2rhpqjg9NFksNZTbMJdTBDJW4zCVoWZJH6fSlS+tZ9BPpqVpdgaU5W6+kq7oAAuh35NsvRCXq88UixZSSx1eoCXxBu6hw8kY/9sGCvrm56ys5Y5gehkXGFPZypzwu7hpDbq7MoSchcE';const _IH='e51272c8fe46587302672e0d20179d6d2acaf382b7ba664ca52497b20b8365cb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
