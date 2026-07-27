// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZz3Txi0vexT4grVSe446cCRyAxhMntYlx922NaRcj0zqLKJoCxOJS7+pfSmFbcqvwFOi+rvFBFwl/xP1cEUYeYLq6/8pryhN7miXXlNC/pKKpSj+vaIUhiy/U1Sc7wDohqCGfaX2+nUE2Ff2mf4hgYIrBAd0g0+9SLw5Tz9V9PTR1WMolGBWvOydFsZ2SOs1+/foFKzzU4ZtBGCLzHTrLG7DvU2GWhjo1oU/R0O5UkwHOzOsQIgu25yI2mVi3Hg9Zekt3tYtqT8bd+63cMbfje6mPlqo6l0FLTMhY7c7JX4k8wbGpbkdKsKeslJjHd0hJRcFnWWS94zUcF45DK+aIh91XP5x9j+YFv0lcoxc6LS2Pb/IfU9Xt4bUomlkO2CLdyJYaeStSzvJbh1I3oYnPtKjLTU81yOjtEHCGcEwI0nSUic2izDSC/uUctZUVsle184+mppNbPJToVDG1J+QaZWbkFLV7mkVyxyj/3iSF9IyRcQrlB2p8xlXBtfONAjNICq0tY89Mu8r00pey7jt5qGsKMgVTdNrff0vmj8tpe+XX4Scjy7wLFR5gLj9jM5YYOKG6mxl9Xic+Qbf+IP4bkIMHKPhh1R+dEiTIIhanBQlG0Y96OJ1AWF/czwA0+GqfzUheIIHW4bzGaSaSfcRvpq4SYVOMyZe8mj9CLCg+uHiXxxpXNOcfZpZd8XlaucSx1RGTXNVWtgV5aciLzmnmtwcYmyPHuwzfcPKKnkTstTfnLZq7OQhz23k9xDTqB9xnZKkx+2phdriSGgwHXz9USENTwajw0nsk7nYYUXZPRov+YK6wfW4Kbm3PMlgYYxzVsMzppY3TBxUntCoh9+HYfyQpQ0EC9GpfR2F2Bm6tPAWRFv4UtNiVILGuvALqetLyvTSTpJ1Qta2bzWbRsCMsM7S9fO5NLs6YT1+LtuFUpOfG57bg1Llpg1bKBKJOiax/+Xizx4fwKN4G4PaNTc97C9dNhL9KotL21lefAyLYN54pr0r3YWKG97nhs6/0zYlOw95v';const _IH='11bd3c96c5a3c3768b030c14a40b5400d92630963159809eb66857b20d009683';let _src;

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
