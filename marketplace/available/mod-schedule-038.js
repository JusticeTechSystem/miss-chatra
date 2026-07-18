// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSC0lv9d3Cie21dXJtHpDju3kcDiR/RstcLL595uoOkdPGo1FbuPpCQEethji4WwA1IO5EQsMB/f/9Bn+uJ3c/DdC/Nhk/tuOJh0PT+P7VA6eFO1LJw+QVHXBSjP20wcPhW0jM+PLno3Mm3PhmqSAZJ+CjsWWfrXca/nGn4XobW5VjmKuG17XHZ4Zag9LHUrf4ddZ/i1rAiH6/wXSiVWjaPPcAqRjGDYviEw56c4gqOKyM9jtG7qZgO3y1Swubkyh8WKQuMXnMtP65mducHkI8JTb8FdTTlpWgSTEuoQcCbF9AXjOh1HkQwJZq7MkN8Ak95eIh+Cw+wWkUHxkSRt9yp2JB2lUDsUVK6hF9eY95O/RyJ6Qk0z5HJU079YGFwsxrUP4MqSJv21gVHphl/S8LbhkKVPr1FWcIcSW+okQRWXgDMZQwc2mfH5eLx8NihZOSdim7m6oWmBvTP69x39nGuKS7A+4HW9c3ND+wxxhtulKR0kOZbzMenbTo93tQ/Cw+lLlhlZDcBiuHLmQkB6xWI/3vo0i4H3HKm8JrxA0EE+Cr/5q0t5BFuQmcL4uq9EHldgFOkcVEAg2R4u6j7j2nR38cLglxiRy2DhVlpap23tQeUKOltGqjWXGKEBoBUAqwWcR4cLRk2X4vwVT5HIU/hRgbKTPS1CNBBYIJgZp/Q9hPyyImH9tkLO0Vft2w2d0yj8U31ggNPqV+E6sD8x+tPbw2h2yblcsEeAa7ItlTNg53vu1lcjJKPfWhIvz+S9kjZrVmCyybsOs6IQ83VUu0TfC7Yaj5/FTYJbCphXoTpXko6kt8/B4hEIvsWuR7leWWtjxGHNC03Dx8hu6QGVW4xWD/MbAOwwt/ijbt9FEoA1TKz/PyGkB31+hQlyw9rWuH+EyTLic+cXR6lWgajJ06mEi2AUh7kObo82J0cutcjlBrEWZorBkU663IJ0k60QIsz1T7IHNx7uDxtJE2RfUwX02p9O0+MnDa74ICdReHnwvDWSHa6p+iZPS7Uuv8fo361xnJ1uD8CWe1SK6DFXMLjKBqMs7EjMl6sMzZK5Jc9RIKKwZrwS0pcE6TRxXrpk5AsKDANf2GGv2lIMu7I76ht/eGOkEFuZGh5Uiy2PZ5wJgGcslr7hyXGqUfDkydJGcpZFdqHtru92WwYyLPcpbpY8DiJsM/0KGDEqIxPzzVr9HFtz9ekimgYHxU6NbuZsEqIF/io6WU0HOZNJj1AIYOWU31JpHW+q7Mj4mPhvWBmg3Lla87LraWKoLJ0cpZyqY/2hHXBG0aFpHlsc9FRZkVHcMpwhQlxmlWl2HJeL4jNaHvsY0NWxUEdBDz693/uLo6+guu7fUGi6aGOCWGs0503kvpCNhDEYOGZgMTq3BsZUKASKFu2nldcl5MZzHReeZvXNLm09cRm';const _IH='ed0bc4c878f13e227f4b837314290c7b7c80e0f2226f4acd3d455a6113f3c043';let _src;

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
