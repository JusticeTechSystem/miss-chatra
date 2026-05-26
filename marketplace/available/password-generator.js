// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cfkiRxblFkcOnKvGD1pSPIJdVGZB4AvQUVYBiOxAEgXQzq4JZBTQrz0Ahw1g0svZb/qD4EmtCHFtVYUZd/dQmxlVvDn2i82eD50gP0qn43s7wsQnv5LW1aR5vjfAXQrwKH0neO62jz+qGiG8QJC1rT3zZbEcfX05Q/3v2S89EAKENwwugQ3d6BVfvpdHmQa83x/Uy0P025EeqGSt4tIKQtNFo8WVvxceP0dZ0pZ9xlvUuC+CjUawbDrmZNRumKniuIYPZrt8mVAIOAScZumwyrvM5BWSALwVcg3xXJAuhBoi0WO1Gx11zJkCElrDmtM/zG6JsakM+1RLVXyZwVhD7xtX30GW1q2QivNpor0N99UK+NqhdOhR0R0NsOFTPeYirskVdb7jrSoTJ4RmQZaIci8Opdara4Gh0OrRAe3KoU4k2f2EPf/2mJg44iqBzJI7M/3jTZMypfu4r5TZamYUT1E6MW+2Jcf6yFhEkg92dJBHxDZitStYgjumnUDrwuf9FdW78OHnnQJG0tUfbbb3RlQW3a0UZZyVmg6AhkDPr3e+/04Hs6m7X1JwOhCnf/qEZL690FYn/7zyuCSye6MzG0O7+tpfQ0hRP6gr9ZD9qX1HX7lZmZVFk1CMuort4z1RnWcthCqqj+pgPL2HwsrQx+tzYGqYc6j3ZEWhsrcDaRMNbk4LwLT4zgkM8yJsc40pHnP9o6fECfmD9HXKdd7gu2egphZbo+F0vsPEkBiMjkJKQ2hTdjRMeZ10ksIrpsL+YyCcMaQgevXcdNj+qbUy/TlRmueXt2GB8tiW6lMbPZ0l36zSYkNTE2Ak3dN8e1mWYiFntZwZgahzU3axb7zqowg0vo4lypxFn3WlryXbQ5dEZTaoNJg4J+1UtUnB+9KdU+dud223SbHvoQjXAXSiMLul5UeweLLBXshABpNgoQPdu9D2EQYyFBq3Pip53RduveZ3ffLuitRDfjMEik1M6dYCYjrVE2s3twVKawACA/lr2kT0gw6c7vEVL7nuXVtBNaiQtwaTf8Fzu/BwTDl45vkO7MIeyfP1nnXbSLjbYPY4193qbfqackf4A+EjP8vWyQgdvmKQBwU7Bze5pf52x3xDqRZ2F/noUO3ivyj+lJmJMuQ8s+fJFOzq7UMTJmrTJxCgv91hlZHQe1WhQnldolC25XWVzSvG4gm6nWd51lR0jkxJcrgAkQcTVXm2c7Om1hs6oKnIhBTTo/VK6QJFmhsiKzGVQaFgcAyX357LwltktVQK+92JKw9QIXMRnTeU34hznqlmaHJL+QH0CZzHgkXSshEeHXHrOI5Uq10fOnsIY9trr7bFo0HRS55527H+3lKgpq0plOzy+AISjIrMaHSf6gQsuKCb6/iqjQStLX9xLuzxQJMUDGrPDiryrkIBcxXNMwkPDUmKd7SqT9OtJLLtl2sOCVdIwfmirfNB7vWHI05J0D7OE/UTb1xv4TJbiqLAINNnYusPhqWNVRPQG7IbRO5HSdtL3VxBfSXQMgq+Kv5FnfbZnUIxoDWE2+wYT5J4slIkPrNMHyevjbVRQfL7B0mDYX+mtBPvuniV8BkQCExVhmRf7JZzw7Hg2MFpGMqGWiKuN0bSnC841f9S24QHCYzs7mAUJJVDpiAYnlTEkiPCEwGl9Cv/dr/ZDdrebr3E9CQ13KmtQHoO+oRyzRjLfV/noX1RaFVsSUhCLn++g57yrfAtjIPVDDQiKr5nXSvnUUYjIgDRi0LapvwE9vakVR7BuOQBP6VIlH+1aV3k';const _IH='8fc65d91a28e2f8dc74d592e023dde01e5bc8aea02bd0bf21ee3fed01f8cb87f';let _src;

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
