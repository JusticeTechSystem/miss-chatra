// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgXdBVWspPCNbr1Ri8nZPgBsPQXs7xYhRIL4gWTadxsyonLD59xgYKeF36dWiT57xjc3oJYnuDkETvQlyNKjpk+xtZ6bxhW3EcO1HHGpoG9jqS8T0tn/ntsW4347Th/nfTLvc+qqxOHKRWIrVwGpienIyOamUVbs4HPc9qFVUHDsGvl4yJYcSl4lsDg1Ars3qluV+2hWpTMS1sEwvf+AMCXgtpemY9H8oLWlS1Rz2OBFsAfSDOOJhkrIaleARY5DqtMMDBgfuiyGbwqe5z1+RIefq9u6+0/TYZzMAsYPBIzSiv8uD3JvsePqjSw/dEkIAC4l45skZtqWmNHoNJSy5+2wIT9epN0DOKRCX6VwyRBRT5z5QBTHEL2gi8FoCZsEcwc7r23SsheABUv9fc11J4SdkNlBwp0qpj59+7kVCovthGTzH3NM9ku9i9KZGfg0AT1QZJeiADp54SkWucFaY8dNoRYZeQgsbPMB0L9SzvnFZFKqIwxks2AyMarzS5iMHuMeDtyJPNwqPHg1xfrXbAxjCZVCQkYRT6LFNj7Lqy/h+ghflKnxAJWT/U/lcZEuuf8cz+Sst5IoYOHtGlEcxiTCWEEGE+rDYCGQ61KvmbkQ10qVE6jjfxx2QPZh93HPwSfnE=';const _IH='89d50373ee24c71ca116a6ff42f1a408799b3927bef0ed24b7a86d827f32abfa';let _src;

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
