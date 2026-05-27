// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+4r7vDgdcNyPswgKIC/h6KxRY//8806klf/0hKw9hep0y9u1pKePZ5G+kUR7+RWEKzZYY9wzYgGAP23+vWjso4yWpu40Pdqs6pMK4QpmrR2qZxkF7H2Qpn8VS7nGdZZPUXWnmy+Osy6Sh/uEfFP+eW6hwpQrTb0qSl4vWcEux4JdqXKd6uVPQ+8sJQVDDr8kiV8TClvxHQe/awGGWFRDHScy/4T0sBsPNO6gAYfqnny0S1mC9XjMkH9zNTveoG+LISFClMNP7UKgopTPrBxBXrBPgc9neULsH/hf/iWXqdY2+Mfwm8nZFWPU21Cc/oMWqU3NTd8YPM+jG3CRaUAZGKwUpe1zebrfs+sULVo0M8y670VYH5gWWmkHWHit3wIXFo1caKeP24vV7zkuvMM0uPyM8gMkGKllg45rV2kh1YrwdUIyZLjj8BYK2W7USoHCa59uKDPK3vSqExLmK+o6iLIx9tGT20dH69654O8THu/raeq4gC3qksnhaD7HoIfc+MgWm+Pqc2pO92EnOx9op5ZJ8Eh60/0KiOd3pV3CqMgr+Up4V2FfsyaWZ7mdjW+oy1I1jfqWs18DShTWQOBqd+qWbizqY1qXzZGiu6m9n2Mo5gVi9AmnTkIICJ1WeC1nPc9++7KX3WmTjgK4w3Rfzjwqn8yeSYqHUBtuu1j5LyABi0jeNoY5s7fZKn0bz2uio38AxsEb+C9gyL/mxXpSQxlVrf8aKDtWRojJh6uPhRyutXRQGvSaOWNvjULOsUxjRPifNiO0yLpWF4jYM4cubbF5CoTnZGM/Ft8S3D///B0g4c3V1gFRyWg2mi0hSojthb1N6pQRlCqFbxo1PHfQ4MsW7kPFEbj+ULx1AAvMtJBO5fGsvyKeJdY+LAXAntWmfXaINfWf6iZ8KUhLmkgIpfcXoTGonnZMV0jnYNOFv+wJq/l5moc/660T27IoC3b/gnFd7cKhwtyUpGAy9e2q1UuAWFT7WGBy33+LaV2f6oXuYWVbGK1QfW2kQgBKDRkmSp4gNrX7JofFKynZup5wM17dT5Pcuwiy+8b21f/986aL1RLLGULE+emfVJLrTqV/hw2pDv2TKfkwIQOitaErJAo6FOzVZ44x4lN2oyDefY+9/FFKR5RMrt9AXK921TnYJT4MbFzvPxrDJaIpcXUG6TAZTYhvcaCduwKPy3gNWiUPHMs4Gdabmlm7TGfhba9WVg3WLdy2UnqlgMB/enp+tdK2chgRhvjLpEkZuHX/A5zQ4ar7pPpJ0scnchM+arHF9HsK5/n3l5/aVaw1ngPaAn56/+zZQpTVlPZLQhvpnBh/al9y58b446O5wz04l9UXN/OPTrHvmCQVwv5KmR95Luh4ykAACYc4L3d194F1U0dEFbRndMJnH2dMw1458K5/31I=';const _IH='00efa1efbf0187d7e52c9294046dce6a1671a030fb310e7cb9dc180218a4573f';let _src;

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
