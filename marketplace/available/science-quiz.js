// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1JrVP0Q8/d02A48IlHRlWqz0GkKGQBZoPEU6I3QlQHbJ8Klwi7+kVzRCjuSTw67PU7pfdSuYCTu749XliaoPigwHM/ZfrKvpHDrcJDKeaNsPCmJAKt4qZvuytZWxVdhNjZh34rXFPapU+LQLRgJFRVB0lAZ3/6fYeU7httIkNe91WLl/4zGWnUqT5v87Lg3841LOPG2PEiqCbi8+iGCRWUDUWXs9/yfTGkcg4oecXWMzryvVyaJLLMR70ccbcYDiFnnAe+zFKsmgZQxwtK4Wtkmm77w2ddO5oC56hVgijniRXHZWb4x3oZk9HWQ95J6/ZCBpm9mck4SJmX0Ga5zvNITZblMZiKHfpaiiO82emCyFpAG9DRVwxHlCsH/+zinV6w+7KNyIooBv1FRh1B73d0pdWyhprrVqu5dcPo1BZ3ZfpDZII8J66pQePEnrdYEjEJ0CYi9hSENMoyd2MZTnBf2aDNuBZI6ddWDClX2+V3PDgFwLoLL82p0vsFHTJ/AgEVi2vTLMdz0drQuhHkUso014DaVV0c9OaRV5YxQ+18/O5V2f4UXL5k6LJt9nRJNKBENBeYBz8d04NoEYKq3BrL3qoXH+Y3I/C6mvlOyOFaUWVRE6RZ9YfYE93gcO0VoO0ACQjQT9mh1JBJMGrRiWfKGvCui3CDEAmoIwfwDcDRrEO2Z/Fijx5u2aQxrUp9OSzPbEa2SAACOQLwWB6OENzytzpQm+lCbi9yC00DSTu0UehMMHoCT7TbdgIwDXEBmq3+i5mV6u4uH8TebiQs+P9EG+raKsH8Kgb+tR5Sruimdt5lSteBwEbwRRUyvb1PZy10DzZ2zZlZVwyTNq/Syyi42rtzY+EeL2FOOCWAEWeHdPkAzggx4bbn8wxPTpy/nXRoRt/dt+zwPLAHeBCmx1zj5rSJ28dbgYvOg8BT7B4d/E56Pm3dE2BR4MJgEh5x4FjHsnJwPf0vZy0i19c7zul+AFiCIYzY8HUJ1oAYzV5UdCjQUMNDjRZkCSI5KqRquWJjMj7EwcEi+H5IBGQ7NOL8HqYEWwbFav2camyveetAmhJcl6QGHbMghumHgo2vYTs4jjhNp77H25Bv1yT7/4zYS9308BM+fCNnJFpObNZ6suFahXF6qUuDDMqyXgsHbtPGpjIpYFaB+yvXUTvWRAWEh8bx1svzFIzMZQLgitINqhdkAVyP8mqW916knLzWK5V4dI5LmvzQlnbEDeIOzhlC/AIcfyXP/4KG15dUh7ewv1OnsoAb+60J+0ect4wEkT6N44UOGlNNYk3Aoxb5PjZOrLfvqqMj5V8mAzJOMpLegK5lNHmFTAsHn9fd4JBSQFz9rOpzeImvgKsK+BnhTj+gtULLSnjg0rED5jshzFz/XAhm4iP5yukL8HCIhi01isdsVpzb40sxy5bCVB0O1l0aPtM47LbpRWdROBawN0Zw==';const _IH='d69d1042cf8289166004c709b12a63b444e5f4391df8f9c90db82fe24d02fbff';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
