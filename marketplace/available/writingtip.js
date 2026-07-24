// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRYWbY+LbpMAPUCFLf32C21wcGYUMK9rpY419sQbwW4EXQhb++/8VkLMBHAXH0mdxGW0Ej+TJUsvMBuy3jxcwXoBDm6HQMtsBreJsXi6c8/dHxU7oJzWhAOxKHYXeY29PJWaStiztFZiwdvYjugsd0SmxhdGIykItxq7VFzUl8I0h3ivyFGsw72NgGbkjpbiuPbCK2x0ng2K3QEXYAiDzswI2LQbf1mbc4y04r8iIBeLbg5V9YTQs8TIuRrPVY4efLhQLBYD/V/1mUzFgkxRP7w4gi0k4zZyRvw2a/3+zGfzKMNOayDw8Mi3o1EfZB2Q99TADZOTC7ccYx97Oo5T7qmtGzkcQ5tzfmul5uhtbkSslOBhef7qdXp3BbMTT/GtLBtYeSRW313kkOoy08XusabOWtpMRhOl6lkjE+o1E+zKs2OcV5HEYfVxraID4Pmgz2q6ZpCIyrnIksS86RwSMAN3iPnupqCtC3iDwybSV3tbfy7xD8TcOIhrbajXhq+eDwBly8rz6GGL4IF2LTnF1WqjvaObp7YElRq8cdOTFJdHSbJvfQbHTA0FSLrPH7OGWQwtrFBRptMMG3mSKm7sxuv9X+jPZ5coqBYbm2JSCIVK1rzaH/pq2YXt370T9vTo0a42gdKsUXDD7UUF9fY3n7BPMukqVzHJSgKvgsfrsJxqMauL2rAKE8apg47ZVS95ghco7r7xS3h5G4/JnlklMCzfGgYfkB+V5bRmr4bre5GlyRjSBRM/YPkeTdYMU1ILuDxUigyZ7kOaXhpdm78MQZKyrsYNmynQZo1LRv6bl1mi4Zn2dX9bBH3vjqorcsK3ZjeBYyslGyJqtzw0feW4Hr6+cFBRD4UKemtIXa6AxpCZTgLYD0FoNYnNEh82GOqFUKZl4CCCszNUBSLEeXoNC1CmTwkQwlkCtRyBJeYTiYy1/tFTUAai6IMqHM1gDJ35p4VL5cG6CgDqmTxzmrbIIs4HLykvmdr0meOpixI/G3EF/k4d3NfykIIDikV0BF5vQ2cAwRRTThg8MtX3XT61X2y9RGeFklwZL7Vhx8IYo4SF2I3Yj8MhCwKHD8FsmAG/TcCTJlx1r+pDZrv81f5wagpG/xx++mvfsyBoNPjnZ2JWgWRy16BDiVqCaQzmiWIWYCWbnaKsjJH7NP1zFtDFS4MDjnOYdQBSZt/AyFEL0IQSnCDNZ0lfwbn+BVDhqoBiC4IzomlpZc';const _IH='5d34f82a0de63ecb830aaa3560c6e64bc23f88229a1c1b4f553d2a9c089506a3';let _src;

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
