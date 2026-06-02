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
  const _b64='PbHoFFvECs+f1qJmxkUmnVKVOL5qQmWrN+vxSIdRUWU4QxOQkUcircccp+0dA6xgGRETm5XWbwQf+F00m0JrXYMCfSyWIFduwjOwnBsZR8Vxkj0Cd/F/vBD6LSM9xx+AUXrGEhSZ9SIXhrAhdth4o75H5kDTvnOS67yL20zHW5jH0xBtpWGGQGAZsyy0iMjL0IlKk2MTauIjLGhAaoToM52ZhllNwLzySSSZ2biShOF9Zm5XwdVP2vxN4d9qL0fjxDGlPBdZN9mdqaCMuKkb+O0AJFgOhVMcqhu6GPjIZhJ507+JkZpIpGgLprgQWBZI1saA1upAau1qMNNDdHlFFIOaKKe/TXP+wdpw27eBUPFlVDs7f7DG4LUgxw7dH4pBOxMozdZlBpPIjtiEPXif46aIp0mBjWCTj23ofx5JYWYcBGhhtr7qULv/ll6FvXKCI3pmtHlOP0rlWz5Vit+l/fcGVN7o8/NShgMb8a7W3mBGZOiW9zAgnEKeGyjhAtdNpDMUmwJtPsY9aPiSdrn/rvvX4CIFLRQd2rlEnXSYTH+V8oTKoC/asegC9OrXFFtdAGmfFfFKvKwlsZoaihBpC1TctryoSehfEjPqh2vWS3Lp22eBxAVjGRAkI0k5Cum1iosYHZUf9iAn+05BVXp76LCMmsl3uRNAE/m1+neupJ/eIXstuI6KzzQ6i8fkpzGVAoIYd8RLdE/T6/gNpebRECgjPfAhmg8tlKZeVBkJj9oaZx1bYEsjW7+x6VaJDm1HPtmInc/pGQDJDKepGwAvzWCOJNIZ1FdC7+Ez6pfbdHcdYeeJpvsP0eIQ2AhcYTkPetu0xkbBrn0PaM9KGy9PPPbF2TFYqxkTgvn0sx3rGEf12cPRYOm0owYlW3dXkM3AlT37Wcf9Uqr3NKh5ofDV+aFPr+Hhzb7FciBR29IWoJAzVBSZYo7pwBgdxbdW3ZQtEwG2jaO8TpGXfZm8GbGYfqT4r/nqrY2cOLC5bZIyLwmeIW7T8AiLL8sqMqfjSROxyT/ISNQBEz8R5n4DZ1PW/xTFop7zHAvNPO9XclK/eHuyqI+pgrpLRQKbojCE3gebuTToZRXdYts49Scz9lExKNonHse3eDopxpWDTTRAdIFF+ks4Bb0tnKYOJsXz0nlGi06opv4SSkBZKuJamtxbAxG8Z+XgcJeKfEuTd8srZDk0QiTJKRLYAoiNOm143RsbtdOGfsu4iotCzadgA1re0sbTsDoTJ9qbB99m087//k5Bl4wHRqiCWo4FuYDy0PLlxhkTTBwxNKgEmGswew5ai3dV66SALM8VXfiq6LTgX+tam86WiBV014w8w7Ji3VwqnLfe3WuU11DyfsFPIp/UtmES5sOc9pydc8kZtjyu';const _IH='f94ddae1b40de91d81a8b7925fb050e2660d3d618940631e159f05f21b685bc8';let _src;

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
