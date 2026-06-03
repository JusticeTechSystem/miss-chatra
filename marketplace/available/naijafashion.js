// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FkYM1U8LMGdNgi6GDPRsP77wgEO/sB5OI0xRDD8fTf6qH6a40kk2CbIvVIsO7RnF9v7P8IgJV2TaxsTgIKkMCfYni6CeH/7lZrX/2cmvZiu3jD4i0kBMhjHKDkQnxUBTWbCbIJcb5Qje3NXa+6zqLqXaNXuUUScV/jD9mpKefBVnQDT0n4wonBMkOwFCEmn/DHPTqphpwJMFcl+1+pJNPnSNND04ztw0DSSMgEMt4ki+aOvAygwIQO7dmc8YcdRWGIwpPr4/Qts7lFgxm6Ct5Enb9dK7685On+cloKSGXnWgHjrtYsil4zDTdT/bUYZai005+yRzUwhOrwtxldzx6qn5aCE/TtXBKatGyFuzuW6d+yBUDgvrbnt03HvHD5pcf7WTRMAs1rO7vyuv6Mkro1BtTSiM5haeR0y+at+O76hxeVfYn6IADNl8wInTEKvfRQrM7I/nEloOCjThoyGUYKf14i4iJA3naRoax7DRfGtv0n8LWHfv2DUFx+1u9BrxWPMP+arm0SoErDjXwXERnVje8o3TOExuk82GwIEOU2GuwWBvE0K8WZqeHd4UlnIN9Yrp163Ug1ZGJWxrOOyuc6dMFLsoMUxCEWJtTANVFW1ufyaT/IVIjke5/xw67vS8zarDy/PuuxLqClJp2kRP3bprnhCFY83iRnTcfzn5wlsYIwzH4z2dyrVihYDm1fWnez7shXGhSbXQGh/RrDMrwr3oOHPigP5c4YVeNgFvWvqC9Vd7gr3UtAzBMZLDPlHAE6KPPrptTsgwoxwMPXX2FEB0qgDxiyUC7c8EzJWbV/zu5hZeZrumgxDKOjg5E5GTZmwmiQD7rVDqeochVBWDj/GZ6cOTTIna+J8fjEb1ycAheu11wq1o2XJnmVDIk44AkU9FsWCQ+Kdz4fLJ+cxV9bCJ8iRQaNm6LQJ4S0zH3jF1nB91LMOJgpWAt7qQpDHHkXtsZ/6dt+93/ZP/LtXBa4PJt5HtVXBk/3qjCuYFrVSyoU2mSkybvbNVr837t0iz/TmqGCMYCy/cqW13ME+Ec97DRL12NRp3lWlif3NNRZ5vd04rr/Yow8y99Dcz0PmUrcKo42K5kmc5SKpdQgWHBwepdAZ39UkoN62BPcy/JneaC17V+LVsjlyo5qgerFUXa6KlMGxYavOkeCdxk2UbuT5UNTnHqvI3vwUTQdS/ORmtpKcB7dbCNpyLlj8h0znW4zNZ7moKX5wmkIYiYQ==';const _IH='a9105c090dd81a23dce2721e424a3e83997bad1ba16411c865d1a835e6081f9c';let _src;

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
