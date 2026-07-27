// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjIzhor/njtmy8AjtADfB45XgbqsZYCz/kFd1mcbgK80yPlxaxbxnYRzavlevHZbSy01tVdUPa/lX7KFPRjKaXUGDmxH7gni/PTmkeyOqiIQlPjLSfcm8xwfsiPWhx0O4Wvegqt61RNnjNjEd68e3lg83q4U3L60pk3KKwb+j/Fz76Hkx6IxjHW3sBKkVayN3Ey18KcXyNYrilzNn6Bp+NSN5E+RW56Y55SACK2Hd9Er4Btpa6wqULPSaRwqoZe1TCVGAh0mr+oE6+h10IpAbV0s96oQt2YfXMhOoiRIw7vDUUmUIEIxZOgRJa7vwhivjZJGeHfy+/6uwqe7GLDYFILKmB5HXGkaKDeL8Nix4sSLd5IXdXhnsoggQXYiFrjTK8YXQ2J/puhrteldhDAR4LSOPXnZa49MT2qu707mLbRaERSrKiPbL0/TBrTfHEfwQ9RAKssgxzX4v4pP8hjPKNUxRYAKunt3LxeoC/KK27aBdu6i70HZGG7D1LYUd2Q9cEbtzRKkTfCp8dTVJ4PNNdBXz1Yv6DeLi/06utJVQyRcPKBncsg9oVk9m1ah3K8o7odW5CoMrVCSIq5v5bApSqsPiFPlR1UBZ79HWiEQB0wop1OYf143tJTluCa9X6pIXWWCzrDfaC+y419nFVwINZQKp61aBuVw4r9DtQwgThMrQybYssEccAfhxC07HF5+Z4LfLuAFQtFqNtrmGHfuZYUS5WMdaONTSZ9ZJFvAMrnQ2Fm9i/aY3eHBWEbUGGL70WAu6ta71G7nMelN/d8GP+w2RarHap4bRaWy9LKGCDNNAukxVJZl1CFt6EWdeIzfj3Wts5q8U5KlUh+nrFHx/MFTPglJ3IGyGRbawHsdrSMOdacM8KMxczWBBnKzifbP99VSiDiuiXkt+l0msGlfwhefBOmbyXpmo4kS/VatuJiUmprvoot4xb30VGiQ5Ou1cG3HnK+di+MDsAoaSYX6uOzf9cuPzlqIakf5PUScBirV64hBbBimKW7orM74DO4zCvWdsStYjAOddNNOsLuvbzuPTKA1oaazLQzccLRHQJIdYp4N1Q+H1bQ1iBoHazkbwFnqrIHMwX7odosClbgHhDxENqP0tkQfIiHfSO+flyR+xSMQF6bdFvnLt9frqa5s2SK2fXBuxiqT7l8OPVLFlNa17yDyCNcTAjZhKAyJ0YDkA+pUMZiZVCGwRVjESKUw1xgpVEC0D5laVS7ffNwL/DzIDmLLsDJaJaQlnL/kvMbkQ3nlUJ/6uwmRPD5iqGYSqzKO290Csx5wIKLJ69nJUYpK2iVv6I0lYu6ONj1VctaliEvdbQt800EpkQawOj4lONlNjD/uFA1+UOGzJkE/YtwiuuU43vee1YDsWiHhRBePG+aRzRXci30DdP0IwtTAOMIg==';const _IH='d606ded16dc5c3aeda937d26b1d58057b876159b02905cd603e294615adb9533';let _src;

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
