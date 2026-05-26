// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A8AZYNRJGN93MhojUPLDIg2HeRj9iTgzrZzXgwqts7VJj8OnB1Y9pE4cg/S4dC6eM8itN9OaKOSUldQWNhTgI5hFYYr2jLRfaapaQgain6GxgJ632LOr1WASlLSTZ3WtcfGpTbbj9gmoA06yV3n6jACMgCBTE5LWxJloJveXwPULWan9OUnVL0eGrl2T/U4axlScro3tUdGX0Y5y6aN+lO99bvnfhTP5xLo5sfFgTQvNVdAvYfrOgQVKnOXGFxBisA4h2Yaty3YGiaZhJqSzsj5tWJu0SiRrlWt3ngnpY7i7f/Mi89Vx7z+jMy37oBOWdw0efPMf3wxSBsNMJl9tZv+NbOVd3ZK3qynPx+MWGXjNt8+5rTrcSuzCi41csjr7DDgVpm0cb6+//DO0KuRbgX0VGqNYyMJsrasTNcm2PlhVYvo77yZnHHLmqnNA3H1qq0l9MDiI77ZY+htnPuy6zuGM1WFb8yV3udj/vQIqK+41qCTqiDMwMrm+sL4FSrWbupXIgKDJiXrE1HtKyIZQePXiFW5O/mmICNkjqEqBcdeN/t9parCLfrQ0tdGKd5X0Obec23T9u35x/inM1oCB/MDr5+WAtdIlbCtLnJQnx5b8fJN0sy2WIVlE3kaaa9dZDe8AYchduvs7ssNiWScTMo7iQXbMQdieWlivf+Av0nvveH5Y7RpfcZeYaGWOTg4jC1VypkV9FWDjBhu1qeq4VLxFjw0QpL3D8oDlkNU1h8F9wn1Lw6ZM6z1mcc19zsX2bMgROPX72oxNGVGwYTirI6ZWxfK4Edq3nbwRGBkiDb8NREKDbKqBVCFPjzwe8jgiTK+P6hfA2jOknvJvVWR49xt+7oqzmzTYmOwx7PqpKiue6t/xO1V1PWiUVAR6ZLL0Vshbci1+MOsPKxwbEVwMrPzCJ6o6e6R82sp2+hjonSLwC/UFz1Btfxx8wUN7CawHyZvV+twgkpGJAKeQOPR92NdTYY3t+8Wyl0RqmGMOztxlUrqC8PJk5e+Ji7mWGIKVATs08GZeE3CGo/Luo0o+yZTvfbQj4oo+BLo706k16VieHDz+6MvIK3E1Yy1OV3GIPDhPdic2S1ox0Eejb2EaHQCwjJrfeFtj0P+yHczhk/9FHmzveGPbEg8Z9y85PSpxgEgfprT+wCL53FKb8twvo2FbehOA1eyaCjmf82uYw8I0nxDGEfYfQK7Dbix6l4uLI0KcZBXdjTPmThoQIlP+rJSPVwFTx3CeSJ4GcFcmGrMwvQsR+5WcovdtaYMs2qajk7yQ2x8cZJ0Lj3/7RkcFtdxohwq2ry+D+3q/+D79xlVd7qS2gY7wNVB0ZDvM3wGEGzxg916UxmxWmFwc0c5QG9gQm+dIFLxE5ZjqhgY8';const _IH='0110613f30c835fababbecff1379fe4f4104035ef6bdd8d4c1ab78f5e9febb86';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
