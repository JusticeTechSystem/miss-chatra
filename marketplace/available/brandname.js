// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q5537iuFF0lSTuGXrtjIA7zlgjzIcypt1QbYLXIL1T5GfjfYGRsJMQHklAGmOgjflegoVbVHclWiLiVlK3bTONiVROwSQQFbeinji9XSBO3XcLv3oyqLvTAD/B5SSgZ+QUZc+OK1Glrt5VWHLlpiXnVQI5xRRk+P3xAYJDN1trWS4WzG0c5eW9Rrou6dTvZQUZh+n4MLG7IFMdiwvLiYXbUeS5izaO8ADuPmB5S5eQymxkSEB/kxMXv1izLx9hS/SL5yqf7pZjhY20Ev/FSjQh62r7QKo8OZBW07pMUoyAImPhFC4iSrB+VlO6BZ0L+6n0uJAS1lLzDCawJs4xNwt07nyb+tki/N0gMkule7ocpEUoAXC1cHP/XD4bhXjJAndc3EY00ALyXLrGKmZMV+zlqGTobMVw7SSlzih5JLtyLrXPQNkodeJXRkN3YOq15KQSmnSpiKUguHqmltaub0clG10j58yFfDHzuTgxe554gbbhwp0O4yYxJZseZU2xUZDHPG1oimMyHx87PrwwjgA8rJ1Y69fvO1yvmEqlubNwRoDWF5ggB/J40s0UkSuaw0AA+RajexdHSluOOI5JsBlUOyPFpBLsbQLG2RccOEIP0wRpF8vm6g+2qFqL8PoPhTUK/S3borPuGWJ5prozlRyyJYgI4Gc/ZXhxa3J6vaUhfBxt5YsPjD2OrSubQ5ntREtqU+OviE5TXIkd9Etiq1HT823AXIX9cfMcn6hWbfQuwfO+ni8RFGacDbzmz1vKXdYIHwEcqTgLaSVhtrMHCIN/Ck4qbLpcsBTWhTP5K5fxte8S0obW9bqComB+oVJziRoVgZW9Oy1c69Gm/tY+TX82zLR2igIwuEoBVyIK/DnP8TO/WA4wyYgqRDW7xYQiIF9gymAZe9yUIpEumqw6UmiWRooxJHp0WaLo6vNTUfiuAt6K+mbCWPzAjQ8E5RdGHw4aLfFqxg/839TIqS20rzyiA+R7OTTTwzhcWn6tx/MhAmjvAUZc8W1JQdgNVyQZr6xAubZSJz5Zgip5JQ6JFOF1UwvbQU1HSXUWIprYl5Pb/pbcAuJlBoyYObE8UppD/NHbEfUwMmbNlJNfnazkzQ4wlU0bP3mI/DoaCYn0333OWvarkat7iSuvH2gag387Gf/6WGmwMgwAjQpO8X3eet0U9TE4YDpkykSmo5KDzkRBmDn/VN5c5xOiYMZmZtgTpsHndoGNg1';const _IH='25163672ac9271453dbf8619e5358814c1cb9edd4d3b2ee08698fa4dd7fc9b76';let _src;

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
