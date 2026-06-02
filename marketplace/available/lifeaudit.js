// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SQLtbDygfPnfmCbK6iViE8n1fVYeSf7ENPMiRWwreUmy+or/s1Dmt2+i8yd+IzGohG9tgWIVhCOX+jqq1oIZfPQYfxsS81uXSdg5AaDHbyI+mfjMjif9IrzEO6Q/AIITrCMEjxJJmQf9sjszBdY4jc5UeMO5d//6+0HNiYnH3pDNKPPR1bz/V0hUpNdUIrCbssDjeIExuJJjyLnd7AegGoN5ndhPEO72TpLhYCyyIF1BnMHHC4s7FIC4958Hm91Zvu/L741xBeCGTuxGnFqJZLBHPI/HBUqmxjt9RvgfjBTPZtTpziWVWgsBAD/KmQNdt/VPEWewR9XG0+DnhgSm9vX9HDRdmCYBA4AbIp8Ivonz4lcKBlDHFFP+CvjgbGe3hYmyNuIK8WnZvtiQRjNyEVQ3Xd6mhcrYCTyqoBkFIV1wb4ZEAYOQbET/v07udGuq1PhwUjW3CcZeZSGXtcAQ20bxIxUAKUuIT2OFbFEd5cfEjFcxksCT7YUqyShaW6xEOqQjjKbJvyMNafraXlLbwztHhmLq0wjOmjpkGVa0GL5SaSqQ6c/6zCXUPgjdmkrZyHpqTbIRa+hj8ahwVQ4EuH4OzRVHcMLB2J01HE1cTH4XE3EsGrzdWbuiHB7A6RqcLVkXLP+maX5/73S+nD6rSmShkELv7V2GuaY4TkVlWwrdLJThg6br9OT5BiKkAD5KazBqrGphd1zeVEeu0nNSaM3jKIKwz+UBQC1p87zTiLDabxQ+8UjXCABBTdnJ67ddNVfiUMOP5chbBzbGGiLcbNtsdheHZhk2vRNs95TNhDK6DwvSVAnIX4cimGXfBIE3ExiSFBuEUWCdOSZwv6nB+22qHtEhAI/AQagXdi3G1ZjLA8BEQ+rjyt97WNe3Zlw02ImrInm3rDAQLltLT1tQ4NEG5RDmsLR0DUHY1keywu0dSvqnHhEyGoEott6/OrYg701z3fIrLJ0E2BUfjofjTXpfsLNdq7Sbx4SzaywK8bJX3RjoZC/a/MU4hjddRu3RVtRFInF9wpU06nRYFVr0XfSN22C9iUgiuEvTyyN3pixLg6qR6O+ZnfQ3gCrfw/sdf9e51CQKOq67Ft/sFs8NCLiXfNCqQOWtTioLtbV7VexIt3EHxrv/NId9Ggee1klUs3hYvg3aevtVi6MExSAuakgWRHsWt8h3TzmtXYJ+ndRV+phS1hI11tTQhQkEQoWVn3Th';const _IH='a8a97cd00c30bf8a961fe479b54c9338ef1f4977a206a4a4efd63a7c61471b89';let _src;

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
