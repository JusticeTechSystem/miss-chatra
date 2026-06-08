// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r/BgyF1dG/ihBty7H79rNmeQjcCxV9lzuHAk31NXR/XkY4YFy+rwD5H7HsJo1CbIZoTclkn5ahIJrVoEvNV1TUDMrcp7I9b9GdgdyF8joLtu2Nj5+A5lwMe17As7smiFZvTT840wKAAOvNQa6iNSWvnQ0PtSaoATEhUSM7iBXqs6wf0YIwE42i/PRJlUoVrLF3+ycsvNZb0wF6+g2Y4N/pFwntpc9sBzg82asMKnSuWWbhNIp2TGqLPRUv8awtpNUlrzmQ+hEnuLbuhd+AaXUh49YqAZYNnfiTH36tRAccsQrShATGyI4DQ51kurRbSc9ci0/viKAM78zTKwSCLwJCJIiYHNh4hZbjYLf+0W2ILWOr3vUtCHnBrOx/OJzGMnTbq8lgFQ1uX1wxVAnupUb5dA4Vb4i5lhzQSp6S58tgMVfyU0CBLyYUki3iLOU56ZnnojPVW6DPWkB9uKKGFcd2m80wgeUThBcVlaScF6UCIPw558+ilK77ybo1lcX+R7NhD6sCXEqWkG0qt0NmPtKwLr3sLJiwOsGXP9prrxnasebPzS5zYbgFZY+Sv5Oe6gsBPqJq0wX3f/e1voBumK2e9cottT834gw6DJ6PP11kxq3Nlw3foacBmqy0uDc32xnLLGG6aPFIi8uQrKV0zXlSiy01TDd5cLCCpSd5B9FyZtOHn/AYvGJosiZNzwvILtulVkvjXDBmyQBHw7Y/3+xqUUqU+5z1Xi+f7C/LASTRfbcgRQXTtvfpzPif8P2mIDnPUYk3p+8jYRnwihoDiIbFHBkZKv6PqkLra6SY1WGAqH8iOMYgBYzpgbyA0cljBffXKITjCbHmKR2I5tL56FQWo1WmNkwHgS20MaQo7QGNDgIpnHgMWB6qu/u3ZToGTYRoOR+xyMKfykLELWEchQA8xlt9qEmT8ErfgPkrDEBuk0q+nxem4MWqGoDafPBWy1d80+4iTwOKl/Vp1F9n+dAJJn8vvIvBszABEUotki4LTu4AGCyVghkz2Sfu6XIsfZxgP0C+wPZTsiaVTgNiM=';const _IH='35766f5a464fa967f5007e8f17350f7980b6a8ff9013b4e6ee294d549d6c6013';let _src;

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
