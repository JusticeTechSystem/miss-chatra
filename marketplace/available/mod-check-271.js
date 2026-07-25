// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaWQVdabAlL+ddGWfRM8rnYnWMubdfJyufTF+JjT8mbA1S6hUuGicVozMST4BPkr/2jnVKyC2klgJtOimY1C3b3TWBn1m0BXlwaO1mVpcSBlT7jfk+DpvookrhqZ1c3yXDZSCekACd5OugEmBYS4gFDat6SLxwt6JfHNY+U/GvrsNQ0LW5Y5YrwBbRVa3D1nMRFRGxqhCoNN6Qhi8uGcdKvKMm83I0csGQGoUVYZX3l182EkZlm3QwCbJyy4SEcw45yF+QdOliQQbkShS9qec7GAKgrQvDlhAyKA2s6cy/Lm+pfSGNs30gIVTUpwLy8nyO9NJSXSWvJw0xwQgBVxEmsrBFnN7H3f9Ejej87fDyLyNC2UO/lNjoIBoNMkazj90DBXehDAaqr3b1wouLPvwWMTUMLNdbw982wLqZH1Ul7AwBdM7Ps0MZUzHh1n+05Du9TNeBj3dv6vE7e3+Cf51Dx2g0klsbNXWZBLDr9PbkjFu6NYRr4Z+2j33EmyZAvb7jM5BaybZ3KvT+luaxtsqdJk7ywOjivTP3tUXfa21PfWhQBZeMk4EjCQbPJ2edHuJr1ru0dnQWSy6+b/uRXAB4Ye4h65n3xSAW5VweY4xIK+a46ngEAXKDdDzWz5ClygOGApVmk27vHnkI9bhEsnUYCWPUERxa/XLVTmTzPKp80xYdrTcemRHgJ4NAhPWuYZZEMHvCk11mCEVRPYNrv4xiWDr+sy3DqlK3DFO2C7OoxeYxQO12sYP0g/SU8ys5t33RuJ4a1zVpWNJ42a/Qonz1LuFPwfgGHvARVQ/LKaQUU+8wkJ2U7/U7tfot5qkFMndutiY7xlekMRgyru9CPbXesjgwtOen8R7CTvlWSwsv1+IjCM2ceZHqrIBIEwuMz1y23tqpS3nexSuC9urWNZsY+gdDbk5DT1tqZZjVaId8U0ztPi+TksceNfLeCY5kjEMncR5+hTFrLOmk0+6ezL5EXik6emgo/aFxkDCrI60+o1z+h+8HGnthB7wtQIcL7Rb79bQsXlDeK+7KmygZHY0uBlH4WPcDiJo7KrSUFzP1X2Fh1KUcFh5Vv+meo6HU21trniqVXH1F3MDK7WfhOhejgz8NLUsta4fofw35qLj+ML+2mTZZPhOYsGRmnrksfpzzzJVVqtoSn4YTEaCm9snQh9Tbor7KdmuaKX0/w5MCZeXEWz8pfKMxUgONta/FeEdhQETeM9gK/Ies+TYSjLzXdv0/n1lvCW8QWUt5qfISTeV+3un0gUa0ZWeRN3Vsn3M5I/gg3hPxkNJ3xp4U1KV5pR1Z0KA7AzZxq4A+T0nXx6NjUMSMhmMewWeC+uufI1Z22Q9gprlXNIrBUVBYrAla3E1JTP/ovTZoG59ojdw=';const _IH='f3c163ea4f80bcfb16ddfafe5dd11e40468083329ec5e04f3de5e5245c79b31a';let _src;

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
