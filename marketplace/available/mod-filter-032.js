// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0vYc3b2lxyQo16QVxMJpd6PIx2UqHLGYsL9YBRiYlm4p/NioLsONXRo6Ar/ADY3g+WLUDG2Ex9Q7n7oj55sMgD+bwRZb2XinmDUtMfErXNWvVANvUnO7HrX/b2kR2J9raQBFShmL3tI2pQm9Vh18sDTnb7Qu5Q0diInr3u+q1WkStA0DWskftBLIsNU6TxAYvTr2oOczl4o5xgBsQKgo8vJJZJ+CFOUFpBr+pSY/bJyplyEg+6LnYh+or9iQ+Q76GKnLczXsjKnsUnJ5sZXip8CKDkTKV1NcX/no5DI3HuT0QY51BEYp6ywolCI07NhY4SKs0TX8wDajNY4g5exr13XpJeDDdcJD2GFtxi7N0Bf2jUGKnEnKYOvaX5fuvUXulPbLVfMKbaA+ms59MXtFvnGVTLHPvoLWailfeudtw+ntfVR+WuO8WHAs31BadhWlLkD9vtT2IvchSF/zM+LYKJRK02uy+T8SYc22JOE6e7FjoXvkeO5NJDVY/ZtKehPgIOzNmXjUQAaMVXEz2gbvoMkLKLt3PwGOYAa8Zxd8ItvozrE26NspQGRnRrqjTsVQxPVdPh/zRkFCcQsPE14N5F+CgMQg+DKw0FEpemitpfhTrgTO19vp2STZOhcn7PHwU9VQII25f7RrOQrobjKR7FQ5D/8KvTIvaDpbnrVjYsmlosFgPAoxNYHe7BbY4x/GYH845m0q9Wa5G890SYHAXTnA31qF/dqcGoL/ZQCyX/OlWbBjPh9e9peFneyQ6j+6IIZXi6tAErq5QOTPa+yGm0pPj3XJEh7ISBceFBq7yNa4wNkwcBvD/7Z2h5Pc8K1EhjmVh2MwtUIh0N3RIiL3gZpGgqXQEijkPcySUfTfw3++DbflSH0B8zo9NYM+/Oqznap6Dr22eAmD1mJjQxewe3mPAcRKUWdEQsQe8yx5ICe//De1uD3Jcmw0r9cBjfiYOhQRr2H4OFqAfKLHhT6wcDAo8PwqAryNkGMilWB6AwPMSttVSqu9QyViyx0BvVrkO37Ihve0qA7B6k3EfHRdQoG7AfxoFaGlSGZYwc6rdIX6Ja/WKvOkyukQX6zd/P9XWN1VydeyUs/ptF1P5htHjdb6ayR1E7EYEtCV1YDI98gtB6Bj/3wFExUy5pyeiPMSLpJcFiMZuvoHXAcrDPd6xDGCzI5UIvtgO4dJEgn70tpFEl5k9YCCHowjCOe8ggTCmXLt5jCm2+VlyvG50MhQsZvrTVgP+iupXU3MYT5JDHlM8BAF2J4JJ+2rQNjtDMkAuEriA+XpuQOP0gtlRE7NcFEQM8bzKEQku/0Yxd9Wmz83sneoaZ34SOHtACeIQCT1HpoiLvJpqz+BpSP4X64qmoCuB781RrxZA4+XQYQxL5ReUr4=';const _IH='35cbfb219b3600dc77d7ecf8e077177ef2bdd6ea012a59304f8d03a82d425348';let _src;

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
