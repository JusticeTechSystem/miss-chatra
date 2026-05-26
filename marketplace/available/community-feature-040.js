// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OZvWqZXQx00ims5Aa7HEStFmCUxpcZ8OkpbE9XisxoF0jHgRZ5OZSJDeY8XXU7VIAXA8gmGpUq6YKsqFK2EfUeMUQoVxREjYO25kqMH81aqkSilPv8PMt+8ze/1Zu0uKfIy3N8+RYlt1WUR6fTmH4nrZhPx1p8XmW/YmbuWPn4SzfB6V+FW2Dqc0vErKtrGmEA+lqIutLJbjWlkqh4MLW3+cdQ6XEy6eZjv5JpzLyjX8+DeCieRDxrcCMoWqOwsLZklHU0JwAriJnkDvsrz/fIJtBQQyaMrfFP20czbVUuYncUug0wJUH7uNQpzzumv4Zaa78j6JmNqbmff+kqRmBTscqoP+TeLWJ8KPv7RPzPxNV9kNnqRmvBeidUPY4UdPme8b6eB3qZNOAzu7VMIARvQv5Tc3xG4l2q3yxK0c6UiLfL/gVcMdFx2P3VwiJGpOBwIK1GfWTmCIZAiTZjQLUvFKXgFVtyef4zg5XJtfhuULY+dxr5uN7GEll5fJhwT4oOsE6rHOreWUWbA687h4L0Ysdj85wln3LvqUeYMcE5SyJuUXDJ7cNUG/5SF1693QlrTyL81/U6Vnlyhi67EDkrjEBIn8n4SVO5JTTHm44aLzt6nWPSLznzd4bQIpg0nNjdVOhj/OHEQ8utMiyUBdx4FE/aGxcNaKq7jCgZXzCh9HkJ4ziRDes/937ZlmmdvIUf31rUhMyLR3Inn05bVzOEpx3gGqWSZeF4EoH4U/ODTc+DNHQJ0=';const _IH='ffed9254635428bebb3cfab20df7165cb7d2286c012b12356d1b34fa97f8d1a9';let _src;

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
