// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IuCGsBOcIOe8V21+TpmJTeGuSsOAzaayFuwL45nTNGPIEsbJvgNj46Ojp82DgXleUI2lSrcIoz++KMX3jLiS0azIae2uR1WfNA1uFeDVsDHxaEBZMJW2p3jl6974g87gOVsy0/v5sbK0r+nFLPyrKhPYDhyUEva16teiLll27Vp9wMtCEsFP9wTccCzZkpSpsvdJC+IClV34Qy8Rad+4+lQHgHB2Dcvb6pMT3B2kGEgws6Z6qXUSfUwIhhSNcU0lyuK+rpEyTHApANeLgbAV+VvDUakTqgzajSWXM+y3aPgrZ2sAucLZ0iAVzbZkBzGR+nkD3E7AHXN0T3yLAj8eAH41Usk09faMUzdP+4me1kUimRLDmyMLwGYcKlymdryWb6Pmr58/0AHWjk55izDNvqY6lSqvYFxBCGJZFaoK1m91K+5ZI/LfsDDQjQsWwAb2FbFeCTNHgI9wNf95hz5dMbpldvCUOiYqlz6c/FmR8mOqO/UfgV76q4teeSiFqPftNfN7nT3y4ylfFUHTOZDaZOmC7oUvDR+Dptwe2fWbaEhAbra0QTvjJavRd205kg7nwhOHyVNEGIxPDRgdHOca8NgaNgPe0JpWCrBQsuEkzYuC3N4OVDsQsZNmeR0J7GOVzP6yOvgQfKQzHGL8jQwUSeE7kgrpzyeTRImZUfCGropCiiLTkrhMwLOCCh09xBEpgsEyfd1pJiL+C4et9pYmV79Z440QT0lGan9Xr+jiyA==';const _IH='7a109d35e1c8364c821a5071feead916ce3089acf6263da8f6ef18c6ce35cf05';let _src;

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
