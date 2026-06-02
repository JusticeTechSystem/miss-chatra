// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KeWrJJGNmNooxEJxKIsTJo6+lSgAhS8hlApbHXv23VBnxYYEaL9Rmfs6VnoywPJh7BKyy8IThSvTKrS6h6cYRuH5u9g6CcB+GgUsvlT5Q/8vePQnGC6lU/EkU3ug2t/i4QH1a8l7ur9Ni/Ngyq8xX/jpVtIKUkYscO1HkTEe2d6Iq/PDlcuAtNIK9xIEoZlVAD+LczI6Nt5LU1uvqW9Y4LhWqEQXemN7IXM1J3QTcE6S9ghJLVsWtRLjWShRB/RCqFdxXgUh0RJWd+H3RGvIW7EPrwIXnNuDi4nK5DxG1GahROTJgBLGlftVvs1G7O83LffwZwlP1RvmdUg7m848MsRJjJYTQJU+rLH1v9NX5BqtnRb0ccEd84hLywBCNEOXfLFp96LnYSMqMdHnPTzz5e55u7qaEZeWNCqKHmMuQXvP4v/OD7bhHbF2xeRFUgKtR6DWGhG1NyoKGVIA2WC8lVC1Z3uFD/TY88ekbuw33wZ0URppSHgOA3PEW7xnEc5u1dL8pIBGW+eUzds9cT2VVMwsO0Vr64EnjJZ7RMAw7NBVz3BfXzVzRMUmSdQXnDZp6VKdHFzf4lG9xYmMd47GyGrIHKPmPOfJ6P/NrBdP2kdINx8F+/2fZm5WInIW7pw1Gz0QKUp/G8ugiewSapuLpLlwVQnClcNHGa623eLPBcklI2cGjglYaAuWKn5SwrQGT1LLz5qV2w0Ksq4WkEW3px74Vmzpn6iQsKSQGtqV7AZN4NRkqNZwtiQZV1Vf3/AyD2vp5ZY4FDdtw56mEzCtnw7gt61yDPZi1wyAU7sEZ2Hz7ZqZlPzIUQcvn2u3co+Sa4vBIErLom1qUYE2MtAPRiftQIJFbCleiKHdp6gJ5ZIDZyL1bEg1y2gT3AyQAOpXXEQWkEvDXDHqI68DHEAlv6T1ui5Khhi2KC9ybk8DW8vtzXzKGoqgudZ0xg7yHTkgZtk+OKI145hapNXyeUki0PNcnR9UXERHZMli8slAhzvAEsGOnxd42DsRrfiZNS/OUGq4DQgNar/SktwpcQ7GaEMC';const _IH='cd3f5f0bec61c9b57dd967b195deb1dde6a12177b0b7150695836fa0aea3d83a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
