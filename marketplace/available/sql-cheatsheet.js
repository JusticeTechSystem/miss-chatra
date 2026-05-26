// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Lh70NW76ft5DiZGthWcOk3Qrw9RdTFr8xPoRnrTexJ6cpifRmWOa+BLlDMKFbpVMAyAms+tsFiAjvTmdabBkMMZadgAoG2C3FO7BqU2+Zp3T4xiJEj7pXDISb2nKXO608/4IEezAK/zGREc4mryCSt4VW9npw9WAqjfuED/JTL0Zrke+7rJQ6z2aJbYEnpVBpvixqdfzurK1whJJkB+Ef9QGP5x2lk/vZ7MmIOfiPhtpLdE43ONrm355zuvJQEKBJLkGTXLvzhRzfsTX8AiIpfp+ImIiWYMtTvpKf2UfnIz/B4VWCL51/yYbwk7YM975+fzqc/IXZhzxLgFppylgJ2uRr3DGlst9GDjkjxwnyztWTHRYc/HJAZ7Y5/7imZmz33Fpc0MeUZvPHAplwURujKqEbyE8yd26k++aCf9ZX+aZYMqo4dHwvJhv0JrtCAj9rErVc7VG8H//bTds7EaStefYFH73r1OfCJ5BpyYA0ORxIswRS8RnAj35+kEDFhJHbZApw9X1SUG3E/wn4uQsEOxbk9OG0+kFSicA9azFiRU6LqY82ako4IqdqG+p2ajHPV2cU5tjHOZAjrPcU/5naXsAQmp7nkbb4p26GzDRz5FIXSe9QvsRP8IHExP5ROvA8p39BPKUzBthVG9sRd1iiEitU6mVSrVXJGiRanbPk5d8qko5lpipX/9WKnSPe3PdKayPexccb7d5QkDZSFE7V2Gz9ElohPWAV6wzWyrRn0dSR8L2On12Ve7SVlZ68sr+aZKFBI/s6gjbTPy8EHGOGswq7sIV/XmUCvVaQZ65P9nlZMSQXmYw8sg6xXQ2XVHbiZOIGFBl8Zp8xvmoXMw7yKGxAO14X8ffrJr85MXtMrOys1qinmlFOZyxvFTp/PuxfLtCIyRLLicD80ZdcAXcjv/1nBmotxhDT59D64q0x5MKQmr5+h4GNd59KhhjBuXIopEyZ2zxYwxC+sqcGfy6RVs5zsM0NBflQxaYXE9ovlDOGfqjV1CYtmwRDnRMwInqL1RbX/+a2sNl6Sw8eYmha7Rrx4+r1B3+IfCB/t9tgKgjyXak/oWnfUbZLtRUDgB1ybeK8Iefvs0a/+wA2u9AD9HbkhJqnQChxPe/MfmkDpGjj9a/JccbcUO1JTDs+/nOZw0f3o0IqBkWXccAATdd0dJlj9O2wBeAZkqGQVvStTSQQyhVpxVzpIipEtUcbrgvIb/VetsmI4vBrZU5tjJZy0ASgFR2NIBRqv5a/2k2CMq1T8IDjl4Zwz8nPhitUzGndn3HBmwLZaEXTUs1qP9iDml6xNHKMSQNq/xeZ+qfT5KSmSRBJBIKGs1veyZ+vm67KZXS5hZ2Ee1LsRSxoof6nNqGrf6gfhPIcka00zkU8+ccwg1yS9rY+hpX4AkPA9wtD7PGefdu1V0vMTNyGQ1YKBsBYWxZ2QLpE8UYIh+s46dp7FTchq0iqGEAFP+6B4JZpL1gVcBy83l3r+b89ZAJWSmd6AaS7nhvss1tJZcLcMJ+BWjHQ/L5qPt2Lk08YjsITnojFAZmySa65l1adhpthqMKo9+4GyTlCq15Xffi62zqnzPwX+nKpn6vxY5Q8OYoKBkzCBQL/dFUKiUb5vJSlr9hxyW5RWKOKqvRk698JRHGTrgRJJcFMkEHLpX6GNTYexkehYxQKtIv/8PzVGT+J8kk7qBPYVBkxV4Q+Aar2mFj8RNCKLLaHnrPPva/LYqEUhE0JrHQVrEyIk2tyVc/cMAMzPIvnfCsqj+71RwPvHn5DomF8eNQOPRAb3zy5LC9fecCsLTKdw=';const _IH='e2f48d9259435f89ce3ac4af66df9280a93372216704c3cc28935872a5140d43';let _src;

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
