// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7VN8OuuhOa09virux01EotV28hOoq5tUqUkwX1vws9eoFCQcl0Y5Ecm9RMXFY8CWi6MPDQfTxTlvJpf2mb2cj/hrCa0Mc+G2zizStVwTWIsQahn2JHOHFGkRjhvb3y6PrBU0+JBg32S6pwNY3Tt/Smxbyh7tFF+vQW4RZyoVUqCSms9zBNE5hMwjP7JoHzJKNa3K8ReDYw9U7o/sATD3lU+CsBTa+a4sJyrwli9OU80BcW0QtCutnqsUEV4OoMTf6URQzTOa0uDBhmI8sUbtQWeLGPMkFbdcbXDZ/+aqlclHeOkGEYLYL2FbrHyKl4AH42/RiPgn4faeT9W5ocyY11WEEDVagNjjI1Ktr19Hotpn+w31GYbzLKo5McGd9xryz27NBNQnKHjhG7M/1mUrkgLEEI8VBYfdXRzObyQeIJpPCGuM6ETmnMvC0RIQis0hOCat/tJnFAz/9+whRJLqBvHztExGnJi3cCgmTFpSU5bRWy6UW5qB6nWkWtk8Yhii96NpxDzU8ug7gL+gYGPraas3Qtd042ZUkkSHU6KbitzmPOXQW0TtjWHuJwhiDG4TWbnGxms/wr2SQTwYAtw3ItcUCYG8ayw3bab7EKhE4zdypABYAPuEjnf5XAyD2mVAUOjvFqmSx9EhPGZav2tt6IDEssuEq5SNVRn08nSReLkiEBMmProuNOcpUUMhwooy3JlNXA4u04Wc/z0Wshg0MdOIbmS4EdCGMBBndyiR1EfaKsEoDrFUBbcQY1Jms+czVdGMR24BHvIGyj/jCji1YpE36tnlmMVGP22+B4TC5gZqXZS4YEnit0o+qUHM055VR3Q4V1HdS/a/vLjyqKO3a/gx0H4KQ8/eG20DeQ21eazWzErTXyuxuYuOVyFQdXRZ+uMBEEYZdVd/0UblUuzYfwavEGufIcQv0t3hWuLlAPr6ihpXKOF9/O9F1hPOc7e1rVRhGvhqZDcidvQFhprlO3740rI+BEGSO2tK/k6pC1NivV9vlPoQSb/0ty80jKYLGsB4C2+hoyUucX45TOBzeBIc0VmP2iZKtmE2Zpji68vokfcHVCCPFdCBID18TN/G1R8dE0lXJg98YqGEOPU08XS2FT6lpWNWxxNMPKG0952y+MDS2ap/5j2/wjvQri6A/GbsG2vITsm6skB2ALTEL60SyRIsZENfaZTM6DETrxCtgcjhkE0jKXteaOTVK/bVL2H09x4iwt5V9bbUEKPO+FUCixpPUopsGMGNtntvTc6HgvozfKXYb+Wyc2mlfDn+EWKpYPqX+2O00akBbkJ0DMo85PoPm+k3XfWCxsZpBN4RFGdrUUwYaEmTNHstfwv1CCo0gbXvfkiu6w==';const _IH='ac8b11d3e3c7636ca1a10f230c61665cfca6a63a0bdd47f95764d8083bbc7044';let _src;

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
