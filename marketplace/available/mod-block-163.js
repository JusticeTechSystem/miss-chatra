// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ60lk1JVksN0YxDLbcfB39ma9xyv6dS4JO+CZDmSMXnfSWC0RE9qSAyF3HHlZOIJS5F0NI8geO2wxdHO0URYeJOAwml6LSgtkTVV1cPNve3YIUIvK5m00ksCmVAiFuC6aBCf8DGRRNkFp9KAnidTNmTAiCrvXTZsPaZE/dTpoV6rfHaEepqmlBmZ02OdMWTBckZfvaeUiOhmOhLljy9pNkGyr+odLSaRL+dbch1AbZMascf1pHNOQBECh0z55a5+RjVwbvdKFEZeBDxcDZhFXF9jkRyaNl/EA1DSHUnTgDUe+KiET+49vlHBaNoI6xvxDhogMb02uY1oj42TSptIK1ngPqK62GSArGsyYydOE3uWCQiYP14+RquqqMeO1wcsVkNwKI0QZoXhGuu+R/Qe+HFtw5NWuuO0Ae4uamZmy1OcZ+gbJq9J1nbo5/7bKgYpLXFiWfHsfmeH/nnqL40m/PHjun1phN4sEASQJCDZ/PCEDchYC4vePMRZ7GWhklXDbwxHgTyey9yWMNQ8PTnknN3wrnXFZ+VWyeYAxGZoQwFgbxf6cNaChpWfZWZrTlVktGW/pt+yzxBDowCma6n2GJPvINLcZcx1a32TghyM1tnkftksMNFRITH6lNzbjgcADKiGLHsbpU1zBku0QL5gHqt8uLX5RH9Ml8NwvHgzdoNGUPOmjhLerjR253xIcwZdnDY2eMXetEq1HUYBVG17MDZrU8T+ZbORiFQ4aURQbgpL9GMogf2GM066ZRiF4zG93/dq962AVVpLYTcw0kcYK/M9ffcv7BkzT3Iv1+mbRQ+gvdt1kB2XCO1bB6aOuZJo68N/gKD8hLXZ2hEQsTslED5DPhJjCREH4BNnZuUWHAmC7Ic85KRiO9srBzBmiiFYVyk/kJIOPut2Z6Ryk4GLg12T7kQYO/BiGkWiLEdL5Bmk5NSSuquoP/2BC+pliXh9Vja75AgexcWWtwavGcWjM7KyY3VoOFdLeTDvHBitP6F9vT8H+vak/8e2GCpUxDjTFkDdF2Vu2slOwvhm8mqC7Pp2UGwq9KSQnvWvebjbnAcYWijUwQRTrsZA6nzkkzmLd4KJ8yZb9cQ09lheyHKuxY2GYyr7lr7snjjnEtkiKRLl6cgSqA/L4IIqUbBbNw4j5EGmX/Cswdxx9L6TGibcJ8elqBNu17ip4BQb+6h11+z8Td4THfZ7ON1yHW1re7D39ZKNndJhD4wmWgQbM/WeAmvcRb0prVJKs/TFoyq2Dar58ou/AfYDQn6fyl0xdDIBvO9dDxjzvGzDEGMq4LyolQBjELGlfXpugeMN+uiPn5ZxzCuOpYy/oqnIU6Ga8Y96W1d7eG75Yp6atYZd6zkrRokSgVptuen1cZciNe6OA=';const _IH='1c89949378232e58946b90251d502808850940b8c1327f3e7c5bc52e5d2ef8ce';let _src;

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
