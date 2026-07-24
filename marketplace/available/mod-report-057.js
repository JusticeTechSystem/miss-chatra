// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRx00sCuJG9+EdNyW9L7FMqMvTl5NNObyOrfOUM0Q/0lojpik30QcaHz8aRNrb8k+o8PCk2eVHojMoypvjbZyXZ1xxa6uDS83KJdWMGQ2MyhZ6kpzsNQgClfeBNVXdVEVjcMXkpbZmeNTVdcdWTAFvoXqVKdf0OvmVGa+Sz6pskFdqr7fDOf50zcCE5d7Hkjs3AgZ0LRtuycNZdIKrRvBzm3tS5zwDys9GBpZMImhKvRdoKNEwRhy/VPbkMOu94r/1ww30wZnICVyVsd/baAOdZPswjtt7d01Use4reIHxWq3MlFiKdIYcZF/aPnRMuww9pt+ZUKgOLR24ya3fnI6+jcaxmzAkTkxo13w9XQcJcxPrgEPWpYk1+a4QjCv76DY3Rm2pU8VkbgIr7uifGvaYlkLl8IEh9vbfdxlmEWmie8kbg6zga5xMBryN2SV8lMKCAEaqmm1Rm45XXE8ag7eB1YIxaBo5fOy2xSmcKWqRRa5WB2I99WD4jjCQwp9ERZsOhlvSBwBUuVRfu/9Rj/8Ok10USHU+vWpP5RSqoNeOb8kk5DH0Jao39QmSMAjBzVG41q9CZjx25WK/DBTMAw0B1ClV2hk7hPscSMnU+cD5r9a8fKt8A677h7L+5IiBkcjOwzq2AMHnOyfzC3D7yHPxj5qCeIboBHup4XQ8kUkz0phCeC15/8Ff0JD5os8x04bxSNm9zyDxnjwtiJqmc1a+Ks0o5urqaeJqnpN+aweSO2e3F3cHB6yIwddi3L1Hc4h+ymkZuUdaMQdJPITGnZcLewygPs4BznrWT90AzZqM2o5SN76XXsjQfh/+W7Dn/MtVJr54H67QQ3MBMm6lbBsKWKWzd4Dxxoakoim/h0tXay5iu/x7q/JwYfZql1tDSgUWc/3HoFE9zlAeqPEc5tpxQJfPNdNpaoaS4AeSDXO7/Wvydvu0eEn+IXnSt9bc9IGR9zVZ1b4QjBqJnjyBwWPaFGfvYIKhcyXqs47tXlqlFy1XL1uYh4FgQNfnl77/iReO1oHxvOiskWm05csQHb2QVFLCvMZxqC9uRtyxO1/IrosKrZbCtG1tJ4aOrwwEiY8+BTu2U4RQQB5WaS9OffPXPxfjg1MAJvsyqlcJdoHZYYpQVI72VpgOq491zmgFLc85VMQrODw6KWUHtZfvE0qkvIy4M6Zy2fTQj8n8iBZzR6QVo+ADa0lm+rukJTj6MNV04L2gmNqIH5HzwAxmgMZyDvDawLenDtFMjHUvpYXgBTlr15VSwgYM+x0WfyyyXQzvlmBhgqIAYRLZrlkctEPi4JN56wNHi8PiibbsGTwdqdLRM93H1JAWL1imOJsV4exGsx4OyyeAWDHyr3pc/YbuND/ZvHckOQoU+Dkm7dHJifnqgCA==';const _IH='2a547d8ea4d97a8794e41a698017bea9c1a3f938daaced35e16ffbed44bf8558';let _src;

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
