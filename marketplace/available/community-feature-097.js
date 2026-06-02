// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vEJdQvVf5wTKRaYYiQJErDsrIpMoRlq7gnHtb6i3A65ZKW0k4uftnDZOI6Xh7SRs/k9f9UJ4Khh1GQ+xpnxeTJSs0H9gGq/wKT1JM914x43nqwJiY0AbT1dCQC511e4rD0bJ68bVoEwSQKVmVm9/k6LIRQx35HA6kCxQ+ltuz404ereXIxozXYR8AHe7a8uNwER0QPbJ1mdkIHP9WztvyDJ97JPeWz9zA9z4mGl97zShGZ24BDrXDHFkaRhQ083AmpXsciMsA8iYmNkLhc02T62nrwDXW2V9i9t+SOmobLzY/HJ1IxnA3AWrbrceIbUDSg6XgvP6ud6oxLHJa8Ga//oUKs2lLydDCUiBfwdcYlMgIYO9dFs3R2znYLFHxrU/gD+j+2MWUdIBrnzTR6MJuJG4UQC+p3NZKbmov8sXpGuloCO0B9jmFfbci0tBUCU12mgkpa9ajV/ZWKDpwSpyvUXGivmsuuicIaYpH/FD8gtqcIvqK31gIiKkZedT16JpLj6G7V+Ca5nkVcKkYCFnk9mmTE7OWxhaMDVDE4p/opO1nYemqPI7X/dijKdNbRId/nzQjV/6dzwExv175cAxqg1lVX+0wNq1UoJ4LmoluspMkheSq525mbZoJNR9DO9isd2UFuVbV7gAaAbxvq4vrHJfv84RaC+zHwJ2T6vNAMXKnVhFujH7qdtaWUhkuiBLpcpLvQTC5L+27+8ht6ASwlS2dlK0hURUMeumjLW4Jg==';const _IH='d775c3dbfb09eee417818d8a0a4d6d2f4828042da93335a25893e71bc5a64cab';let _src;

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
