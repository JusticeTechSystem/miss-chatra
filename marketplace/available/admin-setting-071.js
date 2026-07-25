// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXLbE91C91uP+CMbH9svx6tFOaRW36nvxFcFJTznbHXTKj6hl4RoAoQ6ZHCG+0MOzTwUH7HknKLvlYqJtI0IMvMAtQ+culACFkkpU7B6y5l9q8Yl1etENZVcUVEnyDzqn/HSQKCQvwFLY/IB1VusLJGULk/oxuQdXJXGLSj1ZpkmP/Inmg+gSasFvuiZ4PbOe62HZfaxMSinu1yg7SO4giES8psZIQ5wFCdyHtNvbW/RjdaoQQcOGNvhi2xL5Yt7c5yERsYLwyB/f8XMa/t+jaNL0W1EBGNI3YsnDxRzlEFDxrEo+HzUNqy8MAAWb2bc9GSU/Skm0Ui7lO40cvqCUwkggQAtV/LPUj1/lqu26uwI6Ab0IsYjHkGfaosU1lGlHbBlJoSghWmv+o+I4YG41MjSDVHuYaMjerz6dSJr39ZT58KztmASV05J/9+Svufox31gN8JK0Q81iBnP3Zm464yQldydF80g8CidopgUCd1zf28Y+7C2FEPnYswbfqctDxCGblRlVvOcLz8FKNPFeoW7x8vxH9k1Uo340x11O/2DkalRUCtCXz8yn4MurHe8240fWxnYwWDe+8qmm5Gbu4Vbjg4FwpZAxQ1D336i5qK09He9k5COT0S8uGyoqCH1GGxSvn7fEAs/YnJ6a5csCI0qFKC6Y4JD7sjbK29A6+dEfVYrM6T17XhVNaSkliiXcmArFfkIcaUPdNu7i/lgp1iTvc2rNNdsPLV+ptGeVuHayxf9tRLwVDAbgWd1DLgvrOj/PyuZJhHFt5PWvWUMBb/DR+8P+dgWE7gSxatX2p3t61s/42p1aTpFzxCkkGOtd5uCoeUh46eClxpLC8M2jwjd+lHW0A2/86l7I9To1MVVH/cNH7GKE7F0R8GPEztiPDuQ8OEZqpbzBvQP58Uh3e83O9btiHMTiRvalaDRcfWHUgfIIL6nsZrXuTfA3kmGsmdFhBzgBBUzriAn+Tn7a5hoYLopyvgNsuGaHlIRSAO9RpIhxM7o82MbaKyP9d+kYd65fE';const _IH='06a5665f629bee1459117b0d27f906b7feaff0d33644ddc9f90f488aea98cca8';let _src;

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
