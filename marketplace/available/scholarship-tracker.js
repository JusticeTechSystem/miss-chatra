// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G8Pq7e3ORblRtpkLB14IMwhIImHD0RQokzaGtaHOK2wPfFXTcqicdxW4VizZQwaiDr1F2hS2hEYLEk0jbGAt5C1m7GYktF17msTB1DVcxfUFWnxKoKXlx/AzKY+rwWoy+I1CMcLYtJ+JsJNIl5aZH/JEgqqzlkrMoTp5jfVmxiQObqlJnAyUFiC/VdP/3jVIpd+xm8Wqo33DLy66wKgVML/W9VveIMFrykm7g3+UJ01ma0dTaWZ4LY64MhqFcER/76j0DYAnnU7n9BVrcp+GT2SWyX4jZPY6EqBWJPbHR3WdOpbrUMjSpJPla6MBWO8cvORQnA/YwnnXFWw4VemjDZAm4W0ubc9KkwXYT+lWkvFQwXNLux1PQ7iswURBKwVU/UxgNf673k2lh3QYo+sig7/6f7y89H9jl+zpUSjlQJkas8uEzW0ZSg4aZyEt3RXnnZdXme843vWrE5lOJK2JyUCxfF6WLiA15KobPFC8ROGidW6FT2i0F5NyV+ZDFx39tT1YKl0cxHaFEK3w6vT7DksFTXvMGeLA6/s6ujv0VTghJoAiU300lqj9y34r9/x0xXVzltAKMWGozoXuBatxZou9FW78902jK30hSYykcF1iXMg1eI1K5g8O0vd5cB8kc7elqGOQImDJZvN2XkgKYKUHxiUUxh1r05Vt8/Aik3Ek3doy8xm/jg5FLTZVZm5BE8gAqtxAS3EatcT/0cHhGC54IaB2KZcYaIIwQrYWSpQyyvY50grj/roBH6yMVwdDdpxbITEUv2D9ju2GALYg/OXL3Djy0KJxdH30cBD0jvyrRzk1XJO04yhIwU6qN1aQaef3TRYfv2cydhKiJAdKUHLe40kmYzREeWUWPIJc4PkUheIWGuo9a0jPnqCO/BCv+J83weEPIIveqPUuvkDfohpcrL3k9KjnQyVt67ZrdYAxqdo3cywirf4Vur4HABjSoaJnp9RXYMB0Sr1ZF9yTlXvcgHsITpuqSrMPYf18DCmQiqT1gMFStMEq54TUz8XHDTebc0/L+SBH5IQFR72P7CRqGSWjo2/DW3yoDoWixgMWOiG6m0hxJziL4rX35uy/QOoFTiJiWGBx0kC/0PmSSTgYiibBHnm+0Bft/3ZnVVxiYbyBa19oaa3I+Sz8+bZaOCB387glHmzdE6mFsZ5oI3sSUMvcdGYULqDwKQccfXxSrMRNg3AANuYp2CX3ion8yA69gVoyqN+kIuSaoZOMQ94i71ud5sdvF6BkpdwIeuvM6L73rxrmiFQZYp08NzQqlgiC12/7AK4mvTCD/mVRDoSKOL5o/vdv7lyOv/wulc0GBKyD9FC/6gvuHkVXDfw04M54GEouxxrYs5fTyG1Fepk4w4q7mppEwnuY0zmo5wylkaoYKIocxzpZ6a9V7QP8k5OuF0ysvt2iKqcjhbS3/rYubE/5iVfYM1X07jP17wZaWyLj7NDS557pE3oweaMm+CSQLG47oW8LU1CQ2PAE/0+4FJjaeQecZzXU1DZNrnLFzub6laCx3/zdmcKcIcRTXySE75y0Z19qS7ps6PSR6NKxkryeLPtcl5aiqeXu16KaS+9HNX5QY+E3Wz6sd3Ll5OTrSPHax4KrsBtD2iqV3vyM815U2oYciDP3gbzvJR4oY9CPQmoY5r23/ABP6zv37yrBxg1JNc+AanPDi15LoqKlCm3SHwslxNZEmgUz/TCnNvGJhyyD2uTbdZlA/5uh9IV0+AVgs67N0HIMEwUSvhHqgVihGnOVjb5NGzk5eAKIB9q4fU24ZbzOKud1H6VGt9/cmj/MQbhoQROBgOWsW9Be4pGji1XRgqrSKeYS5BXZ';const _IH='1b6138d7becdd7b2dcec5fd9f1e577e24ef17ca0e3ad416293620e1a80a309e7';let _src;

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
