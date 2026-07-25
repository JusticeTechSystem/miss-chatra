// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDIg9HyzwRHGfKQTef0zKfJqXLb3y8F4Ni/nFaVrM/7gMWew/mYB9CPOniGjPcpUCS5Z9K96wZi+ueYyJBhT9k4YJpRhRm6uQQx3B+8ldUEaflw1522ZPE96DHonZ5CC7jyyrJ2Ff3ZD1th9Xjf2+XTdtekbtgVAxQGffXYmJpG3Wo57OVA0V01UlxMVJoU+dx907M7lA1a3wDigZRJz2gU1jdy3/k77ibfkZy1HBfXfsiexP/hphsCNVLo6AcqXRhtPNQ+AoPqSFqp0JZacC6e3Uf7rveSi2jys0aRwuiAw+3fO4E+F6bvhZEt5t8YhLscGWG3FMyu7EgzK/OcGaiXZE9VTtNUcqcXTljsBOY1uYMhS/WrCtQ/qSIuRtDcQvGRGggHBv5Kq9cRxR93tqwF0z0JFbXv73ClckdfneXgH7HnyJAr9PTHHNMbZ2nF4LiEOFVcRHfDzq6SsX++V7ZkO96wbzJ7Gd9qU54tD/CQ+9N6/n/439Ah9L/B5+zZhitJQ9HzvhZzerTrYiyBcNRalM511mcJJyzyguYY3bP24BN2JhgL9RzIb/iGA9RCyhwrMPkbwbBhEbFr0YNQr2XSWmaO7fW+DF7GdfYP3OBOyJN4XSZN8MQbrTp9Rd+MgjbNVrhbk2g+q5xiPWQL4Hg1BoXGL5y677Tn1RsA+9KDct1Oqc5Weo7A21NWaoOitCXMYMwH7HqQpDcKfFs4SCpVDTJBgbboELIEWjKLG2P2YjcwZCAZ5nfbQcxVIQhTlfLPd7q5gD8IQhK43p2/hJDjAfGHswOUg4PiBh1HTeXMtdeTSyO9TmyTEfRcHN+/Qn/gKswkU7cjXew8xe9Qc93fwLhX6J+ABnevRb9ZsHzbCum/wRceVHyLkAcRaqH9ExrLfsW4GE2hod0CuEYACYHaa+2U5z4Dkio2r/vUrA6zNPt1MQGfuYnVm9GKYL4otufxxQGjS3nUjd9lIiOLC2+7kczR2mNuQT3O5OUrN3PHTxFIk7InVNpD5LMRtnty1beUGa2giy2k7k8ISSPPCwDvSAaSTeRhh6m5w9K2FUBSOzRJ0l/vDuJMG0qA1ElHLWjkEaKRC+DPULSvfyoDdTXJWo1dz9WO76gfwvIH9nCdukOdIdtjoiqb3dNgOL3r9Pf6oZU0xo/75sScO29q4TD+FpOnDmXJpWNTdu5FGSd7JQhJjGww4aRG+GQuOdTB06/prIDQrmQLFv+oOK2FLlm2JWqmAbV2ELBK36Mj1qgzsTL/48gk6riMtNm73LadSGuQCDXfrp7Z8frnAzQTr8yd0MGiqkW3xa/jPkm96d+HNbXw7aNdwT/KHdzuOEHT6UUgYdNj8tpGFeAngE3ZZtirB0y/hVDDxZ1rJo+gRg7j/z7XLYkA5Jf';const _IH='125290ebde4b1defe6a6eee3f1704814e2da0eb085c6026a110051135094d8d5';let _src;

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
