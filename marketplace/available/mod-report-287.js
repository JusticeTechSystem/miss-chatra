// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SkO2QIpfXtkwUKBRBhKx9UOQYZL9LOW61D9vBSc3dKj9oUsOe0ioFsAzZdKUfsSfK72PxAVSXslNWO2Fuibuj+RI1RK95AcfjhC/ktP+5XhiLNOIaIq+uxuPSyhFzd65P/94N6FBVAQKZ3jxsQMwSfrdzr7eYNV9JtjV1ikQSYBQlkuHEuvyM39MjxDU18dArjwee7AW46WACqUeF0/6+Q9VR2IkK117Bc1QNkTxKU4rhUptLw1qUJ1pKzndv+zXi2PpU/+xbiTydUj+EvrqDC+mPnFmQ4EvmxOlwcMEoiPqbGzhE6r4WMXdCQ0zPnXe9LLPSYWE93JH9acq1pa10rr7UroaMwjviqW8vBgj4qr8fYHKwWcpgdsH00Wso9VWk8TqDzn6ubnJymNB2+rxTVTP1AZ0HVV2Ok45wmiHwrh7LpxuRGd6EiH+N6D5xJON7zLesj+qQKX6njLdcaUosdiVQmirZM7ENduP+s3VJXbSfWRpZtO7LCuEMnYknnLJSFBH1uNuVZTGQdVziofpK82JUWXh5P7ino7PkwRiW3HDBsUHIRwdQU3J3yZ7rvfQ3t8oMdbODt6Ph2Jcdc/AFJWv5gH+4qqEWNL1mhEomJSU78f0wnouIHOskLTbUQuDR3JRmnDyZREE1NA6k2EBhbeENOnFDhdGZcWLP1BeYZkfwtO8Y70yf82CnlCdBOp8tizpMOoYrIibltqZ1T2Mz0tU2Wmma1Z6uWkBHYJwNS5auy8VIgMYKgG2vHP9jw1hiWeSi6qE4o7aG71icBybB6tKWPUzJ6pmr3fXatYuj/Eg8wa+x3CF/1LbjDw31fDJQRYyO+Hpk0fvq5rVWNlG1xsUv0AAbCDO/nMkrGkmyDjX2W6qu4dmEbBUp9vQxECpmqMzKqVGctf9N+ivth6CQEYzraud8Mwp7ps34JUWBTglKsSZe6o9F3qv9FoX8+1+3rJcYbxK8uXrU+pWQlHyhc6m1zs/ZW2o10hFbo1L1qNBniNCWAM7ZfkA0AOMJAlIBtkZm258JKIlt95mHqNqs8nX+SFr/eaCZRITb8V0tZO4OA9f+XsTFfsu+sUSCWc3soQDOAzrDHZixnBJHMTA7i7KzCfAYyWCXhaWR2Wp0W7aPWaeBXyxfwgwFk776iN9JfCyPoSD1U9ZersfK4025xcsJXm48R9Cv17qkcUm9vdzxV/6sV3NKhUZaSAoyAnfkyR1ajRE+YLildWBHAaUgbad9Pr3copAFcIkappPAgqAbqW15geNoiKA76cfKCXjUg5la1Ey2QYAGo3bg7crCX3r7+JxxNDYOH19uXKB91YSDAADKZ5rd/x/jGw0U5ZkwrvA4UqPTjJG6kL5AIfAD6j3ith7eyV2AJZZM+O7Xda81LgFKtfZhg==';const _IH='358eb215cf6290521051c4e768b144b00790bc59af3b999462dd77ae41217bb9';let _src;

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
