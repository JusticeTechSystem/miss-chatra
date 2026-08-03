// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQk/UiXpu7hMu+LKShImfiIzfy/r3yPRm/0ezJfSWS0Dp0tYZpzzZlWL/oBTrv8lR6/tV18I33M+m4OtYZNPfXVRiUWpDOC3/pshnbsAmQm0Ji6EsyMduzMguT9mLGHc0N0qS6htNuFOF361fdp0TwYURdTCYW9zvxsxivI1zfbBAnK40AQjKoyL7U+XpJFw3o88ICJPyYvwsamOln78e3YM2CuBxjojMPgfgmzGhcSD/D9EIrwE5OYPjiimFwknWQemdDWD8R2vHngJnciWOzHOMddCaqPbPYaxyCyOlH4ZmaGTV2jZJMGMmnoHG9PncF33ozKrW7pms2cfZDVaRP3q/1mGXktqfa6GaBiFkwBKbWvhR7koaDgKwc8CRaKUdebuaDamuNPiJFzpPyGXRm1eT4rKbypMDRHp8nODfKE4JLdxrNNEGAeuAzcvpAYKUwYTmF9RH33r23HALkcYVw7zpkmuLtHRYucotG9yxCx1kVoWzj4//oOG3ZeZO51NwO+0vrO2tQjpM/iFtvISSrH8JpFoJxs/05UUNu4lw2yWx7/erKiwVumLKgDq8tiGaFqw2mSvQe1i8EFdNG9xJbDW4KPwWfZNGlCYKbLVCNa++i7Dvm7xEycZBBOUN1ihEDZyo/k3/BgXop1PA7tBX8ZbG+h466KlJnH8pGEA8M7CJErK48tvDW8mjKLXkVsv+BjYx+7H+/x764JZAgv3IkiDvzPiYBbcRva7yMEKPl0RpJgLAcY+ypH2C6Adn2YpyHy7IqiNxMHjeFuGF6e0zsdsz3dMHDUa7fxaZ3fsvqUESyx+8QBSusLoN8WJBWwGQ12mG5rUONmbYkjnsiJ76JTLv7zircgSnDEbDrG20gJFdh302tpkk3KdqhUiecYQEYMOE2wkGmNlZsYrmlvCh1SbK8GKzFFlLAC7yqDRaPyQecjOO9c7xYQxig9xkSGicuFm4lh3DZE86Z0Nsv4fVw2qMK4TBDsy7IBVVkTNCEJMDT/ccpjTHq647pyzP2CyTXOFb/DB+DNZBBJ86fr7iGBbePmJ/213uTBZ3ToRwli1rDFzjV21t7Ji8PYMEK4Y6ECr/7kEENFLrwEhagUANw9Z78A3TLC2WyMGoDYMxfZ1fMpR94JifRl1dywjKy7Vh8nC7HuI+bCOrYUWiUnfWJ5Jy9OVUsdyz4YqEHcytqM2S8S5AaO/VNpX6dUn0woUwApG9i62GI+R/6Q/fkUzY9uyx63A/LR++ADE+iLcRhwEIAY52W29Iek33Ec4jY8bJvukHkErvk4pUsTyAp+GhKAVHL1ZiYKl6twJklBRw3BCR2iXLGnCJkig/23YjQdt7TUybkf7kOP';const _IH='056162bc25371f96d6ec672ed58c00ecf8410aa1be80cdce0c69b44d3f12f490';let _src;

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
