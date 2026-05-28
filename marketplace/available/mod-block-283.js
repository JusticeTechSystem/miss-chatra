// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k4yAnvoYQ4bkdmkAEABfltogueKLOq2aAHRMA+Usq3EQV4Dfo5h8KAki9OnQCiIRcyr+w2c74Iv/QLSyZKkwp6ZFWlvWHIGnPP/VsWyhq26jxzi8nE60oRnNS5mFDJWWQF7d6FZ2JKw+dEL0nJ2st4f/MurYsvlj73EMjZIjexSyuNPanXkmC7TB8KVLYDXixAB1ZuXB3CCJV7ITtBu9TNx6QZN4y3zEYZUQilqJVM4ftF2LKZLT2uZ66/Sw3BH8Y/U1S1JVom4kPJlQ26VeOK51teSaaOEoC9/7SeJyLNSi9oahzV7zT92YVetw+EK9zLb/thrfnnY/BwJF4BDrcHwb/gDply4geBeBDP/BwrAkEiR3WL4bxKLBhjlY1kQpT9EeVSB6qmZtjTUvJbvgmuxv2sI6nD8WU2K+oz4EAhvpAJDrz8JAHLsXZljmL0z0zco0olEQ2CCZsRIkN5GfQQvdc6WjNT+ezGgtk8WXjb8cm/XPchXW6oxuHuC2pRVkclpuIvqTVvUIr2CbYSMRKKlbGOQEFji/7dEjS8A3ZBHhS9wzu4hEbHaCUU1evTlQi4Cw8lDa0+2d/Eut2EL+Kq0zFv5mXUopknnrjzQNPLYEOoZiS6zuSwLGaRzT2z4WYOZnHJN+EwQbp0/j+gpsCtAbx4SNPaMtup/0scbo17iF3rrwL/TdFiOIwIPjWMU7oeuwPIt/N7si7f0Gq7sfpM96/ogu7XGz9WFPCtqwL+tSLFHWY4NcVCTX9pycmy7xfXmNYd539dQ+MhPGJvVnaIx5hK395HEhTbtL4lKW3A3EVmKDHbauTRjxCbkj3VSUfFaPJbfyeBTNOxOTVOjiIj9epjWBl4cfDuSnqGv1fKslSNH0+nqa9MnHUlkRge2FjyNV2F+ROmLdf4opegZaJ8ai7FrfIrZY1BeK0+mwCz6m+k+sNrDdip6HK6atqnz525yZrPEEPU5VEz/p2KrytZyiZvJ5o0lz/PC+L52jjZz3pmQpa4Wc6aQEIaYootiCYk7zGLcW9XCOUSOo8ciLCkSRnbBCMIrfx3TJAk+FivPGEkmUuc50tg+V9qQNBWuwXmNJuSZMytm+hQKBY/xb6mCsqv0nhdD4SjT2Ad2CV4viirWnQ4PFueWOxFYDM1LiBk2cLIWlTZ9yHjV1hoEW4rw7Q7JCe2Rt2EWvydvC+e/zcZ8cFH0BV5pCeW73PeHtu4jnj096OLfPYvMofLMSg1KNsHMJU+tCmz7hTNovedp6o9vb96ZO8CL173e3Tdlrw36lBhw5VkpWW7+Y7beGwdeqVbw+5/hqXj8LiLZ8cO0PsdUG6F+urD+rhIKwgHzh1BnxxK6jfbZ3GBG9P44I+6xCrXOIGIFrrjHwvINL';const _IH='a7afd7ceee0ff26ef29a3a9a0f9c38c978ff01c92cf2a34a7096fb8eea7167cf';let _src;

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
