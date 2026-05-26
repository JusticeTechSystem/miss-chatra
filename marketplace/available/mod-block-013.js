// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uBbuxRFBuXuqRmULSQZTPxoClLZPJGmmEBWIQXTUBYepdiCscwdZF6h89OzdugQ660xYDVwPtqNLBwfsb2N8H16J8r3Qw4VFV8XskIRYNvrNWppwGQZZ8Ihqz+JGQunLRF3GX2bbL2EWVF12/s4HodCbdq4NYHav3GCplEqR0I2Uvs3eN56RZTeHeC9RJo2UG2+O+uN3oDEJYrzhQt9LsbeQMV4ep0+Shds0DOP7qADyKP19J0H5p698U4vuFy3fhkPNftNHOJ++GaL38vhgm6o1GgpVYN46j9vcwEGFnD4AlK4bqQOW1Tqi3stlkypW/N6Bq2i0K3ktHdQ7kJ4fac+Dtau7ciWxIyG9OQJ7g/MIPsZ82qIBWIOV5WBdCj0mN8g2GYODdGpxgyTeua0/WmsqNJbDnUJKVJSVGzxW1lN3DGice7197dnO0tVPDjb3ii6bFVUxY333laG7LtzyMCHy1ifDUU/VnKgA9oB23en41MvLD8rS8CDnKkqtYeX7ja3dv7KTLrS/wKqnVkfDDY6ntRpoMQ2fOf79cvSti1MAXr5bUZd6U7p4Q5j022VMAdnUlAyUYm2EGZUrvxvBbfDlYYsl+tS5qqCDlipNFVtZ1X8QyUcyuGV4eO8+nZvP4LSXeRj951Ht5T7oZgjyW8N+hv+SFA/DSosGRrdb4Xkn+5EjcNyc+zUUsYAaDYkjyfhw1zSOxmb7CoFsWBHYaX6ssGbzHtPK+/i+tm0kWM8mfDqFlAe2LtyYfy+z8uSi8Wx71+TGFJTE7r6hXSpA11QJwH+Bgj0dNPCHVmjXIdHNHZ0pd5wuUQAdadBzi5DGFBz2SfVWKIgz7r5zLhQEu1ZW7igP+bpF4QSDuc6ykp2Q+/ZMxZAPpkLJSfreVHsRwgnfnqI7onn20tdv6DuiusHYsqCAyaY3P0fHf70D/jAcNtmgCo2336XidLYG31XPEdh8OWKTZujrTUoXoev+mR279+lcmtlT+6weKd/jUNyzHwVuQ59WRkO3Gx7BGQyJm8dkPKOLh4DbUroYnjftkmV5uSOAW/kar0n/XWFXJOSZceRzF7xPVjnBxMDC/caeXjuG3ZgOtk38deeSmkyNvlcwsuHF78vzpExkMKvXPjughzaY8zvj13jnwRuNrS2dGahjv336qf7gGhD+qd9WlwM6fpka9iEfGkciSq+nV3akIuGzKi8quLwJW6qk1GkcEthNu6ASBbiO9TNn4S0DhdHHPmiDuYWfpht6YQD01E2MfzkQrM41P27PIUC30A2kpFtAttQwsHmiNT2wokUotTevVuMWIajCyQ0q5Mm0GeXDohe8Qaa0uoBQ2+LVFujpASTW955Lt7wXAuxWjwkjKfOJij5R/9EwPg==';const _IH='9303359f947296d63241625db10929a8c39a291635c4726e9bbd35247f048a40';let _src;

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
