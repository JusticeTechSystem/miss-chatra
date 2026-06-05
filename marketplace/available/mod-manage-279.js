// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h6k/4NuBy88u2PIVJvxMXAWjCRUy+Dqz/QDU6FgSf0yXkOTSvlW5XPzT04tOMaM8oM2k8vlowGyCafwhkIo68N/7C73JPJkJhoDhtzOOQTbBh9xCgBWri4bqPhebDW5UHlSAd/5kWZcDtKoxOlVhVGYvfsErQDFaQycY+ZyyPAxB75pcMjqVtCSi/HVLM8vSJ4WJKCF8Eq60+3nQ2GAjwhl7vqmq60xbaho0rr4WwTWAqGjtJPDgu6i+GVreTj5KeKGJ2I2de2gN/YWYyAhoCXXP96cG/I8IsK+BpG0pNSs2pdZsUZ7XH8ZjhJTSj9I/mcz2nzvDjtbH8788ZBSkoop6lCM5U8nCOBEBKNlGRCEuXyYb/R/qVFxqLEd0WFQ40dOz6OchM70wCIk89jW9w98nIPaPPn3IR+gnKLm/Q2eVcpUcNmw36nZ5lvquZBNMHD6ycOFJA8iVSMSu9b/qLb+wJOC0+6d2ioMQhl7AlJqgyob91BkOKDH+miiett/Lv/hPwVPg5VX05WZIbHMQPKMYHDOE7JvFkQEl7LOoAZxGdOeqvdi7S84mV6NTgEsKsWIgoPCj0uMpF+OFob2UOiWK4AsV8NJJIcbt0KcDBI6A4Tr2l+mOC/RNHaVnQcQempDO40/WFZ2jYyGffUMAN4Qu2JWGWIWTI4LerJ0eJra4wXixGvrcI0+yrbXl3HNFhGVCG9t/H/e3wiCI2q30lATVyu2R872eK9kkj2A2wsvO/pD+13C1Iam9+Ez7X1Hkfz/wY3MCAh90/sd6TQIyzNeqm80dVNrhx3Gxm3uRXLijOG+qc2QKFBLK63PjDntIJC4qldsswP7l8X7tkYpzCRdH25iyvnuxGujDH7A8kfQH1LZpnkDKsMCk9N5KAVJKN5IZaAFb8T8n0KJ28hgxMKTClhQe6v8Q6S+dpj3c7K/+fBBJuFyvjavYYeMolYceJ8UxQ3OfQRsN38D8q8F7dm4RLEzmhf8pUxkzWvr8ZHxyo0K5JdgH06islceCP42vgRi3krbu0MjcLdV+4MeUkMXL/kjH1yIC+ven/HVTPBJuFVko4Hw7m1Rz4bqXeBJfzqFYzBflhu5/4yx9JYyLRX3FbMoXo3lAFDpCx5O8k5t1mYG3u3T3ost5zO+0gwK6fop7+QJiwF+u81fr7W3VXdLyrrEZZCLrMxX3SH9hvcWQmLBXIGFDYZYAh9Rq5d1t5WXmowha3K5H1effCwatu1o3N1G7F6pDfZus5vI4beIlcITyFLoyBieumzDlk+LzRkRip2lyyLZitSgS4T+0uInfxMXFpPsze++97xzO21eKGuZzdkVqoMJ0xOfaMCsxRPHEaSPb8eo6GYvezsJZSwSKMnwnbz3sC8bOiQQnSbCrcXTPLcApKg==';const _IH='1f8ccead3020c342d0b529a4af76caabd190d6e40251133e239e54ef043ab41d';let _src;

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
