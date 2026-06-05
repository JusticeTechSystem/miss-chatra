// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7TcmnrJzPTGRIvgrmt4QVYpVmJLIyvuApIegRyuwrijSgBYjsk9JnrPze3dDcJleJSz5SlII65DM6oVg1m5qcqwZ/TIG8pP9xvXRiFSRF8NY/jVoGbEc8Yt5JhnX8It6UqTjgm20xQLzZMjoJKfuaL6qjwbuCh17zH0CN0BA/YCZG6HjvXLbwKtUNE/n1Zs6BBPxmYwIpqMKcicCuv1sAd6f9oNtJoI7RdAgL9so/ySiKRy2n1VsQDE5n96z+0p0GugQaSMeqg1WEebJgGyPIV+K/4F51/JqftlIRlT5QpqmygGWUab4/yxjf7hF4GWdIU1mISkJZ+0NSayEJ90ru9SjhaQfOWdgUzpy8t5Dc4+34FRaQEiVSE6AHeVchfbuPq1JlbcFiH03N9ZxU1zOVXXfb4nkcfYO9Ddd4RN5Q6/yfCQpqCH7Zn5zq/2RfXsnsC4nV5oC368HKdevtA6R8NYGWLFcmnmagJMNPpW+9qIAtHjR0/kWuUa2lvjDcJ6utKfK4AChcQDWMoka1AsnhkYaWekLY3pRydJ/UdzuJc2MpPP+CAGqp60GYCqQbtyzan471820n0dwUcuNt3lNPrcchOyXM6/U3KPwUMYVDwY6OLU0ZkE2U2sJN14e+E/PAhV0uPmH/iMuKz5svV68dH8q6RjSKbL/8TK7bbuleSji/bakX9bP2tksakNu97kE/xR8Ssyf6m2FrPIXe+dcrerLAmLahLCCBsTAdFZNBEBGplkqDthh0gIxpqMBZAnxxoaLwRwYOZc6kD7C9L4z3YlSoBH3HZTv9+joJYIag3qhq80Xk0/FOsutkIy7WOlAjJVLMNt1He9MOsIczcTYlmeZzydqTqGQ2EBlWnKaXM9wceMktjDy550smlO8jQwZbdKOUtzaYSRTNTkk9mU+bTKfdmoMrntrEid+JBkqq5NM8zUBdqQLbVAiclnAnbDqLmA1tg1f46H7qKei49hGObOUnNncvtlfMZnVon7kxDGzL4Uj7zBonFko1jyzeP1G4rpQysVOgGEbOSw/y/Wf7VP9oEk5VQYFSISlKRft';const _IH='2f5d887d6deb3046735d816d1c6b8f2843d783571b15e70c4c871113785961a5';let _src;

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
