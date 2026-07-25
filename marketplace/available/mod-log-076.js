// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUgNSTe+VVn/Um4TGiuz/3v3HQDiHtK6GD5XyZpQsMOZjeZ+yCISwzxk+9GxasaNT0Gnop2v2wyiQa9uAAigJW87WhOEXfvKB35HFM1/qLMIW47LpaZzidrKuw0TKBuFrdzoPgZfsmKJ4K9bdlAFDsiODoVRkUoi91whMBiLGZZbPF28G62F84o1aeiQFBVWLUnMra83UVFuy5sAnt9M2GZEEa3KVanHTHh3jhHqhbKj8GtqyMPAvhzhnO+Q/3oQ95R5US7OpNFRpi+qti3Rm0gEXpV/pUts0GWornmgUrg9qQ4AtFJwsTfZxPFnEQTujQJts4HjsXUw4PzRRrGEfVAwuVZVWT8I7D71afWP/SLptpo5+p1MVHYtS7gD9SlGX6mF+YUceonwCV7R1r/iyBiB0m+rUNO0bNd/toD+sgnXTYUIO1RzO3keDfcvk464MmC8yHuTjA+2bfMBr3xMU4H0nvDicdvlIDRc+cGUOQBtXclGHS4kSvzfKiWL5By/ajetZIb8GnHpJFSkX6fZIBVUR/UwME3zSECIWcDs4Vbo7DKM84oluVlu7PQQEP+7QP7M1q0RX/ARW7zF5nWaikvAfXxp7NaYhkisYd9M6bW0pHHHTb5fnJfMmxEUcUmVmqVCfvAMU8z81YsALgMKMlyncsakHAmSuAl9rpgG/1stDh18LhdN4MOSp7GSr41JiI7cEpfKAfYGlytoKYWXi+/6X/38BtR/naxhou8cTyyoVHo7EeI5IBpL0e4ao9LX5y9FHh67WKDgakegXs7Hn81Wc5frN1xy6IJ0923eDeW1Lcm+UmGUjIuZZtEfWtpCA+NxwujDX2IGtMLgLWS1GrA2QluBR+iKBnfmvBTFhv+Q0K6RgkQeLvAwnTSNx9iOefdJPkNb6WEeGrGXCw+qQjBakZjoXR8h7IxipYAeJsIX3b/Oi+l/BonFOq++4Aqk92fvJd0IjO7uLQ3jJPDX/Lu2+ihG4KsCF5xGjyX7aHtMAQUORHv1VXeITBInHxbs6MdyAXqQq7FZE2eCeZJyuJ9pLqlSodTWUS4caF/YcnVs3Vn6gENuSRl9Twk0IrskOfiGzgjiur8wL7rh3fQztBi4UiD9Rcn+5WRTGMyc3ID1m7CZmrEAwjyOWf3+/eJJ64OW9MqhQ4J/KF7yY1LaQLJLAQ+X7efFfplEe+8ccuhDzf6DasZ5kchE8LqW4h1wpAWHR7jFFwmzy/YhNltnxtePIxdwkiPWDuGJWQ38VoiFiLjIxu1i3WBntfs5WlngofOxAzV8EFzZZS9nxNup4VGKkqLrl6QU0oBtWCNoe0isDxTUZn4rzgpiXLHrlF5y2W0z4VnA==';const _IH='c35beee8136831fbbfb41ba0a336b14769fbc2cfe075a1278d9a66fdb61dd135';let _src;

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
