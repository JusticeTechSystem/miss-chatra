// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SxLZuHgnhsu1/rwuN1hcI74OofVjgEqrlLk+9JlZdJ/zt0kabEk+K16gnh+/kXkNgVkZyjk+u4Gnj/flprSi7WKkwqGdNxIuup41sGQdMw6ZETqEoczYPLhZhDUCBat0hnlQxUBWfqIDBqSy2E6YognXh+GmVtboMraDN2i1yTRdd3EuHZsgVswRKxCmYW9AYvzHUAsdgkt2cTRJ2qiwd+ODuYpnRZ6kgnqBO3eAqZLKs5dvNRs9fiYoem4/nGPamANPb3EWOSTI834vPpRjDt/TKFjrJ2XQJGdTCUZSa9Jk4siUVdGwtWmd60mYFXVygiCO9Pf5M1XsUXjBWmFLFlSAcMmkHbNBZMc8rphZhW4/9SAiOY8l834ITvZe+Z2HvWYE0MTSxzVEIeAI7IOrUKT/3Viwvnq+yFKc6FpVEcgbuOzFmZZ/EPZMvwoyYcxib05SCGeFVWIK3EhJzfud/HPM6JUqIXMfF/suqs76k4CbPcfVLqbSeHElkXY/fxXbueWT1ENTUxzxqSpoM1M6/yXiV+l2bIaxOHTr+hdjY2kCNLYxf2/2dra9WJc1e1T8VRZHpRlRXjPuPrGUSLZpLZ2k1IEaYrfioOUSoxWxjpgTDtb2eqz9mY1DbHZbKECp6NNKHZuGZJb/a4e2Hqc+We1yiZvtYS5wz7YrZtwdEXPjRIU7Kx5NSPGrCKb5C8s0mDWg10l3TvYxRP3kD2cZuGJDoDvggHiQ91hDM8IWDVEGz+AiHHkPNTDSXyeHeOjvDkf+TGvL6S9Nr9CTM6vjKhecLUY6sK96o4XyoPoB2IGOXHuPK31YHlUj9XuFjrye0s4W+6Gs2P/ovT6q2IoMkKHRmxrYaot99EfGZrob7KNn9E55qIRwnc9f0ENrXRCTKc23HNlr/3vrZa9Ab1blhpNB3xyV0vRl/Z0whvI1JvOUK2FnBX4g8NiQ8rhcLxLP+U3JgVzens8pxoW8bv05X5F8sKAPdwus4gAy6gga0TcDQwDgf7EEHxHtqtT4rYG4Tq3mJAiQGSK4UQJKIgTlAw1MN1bWrn0kCBB6lwiH02/da3JX5CHKSZNG+2xLocCvAz+tPXTSUDCmlTcDOkgUfyek8JLTWwrSJfCBqZajOBQDj0sMVY36zjkK1jSbuB/k1jnoCGzWWV2d4yCj85q1DHgLUKLLwK2C/J/rSOrVmVb6wsZKWNB+3gwJf7nW7KgDWIcGRjFmbw7tZCbF0NSt2t/clLgo3HNRh1MBy+BVaZPIRf25+mjEBZZ/degathr/rLDLrv2HPsemUGsHt0Okuzg034kYt8oJXVumu9vSUSreOm8cTUU43eSjUSX5FJE86UciJB4xi8KSB56SYQiRCB5vb3xcnHNnmjLYZTQQMr0gitUXoE9WVw/aBnywQ+agxiCsTC3OajlmnwB2MSVRFN92Rg2C7Ikus9u6nJXgZyc=';const _IH='7c63a40cd6dbc294be01c3223d6cdff0a7951e0312634285fea7d15e99780556';let _src;

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
