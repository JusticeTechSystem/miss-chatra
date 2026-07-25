// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYIm6OLtsBw2CtQvCNSiCaFiIvpBEdOzxKqJvfDafLb0Yvo9JX3MGYLUybVeW6gefPLHKTfFfRoZpX2GJ296tgXsl9XrtLIaYySbbdHGXx9SsU9xNn6FVXRJw4YLQgqCdKXQkbpAkBdhlnLZlJF5PdJdZphogVPF2xOJcmtGmhZ2VqRCdWQJwEApvnw3vqdRT6qHDVmC6ZJBWuqDlunDcj3dCaVbiUwE099VPqy91C/SFW9fiCvfAmeU5m43RGcqoRXvXDW+1NxcygYDt4AYaobcuGWNhdaBggZdvBpsEcwvRVzpveK5Tn5Bv4jGOOhhoDM1GOAClm2CFAtUuL6cVYeqyDxdMyExfGj7UUH/aCp4QilgQ4mF4IrhTJD7f/aRVER2nzQihH0mRuCqLUvQyrM5ilY2+2yiN4blWQcuTCCpCyy8h/EtRf83ERHBN7R/1YU5H8E48yVmm8HW0iPhXWHstiLToH/YqqYrDssd9btfG7QJwMdEWxnP7yr9RRylAwvceTK7HGQUt5neYsCTyc511q53ZQWdfNi9oLymtM5Nq/pnx2BPTDuwfwqKJb8IqbAe+sylJJ4Q+o10LWN9RiXis/ChIeaOV26Q6UbcK5yFRN0cEEo+pifRiDJXY7sxJ7Rj+bRpuorrgnixTsT8usvhpQB2nzn4e6q0yx5+racyMUdgGgOusi9nzZ3GIHNEpRmnj6apa4qyGbz1bA1MdZrmquGSEwwqU+EpK6tkjkIdx5vryR/X/BY68FIwMdTWUSzk/Uq+yLZibqF641q8/Dx8xxbedUoluXofpOsFgaCn7tYvpSHdyUJs0ZMlPVdNEPEU4jvP3s6Nt2qLGHzkBp//2YGv1S4Rt5LcrVKE5YP6ayMftHsQk9qj/LxK3TxfmXkRzQrfpiHap9k6yhi6C6QMj/mEu/Hqt0QAix0jQZrNeCRgWbJ8tGbC+OtxO4e92NcBeYwhKQyyNaCOUqPIQgZTSCaIlewJN+UwZ5mX7VHwQjqctXGYt2A7JsQOiWCLEJu8zBA5mp5+Tf4qU9MbVDlnqH0YyaDtwdzeo8Dket78TEj5CgIyOi8wRmGZrXgjmWgYASmjAMIMGEb/Q8CSGX7nPH1H1nu9VfSFzt7rZpupGAC2ow3RmItsL41wnfeCKRkcmhtIq1kC4xIPZ8GQ9FOtnBuChU3NZ6RpbgKQv26+e6s7KZFK3A3ZsdqEqHoLYdvW1I31CJtx5XG15VtXPq2JNxio110CbvJ+DXzHE2NVsAXhN3iv0zV6pTy15+JLX/t/QhAyxLFHejkBQ4cpO1BTNLmU6zmCU1B/BC2FTypq5O08Lx6FREdt25ptvFCLleIEKTogBVT6Ebaoa+Qcnepw2QnaanvOkdO6Vt/Ks=';const _IH='e3e38e8090d60c637cd668186c8a57affda066fc285bdb662b6ce8520b096bdf';let _src;

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
