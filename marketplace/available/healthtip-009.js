// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KBW+X4tor+BOU5ogiVWa3GAy2lUB+6xIo4rzWDI+M51y6lPTv+TkW3kAN/Sp50EtAuRDMp7Cpb2k/yLvKWUZm+BzLYdsHDVJ4M1oJItnas1tdwYHCWEWa5pihBk9FpJFnp61pyx1MmviDveg1Ge9OOYaRxFBLoo+7MwxT6xUZ6R2hWfyE2obEUl1PukGvGJ0J0YC8a33rLYGNG3d31GZRN9DcCK8Ad+xzhVxgb6+uxCecuO8i0Xr5/WlII3+pqdxSPw/e+ro4k4ye9pkubwrZ97BHU6zpuI2zN9UInWQIlBhvahBKadHABOk1Bdzm6qzxweluzOGpnbKra3ekb5DVwmeNw5h5CKDOwUYlYAGZQHCQx4Z1yK1sjbVvSBklTiElftDeQ19gXOTqbYO84olPa4wsNU6dYZuQIqlKKPNwdm2nFW1yv5xqWR8zKWbg2hPsuDYTywfaTs8llYIf+HJkxipJInENH0FL8BkDPl29ooIRZXL7tlxrn9Cs9cM8blBKVaV1+zy6pfxsr40nrrHPpQYePZJRZXr1qsJJVpLLdN7+KUCGlIukVzxDdKOmH4u71x1x4VX80Kw+ugI9UVX2G6RSEG+BJV1s5jvb7vUgNV0EuyiM3FuJ6s1+nuNBHmZXsQTtl+vfgB4T2mK4ZBI/YLR+yDVFAeU4PoOn9Oouesxfa2TO1AOIwq80+dOsORuSZBzqroSlF88yJdimvUTzo+NKJTXHoFXL0LLKwanBrcNyGp54exrBEzt14EVZtvK0l3Br0r9KvAzu2Cu4Oqpb+1CJb72FTdeLgTRzcmZr3lHkY2Mcm44sdZdvyr/GHszlvXH87+nUXkba63Cb2rUbQUk5GzPWKw1xkmXThZAnB2lw9j0qChN5JwJP/kKXSjtpFHjWjKdAIRTlhFR5dVzRmVs+C3/ka2+s5bKUhQfDBO44DoO4iCYOQ==';const _IH='d46b2cd573a122bd26cfb67e1fcfdaa43745b6569cee0e45cf996ef25f9c517b';let _src;

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
