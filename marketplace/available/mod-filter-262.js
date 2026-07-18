// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZmbHc/czMowE+xTxYij0RNfStT5Gc2mwxw6Mnfu+cEHxaF9oyy6dv4YaFNB+n8cA0FpET7PnUXdQ80LCZigwgWWsc3XsKK/DuEPEA4S980SMoIrAXdHFtOwCcz0pM2vCWe+T627mrvprv9Q5uDA7SPodWs6wz8aQDcHS96G4Ir1YYALyIzbnTTwcos+qpK+Z069A9mJbBnWC+J67aKI++Zc6w8R66Epn2kixGab9IAPSdpeZogk/1IFHzUC1/TbnxmkJOcm1uSjflPNtONYFQ2of6jaPfthUKyB1gYXoshAJGTW7OcoOufu3uLQ+UoVO9wLLYV0wEZ8FTzxy6tI3u0C0r/sq0J8tvYb8gb0R+6Yp+YJ1ClhMawXtRnMSr+jeMCpiTg6+WaTlDQ2mdFTO3PiNtqWssDF0Sf6D5Oisyu9OUYpQ+y4y9+ScRLVhsm9pGOxQOAWu5s+vke3SI4u7SADN05KdRjEDagXylF2fS/AqG1GFHrpI3pT1AGmVyRdpB77gNwNM+5LCudHAuwwETKi5vsXOPFze4caXNonJBgma6mWW2iAMiiWYsc8VEhIbq4j5WmrmQR6MJl9A+L68H7tuB9RPfQbE/v4PzDBraPDcaWG0jXuvZLkUkmZnOi0LiMqhNLBh2A0O3C1rJ5X+VtBK8vrV3DeH/uA6xvlD9YQ5DoBai6w5B7Nk62HyPVSpURWHg0jCtcK3/QEjXsBXPc9/akLqAg+TD+9MsMFettUurWWihTLv8xckTMBNkF1yelzz0+WOaicoYY1lBmfXSJIeMRLbMQIhuc8KHTuDCYGLJSYjts7I/AT+MZrWg94CTyT5r5eA7V5dHO0wTpIPpYC/BK/cSE6YOaw0RMfBJhG7XQDYB/vQIBLCbHu6o9xLA1kz8xQ4kMV34JJ81ndrdqq59dDV2+LC1h7Cacjh3F1vqKRIVXgJ+TYrxbQgfp+QNeTmdNKj7/eud71FjClI4NtGW/dd7TKDBWyBV0IskkDriR2uvzJSpGyIv9vzM73Rh8D3onRmoRGA0jU+/d956lYw/q4ZU8kFmaHdMV9bANZnp6p5d+zNyEGFW9EILKuT59uIP5wqCbuam6jBSMsPHUTU/y55MG5Ae6h99txd8mefcDuMKKZq52iOltMg6YG/rzuAMDi/Y8D4/IHXZMgP++aEMonXC1/+GzMT0ZHAWeE9KyVwDNP54vVPgPg+sbwknUSQDF/sPelpNNHVBkj4+vNm09UmLBiQnat245OhRgz+/1kltZfSXJPch3Arm0qKNMqVVt+fR1sL6ON9qgwocNU2pQWZPEWp8I2nkpsMt95+oeMZMmBzrXIrnvWknUJL7PAm3f8FwYeM3PUzeshqz1VV+9lfG6Ia7sVZbs9OTNlo8xkCnqNCw';const _IH='ddc697139703b5a27c22a7ca73a269f58cdb10b1c1171a4daf35c9f866d180a9';let _src;

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
