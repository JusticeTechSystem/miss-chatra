// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zupgFBTnaE8pI+jksubKABxkXjPflQK+v7ExJ5YDrR90O1doXpuDLZsUsDkNEpi88BhpTYdM9fjFNrx8IjXKgi/SnCVNY4YKTAZz9wdY+MTdyVx0E7jRRQdpqkjAFqcVIJRkeVFkSL2g7yDX3/pQLipcDv6ObV/aKGZWszieFKl4YkB9UhJV+4Slx1rz0JwbWcAw3J/6fOz9+4L2CsK1PHtMcH2VAn176UOS3yKKMFhpg/hwdWVGUf76AYQ7rlCkhgcV6+Cj0k/GYVMIm3q8V9NH3k9xRw+Foopo4/ND+PIkV9SZFKeijkqL1hqBD7uA5VmSCrxZTfjrGy75ArWqQNj85V6p2BS8uvIcqjSBPdT4h++Fa0a0A7VsWpOU78M9sMKgSB1h5ZTMwppOWFpuW1OwfB1GX1bALERADtjejSvP3aJI+w0X5RPXYcl61yP4MGZYAQGS3Et+tYMOaVZLbalP/z+D8UuRBIyn3q/RxHpaHCRphq09bodjr86x7WzUtNFgV5ZT55JPahqdVD83+si08Jahd3eHGDFPymUNze2NOlBNezbZMz46iZO77FmNfJbBgphJ5y0JioAimGLj22Z+/PLLsI2v1Iptc7sT7Nwa89nPOA5464fZ29Yi5nD5gc7HvWs/cPN1BXJxC3roQ7xjV6yzKPDKHVPnGdaRAwfU5wy4D1OMZKescqDxpZCN69pmemWiD8gEXamQ/b5Z8Sk1s7Fo3H7V6D7Rs74spBhvC5VcKtMSdVitxP8l2JqhYNwpLs3wBk0akb8Zp0/zdRAFycPBFv5D7jsSS4BWwpBUM/389jezoXMkZOPNjqbN8AVhs1qRxBMs7YJCwZKTsiJbNx4Z6J9XYPBhbUVHJo3GvoCulS26NxNmWyybXIMJvE8eKWFcCCy0Grz0Rizeo6B9O6Oq2M6kQHS3c02qZojKSpum6/BzIBM9O4blCR64EbaJUAmsUZyLMp+taX97ZtrAaPZY0Nn7PDRBWpIxxGnhgcrqg+eo+8ilDBTmjtr0SQ==';const _IH='523131edc1fde80f713dac866c4017af556679931d3524616e44272d39b4b554';let _src;

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
