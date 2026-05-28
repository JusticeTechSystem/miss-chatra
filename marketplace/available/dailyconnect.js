// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+TL3lbkT2t47c6BDtk3faVh8At3uNtRdFEs4daXNCSB+hw383SYE5ofEfoQX3EjDngRDoQSGheMeqz2devYl3AemEaSpDfPsfjHVuCZLD6kQDZou1CS345vc+6wyRcYHdF4AX+eq6G2KBLDbDf2izLThA65ln2BtiSd+bMRRoT57oIw9nrNay9XsSyX3MOu3T9ZGRhcbWaukHLIpJJGsxKGXl2/z1BeI5YG7dGUZmXLi+J/Wd2+Pl9IV7Gjp9Osr3yQLba9nEtUGBec9C1tHlcdBJyT80rVlz++NJBqWD/9QjE9KD9XQWG95VaBLhQinaEJ93prmpoMwqlJduwp86VApg0NeSOledLrhvRQZZ1ft3fSx+4Q293H0ri3WyqHICYRxbGhwnWNfsJbW0nORVF2s0sdbtzLI4UFuKKeCWczKlptBXYA73fEdMm8SPHnCxMfISGJ/fOsqvaH2KrbSa8X8hhI9PfJzT+wMhnVWul0O+7v7vVKjzRwgKwnfESMAzAzk7AjUUkT+O7CZYfxg/0muhG+kodEMQZJZ+3sEWRCGqyYm3jZg0kthD76BAG4GUJStYbf8oRAu80CoA3D6MhOSNy4vE2zc0RtOtb6W4bljprD7t4cP6njV0jeqBRs8svJ154idurA816/7crGaL9Ma232LSvlJnyLBXxZd72SbKDoFTDrIcCgMgBNuSt+2yYjwv/iPSiFQLU4LpbAeRnxntYYVEbMIEpj8Jsft5vRYlvyaW8ikcYJocCRgOp5JRYllbv0EKrO2sxT+1jVxgAUTJWicIbr25dl0MrtWwbAUSz6F7AEimb1dem4ZRmCl5jVlUZwDqVZZzTYLZ2ZCTObFBGpOmL4JSypQs56J2391BHgXuqkwUse6PSnkB1x3DLG2Ua8DVBGPHGEHZQmAc6oc/OV+Gp5eInMuBsIz5awfHMDLO9Ev4erOyGAEIH04xWrX3SY19UhHo5a/RzsDXc+ZlQolu4ZHKm2DNowxHPu6TgLiatbCSjYf2SvrOCUQOO98zz06uuHa2aUhuHQ+TToBoJ+RS/OqNm+BzfUYaADYZcSkGv8f4RxuKYmx8uoxitd0Bl6zIv0YjJUWlnFlO0rAB/WINpz7toN6IzUrC4nzjeF3W1QKYpjp+Wch4yxb0LsORTwfUrxL2FgvOy/mbsKF5Xsl75JhuwctbOS+Y3umNQRW9jcN6V6FoigiVMkhtJcfbSKjL9o=';const _IH='09be8272fedf30d097fca71a306c779b5108d6a68cd2e6ca7edf2498825d8639';let _src;

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
