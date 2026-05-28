// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b+xgGNI3lBlEX87WG7RwaIQIBjAgP7qpnod2or1IyJSkDgq+qjj2kftYgGSp6cRj40CY9rBT1QlsT9aLVF7/3pfDc6+itziVrmQn+p4orRcP+5Kux/5n/N+QYiS/zvIVhptMTAaaKGAVX6ZUmA8JHZyzdDcwJotQD/D1qRDpRv+Qx6ppq7j+M5rFeQYiUN6dgiUo2J/CJSBBPbmXjP70cxstXsrKEjh4e3NJyE+G4IuVUGtdp+4otf2KIQXri+kCL9Gv8Nz5V6bwElfub+16cCy0lOzS/pQ3XCj6JWrZ28WeVHWXX3j9cOLPDos2YMJlmRryyPj/gEi26jOzFS2foxDmW/Ec2lsta0n46wZsdahWis9tbJPVTAjdouheD1mbOBZrLbYXQ4P4fwHxA/D2zahZLpTc8NNMujLLxaogisvgMtY4DdWfQhJdkPn0NJD3gjbkN4XcLCLil5PQ7r+H5Hgr5J64eGkjk6JTt4eN3lXynedTr2GVzl3Tz4/9OSBW1HA+5+6GCpB/m4CIQnJf5iQoQhMwuiexlNdcNRDKDEv3KoGmCxPumRpm0nRnxT8OljI4InP+mc9mGbglg+WCasYbtlIXLvTKeWDBYY8frygYZ0OHnWAmcOMk1yERVvC9QZcJmriw6Ejj8OtlNrP76C5MgcLNf7QV+F7zhyAg1uP1e+94HJYDHhraFW1FK9pzTwEVUEzWVneKyKJvl8hHV5T2KyR6ramPXX7Irz2ewjmfBgETZZdwfY1Fcm9xPamKD3oVp9DfUyiSQJFbYtBshQTQdzkr8XD3EXgO2Zzp6IsMgGORyd8qpqfhyaqtvVwN1wbmxdh51B0kPIHj8Bt4Tp2HGTxeAOLoiapRDLoYT1QehB7IvPJ8HtGLSctVrgcXf96Paa9s6llocUjhxYSKEIXGI0/jXCFiYdS+NL/MPY69q/niV4sCDoshoNIOuzg4iXoQFiwL4hevOUpq4dI4F6sjFcZtfObxDUnYpg0hj5KziOFzKCwAWVh4jekNpFGIzxu4zuOI2JxuPabOkYBwGf5mQAvG8wNIs4ziy4Sz2vuhaMT/ZbIwolek+yAuUA13VXnIEBx3TQjVVkdyec8eLnrUqHfuSFci++0pyrFG+nRfKiyr/FlY4tJaYwKlsdwUvSiIjabLEca7qOzkTL4Ijt9e8n43LHEtld+UotIgaSlv3Ex0h5C/bmjWpqOsyHCVjUjmohEduQkiKG3r1eBvXzHwY9qBTidH2fkbo3PfzkRTqT+HdGsNArLcKxpjfSnlR2YjUZ8mE3dawjkedxgpNx4t/OB87SNSAoc8dKWMMLgy6mkiBX+pQkSSeA6xNG9/1l4H97U=';const _IH='a8ff06c4806629b5b844ea719219acdf5dde15fa747fdbe9e4bbfd69c425f4a9';let _src;

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
