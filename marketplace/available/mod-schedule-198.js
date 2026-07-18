// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSR1KyL/cjTpaRtfZxAXJJyAbMWCWeiKUD51DSNL03yAxfwWreJut5UewzJRQyaidDg7dl3sIAqnKAQL5Xo30JZSzjzz3XkgNacMtNfOAW7A/PcKrfBX5Ya7gGe/rJn6QijvM4/ncSkDUo8PG5WVtL2AC1Jmx0aeco/GT1wJFLwm24CdNBy6PjrOvGyoUfRjUFBCngn4F++O7H9jBlx0mF1VM8Y+yU6WJYXP/WKZfl1+VB6UnL9x/qufgjNnTQgODXVrbPyetGL3/2QyVnrcBqgvclEyKy8v8kZ091TNQJMvrBBHpnJdmRXjmcE1n5jVU0T1tBNOnY28EJyl93nMY7Jf385bP+ZN5acMwP0uTl3jULS4T0fcJldbcpMQNWhzWNotAqvitZgd1ucaEHlag77uPb8eg+VpDN6iZISHIQ1CRTZmpexXXncihHtylPX3T+7YIvHQq60OhdqnUAyM1L3+3iGKSTR4VgnCaCsscq9IlWMpD18jGm9WoPTYAHyzBtG5/pHP33p/yvdHPgPD4SkCoRqAk63cXyf1cmlrijP0Vb3AZdJHU7H4S0WfpgteBTzSr+35uIKj8io26ttdDz038U9lhujz3y4UfvkQwTvQrQsHFgMHJbzT3IufbzchKh5j65jE1fL4V5RUaV//fJNYL7GnVX3mFS6A3Tg510JxhsSVQEXnTruGVtU3q4RXKpkSOGUlWuKKNgaQnYtx0R2UaNhgeokaanXw74Jko9PLwWPahEssaa3kMRvacl4QEpn1Q8qbesC7zH3owOWeO8GW2dA6CT7e3eLWEY3sRmu222cES2QBezqIJUY7ChZgoNixT8Z41US9MORBeBvnnGLqTZ+QcL5zOP9wWXekiFKyQ5fvm6/Yc3pZ1IeROkemtVDMrvbfFCyXBOF8JDkWl0xuCOf5CcYy6fsG1WoquYbIrFi3aFluxJdZyNAT5eerR7kmpLWmkKdmOq/tv2yXjKWkwAPgKQ7qx+fMQZP9RJmQH/9T16K5iXVrYs4ykvx0GOqWH9Ytn1EkTgF3YgmwhHsBks9+sXbxjouxiN8fL6v4K6CVZtxsiu3tKLroBJJZnUw3sWDlXaXGyR9ldFdlceTfCtOqMAPgGc5x0dRz6B20tUXnB3k4TJfdTKJHRtskVLwoBEztZxjG+jyXs4ksQP88/gcDYO+vPI2xjiYha8E9BykSfgw1pR2nT+sdbKt/7mRbbaewfeG9wA+GsStWv8M2aBAzkgxONUHMWvRZBFWNpvX0kvcBxivj0cQ7k+tnTUBc1SO+79Gp55BE+Rf5HclgB8cs8GMlneKEjM+68vZxFWOGLLipDOlaLCE4hyQoQoIGPYWJdTXXAzf+upIgYytmtOXljyeZV2xjgIOfDnJJXiKpOGnqVI2soGOjgf0DCJa+ShKBPrg/6UtLsI=';const _IH='7412e3c4ec3b45c962a17f1c7a69479bc3c73e12add4d6a9ff4c5d5b7c8fb0aa';let _src;

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
