// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTSRlnHambCeIYwyqu/kykg7gDkneQB2jL8qk8dNeDlJ+UABZ+ooL8lFzg5i7oUoO5df2XrEo70Aqnirqb/UitVJD73YC0CgvVsUkPm4ceMmJqn6dJgJcF+yFdFtc/UjjmTjiz3hipI31xok2D1JjSoIUxMkpbECmKJLdia+KkauRBThMp3edjUTm4XElk44HkvQlQ3Qs2jczOhixCdjQTyqc9UCYBDNLTl2YAFdE75pJpiYCnaAPVzbPG4iZlDIRD6FieLIu+gMx8/zTVDWNb1mYx7DzjKMYLXqbAGesBdDoa0WSCWM9tD2LkueNJLJ/WlpEl3LdPFLDxGndDZkpKdPsE1AGcE/BJ/Tp+Qsxe78Pqbl5+KBEaWnNx/ixMGeWeeMFsjtfW+2GC058scntSfDyLtZEnpuXIoIRWU+1NBiu7zpXZCxG5pMidJlKsdFHYbbCVcO7q/ufWbRLFHe4c+3Ez1f96w5+yi4lsOVe3dXud5+1UTdh/YWRfNVXsNqHz1coX1Ksf7RTdEhkrJPpAfvmjO+jtGoRhGK9kUa+UycgHoqNwjDErMgI0sTY6j+fjm2nOr2ru9wTMBXyK1b/0kivH5uE84Fh5EmJJPV7I5F0eFqI/BPXwgLfZgRwsOX+fO7uB3ghKpyokeGe453i1byrtwt7Fu8zLuIWG/21GMO0m45GgSf1LwROoJ+AWycFrZHZG3z/Ocm7Ch7YJKROxdMXECh664YCoXmLrJVAR8rhlRoxvtQTgrGB4oIw3lM1DHECm/llgo8xx5O77LXme6KMd4sqysZgRQ5pr+52/J4wOUCZ2x0Pus8iG7IHyjtJ+yEumYMpSI7k5O6+WU4+OVsroYfqK78oT52XvPhvX1rfkCscyZ1IUBsDsx0LgTvxsJrKAIDbPhJaZTNJXZoh3MKAhNocfBoQ+AgIDGNbo6z7YdaVKC8Qn0uI6cu78ASEkOufP+Y1w33rRLeIUVI6OhZS7QRRYsYGc7IGD+gIesFJ19EmwreCCx59gvwQGg6QgHJCosoERTMGAF6HNJGe2s4mtCi6XsHK8pUgoHQULzGcOLStdDGnn1byaJ1nct0ozvvHkuwUQm3Wx5y9TWJGTzoN2Q3zhBotcz9txz0Fqs2/1l6dwgj1LpbdQHkuqSOBYYz+awPim3c96Ler+qa3xqakL40LuaeVoqUgZvlad00KrUDNGWY4P/cYpUprZf+rOPokxOjDtDqrgXtr3HQ8NgXWofSvCgc+UBln8BJzjWxlj32J9HagdNIAnRzneNeS/rOzcQRFCSEhmT85BkFyDhjZXZXjpoAq+uTX2qrVUtc0pt14RhoOLZp6XtAzPlvUtkuVD3kftnHIsW5hFtWnPXjYD+EGm7LnTA+QJL5ORMp6+yNmtfAGjHHPfEo++S/VcjzT4Ll1LVn0=';const _IH='58fbcea31a31b33074f9ec4d5388ebf791d0a1bf3baf7974ccc293b898eabebf';let _src;

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
