// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4h/c5Mmqxle2H+c97hHtqKLVvwgjrtEKvyQ4Er02vrx0q+rxyiuQOzSBsw+W6x0UhT5lr1IFxc+nPx/efC40AEU1GNrRoE5FTn+2ZQ4VuRyzmCP/DtwiqM0IfEPXnzR84U/OZ50VDE5v0w4sDUYkpPIvoJB6p5TD8avwUd13kVBMU9qoZ8dFmsnUuYDxemQ7Xmrti27cuGKDB4/n7beaNplGYSYOgUYDWWeKFT1eDN3U5LXEMH26iLdgm065PgJGLwjcHYk+jcKE6MP/Xoo1dxEnmWF0s7DUdxzeEedZH0za97BZ/rI2DseefjbaU9BBjWl57P/oinTjSfJIF6W49N9IWb7mCcErifbfR93uE6uQu8ldG+r5V3p1eP4f4SbNHqQOiRGOVy9gSWRQCIAZVsnlMtw/CpruS8E2Dyk+eqrjdgU94mJnXeHkIztzW4xtE6okKiKUv3PJMKwf3q3YlAe2nxMBDEMpEdy6DrHm5zmTB0odynWnrg46PmRrGShWWWgrsc+7oHkR+7FBX/JoSicDkDe1PGcnzMlVBPxeFUakx61t33NeyIDGLocwX/c24BPrjEZah8Ym8yar0L+dqP8fRPgIGwrOOVI9K/BDDOFgobkk5G+AGY94ArHw2KDECTbEyPDgPTg/5zB/5NtkCKqWEvbaBIvkbyNPyseM4rd2uOM1NtyWN7kW1jAhOMuLeeeWFsxIb3gRIdQwqrbbZ+U5gZioAPud28WJ6ZZaiK7C5iYEBfqwuA8CP+kaC84opqoByTsp8LFDcCH9NHfGx5NC5CWRCCTfQSIA7O0QUyaGEM1IqGCLHXICfrGgqsIsDajG6pWvS6kVqNHGJ2uSiN4T68hQGqVBQhv5m6n/BnccOl6eeDCcF3ROJFpgGysHl+AVId9ZKrucAr8NgEh+lXl0IQ9+w5HUhmDmyns78oJ6PfdMht4tqB+L6feeQdU0/k90/AF8xgWs65n3f60Jx6uM+xV6IP6+TOiHZ1iVRjJRaYIRYJGE8LZ61laq53rSlaQResUR0W8gJnd2GTihtOuuEFiwYl/nvnsg7u7tsmRayPu3S2zr8EryRBVN4wVr6LTrEtg6xvRb4xRdsCk2Ui7FNraJ3wRPyqRgujeDJuF/DHw/Tq0+S/Jfok4Is7/m/zNYgzyjIW2TKhoZX4uICPc+1ltXeOJQR9Q1aE+MszHX7lssizAo51eN+1pZPr4oUNoeYhjWsMz224nToNLCqKAuYcwM5soMU/5+p556Po0xG3pVkO28gJCMTtozASx7RkE9ZXI8uZarwChjAlhN51JUh7mIVHODBvekN+gfxTyfkJlMCUDRr9LHY6pznGCOG5pHnF2+DsXM3GDGsCCmeGoBNmHWRO1vUuQhGd7T';const _IH='6aae8c3e4d773a0bd034af50f7a1fdd15be55631610b08965c49318e76c10e9f';let _src;

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
