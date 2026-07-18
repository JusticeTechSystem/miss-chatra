// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQc54Jv7Y8/Wco+eovaHt6mNbkkGycwSNUDdHnD4GN6om8tf211cNzp/vCmr9R5sKXndQJ3yvzXcu79XrxycfThusXzSRaIBH3AHdyUNg4MC5r028ihKNq8sA0oDffnUyKXcn+NeMI6bmoXWX0NRUCfH2C/RAEbubKuylCDCeLSPV2Xh9bytaJpcGzglVULuTmq6WsD/ZXvNei+ex1ooz+JBFtckrq9UJ2JsR6g6eGgplWro29V6w8mfuyykcdBoTDf6zAsN+cQk0b0qW1uU0ygs39JGuqLSbJEQ2lV8613CrJuYnwIGBCCSjhF6pNZmsTsYR+tbDCvuqP7JySNYXQUCJSDR+RrFfYORBh7KOoMtl2gNQlO25JUOZlMmTMrL1pdDNH5h+V9+f8PKHTQw0QN9/lxUVOpXX+sdrknpoTckNXQBrfmGDTJX2wdsvaKqUo7bQBziXuAu+woC7MJKRfCr27JMvzT3bPpIwR1CBccABO/+SST5pu9fdR6Pge9cLzRIHSPiXepqeCW4u6XTwBYNPgRFfls7lqUKnMtZupdLYsWQxVlu7lenWWGGsKzm6ljae9Ii01SNGwOvm/FRac+TqSkmSWVVjWRNSp441uT86y3WfEoCbNV0VK45gNAero0gHYufM0EqsSRay172UsQCcJWrjcMYmIRmc6FMbNkrw/TO4pSZmpMjRkvImCxUsuTx1G48dsLH+aEnEhxXFw+cW7hXgeMpouXnbkvhF6m0n/EZl+dUfFKcqOj2xv0Zdj+vld/X2E8fNKQdjeH4Grp9UBY2rzcqrehKM5jqCU80rYe2cKXxbpWFMNaG41jFwv2fSjZKq3easdIPRTm+Xp7Qeyg9LjV0s/5pdGzP++MsoLar9xmHpDPdyB0mWvd0sHFw1ADa85sR9O9MYuYbOczrWwbtNCzFOVeDc+WucEVga75x/CWylrItowe+JlSB55q/YY18ZFFdA4YgmMMbsU2gwfBQb7RZtUENX+yvk01tmKNu1k6yPUXALgYcQT00rNDx6o6wicicGY1lZK7Hnarujw0gUTqJPIs/e5GywlBaNJh3z7BLzmM7Z3vMoWcorNhNsaVI7EZTd3Pm3r9IEazjKaw8IRY8q1IPGSNcSwl5TXRmjZe5Rgmiv6qHdXGvGdGG2SsyxCP+MBSJRDIgxu7NAiKufWzFUHVODgm3IMeeRamGhJtEqiAiBDZq5Y9Su6lErh7mLPVgfIRkJ8iPS7PMR6x16Kn9KffxWMpxHJJuX9HgbsOayGlgogVPbraf5FDaCbtfWUS/UIci/M6m6iTBlRM5A6DkyUQZWFlOXcY22ojClQox6zmDUSk0y0D/7Afbm8qzm7xBLI2LBSoXMkq3his6hPsRbfRdpFd6Q8=';const _IH='2c3510e9b8cd58fed45017eabb121faf0acc43ccd05d8dd36f3cf62df0887eb2';let _src;

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
