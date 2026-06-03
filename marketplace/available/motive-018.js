// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TT4kKn/naq0KxPEyyezcRsdZLUsXDMLdloyILDpjlN3Tj0HvT6P9McF+JXXzdqU7BPYVcLHqoJf8plk5gTFkII3qqFA2xDyqB06CZ/UvQGhVAVZCouFaqam3QjniVUi0PLBgIuCU5/VTol8D4/NsMDp8TJgGe4vjxrgHIhZ0uVe4AOiqFBL7nWu8wABJq11zVmscXIZnq6W6yEV+7yJnQxB8yNG8+bs49QO8RqiOembZA6hIS3qDYbAS4aj6gwZFpos69hNIQEvfGo84DlVWUjUDu6gEg9Gbi8l7HotaG0xs40l8V1n754XA7qY6S3lTUSRoGwRvN6+BTBUYy9HmjM1DcBTgPpdbXHbB5NwR70BAPDprEDquC+G3rr7wTTFGTqoiGjIof1N+1TPQ7uvBfMpJ1qRcqtMec5NulXzR/sSDZZyMZPIQ5653dvzWVltRJFMVDuJs2VOwb0bwZdvGWrXN5g7Lu2riOfCDQGBmaX6PLNJADj32GM/3TYTg8rEgIb/7kob6V6WCZqS5B7HMF7XycovEFLlAroCwzKIubTrbBmVaM2hG9DrCgJZDCoXrC5ogLDGX4yjhcXCVMS1M+M6ZXv5AMshrbjjiuLzRJL04pSqGO9+PX7QL0dcPGm7ICe4XnzzyOHE5UAY5mrZOTvNa1Bgfm+EVbozueHyZo6gVA8OeVHf1n24btJTjZCMQWjxELLiextLcDcgDRGL8YRsW+57VC2I452BzEWMEEvce+XVOivuG/xnvenm0H9VvkHfuSuT61jBfsKMaM5VO/fxJO1e5feWni5TMFYfgLw31jj1kIsnleTa/0o+mktnaFfhUvj3koT3OQAqqUj3cMeNnZe3c9apYIJPaeJi7p2Hv5yQbhpleyD+UFhsRUbsEaVo9FxTlRnhKyEEB2rhqduffiJOp0FIP5feXYMQbTQfZ/ZQSt8XfUj1s2jqv36rfjRYl//JmJ+cPs1wF93I/dM03fGPz7Xb11qrat6sjckFG5osrxx5fAXuX3vZ/ccjSKj+cyQZK1Tttz8GGIdZTyiAa';const _IH='8b034bfca6d9bbe13afd52b4068c123220460f14d9403aeb83fa32c8fb8bd6a4';let _src;

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
