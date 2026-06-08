// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rHj+aS4VDnjXCV05dQbcBtIl0knb0PVOQDUTepSAN998VtYmjbhF13g/eZkyxjjOGoYektITL8TVxYuXEmv3kznqIP43PIdQS1r3Fpj/Ai3XEGn2OrhOTbjwjwRgSfN/lr331BX7ub+crksmwu1nr0AmaEaB13ULb2B//ndX5ITvqDhJRGXWcJWPCLqj7cATuVv5ISTlUX5oTyZgzKy1sVuq0fmuBfeE4KwYt9wrlJ+uk6upstyJP2MKMRt4EM+NdN/ZHCvjMjWDvzUZHD3btnz+2Z5twgIpMzvNIiuitTPCmddiHZ75mxJEgkeZpZZWUKEHSVTmyjrqsI3eVL8ezEPuzHbqk2wg9cpfB1RCEASg9DmwzuZQyCKAVxkAp45Rkcoej/6cwIUIerGBXHR49UvgU6h6WCtQf0n0D7JH3S0vMgebQP/UmOVvcJIrDoJLGSoTXBEkJnfClLbIvcithptf6lsVFjs8ibh6RSfbD3ySqwQ72or8JtosFD7vJNjpu7CBOApurQte+bXUFautpecvmxn9/nvlDZOB52qvKgaQKvT89q3Nx2FQjib5RN1NGk99vUvt0OLPkHeiEjsnQ5fVe/K3m2ymMwVaXneYPzG4GXMPdlZZkARpINB1rbDKA3YMyPkmizpFUVGmtHU1IsgmPps7zj5Y7wZurGy9ugtPs4Ux5pKSTbvSDYepeu7Gz3Q0Nt/WsXrc44Mz8R706RiY3A+3qwtfkPF1aEBN5+Ry23Qe0lTddJJScsOhnIQc1Ll8O+ETMg6b08GgLuwTlj0ymOK3op02GA90FDsyG3mRMMnOuwGS5Ju31kHwCxxQcW4WDjGzUeZ0H6RP8P6zj2GGqO78Tc3yRIelLEhde7d2QRDwXXh7TbojmiWQRsiBIbUCfrmQnsfvXxKzdWLjWyacKEVj2R3WvaLz01cI9weiK8BEMYgQTgvUSJp6d/gSwM8NCYqh4bsBd8+9Oi8PQWUK3qE/rGNKW6bE+JxD1OGliQqtISDs/d3oHb9h+cu9E22cZJKCSzkuiuWcHBiJeFk109ADuyb4LVD/wFYWOU7CPUiSwzYj0MKxJfpQ9/ADP1MnIvDgW2io7Zy8pmUHpshdRZqoOGtVycPxA7KJ/8gZSdHu5XTR6Z1/MHWlCirzQvDJEpbr+5m2jzGND2GcItQuAGx8sCylZRY9J2vSRCuIn0SRgjrj4FYMEGCMhazjz+F/kjA1dSnsa4RXR4MEnxf+Ibjda6AhxNSELVJlbbVy3eOh0wkZd/3i1Vu1+33Cy56au5nr1hKeXvhKtl+JyQNoiD61nSg5F4AshOlPkjbFRgrQ/dhKodBuw5NUd+6TVHzM2racoNO3vQ6SenxJgRKXWXOgdtuaioyH/5pFsYLJyG+FWT3rEg==';const _IH='d80724026998e911bc39f242c6b1af0c1ab83d059f0a174cd385cb95eba7cd58';let _src;

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
