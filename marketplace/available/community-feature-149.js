// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYpf4t8xkQUKOBXLy+auPlIro7221lMvlK37irfq1FcoHktYd/AD5kacmvDE4/3Hgk3UxG5pIP8uyzv2nsJFCRbSq4PCcRmeNiV+/JOUkVLzKJrVmsy//Kf9KsfKPZSoZryyoYGZHxS9XGo/kozCHn3VKZw1GvRTDTlWBsWYfwC/a0gEACa+p2TBJqSzvcGgqZsdpouIzKuSxXOwSCIIJmUn+PFwCKWAejblO2F6cZX9oxVyY1MjnREf1FlZWyPWUYaU+XpEzmzcLWJIyteu46PuHGbE8/VC2+rdImhZCQdfiJDpHgYca/aMZLfgimd9g5D61o3q4wZUATA6W0niZt3UwV4oGzSDGXxw2a45pIY5ex9j5PcXHqO4y/LzzN6TKzZMXS0fvsPISeZzbzmpWdGCmKSTb0saxNWO321CQgUxjWJy/JqcKpGJQSh1OMY3HOz43f7re7pzSL6UQuhtN16AdLLWcRvsJI5hf6DWm8Iac3GtuWyASfnX2pZZEBzz1YDBHZcoCLrDK94Sn6vFGF/O+F4k6/Rwp73RdtXHpse6v5Vjl7RQROU0duQWSaABJavFFkgRnOdfK+Oa6ri7gfwbqQAcg8ahOEThe+1LpDTcjuiJedQETOSfRTLQLgsBq63bGT2K3pTGWjOXqwMsG7tqBd+MItD+Dd0ReD2fqCenVM2zqy+MYM2IASqK4rk9d/u/8ShDCcbbQ4AyYaiCO/9foTBX3KCORygOwt0Eg0SeNSDnJstg==';const _IH='856c31012dbc8dfca3c37d82f58049543f5e61d099c0bdcc991bc4a7a0e0131a';let _src;

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
