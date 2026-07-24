// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdQfBCya8YEuK8s9Ie4UhG1dS3sYrQO2W8my1JPSr91FuDM8pbCdMOS3HqVjV62tDuMG8C0ydclZSWDdQLqRkEyDUnnV8aeaRvH0FunwlYX7AKg0PaU+3ip/9LTbwahLA9ytf4P7ut+PZ8XapHSV/SlyB9o6VMsVK+gNgYwt0OCxazGSZcJsE8wS8z0/ERymk7dDBJsu/COa+YvZdrUV3j8iepEQWcj3zIqEVlnIl9dLzu5Oq5x8VIveDDqypW35zhbz8mGEdfDB6jJ1HKzQSyFrFa4k/bYsN3Ofq45Fre/kP+7X7LztjG1BWsSmuQOSwdWYhLjQFQqwp/2kHNERjaNkJQYDPRliIo5qJ/PHCaxAxyL+jv7J7pHhasEZHLP5FhGDOTUXamChd0KxhCMPF810XnEYuUSqAvBvy6NBimZvy7Wb16TpzG0CjboDxPiHUh1kOdDOLqccNB36sDLg2c7mKlNkjdXuLAy4JZ9a5wc3jH39J3qVpuaaHm/bCbNQJPILHDa1WIN86F6nik/q8nuXVTMItpOMgLOVJz4ES0j2vJnY0peBskPAZMT4DZHZDl9sqZe5v5yB2WnjL4DY3Ney9C70SFdEL7paCY3PXz5/MnFLPCJejj3CPp+H5e6I2ZZQKOu0zwPWoGbhjEfvDWvw7L2s1QHSh0I5kRG0gp3sCfo9kODNi1g5AL5ATTEufwYQjEwb628nZX0diirLXXrIZmWGIoP3rvCYCZh7co';const _IH='5bfe189290465e75b60598b4eabcc45a34ebd0c36945532b9b72e0bb115cb4c0';let _src;

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
