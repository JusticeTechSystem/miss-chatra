// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQSWjtv78EfTxwPCbIRm+vpswaD9EB//nPYlCQteW2YUuwOpsoETeJVu+3l6zW9JfH02bkpQFKBeb9sM/l4KTnOeOdMpelQpEUIykUSEOVuG0TYWo/qon+jmPKjH91tlMAFw/azSu0N2nxIYlQgwJ0uBFFbi4KnRWs7ZAgP0+k2/23FFIWcH6o1wEREqXLwoGiTUaBFeYKYDN3V3EGyk3wLbrnaSLjhmI2/n3ka+QwOEITvOTNXPZ5mkiaS4rCvGAS4qUl5elJyGEK/IJd+JOasP+Lld6RHcCUCLrjYD9K2+2u6guSd5N9wfUdKbd7Hs7+OS34Jg+N69Fp79uKZ2AgkkiLwu3f03PmnGI9VJxyhdzSnFDYxpxQ23kW7APKJKeuFBaQg0NLTBCL3S+IFHACuZV/AmdzmvwnCJ/T2ByubF4f3Fd97CIhN3WhCFgJvYaQjkeCRwC+ILVrlpdVtrpJSJLSDED6TZmu20cQ4StDlae1VSZ1W4EJgt1Cwgegf0Yh7xKajrpyxMWid43e1mMCDQvWztxI7zq2z/KARu+b8g5Y0ShAad2O2nzbJeAg4jsJKPnqd0u4AIM+F9BYTXlqzX+EvFe5Fbn4r28jYuX5r9HbjgGxX3SGg0VUlTwdLAIRVi0nwFiHs/O2G6HroJ1705VzPVgugsDqCw65UHIl/LBzXUpDr4y9C9oCPhTKss4TNwqT5Il/BLv+lJTfHveleu5hGScTBcM8WOdqU5mqfeoZ1lSnjQMfvypystUiHEVn42NJZqyxqmBqInymK3YDc/wIxCclpfhvHM2M3mfCXkv1V+E9IIZq8OphxQ5NQPhS5pK5zLlp/5TK/hb/5PalQYT0hMZw6Om2bZlqnw2xob8crCqOuBrpZivwdPVT0ry4wsxQEcjPugfyXoSFo0/TsLVIlfEft33v/mqKGBhSmiSiX9w4eCrmuRH1GTTl5NGDLr5Ft6qDPjJeAXxBsQ6M3hbaAVmTU9I+bczuG7qfOyngr0PEgwDaxUql0VYyOFAu4/vH8U3MDNVZtj4H2cfHS5TYhOSIzLjOh5asgSi9yMkOESJ3BvO72EUwAhGxkYChk0BSywC5o4OBJoeiig1R1Wgtvra2Gq+NJoyL4KVeINxt9JJVYNI/XfsGgpaOPv+vjxA8Ml9HHPyQ5YR9hkGOSnFBfg217MeGh/ixo2fvie6n22TpzyhtSbbbhBjyEYqKoyoXaMAffIvDZQDSb44ghVz1fSW7O52SxDMrg1hRXqaDjTqcqvw3U1PcalJhWHbPCdgVOjzRgnCgFIM9OidsZVQnbYCCCGON6qMkkDyjctcp1H+mp/hdaf3nsAYAN3fMhcwBHuMB1vPLaJ9BDd7pj2+LKiaiDdZX3Ezu3Ob6oaCV7PXaVNQL';const _IH='478cbe4b4ba82da596b61177d121698412b5e89194503c051fdd364d5319945d';let _src;

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
