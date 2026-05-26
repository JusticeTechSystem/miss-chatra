// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CcOSzoZwrEsfDLhl/vcVCGGWB6tc0JzcxcFE5qglP2PZTsFV2ymVdYB2rViAPUPneAXDPJjTh5F4JN5VBarw4+9ff0NNkqLpva6o0YArFFYrS8PTZuARdr+1/IpO2RyEjCtxoQ97vqw894twk72XHOhw83Ye4swlb39z4f3MGZwjNyr8Ray5jnp98KKiBelwEEU7lcaB5Ttdi02iUciBe5fNhF6xGbVT1wjmuhJcY2oDyofAgcLLqeqN5jdZIAjHPbvNwIIrRPPSL/du2F/nGcZZhTKLm4XombvxqbOOigBb9clcXgMinczF/mhG7cEqRGANz+WdHtHqLpuCPotfG9zW61yffVjjVgxYu1cWW+kpp3Nb3712GbOs2zOg4xWpMcMww8qX2gdLLHuGKEzrc+0xV8l57z0sIUZJtwTx6bfBHMyJ5iXX2/Sr6/8uNCJQodb/mHASKV2zaTjU6b4BI8dt/weas2ZsZvkAixJ0qJvvrYvDMDTCktiumF3AuN58JmmJouKKODwbc6ocTgsWxDcA8qJT2Jk/ff0O7pE7KO6LE6IZuWzSKa1+iU1ulqFr87rogkr8g1SzJ4osC8lPFFZgaHWhvsNN1LcK2wk6YTkYvlbwVxEeexg9mHcVpNQmwXABXVLnesBhZESZkGKXNnC9L2USeisvqAYlA+rnnyfUywuSFQBdPnhFpx7yVf96Ocd0UyrxTcfx+dNYt6FxGmPRKqteiYPoPRP1vvS/+Nz782gKvF4=';const _IH='a816c346480ee17f4ff638e4c786c86554080f5633325f855d96cd51069eeddb';let _src;

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
