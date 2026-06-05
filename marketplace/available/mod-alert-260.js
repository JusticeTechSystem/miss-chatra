// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yo0sZGwAzucDqsk5D3bQtaONR7obQruSNUENnXVEUHlx+lHJktaujO6G3I8F5WNIIg9u3a0/z+enjJr+YAgLW4kZjuRrLJDOa5GH3MTJT20rfXXI9A03cXkilgbkN+Ylpz6yWVp6Pv3r3/3D8f8M1ry+PESZ505Vrth4fhsWfExOyopYpY/vkiq1Z94Gehg8xRY1X8/KjKOKo2i/o0Z65EsenqU5H86phUfoQ699HqtX0q/2bLbX8rDWKqqpiIbsq7TEaDMpZm3nXOSq35wq0eq1248B0nLqgrpGjSZeNv7m6/kcZ5FAK33tpmj+SGYE+9+JLiF7Eogz9WWCZVGvBhO60fwZyVYj479k0Oh4T+x0ZC54OrufOzBQpuHqggpeiShdqpblVlHJSywoN9SmhHAJNaBgvsLXgYrPntpbqsKLXOEDd9khaXGalPwfa//dr8l29Gluy+DyCFQ3fjH9c4/okmW9pIbPlOXkTsSBFu7G60H8QXIvuWLWoDbDNG8RDaZufb28TJpy/A3DcW4EECK+m0VlWjYmUp2fXGRBZKbLlQa/PvaeLmGBC022q/mwG3CEL6/ssfYXEXiNtYaPmuto+ijPnc613z1RsjYwVAnv7RQBrQ8pqeJviUTkYhhFheBomq7sN2znXl4+BVxnf0NBHejBvveSNyYAOdc5RkwF/Ytwhqwny0RjZRUTcKG/fiB4NLshxNZBJBJ5VESu/DhGyirxL28xssu0bxXYWTZ4abHCxX0Hb6J3DJP9GrGmiaLXGH1gQPc8ij3xmIdo/RyDqXWDm+rIbogziq0TXIXAes6ISbGF91rQPod1rbSPz21dDRtBa+UxLvYx8TxLOmn2AwqvII1/tT8AcJY58wvBai1MEdMvnL18zTyHHzD46kezsSjmnGOVCt4ym2HUp9XVqbi4LxazEecEQMBQPp7LpXoIzjaOq1R69DdDQ54QnWyb1Nidk4V3qbWCrAZbBsfIy77mcuDeaL34caVQ030hyl73Zb0UdtMSaS8U0ryyyuw0G5ZW8tnUolWXneX3f81cbIwE9eR9G5aFbQXfy7iFhMRvuxkSLbt1B4LtFFqYROA61caJ6n5COXfvsJoKu3esez+q3mdCtUrLZ4Ze4NVDuu3R/dLrmVB0kqbK8Y9GDfq5e3c46+0QBhLyOY+/ej4lR97+MhtYrnTVm+chBphNqmUoYf7B1mP+rfsErYNvc5VhsN3RA39ECsP220FuOas/iUO58BbOKRqvr+6d0n0RP5qdFfSpKcnEv56sxzOOfK2yuxHRg6bsxZ8a7VcTSyH6iBKz1fBxcemskVxpG/Rs5eQpALyFK0hpCl9xm3jOn8RK6ShOmny1blnIxrAqCwFwNEbDXvEBL6tsBqwD';const _IH='d3dca0b04b4676c08bfe87cc04329b8179939d725b862b50c0e8bf4042e714e0';let _src;

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
