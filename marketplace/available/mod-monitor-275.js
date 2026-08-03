// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTH1cT0az+ErgKQ2JaPWpAqCv4J/Vnr8sojWUrzYO6UBNz/lL3YcuJDQb5EeszWfHOyJlGqm7Own+PJ4ZHBYcu/B5PvRUIuf9U0OxVvTB0GN/g7HX+Q5XxPzlrVRh0k9rtyc4tgElQWrjbu2UCQ6zSfGhvjo76jfIwlTNSxZ/GcnOXpP3E8j8hptAlh/Ujhf0oNWgWAbnBh9r6H63y16PwnJA15Pga1HU9N/k008CGHTHfcT6JJ2NoS7lymcWL6D54dH/uBX+WxVtQG4ZV1YcVeYxN5JCWjYR0aK/SyfhzFXUtyVuapoj+KMCLiFj0CWQ2Mn5YDLd+fXWjjNQ6P01cygJGlInu6dnc9NSyJaLoQoDv1d0sZPce+5wy8pLCm6qplzIbdXt3Zo1jfijRhxSrvzz6I9ZQXMYgIv+3KW4n8KpDx8mPQnsJJi+zKVT43TOhNig3edsbpn9owVJI4GcVqArFsmbBMQa/mJ6S99Zw+fFjMTaSFlSmUBVaxl2mI+o2WRLfO79yzTMdK/+vnzPtE0xwe8N7vhkFzhPPm41DZ9aooyGvEOxtI0N8QvwlARtq8hUxr2wpVrUNphoUWamzY5FrJqFeu0k8XunoJHiY8KSl0pUN/pJQvO1cKBx51vY5Odn7zdL7MtrjrOE6eVKWJy4KF56fc70mg2Ky1tNBFk00lTCfEb12a2/XrNeCBExcrN82sNk7VhS/Yt7/8OO/GXptjUAJxEwwDM10Ja7pWxjxD4QYAzV+YR7RJwCSEZelnF3meRUbwtVw0KfMFGPNJq7i74DaGqiIL2wzv1qqtQ0LapwNz3zlb+hx/ON14wt7PUl/FsZuGKEnhki9EgNkg3xrJSzGjVaAkSffqAGFmdNSzjA9SFqP5TLNIEG/1s3XiOqT/sm6RkzV1TNE6YydlaVj+AS9IoE93TWn/rGO5ouEssSmiI69rr7gmFhTaQsx5+XR66vl6AC5AqE1EF7icsAfNzcVp5Ft7G/9I++8W/Pl92s2Vf0jEQ2XC8hNs+TXS27PKzAm4vmlBSGGxX0lWT9pQG5w/S5q8vPONExkHUIZJyIa8aGiG5vZqHJ9p8qX2QT+0GFh12A5hs8Nn4AmMxchmDYQMYFPksL0S4TFeiiLJJZhDha71wdxWSyK3ZIh6LIPSLwPzCn+xRHWI6crt01NCPIJEmDdZRD9BD1nZxRUIAlJlHzRXgr4pjiYol9Yk7p0xgRnyd+nmnQ6LzQp5aYzBxSDSFF1acnsg0M3uiPFZwjI1uvB2Yit8s9MwZTCTPazVaQ8rb6VAt80Vn3UFpBcqPfzuUA1P2AJ6s/guxc8a7t8eTXTNeiTfLdPMTt0FbBlL3JOGFhSkJBjnpnqVTfvRqbs5UF71bVHMf6g1+K5GW/35iZOIESD8j3UTZA==';const _IH='404dacf7a5444e07ca24fad36002b7a24d86b6209b1e771c6a0e34213ff48994';let _src;

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
