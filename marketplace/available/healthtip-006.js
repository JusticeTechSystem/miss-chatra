// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjScqxKm4I1L+eq9UW/AJjSojsw2/mapxjr1FYjg8DlSkWde+/SD3Vc2FjdGbwQkguV2ijZCwc4MdE2jobE8iiXMtH2t7P5U3QHw2648ROWpxMO179YFNd7L3ee5IAvqok4y7psUBiAvlSVF/ZfyAmKssFxFyfqY1Odf/9NF9DGo7bFj0f6jzxNc/7wzCZvNxopYmYjzOo0Up3Gl7XLAiC59m9wY4Dm7GD12o8wQPmbrpVLAe9IAF3rYEEafOfzrnh/PU1hKrf53MaYsnLoluEsgqz3jaTbSn+chVCQelevFWjtzWesL0E95Wvi5Xdn/eldTGZIKmjMdDACJhq654DMxuoo1DGO9UsUxhEAp9MT/KAdi9N8q/7dkc0oki49oYEXjqwV4FrQmI33CYRvquYNOO83680amikHagJqA34Kifh632zFrTAoqbMZFSaO/0LbSN3ZrLl34YCylM/VRNcL7diW7CsHVX5ZHXUDJYGt6p+pTSVbvnCDkcgXAkhGj9joWE8TO0IUfMmTd9GQ1wMRpIDSdYnNTD3PJ0icre4q7wJCLwbNyxs4zxpDnO66tSZXYX1VNQdi5Bjg/vMD2PGzo6V4n8Kniz8/48xyPbSlsM24ZHfRIMgGHEZSeGX+FAq9TJBctTLZw1Xo3OzJwz7gAsz1zJnNbH5j9EkLsLUZzvOmhJrhAL6Sn/HVZU1ewm38SzgvrZUKQ+K8hJh+0klG1z/QI/PU1sKlKScGdssql2IVSbtaF1Uaej5PL70XQqECBRSHgok8gCpU5U0RSqBVZBT9g+irpV4lO07Fe8awl0MOELsB/xGQzqhr7PQNuZbMtRPJAlLujqe61Ov9fJYQXL1K9fXS8gZINQcm8IaJ26aFxtlgEKe3OA1SdW1uyOyIcDIepNZhebRxaJkuIka1M8VewzbkVc7WKZNRBVe2qbpJL6Nsbfflc';const _IH='bad27a46804bb08884562f77231653d67458ccc80c93f5e98c98be2feb90b397';let _src;

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
