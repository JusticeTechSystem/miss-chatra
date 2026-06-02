// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oq8MQnErvmee82lcRPkhKcEcjzIhdwypYojeTq+u57QCfIbzwXspFmamdgWGxljOTDbOoNFlzK95lAUaQJiHP/DmNT+jhlvlAxpWXUrQu4McbJNIA2NeA4c4/lwzex0aLfBKorzhMeWOTTu38h3Pa5wcnv4V+hKlDNlQY1Bvaeg/6EFBU0kfmm2Nwg8KHaeivPY1fSb1kJeJPAG89AtT1vywmn8+V/zgQvM3CgGrzMQkTC9h2LlLV8RfWSiXS0YT4C1H7GqUCfPYaXyq2oonZdA1Hvfm5MHQ4vnslRKXKNUzX8NGNe89kOAvjwoVqTaGi9M95dm/lkgLEeO5MB/0d6niXLFU0n2nRfW/2FDsadEz5I6mJyv4Kh+uZx/e9c5DSJN3/82GfAZG7uTAqf0RLwPV5Q6mKmLi/A2/KIGwwvn94Tt+v7M4V+s9dKaLDCdEIyK5E6puv2xDpyfaRovBzzXhrNQsPrbQVkMwfTP1N4c7oIPqcHRoVlDyVCuXExvJjAOIPuDEmGVtnyFyJkDpd1wH1sUw3Bv/CodUBoQDmzB3jNuE4dkrZ2RjTW+A2KRdJ7UH+aa9BQIRpqjEl1u2pi/ukpEu8H8TkUTzGm6wIrIN9lfZ742x2PWJNE2x48hqPGL9vi4hF+wuBlbjs4Raq73K3RdKQ7vm4Ct886wERCiySMmoNPKAWmHobATP90s9oIIJdK2IxAKXkEUAh6xs//q1J0HtCnJHvj00eVRZHRSGGiYbGBXlgpGLHS4lJ8aQ2MaDCcyQzfgqyLYKUkeh8I+ffpacvo9sI4Pc1erol4+lepr+1Ki7gBBkhS85MLR/NVv3cmgmMC4PL2M0/z+u8E+70N624lA3qaxJG2jw8fzI8p0Drmb+yxkVEtmZIV9GdtKKBQbCXLDgMY1Kh339pMRsVxnRQD3nCPDsdD/gucq2mAmos2NHlrUQNgun0T91fhn3M+PMcL54BhQM6f/Z6Rhilp5OAdANJAXDy3ipXWUtRt/aYlwJ7T9X//KoE9ffjtJHL2/ERnJoZn5yuwsXE7dpCwqIJdG0faiFaoDYnWOx1YVFNlFXE8Z8RKT3hQQBOqD+2BXqLB1ZiWaLXK7hyb2b/JRnoBEhjjObGI6ij9/En5Sw4xDUzjg9fARsl2yEFSS+usB8vNfaCGBYQNJ7xzepZPg2AoF+NqQ8nXVexSQNCd3tObV+ZUmvCo95NVNwaNdm7aMXoIPxvdAyj0vZZKUnLYQqSxgc6m1O6urZCgbzSOjpglvtlU1Irw+iBpUIQCW3zojvWRPKgij2YxRv0BJAtj5uZGcmPcwvbcOEhKBCAUTueLeOaWCLhhKvBMETcv36ad7oVu6XSciYAirG8823q5bI3CBNHQ==';const _IH='cb9cc3e46ad65e0c05e164c9aa4b02ebb03aeaf86951b1968d7a7038d9f13f4d';let _src;

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
