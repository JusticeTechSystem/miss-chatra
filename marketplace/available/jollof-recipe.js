// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRg1uJScbPzpdG67c+Q5kOyrRTWqW9KE6wbKa9wuRn6kSIKRJEFnbPULBNEVn9+G+4GI/bPE+FYltv1g5LBszvK2sIEOTFTdsiYqHg0aczRNrOLR4rX+SORxXzy3JnEl9K9qne78edCTeMQIHoApihBcgYusyxKHxRpgOI8YOjt7dqx3LyhEthOlmpEvZXKl0dnXe/8oVPOccO0YnQPvqnUhI/TFMfokHfNmhW3f/8jAq2EctlOVOpcyyyVBdWiu4SuUtaFJJWdjywwa/74HQVTwQ2BDemBX+UmR172MBFDO6BRpUszz6GZmB/AqKaFQQEjfMS1FdWXeqCKOlnfaXLeRq3GkYgRZP9cilkRean33L92vqADSrf2gpJvMDGwYEm/Y8mFJqFF5Xdu5H/IX4mpl5E16Z3YvsF979GW4x6NhidS1nmuDhOhaSkHUHRKQg9bR1Y9JfXLEnWA0PbViopgUxXO/AXjtmGm53N6Y1FzJ//I4cJZoiIXlM8Sm/6/ZoPk54r7+03Ff/EIK6lrbcbPn8tPPQ2k765NMtTZA3qvS+f9T5zA5yYdH7Izi57KERe5jT/X4ArrCWx/BIgJIeLkco5C';const _IH='32764327d3ce493a19b1d69aec8950350d2707e4854c88eb92bb114b8ecb52ad';let _src;

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
