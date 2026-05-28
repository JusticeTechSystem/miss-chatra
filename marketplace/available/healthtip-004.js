// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qvYyfegRqHgfMuP4MAFKway5BRldM0AaakGH2s6HI1lGO+pjGXlBWNouW2H7MLrJM248MkJW/yfLbzvcww/b98gfZbCpgi6+++ZO3sX8c86ML8diqBQ6sBqU3XDdL4YTfWFiEatUqHUFERF0WF+MtZ0WeBYeYUAqra4t8ImtZsUM5PKiqjFTkQsR0znFrkpEShsYVCDp24bzyhsF01RzmBPTqUpPkYbHT0UrKNpPQxgfdvx95NJ4YYOcbSlKh7o8Ddh5JvDX69jXoKNNnz3+yk6I5AhTZKbJQWkA33T2Sl5TH72W39jUuTvobwd2OmczT3OLMvmdGAL//NgxZvIgiJsAlRWYmuKR22IwcBS9TMG5GliQOU7GeQGGjlzJ/vN8oqZaG06hRangY+3GUDCQEWERqJ90rVAK2vpV8fftlUq3lcUNg+DBQ5O0+fNgeDdXxMaGOyivSev/F5ZCrv6flQfi0kzRugW1iCS0tZ4VbzMcKGMBCtb9EQOVsYrACDMzrIYbfj6MoW2lNcBszD4Hl2BLfPHE2OfGvNE00Q03ViUY3/hrfaofvuOughrFgVjSM2mYfzRlAvypwz+7hEM8KLLEc1APWe7sYRDFHVj+uD6rs4zPSQfO+npdFG4Uo1NU+WcoPRLMBtoKGKNynuDqtLcVnPZJcdYdUjzBwD9WVHU84oGVFg1PiIlfxh7x0bcSFs5zalE/+XH4tM6HxDrvo9psoWRl9B+5Xw1bSNm9WRv7yWO0xeNXjK8+ttG6FKmIhjgi70AhgiZJIsDpldFoxJ/UnKGqLb5mjmCG9dA37aMTR1ii4QFVojVTsPsI+csWqR5NyEEBFurfCzIRwyVLUxKzLoIpMKPEAgDvyCM90AJk9BQi76Rci2o/OVhUXXw640w2JlE8ac6qmtbUwqSJxWUutAI2pYPNBuIeSw9PFN0GOcONYEv6/g==';const _IH='e761a1ecda04592da6e57c3129e5263684df8df77e2a32dc3cf0eeaeaa51cb9d';let _src;

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
