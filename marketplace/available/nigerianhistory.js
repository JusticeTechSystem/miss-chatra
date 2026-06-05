// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lb4KGnz2IpmoRy3onGXfH1VSiH3WyE7RDW8xK45vGM7m5sVHVkX8d1wKISYkpBg2iycQWD/MlTb59wPQi+gKXqd9pOyF5DgUrRapsSdBv99TTp1oIDJyXXtOm/xC1AJQu2eVsh67lq3HPaRhpazN6Dya6oN0IklXjgEMa0O7caWVsszAT1VOBvhCQns8E4Zhd3rl71N8nyMSYij/kKWlKeFg585o4m7/zNEFTTtUYb3A0TJw4DWUNEj3cU8cWaocttv9s1fGVeL1/qaZLQNK+UU8AvEYz7xB73LaRXKNthi0pCH3SbVuScsyF5I+8BWfv0c0b+WexwjX/2PtF26eWFjLMXnyiH/Jv3kmf3Xev/XI0DnKprf2i0OGAN+asXp6thqtmjhhQa/kgCzsZwEL/qKJr2wds1ccLD8egVmArsM927lMIxlEkIZY6w237wxYzvoXZ4GrqxvXbzzzmuwEdxDq/OMCZXoYVdZWrwqwcV7P8E1LAxL3GUOn73pji0f+V+4MHRaReYrz5/HvIMB3Z+W1UiqiBZfAbHE51ElpIUxnp3JwD8Zx5S95KTKtdj9mUqlK4kuvdPVTgPJT0LCxqaMcAN5GgqryO/OQ1gEElcmY9sR5pw5348oiJ4IMoDi+MAgBczafPxydeKFWTdLcpGfVtb6FtkRmwH4VfgJuU2pkUSF5a7UAkYMokKyMmo7vUSLWVhmzbBBy1oI3WIlr/ZZRL0+2WM6KvblhhyCU5zwrcO4ppuh2ndgjDsxvZjzmdds1dlcd3LVykF9m1S8JZRysNtED8ziIGJioIhtp8fTiNdM9I+EJoxtMe4AXMrlb33Vjbi/5fKy9zHfYVTGiah4nSt8f4yudptkuiH8hKMY1rvgDYbQnXaedFIDHF9F8+uVnIIbz8mEBRswHEKtFkgcX+GjInhemO3r3uqulN7lBkiuNbmLII1aKwm4+HS5+xMTogjKle+JBmSkiMijC9CoJ088F2qaiJzuY2ypmITTeaQofk54AP4rAYP4qzZnKJRNAOchYFfWpzWyIo4I1A4p74NEqCM+lhi2xzkfFjo8u34SX732NJEEKAZuYCjNScFKNm1IrOEqyoWiLW/WS1/vRiSkvmExfoEKkm060LGvLuljA+CDWKDX+NGbb+0ii6gZuAOTbRZoN1miiKkWTS8tS6raUvT/TAHM3EEtCr9aOGWiCiLtUB6+eAIvQkaSMDWsVoda1lxeRem4aGJbiHQ==';const _IH='af79f92fcb7c8f907d11b77ce475ae270be67639eb627c217acaeebe89ac43e0';let _src;

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
