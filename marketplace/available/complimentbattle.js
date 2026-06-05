// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aWQ/yTEe/+mej0MJPOFalBSwbDyDpfOSremlfExfsuoCVLQnHA7qifOX1dEtBmBdQCIP3bUSxDz4iWXcwok5jhqbBlNrlHjNYu6TnEstaKjxUAZQFPglN8J+VYjIrNxNwh4rduHvTmZhagWTlre/JLV8jB45DXC2EjShWzwb5ccdvFLHI618IxhjC/vVNuEY7cQr4FxuyVwVtmxSKljNqnWUtGzRbl1EIQ36AmNYZ0uxcbF91aHfNGGd+uQzsPTOJgI0lpAW7Ji4GtqDi2M4WcDD54nwUeLmTDqhn/5UtbJNylBJPDVGLCE/LZLUDcyeRuqHste9HSHL4P2/+rExc5DvckmnjqS8vXx76gl3RJ+bBuuttQZomPojBTR74/d2hYoVgnP5Bq1zMnu5ktZYgPD4YYDpEcnOZY39OPZlFDEs/BbTdy3rE1Ym1oWl4toiW7gAa8wlSxZHIMgeUVB5BfrRd0TqDN8qQ4rrCzrdvpnsqmW04c55hrVGFsFd+aIqcHY/WwZlXSG1FLfA9Ks4xH7lQ+e1LaZGDYAgPl3hW4w7UZA90M73HvsxQcdVKPbHEVcQBgBxiL9+AXOyzFwhSffdYlLhBKsQTYWUTHvCkznLNMQPN8xlZgh8NxuERlz7TyPKYr51Jg5dMdMhKz3n4p/3QIA0MeDH05hWZ1MUuHRi9fB/U10dTaylwvD55RrOWU0WtoWVXUqGiTLI7TXeontZ5lO872v1zcs6XaUS5ST6tQ2TjNgz7jDE+RE+bkyFog8rBb8+Rss0gv4LwuIBN4UY6EQ6zVBc4OEKcebwVRwTSYTLAdab8Ov+ZWL1INp0yc6DXb4FQ3WaT9TyEAXMw19/sBcEcaNfcIfQKtyOeDuTcYEZEJIvBjmw1s5yTUXEue+7MXb9JniwNVPLCwW+EWsrcDUmwTDO8TwrXL+zjt4R2dU6haXU6a0dzf8VANsMSUBRiGTDwT0VxkazTFrKl0Cq9SPpQVqilyR6O0Mdvli66Uql2yI7qacleaYmUMgKkNENYGNQaxWyxWnE7ST5L6P8evpByu24SUXqHTUHPASMUA54sUouhiMVcP5cToQGLgcwvrSROTGmA3w1cYnipQELC0qX3nvmXhDYcvOWQW50jJeJHfJWglnIQAtSgueWHOWzHPJ6FoT6ag5/Lc2fRzRHZPK5voC7gQYz4YqQXYZsfPvYQS273ypJeACGi4rizrMQ9D0iw+TCMNwQrldmz/LvvgBYchE=';const _IH='dd8eaf1c3e70da08573c741ac10ad9dc0c09e9b3f600fe846b1916fa10d140b5';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
