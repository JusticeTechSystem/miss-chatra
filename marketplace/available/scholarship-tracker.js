// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='02A7aFxv3O47xAC3gmJhUaf+4GFOexXj6V6cGUAYPdMpyGPtiawDpUHSR3Tr0+BXWB9IOGoAVnOtbXfe+FEB3y7Z1OtDhtXYdxe/I0PI8AvRtMg1NeyqPVyW3QHJG1ZE8Dx07bWg/qSEBoXE+lpbTeg1s69tdYPgcC/cLkiGlLqUFLzAH4cpy8wsdNJes+NB1H5J1ros4D8DB9ZCyeeLBFlQ5IH/T02KNu05bxnjFyYttKegNW+04jEjys6npzMExeoSA1MidPRLhRRO2E5c9NoSyV1fu3XZjgZXeqECqOr4XNAuyVgeTy4T/1qiISu40KAwDmQFukAzElHF5ALhGXpAUUuQb+M4u7liKBdEInqABmZMG7pXEhNoXba8cGh2Moh46HEk/ao/OeAAWe4hcrnpO1H9hj3Hst9gK9SR7fChA1N9Jpxr0RDrxsxVZmcfHqH8V998JVdv+SrkB8uqNKrpZyzYGoHygpcymMyII50W2LC9IzFxklbNiSHNwBHBi8xtIMj3ciyHLIqm4/nYnilqwou+F5/APqdlR0QSg7ZAY1IUSxA8eygvyTmCvPy75uwnmN4aWjPmyAuRSot/BVYSwCXPtU1uwYK+n6lXaha1IJjlZNHPR1VfNtW/ilyMwKgWJcOCRrDmNQtClW05hBkhLDviLTQSb5U2flN2K1t2WphDw7e7JLPA58N+emYRfuwCn6oSGPK7bo1wKrfbePLN+ITJwX7XwRZkYAEK6n+U2lcUKZYRD1M4drHdb4pa/ZYemikI+oWQ0Y611hmHzn/2Pvvd+T89s3Ard2kh2aMpo7lXVorHZyKaeDeeHUCQBJgoplmkfGlahKBptUI9LWvtk+xdsW14WEuWzk6t5p7+KC+0tWMs6PIXs5zD/njRbBPNn4aerbIEDPASAcqsuDzbQcVCcmRGuakmw3mg6zd746JAlYaqrX2j/sQ47F7y20ubGWnm8g0RXC0qf2pK41mxA1N9EkJbcO4X+87F4RMTh2mZEi50LCG5Eda8E1z6MZzUIIlmJRVd+UHShVmgHKZB0fRdWFuDHjILQmtJNET3eueQ0qYuRRupRuWmTXb8bToNX98Bk4ePAG89p/p4xweb63EGyRHGxEixiJQk107d5f7DXgEe/Ra6EO1DKAAAlsJpy8FEq+Oz6FYrsnEIOrRzJoNpykVH5LtMMMxYF1UBQLZ4mhf6BsIjm0291XgvB5WVCzDibJyvxoQlz/Zf3N3EOy2eNBPdpHrloG2tR3ttFzKUwWg0X6JQkh7nT8Kss06pz0X/NHlip44RVsKiFL/5zfeYHtTvWyGYRcsx7F/apDTRAZS0UZAAHENW2pOSlF8UQ3FDT9UtN7D09sBY7P6FdMxZWG4GLqPv5oSh1FTVj9ayQeXulmn45clv9hYdd1QmzdtS4Krdgi6pZPUfIz9C4JPkGjke4n8sJ03b57SGpS0mg17dkkxzexr/ru5GcK+4VvzaAckJkwG6YGQejX/JI+LO6NXHL9BgGdABd6xig8lNoSbsn+GrZ0hnWGz63zB8bTWGKbdvLE5qlCvPBGSP9K+eVLlQ/2s3zI3Zp7ZJIzWwxhSjt7UiRxFQdNTm2+MNpm/4vycQtgY6L01fEIYVpIk0vev10dN2PTTe2eNg/BKr9BZeEmd6gkfPiQFKKUdUuJSxKtq2+W3d0um6gELmNY1XwdvbqSsulgyJjLK2FVO/m7b+l3zT8sKhi2T4cOsmudGeVsacKHV8MO2pu/AAldqAeARAOzIQsjLRhdylg9bmfsKzpMds3FiD9FAbrX1qtWSu1lx2ioxC8/h923f1utK3VUJtsmu7wMDMhp8W';const _IH='6f8fbaa73f722409fe0867f9ff0a6cddc354b6b6f8ead1cf5aca6c99773e1d5a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
