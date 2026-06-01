// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+CJmyOXEX6L6rC4K2npBWzvfA/C9GsP5GvRakJDOKzOB2112HSTGJAbVgavXrXepD2nA8fR0Z5mBA4/STvfhg1MLoy+d0qdrmmeGhV87EXsieYvJOPiyWBfCoF1xewq+VXA/JumDWlsQEX5YOU0EOuZ4QeWhUbiMI8DRaliCTsWCaV+LKMs0eIeEZhTAFvQi6V+CmpfXccuOt7ZSEW6H3UpSHEGuwW8pKvLBKAUln+HS8398W99tSQBDxYAjhDliXG/P+PS4V/OxAkyqBjdN8grfDqxC3WCFVNb3VxFcMSy+TmFHP5oEw+5HkaUe/JVzQAEkxKCQum/aewjZzWvuawHIiL97FLLDW9fXif1GR4tfIyJxRkBJeiCbSm8xG7fMNjVgeXexbi1+OuWyjh9xbTlHOt2WnFA027sfVTvPZ3IDEBqb/P8EePMoD7tgyewV6WoWHocZ/LsGoa8ukTwXm6xLW42g+F7YN+oz46VLb4UvAdAcoT7/PNjb5Ci7qMcVDDSAsGrjTnrATBQx10arb/iIRbNRInw1T3MSdDRNZ//pxDSqkMyzdgxFb1Vjpyqv7UGsox/Ycri+32ih01LsHFaWKerf569IEuDagMzCgFGxC8HDFtyFf6NibBldS63h021z5uuRztdfe5zu5rUYSKwildXSIMqiNCedM/mBwmYX/3qhTaYT1EUHc5eaDPYz5JwlUjep8iMvmwxEdAQDavZl9AmnuY+mAzgWCD8zdg/PBwgkM7S2M9hVQ88YQfrN7/X6Agpj+vUPYgAtc3RDDMZLnAs3b6YKFD900YWdI8ftF4W2nE9nUDa947vc2Uu9RILm1TTwIidFdyQO7XbCcNsnuJ3PoayBANwmrmKE6hgWz1lrL2XnDdvadHDhGUoH4r1BUjKDbZcSUGX6K+PMy5NurMPVcRh2plCe26NMj0+9CW5jFSnrC+11gqY1HJdbK5PbaprY4tE2JrlZ8l9ktsiCY7j+rsUMB2y5VuNOSdHcdpHAHLpNmu4Lach83TLwKKgbjRx6S0hA1ZFxS2MfjN2gX63Y7aqCYKbaCDZnO1tXdpvCiPSnYxDMExAC9JWMCQboOjh+tbtXsTPDEtQn7MIEm/BjmvoyipkV0FbcfyqWG5JJTuMpL1elBdmvDydDsLCt9pEnZnplsUbPYj1YzBjXchktk1NomM6C7WSPeJI1eFG6cVoHnOAQLatHDvXeSVC1PvrtPB89W4pQ/e0WbqLxh1rh56+Mks89mrnXvELX1X9pog+NWUKxdVMCPIBwwcWvFeu6FIPHh91gNMdgZlzZL7d7EygozlsDdWTCOXKy6xh';const _IH='fe491a1b3faaf5e8e1b9217d0361349fe5af497cfd87d48b44aaa12790fc9845';let _src;

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
