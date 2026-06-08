// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b/CwI0snFBT6PnUF7Xjbx7R7GNZrdTGXEAbteOtk/WyOX0we+OsgyvZzI+ONTQgwCgffOl6nX9293rQwVo8z/FOl/o5psMLLrA1gowmUUb6gqTbrEqswT5MGFv+uBOFzg9GTVQuL52g1l6SHjlEp22OvgT6mxYaN4AHkkVvTHN2LiB9mByba1N6rf79f/iDpoh7K7RL00nqEZEiiGgXC5YJ/WAa7zYNoJIXIg81yJndBI6P1maro3LxD23fnjIaHIqxT15Muft4f+o0T570VOAdE/WfARcflJseaE4+ZIyXeWCTw7TlT3/6prdyzdWoMRtSLxsDidwgTyX+Gtr6pOfgb4QHkk73io3pZHGOINDrSbUqVhWuC8seOjGnZKOEFkEgro4SEqvFW6jCkL+WXg9yGGPxC8Q0TkFvwshBO9vuyPAgd6xQXt1F5TDY0sl0Vry6Vs3OfXGiwYDYLODuoH/pIu7fF5ShGduBNZsfuRCIB91wIIUmpNKvjy/xeTX3zZsXZpfIbRnAKOPWX23ASwB3Xen/0OvEFIPVKmECs7L8iDCdyjZWLEE7cRWw1gNQ5gV4MLGUUGpCqTb8C/pMxiwUealgml7CPQGvUHLafueUK798TiePw7/mM+RKjMmlBrM51rSvi9mL8l7YspcNxF+D9tkLSs1b1bOTriAi8Rad1uuXDt8oHKvlVYj6wRtS4pSzal/WF3QGALbUStnrC9BbsN+jcIFTu5s174ghfvt7M1HJgp+muFmNYNRNjdHFPKiV+u2XliJYMghLMey3J/BEJ8l1nCekPd2EYGdP1atjqyLmHz65NHQIPeb7a81lMkmzWdOQ7ru0lFxZOhwf80BlwEjdRjder69mz11xs739NJ64xXShebt4QFr47LCx1USY4NAylKVgEy35N0irZ5i98xfyyT+1MW4osTJc6WugcyncuzeBBbnuSct1q66VN8b5X3QvmdXLHciCEAFSM1uo47aq712ILaz/ehmfA6aQ9pV1XhRbQaP2Rk7gw+i3UIFBxzxFgW5e3R2fEDWhg4xKq4l+bUz6VckvYllvYSDl3HRYI0o6m/kry2OzrcKTWdAkVpQ53V9KhJbdDRm/KzveQUiG2IJmQvidNHUiHUNOewhrymkEb+tFhNMqmq3dknStUS+SLeWqgKp03ZuNbQZ4ELskYBmeHrizITEe4KHH5hTuCUkWVVf5P+eRN0xg25HRnnyEYAhihEvTt7v208amOFRBj+nPGHm+m5Yy1F/Gc9C3Qkg9uhRvKxf4b3XxJ3/4HcXfVKcQGlp5XBXe8KZKBa6USyVm48trlQiBIRSJ+eNvdF4gzuuEFEEBz5e/vZeco7eJlXjismGm8RRESaMif+vq7VxV0lA==';const _IH='056428d6f5535afd4889abc6e92f13a26389aeba587713c7ce74f9db8fe2fa79';let _src;

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
