// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOfBF3eiipxQ9Y8SdeSLEVgLfUBsFBmIJSE9RQjywElWw3HYbLmOZuysu5+yOaZIGM+I8MfpAdW6Ihb/9nSeeSXVXTQuloo7N2tzisNNOqSn8LWu+B/K9wanjLQAjqhoarhESHzvwu6sg/QB41oCZ1bFeyklwPuOJFGGER75M3KqqDGzyQuddJHvVfdIsetIS0r7dnrYvExhYuwYXOGToXUmkhotuvjFPLEJdqeuGzA7isAGLynLaCtClBLQy3kmgXoD6e2jqT7yZ3ESpVJTqmwQnWzSsU+KC/pxG6mT7hKVJ2UEkVkwkICdYkNtPw6dqh4jc1jXOjNWpn/UGdT8EAfuLWz3bUoChfWzVElA0csdnigjme6F7aWDg3CD16pHS1mV/Gc9U+XGG2fonLjnB6dR2cjNGMymycil7rfqhx3mbw0YkmeygKkz2gT19QBL4h7+tqUwFAVDD7N1atBwS9jFKLXzlsBu3lK5tpxqcejRYkev5pNbQhlhedkLuBDp5nsGlTa/eJihRzzKigxf1GSwRGgq4RxzYUfRy2gFHPR4fpeDkcVY5yT3B7UV5oLPYzaeyQYbFMJwOIr05NxDIifhGGTu4maP+9ZuLb9gCAsDKG+cARZZnyEEl52b+JuADG+3lOM8zv6ueDbvfnbDxDCzMkB7DKzDjd1bbAsZ0P1m/3J4AREFeSDbWx9U6gPZdhaWsrI37Yi6GHt9Il3j3s34njkhsghR6kJCbPkEAsGOM+dwwqQApzK3toI3Uw0Jl9h4xtSZ+nOD6yfKI+50RaoO09yOEz/Voxf3KJZ3I81RbFaGpCL3krnBjeGCT2wm6vl9lLIVJ31At8WU++jY8hPkukv+00bHA1z2ZKBP6NKP8LWfwFIEKtfuileWpGBV1hAY10vDyCQ52cKbH1JYtK7kfqSvfdpAu8arnoC1bPAW44+7t4rjMq9F/U/pt5XDs/2HqnmMucAsxt5e9iaVzsJ00VpRjq5rAilMlDQX1rSojQ2UonmwOfMr3aTs2JH2wuOlrSheho8YOoT8CKCX8gMQ72/IfLYRWX8/uwrSVABw/RMtHF67QBN0UfjwjlROspbNaCvj0f7RbOXKyOZwo0NcMQQJgzF/+4kF7Ic4SUQ1Rsfo/L9LeEhnoKmpDqdmDFVPEF2hWc1mKWng+Rm1VzIwKvRfyWAeHx4vChF9IzKyur4wxL2zAlt/wdP/LHZVccLuiZdH/gd61vt17YFcQCU/eZi0GIT0h3DG+EtfKIiCwrx1AvVWFOgN4ESbypVOXDtpEBJ3ct3Edj4xBLFqT1oTm4x8tOUtrXyo28VkeLR690gAOfKznh9eAaKTWFWmIFWxuXkZlxT2ndTg2j3P9u2cgJfH1aT+rqpaKcPZXIoneXFNj2qFrI';const _IH='18dce76ba27a7e99c1edca43974e9ea4618bed9c267c71a4dba48b1573fbeaa4';let _src;

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
