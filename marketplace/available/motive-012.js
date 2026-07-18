// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdOLrQdPiZ8u7KEflqjIvor1xh/AQak7Qpvj+7urfwaUpnfEpao9losl2gKUboTqoat6Fp4QhLWYmqkaPbj8gr+BxDikg2QMSERiaIC/rjjSm3VjR4fYBjNq9x3Rqr7ybYlHPxNTFv9lMi1CxOLsRk+2cWg2h6X4gykMAr2ro6Cag10RykTGKmET17Ycr6Lw6K+l0tA2j54lK3F4n3QaMrwYGPSiqClPiJH1X4SND8MB+m5uE/GSM6G27+0vqhyetsPTirL8oLkq5M/ETPLarckpcFQBYtuMWkxhCztQHFP+G84Kv9mdHXd2eSgXYslmiKE1BuKnooFVryqErsReqcIdT1boTHQ690luRWnPnhlhx3MXRg2oQxnrC+uTc7ycerUwR1qinAoKu72jQs7XEgAWE3DKSoSbUo7jdFVECuTGXZclGrlSMpv2zer7RaeFz0i842HCJXCw2S/0CpxCncJwUXlFIKksant3KgdhhJC4R6stsLBSe6TYM4En3otvJCN3RF4eVHySW/YmFGh+LK8PdVNIJc7qIRU0wA279tsuifVOuy6F1RkKQhdkj7/ySj/2uUN3QZbnzK4VukMjghHZU6Cb07Ev79btcpMyB+veUT2qfiUYR7xrh62TonLS9R9EfXkjfIPQej62ZyydzIeH9l7m3vkvUlY4z4fw857JsqyUtz1iMTN2AdzzYuDnXgovxdw9JODEhPMgUQf6tnCpDzi5tnGKId67S8xQ0iWjBYwHAhiYDmSH4dW6T7rHKTcIo0bUdvVZ+1SY1fodEtmxeq9JDgNws1jzGvTBjArSfHCn67gVVUAfpfWe1Ai4+5VicWxKAmnFCpKbq8iMeUT9RNPnQiA+TUP+jmNne3q809ON0tWB07AocNsfiizmw0dgiraRrv5WHX0yjbNnqIGmjZ9ktJYTbTh7KFS6D1txWbnFgPBxymvaMZ76bFpuJ4o3u+X38DkRXphv3t97nljonkZq/ZfeKSC714+DnculgBcxaR/g7XkBOTeap6HvQB8aUBUz2VQx30DMF+H84DfqA=';const _IH='8025dd11212886aff5ac3de2b400637cc3963fe592bc0ab378418b923eea207d';let _src;

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
