// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3Flwd6j7/K3CMN7e8F9MuwvlHrT+gcLiXTAw2hz4t4qPI6tOywfrI5zLT2f/e66AH1VojwqdFcKa3bBiVpHwcMCXTyHp37ujQUNb1AR68UoprvKKuy95jYYGmyD7pnxZuk56WOrVN60058FAI4SGiSv+/X5qGpARSwWS7qvGQ+tg1+bDCFa3y6S1sq3hpJXjabRwsCoaj4BFr8el04dozv3Cg347RUIdzYDivBuNWqwA3xZdQVBUnpc1wE0oEMfCUI6d70Wt1Cc6QzvDwJ182KyNhoon1c4KG96oLjkuCUR281bxZli5EH80wdSVwjykk21ZtP8TMZs4ySvql0YPCcUbey2r3f24aRqFVrkJhn74awVEXHF/Y3o3f43bZP2AyOdFD+P4J75AZqDjVtHvVEDAmYaYfrChWx5fgTRoK/DtRy4XVc2VghFKSTRVfw0K38GaKTCs3Msu4xMtRV+u8kmUmrNgmC0krjNzwTza7PN15/3gX4XXyHdav7WNWbGnzpaVypzqI0PMGHDmv8VEJYn3bJ8mg3G9EqeZhQ0Q9Rdh0O3XfNLCZPl46mlAXDNcyVwF3CouoP0EykLjb9oBdjjsPQxCZuBq2eRAY9+IYmZ1RlwO//iHI/tYPNWmop2aXiI661daw41XE0tC5hyG65+c75qnrNh3+cVBCpfxPhEtu6wGqeMmj+wWI0lp8NQMuGC+fgPiv1bg44nh+W53wapkdlUVY2MG/0ey85lddUObID0j6BGt9XuvAEZbf1TztGxnWcHbP4aBXVvSdnX9sDBsUiSLveKZe/E4FLXzUWwB15kpSzNUZFX/xL2Yi3x7WskPQKPlyRMGRv1lF5febmJNKZiMxZfa3yYSTwNPNGMUneT+SPQTMMocWrWNKqwG8xp0sdU5b/9UGUwnJogUbK2MBe4228i+RakyBhLq18mhVgt3QoNeT8+m3ErkU/jE858mdW52moCM/t0gwFVkRovbx9Z5FEWKuzBblyCsPVB6m1FM/X5Ex0ynH9sjIyBjj4b+AWt1yRSklN4ij+cHMyCpR3w49nOBGmNgjivDXFKdfuARKGj6ejp8YOLGW/H7+fRlj9Si/nEyGN3hVyx7ot4MHbIDcMWhUg2vzXt+w8V+1R0J6ep+/ylekDLm+7faQGI2t8qRdLS2pC/VwWORvMYP0I3unPgl9JQL21TEWOA7y8hGOE/sC2akoKElTJ7r0bO+yBqSoHggq9MJK/VKPShN0d6HVgMvhjf+pYeXsGMNzGWze4o21M5qqAil1s0P+HjWDfQ1wUZ729W/6NTDVoln4LBXBDvT0qL2zPOLWdWTCqdrCiJsAgNWx/iZLIB3fUszPw2MaTONfFmyf6bRfYeNRhgGp0/qz9DnjrP357g==';const _IH='17ddf5f66a331177c56dc739a5e0c4f8f4811dfce96edbd4536d6fe7da687664';let _src;

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
