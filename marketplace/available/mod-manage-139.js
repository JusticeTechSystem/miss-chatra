// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTKs+I4Vo+5Ttrgr1iJm0XSbNrq62tkcT0vnN/rtR7H/MQevl7+ifSSBnatz3NXrTE4Q92rFrko6JEMmcB7QjtXOsjUWZxwDMVLIMOVKodFPYQgCl8pGvi3Sbm6qzsn9K22I0VifWuAL1j6lCtafQ9hhEKF6LhESSRMGydBiLNja1e2iOvq/xJXDF9CEFTXv9O3gk1UtRJDOckvAQmz3AgRUTIkxl355vsXdcsMxVOSnhknJI7f/FlhMC5zmPx+0cQshbYs5KdNgjxNLmYj3IbtPoKt4yLU0BlYcPahnIWeifyLE21q+32ZHLVkBkdsVqvmIQoN80H4R+n+l5ty/VQy2JjRoUCWQ1WhxyiKg4xzXKVtArrTZYbShbVvuvyMQL9rXS6dKV+wdZbWe8Hn9m2Tr46KccupAdU+C8gWB0K0sypW/TOh26rTITt2XRIYQM6lG+sgJ3Veg7qiz+8a0cPJAHIVp89Jp8eszNAxgAUr3C7VJ87d+v8qCogGBluv8GgxYXADK8ISY/sX1YXK+LusKuLk8qHp5PkQm7Mq4WFfiAv22WtTn2daYNF7ny+VmC+BU6/rlDoIBXuKjmnCAFr6fSoTME51o2ySquNLc+e4JG3l1UbsM/9WL5B++Se2FGNbkhjPYh4ZtJS0vMfaqPVpd5aCtIlTm/+eou41jxBRYBgxyNLyQr9lOqbGENFNIY0WUWmKaP9rsfIPVQPPOXMBiThiFK8N/w7PKrBxNHks8twkulzVIqrrNbfdVJQnuwEt0hqrafp+skNO4DlzeTk9MEypUgxcN7UcNEUtmCqmfpBE/Nc2GN/luI8c16HfIXH6DfZhJO8YBQBJtbpBtjfUIOFyGQqUVX0oeiZuOUxeCIdF1SQrIhyQCd7zS4FoDZPOCq4g3he+fBgX+uuSXhejb+0aSsQ/9saxb+SDlXAzMn1OVKVviBhUu8YdpdGCrt9UObQrt/DFANO1Tj3o3uufws2UlTQPXRD1ICTg2OgsDEMnJ2TPWBODQxuQ4c7eTu92/n9MwJiY4pFeqnyPlx7lZmsGuS3lAHfjo7llYgmXrJ5IqZAbn3MkvM5WF+lFl5Jrd65WQpVCERE1BG8e4tid2a4GUUR7ZaySul2+WhJdzbeKr2f03Rto+I7eZcgMJcp9fR5SCEgaCTfNb7r4yuCO1y8a9azezAJxpmcOVI0jIfBMH7M5qUJ4Os0v0B0pPNrTTCAT3T6WBxttMPqkoPQq9UrNdVVM4jhNc98eb7SQDU1+//Ijttl9tdfXJqhIsJSUDINpDr7ZnxSGLfTTKHtjTPBlw7iKHjEmOv8gcNCVMcfJ3paN8Toz1LMuuSRua+arf3AVH10Mb0+GHMsxLr7OKuKjNPYkB+llC5T+vbXXjX74PxTPnrh';const _IH='121114c05c49292ab2bb7b8775ab4c2fac9422ab24b839bca06ae58a78e190c8';let _src;

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
