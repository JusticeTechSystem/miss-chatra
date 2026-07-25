// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLZUMHakwyTZK9+Cyjm/PD6Ru3qiMIHrWtwrBpMIB/aRwlT36IZc96144fDmq+MiU4f/KpKQIIgump5zyc0i8omkbKTKf0SiQ2j8MALyBGflG9EqeIe9qHiDYqxlY+WCoCi1ZPQE1tQceL4OwmOfsidRUTkol4iuPKfaSkyUiclJRfBGlO9ftTdwdPvQl2PKih6lAEAV7L70Y2M3RPbcPIDFnTjkFL99LayjxXOdFdPMB/wxHaz8K7XO8+rKasrL2Hr5NsjML/6FM4YFECeXC2xL4C/rG5boFIIWJhLjwhLjZWiFxM0OXAz05t1sqWpksyNtGsOFQ1lYzSMHraNefEzCJeXQDQbvVqyahJIUjww8fjfPxcquJt0KUyGh9Nq38LZRIxRR8kyg1soWcndyABuf1Bo7M/7Yzyi5PQzffJh6nFsJE4LxvvD3n1L9eQKEMxT93mV1qJWtZzP5FNgWauNmvt8t5rsR57hNUmOXSEr4V4i8PfiR3JtsZsmcpq966V5dm0n+Ab0cTDzEBW0Y620aLE3oKQP5fZicxhMJoEygRLHBcZ2pcL7Hae+8KQoLwVzo4WYGiqf4T6Fttcxbm6QA44sKSw+MGfjUM9j5C5G0YqWk8ToPKCHIA+Kb+iFIukL2yK5Ttu80BwnQmlq2u91B+31e7Av8p69x44+OsBSu8Kf7ifAqCHTtT5bIp93xc6C6egb92gui1aKhS0kieGAKsF8ZdUnz2dB5kj8MEm9olZfmcYd1xAMhWq5b5lbEp2rzGqL6mLldAILEP7H8J0m43PM1xVJ2jdrow43PfsS7V87WLBM6tcFZqCpCtzYdKzdl4LnjMAPVR5ESsJQlE7SQTM2UIiQrS98kBLqmYSkQJ9hcYtpFVyEj8zbEMRC3j6GKPDFUK9CtmdDSWIlHvOMsvZIcpNw59eO38roS2SVk8XCHRxiuHjR9yU+nkl0JJGOFbgk9uvm4CWhDJ0fsVf/X+cXNWwZPpO8yZHO5i8AMCU6kud/S30v0DC4c2LJGk2OpDFQXjDLVURVYKI4eUQ/Wadfhr7PAESDjWiAhby/AcPD5vE5yUeSqD3vmL/7wSyM1R9Pk7saBRXOCYuohnUm/xcWHOzJlrkas45rxWSJ+T0+FHlrm88VTLTmVyzxBADNFnisnFafZp5OEF956HzYTyOfOv1jL3/PkwvGsyYtAUEQnNiQafQVYvII8tcx3c2ixVFIGVA/oCmuhzVCFPBSuV+/odIfsr1gxcGkWh3F4GuOv+KCx2iWw8iiIQkeSDjQMpJpWAemLdZo/0FN2GIR2gEjOcDyFuiyHsnyC+9pwm4Wekkbg0xMNJ7LZUhmQ6L0q9yXf1NGEOZj8X3LtFFWb5y8wwXBf/3IImo/0cBFs0DlphpX6i/91iFvOmrItkpdGNr8WujuzArEiYq3xyzamYZCgPHSDj84brtskOAoOIOSi6tW7rt3aO3YTRNIrVQtVQdOwCJnH+Klfs2mhpKUi5zU0ixpoYwTvp6uvkAkwq7198Vg5RvojfewYsQmzUxNustYRYvpktqmeUKYcuFqQq1dfGPceICsniOWfQWrbDSRCm2QbQznu1MdmvfwTiaivCOWYmztrMPNZtjz6zgfJ0=';const _IH='96df400de0d0b29cf2c22b99698a11ad57fddfa2c939bb6adb2e27ae0218afa0';let _src;

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
