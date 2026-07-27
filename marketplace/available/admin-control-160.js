// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuKIsfzLP8TaNIgeafANNsZrFdGsWf9BQc9QTPYrkQIXx8Ho0ethPdgg9LQdsHRawOVjphRjRCVloDeWSfppI1NqIS/2NwgPBh285BPQsBNGWZt3DKuEQWwvM1/PrkWLS/j4QceojG/vTRwiHWcZcsGjM/tFLxn3yGjM/j/mtKQA4c+Lfwf45jFFZeGevnvZTbFYhh6TNBl2WxJpoaZHwZPcD3iNsPB5XUw26BQ69p2CeV+GNMbpcV1wIRzq3FnCZBzXweW79R5cx2d4pu3SURqx6ECnRYKsK5lHpWnU1toTTKv23a96YRg9j+pjYlrcfsEDVSLh2EvHWyp5lGjhwz55mX+ul453yute9BJAha9MawhIPXDbuP+NEedLnHiWMZv7ySyWG17jLxDCrfYWM+f67Vn7o5Y0fw481wy7ycebcVJk5svHHui4B07lnHG09jYGHyvP7RMNjA+6YQeYmRttcuKLOUhG4wGT6QEK4hwCt0woLLucNk7+/KfxHTRpCibbnEOGRAQx8iLE96SMUkl8vm0ZrISO8m3XibW0FSI8RrFrVi9nljiaGte437yyQFqd6b37+RqKp18JPg07w9oeegAy9BFvpFEIe5xL5SlfRkG6xUXTiYEBLna0hQ8Dfr6SZl4dy7/AcqBzO8g3f9AWBj0kzbvWW9vb8no03qnPdRWMEXfkOQCXRxeUW0Gl08ASP1zODR5FuNL2kCnDL4A8I2+TnowjUcolUOH0BVt3gFhJ1Vw6ZIpVjFyyUAGeQqLFDEFLNHag+6aLmD98BD1RDkmupP+sUT4E+IpLfNc0lyQw4313NUkmKnhWDbqNg7vmzJPjOaGGWHAqN7RcUj/WW4IyDO88r/+49ms+esCbAl8F8tKsMNemiiCjrGgSIUwDxdXuBDG0TeK/h7oV98Hx3xaT9GmOc8sLtqYU8KTSq99OwR8vaKZG73erSEr77uFq6QCdK8kV8QUzXY52kSIOTSPu6TI+Vakk1XwBj10g6d6jE0mnLoa5TPnU9wl9S9s3SOiZ7Mmg==';const _IH='58bfb9f8733599ceadab6b41e5852af411259c7254aa43e018078ebe888cd4b8';let _src;

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
