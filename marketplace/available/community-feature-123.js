// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3B0Fx7XA5iHYidRe95xdXxVPUtyl1urMjxEKjGkpEKMIPI54AVBBqMJr76BhffX8fh7Ie14nac7+In+IAjb1j9mHB7SZJG5kM5MePl6AZ/RLVZqJVW7iej8jXs7wy4t8k20pgyPw+A3RXRGmcQYpQChqdO+TQ81f7Eyo4fGktXaoxnxdAd9bWISsirEonBqyf+GGbsEYd4UlrR2ZtjYO+QC/r6DGMgxAMMyVzEN5JGBYZUfvr/XTkEM5+vCR3GOkVwJafI+p89rxPbPU8KNvmHgWQtflx415tudE9dosO61carRYXkBv8+mP6DBsTNwtJ6WGCbCNT8dlaj5OJhe3KWHLAveCw3jRlAdhplw3eV+pcLKPWDmOaou7hv7Ai50R99Ih/8e/TjroSyT9jDGUnplpDM26Fz1i0u7kPOGsReqTJG6vCx/sOWEWm4EQulhScdPgY3rpbPCDJ1FRb6Fkjl/iA00chlhBif31QDQVmcGGUwmixXE8Vgmic5Oh5i2Jc0jzklPdcQqTNdaCeZTD6T4PD+JRrQ9awjSZ+Ry7DEKLRsQ46+xGjxDMFv1m3W7YCTBQPJHBUagh9rBd1R8Kg08ueUUDDRCaEt+6mFbMJB6UCVX+Zo1D+J++DzKwsU3ntkH6LXj/lzIdOLVzHxjhQNXShZX4z/+yjPtuE6s5IrMTAhMR4EN62mGOY3g78lLHhMNPDVGy1Qy+f1RYj8gBxvpqFYJ0w7zAUghBSic=';const _IH='bcfeb431d36e810e13768d036292e7275aabb50323d2875efcf5c75b8d4587ef';let _src;

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
