// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ygbd2nkcpbO2NbYuySbU9PFjbl+KQLlS8UgINGdm+44rXrlUnQXsrk7NLXWHOt5EuxqGQszeEjSdT29lVMTDx1qFt8pp00U7drXxJlooVichLw35eMW3rPPxP/xAAJk1p+YAyLRrx8EWwVJtDoe4ip7BNIAPIjzIbJMrKdQBwrBZncmYV1lF1lBfqLALWEjggE429YsY5aCPo2hVaS65STtrELhgwnK2Lk9zB3iT2llFTCzBpu0SWAbbDRqGpAVl4or7KdxmHGAz8yt5RTtiaMHQgT9uXat+t99uQBCYHUhft1KA8vDi+pmzSIbFswjiIdtXe0Rjb/0u3r/yiJs1s5dEGZ/Hi9jtkztzui6e2rieeLGqlVekx8WPwZkulr3y5m1kHlBi819bScEbfD3oZfk3n7PR/Q2xqz8/TdRg0dDIBNh/OdErbaLKQ3MemXLKba++uvH3GEPSipbd4HXpWoQ0lCAl7igjeg2bRpGFU+3n50qdBsmfE4HKQqp11+sSXYWVV+iyq/5bm2MF+M2lvnPagwbxPQhS8hELOlsHYorGXZR37Flg7ZVxJCbRDOMM1vn1dfsKxC2K8WlGzhOrqAyb8ZLdMgGFGQ6yPlGxLm4YnNS3UlRH8WK/xilPSuq+oLoqV7xUvG0pWKDRCApSfuCfWOTkEZvclOhrvGva6tZYtEKKP/AwQ0NFnDvRRbkJtuScb61F1zJU7+U7iMOS81u6vMlL3h/hJOhMzsAy+B9SWd3AmvO896jmBMapEzYouq1GcEGnDuG1C3KcAaLiS7rfgF4X2F9zetg/Lm/zWwQDrGNKKzgxj3lg/tkX21U56cGfqhlbu07OYVavSFEMA8MwpaJ7+YmRKnpgyPLamNvvmDmzjtTmQ77663INQfYt2gIxOoOgHgKllxczFSN3g5PN9JG9QMHT+kSXkmnNEa5V+IlGDRFiAwJW9StaxqGTuV4OpsN+Ht6hbFH35+07p3InpyNBURXYBak29iznoAF8YWTz+WPphIQyhAXgZBWrOCNRgrrTvBrFkaBSv1OTMCQA2xTlw58QKmvunp7MkbHdRdm2d2v+DB8iG/SWrWkoPvg+yUQpdTQmxd+KTgi5zcENjr/br1bG+WCU8CP3jcavWZoGvk8cjz4RwWyqCPh7AXrhnyZPUKQFcSC0qvAU2XC1gssWaotTbvr0UKpx9tgINEVvsYzbvKQ59Lk7w1IfUjSKOSBajAb0mg1UhptT9xL7hHrA5PhM+yNE8RKnM6Wco73NV7TjnShKTsSrN0RBNf2V9LiUa2sweg08VCAAXG9Xfxi7yXtN1d37tXrp8w0+e39je+2p6VR5mL190NCLN6gvr/K2w6tSJqpzj+J4sNhdLqrv1EQ=';const _IH='2ef0b29d993a9aab44253361f937a7ef14df60f77f8e1637dc90216d739c014d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
