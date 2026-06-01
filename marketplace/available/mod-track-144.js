// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ93CLrauJy2fupQoUk2MAcYL1V7Ej8rPOe8n8daAftNfl4RW+yNMrnSDM+3Qnsu+YlhVQsgtjdIMJL79VjyWpvk2x9FaUgQ7x+RO10ZUeF+WtKYz58syxsOg4j08b8gJzeNKc31hrlenlJSx7J+wAOHtSQ5q66ehZakD92U9uhnA6FYl9eUOnU4G+1Wm7f+7iaOlTYtViknOlQEda7HjE+W7buFo9j9Gw+zWFycgDHCa71ez8rze0w4KE73wzfzpYpKaqRgdqnaNi+Cks/fz6Q0o8DCJ8XyXm5Yaq2V/MkrrSsRFNivOrOwYArumcQ/6QL7/Ve2oP+p+QKFHpNmv4K5/5hAfByOMJAMc8jep6grL/Ac1H9n7I0mRPOXtEODLUYpoCBWS/hn7XT4flQs0/SY/w2NZz2JzPUQk/5u6kh5itrVS3LRZ2bAkz0yWwy5EuhvS47usOrvsPrpgnhPR61c0PrTxGN+bUToeU2ENpz27VsMmce7qWQsBmTc2THwrAjI+05ClA8sWyExibvr00hSymL3dmAPg+OyL/IKPqHl46NvA/guhUTdEet3PUGorK0NqYeaikICOqkKRi3smWyqxiuPeyGD5W7HKDpGRNyWLFciKznzfRfXSBtBv4JlQg+SFaCZLmKeiQOdjvyPgrbffWSS1Dz2T0dOIupe5r+u9YfPbPy9Bgc91evIVcBjjmp474krH/z9aV+KNbkuBBJrEdoVpxsEdHyysKCCKnHGS37A/ijh+6IYZmTQbX7y7snOmaGhBq9cazvZB1bStdZm4cqquAeyDdqnAqqr46XwXDXg5uci/hKfzJWnfeJRrEU7PmmKWSeIwllX6zx+xO0u828PO/tYs/luC0zs+Q9S7jHo0A3agsTpCaE6bGqG8Q0H5iJ118tmzPKFel/TYXABOWGa0pIW8Sl4n4tzi52UBiixY0ZmX5Z7+/793CsdRXbVSa8BQ2RvfIxQJgTAK/wtU4OQ3w1AoiSE6knjrbzbYvbxzFlwxw0JH1e6mvNLhw4SK78WPhmgI54M6LzvWrP13ARDFtMU1TnjbcUfhQF+3cdSbjRDyrSjCf82CPHZHCsFEHNG1Os5PWv1T9YutP29TB3wzXCAOoQk1NV0AayKztmUKbFMPu+Kp5dDTstUEBLksTZjlKxtY+lClOQF8m6lDtlEcW0fPLgjZe9iuaNgr6GlHkX5iHSaVq07vPqtDXrEwVfADkaRjPxJh3XDNHlyrIkU7TF26f/x4z0eA6SPVt1GkraTLRQ4IiKDH3KqxJsHgrOZ6PQldBQuyFN4yHPq+b3vbfW/OZ/toujRXjMebFOthdp+L1SeGP7fD51eocKZwKsLGkdjH+AEoJC9fFsbcQAPVJPTKmpjhmLW2YA==';const _IH='c9e6b303eed3495f29e2c40656f46c202a68d1897b3943e4f2b4021b21a451d1';let _src;

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
