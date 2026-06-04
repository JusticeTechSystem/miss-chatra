// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nKzEgD19McGRMv0SGgvjwdsoqw+aLXqNWV7+DQp6aOsPiZrGiSonAoB5h30p+Cc2KYPR4ylwyKopGYvGndWDAccohSgKZYiStqcmp7A11TDJ+Fw3yULYuWQBiCwmx2je5XBIcBbEthvwUdnPsmgPlg+8ySIfr5CAZjHuALcUrPaqUNRAqcPvxy6/YMU2Ey/z9cdBepME+TqYBWrD3MBX8iEugjeOeL+BrZ3y+ZN1J/PNsJYPPqhzo+YiKcn67NYf2BkI60uSKORnl9e6Loxcw3w1p8jdNbUdXB5GjWFrzphq4tKwLELCmnqNplOlQv+kX0nG82xV60JrXKn52RDvPd4w5Frmovs0+maAEPMbmji6WufnSQl+vSDhoGL3p6fKYY7IeBoBtz5QgACLPCxheqj7K22AmD1PtqO6qOXvDva+LGA+6LJNOcc5Sqays7c9aKiFjEyYbIobuI1OMuwOhU9/i9NSys9UfOaNBT5mKkP/+Z0rkVls3e7rgy9qQn07q4wYIaOKrTqZhWkRrflUFqW5eW6oh4MI/NOL/+ZcXy+dRPjctr/0FKUmDRfNIO8WhIsuZeUQI7+K5VE3WCtg0Rb7A9o+MvovwQN2nbuuOfBNguh1KGiGX21ZJEeyp2QN9+R6/dbFSDjWIlu8NKLca4wOkDxT2G4dVhH60xblw61RU6DiQvS6+3x3wcQtb+AAV6HO/nLF+HQfnqXYdUx4oh8P1TERtthb0BnGW88v/2Y9zFf/a/OGukuFXYTByEXY7dIhDJ+IBF2zoX+t9/5zfN13bm+LLb21SRERoww3frOArCQfJaqTItcnBRwikhAXI2K6+DBR79ZwzoRYVnWbAgxoopeJt5TYg/ltE/gE+GB0ElQTAYZoEfuuxnHCk3SaqS9dy0qnXIJL+e3Vmv7SjiZzaodwsuQ/8f1n/6q4Ios3rB7tVpWUoBeY+eixsklE78zTOiiYl5paxnq0jqhDdVTw0OHHNs1OWEKg+po5IMLfF0dgqxTnt3B/GUc8qhxn5tRJv0uMlrWhqvK0RBKSCXDtDW8kVIfFA2Nehr72K0kChvICjAf+N3hWFp3GfXj3OTpbdCGQCK3ZwoSGhxL5qTku8GhQ3oIOVnqrikfT+2bhYCrz3eljc1r+GPRK9hyTLgRwxtiz8IX30YLjrG+WNSDI7bfqSrS+VDP71mF2yrHQnzkwtsI76LvbMJpG/xKmWbKSktCNYUC7gjdUK6zN40UvpQ4axiayy9ObSZWdpMFy/Anxxxd0snX3pazoof7ik71C0UU0fWflO6IhknbHB5nkTlZwOlIOZ3mAh/euQ7sDCH807Pl8sAeD74MjY5G7Skty8sKwXjv7tnY52NVpZrrqsLBKgql7in9SgGVw';const _IH='5d7052a89b554180f7cf614d60a1307230ff2a3eab551a505c622880922c4f41';let _src;

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
