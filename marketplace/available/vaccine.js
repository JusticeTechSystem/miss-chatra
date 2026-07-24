// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNDZ9T+T6+5Xuy58Iv37LXu9jX2TWJ55eFqRv+0i17K+32ftQyxx3/SEkDyV/vcRwi2rot/Ns0dcv4gZAq4k5zqpScq1ePL+Qs0TPtRcysLyzNmwyx4DzQxDb8z0OfDqZ/RhQ2bt/muzQLlEdk9f9NjK5d0aB2hRzTePjJWC4ceEyIG61/24mmNMyHCk5QyrIPpGcQGGszMmybrI+GIQLtkZWN3bc6JQ21Ke6sW72xFbaJVSmnXxKQmYJLoB+xsl+lr1b9xADCVXU7cB/lxLA9RzFqGRiqI72Z0ExWh5R2FcHMN+NJHJLdn2yocPZiy6mGxXdiuxRG39JLTHqfHaIHV5BiHe6BTCB49XfQ99fnNvq9THHi9gr58Zmi6NKIH0smT6n4dHzzwcI0ceMLUxIMB2TocL+iGzaqiZ6dQLL5QmluUbL99B6Ujwu+HPvZ21oTn0eFmhW9DQ4M0nFrqRDQeNU2h2XdPSvI8x5+2YY6Mbhq7TkdRoKeoEdUV8MguL4J9yumTVWjCtEn1jWBR+h0LpneTzFi3Z4CXPCqq21K2N19ke9TDq5E8BlHOCXsjFXp4VFnAnd5ocGaZSL6AmjYPx89iiledInqhsbMLhCDdiRf7jvlDwW0lbad+yG4ljKGcvcBSIvzqodTISv8e+Qd1ihoSuypp+H4K6daswA6qfmY/pt9ECK9TTg8uQPUIe+ipUFQlh1vvIispGTG3344KuOWveLjt65lzhuEr/QvWjBgLR5cA0KpIkAQJPgseufN3HuMOA/1vLaoWKr7iRDTHuFtGgWvzDkEfEAkuY3/ekfN54cvtx499S7gy7srGJxRjrtGv9Z5fHBlfDTjb3lEd6isjxmWKRyjaVVrnDlOkcUbjcHWASo8EVIFwuLhM1qm86d9hM6/5svlNVVtBRjV3hLdSynIfiKnGxR+coEs5YmmWePa6dtzB9UDa8p8ArPDaELTJV+e7oRyN7qMOtQgh85i947ilTKBSKab0fy3EdpcbwOJdX3UL9NzzY5JFe4UoFEDj7hMfXWqd0xULkwtB/JXmr3Jh1vrifxZzdfz1ozreR2V8mm3KZDKlds+wyo4E22yD92CDbd/F2yLm/AHd6Nu9dKY+rbw8n3eB2LEZV+eYxJepfDrCQG4Z4MaDd6Krh+g6qV/hAnMztnsF70PqyYI54/QlLwoo/yPXHdxyM5CmbhBa0PLZ3M1MQ==';const _IH='6386285d9be53168a0ab6940b949cd76e7b4a9ce2cd382422ee83caddd8390c8';let _src;

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
