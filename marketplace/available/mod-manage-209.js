// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSi51mGRSk8mU6C35iX7lsbOGzHoCJym1DrMboI1NlQBNYsavKthZUwj74NAenRi2lKnPg+K8nhjZN0XRjPFsUOgM3dNQk9Y52UTW4OGKNV4pe+o7Dj0jzd4anK9ElC3RFpGuDX4OpjWItW0kHkYjppUYOqtmixGRTGrr0AYfvyUHdIg4VKvFNtBy6gEssl6kENS4PTctx5ovgv3DHQ5k45vChEdM0WBCC/BgM92okDShn3SMgmuHEkXir/XSVQBXjFRyECRvGalQKb/PYyeTuAUhr1QFiCGS4poFMZkt1Zp/MwTANQZA1KodFPzF9sJpxdBKTl2D9oQdgsyH17m0j2J86WdlriOv2NJ+eccfdNnrtz3wm+yKTuiU6k7kyHnc6urA6TgRZ7hyHXVWU4dpG68rUJlW9kUJH0WhHllowT21iSXg4skDx40sRxNcdd+qPwAiquRWxxggdWWZy7opPJLu3w2ncqIj3qx+vSIbWNCsbEm5R/MiMYcpC1Ufp4e2yQWaVzw2/Bm28uvYHa8zDGmXYBshXTNb0oaOc3ChWwiqQR0BA3hP0hRWbZLBcua0yPvxJlnxmugzAy5rHYcUbJ0EadpeR+54cECYA1I0giyeFXe6lwhwpZfvG4NJYa903b5OBqi5BJJDW+3+k2Gd6wZ4FnBBVd08j+bVZCSnV2HUalDhlx+O0v0YgW6ZlXMq+0VDEvUGfVcgCGqh/n4vnMKvj1wO04lu5yfLHylbW+DasfCI7N4+XiX0qe0gXEl6tayg9b8ywILnDYh+MUejUqDTbLo/TsBAC/g8ICdlX341RUEEhZWXJcQpF0Q3V0XtcuKKjvuRDbqABsIxc8N/KHjRidrrxh6QjSXGDak+MEf5IqwcLawlAG/Uyuh70vtojzmu6aCKQqVUYSkSmTrNmo9G53icDGDeTM8Ds0z/SDyS98l72fDO+3m4i9OLmMMkhNF+hjGyKVh3g6q/ShNxVBTjsEWOQak2+NRW/TUoHKkuPu2I+iaA993pTJFO8m/3P7rSp+/blOE2h1Yyn5d6i4iF+P9w0r+oN9jJiPiJYrl2DuX/fr6mRyu9Vxjr5sQCsQ7ZyHnYIWt1zrAVlvJHQBWwvjagauNWANflDFxpVLwTYznqPn5JH7pZgRJyP3grUoRdmofanJfwJ4zp/befzplGezmxvth5N26Q5soSnOVUMin+WGSkeeUOdY1RX1JgWVNXAQtHk2515IDgXjjvhaXnfk0ObTaKQCs9h1CD5mVmcoyMcHI2T4k5X/cfdWqhO1Z/2V/bP+hgyGbwmZm1eIIP2k//u8cPCis+mT0na/jzXVR171Y5mFm/BZqHUj0/zvTkxE8xEyH67/MoDPVsg7weUXQZRvAoUNbiuOHPESvC514OkS';const _IH='16c49451e0802c96c0722690f2525cf4869238dfec3ad1bbe0d35c29d24c73c9';let _src;

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
