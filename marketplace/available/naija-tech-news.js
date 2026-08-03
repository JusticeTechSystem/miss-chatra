// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpkIWt5COw27bJ/nh/gS4XfEN108rL6eEqvG/o9RkUK7B6YXYtAo+s5Z/e/AzVtUCg3romd/Sq37GU6OQk0Lg1hvGuQvVDCWND3Ar+SK2eYsifivBHq3XUwf8uzkkOeB4O6o9wknwa3KFJkXezdY72BeF07Jp/5orsPJu/6XWS5Yipap+mQDgRFUKPPf5Pfy0dfXfjXiLxyiezCrYHjlI2eCqqBhK26MplHGxnuM9h9Nz1ncZM7cF92L0JgwHGIfPTspTR+aAp5cQQDYV2gdIE4t2iOYQGhifFx4p9it6oihhwTXaJobXc/2drHitDkZrjbXsoB/t0UP831VUBCYCvJXUDI0/pCTD6TthKS6Moe5Blkn304hlgl0Jcb4+j+i3tnpVSPXNIWW5MWwJAqUgezMIv4i9bIDfigKrGmNdFl6kRnrLroWexfWuaIVjt9MCDqrReKwq8Ka28nc58WW+gkq1J+rSV9MneU7cPJfM84NrmkENvxY+ZFq0vwMlRTDHo4lFr2vG/fHiL//EuMpZSR0Qzh57ib8EQC+zzk6U2/R9B9L9nsaLQul5/mYJhQlHS17Zq/f1edDivHKx91q+pgR2y2ldZFz0Lt56plX4HRlFVVb35By+LPxrpXuIv2FzzlXayjMeuzLzqG225FQK0/Uf6f/hmIF12cDWOGiH38lojgKkhYo4SJTdXW7dYitZXutaV2qyr7cuubMykBefkJAohgWY0+W695XIF+zhVWDky50fSYcHC0WOVuxfE9o04dRj2PQNn5QMKPaY8ULBezuqAgTB28GLFqLPXyzCgblFBv9IozGF9nsWIYfyY6mQaR3Vx9aNHh9sph+FADXP9KfsALMef6pJXbZ++kKRQUafCvoToFdc/XIrhtH3o+0mfMyoGw0dy0IbWFqivP6SVW7wvEnXDwaCVt6+4qSxCBOFQW10CJ3Zt3It8KdGNZOdbtxv0O2vhQ0kIEMDQCNpZpQdOAExVAFk/kTgCW42g1vsltq40wZ5j+0+swl2kWUPx0MCAkqJ1SPrqWh2DmMAYuMs+E02c0hLJlwN29tILTPOITkxR34RGoD41kRiuZZ6WpjirUTBa00IpjrOTymd26LJZV8YAVPg3MZWYhEUpJyD0G5H2k8B/DG77v1AqflHSo51SwftbFFC96+pRyKwGO52KWR7GHSESwSVNWJIYYXhQ1al7cA7HjIdjR9qrlML8iQbmV0875g==';const _IH='bae014f1b8b798014db06e38c98bf643f149d0ae1f3051afe578ef3eb5908d1b';let _src;

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
