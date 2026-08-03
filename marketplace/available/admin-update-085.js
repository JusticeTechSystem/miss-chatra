// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQd98UKpLUR4ajGriT8PKomcu+6ItvK/F96sV0CaDBn6m+gqZI+DPFD/Ieh1KYEp3tG2vRc+5uEEEW/v4bDnNzGHNJ3BQPAIBLgTY+9bXEtHuG5vmFn1T6wpyLHYAlNznKAYkwdRChxYaN+/rhfjikZs+2RmYICASwj+zroDsubxl/8V9JkG1FwtpYxP7vMoQLLFxWiFOow1KfA0lH5O6HkJ+xq09g7tgHovpYHpYDFRVlNIRnzC71VH4BBXds3XOjtCxppN79B/kiqK1Oa7RBB49MnMZTv2+HwO0N/YCKrxIMoYRS1o+8sS6fs7ghn8RYJzxP4QxSFEUdzWDmWtRghGWB9PFj7cvXxXfvOdYSR+BYwjPWLtJZSKPcvARRMS57EWXLNrlOApiZNu/VPSgNcUPD04BQob4PiAizOFifAGgu53/cHRXI94Nu0uc1cfZkUVb03ZKD8eF5bmVxaz5NSdFKQM9UQGWEzeXNKd5ENIPjCg4C644rLPhWwJnWUSqp7T5UDVyLV+Vrx3jRYtv7Nw2mbTNkCmU0kPn+f61Ga+4jsPPYQsAWCPQYcQ0i0YF2RcV+GKLG118qbsfwVPR1rmjB3a8RxURdIk6zPe4R4lmHzLUkYkgvegpo9Q7Nbggs+jUHnMabXmrqD7VcuA+5mJqBwksNUrWtmZc54yIzQAJ2C5+LpUcBO7ACv3v2kfVzskegO5qcVOYHByCUVh5DqzQWaMI+3YXMvEKSd2R78NdLKod2YaV/jhvvdAZU6HsqbDFhELZGeULLxjecZrVBpgNUp4LiIPPYn/ngi/rSnLL15NobZM/P/mXT+lKa8phYi8H/hGMCqhrzh7TiMpsXfcopHt1xhmzOWC9qBgjKttIqC7il+RBR2u6tqc7xNIWQ8nR+VaWSp7d9Cn5yVOuBPVoycyKhnh5k6vQtob1rdG7CZ5mC6TakHe5kerGYvurPNN9R6tHd+QvVlIW/u67WAyD/KApr4D07RjZ1FMltzRCDq2v7g1ZknGUry';const _IH='ff626b71c708c5fe5beadac75d3fbb74c8899c81b3b05e9a8f5f55222798b434';let _src;

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
