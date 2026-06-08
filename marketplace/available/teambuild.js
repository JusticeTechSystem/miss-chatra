// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='raMVS3uP0b+9p3+0PPYpnpCCSlCdRy3+JY/N8ffNnUQKZSOB2mqJicYMNeBMDnMRxnsgYQN6F2UJjYXPdePJOr+eGzGWh/FUoff/EOhpgQIY552fxoEnTpiz0jgUAIbLL7YlkE0FDKBDHfQezbJyH6OCU8HCbB9OoyrLuXP8uYv1ILFGgzSEydSilHUq9Q39Z+9pnztjUHMopuYAkHKUKmE/+YpL+0UtYR/ZR3+fylEU7HjzMJYJo+GZslV9sidjYTUafHRskQSGiHK3ZFPmk1VLU6azCk2855cHRA2Izw0ZBMwLEKRXvE/XqvyzCAXcwBT5fJWXzYb0v5mUJ7F8SowjGz+1TXqX90FBY++/1BWmJSJ6jsdqsrHJWcnkNM0fGqkYBblx/Vv8mq9BiZo4uBObrbV1qfijPqenEfRPg0sOwSI1NdHIireuEsDoGP3R6WgsVvgTmGrsQCQvCROumW9oOJ0tHfIKECxwygB6ap3SM18PvZ6F6lVfETUQiDBJ9O6pnD6o9LZJ10a9vDeALGgB6iLV7MdMRGfNKo1/AIDwFaHxJDV3ioOxm8l/LBvT+meAxm3b5eh4ZAOG9GfKMH93CngHe/Q79Ba3KNMoXiyKrgX0qQ2/Q1boAvsCGcTbCNN26rK/LyaAH95W7CICP8W03HSsj/o665BgyXsjYPWtn4EFn84sNZrG4FlsXCDQLBlGZAS7SNd0OoDmngpL/8YThrqBETndOHeD3ghz9Mr+T8aFLKOtmKVQUh6oEDQjLrWAWz0VcnqYzGQNoem3PvrOMHVZCLyikYk/vY7unaV/Hly2jmaqBL0l3HYwVFWiTui5kDPoqxoJo4y55RbYohhcCY36e9pQwVP6Il6YsWipcqBUfXj/uTuuICF4tbt9wNTblENZS4AU90lJyJvN2+gTqGlFmuKW9VVHOdK79/vOYZYMlCuBR+ENNj0QG2kPYEzDC6JCUH8BO4NNWIpLvgWAQxbYgtEl67UX4Ya2ZIFED5xvoD9XMB+SnnUtue0IS99Z3ZBQRDFYKUofKT2TlQOfE+UDP7jfy6L3D1BGj3/n5fYQgriFvVbaGhxMg4gjFzqJLtR2kUcoZy4se1A4GPSY1hYRyuKQjafMP2+U2EkCyh2c8uoi4wflfR6bXZntfg4jttAc6WseION+W8v0nR5c4UC5qhYAFWjVKIKPP4rQMfuaJHn3hzVFtefKFKnPFFBaHOz2uQ==';const _IH='c497af6fbf9d387d99d30f1c35b8a0962a97e255f1c1d4d0477be59048972512';let _src;

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
