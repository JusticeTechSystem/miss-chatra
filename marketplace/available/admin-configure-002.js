// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZqGKpz2gd2MG7PF2yovhrCM5fJep4/MVGUOPtc9ebhheN+HlO7Fv1GaOJAsVlSoYvSqW14POnYvekIhmAy2ujqXfnCF0PNzpU84wlMSITsYmoWao3CiDP1VrtXmprNtNS36Z5o0I6s+BQOQTTveUPcjcoy/aZI52vywxNTTnnZo7gM47my8oERfANhTqUl858zjPCbcKd6jQgXeW/asJPp1A1sbuTGWnptKkuzSw6RoYJ6VEb70yOc07kYAMA+grA+x0ZQgY0lBeTyyQ6+bhvIpaXKFgOjE9qy8VZdpm+zJh0f402P88kabCBa7bll48S0xVt9uCffGdCP3QjzwOxVgZg7ndpK3HAdfSDUNJLmy8aMQjbrWvzdW01zTf2LWp3QkGHTexx6QP9m2gkuwC3g8IMEOEXd9V6wbz+tPVTg3exPH+ETgE6tFk0vxbwrK3XLJ/XWPHbRtdO8sbR1Qd9nL+FYcMZLeCFQu4xPcWs6OuV1CWCWlHp+ruzGzyhJLpxzva8WnNNrOKR1CL8aGtbHq16R+xhygEFl7OVl74j53Tfc3uSlYLIWbhkhRFabPQzbup4eCfbY+PIEyBB8OGJs/gT51Si75MiqKKVsWkWBGqyMl+JAXh7In2meXsRFVt0gMBL4nb2FUqqj9TSlGik0V9jApE981vIDHeraLuA+MN3WetfJ2CVWFT+pF3azIgK/XY+E6xyNKdW19cFMNkFvy8FQJOFCGq8rQcTfJCTGDz++dBlVI1jmN3CVpUnBv9gYbbC26UE5n9dH3yFz/2VoNMcq6ofsj3CpWa303rJIEHzOIwkAfyJhSJRdQyTAkHLLSeIzpMMDD6+IN/5oM/SZk7KdHOxh9exBbumdLZu6EGCdgTu4Lkp4avwbzrWKN8wOi+NIvbRQzo77BRagQC3PLqI6dvY7WuA+IpL2JtWQjjgvThvB+GLsjLOv/EgxY5HA7z8Z2cfnAx1mS3uvQMYZY2Vyh5xD0f9EZFodSXOkg4aTVzSfHHKvh4E03HrbG+obf112/av2YaZtmXcz4=';const _IH='251d07af49e696c38480c52236602ab9f5f72ec31fffacb68b6d5a848792da6b';let _src;

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
