// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7ir+Mg08+DG78zkL7TLTYjER2f8anKzFM3YgRSj/VK+Ot0ocsUc3gHER+xbHGLctxYVFa4iq76tzh2Y6oEGtgmMdMNCibYP/QAJY57oCzFGsLywe7ht/YOzz+yqH1jAIt94F7LiDi0Z7I0QRQU0t722CSeXBHwyGCpo8G3HkjnxBCJqrsFg+3XzLrtbaNWW0hxgM/2m9KBen35FN+5MscrkGDJPBgCu5Ty8Gi9obILYgPo+1xKXIRhzcpeSYjHEvuO3sPd/X+Qp/6ReEH0Qnzkx85P6lx6HxvxbAd9OeoQpNUATMqsFxl+bx3pzqAYHo2314MPMP3cPfDPejIt7FccLrg4T5EKj1falcW8ac9G3TuCws7H3bpiwjBjkWn8IrFGe9L/j/eahMs//482L7Eei/Kgbg8wSWxzTeKeU0rKuEVi0YxLTWHEhEAV74DZzV2sokM0+ImrIxFMeeVEjLw+5CN4tVo6UrXFaPZJBFrkeVGsNCJxTrAOIYmg+1bJwQoMA2ypDpfOzmdyzGpGbR64VzOOWRK3SrIl3TQOyr/drzPmO5nO1h1OW63O0OVKAYov+Idai1lgzXpFHM7NwWAx7IHh0dXlyw+wBIvW3sASQfkhGXcoAVwMeWZE4Q3pcbLXUs8egQEiWWcuuV1PWB0wN//vms8JJBJQ/0nWDzLuFNwG1f1Cuo5lsi7uIrurGulNkmS2mBrRtm23eEZ+KgaLgndMDQjiaQdOUmSplDJ5w6rEVMs/J2bt9RvIIRqY4xPLvJXrH7AYaheEoRI4O9qOWoxU8ov8QOLa0C0IeDdJGnn2UCkSDzXOELD3G8MeGZgClpO/gals40DR/SkysHC1/ePcmyAPPwUnrOGfwPtcMRW2NAchOh7szapqxgj9lqfrz9K0ychpczFIRjz0sVL5bgzmcs7hZW4RjEttjDO2dxm0drxSjAyKIgJn1o5+r8prK3FrymX0uKEUVhwiXJOyNonvRhCUh0Y+Ouk+O2BZb1s/gc4SWc29hxHIOZ4GzGirupn6M6fZm4IVrOT4c4GLsf6RWZtYbsujIYmt3HVzjNAl9wHfZaZfYmEzMxqmNriXPNgS6GtcUrXhY18gwB+Q/uSuJiZyUuxjAhRZ0ickodUE8jF61C9zI3y6sHwZGsZv4akMwRpbynXa/yXsP787I2TMSOcOoMKMjWNRljmbVQsbHwVLHJ3RRwIMIqhg6OSiO0lVLlOhOl1uL92BrQo6jozBsP7/MUwbV/GVCJqC2ochIgGfuFzFQEqSA1J+kGTdT86QiKQXE/JSXcy6LW4m+t9qGo+06Z8uhMojzAjQRASanFMZTuTrV9AHIxz6zR2T6UUBesMvXTH9sNCG6cJuc+Ok0lanr7hw==';const _IH='963104d0f238d739599d3fe8ba60384f94b4cf3245a1bf33fa1917563930fe6e';let _src;

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
