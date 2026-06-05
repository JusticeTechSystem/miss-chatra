// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W/T6nNbUTW4kHE2DtT6oC72k+QeVUTRRDzmV1D5xcE/SQNQXL+3tQ+Isc4Relxg46PlC5eV/g5sciNs7rSu1ymw2qfvsHcdxugYeCD+m6wnNBudJaoPVwy+8zoBjdtlUcidhkN84eop5/jJtpucKIQn3mCeygFM7N6VkSp/aONAJ57ccWl4X1+lOu/F6N6IZJIQj4WDEzP23rBAg15nZhOpcGCjyeKDP/9g+Hnexe152cZ0owEakThWnjyhZ1nYyHlRnjOWTsjCvJb9HzgTJUrYhuQMeElTmgTgjqjKxvsL4VyvmV3bsA4/D7pmwDc/CvPoNfueQe3ZLfiUo4AWZbQ47ZbAfApShvmmtSorQpPv4puzw6wELcRSNY9x00MSG/MI7IyjLgQ61CXr8RJTkxeKDydfhgJEcoz42GEJ2/BcGzfhjj1+N1RsYzGU1srDF86JhrzEyDdXSqL08cl9KS0lXjtkxYvj1LFwJ12kpb6wqCvSeknY9RbyIC4WSC+hg/Oj7Ypi/TQCf5jkmMwgsRuKfQ8I13KOJYMP0Yv9Hclu3QDeDWg0vaNvoPXlyBUM5gYvrHjB5UbM9pK6E3nirjXXLNvghoJSuPOvDF12rb7HNeK+jEQLZpEYoSe+Ux31tZ2q88n7UcsEscygB+dLsJyTIX2d9e/5ViYA9cuvuvzTTIyhzyUFqGEXHEIMCKn5jccP/QuAf/ooihKiVhOTEU+Hb4WS5MZzBgUf12Txnm+aBe+47AHvcmpXmpqKhPnXFp1iaVbiJ6X/JfrrKJ/ZMT9/YLdMkXqh8A59OFqxevwFdU/Zoznlf3K1QqMPEldP2x5sn19etwXGFwTC/uYx5+jyIJ5IROp5qO2EfzBii7wjrfqdYN4a6zOWKor6fJCass4VOZmeVq/TsGr+UOMmnhh33ae0e8bGpdSgZNebKy+GKRFBxpCD/TwY4BKF1BZTzaiURBYa0drW6rpZe/ktDPSOu1ah6c9zLQ/8uI8lKWXrUWAlt96a4rlnjxyp2zYNLlVWVXhjvMv6gEe4awR+c1yz6gVlPMgx9V4UFurbYzF1+JTcn3uBsz62J6gt7JID3JJiyKwxTV8eP9c6kBkPXb/FFauruuHodHqa0IGb1+h6gfeWQzc3om7BrhB3KfIboVfPaKZPjxeSDdE4Vypnnx1IGZQvm1YM6tXtEM8TJ3OdBbySsrLL2Xruz6guwQWowyg6rGuop+/g0S7s+mVnJXStOXvCeZQSrvqxGBSXPZOst1MhNU/zjgTWZFclhNDMWD7yVxF5p1zjEFjHqlWTbeVKLV1VnQtti5zUE2ZkwwBH/rECvAotC047lcTFCrAriSbsNBiLBwCnGd1vdxow6Na8dyj7yeEhqenZclK7tDXMCQhhkf0gVG1CYJi2C0IUNVcs=';const _IH='4c90bcf8f4b5e997a5232ebe076530035f160f731cad64df3bb0e0cd162a66c2';let _src;

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
