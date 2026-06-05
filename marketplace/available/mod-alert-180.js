// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ybdZHPLkZHGTByGAjpbauO3aL5vrf1aoQki8r7EYG813OhOYzO7WAyr6d53Sp+0S651lo9Qs4yIrioE1tLKZAGtNteqgQGV0GNlA6F88U7OlrtVSeFf68hj9xvXJXaYOYDoIVkAILaRfEO+IPN7U324HqltHpHR+EhU+9+izTnD/wPEqCcxBw9X+ajG+xZSUkS3ISPeuiTPKCFHWXgteco6O6L7t9EKfjR/aA3g5vQ1zvhHslHLM8xSj5fBByRdsWDEHnJByQqpCdDnQjJEi8sHkmoHzpD9hTfV3ALeQJo9gw2nXmOuwvKjEhghYba41CYhLrw/l/lv/Eexrsd/x/GqnGuStCri0hw0YDeiYA/BaLsxh25Ki1OshCMSvlP51kgvGqmSWZyL7lFHrE101/ZF+UsXQ2ri4ylFqF56yIXt8NLUizylsg9tNpD4MdwEjh44aXgfuE2od/gZyM1rd20rabsZx6tZy8flYmP9ZlraOy6G+vfzG7TmUmbSJvxu+13pwku5LzZZCLxHjfSqkzqTHzivDQpvDoL6KhK1OfcmxsGTCpzrSyQ9D+u+fwysJr2H5+FYNzkElac3jEnQ583c1t12YoL1X7Z+iM92/551JSbDthkBUquaD+MRtu0sjS9tdv86v9xWO7dsW8uiQwDP80tb1l9R2eKyBbs6zneNciHXIG0njMfjqExB6onEXQFHFPQa4bZA1TqYa44KqUn6fPaYeI+gHHNbGXSBK/20Ee9mHd+975uTeBM6FJ7z9HSHrdqRnBW4bUTzkPbrYiRd6ObXzpObHhnXP9OPEMGhg+pW6iAmRIk0Xz0MiT4KLNbXXTEaglzydxIszJkQQbfa2xVMKiY7V3jN2h2mwGW1XkObEcHQ3FtJg1cR8cpT5KqhRj/QmxuEFUX2gcmrRmRHEHq1XYFLGHdEVlBVT056K7agaPBDbgvIehwjRN23OA7AJXOLb0zyWQffRCbdnCmDZZtApk1Q2GfxiYFKoslX51NV4ifWmHVqO/mo/DZ6yXcsjXhOMF/fZ48wvLL4urWplnsrSmR/0l7bUHz6OZDxyVFmzWQaNWefT9bgmS6Klq97aF5yKm7owUJPci4ZLIiOsatuwX3OSw4TUKmAU6SLeZHGs02orVAZGb8IUUfZ4zRfJkyDm63e0GdllH+P9bCWV9gwY/b6NqqWhtdfKxdulcHODW6QtueTSkOD0PtKR6JZvG6A2G7ZTA9bSghDDj54eM+6mc9CMQxxHhRZt/hGWCTIlVZ9IlSheJh5CqXxEUYFGasDBGVQNM1+7L2HmjqnCqHPwh+HD93KMVqxlmXUwROrbyPVZTjDn93W6mP+k6A2LBRjxXsfrAsXQ2bkmpXF+7JXXNCpfCLPreceg';const _IH='0e1fd77f3d92cfcfee93d99baa9cc6f6f92382d58b35288b737729fadc6b5085';let _src;

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
