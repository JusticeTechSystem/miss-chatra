// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxJ8vGe3Hfkip0wWMxn6BhchaPoCWwcfy+oXesvEUBwwJ35qxd1UJPQAq+Bm77x7fSK+aWZNOYvJ+/302vLHKohJe1OTmfPPrU64C9mUDZe83aF3usEKIVaKblA5+7aSgLsTx6VspKAP7/sLKbv1LJUjwpGXDlh2fqo/zKn7zZa/uFAlb8lopuMClmfpF/jJg3KK2FraUf5tehqit1CWBFHV5+51kpfFWESC5uR3oaHB63eksj9Dj959LujBu/e1Oyrytp4j+kTt9v9ISSrUzWlwdl1USLo8FnDMfbbGbuYbsFxkV5NNTNZha3U4HQZyIr7GmJ/CNeZKFovz2eW42KNQaByea1Gyy/ZOFlm1FcfhYzspr5Qdd74/xZOb3Xs91X0qjWiGhk4MWjfA5iPkd5n/kiyqeGcDnWh+LiOUJ7eTgXieOBpY4ARNk7EuwDIh8kCYndPJaOh5cAA2G0m/0HqqCZnR1/ZpnJn+91aHADyfU4XQOQSFSWnD+MYUHj5hTzPjtQabEtvj0SgmP9FqTpjT1rsnThwtzj2HjzVnMCo+EYwpJhJZlJcYf6AW59FFFcsRCGYAAz/vYCgnIFoUQFpe4TtvqdK0yHlU7m+bdeuxurtgRwstdbz+SVuz8eQlRfrQwfTXYnu/Ktow1otrBcZYCrISg/yuOvO2glNC10MycLYrzGhdcYJUci30a190PrDJh4psTxN/z88LEKJcyWHsDbPRD14hT05o2e4bIiB54fXNXlRSTtg4BWn/9n/4z7sq2/+HkHbehFdPObhJdLB7EH8VbFUluEFjWxJi04e78KzokRpltcY2vrSCYrEg8fNLAtMoxpaLqO/032TYRMqq6+YfFfL5Wsw5fL9zCcvGGG/K8ByGHyE0GXf6XkQ+K5klt2OTfabgp7NVHKJ6d2DhmmiiMZPWgRRyxnxZGsM3byRCk6ovtK7YeIzI5Hw63lc18gMfQG+gl7PcZb/ShMsZTbLEEbMI/l3LX/uN3wNDKyggD66YORwUGO/0CW3OF2OMC86enNYY8IzrAPKXgk';const _IH='375d0539aca4500f7851c162591441d4a4a6f8831d7e78864d1af5e4eb15e8c2';let _src;

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
