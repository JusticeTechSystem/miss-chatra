// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHpWtU3ekoeVFjQ0JSEqx4Tpwi30oMkyNlwuRDbmLE7v/oQk+tstAwqkOgtKRPLJmdYFLoYopGxdTaeYWe5aw03HtzBE/XxAfTWrh2yT32slGsFhqVaLMYFpnC3zF7udzRtRNAROAGTDmw1Ab2PLTHKOZ1gsntmc9TmZNR1IyUiqgqdPEAbu7UgGNQ4oeP2FcQe5vhb1xj364oA0B0FjbKzDuljl+fRo861eYWFoYkh+i8I8dfuhaJXsmgN+d3D2LRDQU/rQjvkS7ljWeTCFFL5RANUzH54aF6wdhsA+LVTUFoqRMg/2IaLEJnCLngyqX++/zFIOTwJYqnLw0XUX0rGhFkOsJjDlmc2J5lqRAyrzM0TqzKH0uFT5DyLPfrCTcT733KrUo5M3UEar/7AQLFMY7gghaHmct7LZ2M9Ms6sjWI3oy8N90t9uMxtOiinFefWWBUR3TAvJkL5jW2gs1HofQn90Bw+JUl02iyuCAFkwRcNdnVetJulAvaTXsL2xSWKJZGih/nvBH6HnJIpHWm9f+kD4B3hI0JjREWo1pY+AW8djw2Fz5/mK1ATunH8VZnnJw5WmtGOvn2chkbw8J7XlDh7GovHYpurJ43nHjKqQfcfmLAEyeHYmCSmTLNvqeR6+pQQVl9yVwnARvBcDASZBCL6LOkpmNPnnNmbYd6282sbXicxHu9AShOhQJt2I1ROWcdqXji6cYoRQ+6Kih+8wqNZzUJb5I3O64XOtG7HelDcBY7EPAEy8VYHYjFXrxSrRMgZD3E4k7M2eDRVSQb1kBaqmlbkCaiGCkVO8pxTkXmUVvP0i+nSKciWbmkMHbp55qg7cmGO7JCtf/YvHGcaoSkMk5NeAHW1ATU89DetLLTa3fFn8lOlnZktIiK84k0o9y7/hpJ3ggFrtuSu5aLxDo6VyYwh++EojM5Nd+RRkpj9QYQBFwzjIH1fv0SOhr72EDTuMV4cgAiM4MsCWcZhJTF61QcbDr+FrBc6UPTuR5T9NHFpA==';const _IH='c1c34dbbdbb7f4c9f27a0271d10c0772c4aa1ee5987221e273ab4198fc51baa2';let _src;

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
