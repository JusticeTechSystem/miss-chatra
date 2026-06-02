// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S1XFXoh19f2fLPD9HrCouyc/KFI2S03m1KzkHo2lPsV9RIp6I3NrYut5oFHIfg6kpMIZVrG5jXwMxOJq6PWZPdZUDQMi09Qhwadugg5omS4smXgqrsMCy1fGYmmMixKZAq84RckT6tfqffn/UAN8/FgOL22gqiPUKnINUdlcVJRgIBJv4ZdWgNwAEMqHb8Yz7ypv6HzKJ/WARLVWVo3hqz0VL3TjfaunpDcTyOhzJMu23o2gR58pZVUv1jQ3Hrp5+avRRzOoO2TntR95EXImWR4r4eikLLTfISIY3ia1irQ0/dpUHR1ceRzbZUd9M/J4Nti+mFaQJz0v+26LG+kZZIJHeui7rNUEa56i1nVRkLyGSixLPsYjh5eUi2x6rPMFHmuWuGuL2IVPu7FVKqiRZkPh7RBVckZyTaVFoUa+HptXgMgBMWHDHu9iNe0Hb6yRn4o6CkgUcSV8+qjNCShx68NCCnrSz8Dm5B6ccTVMaBxfL5xFWVaCVg/IlZJTdg1EE5h45oKggUOwWAG3kQcFnWPX3tGdx8RCqQ+G44cIz920LTX5WNTiqqlqJ1I79+S5hrQ8x8zuapUl6C0m+xQkyq6QYUYspuQbYZ4n1GXC9Z0MB+Qf+voR7jDpzrIQkzhxBpzdY6rTX7a2AdlgQocptw5QG5RS0Ung2CuYipYO4SCAlDhBRn2E/3vXTPpo84JEcEa3LQVixQ2uXoO885NJCl3Enjvw+uwZU/H6rp2EoQS7Vhp15pTAtcNmkhxk/gcgVcNDOOkltt8sBdSk48o2JNCArty5bjriWTEuez3oDvdBy3U6yFErA+sFNrniNONyhePBR2gSHAQmCCVfnsz3+aBVR4BD55pORXFLNblaU0fn89ZsiTLlSZUZFTDXAld9SsoQIct+Bt+QI3AqnN9AefmfQSkU389RIHNoCNoE/ZBBYLn3T8r2kB2eRz/18+sA9+Hztl003uERk0u3wr2oV35Datz5Hbtd6j3VEa+Z2bVoFxwqADERnnTJ1qrb19yGOvLyrIjrsE97+LNBboG9s2k7ObJIhXURnnPwSc2+zcGByqSXj0985pxsTO/MBiA2WDnULJOaewoh+XkXEgB9+c+Y/EZ8Ee1S6C4e1lOk5soiZdaVic4QPnmBMaSx2bxMzy4kQ4Dq1YCJyD9s0ZmZkfWw7lC74C7JGI3hyz46sAVaJEXL2BLlYlu3sPmJ1z2HAgd3UJjrCjL/xys5EZobdBhDzMrZ5o/2nRUAcby7gkuBQVuRyJnowXaTYNNblYA8lruYahh+V0iviWt97KsPZKYq1irn+VIUWR2dVlN0xuu3h/re3QGwpPrSMS7H6uiJIOiHIA2lxqFnqw==';const _IH='86d3efa7a86e57ab2f8739ffe5729d127aab9d8215e4cec63df1ed0d0865de51';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
