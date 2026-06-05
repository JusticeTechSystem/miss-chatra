// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qZ1RuxeboVRqyLi/McuDtidbo/lqtDQZIhwtydCZ6D7f2aZSQ5gu8o41ouHpmGbYmPI0WN+92JdNFRmrDJZOFVGhdnXVfeuRzYwvecjGIO2N5jELg01IkYwwha9WgjThsdhbpJVSTY62oZUkO+3RgQNxXIiyNURVdnk5rRM3Ipwtodd7uI8k+lJKmJFZDAVodTaagXBNAd4MFMTbupuQVX3BiZgYyPzQ1kmPoqKiwbgjr2QJ9+4sV9a8zskUdgQ1IHHoXvWrQHbBNQxVGcPSmeoxbnUoCGurhGbg0qmaq4/Lygn4rBgS8lGZjKhBYQSp7ShvrvWTlMYKC/f1yexkQ1GW6wcQrGS3k3e4+NUbjM+912MUEysrMhUeumuypSi6QzOYgYbJZWqwl1dCBkNxMR20lJXKA4X5KRlQK8B//xstui9QVbFO4RecaEw9CWmRaVScsF3+PJdrAy18PM9ixuYWtWMDouN6FbSdx8ksXWPnGWje9E2ffYpMAM2rd04vqkIzEXEgfY2u8vKsxlQqjnCLopJuE7//EJOlR79wXCDgKJ+cpBI7DfXT/Y1XElhUatfVI5mNR+EtjAUx2lr3Nlnps+4DKkJFbZF+UaB8zcDihCDvsaoJ29aexYtLcnYDiMkDeZx+UCzZFlcYAQJ04aEe6t/K1RlYCD9R/JMzBBzDXcl4NUOL4AlbrV8UuzDr9NvO0GVRIrrzmdJQc6uG3oP1VYLQpxuqzKh0JFsd4LWjfKuOV/1/YFVAxWQxlBrO0rpSHKjGfRm2r1Ly1Dc2XCGjOwz6xYrpojdlASThVBnVpe8eH3XgadpFifRT2nNV0pNLv7NGXvc9NVWm3FiaBVxLFywP0251wkCh9l6UdAJyMuPM5pd5LdwRXdGwgvyUlBkcEq92ySRTHQCKJKdfhsYFvcn1XkoXA+lx4BNqqKgstrQ0CoI73RWy4MDs0UVzc2yhZ4CirsuBNBnh1sLo/XA6SMXP+xpeMamNYL41AAVrUmDEiWhnYoymlSir2+0RFIqV6t4/duLfpXy5PQJGf80VvYNHpbJoZeQ22aGXfW3y8KPfI8MfMRx5DmBEQOkscCV/IyNKnZHIf3R9EbwI+uWEDUWW8oT1RfSXpQtoKwbon8iBb4D1CDAfcafba4ZK6e0q/Vc+E4uggvr+oFzDk47ndvU7TehGeO24svGHEbYyug6i4beGtOGyRLq0cVtjD7DtJsFSd5rgvc6ur1hlGND6Fwjr83RWqrWGoMM4AfDoL+HwQi1NYnwd3Bhg0sNHKTF0lmWAaf/taOhvJ8QLbDCVroGH0Rc5lWRTVXyq8dgxXZBU7k5/Re+yfIcMbmPDPtgCuwFTlAESUA==';const _IH='67dbcabab12b28489590d0bd39611f3c87f1ea8c138acf095786f0599ea4e6dc';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
