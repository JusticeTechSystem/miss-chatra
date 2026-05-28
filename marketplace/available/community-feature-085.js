// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ik5scFifSTdusYCvpXQL621i6D3CT+DBt7P6zGKqtzB36IJ7muUG2yJdSGfq4Woxdu2V18Pi163wMuGYxzVHK9C6/VOQg05OsVCRjOHtQI7etAYLUSimwTY3M0ePSENgrBR71xdMFYxAsAMxftWA45QFlq7fZ5GZFQDbXB/8M1zV+bOeHAFLZmEAvY62reFzX+md1py/j9ynDEFpWMAUqeFWtfD/Rv+3DDB7O3a4AoZUAa4z9MIvCKpOpxZUxwbTrV5RiDZANHED3gIFOUUwqXRnMyVl2aOmuKktbhOTYy2MRcR0tK9lPuoLiTK8NVdEeBjQiAGo5mseAUFbPm2efsGirXf0hfT+4hjv6rlJwSZFF/Sl05izXtSBxkZd20/VX3s44fWkaMectiUzVwpvHS1fyDDnFLQ9IJ6JB43BfqUnqJIvHWwFyecGEoEEIS3b2tdc7PwMdFJPfeVptEz1Zs2qylQU/MKlUxsquZYXmFWd7eDz7X/vxRO3RAnheAaCx2hAnxq3mvfoJrbpHhtZfiVa9tmLaFqAX3LEDA6d7pTV89zlC1zLFV+HIGvHLe61w6psOAa66a+CVc//NshXlaBMPrVdOdeggaGbC0NUR0M7+5czmlN+1KTRZPEIvQzSbSTtojjogGud/6v90ATp5d7Ayndkfb6V1X2zUub3po026+oqplW2K3NCbyJmot4D6ORHsjx2LzIvCzorK/x5U4EroR/1lvEaJOM4fL5eNK9XiLZFYMc=';const _IH='3c69c458daa2271f19a263ef84219632d8443ee8517c2c23819b5343edefe7dc';let _src;

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
