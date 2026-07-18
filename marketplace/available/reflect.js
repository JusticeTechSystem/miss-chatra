// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfdCbGUjRii/MMkqrR/suusM+dSJyznEf47dFVCOEsEeiXjZYBnVFIJIgEnI/7F/QVJXmgMgjA6gLPGc88MXZHHtNg4bZEY6YqlCq+Q/QyWVLd332ZWTKezvR1e4Q9CqTRgqPnMNkzqyaop/XxHPBh1t/3oU3JYSxVUXfYyCvNPQNG/jqYZxZm0RDf2VzOphotOOl1LHwWybiPabTgw19h29gfUbjyV5gyEX17uuEl0D/gGYhcBRDugegif+YkvONyr9YYL6DQ6DLHPz+jFOq4vDJp9kPDsqBF4+TcSF3/PldUaKZ1aQZ65RN+C82kNH2+J2S39DAHqnNdsPicMykk52Kwf9yxjhKL1qPspkjqu7mmc2AkFI3L9+Kp6m84ngkhA/r6RJHj7Fxlz8OOnrWG1ShopekGI/Epuz0s1CsEfjkNwqqRRq0bkAzLSxhZLZct8uxVpCfYEriOGBBWQLocix95q8nHlSjyz7qlF1xtUwNf40UnvClS5pvSAfvqbiOv477aytqHR2pKDwYhOj3FWslcTGa9BzlKUHg1R9VchHjdTaBiuAoXWLkqMb3wVFAmNRRyIBkArTqEMK+kswxahH02QHuEdRNNpJsv5QGaqd7zMcMCrRDT0bcNSqkPANNqDxVbmARD9JXO8/S4K+imViQ1K8udnPSXJTH15rsYSBPFec/FqbQZaApbPrB2opLEfAKKklQ2J8vSExrztoq5jTneLGQrR4aXk3LCAGPskRn9MOkuo6S0iBOXrkXkSnopyKTDwOAbZsC0S/5VpJTnvrjByxXJDC3D1Gjqy7hDLCrRLzJ8enPwl/UdvnmNeEXUCJdM6GJwYFZaEim5icV3bh5PSoaRUS6O5Uu1ZSILiGVEsXJlQUQy4IAdylzxFKfL6ml/S8fFR1XKChuDj6Hvj2frPzB2bagJWHJ4KsoFuvaVW5fefCckkYOdNmgoMerxVJ54eIfOSAr8X+ZkP6aMOcOSUWAJg8Y14RSHFPDFTGOnjvKTh/Uc7237JwgK00q5oADsSZMf7cmEKjMgIJiCSHD7mLL2E/xW4s0fPBC+3HVXMKYz34eEzq6mBDr85FErVyd0UP/K3uDEbCEyOswBnqyqd2ZjNMQ1nPV5MPi6LrxsoOdGtlUc7jt17yabRJg3jPXcr1GkDMMkstmWnIYglIqAO/s1mpYtPNi+9pOjR8dxpKAPr284J7UQoZoA/kx3QsE=';const _IH='95fbfcaf5194361921f0349a693e42ae92f7bfcfd1834910eb0ccce003a846c7';let _src;

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
