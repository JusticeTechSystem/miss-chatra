// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4aG7asHvik6PSLforkUKNePhbu6GtfoBa7kCI+hKl+3yI9ktlxfZcYHqOo1qGetJJjfIZWhnxX5kivB2kUPiqBfPn+rtbwfnUb/rcBR9+S16QZ/+rnONyxs0iCRUV4xv1bavNhICtAJXMX+M5et+OZaVdANBAWH9b1w28dyf9GvNfa41G3KiqQy3KCzJguxTDGyW+cBtlz907/arbvLJyXz2C2K7jh8TH3+oKclweCiVN5OWjVuTbJN20OqFmYrseCD301RoSElk7d+OweNiFi+daqs5BuhKWcbo2yfb6VCuRpblGFZCh5l/h/rQLo6K+G+6tKWZAYqhkqpuvgVE4Iva/aS7vTfd9YpVkqO1x1MT2Kf5TTQBD0/WWYB8hygqmThglF+55gCfIgPkcIHCQ95163i3gk4M/SmfcszQSVoTvU/CMCBNB1Ot6JXD4ghifT+cHaGHGmdPE5PtY/fcQdN786p243kkrdQrIobp1Td7pwNSRcDoaLColEIzpR4MtiMTaYiAqCrqkZmGF5nhNU1YuBdtBW51Yl/V1K/tqffNKpyDuYdvP5Z7/nwo70WrUWdaHfxEe5UTgajo+HI4n4tBkkMsnjffZhbaP/lAdGR2sA2TnTHjguzJtUhgPprQK7L2w7gNUIiwDbpPlf/oCC0fW4Qc2D7zWtlMd3DtfoALDTjjWecjSntvm1k+2DZ+hK3QyCh4Auvp7yGC4dWHpqES8VvCSw7dRImerZicIJ0FuEwcuoiMjrJx/a0LmHQo5Ks2r080ghCJ/cxcGhMlrOVT0FUkZBbRuxLyzwYd865+B31OiAOJmiw/91fczHy0S/3xj1Wn93upd1Az2v9D1D5ylDt5nADREJhs0Wh8FhWu/7CRD7nxVGKkWLvWVGJ0MSWvZNdA7I5lDuto5apQZKLgNVuLcT1XIKrDvLF1hApCgoIhkVt3v2WsrWq0t+cMWuiT9v0NUbBW0G3G5LblC4EODSWozXt8npSk84tIEUyNFasARJR0tZADp1/9xPbr6sJquiiND/VMCyYWbzyudJDeG7Sc65fL/KEThT/DN1UkHvz6WG9UeiffSqO3ctLaT2TXK48i2f4x/UfV9fEgUAUpBoNvvz9ab2IQI86F7PYwbG52xFbamPiBuWANNIj6Gp82U7zIC+hDAk/LUryduPvwRvwxGyisIEfjNzlfc8HXAOB+3fwBKByKOKDE1RPM5Zu7M+PZdbMLMOb6p9YtDSWCumBEZamd+em4TdmB5/Z3EnqSW8AjInRUu9tV+d3reIRgAdaLFf09CMbgZBUyXFiQQtXKfY5zqaRf6DHbw7YQsNMElowSWbCoKEuqqdNX1TLu5G5PYSDW7BpMbadSkTfuioCEphpE1o8SffYP/KiL4Lk2X3T9VJNbfw93hKCmz24=';const _IH='52f8bbc686505deb81980c5d872cf598a251cf6a0d25d8d04de92701d58f6850';let _src;

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
