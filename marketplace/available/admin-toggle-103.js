// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qGzF67Dt3ksvS3KYGdsoAq8EL8J32tMXu81hKY2LJp37erfJisQpzW6jbX+bjWs6Lv5WkCp9rvVfpSxiQlfrZQAHmQ/AcpS+KDHEFgvmZTXJLrRolSiGl3uQk4c3WW3vrg9c7bpB2MdyuVUxDOwPbCso/vIHBGVEVmlQ/SoTNIuC+zgmyQqyMv1eAKt3MHA/u/1i7CXPVmdzL9zQFA83Sjo0OXtbS/OTK46lBTYNhUob+jfpkVPkTnbYx05/6XFblS1+7pl0UYmh2dE/OLRb0y2XGDhIvDiNNFVLbpkMBJ5naNOsqkiLYjjOG4zpt4OjlrA0MQl/k3KTEx0EOY02of8c6MnnNHqwnM4UcpzpSS7iqK4tII8Hlbmuaa/TrzJlyvTsPtbivdlMYFvpAN7HOMgzeD19UHkjzwwVw+WWx+Nb2JPPRLdTqMXFzRJw6Kb7oz6kHZd7OPjjWB9ymOPWQ7BxNrHXKChkIievMiZu8Ndt/siR7aESNzJjL9rcYuob1LFQpBoTiTObgfnH6U/tmBIKJ37tSY1hdCDVRZosSr8A5fa9X8xqjA59mfkt867UAvdWLECZMJFV+IBJ2fT7vTXnq0BLfnGOtuHkGWCJ0/1GnnVwFHrRaOAfpgUIfvVYwq1YBKHm4jylLEZrKjMSIvMHfLFm68UyidtUeDcYkBcaBdGk+3aOR3uMH1+VJlfboSXz2LQ96ZVEcKE+GV0HVvKCZ5N7B0yeexTs5++SRuV9JGynK419/MaVKyMhjCLSvIsx7MihLBJuVwr0tlqDfdH/6Zc2P7O+ejY0cI6tRjEsL9slVCBblVXSgnEE+XrHLjLvNWxNB0m0c0XgNtCtKfJwTJzZ3N0hCWUKqLc7Fx2GPvZLHLJ2a+uL2iogzwXngka7R6q/d7W4WFG/d+tdTHPpVqhCPe6AYearkF1jShRDWV/Z9Z9/2MfVX0LBwXzP0zIVEJPHB2q/tBu4uuY1IavD1tbJkiJibJyibJuivaY4GM/l+M/rmsWOOJNEKYGl+w==';const _IH='660e87de990b69f1eeafc99db21f48bb44496c8cb62aa24ad42855d71623d7a3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
