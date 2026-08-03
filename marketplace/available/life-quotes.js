// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQF9A9n2nonJ4L8OCQTX3bXqO/T6ZOyh2/HjxPxn/aE1ouyAy6647cAxkk2aRr8Q9ZGUSaYa4vVbzxiJFxdV9uenOTqKZgzzcfn/L8KbP/0yhCHad7/eGuix8mXpIrWZ8mOX9VetmBVooC4Pvjc8VOeYa3Lirp9jx5EDOwO6GNxpbvZGrx5H5Iq1f2PoYD9svGCv+CFQlDGU8EzY+fFlISUHrjio1mTIWyt0m9tWHzdenjetr+nilhUjK71HrwIx7Hc1j175Hj4DDF+e6HplcjPkWuMq3xHiJYNwPn48zcFVDMWXVfhHgEIYgeybMVrHTyKkwzqECW2BB6a2zkFDPWv2RWqWLS1u5Jh6bw8dgu7VR/AOiffECruCjaSTCYMFlcCtz43Q6lYYFMgdRTq6TbSh/TQTqq1i2mPVWn9uNQNK4XIpeXL0VAeIVVW6aa8KWqnIWekFxHbXLKBCgbRT+HQ6PIzveKLxg8uM3lezZpIM19N/RSOVhZGSgpdOb0bOGRO9T2rgXhOCqjE5/SqlNGJ75TRCG5wX2jX2vhLti65Vv+DQTXWoxLNceOa3PeaqGx95gMTlyAkOiaXyvh0P0kmKkdKHRHpUGs5kyfnmM5RnCWPHfWnG9F3F8/nvDeojWQuq16TAiMgI2U8EGZCbF74fceDCBmahTSSiX5hUT+C3MFUUK+9nE74yxhtm7waDe99bdbqqooBLljJGrorvTvkbIcFyuvOv3A437OZsi4kuBB4RRSByQCAtZeJLpe16FnYoTdu75IwXQezUsLcwEo9Iaa1I326nCQTK1qoO6/kTCdmAMvw8X7gA52dSafxlFD7lvYWtANhLT3K8htb1f2KjM04Dpv7RHhcF+AXPR/lzeUGhsb9X8wny89sQU0nIrpjrqFj8pjde1bsZO3EH5Lc1pPiq//tJOWGdsdbr0BHr0nIda1CHXm6OcoAxqDwJa31tRIkZsFGNOoQznYIsfOetGHwUUp2mfhyOgVt+OgLxsoc9E/AqPnFI+KtkFFR3AWihufRV4oHsyun4LMSreBMgQLsiCx2kkHaWc49Vl6ERGhzFnuVMMu8g5JqL/b1sJ25UBsYVRof+CtTdvyJA14wTTwrFqjVLaHLxJIh+g4SbSi8Wrx1UEDHjIfAPr3N9YjInUYEfboRCIm4zgv3ToGkEsiOD21QxMzyi+dFJArBAAoCSsXuMdPMjlOPi0htHEqEj9rRpW5pb2OEqT3Mz25CJP5WcLdoeqFBFNKb/J0Mt0dDh+1ERlMmlUF2nQ/Q5i4ilsUoxWwTIMpfs5KyTwea7mgL8MD8ysKNXvLjcCqGn2q+XY6zA8UovFVfL/TggYHeozsD45ycwzOqubH5oJ2XXS6m5je693sZnjgNAU+oDh4PYxxrRYun6bSwA1o93X43nIrSI6j+n78ueR6zZ6t6BgDWymKOs856A/MCnK2xBAW0VYVAT//JyGV9/Bkivvl+0NmrVk6UnJjlelM9h8Ql8oZ++zmKxK9qKu97RsXcN7WsWYd7cPtNP5PDazLlCHZoB5hHXu9+HKXVS10RWNNkIaL5ValGf3JCap2+o5VdfB1V9wbYYXgQOFO1dKFhOf79SeimgtP3S4CbqM/RQut6XpbP622NOZriDF2EknApupU3hb+KFOO5Ao246Njrp6kqW4MbZvFKbWnzMHu7fG8VCRDW+Na5g3dBGgmc5QWMfEG38vANcdu02etA+K1kCYBdXTKc5wKeuVgCG2bOKaHidyYaEPMQVV2jxgOzO5UgMgbnniKCIm7KbB1+uZQTgy078fBbExgeKD7p2nINc+hiHszTVv8d4+jMLzF1Y/qvRqwn8jIZlQ4ME+laxIU+GAI5ZOBm7VNhFHXXYRYj7ICQsv8T1FE=';const _IH='d660953880a52c4cc77b1e49e467a8b7fa67d3260a513d12c57a4930f652caef';let _src;

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
