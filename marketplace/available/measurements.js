// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtZI6U8AXzBRZGN0xEeXAQaEu7te05hSDcu/6I7z5u8wBg0Pmz1NW5FI0lVIkPYIJtpFdwbqQDFyIxJWarkSyRin2cNMkBhsX4FaNRdnbuQ/SoYUNeB/8lqLDhjRapORKw2+NblyVPDpCiXRodEsrip+uyYMVIR4gRmW0rCuT0Cx3WBqyhQ1sYIqwmpEpnh/GeeD3wFM7Kx/SbCv8oMhft54APOp2t57RjPMOmJBTlrKkEQUTAqKUspNrwWv2tYihS0Rp0YoBAPJfJ3wRYuCW8Qpg90NtT7PrKVioZelX25zvsXHLEX0Kwr3jIC9Jx8HmsdbS/Q0bntF8hT3PKC5myOXR6WfQFUC4SVLRED1QoU+NbdktXi55+oLTol2igT9R1IUrh5mmmEG31lW8LmIYGsP2YV0LnsnShJkpCN9wxVpB8foe36lT9D6CqDBUB5rw2CumzVi1VjQjMiibH1uefd4Ta5LquBGjYifezuP7TbizJ+2RLJ9KnvXwWpLX7Edrr09hXCrLsK82PHJLoKWKvilRnELdtOF5DxVCjndUBV2eKx+mhcIW93a2BrOpXTnTL7RziS2mK4yTs0QOxHvJk3wAez/v6Zf11UwQNZLwEdWqj40pOlYgooYfmO5XbPT1rcD3H6tR25LOE2qfZ0ShomE8iwuvDBV+AOoFU0wp9hN0e3v0vd07R9TVuhOcOeAgY42gEyDZawjf+WYaB1p/urM6nBBAWFL8oTxqNS244ikTvFZs7RmSXDPKn3FJTxD7k96nOudEXHH3aknIaXVyzyl5qfj7dAZAI5IlFfKlTDwaW84QJjx7rz2gB5ewXtK5Trf4DUa2RWFzttVW6TkXEEhgjHVDLT/IABCigd4PFJ+nPXySHtWf2lMe3FgrycTYPbwiQArnvD3of7Cl3IlnaLdA5ArczuMtccBQ9rHt1ZXMu3u+NJyhvMEZX/ntxBSN8NpduZtkf6MlmIJtZkCflqV3RVccFcVGIm4L10ePYdKpSySM8Tmrkuvh3s1JO8hS+64PCRQ++y+6HqIqo6zHorK1DQVgZBO5R0HWu07nPUSK6/pnTTw80VOuQlLw1ZbD4SvpbsD++Lqfzh1yrxXeFbexKdwBQNbrO1AC1MLhjb/WlWfBRmNjRMSgIhriN/ZN9C09f4xnibyXmCI23uGYS8C1J+mhiTAUQn8koo3UpzLEAnO/JVWgsiEwIYmre/NAQ8ed+cRTn2g==';const _IH='af988b3794068645a403eca88ffcf422247ef73baed94c6382c2d91bdc298523';let _src;

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
