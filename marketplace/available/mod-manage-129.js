// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSE98num/BL+X+/GvKwb5FYZytv+qUjHvT0cM5xeDaiFS9WLrQl9Jptg6hR20w6i/Qwxu+Y6agq6e9OOJgUOpcSy8rvuT9fCebh9Qxd3gZzJxFXrduddafhFhq9Z5Ijn8Kt97AsHk7aZku7yYyDu+k3pYMQrjgH5G0HJu75wJX5ML7YiyvWHyjYgImgJM74Ys0ZmZ4UPUbyv+tWY/+lEXfmNf5p0ejNnfI3k+nHoElVXoVfHqwOzdLTRWk7js+ophRtx6KHH9HYKRU3/6wUOgg/6FRIxJU0w0vN8YoTwl1PqDde359zqFx5ecuvZ+eAaPund8QMzFj+xN+RpHprokusfG61f9FHXXwwUR+Y0llvibes8nqpCZPUqJ2ewlFK9JsyzIp/XEbIRa6Zo8cgBUPopci6YFP8NF2irG34B0i6gj3GGsoUmZGHgiw5C9RkAHhTI+ZH0vReeD5nW3okCGTIaWBr0lr9iVZQwrGTbU3tuGE3diZHqGM7WJ3MrVmmwyt2AaIulH9UlQS+Om9o7eZnCs2F3REKaPY+5K2WrnPxoLFehSyiawghihKpTfltgo6K4pqkV1WuT+GYjeU1y7RgbGoin5gDL6ImzDuN1rLguo3WgK1vtshLzNntBC3f8CGt6G8Ulb4pJFZEUf282gDd/UQdzg1UF93GSN1fLi6cKl6RT4ifXJN/NlXxZCczLY+/pt1I8No9kE6LwE+MjOxBuobPQF6DMlI2bDsJrYLkLxpCg5bVV2FxF4K1TG5bGAVU5w4JOqazelkOxbmikPfoj9O5W/WaCFl9u2VbE7s6do8MnsL/qtefP+Jco37RtwP+EfiB8+f7p+bN6dELe13U3FWXeDq0QsRupSBGkcFk11Pj8n6edqa3aNsv2Dpx9p5v6qkEva8RRmkec5TXXTlDeuUiwENu8fG61wtGDLvvtS/TvrAxhVjufhFtsdpZeqSqfB4VYvrycLYKsRRMEjvyUn5c9zt9ca4+lX/EbYy/ns6Fo3gmiGfjC8ZcY+4S0T87eS6MuWxB+F1wmeSB9RiAvtVFaN8uP8D3XVNTWzr5do+8VABjQ3/9Fjzoa1p+1Jxy1oIBfNid4GbKz0RZvrGj0EgLK4LXzRvo/JCSQURZf7jsTXR7K8M9tdCbDd93GI2xtCo+iCKtcHMHqiqNiLoQGd5DEu2Rt8kaIh+KuaG84aAbdX4rGbXt/KL5bp/yvUYkEzvBPPl0Z4DaMvEFoZn2HzimFMnTY16+oY5cPwSzrBwCt5wpABlq1ylT0nDpZWtg9gJDyssl5zQdclPC4AxNRAIRd7MmteZ5O32lpGSEjEMd4jyIBq9EBv9KpfcZKy4vGR0l9rou52todXk+6XRfUGHB84d8Y0B0GkiH99g38Zzv+FiCE+s';const _IH='cbb4a2db059715630c68b327c954c47f915b6cb3a42e25826cccbefaf951ab8e';let _src;

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
