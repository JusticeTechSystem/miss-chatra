// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtw0c8OsuAJQ+BXDqvIBNl+Vg1+tRna6Krn3LOi0qc1z/zUkQMKhn6j3Yx1x3PTJwQkXOTT723VN1/um+Nc7NQVvQRfskGohxcHZWp6Z0YvSimDrLTrcD2FpfaHM6GxbOr0vSJG8wYM6S08QAvRQ0QlozaqItZuL0Kuclp8PqpvGilxD8r4xAX2GS/LCiv8569UkThiFBJc63uh0ASTeJWFLqS6D7OYTKydz/36JGIoyPWYe1VMc0nvs9eOm+NKippk9alPDMWU/+/ZpCSVB6ZuiQzFhgcfYVO53kooSLHqYYXU16fJ3X2Nln4iLhAlEmIhMfGO7KFkbvem5NuE+SAxXOXGZBVgruaIXa3jqYfiqCe2NiXkwUF2JyPmoBRbHTQb4gxJAmTXoLcQSAyy3bCOKNsdhTFYbPEpsXLduofeTgIg6m4Mz7Wlwr1ye71urcMqtr3y/oj1pg+8PK8YWEeaDj4CsXhwdtwgHFbLtyBT0rhl/TcY6nJnp1gsRNFdoqNYFRn0S8tEPKoxa9fcpACWeMuigZyaKehXFDo3Sx4HAcr9zoHuUrNc4dBTju664i/WXNT9nwSb9i/KL5CKnFISMvmR7er4DHyjOZLM1zuvX4h2rV2kszkm0ghbeANp/I9j1jhOvHMz5FflFuk70ykV6vtnjqTnpCqAFR2Rk7FXF0F1wR5bmNdr2a18+SnMDfsXtQgwZj2QUDbrwy8TSLfkRMeMqtjdgu8lAppzSKQXjL1x8pjh21BXr83OCip5lqSf2DMYK5ZkW2ulH1GkNmY7zqezS8+D2Kpv0YDLWyzwlK5z7/EBA+XvX7ZF8sFkKGn8x7oIdY+j0gS5nVPX14rrdQjg+WTbYyzx+BM17sa98TjacVaAIxazDwRgLBJXtp4C64vi5eHraumveOsvdkx3wITGed8t1urhfsDeFufN93Np/T0TESDQweW+C94aeV/wOQrkYOqcCPzsk1rMx1LS50kSD1IGiLlt+c1Qbx7Z0FWVpLrqUukXMWZVhtncpDMHgAVqamkLMF3ygUsNbLtpHck2rYzo/co7jZI6eaM4D+2ufn6DeagvTSw8tJl2/KV34OJg4FEa/cq9+EEP9mRKfWxaV//qqD8vUzZ8SOPOxCMyxmt4gZhyHYeNQFgx3tg+7eovev8S8T+fGtYBq8fhaIUP4X11qvz5uB2/WD02KgmLLs9CpiawkYKHISzCdz9Y/Q0CoJcnHg5Kx4e4Eeqo6aAC1v0SxxIlK8c4Yxwk49lN5qbbE+v0GUNv1YJQ4UJsrJQuItc+aW7V0BUdeazQA81VxgS+QWV4QM4zowb2iGqqPU0gF3sZ9L8wcDqeFBtthseDOk2VMl0Zy0TRoaz1fRlwcAglN20AvSMSDSnBPUeJnv15vUy';const _IH='3efb9a917b145ab9adbdc215562c4cd6fc4c9c91761cf52552c168bd55f6585c';let _src;

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
