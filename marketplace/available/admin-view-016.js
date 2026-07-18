// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1wJ7ZChfr3a/5rp2D+10tgz8BhLzGW3h10PBx80JQHJECC77+Rlx/Oix8n79VXeyWd9FdC4M5EATr/+TCAuYMdCBg2yBVNAc2F6gaaFPHmdbMW5Jvw4pzd9p6YlH9x/cVdmuYujLUBWN1+So/wGeyqDhMq3PCRGznUzAOzbdYfPzGBJ4++6EsnBJbqsemd9QBI7mgehGcp8ZtcyE5eMbOq9pBUcsTW7RRNlKTBnZIPhDzcGZQbqN1c8AzuMptKWTfULD+7hGPqeHLU9Sz8QIDwh0onF5PILWbTZdtsfAl836Asv8+JVz1KEN0mTyYASPT6kIZ02xsq8jKUDHEtav2F1gg3PpeOs6DRouLlaUVVp1s7a7L7GAYE4CuA7JKdnyRrx1Ca1ZudXZt4ZynazeEobbHSsOq+D/DiTBSl3G2z0J9NPETrhMfMQKSXANMOdWbEbY+Z89/xT9/xRPS/TrwKe0ii4UEXPU4nIY5BAYHuxcGA0uhD9btBSL2Vua/nHfAWf3Xt9X4oSOV7mwuIwnW0Iv2ZxWUtex+a3M7U/G7GxAuz1N7XQ4luEn2cXD2vd2aTOGqMI12aMexeyaxCVSYY/UwqOgn6XKOutPSs5cKccHGQ1cCbtL7+Wex3IQ2z4v1RAiSuPK42eZUMkZE042p2RCVw8wlKDU5E6ieQM15o2aRaKOboTXLyIMZOT7S0e02kkSnMpRylWbqdVrYO9SBuyJu06JPSc9w1GLuIZeysPoxdHsbjMPkhoaQ4T5kSrSJh5CsRVtjRue0wx/207iYXOemHy/yquXDGAsyFxcTYQbWzSX629gOcNgBx4t5AEM7apW1FKvX3Q3IVeCGdJKOSxoxi/9nigpik7tk+m1ExujULdH+dJvrqQcAgahBUoUI/DGBFf1rN8YRUJI0HXJa2S3nIhNp8PIgDIS1dNJEpopQA+7vz6M4PRBtEeScxHIsmAQOCydeGrukYFhFzDExc60uEEL+9ALcmVVPbsW8';const _IH='58d4a81201f2be39b1a20d48f94a372fd7ed63109a958b3c0c641d359a9b7cdc';let _src;

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
