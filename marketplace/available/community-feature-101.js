// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oP4+evhCDYzOxjwlaBheKoeP6uDRTjc07lFDCtGbNG7zKnaxLNfsHyqg5evsxtJFSXPv7v6Ts0qZ3X6jChpNm+WQfmhGTApSvvkIZhIcxJP3vW+Rt3xFIGL40qhS6nGV9WaRdqN48mqeqStawynylzRGlc1ILEpQFSk/UyhAxU586u4ku1BMuY15Mfz80zEpSxrh08qe57eYmBa8qAa2JBczToHmPXxYT5i51OdWq6wKAgx/XNFepsXB4Qzfig5NFA9QiaQ+5/KWzLiN7rYtMLkJmC8ilBp3FLpKADuADRiFl99ANTe7uRmCOgymehz2NfEVIEJiWQ1FjdpCL9fvDOhVp83SNZYeioEZE44z88tp2/HLb0KqZ8z9Fi+BSbOpet4eoYGRt7XbCQIf9QgJ/l1hEs40OvqMcJ76X8c9x+h9gaNsx+Ia+znXi8uevA8SSs0DG3uDB6dlrMLJAiDyqb779PRHeM8uM/w5QRl9ytTaYPU9FtkLrXd46ysVBpccoFEBSlnNMyio996kaxvyh593bQmsV18Talbkyt2OQmpsHE1oe2hK2dGSIlrEd6B094wTMIx7CWxgXPeS+5NEELHFWygzD6orD6NWzLiN/ZsERWt3zNaQcK9goutqXudEwAyvKwA1Eyenf7ul9CFQp7So0YPUXk3wBZN3M+77/hdVF3WI3dUSdrPi0GzB5liSXk3ONVNZGUGB+EmKoHqrontWIn+DF5s+';const _IH='b837d6cf2fd076f5c920baa3e0cfb574fce612119986f4ab398b8fdf4b8ea6e4';let _src;

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
