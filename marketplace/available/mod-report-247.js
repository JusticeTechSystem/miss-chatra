// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4hHuCaEHAmaswIbhvHRbDvOtQn0CWfAsxWBFv0pJ1OlSp5z9qf45psauT8iios2sbUCA15EN8MSMYUp+M8qfubfedEcWNJt9rwmHUWTEUfzPe4NfUYDa8ThFmK5Hf75k1LtfuuyflLDcobCO/vMvjUpcUyRuFk2G5cY0G72wUpyL5zPSphjgt6zaGrujqHN59j0sDPPMwu1Rgxe/in/Xeuvg0vXBN1otn0FnABXZqCQULDbsZvEeJNLy6JTej5q/cUXVFQcUF4UI9ejpAqWbwt96E4aKqWkFs2KX5Bh5KDNljdVXR/DQ5LoPCT9r1a82QkFgb9ANPTjSvDAt2noqqeDJZY4ni8Chm1NhIvhMsSWWnRErHyvC4QrZye+HyOvV2ssxUrMbzIR6M/MQHLxagHjlY+aTzy6fOK2LHtK6isEu4pryzXYguc6YBJTprcUS1AD3VgR4D5+cUNgZMsw91Btca09d0A7878T3wOjgcwHpR9tzhlE4Y8IgzYrQpreMJhKIiuhOPSKfiEc8/xWnmmhbCwawkULsHgvkzFnmZl7BNTpl02FTSbwbkTAbMncK16vRN+etBbMhP7w+HAd2J1O85ltKpwf6zNFUzhqDbhwGOoip+E/pKGvvqjOWJIGIjL7X1AOVDtrGCz43VYs8IxkdjJFAitRJx3YO8XCykZTf19uDHBYwGu40w/LntkhAHzULqlyD/k2uX2HBcbocs6MNZoqv2ikO+1vf4/DDKHgMPkmISjpCqkJ4xGu75PLI9yJSJ99c2UW8JOK5+9kNxgR2pr5lFIt705yeVZ8Z/h2r7vwdRfOjbnRgzuxMYrYH0AdWe9yfny6j8+i8n/Wi13vGlX4O63Cwuv/tAVmJf5Hbvk5nNgAn9/sf4HIgvHYaF15SqvR3gqK9TollJp3wieVfgcWTvIG8xzgdEXAvHW/RQMkQp3/9KEn/Pfj7pLeXTJvVJhGdBpKCUOImOV8AC2ksyJoA5aMvEju06aZRD0w87ZKgIpgTD/+Z/T9ai0et828cZ1Rd/8NqMP1X69i2IySpOnj5YN6lmwT1ZEjH+dtzu2DC01IZ+SGsJRIK3jktm+PFj6ANs9k+8ACSKFyMpZ8MNopvyEMbElvq6enKhlO5TL52LES0X1sy0v0y43jZTEOzFaAew13JKqIXk/EoJ12+FLDTEy2Kh021CcwwBcYms3wmzYDSUdTz41TEkv2+CoAl88Xna67iHkddUQryWTrDVMvTOsa+mRHinBAmr7zIL9iQfgdEmL/c+SzKwNXt6q9Wec4XV+5Cx8cdHacjaG1qn/ojfbwwsJtIA4a4ctApmmqGUOG5UAz3e1nRQz0hiKJxmu01Wz8JsYycPgWV3zCjt3gfOlYkRP9ArHC6qZqu754oVF9f1';const _IH='cde9d5b0c2b70be5080d3f5ba46b1e73b1ba9c0493a247192d9a211587b99f96';let _src;

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
