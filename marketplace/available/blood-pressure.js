// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EQZT5pEeQe39vIq3S5mXAdAkWiQPGlGg+DrgnA31rwl61s0YI58v4i4E4rPJw5gbhjgXBOlX0w/m1h6vvDxBCXoMPhQqQ8ORao5HbQMuxM7q2RnluEQ2nxl59tSwIFhuG3oA7Cb6wgZtfvZMmGpSsNcPyhsrQcOupT2KTcl+RZ0Uf9J6ZpYYRHWaSKVn5looDKeIvmuFIDXjDLsp4fxpe2UFQNaMBcVhKgeJ3LaaE0QVaAVpQq8wdnCofYqc16vMfe0MYUuNS1bNcv0b9/zx4JqPYe8QKqFX413Qcj/P/o2BUjjdw1lZp79HbB+Fv7ucTNgBBT+4aCfy/oIPWph48K44PtaEW5U3tRFJiNRPdJLUN8WIPpJ1UZb3+eo5w1ZWzeECbnb1WV8U68nqXF19flOQwxdulrWIz6eoTiPL4JK4ZkW1HxIchlIaL1HGN1DNR9hmJxLqiaVX8y6J5PnGXQrwP60V5bim7hazdIVXyUGez0NTO+QGTvFKBvhq0GmZ+RxSeN/B1Vf3Xvtry0nwvV+vzWjLw8/OpTNbsJkemjZUxFR/iEGvuX3XENIFJrvrGmDRfo2DT2bV65J5d9XfYmDsEGkpq9j/56bQDcA0Rh5WZ1kjP5tDNmCPpsVXR9ZCRCVjo44XqugDJLovLWKZMDlShS8RUiqH3QrWmtKdPK7aBRi5MwCyOufWJNbe90GI7qt7Nj9cGdk1PFya27riJQALoCE9tFbbImiI+1vM31AHz3w8/EbL2tNjg0Gsz8HqwfMQj9KiPulCV2MrtMwJ43tKtwW5iOcME4YRVRVehUAUlpgfTvjgjI2x8rvSv6IYufdBi7XVsFGccC//9DfruZsScT2J2l6Bw4Anyx4qnYta8pfrWFJESvXKzufS2zeJ/LcgxAbDKMyTBjimJU4LmKdDC0Vfe8w5pMBkcZq2CSiP2xnADpred4GsqiuvRWwW5xPlme7AonAXJrUKHX4D+8X6gq0S0H40SWc+dVOLxeSdTotF7H3R+mNz8ZH/i4KgRni38Us/l4MYK4+Ojij2eNZPTfUgVyFoALBEggh7MsFuRREgzQjLAT5lSIlSle2dOmdJi+SZbiWxMsCph/re2Xx3B5xSYYbHEhAR8XK4n8cqAnxUTqsKcvwG3Aoye3v665lxpZwlKq3qQXGIoB7noPLNWBsf3tF5UdcBh5MTE+pgUSyDwSYvBwpo2G1rz4dSvChZanJ0OW8nG4dGhUwXh2dKxUtWyyYb/5ouq089NYP0kq7Yzh5Hn+9MG405bzdMFHGd3oXU7tro4Pl8LGanBKpotAnvaSB/x0/xIMBdoKRgo2PRfsGm4mKD3+Mp6s5ypts73FjjHFg2ot66bAC0WoinQES4qQKavORsJRQ3T2MlkC/WEF2xt7O8CQxAYbxlooR1sUsUDiWGxDWXFh0chg1iJy0xcnPRgEkzvPO4GayDTSYCssFW4ey0PU60wBYDBtDcFLlFVINIR4QR6a+xdCsT99tZSFYe1hHECnom+Dt39InHz7jEFK0O5ohdzCaw60qCYXKiXbGDVfiLDRlr0ttDFDoqsuVUSg0Maz1VNyJSQXaPNNnVJA93OeZgng==';const _IH='1c2d86eabe3b590084686ecdf885e7a8aa4efa623ae0c36e39c4823a52f32fd9';let _src;

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
