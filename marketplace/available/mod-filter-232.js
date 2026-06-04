// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iJPJZ6eamCf5qb0x+n33ALtPy/yYIlu+dPIWyaNMskZp4COwRB0fVIOSXyUi+MU8HU+fkAghsIBMcybnk+nrSVCBTkt5EMSGTdRsMtsatJkP/OAQko6lbbXsQNjivV2B08aKVdE2c/7nZyI95mJGg6z6BxUzb+E+9PC8Iq1VAh3p4xtHSXEAlE010U9TKODlunSLkKHVKUR0HiH+nqu0I54z9ZZj5j2eFvKHBFYIsu98nY/NI0iqSoTjyAxMlaDUurrKSTGGedjIPux96RvR3Z4BSimiOdVZNGauWh0GXP9D0CIv3wLL/86Gnf4d6BfG5bXu6bSTg6hWgb9bXDipWrwYLSQaiGNwl8xBMKIi4DowIJcv0UGkBXVwsDs9rJXoawpvh+133akxeYnB5YN6XKuduzqIDRmR+pyi6cfVqz2DSs/qJRrJ5rJr9zMVbGiswG+h9df9Cr+pyvdGdgVKaItXnCRqB9A9aNrabKGB+5M0hgcy9q1IO/QVxgGLgkmL1lLLqoYzs8C0kUJoAPWO7TMXMMQnJpdMYQOGfYySRag0yPA9hyk0Iq2jwo3/gBtDe1f2PQkv6AgiRoFJDBZriHR5wScBc8hiWmTn464WBon104daBJaCkgTLgwEzR285fbOeFcq6gxe51t2xXGDoNwDGIP22hnVhrJBuzYhbmoCEStmxw8mH6oIUP/yPIaH/7ZZqvHaWHlO2FuK8/C1wcu0d5XT1BMN7cCeRCJoVHOnPOR59FbJhyxKjPArq61MispSsxfGRzGsuDdascOIK+9NtA1BtfirDSLHGq5t+zmXu70DFJzbCtuKOvXR1M04Gp3vJK5VxiKeS7lFdVBzyKXnZv6MgdUZ9jHGfvxL0zAm3LnEDdZNIKN91HKC8OI/50/kj9RLUNOm9xasrYEQMG21V3Kh5MchOOCzT/FhOg64qNoEmR76jmyqW6O3Oek5t3GmRhacPMyeA8uHXjP6Wcj1nM2+BDu6/5FA8N8lQ1j1/gpwZxO43v8ih9Rg3mkvuioBG7b9sYUf6kzgFpQW48nplWh3zg1K+QVu3WFUCGdUV/wO5wFgDbyCnjKYrlBec5+d8TYcfZcO5KAarKuwaCfM8dBBhRFGFYAArDHHDLYifGvJ9bTLAr7vHQjEpUo4P+r0TSR9kSNtvSgqzkG1J+zZ2Z233/VIUdFuTwQDyq4+6uxXWStQH7dpszA9H9gdT/ogvdcxCBshSWfuRrZnOhe7PmwcO2HrQfc2bD2ogjAgIiPifyEjDb+eDRXPtjDZt1LJk0GmEMbWD0Pcmps1L9T1K8gDjmMSh5ElFF4E0ERnskIoVuzjZOvORZDBg/UGVLl6KHZDHDwZxWuL4/y6BD6PSEs/b5EcbsMROX7byCD/HbOr3G5cj4A==';const _IH='689ea7f7dd9680f19f3644e42a33d4755a7b9d3286ae325e84e16019a3f45cc0';let _src;

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
