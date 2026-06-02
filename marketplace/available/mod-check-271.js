// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0auVrjFRfG2IcnNIMJPbX0H1/zU5nWn0mE00FaxvlQOzjMKFnJ8gv1gIsuqkXQ2eUthW2Xf1lcUTqJZ2srs8RY2ERYgEBnlhWSD8kftEniMIfSQTzycmNodmM1RH2WPt+t+CPWb7i1b+vQzYUqDupGA0c1j1h37tSG9MeBtQKEWT9M8PZHKAhwhQpRUPTXxrZaelBE7gt/019qtnun9GyPesXfuLKx/FmSwzalQ8+8nZ094Me3nJMykQYofP3Gd86jLXPGFR8Vd1mKa/2EPgOXsLLtXBjvcGC8uNhZTbzVEYiP3jIPqfv9hL4ilhMgS7gNOQau77j75EDXUA4C7pTefJAApikbopCUHiEzKSw11Qkeb6nbmph5lNitJ4P4Svt2FSp6PPb+GNF1uWqp6w7VRg2qXyHuGvKHEh0levCAbwPAwN+A1A6ol4NCrcQFGWla3nPK9yPlaNtZNFJXO1whMOf/QuJG8yKCS5RVXXN2g7kt77PJzgx9t4K++K9d72D6shrO2dwjWjtMgOS3/hHpOtk7y2cmJqlsC52VRKsup78OJgClcHvappaE9RNETEjNC5YXM7w8sc0Tigfuy7pcHacFqvrDylWylw0ryTlBGG38m/v8fcby2FYaoeD+SR3LqRaHnzv6QKUV6ZUH0mi8FTNCwselP3jdsjcgWMStiI5Uss2qL7U8KYxSU1m2sgXn/Xw6Ui5knTd8vJuY8OHeMobagW188v7DRzVXd+S3Sb4pRJahgZm2R6mr5KNelWXdqV6wVyLUM5iPeFtFI2ezO11sfmTGuDJ7JfhPYOhb/guulkc7lJByDgmqW67ZZGQcp3Z7BXlDIqoI6FG6wsjymN1yGOi6pGBI64BH/KFOi4W/jqYkDVKqFrdaKymdzPilzSEkz1KI/42/WHOqA1mu6wiHkDhzAxiu3taNBs/6u7zJGdywvtLZ4+pO2Af+5EzYBY4cCuzkJEP+t/4Kne/hrccblxIvnNyarth6QI18t5zVbi6uKTg/CD7AWS5yDmu8pvx6prnMcQd99VwoBXTQSrhkwRYseIqzV0XFraD6KhB2MLc0FzQtwghZeDj8tUpqBkSrMqtahlSJfrf/1F80qVT/kKWRSYgNoBuSr/S2FP+3EnKAevvNplq+nO+Igrc2z/t12eXBVkZhIlEvEkH85ZlOXdp+WYv8pNm8RHy30uRapeCX08bHzuV6XcR1PKIyYgAxy2UNK3/WrEX5JUMuZxthBRpTqqG8nx4mRFdJXzTKEOIXYBamcQi7W/GmaXjAnPLfDKKMBtdC6OaAzv1GQ39+JGVprmZBHyv5HCuuz76m29D2ck9uFMEVto9jK1P2vhkbW6P0dxl5pdMOJHAKTKfwcy9e7qDNFkjF/p';const _IH='e4c1a1347776b9804ec01f38755839345651a68b15b4d2e09411364e80c6705b';let _src;

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
