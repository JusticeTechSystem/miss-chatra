// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWgX3ywM3HtX62hGlNY3snh4uSpTcWYcJ/VrLoAz5pTh2XZBXBtYVnbO0qtWOxgYBN/etnPgPQ6JELHsnmGG92vkHjwAcpT2SIYU/DmvX/NZLw2yUVz5pRdExEVFSQF3LYXLvrb3H5eduF6Ne5Dfs6UlIBF98iZYPLboz/5f6lSdCNu7KPUH6sfTNgNs966JXlwGgjCrVYAvcAcme3T4KxKlU8ZJzISxNTOdimxjVBfx2sfqU50Hr6Y/LabYoeqF1lGSKJqtFNoVpMgtk3ktvGSl3nNuhGMRD4g3Hu34RtylUjDZqEp0dYlpKUb9Im+ekF8wwsyqv1qAGTnkL0QlMFmWchXlMO/wwYEl8YQk/JVn9TN5ko6F5bKUKeagaETBButKC6W1PfLmvIgaT4Op+rRagIggNmbkVl/PkK2SmAhF45hfk99BhpZsk0yRtVjfD9BbV2K/sPWdjnE9+ud2vu2OaM2xstKMmi79YrKaqm2PRqXAOb4wmkWdYgrdpReSSTBSI6iPPTfRza1cOy71eCzSPLpLaf4A29PpYahAorJ5iKwRHoXrFvYQc74baRxuriV6PsOjX0TUmg05PwllCtbaG4u1dxEZD7E4/dJqV6/Yqt8Y5YsUMEv2DmGWDDS/e8toExGe3bxkcTw9Xp3ZFbzw2mdwKmzFNtm1vx7Ruwaz+7QtZHZs6dt6LxsobqRdDLcfs3umSd+UXjqaT1D7OQPdKhUvQsQXv34RaeFgDl5SkQ1wTqiLEvva3mjTgCvxcjt5QaGYNpb1jMGW993+RX17yTG4t9AE2A/piWb5+BU2d3fRUTCpaMDoz56f3ow1fIa/i5IwqmgoaLQoyu4IcE1fayiixPcYQy5h/9282Ct1EqD03NYk3Gmm9ZQIYI6/QWkqxwgse0tb3kivifctlHc+bm0dy67e1oPTDCwvNA9/2k+f3msNetaEsK2I+2pP591nwLYrA57fhCGCxGlfk5oZROyWP9Qm6CuRzZ7ecgW3gB32tvWfbD9hKenUq5VnZvOqgO8IZWQv3qnevzKo5Q+LqOKh66WPLwdwFKv/ijIhT2bEBCxrYzS7Fm10wBj3r8k875es5mG9o7UkKhb7c6iksZHcaI3MKwug2v5Hq3uHNVu3UTOUFUBBplEKXs9lqtcuV29YvrBe8guQLHZahTOosn6ews5I0PUYfKul6u8Dhh5hU6D5Tl9c0/VzoAAICwGm4dfRdpuOFzkh87eHbgy8y9aiujdIGcFook5iWvEhv26aJB2FNQyJHu4aJcuX6kkAtBLYmOJRA4nqrqBjnZd01SzUDWg3aIhjbrQnCA7NulEWdE+h+FXar31zY40t1yvDuw31jn0J4pIeQwdhMI57WaLwth+Gx/nj0jOH6WQkJwmUYHUNrCBNGoVHQio3eUAV6fuFVZNsSPJXJgVm066jXsbljqYrbeWcMRAoTpo/fCfk2TJbMjbm9FH3X93Ui4A88G79eexwWZ0eMzi9/al7X8jjCQDvlucO00BJ/J1n/EY+3a9GMIVer9R3JbBjtyHHOh2nCcyOkR90pPBEbHTSi4+zu0dYN2XLOkQz7VlLvq7wo1bYL7+nhPuBGVt/G1/TF8S3X3qd+nQJ0=';const _IH='185afb68697307bb39969ac4024b67fc9989e86c485c2b0397d63e998a0ba435';let _src;

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
