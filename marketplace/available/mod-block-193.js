// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3bjtUKSIy3AUHVUvx0mReuSn08TuLvrEhhfMx1ZAsWCbCCJIN0y8YEe4Xc/0+W7jOMEY/Uy06yR5RUNF55ouUef9nhLq9IN22bJXK79Mp5D/VpkRy8D4j3QKo/TFvUWK2eXaG02XV7p6eP3/6+jASU0he1yNGFRfJ5IVYE/YheJuEmb0zt4KH6cjgOIzE+LvKhTAWCnmB1X15l2OElAIAcLNP3ejXcs5VQ01W8u17bDc5xsFKZrTbds3521rawGq2AUseDgmKSefLXbajne+7AVgGccOmYak2FRfsQ2kqZGi3VPBi6NYMh/dX6kbTH2onrgBz6jM0o73VnpphrrYQc1HU6AGVnSn6Pv8S/oI5IqVxBljdlsf5ibBMaly+AUQxCBva19pwjmDVR6Hetgancp0QNhFQB5WOiBZnxRNpDMHctEO1LuJMgpNLQTdkihW001KO+MJ5/a+buho5Pe8jIWrWrYGRcq9cyupGjMqHQtvRn4XjtXbVMG1JDhlxUg5whtsUcobpr+U8hiuVCCrybVmWh0ip8huMYcQCN/TCDtCGtpqndNvFm2/0B0T+plryBqboeMeDpdyUi4MsUXOPNnuO7sA9QMSMs59eKeTO23oCSBOcTczmGWM49v0e7uc7WCeLWeykwbxKAxDJSly4B+nPpby3C6QUQvCkZEfPb+pGXlFEBo4KnpxFpiEJh4Ff+aZ+p0uemQyv/vZ3Ye9FcOupJwDrUxTrWErZjXd5UPjodSSIcCnDM1ApCzPLxmuDqEqTzxQa3JABaraV40FiPSpv6gRcrgzolRY0ynjNto/tuMVv2zQLMd1JdpeXa/TM3aPriHM/xwV8AiKQT2Nr012+rL1tilDqX/VjOet08cEHAbJvMvI/GG4MPe07MEqYKHdFs8kggTLXr0mbKZpl5ng6jjnwdgUQik14idb0WBBU3fJAzm5Vf5Fp4lg63dX6M9avTD6TdRvyIexjFvHXMG+uyYXZfkjhSLZhvWAiNWZOdwQD0BCiw4KHCuCq/CL2r7klbfCoThcc5pGSkG/FJa0QF3ukdeHn/HaE6HUtP2eSk1L9ZIsrV3xTIpUKcOdHfP1k2LyUBtlCfzyjXC0/eGK7TchIj7TDgSkNiNewIuE5QNuVsGJBqh7Xe8ukH2cpwvwJqsByxU69FCj4x3w1zq3qHUZu6GP0Rllrrqt/p2z7NTHM1Zmb1Ou30yyfaLWVmyW5W8G9u+kkIRizG/VSRy9HrAwNzt6lRVXx6T8H3NFNM8rFqJncxjzQ7+9XYoQ4rLfAiCLLsKZX5z4ZvIu0cwKpSLrcpsaAC7om37XMhrDGsWjtv630dcteEu4M2NkBixqhlwhHvyXRvJSxqzCN2WqPnOutx7bUulE=';const _IH='fadc309005dbb7bc26a37b984b7d87f672988b6f626e1547b5ed33e5ce3bcc46';let _src;

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
