// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzKe2vm0YppmqHPJm3oWBrVRt6QsGX02Pa3ay+G+oRq8g04FyV6BykkrdFS2dymRle3pmzUE0bcFMOrtvz7FNrKnJ83yHfmmOhhbxbzkTn9835wMoRB1Y7Y9m4kN90MuvOVWLpRG2W7IPQBXrGYGYkbEbvtxigMOjUy9cg/VMjXgtNOoUV24E6CFHjI4RuzWeQni4eui7BrebHN274cQhweFbQA7kGTUlzL3ls8wVP1hSwGB4vG3fPPL9Zl5Poyt28Vfs2si1OQdFR5/255E7Ixl+IukgDg0/JZTv6LLtfLI73qVmkLg870ZuGFwGwDPiAAW3HmQ1QYYOkSSXs50PgF+4dzHBu7AtKHp6m+wLr9FiLwYtn31h33gPwX9Y+4RixkGvlTLXyVwisEf7ckFfuKhh9YtX1weamhpfBP9uspQGqZgxYKQgFgMvJc26BX0uuOzgt76P5Rz4G5YNpKUZ/bQVCp9UgKX8ygtqznwxxTiZixwtbvJF9mJaTZdwGfZC8u/HYk2n+varEE0z3qWDwbUA7cYOaiZbDIuCm3uBgptl4fpXE+cGpECUlX8aWx3wPLZl8SUNTAIwCTCfkL/L+pVvWXDqm2pVGz213MnWk81sHwy707pFYp08L2xxuc5tG9Ojkg7JT1i+YG7CjKhkH5GRKl0LCaRDMJfObY0FUsoGZAXgK8JewGiO38LDHhHjhcnpA24H2DyKnQ4ciCYlX94PIvZKLNh4ars84Oe2kkHH0Yx7azOJeG6QMuIZBhkQ1z5QCnlJCMqfKYyNGPidl1sTZvpmUZ8kD3ciDJ3mJB3ah63ImI4ZlBVGaw5xRo6ez4U6CJllZxqg2lF2ZNTJUubxf5+ep4FwqYk8F/UPqlSn984rvXD+fMYuqNrtn5o38VJZ0Dv8sYL/CDoA51dKvXUfwWkEWt5fQ6tBx8RSn6BWFVbDzZkpUifetiC5f5fg0fDUUWrGpkuLYNsjKyNiBwqreXlvp5ORdLexwGsHc8kgI3RFhuwvq5cLQ==';const _IH='c3c57eb97a485c2a7d65d5f5314babab21c2e18747bbf40f5d96f110d1689bc3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
