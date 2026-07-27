// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLmzzZskXtWeRLDkWBytA3lrbsxeshQQCMnTkSPpS+fWgZSYUB7m1dyY2scRzGaZimxVaAAZk8iBas3i9VpEBfqHjyiqhjCxFKaHRI1MlSWX4VVMWzd7Xj0GtNhG+IDDPynjGu871iRdwRMNxjJf+jpy+Jd0I3E9aN9z3rHZDKm2EnnmKjdGDb3fMl3brNfZbGMH9fzBY6wkFz113+AvvMoKR9S3ngHyvJNoGuzyTG6XY95xD1bEpaTk9c7MuEz3E8pDVcI9VMOCiOGsaf7zDDjEvSc7lwC9XvN6Ari3oKEgouE5YANDtykf65E7POT8Aa10OrbNcHpaOCIzumJWlmGubSV354j3j/M5c5Cvu866eUyLqExKEwlK+LTA+nh8Dh4CEcdxAgmPIt5X+3p2ivyxYJaZDayoF3KozQOqRGElZWU3FbIybgp6AyusD9vbfKJBdWM8FKYZn99RzN61xNWWK4A9Tjad6GVD+t679edX4m9j8muV+ISpDwRaNWEup29VEKIqd2S3AxYAkXULfGUA4BJrI6oLENPh4DZcE5kmDu0OOO0JEisipenPOsYECtsGhQIuMXUVUDpMBW9IRYSY8bCQKJrUmFj89E4d7RYJL3rDAq6d8Hm2KuAC2+w2Q/O0mcl4oxAhoe6JvbN9JPatbCtGC0PFFdtoEtsnz5PpMVnyKQoK/j1yNwa13JiNiTe47hCXKhbbsp81vJWGHFrctxnDwGKrnkwawmqDHqGdZuhWSJtdVZUHh6U5A3lbuglxkS5izUeaeZc7fDEz/P31rOAvXeGyoZ4dlDC2S02jXioxcWbNEIAyNep6QeCJTQPw+5zdB7qhmEuHcZsWmr/EzSiLlWvjJJehAfOEMeulbWw96VVcPJWv257WAHR3EF/qKCcKTX1AoFtM6SfFHv/M5Ir3AbrIR17rVZoGNREQXcGy3xpekn1b7BVQU+L+w7COMWxHJTKlqUvpz5ATddVPvVsnIHOPg6mAcJgzuRRz7CTdDKhB+R++i6DN+/R6tWzGSl/9jshConX4VSL4GMq8rFpyS3QsYopjlIRtbg9cFzu2LmjipKwhFJpKMu6vVW/V4NBop84PgN7zdZKYqqgSD4c5IFjMnzmjqoc8ZzYVakWaabLFYBMHcpB+kM6DkTVgRjmjeD0xje8Xf/IE9AcK4aVUf9uM+UFEDMZA0IgTMZWr+12lYIwPVl8OG5qRmedPP8NJjZTKS2IH7GQX85ZQpGNmls6Bdy1cCS3fdej7j2VcV3oYxSSWOeYo0+yvGFNXIko79mg0LtDQrxiZ3XlimD3GTCkQXxXAJlOdi2Zj3xwS/A8xfrkQzbB4sKSV4/G8WIMgPM+bESVU1+QhFJZrRIWp0Im6qD';const _IH='c0241bed11a210779e5a57719b24aa73010fd4850ac6aba2d507ef197e7e40d6';let _src;

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
