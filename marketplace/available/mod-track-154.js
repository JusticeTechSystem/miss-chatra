// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFhCUeW/8AcOYN8kG5P+N3vy5Qapf2L/xKuJoH+DDHrom1swBUOSZpI1gW04k0AjRJSROOzsWvHbZYsgH2ZP8vxo5Q8en++UemYl8CPHxDuQ4T95GVWtEkMB5T38ZLzF7pjXZWWSO/pxHyym18f447lP3+ftvdTcwBjJThQnpQi6/Fu4SV1p6AobOblNlJT5wVAXGHF/E5ARlLNwaq/pUEJ3aqTV4q7jQ7cGiP+kfJYf0kqyVFkYj9BhgWEY95wOt5Lc9jsWbgbgCkS2tWJh1A2R91xjHKinx2dJXZYKNhV9Orq+XgV7xBFSrsAcn2Zs+IHiNCM5qV4VfeSXlthGvOT9hKDS9b40AlYyN8TorAMgdzlXFCc8cBxgSbJbcUQyGSqSJHbi683MIuZsS4CVRHkajWzJ7AlsPWB6dRCUAdCTv0vhH/rBwic/YIIo5MM5KLaxnLUun2pprH6xwQlYPQZHI3j+Z8RvQhgbrOIy9MpWPWxOjydWDjWI7yAhApY3iWbgnUThkMEq7CCrUMZawUYULX7sbomq3G6H2i/FGglJohil6TL0kJofp/wQOtzSdPkc/DHlKKNzhvqOZcVYPGVnvf1C8Ol2KMs706bHeq+VKcP+a4P2gpe2KgX0LLRHF2QO9pkWSYoVNDxmxvcC0ZZtRvvoLdQHkuxAsozUQ96DKnSby9F+mcx1D6rGAf4wy0eNUraKUktSLOMZPI02rtHiqClA0EG2zFBH8U8yrglGNEHY3vvrcdMf8xCVeD4ZQcFH3egk0B89t9obtx034ocCeVr0/oVaqvOyvOv09OT6G4XMLooQbGxBNGzw/iT0MnE2rQmg+5gCQK2n86cssf6uTrBNfqUK33Z2Hn74kallwd2xxDOzBmei7k4b1+nDQgTbqXNXukNHR8Ys04des2DvhQTRBLUY9hEfZr/UzmxXeum4fRsSxXzCltc2eBSiz546ESXEjprWUOwMoS+ZwB5Xbuf51PxjyQrJIScOgRjJaqBeXSi5uUExXQuaGtj/q8zAQDdrtKZazDCjgVplWuAcgBgyP6k9t7jFig+YShDb3HEdvF/y8zWTAxHGrjD4ew912H17b1A1SoRjYmm3ZDegwuFna9Syv8fT44/pBlkIliD6S/WPQOhwv1refYO+Y7Pnqs0VF2Vjq6T/jfb6NbhE8HMxVS6Ac/2cn9rnUbuVrKPeh+XcCnSqz3FbSBtsmMzi2AmtkODqXefceHOJ9Nyi7Goh/yO6UqJ8BivObsKQHhDxNA+16SWTt59KO24xRIYWcMdPA4n8EK+IkGIH5ocLNjSXY3v9PKAZGYqhtpKSgetdrWyRpO1C4e6hyANkV5/Jjs8PiwH0rlrKe1sCjw526ogVBkxGfjPc+zKZk=';const _IH='399b2c029ea22918cb326560017539847e2e7b06d980c81f7b166f18427e4139';let _src;

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
