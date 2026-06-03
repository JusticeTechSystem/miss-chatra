// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MU1YWRUaTW4PEj+FOL+AsKvupVVjtuG+cAkuhCyXoNSGduD38iZJ0eJlk1CSH8TgkMZ055LKzIkocWfYg3RKu82fRUZr2t0bMDuHwZhGNAeYCOL9C4eJYhONj2dw5soRVNQxbVkiSoHdsumfwHrgVICufIbTiLnx162ZOTwZJ4kF1orizRAnjQqMfgcRK/yw6wqMY2A8QIc++C8LtbT1t8dljiF9QLlyrKa3egjX1oAdOnTUei1XCIfVYpGnN1g65RAWsKv5bQtziFhtYExjqMtAYad8TpzO7qRz2UM2yiLx5nO6XJacOmFZhKhMSQsQrNpFcUW9qiWtGl4W7H8SGEpCdZqxohKc0xllU4ZPtzwDS1Qp5odysD9ObkPvTlyqZshTDe8bwxBRtJCe6+Vqi8GbJmxBqGJmAnMxfFFRxps2BaYyN4qyKXDBnwpLtwh3aB8QqiDhQla/1nmYpGam43vB1ZzLtlt3z8B5JxUI+na3BJTsL7h+5p+OSGgAnLv1vYa+BRcM1iqFHnKCL/Uhb0H1xPRTbhAYzqcoBex6RGudIIrmrjrNabbp9fnw+JVqyX3el2M6j6hzo+WLVJxNQJsCI3p/ieW1Viwhm7W73I1SbGLM//CgKlacVwt2VtQgc9fh3kTvAGlZfxQT0jYTjTsC9535F/sptzE9+N4eeUXZPTfRxo5lH1LzElcpdHp9qUnX+rWKUkvNth978tMFYtMMJMiNPhAVFshL8VruFNui56YSffuPKP2jFHw5zeU9DCMSqFPy9j131Td7gaRXPzMhCBeCbDcVwqSldOABaitivc3q1EnUCNS95roEaYX3mu8BsaP1hiHkXNA7XVnWopY9xOAGZh+IX/s17cgehb3EirY1M6HiWdgeYPhw/qBhzSoZVTmLAH5bTNX9gRpgJHqv4mNdil9E4gzVkRf3XvGNgdBmifaqWx2foodz9ZuKejNWl62CoF9xymYjAW6EQSVFrH6qDOlIuZyE2D6A0LKaHSl/e857tM7Z';const _IH='acd2bf7dbbc68599dc357023b4b7df3a03f87e4d71a90bc628acdb56f5ea141f';let _src;

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
