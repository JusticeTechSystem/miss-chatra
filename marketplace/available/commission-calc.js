// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QjbUv+do3kccBSr9da5J4wJi7UJ9RkMeRivh17tdilMeAR3fiXeNM9+Yayut9v+z5e6Gmhupc8UIzA+i5K652ZlOd6uNQejtgUQwUMzrtYU0WR7Pl1w0hAXmoDrOwDdH9G52qlWCqwirEgyMxX7wrawj3x88+PD26bSeGgpKkP3mVJtorcRUR6Tj6oi10UfWJMfNYLBLEqUuAfm2wrbTg6QXvALtMV1QSasR2LhGTUFfGc6jl3KrM9MxoaQIQ4oPeVkyhTOkd9tkefoneRJR3eiLb/g8z5SjhazjaR8rAYtS7HIqXU+FNzfPLn5x9RN78DGJwF+rarNRZyaekvy3VJvFNnUZTgPTm0rzz3FnVmH1wILlRKKeLJSkLvkZMx4MPewqNlV/baR0Q5+oPl5rqiLVv3q0Wj+36jdihiIsVOUyEwfwMIi9DG3jJWWbg7mZOOcDeXsDwugXnAOh6DDK1PAk3b8UYgGG4mrI6Ykek5VFF846Nw4+WwbXi+PV8AYsWMQGil9rnRAyC+EJhumbTR+EkXdOuhJOOrRSzvR9IAF59u8ug8TTggdzdpkdH/Igs96DvemktvNzbfCEpH4XiJSco8E5+lj1xDQ=';const _IH='3f7a5a2981d3461f19a7b71e768322ded03df1f9098184b220aa80343fd7641c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
