// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M0mostjfgvDxO2BufsZzIlMpKPqKd83RZUKl8XHXEjDWRuzNLMgSBJf+fAyPaId2NyCoa5BbyC2PMaY7xDE8bp9Cyyuw8pGHjjgo3qegd3cXQJocTtKEu/UKhC50e0P4+f+iBFw/r/nj47lx63J/Cv/kjx+RP/JTQ5Qej32acm7Ok0tXiS8yt1MEEPNBpl2vZ2bGplWTACCGkJtocxLOkW53RX/ChRMmZ48jCHMsC20Ri9EOv/RH078F5Qs7wIfKku0FeloPPtfS2mKv2HnOtpjXkby1HZE2pby4QPbIYf3uizSYmHrVpVkn86h6k2oNp1FUUnKR8e2+pMqKaLLK00aZPblrUF1f1kVwCZWh6ejGjX588XTIK7geOYcm1QmidmuOqnUkC/bo1qaFtrb2/vyFoS4gunfgxnoQ8qmNZiv+aCh44rP+Zrpo09mvH9iVmVaqoiM+RWQr6ceLf0cpGlYPl7Hv9LXZ7M5M2RBlQKZJp9S/MZG0qtGTdkfgd/HZ2bOSQn+yJofJdmxAdQaVN47kl6VTziyCxERXnoXabQ58U7x5KlIrZNC/HpeDi4aY1FcXAPv3kel+HjgXwy9zWb8Cn0mePTZ6cH5BsvSmEgy+ZrST4tfUhYIeEZTDmQUkPiQ9vge/CEybF734fDRXwFuPPkjKRwOgbWMVBq8r9aMXhTZOUx3xCzrc5D8802dLYPD4hQeCblGPbhyYfXGqdbGQTDtLM+5wmWtwvgpGpyRm4xMWgy4=';const _IH='6ee6440bcdf33d588b6c1bf248362c371ac8881dd30269d649b380e06420c7a0';let _src;

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
