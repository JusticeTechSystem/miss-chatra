// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W7PqMcRofdW6C6ELrNHSXeAMCgoYm27INHwvOh5h5KxTkS3CP5TjSXouxqGXlty2sQ+5vBjrONuhNqWBc7yBIkvTT/wq2T0C5cYohY+tWonKgPmqsCaz27MYh4T7mRN/ED9spsISfNYeR61gHjKY4A3KADEaANimY9qRUCNn969lVivNJOSi+2m7Ob+lC83A9vtRIzJwlsRTkORscVzFE5XRTQbmry2AdRAClj2oSnWmMIq3CpOmtNF2PXZBp6QrwgAiokGzBBOyr2canLWo48pHYlE7kChR/eZCpGrSN/c0YCsIwYnGZKveesUUEYMVVBgmYWCRIKPF232Q3/Qkycw/O2ZRHswBx1Wbz8blaw1Bc2InwRxDEDc9VS9sS8UXN7eS8rx2J4vUYEly4yS21SbmbO++GpHndcdJ4hSEK1IlgKvPnU5LA+bIRsw1Ow//VKioP4CBZM4WhVx+bahLNs5h1eEQ3WZp+LlFZG+XNTZf2TrCHlKPlEF/9w+5HSpA3VxIculyNiKTCEGTHFSFg1GeVMt67zj+xXS+PDoUU2cDeWRGzu4lRW2zAuoRqoJWsovvTA3YnfP+ipxMTEQX1P5aoK9WygUARRC/ABmxAfj/ZaVctjUrzBQAmZtAHe1+Txo/L8v+YtBQsltbbwr4BygSR6cR6AAbeSez0Z4+X/0R4QjX2sPSDKGeiuJSI7Q+tCZmQCzPsdTSsxojzF00yvSrrGjFWHKKqRIvne+QfzbCnA4bcJenk/dKuimCC0LJ0NHdUQlc/gaUr1RF3BqxJX997HlXu/yFPfqS8fRvyuFd4PIo+0oJ7vkRbVszm0nVAtQyRIU73XNoEFE6XFlMjDweigcrUmggHMRccxZpbKFEPmTYE86pHknaydQImFAsplvEEWpmeM8Sj4OiJx1qgImHRMPtltOhlgTuyJ0XlZqknI1A0fqYPdPNtYHK7BVv3O8U/vRe33kwSHL3oA0ddXClK6SCoQVDo7KZWutMrneJTRvfc51X+Lei3J/Jdkh7njmPvSBDmF4R457Q/UnSIQ3FUKgN3+nl39ZyHQBf38C4H8MOkhr2zmjPJfGY5gRonfAXwlEVEYWglIS6v/7JQrprXGpgSFOzZaTeeYS+Ugimv+2P6H08L1G2Coa+fFcr62s42LwBAlxSIWd3GzAOIpskQlet5i+QKgsiwL6QBBn98tXM+u3VSbaEAor3XnSt5tuxCSrKZHwOI/nReH5S';const _IH='6269fc53107547cc5839fed2ce10b01625d3f38b7b63301abc7c7e711fbbf5f6';let _src;

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
