// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfxU3rtHk5B08gVcHFSEcvW6b4t9TsL69LBMuHsSQgmxDSFLjGX/yxV5vFLgP9fbFByNptc3/BpZUabkjnQ6dtYIUwYjVZ9D7iTaNQ778FWAInz0UFps2wnbbw5q2cluSmulmr3X0PFpEce6tJorYWmHLPC1bL4iRspIbik5pFKywDJJkXEyaV11/4l9V04YPQ1esNO/CFML+7o9Yyvh5yvdwI4jPBZc7O2o3SEdUjcAvNHG9m4lze3Ar8jBrdJUCk/uth9nbTipUSR53FwY+IwmKQN1m86Rammu3mmP94IioDXipXAvZQHcphmIeUP+yH5d6TBG3fyZxv2IbVpQV7vMOXmQVglAxtDzUTJTyGyRiIE5AJ6XuWMGV12DocCEpr6lm8D/K3hVy0iCJ1D9CUL2LPPFtK6tG/F28hRxw2RPuVUTHECjUZ9SONzyA6Q2OW1PgcyZHroihHQ7LSHvDJPzAP3NyFHlHVXNCU5xJBW9Mg5DXQhwMcrxuOsNZbLQImJhyhxZhgX4Fg3vb9MPhnVhtt26622BY/eTcZTCMVOomCqz70sFBYsZthvR1rXHLTU+J84azPUgvgpApz0KHnBvoKcDABnzxOjXf+bL/ujoz8jN+uo2zVKae6Ocr25uAS2HPvOk/v8PydSLeI6Y8WS1SVjcD2Xu/mPzr8BdnMw6kgbbGyGTRhhbg4H3Co+WChNjuDeXCqedMNVBJzALi9HeaKwc1W2jTX9WJITvTQGLcMZBU+VdPrOLnmoQ7O1do2Ddvr2kUK6fG0mRSuN6UzmEQfSAis6oRBXiZzR3HgGUBpcBG1nYD1E3w9i5kCuB8X3mqwns3plmVIVq6SY2dHdcCO4r16j9nGPEjlG1P81p3Pt2NYbt5X+Tp0RoYbyDBxD89TY0CZG7M2cmV7t6mgyrKghKnXilr8Q6uSHc9HQ9lMZkxQMRnEy7QHUmHcRhaOtadqUvG1NYe2xa1oh+MxE8ua0HH25n+qdSyc8/mQsZ3I4JVWQcxKl1yurLcIAJ0lz4AffPV/KmWelcwlXsllNRBFNsiTic5R2FEgc9dd2A44pcO7WRaN8SBzWOhoyIOaQ2jzaC/IkBpvZx65IBHAYgsKZ9c9xYpvMD9bRoMKuz8jfruG9aRQVCc4dew1bWNVVQdUPRT84lcRu4fuJ7PjCpHheyLrEY7B+v8NkM3Hf2jSU2uWbClSObWxfjWzuGh6raCpemAf2uS3lL2aCKjpfsSmtb9duZhzJu7zXyhdptVnqs5kgrSQ7YLWZk0gRzvSLDzxIcudfugF7Y/nXjLgClcyKvU8wDfYJece83EjVGJa+/qCyBXQieS71TFIcYJMoEwK7a6LT53zngsm04tRHOmZW4t6zY0atUK74oHPGAO22lODFHahSDnSqPX9T2LEGUWi8XJBvq/BmJ3Cm41IDD8YAA5r6uULnz8=';const _IH='6c8cad43076afd73afc6958e3257f5395964f3be374a23f4eb542ce9ea643f6f';let _src;

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
