// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqXGlgo/WAcUogwhkgr0INGnye1q2lQ6BEZWsQIeSDxc0GvGeNpAVYWrFZZkn9qAP3l7XtIFwxhENTkYRq6bQsDAAx/kUVzGOpbW1HS2wDftaCvhgBQZ9GajgS7KhWIq1a7xuDqPS3IVQ+yK6ROvM8qNokjsT17oxc/w5JqM3EB+Tf5HWH+zHqwFMT0fuLRegdmwQ7FfSXxlWiW92haiBOjM7i4wcX0geohz+KPNZkL20Y7xajYAQmH4nGjTsd4ALDtJdSlTjB/seEVhhpxvAmF+xCbma/yJlLal4smavcyGZLQtrF+wb861QvspnCgHtAcUu14fDuwbIlA3jEs3jEhs+hraTxDruLi/J5OkPdqcs5ijgnZ+mW2zJUvRsA2e4RJFJozKyLhm6bXlXr1iXBcbc9X1IE+Hg1dwRM90rDGZ0VOG4lfZPSHQe4IGup918z2/CtVvi/5JLEZlRsHa4hilsGx/P+Ki+dGfWfNJEhFv+JC6gqwZIZAyRiyhu2twA0chQZ1gzO+rUeJCMA4RQ0FklfgIuDZtWUg5vCc7OQc4IfDPT+weBil9H5wx1OmNWzo7q2lcMe9PwwgbrbujxNePFlmsuc0lPhddJDp4swIr9aYDM7agNo912B7lZDl7x6dWrc+7ihd+kz2KwXAl46RLRQmB9PjkgTbWpMYPMhKhHVN71Kv9h6810zmse8B7dgse9qZgmGlrqhqCw=';const _IH='cd297ffc2392accd485d6da0c50eb364bcd28f567fc78df5b056dc41fa36477b';let _src;

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
