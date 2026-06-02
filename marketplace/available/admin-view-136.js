// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2ZBFxqFbEjyEs8WgBlGQG4oUg0u1SMCL1UenANsty3LqUWnV0PD2bkBNgUJjj4jSl7T0Z0FRV4sKAdLywugrtV3VhZX0k40A3U/lYCPHiqsbg+AgzidgrpfDd0GLX/kVb9wLeP6GvhZ5eRRyMAjDSC9CRAxgKtJEmpFrOJpEmOx4iWdCrxShHuJaPBhw6gHQgd8gvc8d2zSwEsLGAM+BTZPgjATHmPSJMjKaRDK6tG29cnrpyWPw3iAnukpXdLQFx+busYtgVevebdt4mBV7yKSXmG/dRsL2X0e617d7dk0zK05pZhQr6UPJc3eSDQVWeC/5j7XhUj3aduez+jd7ghTwQAt60Qcg60xT/Sk3HuJTiOPWfXE72W395XpPtcW3Q9sh/3c46/YnvEYv5esKE4gPQgH0S3uUay2NViRyPQUI9st3U/UkZ9txVxkS6I9EJG2YIgOPRxaqsQk4LRNLvotGhoTr4rrvQqlhEV66FWEH5ilZ8aBUKBTNh+duLjvofCexVRln2X5OJnSDnxhx9RvK9yrsPDtpSn5fz03j9czNyQSkzIFXE8kP+6gVJSur7HTWjGCe3C07HuW00GtxufiYStZfm3ZK+wTLFWMQzEQgm+ywphYsd7mH40Ly4ac2WH21Y8xgXETiw3u56Vly0OGpJMErWsGrTp6iWTAF8ikJVuzr1nRKVAARi+RJSLKfQxxT8I0ib9lR55NEABBzgwOMluKoC0qK7BFKv5MY2RMt1tc/yHxuS/aV8p2cyvuXFfIoaLWT2X2SQE+MwCZmPX1EN/DWkBbi9/TEV7/MhdBdtb/qFTcJwpzJINBkxh+AUqgj4WU9GjuJe16NnA2eTGSE0wMNYLHYsq58LVJjeX29/i+qW5Q4qyx4j2oxUSeF3gDXf2FMNeJfkjXJ1WpFM9X8Wrr0T02iDnKnUjyZIhGNkEODrzCT0euP+uApSccSNux/r3mWa3n8lveTCipCfLO3z5OGAryDy32xgCmB2soR1+8=';const _IH='45bf81609e04af4f643b782b53cedaa34ddc0f951095f77b1ef4a36f94b89283';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
