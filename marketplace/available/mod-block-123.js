// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRSZoqYksbYKvxxaTxOwhTiDfvqT5LnJS6/50rOVYcIjUgy+M97m6SufrFXgKw4NVM7ncN3nJwydy5sk1NXFy+lgd7BgMeUgg4lJJhK2aErfVmncwpDudRNoouqRvwxtiEEuMfXN+FyP4M55/GVFaFcP13UG8YqJVNbiKF+yRIXxEcef3BCSGBRI3d0xeVPK+hMMHfx9rMbEsR/XGs88lf7ZBUXiGX3+DOBvXeEOh7CvebxDUs4SGySi+fBLIFXg8N02f4ltUvUrEIaLBImphbwjvJZw9VhyaicPL8ak//T6rgqU/6yLDa9dWrqPKoYhBFwNTxJx2kKFah0jvEU6mhm67YusRIq/4LR6WzeU1ftqql+AYjToujiNICai/ko6JkLH+pXB09tB/dmxviE76MnbkM7TrF/Q7PliaZEFSpkUmAWJJGzFtV+zoarH0KyZkAPOv/ndkbH+Y+RDG3PpTUQgOXhvgYCu+vdmpSLS+lfffdCkjIiGgzjvLTpntfSKfnxCfi24Rtg/HPz5MevQX84evnahUSLUpME4z0AYUekEYVJQdPocscbxn/OXD4Uvdwm4oXhABeWUQ/O5P5iTABBYaQeWfPlvyWXv01XCmWcMzQCXHOqQNBgTI2J4lg4LgmJRlGUKEzELWwhU9lIVnRMgYBIt0PXSx44DTu790wvkgD6WCC7PmyKeslZGP/66AN6r5C6Gyx12wFGj0YHj/LPeSP1OYuxHOxaNcdMA54eT1D3MiyY3Frm/gos5Y9H/ILh1OPKEnz1jRr0Zu8N2J4sD4zD5FXKZgJ4EOXaA4gRPaRrBvZY8OS+EFk2iCUeQf0+yQSsnG4/uBmZBQawO1FQfwKHSuNC7UBq9kjeghCVtAccMlruo7PX10/iCVQ8fuWC765JnVfUO1H0Y4pp7JykqtroGm/4azm3lXh62otywnooowqj119N0J6cM3g/H+UTC+La8qpqsa0O/wia+hKyHQ7znrip0Et10j47emSyv5KSd1oE1GoNbX11tVyjMr9OHRLdWTidYOa9G/Fv04Vt0oZLs7jxLqKioDgB5gQXSQgjO1F08EBQC8kAyLSWk9NgmKJIpmfmnI9p5/HeLtX2PzLhj3PUXKDb7GfMZklDGVlztdykAKSU6JgW92qZ7MQnIUsxK83Hvj3YtPfmWP93+xBcP7VDZbE0ywmfVksYzx4PhbmUORfRsj5TQ5L0pklAHkVZc9o3wWt8KcDkntJ7jKqHx1edRQKN/vTWL/SFrmnsswJzStjGLcyCilip7griHYLLIvi+R7zAc3bVVEhzSWNCsstDL/O8lLzoT+fo7lNXFqe8twWSqka2xLvE3BlYrg0E0sYxntpC1qJJNgABof6/+LbgO4/VYFwsTk=';const _IH='f46944737375606262c9f0483e62e90f6f05fcc4e51424e917027b84e69c2d15';let _src;

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
