// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzNMCs41Aaz6IFOIXa77qEygTxcQDA26dWYinzOx92uRdFRi/Yp+e4LSy98lSeLMa8WgLdQIbLJ+nLXu+Y8ltclcnRZiQZ/ZPhaCDm3eF3BK8zOW/fRMEsrqxSca1NFaWVibBTlnY5SsbS0WzgUOkJRTcsNLpAZZ4sLHRkJZBGLrJBIzTIzk33im3DBlTPf7mL3n8c7Hi0cEkbqABpdFkeFHhudAZhfQzS1Tt0fpJRKShiLSHVLXuRYGvOTE+Di1g/CalEy3OlkK1UJwHGzA5MIDLK4P4tsriSx4Lm99+hTXAgrIqZN1lFLDqQUDMXLiqvc8jNUrNEgTk1r38IfvUijNY/tFwqk5BQ8MwzMePUswGxmNR2Gk7MmJKJ3xRVJGHzgVJUpx10I5VNvhdJo2w/KnNwcac7UUm8lIpcJt/isPiclUtI1onf04Tkez2c9LrL86/xp3vJOv+q9vlQBpD74hWw2azlqXhBdGeRYglM1uXBrcWyj7clY4gSaJZ3jsJVyrGppCWl6zKbaPji+sRdzgD3+PWFEbH88u7aCySCqosIjiuSLMI7A0Btj3tHf8Fgd9/i+yZxCYp37A01RpmP2irVe80cO32yYZomkgbG9Cme3HnGFZ3YR6JV3YDeOHSqLLhBqxAXUZ2A9TGfkGfs4cCiD4mtXWGYICerEgOHjEko4aATCxwa/sW1OcGfkrkx8ALydABBFG+nnXO/lxs8q8l9B40cDoe18lbALqyXxNDPbS';const _IH='dd9740654d0353ccdf828f930eefc69a232115a9bb0285cd41e3620c22511e57';let _src;

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
