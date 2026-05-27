// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HGLyLfGqb9mjNfSSduQXkVjDEtJ+gEkV7sO5PD1knS8mXgmqu3cJPGiUA+EQ8vHg8A2hRuOKmwjq7Ytrs2mjxxDsm49dK+tLJtJEEZkWMYvMzvVVr2OMVrlZhOHTvvUMhvh1BCch6dfXb/8P3zslWdqhXto7w3d9yhUwFVkCnUygc3ng5lphNs+viUDBEpqA1/gr0fMG+PcU/+McYghbht5Ti/bXipYeZmvw+AzZPqP6lmGwX4vL6IVbqfGYbWDBairjU1wHbLvf4JNLYH2Nb4RVWKumu7tgJSMmV43/VxO2vM3goXQHrachr/wd+zofMROTyxeya+WoUx5IM1R+oVAeaQFzWqdXK/+SQOnHY8wzPvwOPQyzpGQZRSoEarW5eBvhwJB95+OQ581fsSCp5mGQ0rZyokP0AHW20Mcj2PAvkKTJiR4FQ/rwhaI/p/lfsvU325O5bE+lMV+eY5Jf9DwdOD/AizRelIe6JjzyX/nr4fzelNvQcM62wYXJ/Ubwdp5xvUX96H9KQfzftPQgGpKwDi298Omm0cSQIxupJS8QgEMyPCEAy4aCdqv1P4lOogGzyTNH4JKkilaqo0a3f7xvlVSzSAE5tMqVRjeNXBJL6A1ai/4oR1UU9jj9IkCuBe+s4yvHijojKgAjcf9biWQa9J5UNKpO6kSz0oNyzq4wekCpckZvTxF25rHyE27V4wB1hkJjAPi9/kJI7gv5p9Bo/ie9QC0ftaP8g6gIvw==';const _IH='ebb1eeec45685248e60045ba21708e4b393d14666fad9e4c6e29d4521835800a';let _src;

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
