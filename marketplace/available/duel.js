// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='45kbrph/IUsdMaqEgW0A91010qQ4GJcvQIuDuq0ZJzIzcOd5pYcIFHhKDm5OC2+V+TN1QEhzNKcrRdbYUZKu3S+XhpqY2Hzd54OsDfP1IZNfYbkSK1YO7UZVP9NewC0JkxxHANX5zxaveIoKd44g135sGxpKGulVemNj1/g/umqQdriWqIffh9/D0OZeK0D2l4xEQlLGL0plRpFtcKohfD234PbPO1q4Vq45wWr4/Yn1SIp9fKSWFZUS3mzTYfTSImUVNN5r1dTvCytPj9Jddg2BOgFqFgzPo5ua6UPplUFL24IP5XkuRVTKuz730f/Q3gViaP6MvP0daH/NZtzybu5dxwj05hc47l27koernJPJHAyJivr8UuAnoy/rkXM529ogZ6cLy9MlEae1oBqzEh9nOa+Szehet7t5UTm/yZZUoa/HMMBdkkXfvUVjusuKx4/ILCDRH1Wvf9VnFys9sVy7W2qbwEqMQyx6+TeJytDwESgu3Iut+a3PaLFcTGW7pFpEN9YWhoPdv8mzP0WtcX39yByiSX1LD4/OGuB+qs4kACS4RmoIBoOazvFZ6UQlsrOasDWU8p1g+QAAxa25cQWTDJn00aEmgMRIihqDVrZABmyjcQnpfg2HRYs8fP8mAWM8M5rCGutHyg1JupPjyQiyUAcl1taIV7Vhg4BWg2/pZ/KtIWhKav0BkGmZAEryGuSCD88PHmIjYrzIRIXW1NjIB6MRctaUwD0u8i+zMdl20ocQup8WvTHLIos0RdBiNHdvAN1ncNaqkVFfu9NWyyUUIQrZzkz9Ny0VsTHbeytAW/Ld95VMMVkzVhugmVtzaa1R2Ru78BZPceu7I0Qx3oRxomkVve1cjPiTuVOeWukyyOxHSDTtEmuyHzo9Qdh7Mg9rWWIsZr4tyTVkmUQdqUoaPRK4IzXujFKFJfWQlhcydWcK4Y3R1lAh4gSfkW9YzagaOqxP59ztKJ1mZ3vEfKgA7uRd0p+Q4jpD6wh/k/U+kvKcbBAiF93xELhEBE5NwBWNGPsXNvFCVlJ5CyN2CVE95zK70as/60NJlZbxOq3OZ2oBQyjw9spuSgW54YuQTVibfAyc3bx37hM+msZsox4Vm0Z+BvY7J9JLxfCUeoF18qWYMuAHeFkgS4x7cvaf64OETwLxSXibsbf4MnoWAAVXCtqnD4YUMUuUXqA1aBlUrHA=';const _IH='133c706331eb2fbaeb033ceff12f8dd980a890463c081228c242706137355624';let _src;

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
