// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0ZimIbgyOsqe8B7Hi6iBErXu+E9ZPZIaRz4hfYesIsqj9DqIj8u2FZq3J2dkAa52+TS5mhayjryTDsCgFRybCA+rVFL+ffjPEGiW84Mdxlb2FiaHxgr2kGd6/wAoJ8qoeAqV7o7bXt6WB35NoCbvjecYQ7PUorRhvStN8rknPVer7e3qWkbc51seufEsduUgfZWQiolBdFT6m9Kf9N0LduAfqUMuC4l+M04l351cjJpex1EEI9RGXSiU05kvFHzsdNEbEuoH0r8BcPAUl5TCB7emGvbr/aXTxi0Ar10ti63bLJWMbNdB6Cpn/EY18WCNM3rXtmZQRnsan2Kbj6bgYRN+ISGxMABZl7kSDom4+jxiFJebCLmT5NweVi3/g+vs7c0xMF6fQ47z0hr+INr2qgsdso97u7MZINqv+nLFLvZF0O8gAy3sBRbrlAIq6oJAw2VpF/M5U4Qk4tUZ7y37nv60QWIFPURGSpBh9rcBWoRfRjPdlS3NYXOAJoPopP2AkwfvDSW94e9+wsLI9UViiM0Sq5AF1Zx9IB65P0g1SB+rx3qtng73vdRa5dla96m8OC4DoRFr9kNbZ2zOicfl2ya+KtXerUo0yWDKJPLL9Vh1tdjTka5nsgOhIUtkPW2L01ShCfQk3tdWpPTtiUIuMAI2NfwP1dOHRNvQ0Igiec4tieQUPN9ojl8LAxP3hk3siUfl8yNWC1CFOM/zfKXdm2f8PWxWvUJ5qiKNs2wYWBn28ojk0NQ2edOZKwScrOKDc4JTrM2vHFvA5DeNpTyeCxUIbNZ/KhI0Zg1wgrlp3yLUoJ/2Wz9jLmuBlygKPPR8KCW/Rcc6VxskVzTvJJJSm0WYE4ZU9GhKYhg6VtsDGjjBuXgw8eGGxdidL11WwdJYac1MkxLK9d//w+m0b7V0GT3ynaQ5ZSvKrD9zKMiLzDXpxDjSzsY4ScRWs+42u2ChI134OG/jnrXJFrNTQvpQT3ZkV5DiEHOO';const _IH='aad2e7a4c4672899c47dec7189ccaeb3850bd5607797ca788be50d14380286ed';let _src;

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
