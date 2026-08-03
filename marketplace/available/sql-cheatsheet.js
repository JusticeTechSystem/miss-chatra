// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOJ3H3i/3hPNbz20UenHPdx8sUrbeOV+4OUnU73nzdNf4PX3L281y2Msd5G/xPXlio6s0HkEosue+1kRYh5JNEd6rsY2NnjlKRaau+D9p0hO+dVp5Z9Z8vqH4Hdi1Z2k2WTlSwcC0LfrDKbofgZgiFx+hk58Mbs361IkET5NGjUikNLmSpuRL9CJT6Cef9IHy1yybwQ6luS24e9RX1vq95YZlEjhX/TOwFFYCrr2CB+mOJU1pL0lxpOFTa3LxvGpVzL5wjB72cEusiwU3jWCuSv74L0Xu/+sFyOMbTODMLjpqXMYDJt7OzSzQbNj35Hg4zW1OnIjlrEa/jlm1u4+R+KjBNfxk3Aj5/UeGLq8NAn9dg2lEJwBG/m1LAr+gwvBVk8VbpDuovEjFMxx5ISrxakuoIonpB/vX5IIC9r/CU4rL431BV9MgKBEdDYt0YfPUMyYuD9Oq72kqd5Ueib5VU63wz7uaYwrrP8QOBMjTnqTlIqrP4uqEIwbGFoY+O2jnhTuPDFkRWNP5kIk/cM4lgWfrmA/uWz3m3vjtmevuSfqA1stSiPoBOVQ0U0EVsKaxPuFG0XU8SXhHgNvW3nSjSj9sZX6G4RIlLgVoD/o5pTvztPB1oIVbzqivQFywFbjB4Ysz5BCpRuvBBmcUGuITtyx0BrOeoguBbJ3hbjFw5AzrMFjdzDQE1HAHoaR/twggg8fhyDGFT/ES/t3cULRFTLB8ijZ4jsWQngqA0jrlkCzE968GuBUAjI5nUqL99x82scwvp4nfU7vV0VJWycp5F62es4D8STcPnMSgqSwglFv7e4oVTr56KthKlmdC+oWDZ8S/+92gVVR/GzcY7OMxujKLZ9vnIXxQXAVMWW1ccGBNaH1wTNPcgdFYkm7uDPxblyliqHVPSsdkjZbzMHVOaHLxDsmSH69VIqXmjlAVzYvx94fb7KbGqwGPCSeoJbUU7goCP1lG3hpJwhcbUctaJ5M9H2Fh1kt6fWy3ePQmeFNBMe9iDr2A63Lkz4Umko7zKZQvLiDf1Bp1bvRiaiNG54N/hZGa9tP1iJT1ELN7bHeqKWA0nTvx+QpiEcNUB4OE9afR7TNJ1UxSY1/TdQmd6Wc6W8ABtUuqdEgW08H7oXJGcck+S3r4iYiWhp9a3Uxy7So3TFdV24Q3h9LY2KWnXHF50y4hp0+t6O7eRsynDMAnbmRhrNXVg1OhXxwbujI1Wnt+w7cYWpXNFb75EzZMzEMW7osHahkirldZgezIo1REGHfXSO31dK1e6SzP2WT2PDfvdWi1UlwUj1uwGjFAIGwwosx5j3LjDl+sQc441aob7s9NyhvaDvVDqrcSCTE19g5K8LOC/qWPREU1fZfL+uLBAPY6oGxj543IrnC+s/OnBNXt+5missRUkehCAzrI+p+ni7AZZ9HfF8IoniAmyKD3h/4sKAFiRf2HtBshZyAgJp/n5NjkFpkZ3fdC8tjo2ijQsTElrE09ZciE3Exq3MN21/P8vyV+P7fvSo+/6n/L6WnF0HKppDN+S4jru4RuobiwLVtPc1UvllX0+uwbf2TbJRDmFANHyOtSuYtAc6KR14jzsr/bzeB+yNO+xJMrhbBl823bMVuaoeWmoMsLHN+8ik/HUiP5o7JuMNdRBv8oO7Kae7uM9X6RVVlcMEqnQzv/NM8aKuuk/w3+Wh3snnpbXUsfFQRFx8DDPmha1mk+Q6P9bGIutP48sG2SkU4mY0e7c9bjUF/kUgSG0nSvNefiUu9JmF2ewpieu5BBWt8DfeNTfhQP21MhpE2V40zkqze8Dvxrcgg==';const _IH='9e8650d45ed542eb8664b7558d3497529c92c731cde2f964c0292035a07c9941';let _src;

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
