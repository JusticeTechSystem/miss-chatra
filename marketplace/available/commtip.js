// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXZaJ06+3ii9YzNDhtey++0U+qMaDR1RgkLEtigXD9yK13zXUDuZkAOa01LabfathCGpqeI4xs1brstDasEk4KO55QWwQYKKXnfwFNcyjn5FNBec5HuBVtV5hd5XXtbNFyTDcDJ9eRqtKRQxpfkuJ5ccowzf++WvbcwqEYr/Ym5qCC/hNhrcFctxyszdL5uNkLAIZgA5xw14LXu82N99nrrXREDKVUixyaUmjPWnJkbaVMrztO4IRl0cUjILS/YEDWMaObx/9gWOXT433s3mMzMF+rrCYqJSh8AWt8koyOUxpcFENb/goBW53bfp+XLJTXuSEJNcHf9ZUHCfFElbicJW1UeDffxZp++yVv/2zs4vADsvFh/Df1Ioyfxefl+8GpNxi6G4azGV5fAsZ54HROaKwws7OdhwT5URatBnqnZti4I/gllhzVSbseRA3/OkDejDN1vOardF8peqRwQS4lbEVFFpeuA14jjUTT5+XQop7+MSdYoCl03CcK9perhKf1aZ+hoPPL7XTbmGPmlyl9vF8F6iWivvjZlSXTyYVXrACxDKF6HeOxv+nbTTEAjWisQopW1OVPvGJpWvnPEZ0Zs+YgMCz8G33MkaU9K0kHhoDrqUcVcVE8EXOrT7hkJd0YDsXnH6CuETn/3zCBiXkK1jc8JZRmdDWNLgnRmXFLCh8yivmP2ZzbFIUAjbkwGSefOA2kroVx0X2FDNeUMyAGFrkI3eKhHWNXvMszRxSHIoycHwUb2EKOE9+WsmkJIekGV6lFgvM4JjEF9djwdTixvjGUmQKamOSPHCCPdQ/iUc8ZEGWT7AqcQmEbhx1PdyZ61fGB8FyzZX7bITX1FfXfTaOR8QS9inKy/XxWq5ZuOj8BoHPMxFqoG/cDue1K360oiF6DrdqTVJkci+HCxW0wxBqc9MUtu1EC1iv133rqZ0IQIKzyRA5QSMg22+qiU5yJ7zeXU34o3lwxoyGkeU1nVnKeg5yBwPB2yQLkxEuKLT4TIgb14sDL6A3fTanyGsivmWO0Knv53laSV3CKLy7ZSbHQm2NHbxhY6CakEpBz6qdVWDCuDSc9kzFgfB4y2mI2mDN5MwT+clQCwZq1tBpGvE4pP+GZFpn89LW7sVH3SuKK4QxgX/H6bXr+Ul1iLDxQOwFtu51zzSw3IgXN8yODMrSLAUE3EJ4PgLcLT/8xY2b4kERr9fZOKEm6eYizf3OT';const _IH='b8a5c7c8f15fc91d4e821bdc0969cb3841624f66f3ed8a24adcce9e9f62fbc08';let _src;

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
