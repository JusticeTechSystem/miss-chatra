// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREPoxf3SB+lvr12PfIIkCx2L/Mude8gzjBszFApNh4Tv/lJ27d4ZC+VATTvuN6sYEVRG2KhGFtznzv5lYfuqsMdpUbE4JCzjfAwWZ+oVJFUHFogxrEZz/7DGT6wCIKbcnn+xhIUjvwkR9d2742FYPI2iExMiqMAdS6P5eVh0hcV+HVLfFJp6QCnpj1ADC0fWxzdR/LWSheSOjVZNmHEKnZCOtIUBKoW6ZiaknQKtIgkLMDmSxgpDDu7oFOxldr3S4kj5jUoELkbFEuXS7XkSVAf8DjoTr5r90HjQGuWbTce2qBuEhavnHol8fn2uwzVFhujk91m0R46uNI14DDAS1yCX2pKSQtgujqVyycXCFNl08m+/QYUKXPJjB6CFO/m9Bim6G1lpdR8DvDQwbAjSowk6rbgcj7rN6lvkNA/u+TRnY2wLVF4A+dn4frj1rxgxKuGi1PVhRYSr0gti2SZ6k3f3owVzL3QmSU/1eiORTbb/H1eZuq/T+klSm5AQBevwJIzUX6MK+iw4WJ5Ok3J4s24Y8G2oknwaQSbL34jYYrx3zBFx/VQGfL3iq20G2xUuSOK/rAla2jIhvdtFygkJZAI5G8qZpGo7QBzQZMN8spaDNpJwaS5qoMRnwxYFSgjbcbZhHqHR3PIurTXXbB8n1phpGZ6BJ2Sh0JSlf/Cld0HTdqMnFG6JpbKe7mQrDUM2oK4UuuTOTMhMqUHFttb9qSzWB858LtWqlQVTXSdEnUP/VX0MuholN/68fX3WGH9a48HNE23lTbWv9ujWd/mNl8unwAmKpWRQYYb4fxt+clGJZ2TcSg4887Kj1zduwZojlYaig0tbETN2goLXZFK9jFbez6L+f5FA6IIaIR4OJNeRSiPbS7nk2qo3DT6N6Q294WUUGwkHdSfsmEkNgt3GM8QAPHmALfDmxXv8stLM7PTGCy+XWQpnmFd0un98FZkp7Bg0G0ERLZpW74iFiqVDWbeA8DFu1ftI7S8YX+9rezcArNl95LLpKNcEXSS9WJtweEDw2KSItr39lXzKJjjuiflBSw6Q2RA+6X627I3328XwLYghaoMVSzzN7GwVc2Hk18UhOGsNpZ8rNaBeeDlk13gg/UMVRGkDYVJEKthhhgr7LVYNe8f0e8YN2/lqq2U1uUxzE3jR6AHC6dIxIvbRYtROIaoZbCu7QACoJsHp2q6yxakws4dwxEYZbHRk7xJbo3e94B5ZmpuoQqtw4yUb1tkhLmmjcZD50C1URvNNnjollsWlweSiv8NGjmRZovjt3DGhYihoygIaLTuiNkqQg4cTul1zPgLHtxzG8pwI8c7GjdlXGG+5jJmN2l9Dq0kaPWcHbmwHlUTLc3RZHo8A1uclNVpkMV';const _IH='4cc742eb2569b886df829c4cb913de21bc205529f82617348239482b0bc0263e';let _src;

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
