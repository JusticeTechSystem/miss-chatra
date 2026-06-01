// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2NF9dP9hEOaG5ytl6cTLOZwwGRkGJnYzA5vQNTRcp5jVLEYeT4lv2sGgns7ARg87oaDMDMlcCG/Wr/onIR5oMRJ0baB67mKFG5hQDaiQtAwzlzqZpGnW3jrX7GoAh4KShwsEzL5ez7Tk8tWbNrwGujmRU78woYrz26bSxyGBPnoZUX1x4X2woE+js8flotZyb3CnnrEZs2FFtXhCgAQlDemdagARUGUF4UtySOQ1byvYvIQ20tO/xEPuLfXjo/VR/iGQuH3TFHdb9BPDpumSGLkkBS9kACnaH8rfI3kKqFN5jOs61H7p3Qi4jSngcYPobPmZEH4UDN4JyMqNjCOLA2jl2bYP0bgmOqf7Mw8IbUH6v5Je43MVXLeVY/Rx6UeNAjDHea3mtu5bo7eOw250ciD6Ekhk4OiNCkLs603mB3TGm7Ip35EA/S09s51rVl9WRF7Ykuqg5Winq5ce57mdvBiUJkm1taE4fRwOz4VCLTVwkmQg1fKlkg8pp3NfkER0EDlbWLDBMUHr34+pTCx+yD+RM2R5pkx7oxick+g9j8PptXy0P7mM8fcRyT/x5VRVIgaESnq9bBmXAkLh6VfS7Ttetmk+luRa+wGI/DKkhF2be+9aiOjsHUb1cp7yQfDq0zkyp9rzmbh4O+VHHbzroPLTyf5yn00OlYgM1ZJy58YrCvEDpRN2+ZL8ltW/zcaNDrSvYueLOJVhUC5wTF+OLRX1JhGF+F9NZ5Ry7woDj5f7T4VkMlEPMTguPMjjkcEbaVFV3fejQQci2x/TZZQ4IqU9HNzTOm2mTimsEDVf+jcSeMA46T3lWc8/UhaIvC/R9fazem/fXzl+u0hUrrniyA6kyoH9qYCdtdrDhBsdAoSc8Th0MDcIUHz1s2cASeEAFA/fJbZ5kAoKjgeBxcammZRIQH9TluKy449gyK0E5fTrNnJfrALW8plwicDitZyfUA/UBQ5J4/kmaz0VXYEm1ABymNgJZ71oyHjhFR7ZLo9+7cNGWgvEYEot71Zf/Cb78QtBbRf/5Fg0hZxRFHVg+V1rkuWTxaZCqYV7m33152uo3jn8BfM0T3xnKhGqLU/KPOCZUhHMPkO4z0F+EgSE3A0X5jvdoTBvbrq3sByqpG3DAioPWttNdAFdrwoMUrJo4Jx7RgfozsIw27SLcbVPKqqjgCO8TNVCUkdO9hr/fKEOvrDrdt9ysM3eNDPOV8MhH3vcd6qNA==';const _IH='cf6e18397fc4cc8d0219b7935a2aacc352d9c867df06023cbeeaecb164986f85';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
