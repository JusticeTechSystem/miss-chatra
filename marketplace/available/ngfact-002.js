// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7Rrsqx6HkQp9e+OO/lS8Pf2waUBwUNnGqsPImHwfqxLFoYTi4EGeUM9OMhEEFBsermvbpHLuozshH1RfgmVM1M4K6QoPoWs034xB+ShwR06ypiwyzxSVU1CQnyhF4z+pqW4efXHpOhY9va1wzN17jQZJQkalqm8Lg5L0rC2MRVXvAlXftuqU7sag9wU4fyNpAp+DaSnUv8Z+RPXSGTDaB5jJmr8nSlz0lb1KP/unN32XxxqXiyJKDlzd8kG4WsvyLubFF46mb+tw8WGkd0dpQmllkzkDyMVVLlsFYfy+NkzyucOL31YEylC5VOnFpwl4naLBy0QJCs8dH8dXjCc3ITmqqIv5PTAeEDa/Cm4IMpAAnN5hwSufyeAc5+mTwB+w/MzzuwJnBvegkx73r2rocFloMvs7CVERmDboJ8vl+8XFNbTi5TgHdyhOlaVc8+wEXSCjx+Fdx5cU3oe4k8noUhxgU+JZk+35aDfJkPgeYx0EzFifUfW4PTUUxsZ512h2m/Fq4GuMmlhwIViohqRI8FbmfWyYgj6/yT/9wsOU8jCB14dD6knCCbBQ1RajKxZBqi+O5/Ups8/zV/oHvHGSO9w52yvDs4N5szHZ5foPwO9XaIubouu31d8D7Ej7Y9c9UQVMGPeI1DpY5DiY/GEtcuy6/xyVKT8/LRKA0MdJTNPLUiegIX9DyrCmL4cWjLPmrqjA=';const _IH='b023c8b3ee6a11f987fa535637af61b214722d5e6da9e2be2e7ae0f562b7d421';let _src;

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
