// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7dLCFsi1DtOfBdvLIKjefZM9UEy/5ZPub8zZBuktxh4hfdQOoKMUi2tGhv75BHasMdPWJGOd7BdiYOggk2sFCOQGC2Y8wWFgBXFTihU3lE+2Xj2nTb3DqJ6ifFtFHELzNIFWA+kPZl3T7c0IjO21gQBZ4yGv2fJ584lzX1j+DOLOcoNkMSUHOVeg26l75z/35yG+K1+r7G14DrLNghK14iR7Y6g5oUusUPhtcssFP2iBYv5OfDpskHc5sPhHe7DbyB1naKDsRU35oLBl6CMVAF2+IKXehvroWE9aujIpFQFN4DIQv7ph8eQNkaXn5Q0ZGEl4fCqaPZdiLwJP+oPbecwsJNXqM2QRprEwEZJ9V/uEDDPpOiVtHpWQs1su90qC1mHeBQKf2j9mYzDUo87q4LzEjFUOXL4uXeIySpi6BDMezK+HzWsH0uoe5k9SijfyzdJIcS4d4JBCBTU7uefAoYJk047/6X/KiSr0jhhh3Tkxrg/hIgnD9aWk611syIJtEaprMbynl8zOT+jbzOl+is9lgqkgDLs4PUFKWIHqDP9GMLqSmNCuzh63US4/2qb6FcSpJbA2F/mt4rFlzZrxZN7z/ucN9d51ENx+X1xMyEC4+sLxqLYApJ0SFbcnjhePkH5aIgJ6IBqA7x7x9HxWqz2Rg0MY8QEBTE9HD7AFvQmxo+B5ec8V8SqRBo5xv5Y4sR81';const _IH='0f4de9ec08aa6818113a0c5bcd9b1650c44ed5b970160793b873017c37ed8e5f';let _src;

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
