// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sK6h2mEedxRLJvljqZKoGm+O5hYaHE6uTNAT82yZ2/kbWg6fYnQzCOdxbQZam8Bctd6knf6hwqePEVOqkvmzrudlFtiIY2Td25FmiHNh219lKY9wSRP4tmfcv20XZpyq8XI1Hmu7flHEkOmDYrxG60kYiOcVwOmkIRo68gSyQq9hMaX94bubILThSMR0HlWGiDtDGBIOAjDWWniBEBCaNg1wvdGgyBT/OT8nJekNGJf2K2yYvjfU2gwK62hBGOdWi57GsasFks3N76Rxd6XxEBXmZW1ne72ufjvtN+CGZlTvd6dg+FpP3UzR4E64z62Um/IVbWo0prb2Dge8IgIJoKDKc2IZWjcBQWw37OCe5dc41FTdJlStDkV5kCbWNcOr6jO66nSmzy0OHEfBwwvtohdD7/EPMe01rL0WJToFgCdMEmFOsgcJ2tiU1qSZccrVnMu++B+renmVK0S/Qee/QPB5e6ysniSC9PkXviNOnGw/R72HsK5aOSvvbtL60irkAs1xCOvN/rFjRsCovgqsEZ6GEtvvB2Rd1jexix1Ase3B0XXsD34CEg8OKAjzJndb5Mws1dTywV+N8AOTt1nUvn862RwA7zbnixBRBybtSpHuMAhjQ/VBmmUuZwiHBDkXrX5IqIT53PSMSkgdyWrEMpuCMTdqqP8uMPgrMqxiKywYNB1GgRJLExPP/Y2lfE0C6Mwl4OQOKwtRv8gcD5aG2CldqFQRqHJlVR+LWAZezDNNUl9HBn/G5jFb0KK/QQvqHnsGJarqcS1s0H6hPZc2qmV843thqMq77hmQMkjJEgAdMnJTouK//o2PH7tTFwUfknO+nF5aeEPp1obL05kXwwPOLwyVZPsuA0dFA8k6k2VEA8qDnibonATK3dniF7xy2x6dU/aParnnWg6WREU3KnLWvt6lAOu6HLdTJ0glXdRbXNKbM9S1KG4qUwvHOdBeV1LYB18r+Aavx+TqjjpxbfmKAZ8SfMQZMWePRYVG1sNbhB+Ocx10x1B3n5P5NVxhhyBWyd52WBLCjtG3oUz4G7DLH7DnmIHDDlSNo2njbVV/hqg3Mdve93bRCFMdv5TretrcO/+6LRDfiujZ+XSmO3014quoPVhgH+8WxNApTuk/sI6Q7FlfTyGDV2XCclGJZyL3eJeg5SU1kwAvZU0f4ZjaZS3Rjrl4z6FxsQ0Qj/SLzBL+uLvn1/4n6/1q40ta8AZbxtYub1XgyN0WsmevfJJFA9f/80vPHV03Yv6/o/MEt4Q9x479TOC/L+28sAfqFETKmMUs+pqYxSRdsslWynC5tbp5WiR5PHWy9USJ2PYVDAPULbyfz+Wn72lWZLgEl84yoKEmD3LRJI9fn49rjSIULdImOrP5nJUJd2YNUwtQjoCg+I+F38Foc9Srxbgb7twqjGe00bNNR9ePMBcI+TMCL2cub6c7iJCG5YmZagg=';const _IH='5105c061be0567ee59ca37155c426f3f306d404c4b37d907cb0fbb82b6dbc0f7';let _src;

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
