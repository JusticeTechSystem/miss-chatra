// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qREmTliyvFP1xrAz6UsHRRXlr7hbVcGfGdH150l2l8DToZpkgJw1sF5FheQ9o/8H6mk9f7X6xDXxo3Zxj0prvd1Ntu5PxVm3tdAsJ9kDARFI/vqOr7J7fv7EmxzdCgiVZavAWt4q5HoNGJ7nNNGJaAEb+8U/m0ZK/iv2rtpGfV0DiyzEP726Ixdf66xzwu/0Wldw9BYTUkfnzRLcreaSYGB5g9mOON0z9ftMzi8VflaVupmqIJjSbxKy5I13o2OyM/qABfa4RDf+3yXRx2GgAE9QNh7R0jwF2+z3yU7RprLPoO+HYGNknHmqu0wHKa0FX+hR6LaIlC3u+dJSWrq+azSXOqyjBbQuBN0Pp31PQA5sTM4SmMJ0IpbfH1OPVfp3NuVhKqMT5x7nbZzM63s9ioj2ZBcQfJq8ue7ttM7kmWkFvSjwpCaru7FILW862irvM/GZYhdlf2JUb13U77XG0/g4bdisXbxcVFZFdzeKyZrOou2zA/81A1S9xxV60WEshP+g2F0LX7xbSy4Bt59qqjeiK9C6Yr+9NQ+gVmap6vI6nU+2Zez8K5Lho7JCbB+qRHsq2wENaBgDxT+ZrhoBboKPbIOgDlmeDfucCDdt44sbIvLN+ELcuspn+aRGdkNREgi1OoZVSLbBZcsb95iOweO/DRLLeFWvA9rSgdQmlATXRjQCy9aqPHBAjMroAXfdMmoSPYHc7LW3IaE22NizmhRCN2lSx1lnB1suKeGfyw==';const _IH='8699a6a98ac52ca52b348a80c5cea403bc178fa2a60fd8d924dc7521c858ae4c';let _src;

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
