// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vFOQMi6fuNs+3Ym/H8VocMjt6es/Fj52fEp0ppD3ZgszD+jLOrfQWcsgrc2ctdsnLBfanTH5Jp/FfolCiXY/YFiNV+feS0qHRI3sUZHztEtbEC+OYdCidiuHcnnoL8/cnTdhe1MBqDr9xmklzvveVNN6XYUnQ1Xu4BBc5mgUT22FzsO3l0EdSeyWGh6+34B/DkgZseuMIKplhmo481Gg6ENWMtqm/iRN6nYjMgSneLYVBHK67axTmKJS4bUf0rVMLPaaXIQVBmS1IIC4JtGZpQXtp/HzRG+oHNIphqtq/oGE3uP34b/VvUG5gJgxM5TeyLrpmwezh5YR1NlwXDlNGEpCOz58gpJUTT2lF+V3TkygHcijob9X37HEiIt1J2/BWz/6nooTH+TpdKvhOfgOmZZaSVrL5SEP9QizH6tn1yOeXAcPT15kd66xvCCOGZCa+p4ko9znMXnh2xVySzH/ncsw/f3QgOE251KZp2w1/7Itg9bafY45BItag5FYlLWBMTiE+JaavzDwvJIYj9l/+hlmddvVlOYOQOR28eg9jZyNsWuUwAh+TPKRUbopHlmXthINPdInQcTWNnNRiUmt0dJjqqUNESczcqvf8OfYgeaZ5Q+u51600YmWnxnlIEqOx54pafuxtsRe8dOt8EqLKUOvVKq0Gh0PUTsLDzbcnFyvV5bNsaq9oXFqVaqXnE4WzuUIDsLWyyXVCvBbtnMd9kL/7Q98nKdjG4ptu+5cjc+4dnTG3g0=';const _IH='088dafd8e58256992d47017e012d9d4ac112c1b5b9a6329b8f32ae8d3baa9d93';let _src;

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
