// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LzQGLdbPJucuI0Uc5wca5s64fBiIDV/ROh5c6fRLU8Kpbx3AA0jeHXlYtpKVVVck6LGIQpK3qcn7t3E6GYkA0XTInavHdCLZk2c/OCIvhV7sBe97yZPTlH4fEQoq2jt0docaLmyDeeBx8+t612UdbDSR4Ttdr5YgwHmv/IuvgX5CnMbr7CXnnsR3QLsdvMYdIzKL7JC4khdnbpq/4UpUePdh8HD2Bvt/f7tL4Na8xc/WoKgYDJB1/Ue9WsnxBL0hxjkEqpo+l3a4iH2EbcHAeC3WKueJ5AWEk0DQYEmyzKRULC7DO3nVXuNqulJlzf8yfmQTxwYNmGkffUIGjJHyrALvfmnxBBoASL6vhXIj/QmjoE9pt53946y73Drk+kN1sFS3EXGhpoqmMV+3fPJN++c79MhziiiEuImn0LMeb7nWvvyg2m434RPLn6nlCzYRc3ibVVUN0Lk01ISf8acvhGussW42wDecNtrL5WX8vwCRxdtyRLVl6vL8eDH18LRWWvHSyG4W3bNwYeZfHq/Hz7BYyMi2GoylTtL7NLP18MyUyVNodMSnYTJVzbMsLrzMH7EmGbU6CSg/hfLNklJuM0xHDr9lKpEoUecpgYX/p6Y6Ig4a2EmREr9N5t5eB+BmcnSNsv+B4j/HLIOV6VWjRNmncMdOu0UaznmTcQ+Ueug1gt+3oxBUMvGbMpINsScxvSUBgITrDD7myI+f1utlrmrHqzyn1v1k6lWtW1ypx5fHw9HDed/yH4XfXwzLn9nE82ZTywQfK848QW0zMK46rUThMUQqG2lhpgv8uFwxlOim1FyLIt1B1WN7WXyzfWO7ojBVt4pDkx/nULnaE5uf9uYbpreGH/V2o2ddCPHmBGmsOlfu1lmk2vKoP2eLhicd6Qv/r4ypglVtqQS6h+I4vMSC6PKDRs2cTAR4XsIzzd3XziT7dpqUXzNb4UvRxGkx5XvLXoMEygjhMaWhLXdaZ2BcMHVbRmXTU0amyng2wBDPGANVCu9SrXdC1QPzpuWXF0xbIZR8j3HMZ2KTpfa37SNmHZfihWTdKcVf8S1mB0kgOhFXi4TGpy1OHDcWiwaP7Z8p68gZdtT8CtaBYfRlZM3wu9AzWPr5F0oScEd+sL4j86RtR8/4R2xDxiGxujBGrCRnnlW3mBy8fJ2RQx5agyUAT5DSQWDD3MuL8PkBUC2Yf7qg65maVeBhBf4WV/HzMPtxZ6nqkFi/FbQn9Oj6ojFo0kP5Xi/2DfX26hOt0WnKb+dmucbmav0UaSpaaSOga1EtEZywu0w3L6QFd/1gzEssExKCVgjnn86gj9qT0l9rvbsXVd3ngkyPtb+XK+/rDPTtSg36cNMcU4aEUeoK9DL4RZO3tdlOEQ==';const _IH='1209a401d685bae210b0625b543d8ef1323058ea48d092bfbb56b252f941cae2';let _src;

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
