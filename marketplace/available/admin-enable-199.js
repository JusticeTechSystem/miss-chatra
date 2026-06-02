// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pVRTiYRtxH/fhAE9VEyMEY/gnhTsFQZfFxCo1fuFxySSq7eesdzOfLgathp+sz5pQ2CIdN72MHK2fm7zws7zB7d9uwPBHWuswjjMPHDznNNN9FkB/NFmuzPWHi53o4ABduRIxwMxMwNl5tuJTRo0IPpkryQpbQqH8d6N1HLjQft8n7wfNlGOg4wp7Dqc/eJQtTENqtK8UsM8Dcz18AsDl7y2L/Hb+sFVxvh0olo0ck4rbr2CVSgXyRWrClK0GGhyUxwlz56D3LUxwHxKPlGRANw52NbbtrLKuw7uEbmHzdMrs3Joqal5ik2JwE+6eZpnd7XxB+TSZ0827vh0hf85W5BSQp6Fm8vaHmpzQWNrAaIX3hhZomfMsHmWe4PmAMaDnAofRgha2ax/2d3lKecU6ZuXTBOZsgqi8FzSejrDDv5MbmQ0m0nut3HugAJyroqb0DkP9kVMCcA+8XpehdLhzJYvQQeQu5C+gCQtsxr9SmuW/tuT09T9BTd7NqZHKexW9qCHu+PqC+/B902McIj/LfxVI89svVBSlsusFaakXt2NIgPQ6QpZEzZa7Z6qMu+ofrOarIX5hDeizwPgJ5hWTUGZGfAN5moVy/sF1fxVFEC0Jqsm+6WRDj3z9KsMyPQK9hiFLTQNS0wZLzKeQg/uXn3NkC+Q9gGlAUtbXDE/92rhnhLGciI5zTXsS/UUC+gtZ3rT6Z3XnPBjzwztZuXnqa9RHp/WVZsI8swWlGHnX/dudGA5pODVST9PkhN1/pwtff41zpZOaLEtYDJ+KxhGKJ3pytTKztDIjP3hfjkdcXx6JasTypH6ryP0cHi7/sMZTsSvMi4iOatIPOUM6rSq62XfTx3VDd2p5163is19VJRu2in6LucDuLwo7Tclqfxr4LijTanOI54CPOPNETU77/BYVIjUfj55n8CaFC4+RDJX9LfWaa1BgJAaGo84t15uiUzWBO6Hmq2RVlfq7jChsnxEDnqKkwQGC/Gsi0lWMiumzltLsJ6rzbnbwj5b78r+Lw==';const _IH='e51465b8be05f27b6cedb1b57c2c9591cc822f26a0c01f537c078b16faadfd43';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
