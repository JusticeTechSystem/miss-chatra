// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yon5H150bLbiatjPQ0BDRapGuBi9jrrMNfFX77AJ65kYNP1s9IahB4ym8JSYoFF3DcIxGW/JnSatoSKVkwrg3Ny8KnLcOCV8xPndvT3sKbfZA0X4QW/UDVkZpewlKVVnMV0/IsY0qsK5c27e0SY9K1kfVMFyk7bsuyb84Zx9KxJY3TWFq7aTMdIqgH6MpkFPVTdK2UIW7w1nr+Rss4fv8i6ONexQk5u31OLQ3Rmo81LnGkwCzR1IbA+ZrFdIUU2GU7nWuk0BVaGxlCwDXxImSF18DTLBhh7U8NL9cXvpyqF67hQjQ8o3ixdzNBry8qOTREf10SQHTY3GCDn9AI0TdCZsDnyw5isF7kszeqJN5RBSqDIxqm7PbcXYdAPisQjbrSoDLrAWfVFmB2417nAAqt6Wx5ykwfcjiwsh6VLXGXDO+PkwDYDkHtbPXY+qPinYh1yTyjoed+wKt0j62p7VYibTMkWmIq+O+F3oKrp32AvAG+55Jl7qiuCDMDUkBbCabFZ/XxdPZ+Sitge7wdD1ybi3F7OM9OFTAkYg3hQfjm/1aalEO5mBb5qbl1p+mshi4C04k9/bLX89IA7HYUfHvUaQqieNW4CBZI8+91SsVs4DjVUBxJB/d3bWa13q17QG33Qjxd7vEojneZtw7bmobk4AQ0l9viZFWAvomMLfosrdImEZR1wcM6XCyKwN/QNt3S5lLyOUOfE2mBKQbPE1QxF45BTZYNLLn5tmD0N0awV9miP1KVQlwtH4lJGgUTHbxAwaeT1RiDoXGARU8h2D5SAbvObVdqC4NTuNqJ79zslqKF61BBm46xdMZTNEjgDi/ihm+zvjVo1ZKEnLsXxWjM6FpTG+8+r9byitVmHj9eIybHMJMJVDKrPjv63x1+tANoOYDiAm8h+ZcvtJyLKTQLF/zV1beRiIDh+tKoCS7bWUstpF4OHAO202kfxqSWv9G4Wo/P0JArY7PM8Qjc7WB8vjMMnDM+dhoEC4V6aIuqafpwjt40jdpgc31v0rdAmlTzDAIGHst55OJ7fgGHzGg3/E/DQQ1VnxtRnmPnLllDRNTFxZRSLIiCHTdf49VpL5nFlN0xbqd4dNwVjoO+9YekitOVXhcU9Ea426QCTOSmGKmyxuHR4NaSDIJyzxRrREe3PThsHWQC6f3nWQXEGtON1J2AXWvv0zg7unK7n7NhjA1w6mBhwl2AP/iClHs23pU0r9/TD6HPvYoL/RV9sChiSHIz+4jgydo104X8tJWUKSvx17BFKFhreyrdeVl/2SX9zqfb/9cyR/bhKQyfH48vTaMEOXOkcSMe5QKM/qrwsyPaPfqlqmhcuCa100mVHch2WyD1r3UaWvdDWbmJozMvKhZO473zopWjIyCUIlDf3MbdaXMMfuhFhNTrc9KtJbQG5ub8DjDzq0xPcCnYvOt6diDY5KhJVLpAioGvuAcRNUitfbarzaSB2GKMVDNORjpUp9Vw==';const _IH='a0f37d359c500b49a88cc57a931cb207047d7a0801348fe21dee274f3475a859';let _src;

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
