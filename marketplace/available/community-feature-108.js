// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQomuuembA0ECWlUWyHIuX2uDCtIypFx+YOizbkZDH0voum7Llev/UjL2LXw0xaEQu6vpOefpMDtgRJ8BzIrZO9T3i/ZsJ9s3KS/BuLRA5HsXbBN4CIV5725MQwVOF/Lh/1casBYQp8DNVsNzHXQNwn22BooKZdbT/AtMcdRSticrYLlfh2xosMW2jrcl5XQbbKWLeFnBV1lSJ+NmkVz1rKycbQaDPumAV/Ug0jFsM9wmBgS16tcgFpAfRSaHuG617jEL9GQ2yXIfyoVkQEfCWuGlvvULdRbQHU/UbdYCLTDuGI6gbcRNNxijolNxS2qlZXRZJBMJ833dHjyS2Ji09no0d59nqjmd/0IqeHPubjpwJ7SI6z1lweS0RPcD1DQOxpKbs/8affHZAbFguNpA8nLUjag6mGRHao48jVWaxIoWPysE3ogRG9zYgjk1BIH8RDVCabNd2nStjUlRWRfpzv16opoN8pXYu9XV3/HLd0Ar3tj03WAGo1oP0qTmAUNISN6shCpDUBBy8xUryDAo3cZuCK15ulFjv2hWnFcPMwXITi7YfQ4Qh9WhUSKHRn1syY1AqGtnlVRL1FArVxpcahY7EsocZwYqendy+nm3/oaXSGoCvcO94cvwHIQYF5+DfkDtL8aKrJJBI747EG/yzxIBQY8IWmVDCfzXSDBAWdpghxiJeE9CVloFDRvjVRlVg4hOiMnF8qTKdtNBlW7VzQLNX5aftMfAHxIiSz7g==';const _IH='598d4c338012006b3f844c2a9d1e6a70201d5bf55322405b0dd1c2036188e1f2';let _src;

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
