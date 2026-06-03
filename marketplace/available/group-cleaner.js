// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YRb6JJv2p8ra4w7svWGhAO/dbqU4hlMIaVb0vT539w6D9NvSRe+Ylvm5XrvDabG6Ids2iKJOjRc1HjoJgrGt2XvajgkhE5lVk/8xMhbmLci5OumQZsAqypvZf1L/i7fq2nyiUEAcuomFkzw7HMjENYgDD9zQ/ojFBNxGC6WwZrO7ubP87U3qXKq+JvLHE8QNR1oheKQ2C26Xh4xmCq72znntgnQ/ZlxsiFY2744E3lQ2/0UCHktWH8i2u1bGsJ13/8EePPPhqXVaddLjwPHh772ixF/soAVtQ/oaNPl5BtlO33sI4F6+3aPku8F6vNA9jtwr7nyUpY78XKCA5NKtxcWoW2Z69SnzhMC1ljrxsO1NCqoZWAg7XJLCLUQa6uxBSloaL+1rPCSzYUBvezrK8dR1o2ymriow5EbQJhJlLdQF9c9M99wV2APstXFx6B8Qym8UlcyBUmnT5Hnn8CZuGUXNQ3/BipL8mfJ9SAdVx5hQVoPPLHFAse6NSHGgrVW/mDPc8n6OP+YjU7TzPDtLsZX8vgwDBGw1q1iqcWgdi1/AYPU08FzlG0yIBB41O28k+Hft0O+cY8R+3m3oyvFvEwqEs17apB7+YKnNSG9pb9DNvd6PwZ6AIpV8652OWvWhl2yuP7M3povahmSc3xzFZya3KKY7YTrn02BjVRPDCyIa4urJzq6rFQUNgKAJQFa2UU4vZuoHFJsTvB0Bwyz+K3Dl2ADTeqmi1bf/bC/ddNb1AuaraQ/c8KWwJcFANYLijMS+xjJCHN4k4H2JEfxRPbfwvC1425v+xeUb//N0tdtE/GZ+btfHjO1dp0fj7uRYJs/jWYP08BWmtPXo1EM+uIgTxRX9tE0DYj1lN9ws5s4uqrQTrsna7osXox0xgwkzxEEyu6AeEzz7F/UFG6NxlUKtWO/pY67aYgDOm2hDBpnE5iUCedckCV5THUMII5kKuLxILTIyQIG1wlyHGrKQTWs0fe1vruEfOGVSxSjLt0bKf+SNLLgcGICfAvvyfYtE63eN52UXz6J3ogWzJCT2s7GNpgV+GGKpgBwzQWCoGCBsIUircKNKUP7fZb/qEA2j0B4Q4Idp6z4IS1fv2Qhoc+brm+zEgULWuvS2CvNh1OL6azMgO43tY8A5DS3pidIeWJKdW554MIPzYro2s7ZPOxjPm5LYJqxqCMuD+gEdFEoJRwqPqFgNfGj1FX4vQ2EAiskj5nPYQlsdAU/55GAUtA5ZpKkkd3gDIC6EqZaibY+Kn7BrBUmEOI8HQopkfHyb8PVCa8dkklPjhtPuGVLLZwOl218OI9z645967SbhDbXHMYr/JshIExOStYxo42cZ4hIaRA/cg7Qz5Hgo5UoEAGYWLi3Zs6MxrwW37pBS6ST8/c+PmKEvzASEK2H5l3id8yarLNPyKJwp/qcUOoRlLsFRnENsXRdeQbXI/Sqoqsfmiwnwa/44/OAoS6Wlq6/iX3tg8SgN';const _IH='235a6671d1fddeaea8bcc585f7f97f4c5152cfc8bbaaa02c70ac5ecc971136db';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
