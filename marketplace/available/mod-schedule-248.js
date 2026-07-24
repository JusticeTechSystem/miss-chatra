// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQdE0bmCoaChlOWDIMlTVe1ADRg0O1sZhVvba68WMIV5RA2LGdyf1PcRbh2UX/Vj1QXPnbtwRDWOItY0eAF9wr/cws/XqeOLmQTB5eFGZS+rBxngZ5JxQqu816uaTL4bzfGpbjJ5qV7iKhax4WYC+BJSscxE91G+ONwbNYxllNHjFVXbgyxZOZNy3Rswc5x/hSPTnRrYTXfWd3TgKYwlDybBBV+TVwqU31FPal74SQDuHGD8lKPkx5raKnxbuGjl+ckzN74/3WP32MwACVImI4Ny3y/gs/07/eiGxdkPThWr4yqyWDfm4VeEKsHgmWovV8btZlOpWdkUO/+wMq4zjmMU9JP9OUj5r/DwDlCVFaEsGfwXL2GT+anbB5LPoJ6CPYKakT8N0ypOZuodxOb4LLK0n90GrdJy87og8Iakaw+toTCdhA5nfge4fp1FeEQacC0RSDiy8srFEhBOIQ2KaDU7VvQguEwTDB/u2QAIWiPDGwqUZac3+eFW3/k1jvRPHlCG5aRj6altv/omC9sPWwE+SfT3izqbRia6Z/aaR/cZSIqbTs11RWytHOMTI+ocnx2CWe3B9UwOyPtBNETcBCEsldcbzRNlUZaRax77UI4VWRlBWli6m67rGaMvRePqeTlYT+mMqOZ17eviclSGzjfgL3ZocV26wM+/jRtXWSfyf6Ao0eaiW6GKIwdo8cEiD1SWpGQRkXcYawSirg19l/gohodzGg/7XLvkUu5/jTtiq9TJe/ywKRBpcDvzviaQWE3YctUtu/zSQVoghapgYJOh+38sZnGarx/obeTZTf3CWIE0V7RAlfWxKPoocinSVICaECY6BQNR8wQEJAf2sjd9Ncy8T3W4Rox1FrbbXq29JaAHXt8ktu/OOTszCM/UFOcG2wH6QOynwMroRHX3Bsf2JE4b5ny/WuLdAG+8Qvvis2KCT9wpXtSMlsYR+I8BOWDbZgagDFTKEnxLY04ddDtxY0ZUo+4dF16Xp35t2PqTJPnBx2NNDi4aRuGneVKSdUftdWlZWho8BzK3u4EAx1y9WpFOez3jftT194bxaPQOQHaE8cCcOD00EmluoW6OxtB+I1qlppRWDmz696SEtnNSWy+brWjWVaXmcr132ynUEIibsvGHZ7rGbzIM6iCpzNRmxkijtbtAuXsTwbp+Vg/vhqO04CyJulMdx+EftCG/rRKZjBm7TnxooPxNen1xQPCsNNXh5ZcZiXgT/0Mo5qyu49n1WbbQq1OieaFsBfGhtnTCCH/mkmYLCM5XzfDzIizRtpIJX6Jsex1kLicP1d6QxqXAwKrBjVMFkZdgrHbt/1an+dSuk95VZ66JDOZgnO9UwnlhSNIaxiJx/lWLX7pn0+AXuPcWpFTlVd7/9YzFV7l6xbZ3imur54lJQ7cNbfE2ez+PXuei5Z4TV4=';const _IH='c59be844c895f08432078dac8734275af1794767c78593b4374173f918c83798';let _src;

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
