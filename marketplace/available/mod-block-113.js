// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWsksbY2dx47tTVfcFey8tawehymJb2wl766fMPktM3+tSad39IXXI/hgx4AXUabbFnArH/mlXHlkPNSxMOByNYAVfEVdLrgGLC4FIe8M1NkijWkz3XFOwoSmTbdR83E8dVBdUy/r+3zE/mtwh04W0YNk47vQEmtmG45NdAJO8rlcWxQmu+bB5oGLqU77xxquUHOwrQMX1RI9zKQkBrrITIufYw7CcyaF+C8iiwHfXdkofF7CDvOXz98iGLdJHCwNn0kXQrX9Va5bRl7IfdbDjWInrebRgif38mGyfjnLDjaxWe8EEfPEmdYtC6hbV+n/0lytfL4iGe8WID37YtK0egEqsNAOAd6/rxuvSKntgzr8jqUlYsb9HsCG10C27gQt9/DtRukvKTNaDwBiwOZ18F7jHG9kRmULw4oVE7JGfds5c7SVVRvJrYso1ZGUxTZorow1weEc/okSIcLjiWCTyFjsIK5fAM/8Io5yOKZe0wXHKUQDql672qb7cU0z6HbSxz1M9T78O3eyVdWHyT2JojUM0vtVzeoNTIWHx1kRbrKvbUs8QVLFvhFYGgQ8IawIIhonT8jnXIo9XG3ZwVTZugxyP4ISzbXSuk0K3bPI/agGghl/KN8tmpAHE1BYGbX9DorC+IaXzUjCWEXUBNXfAQAxeQiTeOMpRnDUVblppDKWVX+gOaac7l0Su5rDjY+ySBt53FYntJgpe3zMNiUh7EyrC1MT+hSXeYf1yEVrGZT6gTKy7lu3vnSR07HwEjB1AY+ZtWj+L1c4rjmWtInZbHo28u7v0FyTRSb8Bo+uLo2HfXxJ88ZlHGCvYeL8ErbZdYMoFLtxl8lhSG7zoMD3w9PmxvyyG7Mu4J1b7rckg4v3rnbowXUuuUWzyCpPZHTPcxWFuJENYhi72Ksi+Hzcj5xfMfWfJRLCaE5PCbqCoXyjyNZYRWUgIg4hWoTb+buuappZJyCwHZcjpnF1i4Pj5ZK4D/ItYgaIlLBF0ApC44W0F2vHpBE98KTQazpLrAfltU1R4VLDMAoUNGwtPzm0GwGjspTJ+UNF37aYkIAZYFV3mYjqI09R6skqugmyGGFLx0Zy5x1XVGzIgHhvEa9XO5Auy1HaeTnGk66+pqQJ7x33Er8CeUui5BFwv7ujH8/h88l2cS/902oREMG7DkB/NGQe7qrNNxpMaDFgNJRIprchGdL9CBxWTcuQdRVXE8UX+uJXQ6UR1E/7NyG29ZA/Ih0mxyLO3gpEq1EpJQKxEH+Y3Ji73xrN7EhtTiPK6c6iQqiQk5vo1fGEwCL1eS7uByGPnKzhqFwuGxQaLEp/MCxsXBeHwIduuWM3HRp6TNvfHMlHgKoYck47HVx3f84VJquueIvohtXfqCrl7hL8=';const _IH='070db75036781c3e41aa6c680a118b23a04badd8f5599f3306042c73538fea38';let _src;

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
