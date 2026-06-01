// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8k+P2SKvYGFeng0WYCYFO08f5pWs3s+DMCZ82RJ/M7pGgOqvLEnKvAuDW0nSKPtAfz7BNC4ilRmdcAhOho+oEN/wnI+/dM505CkmP81yp0X7WPIjFCqtCHql7WSRHIT9Hk5p0xq8bIaUlofDNKSqNkaNGX1hZ7wywXVukZ7MDVJZqO3PXeGXrToabF4g4tkwBefRHVxVjl++ELq/BLhTJdzulNoCb1e123LSuMnj4I7gHDr9LSGqjiVFm8NkMfOmSPjKNiEDgMKXG62MqjQ/s5D35f7/9Xnl22+yaPvCBymCA/iEBLTcMpQ7DRmLdKsPgzAHmzb8r1dgHb4FSFH6OLE3ENpCtlI4bfmwSphDl7s/2t3VDtkLnt27hxKyFPxfIPla7RTBimDyat69nUEkycsMw/t3SDc6rSYnJVuvEk+d5JKMDajg+YUXhmzhxlBKdqGXeLpLxumzJ3iDdM/3Do3yuOrS9QZ4KBSYviBzQ73rzpxj3AYzH5BZmk6WCZZUfnm3u13sdGRreM+BZfuRKmPWSyR8orlG90gLB4RfgC5vZ3mX4EFQUg+gtfyznGmdalZvTBTD3vo2hocDPJWE2r5rDMTKDJD/JSJPCcGo5ZmBwMkKRwqSGlV6BzW4qJasvttU/tODLxEd9ujcKKJAvhbsTca7GbTLZsLcYyG4VW44BgGeYgbu+NQmxrhG1lKxCByP2hJG0RtUASmu6m1+DWsWM3eAf8x2oC92D8GBF5s+ZbkFOaSyaCe/pPBLY3tm512/d9yBZT7EtXWijWhvWchilB0fIxlJv0AkoqOGrazRYfablyyJCwUwNe///WnjCPdSS19ymq6l/E37wVNtF2HS0tlp4/tUaCXF6mYBWPhHyxI1/e7m70M0HCUVk5RzLwhJNN8PEoJOIOF5220tYaGZYolmHDjIT3XEXaD151OWY5D2JOW1klGS9dRNiwZsEIpa4B6D9T4ADRvhq5hxGKc5ZnmWp/yp6gHDwqcebs0oI5eGR/y62Gd5pAmYAFKDfZKvPhbfAbTthhJY7jgCIdG9yiRzxYDJPM0OrSdkxvSJVac+lbvmR8LapSEPvaCZ57UboyxQHaq1iWcJSscNRm8D8wCRtWlTdpy3gqdoPX+MJdo1wFBIsfo2Kn6wuRQSCNO4FAbx9sd1mDUrh2znkIbEvTpnbVxS98VbF130AAjuepndV3Qso8ixIiRFOLZBTFlsGqzeYSryNCyUgWycy4usUeZP8e/Mi1ggzseFDnf85aN17AL/1oyEV2UCYYDk2lB4lRlGpKoBX8p3AJLqxKsbzTLcwyH2bEw0nJ6PY3mv7ID+jIOZZjOUzX8p+ZHCfkHU+5k9Cvi5TfTb3G2HNsdaJV8wW3xUil8rnL/7sidttEUzzsQe68=';const _IH='189a235e87719b1291279c467a40bc2d2da2504ea177d4127198e5ac4c6d0e6f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
