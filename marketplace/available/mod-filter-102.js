// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='znmFG7k3JPSsrZR6psRkjfgCaiC/KngGvokRCGb3vnGp2Sx4rkztpVotv9HhyaFuk3ozX6NC4oOWa8Fq6yxGgnEVfwnmQQ7kBm1ImCqkP1s+17pRzbIpniuOg8jrJpihvYak5DTsbANSIP+YlUNLwhwYA6pcfWO73dEvg4r9oVMKP0qXZGTQJCCahihwviGyuoPm4/EnKExR2yFNvli5iFlEU0K68g95OMrkXSg/+kVbiYqnVCiTYodsvLzl1Oe97A8BKohwCufuvL/bbohScsP+1VR4rtenjoQiIZX2Y5xXNFQRQVd7WNgyQOI3EmtIX6RD5e0KWJBSNMdh56Sr+ihvXePuTfH+89h9ww9D3MPV/rN9sHGLb4cdAymnA3bgZFK4SJThRluarqSAQh7aHd2DLurO/cIRqger/vlWYi15D3QyVbvPLQZHxEQuYq4C9djhRULlFCAywr0/EKLv10Qw+V8Hhg1LNUxlsZpEgvj6PtDjnEHgb8C4o0bNYJ8Md5sDTGya1Xd4ZeapLu08+PAR8/rZvGZbxyyiYT5A8dXSPXEcS3rKF6u8anT7j6IQ1dofrD8ZkyIbvDlpU7xnawcMG4wUP13s0t2V1Q5DNitkuqGkcG6kuMG+17pxghZkaFyz+HSRWH8/M0qoUHkUvXPpD/XiHfyPWA3zM1GEmBMpSbJFbNetpeQ2TCcRfZFNElvguZv+CRy9QndaTYJXzyRE0XRLOEHUWf0o4eFz8aNQSoqruZ+QLhbYpZYXeOWCknDcWmTe2L7fsUE29k2LoAA67TQVUVIW/WfFQ6Txlh3Jd+6GHtQp3go6ohb1AL68azinfkUqydnb11Au0KcK4RpJ0HxEgGtAwQeFhGRboR/iHEzPxLoycTHP8Gsxw3b7ty2RiXznZnoxWnWSwmymNTmbndUxQHeefovJtmCmT3Fz/gjFZ6XumJr/PLKYfBJpfF3tRiqxV8PW71wpyxr/lkJ2D64/g3YTFLrASGZgKPeEZyKA/9xGLcpKqxuGAlLZNSLrFx/PD5ZA/OaOLJecSD6OknDyyj/S4EnTewx2L92q4d4j+NDsnsL7/0yMB426jLh0WpcPtUV41eTl8JcFcLX9krvu4GMU4XXDgFvx5zob8J95AoZWnPkaH62T0hm4TU0urJcDYer+mjwxK6tREZf6Pn2xKDftMTvZtTyEsMjpUL4JSCUpItWJaEQn+WG4ucpCzrMu9D2cllN/Y/r5hGwpP1kw8+ywrLvHrxCYbSEu+LqNXOLThzVnZCgLqtTunYTB7mdGOc8TPrJUTxN/XJp0PjoSX4lcm4PgPQQctcpQMLv2ipr8mcSHQJDiwy1VSvp4CPmE0/jZlzufj4NL+TRDm5IQRUepNMr+K+dBWVU3aSrw0tQ1fw==';const _IH='4d78ce11cc05ab356390847a3f6e40c243e2ad64ebb5a7fed859b2f3fd4d633b';let _src;

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
