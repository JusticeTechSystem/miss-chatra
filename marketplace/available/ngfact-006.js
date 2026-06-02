// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BwreWer8vdTZYqEp/loxfYzO1Tu3J37kVqYtzXz4em2nqcXFgwiye3qvPa8Czyvxy7jmEAXfULPhVou8AU467mHlcsFHNe61hjADlNsz9wL0slQATceyGePTYOi1bbHmcGdEc5OGTHx5y1rZvW518AF/dh6bTwCvkGhUnfoOFu2j1goGHgVFQds3BYbodHO+rUmuXVOFEo8ga1qMbXApjGpGitOOOaq48qk4oTgQyH7abCKKiiLHw2hW9910zDb6/v7rNxBz0R7LzTj05Pyq4e9OFt0P1l2zSqeM00wn12SAL6mLhouwp6/q+Ve97fSeuMigI7jUfrAgDjGlYBFAzJSkXze/VLaB0+tdK7hkgVedoeZeVe+QoC7gPJsyrTXk4KGdb7XrAPr2dKrJQnGSAtMJDX5pezCFCSTIGSlvJ4t93jAiAaodmIKYTGlMqbeH2M6AmOADGYHOErvPXYDQJz4Nf2HPMv5b8IN6jNpnqx0OASNyRc8YKRwqEFngmTZMOaibhS+1gfhkkb+5xAJnrviLq4esvM4II3peZH+qGXEv1Kvo5bGJLeLL/UjUKHNO1NTYydD993q+Xu80sEP1y8ckrDU61Lr12i+ZBFdntCrSEZWb4vf/+QSqSIJ3Kd41Cl+fAIx1hyoyq3LnfvlbQ08Tp6/5KZXfRPSR1tLeSjQ7YM0x0QUx5KoxzkjGdejcYuzjOiYv//TRMw1VRES6rg1N+XQMvyw=';const _IH='7fbf2c6d20ac49e14b030a9aaef835449dff67d2896caa52f5a5d4fe1a339d8a';let _src;

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
