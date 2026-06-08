// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oAClQQ3mXBysnbHh9x9ITkc+48LYayxrZTb8c9CB3VwfIiHtapPNV+l8qjHOFjFnd4AvHUshrTdmeqnnEWTT0yBQYucEMZ0jVGvSn/PN9BeB1TYVAOfaBI9KVIT08P/tVufPW2rtr8j3N6bu46grRlkPPa2Vx/QT/HNYOCCPK6gC59zTDEvtfwyjgr549G0gjgTRzt2t9lWLgIpqis0H5wFgfQyJ75N9U9/6xG44YId5SCPLYdnzrl8fv6R2Y375/FdKpy5c2pMbOQsuHjezc/3CnUyIIzpjtQCz+ySZqs1wUW9mXmBkqFKz3IUqZXHjNpB/YJTSDeTEczsbBT8rdy8R2bw4iq2JnM24ATOkbqlTBgJqkr5BPWt/dfoyNMTFYeZFcmIxXj2s5/OoLGI/DyI1ky42eoRK0wCrfIxvhuiV/h73777mtfhkwrky0rvoy0N+DU3+fdpNtFF7qSZFN+AWDgQdszT31GZEdSsUh5UT1Cw7e6fx2VwdEuiX8JETOeTVjDR9bPlNQrO172a3bjo1InSE5tGwLaD/4BxdhGzzTLGZMjXPlKUTJLGfYbrf1j/0xg4wzn118G5Ha3z/X5onaK689xjqwNYswBkCGWrrwRJqoHFWAqRZB26N9Ab97/MA46EZ3MZ5Nz9A+tQCsTqNCuOaHeiYMGvAip1Ai741zRuAwoFngbUcx4a3tFYwWz0FwbABRHMKdK1wy7EkOhdib9J6S+KVryUcWvSrJgLogv54KlyinAiFjyl+W5xRCvFZOO/0DvHJPCa1bagZmMDC1WlYclh3Dy7QtL3mRj/ccbKY1ONmNpI3C4IQxiXgx5cHRHFUZ7b1Q/w0TOXhIkX4xOqEN3OSruxV+AXiom3DWbgWtP5jWDa5ow7NXAtJFNiyzAv1YaNIRWLUC+NonW6xAaiJ/6AQvcpbunnh6e9rF3V863lkcM+PYDvITEaVm1tWSdGp6gMHond3VqPfIobmgxs3lhC0TT5/L7Cj4Yvp9tkarwzMfulGcB5gh3c4YT9/tcTB+Wo3ywF24SZMQt3VqdjAMRbRHr0H0GghpmuUyO8x8fIBwgKy3ZhQatzXv/jFRobveRra0ooqVnD/gUVBZk2knKswfMLLde0arsfX/YL1F+3vsMOlIXekc93BRHPl/skxb0iilpUE79N4zamJmT4ULD07Sm9WhTBiX8AyebRpN7dOLHtHoriOLRwd3ZWrbBI0GnqiOkouQ8wkQmwflxTU9nU3gwZPKuFmOGDgLmUTHScvI0EcK58M+tPw03m3Bu226BlXPLGK4Li7S3Qd5YQVYGLvlZVZ4kXADocDX20Xri+X6qB8sO91q3nRxn0Yr6tf2y+A7Q==';const _IH='9655b986c7f8a307e521bba7cdc66bd3bc2e994972312339bfc4f94930e460e4';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
