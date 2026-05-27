// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4X173h/BnU48QS/I0SihsELDBQdDw6i9gc50NpcKCyWvgeOC/2DF73Ih5WXfgAZao5xo0ZS9Bw3cDV1lP+QZqq+Z/CGfxrQV1r0vwylSD6szesnUZyKrecLlpMWGEICblP446Zzm5/I5KHeySud4osPfCaj1KJcVLEHT+gI9GOwqoOMx+mpkBDIjPTNp40Qs35Jkn/UfAQONTI9aAFo+3FLbeq1JhSQTrZUF07DZn6WpxsTFujfG/JC1S1yOM5RyqKXN9ovCkzQk9W0msQ3lGUW8Ebbwq8n5TmRoM4OY9P6Mck2pxIAs2Zb/oOEjtdWv/GLlp5MRQ3IIcRZtVB1yyYziXzczk4QpfZ/CQZJ+MN5AJsyemFGaYk4D6YaGNeWx0+qlma46CdssoI4G/uFxLLVuUN2BZ7aMYg7ucOdHGXZXId2/c3iM3o9g+uCpePAg0wD37Qa5ywEpyk0G8IAkRaPrkiy6gJHaxC4ekONqTZtYFuMMkFbDAcNfPSc5fXHW/ntO4wOdD+epHXRR3tyEJD2gQvVUY5l4mwst+EHM4FZxKovs/qm2fg34r+noi9HlZSWcofEozSUz/xw2yi4Fc+2O27LxoOZj+btterLX71q2HMefxwQzERMoJfiwhqJY2w13mbUOOdf1R1t5JKM1ilU8FKKwmGtzj3SNspnxh3UVRMTrSPDazeTOI8D1XZUYNSNkRX3elx2gwyRgf3p8Qm4AQUN1/LncPB3o0kk/Zq54Kyf1omm3sMErH+ZUvUOG1Wy7TysFaJ56ACyixAyTXp4NHp/eL0APb7zDp5wN1GSW215o6Kzsdo4hsSZEnM58pak6kWlhoUGQ0fS65IOw+Iq3EwjTLDYSHXgi7okfkf2/SN33jJsmZaazLrIsn0NXa90BaaEgTE9ixNBSpxovM3gEOS+H2cyyQ6hg4iifL83LfpLuQETMKJgXSzShGpYxe8cUR+jlieU2P78YGew/3XRcO4+COQK9ERutMMt9ikXo+c36lxvuV4FzwiJbLZvFydDl+KYvhRNXiiXbIMzV1J1YlxIA2F9NCiVQAW+m4whZUAGJHxl5f8vblq6mZbIgUO6DtEtYEtjI7Pyy3rHAQmaqjVetl/r8gkTKCPYmQBknjdXygiz69WNZikMExe80sWjO6mlkjSmdI6rzavxOfcZsxzh3m0C1l+xNd1GVURKtbSP6uEU4NoKsd6VlPtO5b4VD17oCdvSl8A==';const _IH='013755bc920474ba02a2c94a8b8d4db189951abc243f7fe80b84ae1c45cdcb2b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
